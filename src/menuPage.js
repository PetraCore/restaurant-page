import { menu } from './menu.js';

function loadMenuPage() {
    const content = document.querySelector('#content');

    for (const category in menu.getCategories()) {
        const categoryCard = document.createElement('div');
        categoryCard.classList.add('card', 'textbox');

        const header = document.createElement('h1');
        header.innerText = category;
        categoryCard.appendChild(header);

        const list = document.createElement('ul');
        list.classList.add('menu');

        for (const itemId in menu.getCategory(category).getItems()) {
            const item = menu.getCategory(category).getItem(itemId);

            const listItem = document.createElement('li');
            listItem.classList.add('menuItem');

            listItem.innerHTML = `
                <div class="name">
                    <em>${item.name}</em>
                </div>
                <div class="price">
                    ${item.price}
                </div>
               <div class="description">
                    ${item.description}
                </div>
            `;

            list.appendChild(listItem);
        }

        categoryCard.appendChild(list);
        content.appendChild(categoryCard);
    }
}