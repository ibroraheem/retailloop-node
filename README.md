
# RetailLoop SDK Documentation

[![Build Status](https://travis-ci.com/ibroraheem/retailloop-node.svg?branch=main)](https://travis-ci.com/ibroraheem/retailloop-node)
[![Coverage Status](https://coveralls.io/repos/github/ibroraheem/retailloop-node/badge.svg?branch=master)](https://coveralls.io/github/ibroraheem/retailloop-node?branch=main)

[![npm version](https://img.shields.io/npm/v/retailloop-node.svg)](https://www.npmjs.com/package/retailloop-node)

The RetailLoop SDK is a JavaScript library that provides a convenient interface for interacting with the RetailLoop API. This SDK simplifies the integration process and allows developers to perform various operations related to customers, products, orders, and discounts.

## Installation

To use the RetailLoop SDK in your JavaScript project, you can install it via npm or yarn:

### npm

```shell
npm install retailloop-node
```

### yarn

```shell
yarn add retailloop-node
```

## Usage

To get started with the RetailLoop SDK, you need to create an instance of the `RetailLoopSDK` class by providing your API key and secret key:

```javascript
const RetailLoopSDK = require('retailloop-sdk');

const apiKey = 'YOUR_API_KEY';
const secretKey = 'YOUR_SECRET_KEY';

const retailLoop = new RetailLoopSDK(apiKey, secretKey);
```

### Signing Up a User

You can sign up a new user by calling the `signUpUser` method:

```javascript
const userData = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  password: 'password123'
};

try {
  const user = await retailLoop.signUpUser(userData);
  console.log('User signed up:', user);
} catch (error) {
  console.error('Error signing up user:', error);
}
```

### Signing In a User

You can sign in an existing user by calling the `signInUser` method:

```javascript
const userData = {
  email: 'john.doe@example.com',
  password: 'password123'
};

try {
  const user = await retailLoop.signInUser(userData);
  console.log('User signed in:', user);
} catch (error) {
  console.error('Error signing in user:', error);
}
```

### Creating a Customer

To create a new customer, use the `createCustomer` method:

```javascript
const customerData = {
  name: 'Jane Smith',
  email: 'jane.smith@example.com',
  phone: '1234567890'
};

try {
  const customer = await retailLoop.createCustomer(customerData);
  console.log('Customer created:', customer);
} catch (error) {
  console.error('Error creating customer:', error);
}
```

### Getting a Customer

Retrieve customer information using the `getCustomer` method:

```javascript
const customerId = 123;

try {
  const customer = await retailLoop.getCustomer(customerId);
  console.log('Customer:', customer);
} catch (error) {
  console.error('Error getting customer:', error);
}
```

### Updating a Customer

Update customer information using the `updateCustomer` method:

```javascript
const customerId = 123;
const customerData = {
  name: 'Updated Name',
  email: 'updated.email@example.com',
  phone: '9876543210'
};

try {
  const updatedCustomer = await retailLoop.updateCustomer(customerId, customerData);
  console.log('Updated customer:', updatedCustomer);
} catch (error) {
  console.error('Error updating customer:', error);
}
```

### Searching for Customers

Search for customers based on a query using the `searchCustomer`

 method:

```javascript
const searchQuery = 'John Doe';

try {
  const customers = await retailLoop.searchCustomer(searchQuery);
  console.log('Matching customers:', customers);
} catch (error) {
  console.error('Error searching for customers:', error);
}
```