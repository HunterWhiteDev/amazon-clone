### Notice: You need to get the Firebase API keys from me. Email me at hunter.white1801@gmail.com

Not having API keys will result in the app loading a blank screen and/or errors.

# Getting Started:

To get started, follow these steps:

1. run `npm install`.
2. `cd` into `functions` and run `npm install`.
3. While in the `functions` folder make a `.env` file that has a varriable called STRIPE_KEY with the stripe key I gave you.
4. Go back to the `/src` directory and create a file called `firebaseKeys.ts` and enter the firebase keys I gave you.

### `Home Page`

Home page contains banner, sign in, cart, returns & orders page, etc...
![Home Page!](https://i.imgur.com/0jdoG7o.png)

### `Products`

The products section on the home page allows you to add different products to your cart.
![Products!](https://i.imgur.com/p0jBcMg.png)

### `Sign In Page`

Sign in with the email: 123@test.com and the password: password
![Sign In!](https://i.imgur.com/WrFcNUz.png)

### `Returns & Orders`

The returns and orders page logs all the orders made on any account!
![Returns & Orders!](https://i.imgur.com/lKf64ze.png)

### `Check Out`

The check out page allows you to make a mock payment with the Stripe API. Just enter the numbers "42" repeatedly into the card element.
![Check Out!](https://i.imgur.com/B5m9xQn.png)
