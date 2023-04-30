console.log('article script is working');

export class Strategy {
  constructor({ id, title, urlToImage, tags }) {
    this.id = id;
    this.urlToImage = urlToImage;
    this.title = title;
    this.tags = tags;
  }

  generateStrategy() {
    let template = '';
    let strategy = document.createElement('div');
    strategy.classList.add('strategy', 'block-shadowed');
    strategy.setAttribute('data-id', this.id);

    this.urlToImage && (template += `<img class="strategy__image" src="${this.urlToImage}" alt="${this.title}">`);

    if (this.title || this.tags) {
      template += '<div class="strategy__content">';
      this.title && (template += `<h3 class="strategy__title">${this.title}</h3>`);
      this.tags && (template += this.generateTags());
      template += '</div>';
    }

    strategy.innerHTML = template;
    return strategy;
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
