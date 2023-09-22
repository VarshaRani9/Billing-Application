import React, { useContext, useRef } from 'react'
import TextField from '../widgets/TextField'
import Button from '../widgets/Button'
import Text from '../widgets/Text'
import ProductContext from '../context/product-context'

const Form = ({collectData, markCount,deleteRecords}) => {
    const name = useRef()
    const price = useRef()
    const quantity = useRef()
    const add = () =>{
        const product = {
            "name":name.current.value,
            "price":price.current.value,
            "quantity":quantity.current.value,
            "isMarked":false
        }
        collectData(product)
        console.log("Add : ",product);
    }
    const pContext = useContext(ProductContext);
  return (
    <div>
    <Text msg = "Billing App"/>
    <TextField val={pContext.currentProduct?.name} inputref={name} lbl="Name"/>
    <TextField val={pContext.currentProduct?.price} inputref={price} lbl="Price"/>
    <TextField val={pContext.currentProduct?.quantity} inputref={quantity} lbl="Quantity"/>
    <br />
    <Button fn={add} val="Add"/>

    {/* <Button val = 'delete' disable={markCount===0} fn={deleteRecords}/> */}

    {/* <ProductContext.Consumer>
      {(value)=>{
        return <Button fn={value.changeProducts} val='delete' disable={markCount===0} />
      }}
    </ProductContext.Consumer> */}

    <Button fn={pContext.changeProducts} val='delete' disable={markCount===0} />
    </div>
  )
}

export default Form