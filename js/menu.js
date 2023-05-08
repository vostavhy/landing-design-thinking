export class Menu {
  constructor(menuItems) {
    this.menuItems = menuItems;
  }

  generateMenu() {
    const menu = this.createDomNode('div', 'menu');
    const overlay = this.generateOverlay();
    const menuContent = this.generateMenuContent();
    menu.appendChild(menuContent);
    menu.appendChild(overlay);
    return menu;
  }

  generateOverlay() {
    const overlay = this.createDomNode('div', 'menu__overlay');

    // Close menu on click outside
    overlay.addEventListener('click', () => {
      this.destroy();
    });

    return overlay;
  }

  generateMenuContent() {
    const menuContent = this.createDomNode('div', 'menu__content');
    const menuNavigation = this.createDomNode('nav', 'menu__navigation');
    const menuList = this.generateMenuList();
    menuNavigation.appendChild(menuList);
    menuContent.appendChild(menuNavigation);
    return menuContent;
  }

  generateMenuList() {
    let template = '';
    const menuList = this.createDomNode('ul', 'menu__list');

    this.menuItems.forEach((item) => {
      template += `<li class="menu__item"> <a class="menu__link" href="${item.link}">${item.title}</a> </li>`;
    });

    menuList.innerHTML = template;
    return menuList;
  }

  renderMenu() {
    const content = this.generateMenu();
    document.body.appendChild(content);
  }

  init() {
    this.renderMenu();
    this.toggleScroll();
  }

  destroy() {
    const menu = document.querySelector('.menu');
    menu.remove();
    this.toggleScroll();
  }

  toggle() {
    const menu = document.querySelector('.menu');
    if (menu) {
      this.destroy();
    } else {
      this.init();
    }
  }

  createDomNode(element, ...classes) {
    const node = document.createElement(element);
    node.classList.add(...classes);
    return node;
  }

  toggleScroll() {
    document.body.classList.toggle('no-scroll');
  }
}
