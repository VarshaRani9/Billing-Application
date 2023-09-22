import React from 'react'
const ProductContext = React.createContext({products:[],changeProducts:function(){},total:0,mark:0,getProduct:function(){},currentProduct:null})

export default ProductContext