# ProductApp
Project Setup
Used the Angular CLI to generate a new project named product-app.

Component & Data Binding
ProductCardComponent displays the product’s name, description, and price.
It accepts a product object via @Input().
The “View Details” button emits an event (or triggers routing) when clicked.

Service & Data Handling
ProductService provides hardcoded data (or a mock JSON).
ProductListComponent fetches the data via an Observable (of from RxJS) and displays it.
The data is displayed asynchronously.

Routing & Navigation
/products shows the ProductListComponent.
/products/:id shows the ProductDetailComponent.
Clicking a product navigates to the detail route, displaying that product’s information.

This project was generated using [Angular CLI]

## Development server

To start a local development server, run:

```bash
git clone https://github.com/roysaurabh000/caseware_prod.git
cd caseware_prod/product-app
npm install
ng serve
```
![image](https://github.com/user-attachments/assets/c1947818-6527-4df4-acf7-de2cfb85327b)![image](https://github.com/user-attachments/assets/2baa2a31-81d2-4ac9-ba7f-50e8e36f852c)

