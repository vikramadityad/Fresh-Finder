# Fresh-Finder

The Online Grocery Freshness Comparator

Fresh-Finder is an online grocery shopping application designed to redefine your shopping experience. Not only can you comfortably browse and shop from home, but for the first time, you have the power to compare the freshness of products across multiple grocery stores. We prioritize transparency, providing you with detailed insights on stock reception dates from various retailers. Make informed choices, ensuring every product you purchase is as fresh as it can be.

## Installation

### Prerequisites:

- Node.js
- npm
- A local or remote SQL database for Sequelize

### Steps to Setup:

1. **Clone the repository**
   ```bash
    git clone git@github.com:vikramadityad/Fresh-Finder.git
    cd Fresh-Finder

2. Install Dependencies
    npm install

3. Database Setup
    Make sure you have a MySQL database instance ready.

4. Run Migrations
    npx sequelize-cli db:migrate

5. Set up Environment variables
    Create a .env file in the root directory and set the following variables:
    DB_NAME=fresh_finder
    DB_USER=root
    DB_PASSWORD=''

6. Start the Server
    To start the server for production:
    npm start

    To start the server for development (with nodemon):
    npm run start:dev

7. Open in Browser
    Open your browser and navigate to http://localhost:5003.

## Technical Skills

Programming Languages: JavaScript
Frameworks & Libraries: Node.js, Express.js, Handlebars, Bootstrap
Databases: MySQL (including JAWSDB for deployment)
Tools & Platforms: Git (Version Control), GitHub, Heroku
Web Technologies: HTML, CSS
Node.js Packages: Bcrypt, Express-Validator, Express-session, dotenv, nodemon
Data Manipulation: Sequelize (ORM)
Date & Time Handling: moment.js
Utility: lodash


## Acknowledgements
Contributors and Team Members:

Diallo Mahamoudou: https://github.com/Dialla23
Lex MacLellan: https://github.com/lexrayne
Riley Kennedy: https://github.com/Riley19James
Vikram Devaguptapu: https://github.com/vikramadityad
Neeraja Narayanan: https://github.com/hineeraja

## Resources and Learning
1. Stack Overflow - where developers learn, share, & build careers. (n.d.). Stack Overflow. https://stackoverflow.com/
2. Node.js: Node.js is the bridge that brings JavaScript, traditionally a browser-centric language, into the realm of server-side development. Powered by the efficient V8 engine from Chrome, it's designed to build scalable and efficient        
    network applications. Reference: Node.js Official Documentation
3. Express: Express acts as the backbone of web application development in the Node.js ecosystem. With its minimalistic approach, it provides the tools to build robust web servers without the bloat. Reference: Express.js Official Guide
4. Handlebars: Handlebars equips developers with a powerful tool to craft dynamic HTML templates. It introduces logic into the static world of HTML, making content rendering adaptive and context-aware. Reference: Handlebars.js Official Site
5. Sequelize: Bridging Node.js applications with relational databases, Sequelize offers a consistent promise-based ORM. It abstracts database communication, making CRUD operations seamless across different DB engines. Reference: Sequelize      Documentation

## Figma Design

Check out our Figma design to get a visual representation of the Fresh-Finder user interface:

[FreshFinder UI Design](https://www.figma.com/file/5WgXRjNV24E03JKJU0SUFp/FreshFinder-UI?type=design&node-id=0-1&mode=design&t=YDOmNLwIelk0Svh3-0)

Feel free to explore the design and gain insights into the user experience we're aiming for with Fresh-Finder.

## Deployment


Repository: https://github.com/vikramadityad/Fresh-Finder/tree/main

Live Deployment: https://freshfinder-ee2adcd480d5.herokuapp.com/

## Screenshorts
<img width="1316" alt="Screenshot 2023-08-15 at 10 45 58 PM" src="https://github.com/vikramadityad/Fresh-Finder/assets/28673859/8a6d8135-9381-4339-b774-fb1d772f12f3">
<img width="1308" alt="Screenshot 2023-08-15 at 10 47 26 PM" src="https://github.com/vikramadityad/Fresh-Finder/assets/28673859/72898215-0cf7-4d4a-b37f-20de8da85d5d">
<img width="1319" alt="Screenshot 2023-08-15 at 10 47 41 PM" src="https://github.com/vikramadityad/Fresh-Finder/assets/28673859/3bde6586-ddd9-4c2f-ac85-c1e51b523b26">
<img width="1308" alt="Screenshot 2023-08-15 at 10 47 26 PM" src="https://github.com/vikramadityad/Fresh-Finder/assets/28673859/7424c27c-a13e-4f50-b46a-cd0438ca90ad">

