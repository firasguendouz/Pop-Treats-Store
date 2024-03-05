/Pop-treats-store
|-- /public
    |-- index.html
    |-- favicon.ico
|-- /src
    |-- /components
        |-- /Header
            |-- Header.js
            |-- header.css
        |-- /ProductList
            |-- ProductList.js
            |-- productList.css
        |-- /ProductItem
            |-- ProductItem.js
            |-- productItem.css
        |-- /Basket
            |-- Basket.js
            |-- basket.css
        |-- /Checkout
            |-- Checkout.js
            |-- checkout.css
    |-- /pages
        |-- HomePage.js
        |-- CheckoutPage.js
    |-- /utils
        |-- Products.js
    |-- App.js
    |-- index.js
    |-- app.css
|-- package.json




 {/* Uncomment the following block if you want to fetch data from the backend
      <div className="productList">
        {loading ? (
          // Display loading indicator or placeholder while data is being fetched
          <p>Loading...</p>
        ) : (
          // Map over the fetched products and render ProductItem components
          products.map(product => (
            <ProductItem
              key={product.id}
              product={product}
              onAddToBasket={() => onAddToBasket(product)}
            />
          ))
        )}
      </div>
      */}
