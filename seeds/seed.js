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
            await Subcategory.create({ name: subCategoryName, categoryId: category.id });
        }));
    }))


    // example products
    const products = [
        ["milk", "baxters", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.walmart.com%2Fip%2FGreat-Value-2-Reduced-Fat-Milk-1-gal%2F10450109&psig=AOvVaw0QZ2Z4Q4Z2Z4Q4Z2Z4Q4Z2&ust=1623687228214000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjQ4Z2Z4_ECFQAAAAAdAAAAABAD", 2.99, "dairy"],
        ["cheese", "happy cow", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.walmart.com%2Fip%2FGreat-Value-2-Reduced-Fat-Milk-1-gal%2F10450109&psig=AOvVaw0QZ2Z4Q4Z2Z4Q4Z2Z4Q4Z2&ust=1623687228214000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjQ4Z2Z4_ECFQAAAAAdAAAAABAD", 3.99, "dairy"],
        ["yogurt", "astro", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.walmart.com%2Fip%2FGreat-Value-2-Reduced-Fat-Milk-1-gal%2F10450109&psig=AOvVaw0QZ2Z4Q4Z2Z4Q4Z2Z4Q4Z2&ust=1623687228214000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjQ4Z2Z4_ECFQAAAAAdAAAAABAD", 1.99, "dairy"],
        ["fruits", "kiwi", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.walmart.com%2Fip%2FGreat-Value-2-Reduced-Fat-Milk-1-gal%2F10450109&psig=AOvVaw0QZ2Z4Q4Z2Z4Q4Z2Z4Q4Z2&ust=1623687228214000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjQ4Z2Z4_ECFQAAAAAdAAAAABAD", 2.99, "produce"],
        ["vegetables", "zuchinni", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.walmart.com%2Fip%2FGreat-Value-2-Reduced-Fat-Milk-1-gal%2F10450109&psig=AOvVaw0QZ2Z4Q4Z2Z4Q4Z2Z4Q4Z2&ust=1623687228214000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjQ4Z2Z4_ECFQAAAAAdAAAAABAD", 3.99, "produce"],
        ["fish", "carp", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.walmart.com%2Fip%2FGreat-Value-2-Reduced-Fat-Milk-1-gal%2F10450109&psig=AOvVaw0QZ2Z4Q4Z2Z4Q4Z2Z4Q4Z2&ust=1623687228214000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjQ4Z2Z4_ECFQAAAAAdAAAAABAD", 4.99, "seafood"],
        ["shellfish", "lobster", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.walmart.com%2Fip%2FGreat-Value-2-Reduced-Fat-Milk-1-gal%2F10450109&psig=AOvVaw0QZ2Z4Q4Z2Z4Q4Z2Z4Q4Z2&ust=1623687228214000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjQ4Z2Z4_ECFQAAAAAdAAAAABAD", 5.99, "seafood"]
    ];

    await Promise.all(products.map(async ([subcategory, name, image_url, price, _]) => {
        // fetch subcategory by name
        const subC = await Subcategory.findOne({where: {name: subcategory}})
        console.log(`${subcategory} - ${name}`,JSON.stringify(subC))
        return Product.create({name, image_url, price, subCategoryId: subC.id});
    }))

}

sequelize.sync({force: true}).then(() => seedData().then(() => console.log("done")));