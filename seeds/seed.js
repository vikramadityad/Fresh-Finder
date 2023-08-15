const sequelize = require('../config/connection');
const { Product, Category, Subcategory, User } = require('../models');
const bcrypt = require('bcrypt');

const seedData = async () => {
    const categories = [
        ["dairy", ["milk", "cheese", "yogurt"]],
        ["produce", ["fruits", "vegetables"]],
        ["seafood", ["fish", "shellfish"]]
    ];

    await Promise.all(categories.map(async ([categoryName, subCategories]) => {
        const category = await Category.create({ name: categoryName });
        return Promise.all(subCategories.map(async (subCategoryName) => {
            await Subcategory.create({ name: subCategoryName, category_id: category.id });
        }));
    }))


    const newUser = {
        Username: 'FreshEater998',
        Email: 'john@example.com',
        Password: 'hashed_password', //hash password before entering into DB
        Address: '123 North St',
        FirstName: 'John',
        LastName: 'Doe',
        City: 'Example City',
        Province: 'Example City',
        EmailVerified: false,
    };
    // has the password for creating user
    bcrypt.genSalt(10, (err,salt) => {
        if (err) throw err;
    
        bcrypt.hash(newUser.Password, salt, async (err, hash) => {
          if (err) throw err;
    
        newUser.Password = hash;
    
        try {
          const user = await User.create(newUser);
          console.log('New user created:', user);
        } catch (error) {
          console.error('Invalid information provided:', error);
        }
      });
    });

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
        ["milk", "Baxters", "https://images.squarespace-cdn.com/content/v1/5ce597bbae917800015afdc6/1584996257540-V93BP0JE5DAH81JE3F2J/Baxters+2_+2L+Milk.jpg?format=1000w", "Fresh milk from local farms.", "1 Litre", 2.99, false, new Date(), 4.5, "Supermart A", "Moncton", "dairy"],
        ["cheese", "Happy Cow", "https://www.nicepng.com/png/detail/869-8692446_happy-cow-yellow-cheddar-flavoured-cheese-slice-150g.png", "Premium cheddar cheese.", "250g", 3.99, false, new Date(), 4.2, "Gourmet Corner", "Saint John", "dairy"],
        ["yogurt", "Astro", "https://astro.ca/wp-content/uploads/sftens-316x316.png", "Creamy yogurt with real fruit.", "150g", 1.99, false, new Date(), 4.8, "Organic Market", "Fredericton", "dairy"],
        ["cheese", "Dairy Delights", "https://w7.pngwing.com/pngs/572/634/png-transparent-goat-milk-dairy-products-cottage-cheese-quark-milk-cream-food-cheese-thumbnail.png", "Creamy cottage cheese.", "200g", 2.79, true, new Date(), 4.6, "Health Haven", "Fredericton", "dairy"],
        ["milk", "Golden Farms", "https://newgmc.gov.gy/wp-content/uploads/2021/06/Golden-Margarine-225-g.png", "Rich and creamy butter.", "200g", 3.49, false, new Date(), 4.4, "Supermart B", "Moncton", "dairy"],
        ["fruits", "Apples", "https://w7.pngwing.com/pngs/6/719/png-transparent-crisp-apple-red-apple-natural-foods-food-green-apple-thumbnail.png", "Crisp and juicy apples.", "1 KG", 2.49, true, new Date(), 4.3, "Farmers' Market", "Saint John", "produce"],
        ["fruits", "Bananas", "https://www.healthng.com/wp-content/uploads/2016/12/Banana-Bunch.png", "Sweet and ripe bananas.", "100g", 1.99, false, new Date(), 4.6, "Supermart A", "Moncton", "produce"],
        ["vegetables", "Lettuce", "https://e7.pngegg.com/pngimages/930/640/png-clipart-selective-focus-of-lettuce-lettuce-sandwich-butterhead-lettuce-vegetable-salad-food-lettuce-leaf-vegetable-superfood.png", "Fresh green lettuce for salads.", "100g", 2.29, false, new Date(), 4.0, "Greens & More", "Fredericton", "produce"],
        ["vegetables", "Carrots", "https://static.wixstatic.com/media/a59e70_ec58d0f9d80c418c86477b7e6e62fffd~mv2.jpg/v1/fill/w_225,h_225,al_c,q_85/a59e70_ec58d0f9d80c418c86477b7e6e62fffd~mv2.jpg", "Crisp and vibrant carrots.", "1KG", 1.79, true, new Date(), 4.5, "Farmers' Market", "Moncton", "produce"],
        ["fruits", "Strawberries", "https://agro-market24.eu/upload/files/strawberries-price.jpeg", "Juicy and sweet strawberries.", "100g", 3.99, true, new Date(), 4.7, "Organic Market", "Fredericton", "produce"],
        ["vegetables", "Potatoes", "https://w7.pngwing.com/pngs/86/977/png-transparent-french-fries-yukon-gold-potato-vegetable-food-chanda-vegetable.png", "Versatile and hearty potatoes.", "1KG", 1.49, false, new Date(), 4.2, "Supermart B", "Saint John", "produce"],
        ["fish", "Salmon", "https://wildwoodgrillingoutlet.com/cdn/shop/articles/Salmon_on_Ice.jpg?v=1528307097", "Wild-caught salmon fillet.", "1KG", 8.99, true, new Date(), 4.4, "Seafood Emporium", "Moncton", "seafood"],
        ["fish", "Shrimp", "https://tripleafood.ca/cdn/shop/products/Blacktigershrimp_1024x1024.jpg?v=1670610218", "Jumbo shrimp, peeled and deveined.", "1KG", 12.99, false, new Date(), 4.7, "Marine Market", "Saint John", "seafood"],
        ["fish", "Tuna", "https://i5.walmartimages.com/asr/360a4a6e-1a24-425d-8cc7-13075df65165.83fcbf0ba1c22b8a037b7b0677a6d5a5.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff", "Fresh tuna steak, perfect for grilling.", "1KG", 6.49, true, new Date(), 4.1, "Fishery X", "Fredericton", "seafood"],
        ["shellfish", "Crab", "https://www.superwafer.ca/storage/products/January2021/zwZoJmCr6diqrhXJUlBw.png", "Delicious crab legs.", "1KG", 15.99, true, new Date(), 4.5, "Seafood Emporium", "Moncton", "seafood"],
        ["shellfish", "Oysters", "https://www.tastingtable.com/img/gallery/you-should-think-twice-before-buying-fresh-shellfish-at-the-grocery-store/intro-1664304112.webp", "Freshly harvested oysters.", "1KG", 18.99, false, new Date(), 4.3, "Marine Market", "Fredericton", "seafood"],
        ["shellfish", "Lobster", "https://www.patriotledger.com/gcdn/authoring/2012/07/17/NPAL/ghows-WL-fa86fee5-e8b1-466d-b8d4-1a650d84640e-da52986d.jpeg?width=1320&height=696&fit=crop&format=pjpg&auto=webp", "Luxurious lobster tail.", "1KG", 29.99, true, new Date(), 4.8, "Fishery X", "Saint John", "seafood"],
        ["milk", "Local Farms", "https://www.fiveacrefarms.com/wp-content/uploads/2014/07/Whole-milk-gallon.jpg", "Fresh milk from local farms.", "2 Litres", 3.99, false, new Date(), 4.5, "Supermart A", "Moncton", "dairy"],
        ["cheese", "Artisan Delights", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmzG82siDbOStq1mpzbNv-VJ4NgQSbmE2KAhApeyLLiw&s", "Handcrafted artisan cheddar cheese.", "300g", 4.99, false, new Date(), 4.8, "Gourmet Corner", "Saint John", "dairy"],
        ["yogurt", "Probiotic Plus", "https://assets.woolworths.com.au/images/2010/284894_1.jpg?impolicy=wowcdxwbjbx&w=900&h=900", "Probiotic-rich yogurt with real fruit.", "200g", 2.49, true, new Date(), 4.6, "Organic Market", "Fredericton", "dairy"],
        ["fruits", "Oranges", "https://assets.shop.loblaws.ca/products/20162945001/b2/en/front/20162945001_front_a06_@2.png", "Sweet and tangy oranges.", "1 KG", 2.99, false, new Date(), 4.4, "Farmers' Market", "Saint John", "produce"],
        ["fruits", "Grapes", "https://assets.shop.loblaws.ca/products/20425775001/b2/en/front/20425775001_front_a06_@2.png", "Juicy and refreshing grapes.", "500g", 3.49, true, new Date(), 4.2, "Supermart A", "Moncton", "produce"],
        ["vegetables", "Bell Peppers", "https://www.chilipeppermadness.com/wp-content/uploads/2019/08/Bell-Peppers.jpg", "Colorful bell peppers.", "200g", 1.79, true, new Date(), 4.7, "Greens & More", "Fredericton", "produce"],
        ["vegetables", "Cucumbers", "https://nurturedinnorfolk.co.uk/wp-content/uploads/2022/01/cucumbers-1536x768.gif", "Crunchy and hydrating cucumbers.", "2KG", 2.99, false, new Date(), 4.3, "Farmers' Market", "Moncton", "produce"],
        ["shellfish", "Mussels", "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/6/12/0/mussels.jpg.rend.hgtvcom.616.462.suffix/1383078063252.jpeg", "Freshly harvested mussels.", "1KG", 9.99, true, new Date(), 4.7, "Fishery X", "Fredericton", "seafood"],
        ["shellfish", "Clams", "https://www.superwafer.ca/storage/products/January2021/aGCbKe5OuhwaYLr7JLT7.jpg", "Delicate and briny clams.", "1KG", 12.99, false, new Date(), 4.4, "Seafood Emporium", "Moncton", "seafood"],
        ["fish", "Cod", "https://images.hotukdeals.com/threads/thread_full_screen/default/3693871_2.jpg", "Flaky and mild cod fillet.", "1KG", 7.99, false, new Date(), 4.6, "Seafood Emporium", "Moncton", "seafood"],
        ["fish", "Haddock", "https://www.citarella.com/media/catalog/product/cache/0a1f163765072c838f99d363b77c89e0/image/60a531/haddock-fillet.jpg", "Lean and tender haddock fillet.", "1KG", 6.99, false, new Date(), 4.3, "Marine Market", "Saint John", "seafood"],
        ["shellfish", "Mussels", "https://cdn.shopify.com/s/files/1/0262/7073/files/inline-sourcing-mussels-partners-mussels_1280x720_crop_center.jpg?v=17176882222668441820", "Freshly harvested mussels.", "1KG", 9.99, true, new Date(), 4.7, "Fishery X", "Fredericton", "seafood"],
        ["shellfish", "Clams", "https://i.pinimg.com/originals/10/f9/ca/10f9ca424f29c168a8d79081755ecfa8.jpg", "Delicate and briny clams.", "1KG", 12.99, false, new Date(), 4.4, "Seafood Emporium", "Moncton", "seafood"],
        ["fish", "Salmon", "https://media.istockphoto.com/photos/delicious-salmon-fillet-rich-in-omega-3-oil-picture-id477384822", "Rich and flavorful salmon.", "1KG", 14.99, true, new Date(), 4.8, "Marine Market", "Saint John", "seafood"],
        ["fish", "Trout", "https://bradleysfish.com/wp-content/uploads/2021/05/Trout-Fillet-6-750gram-Custom.jpg", "Freshwater trout fillet.", "1KG", 13.99, false, new Date(), 4.2, "Fishery X", "Fredericton", "seafood"],
        ["shellfish", "Oysters", "https://thumbs.dreamstime.com/b/top-view-fresh-oysters-cut-lemon-plate-ice-top-view-fresh-oysters-cut-lemon-plate-ice-154096990.jpg", "Tasty and juicy oysters.", "1KG", 15.99, true, new Date(), 4.9, "Seafood Emporium", "Moncton", "seafood"],
        ["shellfish", "Scallops", "https://www.imas.utas.edu.au/__data/assets/image/0010/1428454/scallop-close-up.jpg", "Sweet and buttery scallops.", "1KG", 16.99, false, new Date(), 4.5, "Marine Market", "Saint John", "seafood"],
        ["fish", "Tilapia", "https://17ddblog.com/wp-content/uploads/2013/07/tilapiaforweightloss.jpg", "Mild and versatile tilapia.", "1KG", 8.99, false, new Date(), 4.0, "Fishery X", "Fredericton", "seafood"],
        ["fish", "Tuna", "https://www.seafoodsoftheworld.com/wp-content/uploads/2020/12/AdobeStock_273184918.jpg", "Firm and meaty tuna steak.", "1KG", 17.99, false, new Date(), 4.7, "Seafood Emporium", "Moncton", "seafood"],
        ["shellfish", "Lobster", "https://assets3.labelleassiette.com/media/profile/menu_large_154721787361508bd3311809ad7154b0fddd1cfe97a5d.jpg", "Luxurious and rich lobster.", "1KG", 19.99, true, new Date(), 4.9, "Marine Market", "Saint John", "seafood"],
        ["shellfish", "Crab", "https://images-na.ssl-images-amazon.com/images/I/61q-FeIpIGL.jpg", "Sweet and tender crab meat.", "1KG", 18.99, false, new Date(), 4.6, "Fishery X", "Fredericton", "seafood"],
        ["fish", "Mackerel", "https://thumbs.dreamstime.com/b/oily-fish-mackerel-food-supplement-omega-capsules-oily-[…]kerel-food-supplement-omega-capsules-concept-137534872.jpg", "Oily and flavorful mackerel.", "1KG", 9.49, true, new Date(), 4.4, "Seafood Emporium", "Moncton", "seafood"],
        ["fish", "Sardines", "https://medmunch.com/wp-content/uploads/2020/08/Sardines-1.jpg", "Tiny and nutritious sardines.", "1KG", 7.49, false, new Date(), 4.3, "Marine Market", "Saint John", "seafood"],
        ["shellfish", "Shrimp", "https://wholelifestylenutrition.com/wp-content/uploads/Dave4.jpg", "Juicy and versatile shrimp.", "1KG", 11.99, true, new Date(), 4.5, "Fishery X", "Fredericton", "seafood"],

    ];

    await Promise.all(products.map(async ([subcategory, name, image_url, description, metric, price, organic, stock_date, reviews, store_name, store_location, _]) => {
        // fetch subcategory by name
        const subC = await Subcategory.findOne({ where: { name: subcategory } })
        console.log(`${subcategory} - ${name}`, JSON.stringify(subC))
        return Product.create({ name, image_url, price, subcategory_id: subC.id, description, metric, organic, stock_date, reviews, store_name, store_location });
    }))

}

sequelize.sync({ force: true }).then(() => seedData().then(() => console.log("done")));