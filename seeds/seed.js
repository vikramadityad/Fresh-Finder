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
    // const products = [
    //     ["milk", "baxters", "https://via.placeholder.com/150", 2.99, "dairy"],
    //     ["cheese", "happy cow", "https://via.placeholder.com/150", 3.99, "dairy"],
    //     ["yogurt", "astro", "https://via.placeholder.com/150", 1.99, "dairy"],
    //     ["fruits", "kiwi", "https://via.placeholder.com/150", 2.99, "produce"],
    //     ["fruits", "kiwi", "https://via.placeholder.com/150", 2.79, "produce"],
    //     ["fruits", "kiwi", "https://via.placeholder.com/150", 3.99, "produce"],
    //     ["fruits", "kiwi", "https://via.placeholder.com/150", 2.79, "produce"],
    //     ["vegetables", "zuchinni", "https://via.placeholder.com/150", 3.99, "produce"],
    //     ["fish", "carp", "https://via.placeholder.com/150", 10.99, "seafood"],
    //     ["fish", "carp", "https://via.placeholder.com/150", 7.99, "seafood"],
    //     ["fish", "carp", "https://via.placeholder.com/150", 4.99, "seafood"],
    //     ["shellfish", "lobster", "https://via.placeholder.com/150", 5.99, "seafood"]
    // ];

    const products = [
        ["milk", "Baxters", "https://via.placeholder.com/150", "Fresh milk from local farms.", "1 Litre", 2.99, true, new Date(), 4.5, "Supermart A", "Moncton", "dairy"],
        ["cheese", "Happy Cow", "https://via.placeholder.com/150", "Premium cheddar cheese.", "250g", 3.99, false, new Date(), 4.2, "Gourmet Corner", "Saint John", "dairy"],
        ["yogurt", "Astro", "https://via.placeholder.com/150", "Creamy yogurt with real fruit.", "150g", 1.99, true, new Date(), 4.8, "Organic Market", "Fredericton", "dairy"],
        ["cheese", "Dairy Delights", "https://via.placeholder.com/150", "Creamy cottage cheese.", "200g", 2.79, true, new Date(), 4.6, "Health Haven", "Fredericton", "dairy"],
        ["milk", "Golden Farms", "https://via.placeholder.com/150", "Rich and creamy butter.", "200g", 3.49, false, new Date(), 4.4, "Supermart B","Moncton", "dairy"],
        ["fruits", "Apples", "https://via.placeholder.com/150", "Crisp and juicy apples.", "1 KG", 2.49, true, new Date(), 4.3, "Farmers' Market","Saint John", "produce"],
        ["fruits", "Bananas", "https://via.placeholder.com/150", "Sweet and ripe bananas.", "100g", 1.99, true, new Date(), 4.6, "Supermart A","Moncton", "produce"],
        ["vegetables", "Lettuce", "https://via.placeholder.com/150", "Fresh green lettuce for salads.", "100g", 2.29, false, new Date(), 4.0, "Greens & More", "Fredericton", "produce"],
        ["vegetables", "Carrots", "https://via.placeholder.com/150", "Crisp and vibrant carrots.", "1KG", 1.79, true, new Date(), 4.5, "Farmers' Market","Moncton", "produce"],
        ["fruits", "Strawberries", "https://via.placeholder.com/150", "Juicy and sweet strawberries.", "100g", 3.99, true, new Date(), 4.7, "Organic Market", "Fredericton", "produce"],
        ["vegetables", "Potatoes", "https://via.placeholder.com/150", "Versatile and hearty potatoes.", "1KG", 1.49, false, new Date(), 4.2, "Supermart B","Saint John", "produce"],
        ["fish", "Salmon", "https://via.placeholder.com/150", "Wild-caught salmon fillet.", "1KG", 8.99, true, new Date(), 4.4, "Seafood Emporium","Moncton", "seafood"],
        ["fish", "Shrimp", "https://via.placeholder.com/150", "Jumbo shrimp, peeled and deveined.", "1KG", 12.99, false, new Date(), 4.7, "Marine Market","Saint John", "seafood"],
        ["fish", "Tuna", "https://via.placeholder.com/150", "Fresh tuna steak, perfect for grilling.", "1KG", 6.49, true, new Date(), 4.1, "Fishery X","Fredericton", "seafood"],
        ["shellfish", "Crab", "https://via.placeholder.com/150", "Delicious crab legs.", "1KG", 15.99, true, new Date(), 4.5, "Seafood Emporium","Moncton", "seafood"],
        ["shellfish", "Oysters", "https://via.placeholder.com/150", "Freshly harvested oysters.", "1KG", 18.99, false, new Date(), 4.3, "Marine Market","Fredericton", "seafood"],
        ["shellfish", "Lobster", "https://via.placeholder.com/150", "Luxurious lobster tail.", "1KG", 29.99, true, new Date(), 4.8, "Fishery X","Saint John", "seafood"],
        ["milk", "Local Farms", "https://via.placeholder.com/150", "Fresh milk from local farms.", "2 Litres", 3.99, true, new Date(), 4.5, "Supermart A", "Moncton", "dairy"],
        ["cheese", "Artisan Delights", "https://via.placeholder.com/150", "Handcrafted artisan cheddar cheese.", "300g", 4.99, false, new Date(), 4.8, "Gourmet Corner", "Saint John", "dairy"],
        ["yogurt", "Probiotic Plus", "https://via.placeholder.com/150", "Probiotic-rich yogurt with real fruit.", "200g", 2.49, true, new Date(), 4.6, "Organic Market", "Fredericton", "dairy"],
        ["fruits", "Oranges", "https://via.placeholder.com/150", "Sweet and tangy oranges.", "1 KG", 2.99, true, new Date(), 4.4, "Farmers' Market", "Saint John", "produce"],
        ["fruits", "Grapes", "https://via.placeholder.com/150", "Juicy and refreshing grapes.", "500g", 3.49, false, new Date(), 4.2, "Supermart A", "Moncton", "produce"],
        ["vegetables", "Bell Peppers", "https://via.placeholder.com/150", "Colorful bell peppers.", "200g", 1.79, true, new Date(), 4.7, "Greens & More", "Fredericton", "produce"],
        ["vegetables", "Cucumbers", "https://via.placeholder.com/150", "Crunchy and hydrating cucumbers.", "2KG", 2.99, false, new Date(), 4.3, "Farmers' Market", "Moncton", "produce"],
        ["fish", "Cod", "https://via.placeholder.com/150", "Flaky and mild cod fillet.", "1KG", 7.99, true, new Date(), 4.6, "Seafood Emporium", "Moncton", "seafood"],
        ["fish", "Haddock", "https://via.placeholder.com/150", "Lean and tender haddock fillet.", "1KG", 6.99, false, new Date(), 4.3, "Marine Market", "Saint John", "seafood"],
        ["shellfish", "Mussels", "https://via.placeholder.com/150", "Freshly harvested mussels.", "1KG", 9.99, true, new Date(), 4.7, "Fishery X", "Fredericton", "seafood"],
        ["shellfish", "Clams", "https://via.placeholder.com/150", "Delicate and briny clams.", "1KG", 12.99, false, new Date(), 4.4, "Seafood Emporium", "Moncton", "seafood"]
    
    ];

    await Promise.all(products.map(async ([subcategory, name, image_url, description, metric, price, organic, stock_date, reviews, store_name, store_location, _]) => {
        // fetch subcategory by name
        const subC = await Subcategory.findOne({where: {name: subcategory}})
        console.log(`${subcategory} - ${name}`,JSON.stringify(subC))
        return Product.create({name, image_url, price, subcategory_id: subC.id, description, metric, organic, stock_date, reviews, store_name, store_location });
    }))

}

sequelize.sync({force: true}).then(() => seedData().then(() => console.log("done")));