
# RetailLoop SDK Documentation

![RetailLoop Logo](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAAAYCAYAAADUIj6hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA5JSURBVHgB7VoJcJzFlX6v/38OybpmxhL4CoY1lTJHcRhj2ZLmwMZJDMaEgLmSAirEFVhCsuxmw8LuxmEPYAMJG1eKgB2SUE4CNkUChCMYS6M5ZNmxDDGOQ8UmMcbYyLJmdNgjaWb+7nw9hzwaj2Q5JTuVit/UX38fr/vvfv316/deD/s84VdIsUnHksIzoEh9KJTamqKhUDR+5V76G6Y5tNVWWdM/KZOpocHgnsBgvm5+za++Zhc139Vppej7oXjjPfR3SqaSvJiZ7KMxMH4KDCaVdfvc0X9rjTWsppNAAB9/umqTa6hvqC9IgTSdBLJX771WGbXf0+l492//A681dJqOoQINoSxFooNIqqNlXCmIzkKB3l0e8Dztd0USwXjjT2kCyVcTCfiMyDeBi0uUy34LxelVOgkkVdLAN87EPHqdYopBJ4lmzXrNMbO77owhkTiXpThTKHEkJeSuTnff7t27lwzRCZLu78xOz1lkJj8piKtQFJdSvRebdmDfzp3LkzTBVAAKcUDEkj7s0sGjZYoXusIXplnoHTU3U0Lqy3hNKCiIeS4r8mVGQZLpZJEptjPzHen0QGhJ77t7ttBEk2L/5IhPdtO/JHkoADCUQ9GiVBIQmJweq/z9dE9kDVWm1hQeXWP3F71FxdS9ZKYvhpyGNbphcKK2c+qWgCf6REv3gpchREUTRObY1aw2xmm71x15HHN7LlvE58xzv1a1Obakj/7GaHNs+U689EMRmliaP72tzDbQ9hiO4xWZ05ZGrhHkZ1fEF6F4FfXaFvsntawIHgl8PFp//pktTtUfXa0kfT7T+tg1L0dffknk9bqjL6TSbXdt6lsQowkgc1xccugACUcuo+xGstqJRAlQQLPUba5LppKXwRa5EHNxKBYfcCodbe3z7uaCmTVWh12mENMyGZZ1irIKwlJ8rt8VvSDPF4w37Cj+ip+UKWs3Qz6e/QVfXKQRCkjBJPj5Nmdvffr0UYBMETUjSs/SG5ezj59+iklbUprSx8wnjwbvTnqU4RoFSpJ5ZwSDBgATPh6uB61yeo95BQr6uKcJiQCC8NQfGNNeflGLFTqxh7nhQrSQnFqhDF9sQRQQy1CQJx9uyD1cErUqtlhOpXTcm3+7K3ZJc2Rj2+/fx/7SGDkFEW1Fz5p2oJUViozRnCYrZKo3Qjy5vM0HT8kZjjWbPohRQAC1QIjHS6jX24dRmE2VZySrpCZE5QIklwsGUCtpztKELUoJOvEmhMJQicwk9TLf3Dd6QVK0lMoqkJNm5KpUkSxC7HCJB3A1BL+U1gSFApgSTGLMsad7yN6Q6YUwTSnoClk3Ub1ajOqWMiz+L/kqwyPfluvjjQ9Hk5yrkqlkktxkoTCUHMGELqIJAkjPK4GfLiEm0WCoKwXJ9x1A/Q+Yjtp0OQAAAAAElFTkSuQmCC)


[![npm version](https://badge.fury.io/js/retailloop-sdk.svg)](https://www.npmjs.com/package/retailloop-sdk)
[![Build Status](https://travis-ci.com/your-username/retailloop-sdk.svg?branch=master)](https://travis-ci.com/your-username/retailloop-sdk)

The RetailLoop SDK is a JavaScript library that provides a convenient interface for interacting with the RetailLoop API. This SDK simplifies the integration process and allows developers to perform various operations related to customers, products, orders, and discounts.

## Installation

To use the RetailLoop SDK in your JavaScript project, you can install it via npm or yarn:

### npm

```shell
npm install retailloop-sdk
```

### yarn

```shell
yarn add retailloop-sdk
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