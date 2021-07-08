nShop
=====
[![API CI](https://github.com/Arkko002/nShop/actions/workflows/api.yml/badge.svg?branch=master)](https://github.com/Arkko002/nShop/actions/workflows/api.yml) [![Front CI](https://github.com/Arkko002/nShop/actions/workflows/front.yml/badge.svg?branch=master)](https://github.com/Arkko002/nShop/actions/workflows/front.yml)

Simple open-source implementation of e-commerce service.

## Table of Contents
1. [Table of Contents](#table-of-contents)
2. [Screenshots](#screenshots)
3. [Description](#description)
4. [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)


## Screenshots
![Main page view](https://i.imgur.com/lB7Wl9W.png) *Main product list*

![Single product page](https://i.imgur.com/d5GeroO.png) *Single product page*

![Cart view](https://i.imgur.com/QjZ6IDD.png) *Cart View*

## Description
Back end API was written in NodeJS + Typescript with routing handled by ExpressJS, and Google OAuth2 implemented with PasswordJS.
Records are being stored in MongoDb database with use of Mongoose for structured data handling.

Front end was written with React, with use of Redux Toolkit to manage cart and user's state.

Current functionality allows user to login using his Google account, add and remove products from cart, and place 
simple orders that are stored in MongoDb database on back end.

Product list can be searched by name of the product and filtered using product's category.

## Getting Started
### Prerequisites 
!TODO dependencies 

### Installation
!TODO instructions


