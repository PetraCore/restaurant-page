class Item {
    #name;
    #price;
    #description;

    constructor(name, price, description = '') {
        this.#name = name;
        this.#price = price;
        this.#description = description;
    }

    get name() {
        return this.#name;
    }
    get price() {
        return this.#price;
    }
    get description() {
        return this.#description;
    }

    set name(name) {
        this.#name = name;
    }
    set description(description) {
        this.#description = description;
    }
    set price(price) {
        this.#price = price;
    }
}

class Category {
    #items;

    constructor() {
        this.#items = {};
    }

    addItem(name, price, description = '') {
        this.#items[name] = new Item(name, price, description);
    }

    getItem(name) {
        return this.#items[name];
    }

    deleteItem(name) {
        delete this.#items(name);
    }

    getItems() {
        return this.#items;
    }
}

class Menu {
    #categories;

    constructor() {
        this.#categories = {};
    }

    addCategory(name) {
        this.#categories[name] = new Category(); 
        return this.getCategory(name);
    }

    getCategory(name) {
        return this.#categories[name];
    }

    deleteCategory(name) {
        delete this.#categories[name];
    }

    getCategories() {
        return this.#categories;
    }
}

function generateMenu() {
    const menu = new Menu();

    let antipasti = menu.addCategory('Antipasti (Appetizers)');
    let primiPiatti = menu.addCategory('Primi Piatti (First Course)');
    let secondiPiatti = menu.addCategory('Secondi Piatti (Main Course)');
    let contorni = menu.addCategory('Contorni (Side Dishes)');
    let dolci = menu.addCategory('Dolci (Desserts)');
    let bevande = menu.addCategory('Bevande (Beverages)');

    antipasti.addItem('Bruschetta al Pomodoro', '€8.50', 'Toasted bread topped with fresh tomatoes, garlic, basil, and extra virgin olive oil.');
    antipasti.addItem('Insalata Caprese', '€10.00', 'Slices of ripe tomatoes, fresh mozzarella, basil leaves, drizzled with balsamic glaze.');
    antipasti.addItem('Calamari Fritti', '€12.50', 'Crispy fried calamari served with marinara sauce.');

    primiPiatti.addItem('Spaghetti alle Vongole', '€14.00', 'Spaghetti pasta tossed with fresh clams, garlic, white wine, and parsley.');
    primiPiatti.addItem('Risotto ai Frutti di Mare', '€16.50', 'Creamy risotto with mixed seafood, saffron, and a touch of lemon zest.');
    primiPiatti.addItem('Gnocchi al Pesto', '€13.00', 'Homemade potato gnocchi served with basil pesto sauce and grated Parmesan cheese.');

    secondiPiatti.addItem('Branzino alla Griglia', '€20.00', 'Grilled sea bass served with roasted vegetables and lemon herb butter sauce.');
    secondiPiatti.addItem('Tagliata di Manzo', '€24.00', 'Sliced grilled beef steak topped with arugula, cherry tomatoes, and shaved Parmesan.');
    secondiPiatti.addItem('Pollo al Limone', '€18.50', 'Pan-seared chicken breast with lemon-caper sauce, served with sautéed spinach and roasted potatoes.');

    contorni.addItem('Insalata Verde', '€6.00', 'Mixed green salad with cherry tomatoes, cucumber, red onion, and balsamic vinaigrette.');
    contorni.addItem('Patate Arrosto', '€5.50', 'Rosemary roasted potatoes.');
    contorni.addItem('Verdure Grigliate', '€7.00', 'Grilled seasonal vegetables marinated in extra virgin olive oil and herbs.');

    dolci.addItem('Tiramisu', '€7.50', 'Traditional Italian dessert made with layers of espresso-soaked ladyfingers and mascarpone cream, dusted with cocoa powder.');
    dolci.addItem('Cannoli Siciliani', '€6.50', 'Crispy pastry shells filled with sweet ricotta cheese, chocolate chips, and candied orange peel.');
    dolci.addItem('Gelato Misti', '€5.00', 'Assortment of homemade gelato flavors such as pistachio, chocolate, and strawberry.');

    bevande.addItem('Vino della Casa (750ml bottle)', '€15.00', 'House red or white wine.');
    bevande.addItem('Acqua Minerale (500ml bottle)', '€2.50', 'Sparkling or still mineral water.');
    bevande.addItem('Limonata (250ml glass)', '€3.00', 'Freshly squeezed lemonade.');
    
    return menu;
}

export const menu = generateMenu();