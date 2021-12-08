# models
### product

- Name*
  - String

- Price*
  - Number

- Image*
  - String (this is a url to the image storage)

np
# Controllers

### Uploading images
- takes a re.file and places that file on the local storage

### Products
- createProduct
  - Create a document on the DB of a new product

- getAllProducts
  - find all products on DB

# Routes
### productsRoute
- '/'
  - post - createProduct
  - get - getAllProducts
- '/uploads
  - post - uploadProductImage