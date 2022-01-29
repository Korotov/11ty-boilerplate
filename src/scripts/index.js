(() => {
    const menuButton = document.querySelector('.mobile-menu-button');
    const menu = document.getElementById('mainmenu__list');
    menuButton.addEventListener('click', (e) => {
        menuButton.classList.toggle('mobile-menu-button--open');
        menuButton.setAttribute(
            'aria-expanded',
            String(menuButton.classList.contains('mobile-menu-button--open'))
        )
        if (menuButton.getAttribute('aria-expanded') === 'true') {
            menu.classList.remove('main-menu__list--hide');
        }
        else {
            menu.classList.add('main-menu__list--hide');
        }
    });
})()