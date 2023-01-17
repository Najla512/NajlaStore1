The Store is an online store specialized in selling coffee cups.

Core functionalities:
1- view all products
2- view product details 
3- can add product to cart
4- remove product from cart
5- checkout the cart
 
Instructions
Download the files in this repository
cd into the directory
npm install
ng serve
The project will be served on default on localhost:4200
Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/

There are three models in this App:
1 Cart 
2-product 

There are many components:
Proudect: 

1-Proudcetlist -> i used it to show all products.
2- Proudcut item-> for show all proudct info.
3- proudect details -> for show proudect details

Cart :
1-Cartlist -> i used it to show all products in the cart.
2-Cart item-> for show all proudct into in cart.
3-Cart details -> for show proudect  details in cart.

Routing:

path: ''-> it will open ProudecListComponent 
path: 'proudct/:id',-> it will open proudect details using ProudectItemDetailsComponent
path: 'Mycard',-> used to show items in cart, using CartlistComponent
path: 'Checkout',-> it will open checkout page ,using CheckoutComponent

Prerequisites:
1- Node.js: https://nodejs.org/en/
2- AngularJS: https://angularjs.org/
Angular CLI version:~15.0.5

Code scaffolding
Run ng build to build the project
Run ng test to execute the unit tests
To get more help on the Angular CLI use ng help




