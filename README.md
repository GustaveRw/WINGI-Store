# WINGI Store
WINGI Store is an e-commerce web application where customers can browse and purchase various products. It allows customers to filter and search for products, view product details, and add products to their cart for checkout.

## Features
1.Users can view a list of available products
2.Users can search for products by name or category
3.Users can filter products by price or category
4.Users can view detailed information about a specific product
5.Users can add products to their cart and view their cart
6.Users can place an order and receive an order confirmation

## Getting Started

### To run the WINGI Store project on your local machine, follow these steps:

1.Clone this repository to your local machine
2.Open a terminal window and navigate to the project directory
3.Install the dependencies by running npm install
4.Start the development server by running npm start
5.Open a web browser and go to `http://localhost:3000/` to view the application


## Project Structure

### The WINGI Store project has the following high level architecture:

`index.js`: This is the entry point of the application, where the `ReactDOM.render` method is called to render the App component to the `DOM`.
`App.js`: This is the main component of the application. It wraps the `BrowserRouter` component from `React Router` and includes the `Layout` component, which contains the `header` and `foote`r of the application, as well as the `Switch` component which is used to define the different routes for the application.
`components`: This directory contains all the reusable components used in the application, such as Layout, Header, Footer, SearchBar, Filter, ProductList, ProductListItem, ProductDetails, etc.
data: This directory contains a sample data file with an array of product objects used in the ProductList component.
`styles`: This directory contains the global CSS file used throughout the application.


## Dependencies

### The following dependencies were used in the WINGI Store project:

`react and react-dom`: for building the UI components and rendering them to the DOM.
`react-router-dom`: for handling client-side routing.
`tailwindCSS`: for using styling app and make it more responsive.

# Author
This project was created by [https://github.com/GustaveRw]Jean Marie Gustave MBONYINSHUTI.

[Live] `https://wingistoree.netlify.app/`

[Demo-Video] 

<div style="position: relative; padding-bottom: 56.162246489859605%; height: 0;"><iframe src="https://www.loom.com/embed/4781b904390f4efbbf8e19b68dc59fec" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## License
This project is licensed under the MIT License.