const data =
    {
        boissons: [
            {
                category: "Boisson",
                name: "Fanta",
                price: 2
            },
            {
                category: "Boisson",
                name: "Coca",
                price: 3
            },
        ],
        sandwichs: [
            {
                category: "Sandwich",
                name: "Jambon beurre",
                price: 5
            },
            {
                category: "Sandwich",
                name: "Chevre",
                price: 7
            },
        ],
        desserts: [
            {
                category: "Dessert",
                name: "Glace à l'eau",
                price: 2
            },
            {
                category: "Dessert",
                name: "Glace au chocolat",
                price: 4
            },
        ],
        menus: [
            {
                category: "menu",
                name: "Classic",
                sandwich: "Jambon beurre",
                boisson: "Coca",
                dessert: "Glace à l'eau",
                price: 8
            },
            {
                category: "menu",
                name: "Royal",
                sandwich: "Chevre",
                boisson: "Fanta",
                dessert: "Glace au chocolat",
                price: 10
            },
        ],
    }

export {data};