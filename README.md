
# COFFE API

Coffe API maded with NodeJS. Actually versions allows you create users, and get, create, updated and delete products.

Persistence with ```JSON``` files. You can implement `MySQL` or `MongoDB` or any other database.

## API USAGE

Actual `version` have these routes:

`/api/users`

`/api/products`

With `/api/users` you can get and create users with these fields: `name`, `email`, `password`, `role`.
Password are encrypted with `bcrypt` library. More here: `https://www.npmjs.com/package/bcryptjs`.

With `/api/products` you cand get, create, update and delete products with these fields: `name`, `description`, `price`, `status`.

## NODE MODULES

If you clone / donwload project remember execute these commands:

`NPM INSTALL` - For build dependencies.

`NODE APP` - For run the application.

### BONUS

If you have nodemon in your local machine, you can run the APP with:

`NODEMON APP`

### ENJOY :)

If you want to contact with me, here it's my portfolio `https://david-acosta-portfolio.netlify.app/`.