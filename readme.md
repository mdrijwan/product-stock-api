# ProductStock-Api
A sample app that implements product inventory management that requires adding products to a product catalog and adding warehouses to store the products.

**Tasks**

Implementing a NodeJS API to user registration first. Once the user is authenticated and logged in, he/she can access the private routes to add products with various CRUD operations.

- As a user I can register on the Api.
- As a user I can login in and do the following on a product:
  - Add product
  - List products
  - Add warehouse
  - List warehouse
  - List warehouses
  - Stock
  - Unstock
  - Delete product
  - Delete warehouse

MongoDB has been impleneted as the database solution for this API to keep it simple.

## Getting Started

Clone the project repository by running the command below if you use SSH

```
git clone git@github.com:mdrijwan/createorder-api.git
```

If you use https, use this instead

```
git clone https://github.com/mdrijwan/createorder-api.git
```

Run the command below to install NPM dependencies

```
npm install
```

Then start the server and visit [http://127.0.0.1:3000/](http://127.0.0.1:3000/) to see the app in action.

```
npm run start
```


>To get in action, the database needs to be started first.

Start the database

```
mongod
```

- To see the database
  + Type `mongo`

- To show all the databases
  + `show dbs`

- To select a specific database
  + `use <db name>`

- To see the tables inside the db
  + `show collections`

- Choose your collection and type the following to see all contents of that collection:
  + `db.<collectionName>.find()`

#### Let's get started!

***Methods***

##### User Management

- POST/
  + POST/users/register `(register as a user)`
  + POST/users/login `(login as a user)`

##### Product Management

- GET/
  + GET/products/productList `(list all products)`
  + GET/products/productList/stockList `(List products in stock)`
  + GET/products/productId `(to see a specific product details)`
 
- POST/
  + POST/products `(create product catalog)`
   
- PUT/
  + PUT/products/productId `(update a specific product)`
  
- DELETE/
  + DELETE/products/productId `(delete a specific product)`