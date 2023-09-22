import React, { useState } from 'react'
import Form from '../components/Form'
import List from '../components/List'
import Text from '../widgets/Text'
import ProductContext from '../context/product-context'

const BillingAppPage = () => {
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState(null)
  // for rerendering of list
  const isMarking = () =>{
     setProducts([...products]);
  }
  const collectData = (product)=>{
    const clone = [...products];
    clone.push(product)
    setProducts(clone);
    console.log("product data ",product);
  }
  const compute = () =>products.reduce((sum,cur)=>sum+(cur.price*cur.quantity),0)

  const getMarkedCount = () =>products.filter((e)=>e.isMarked).length
  
  const deleteRecords = () =>setProducts(products.filter(product=>!product.isMarked))
  
  const getProduct = (product) =>{
    setProduct(product)
    console.log("current product for edit : ",product);
  }

  return (
    <div className='container mt-5'>
      <ProductContext.Provider value={{products:products,changeProducts:deleteRecords,total:0,mark:0,getProduct:getProduct,currentProduct:product}}>
        <Form deleteRecords={deleteRecords} collectData={collectData} markCount={getMarkedCount()}/>
        <br />
        <Text msg="Total Records " val={products.length}/>
        <Text msg="Marked Records " val={getMarkedCount()}/>
        <List products = {products} isMarking={isMarking}/>
        <Text msg="Grand Total" val={compute()}/>
        </ProductContext.Provider>
    </div>
  )
}

export default BillingAppPage