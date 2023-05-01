import { Modal } from './modal';

export class StrategyModal extends Modal {
  constructor(classes, { id, title, urlToImage, tags, content, date, ...rest }) {
    super(classes, rest);
    this.id = id;
    this.title = title;
    this.urlToImage = urlToImage;
    this.tags = tags;
    this.content = content;
    this.date = date;
  }

  generateStrategy() {
    let template = '';
    let strategy = document.createElement('div');
    strategy.className = 'strategy-modal__content';

    this.urlToImage && (template += `<img class="strategy__image" src="${this.urlToImage}" alt="${this.title}">`);

    if (this.title || this.tags || this.content || this.date) {
      template += '<div class="strategy__content">';

      this.date && (template += `<p class="strategy__date">${this.date}</p>`);

      this.title && (template += `<h3 class="strategy__title">${this.title}</h3>`);

      this.content && (template += `<p class="strategy__text">${this.content}</p>`);

      this.tags && (template += this.generateTags());
      template += '</div>';
    }

    strategy.innerHTML = template;
    return strategy;
  }

  renderModal() {
    const content = this.generateStrategy();
    super.buildModal(content);
  }

  generateTags() {
    let template = '<div class="strategy__tags">';
    this.tags.forEach((tag) => {
      template += `<span class="tag tag_colored">${tag}</span>`;
    });
    template += '</div>';
    return template;
  }
}
