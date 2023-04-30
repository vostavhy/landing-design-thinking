import { Strategy } from './js/strategy';
import strategiesJSON from './strategies.json';

window.onload = () => {
  // Tags
  addTagsClickHandler();

  // Render strategies
  renderStrategiesToDOM();
};

const addTagsClickHandler = () => {
  document.querySelector('.strategies__tags').addEventListener('click', (event) => {
    if (event.target.classList.contains('tag')) {
      console.log(event);

      const clickedTag = event.target;
      removeSelectedTags();
      selectClickedTag(clickedTag); // add class tag_selected
      if (clickedTag.innerHTML === 'All') {
        showAllStrategies(); // remove class hidden
      } else {
        filterStrategiesByTag(clickedTag.innerHTML); // add class hidden
      }
    }
  });
};

const removeSelectedTags = () => {
  const selectedTags = document.querySelectorAll('.tag_selected');
  selectedTags.forEach((tag) => {
    tag.classList.remove('tag_selected');
    tag.classList.add('tag_bordered');
  });
};

const selectClickedTag = (clickedTag) => {
  clickedTag.classList.remove('tag_bordered');
  clickedTag.classList.add('tag_selected');
};

const showAllStrategies = () => {
  const strategies = document.querySelectorAll('.strategy');
  strategies.forEach((strategy) => {
    strategy.classList.remove('strategy_hidden');
  });
};

const filterStrategiesByTag = (filteredTag) => {
  const strategies = document.querySelectorAll('.strategies__wrapper .strategy');
  strategies.forEach((strategy) => {
    strategy.classList.add('strategy_hidden');
    const tags = strategy.querySelectorAll('.tag');
    tags.forEach((tag) => {
      if (tag.innerHTML === filteredTag) {
        strategy.classList.remove('strategy_hidden');
      }
    });
  });
};

const renderStrategiesToDOM = () => {
  const strategiesWrapper = document.querySelector('.strategies__wrapper');
  strategiesWrapper.innerHTML = '';

  const strategies = generateStrategies(strategiesJSON.strategies);
  console.log('strategies', strategies);

  strategies.forEach((strategy) => {
    strategiesWrapper.appendChild(strategy.generateStrategy());
  });
};

const generateStrategies = (data) => {
  const strategies = data.map((strategy) => new Strategy(strategy));
  return strategies;
};
