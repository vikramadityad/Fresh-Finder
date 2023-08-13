const sequelize = require('../config/connection');
const {Product, Category, Subcategory} = require('../models');

const seedData = async () => {
    const categories = [
        ["dairy", ["milk", "cheese", "yogurt"]], 
        ["produce", ["fruits", "vegetables"]],
        ["seafood", ["fish", "shellfish"]]
    ];

    await Promise.all(categories.map(async ([categoryName, subCategories]) => {
        const category = await Category.create({ name: categoryName });
        return Promise.all(subCategories.map( async (subCategoryName) => {
            await Subcategory.create({ name: subCategoryName, category_id: category.id });
        }));
    }))


    // example products
    const products = [
        ["milk", "baxters", "https://via.placeholder.com/150", 2.99, "dairy"],
        ["cheese", "happy cow", "https://via.placeholder.com/150", 3.99, "dairy"],
        ["yogurt", "astro", "https://via.placeholder.com/150", 1.99, "dairy"],
        ["fruits", "kiwi", "https://via.placeholder.com/150", 2.99, "produce"],
        ["fruits", "kiwi", "https://via.placeholder.com/150", 2.79, "produce"],
        ["fruits", "kiwi", "https://via.placeholder.com/150", 3.99, "produce"],
        ["fruits", "kiwi", "https://via.placeholder.com/150", 2.79, "produce"],
        ["vegetables", "zuchinni", "https://via.placeholder.com/150", 3.99, "produce"],
        ["fish", "carp", "https://via.placeholder.com/150", 4.99, "seafood"],
        ["shellfish", "lobster", "https://via.placeholder.com/150", 5.99, "seafood"]
    ];

    await Promise.all(products.map(async ([subcategory, name, image_url, price, _]) => {
        // fetch subcategory by name
        const subC = await Subcategory.findOne({where: {name: subcategory}})
        console.log(`${subcategory} - ${name}`,JSON.stringify(subC))
        return Product.create({name, image_url, price, subcategory_id: subC.id});
    }))

}

sequelize.sync({force: true}).then(() => seedData().then(() => console.log("done")));