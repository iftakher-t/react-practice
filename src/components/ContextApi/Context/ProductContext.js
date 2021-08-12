// 3 stape 
import React from 'react';

// 1. createContext
const ProductContext = React.createContext('My Product')
// 2 provide context
const ProductProvider = ProductContext.Provider
// 3 Consume context
const ProductConsumer = ProductContext.Consumer

export {ProductProvider, ProductConsumer}

export default ProductContext