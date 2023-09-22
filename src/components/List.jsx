import React, { useContext } from 'react'
import './List.css'
import ProductContext from '../context/product-context';

const List = ({products,isMarking}) => {
    const context = useContext(ProductContext);
  return (
    <table className='table table-bordered'>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Operations</th>
            </tr>
        </thead>
        <tbody>
            {products.map((product,index)=> <tr className={product.isMarked?'table-danger':''} key={index}>
                <td>{index+1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.price*product.quantity}</td>
                <td><i onClick={()=>{
                    context.getProduct(product)
                }} className="fa-solid fa-edit hand"></i>&nbsp;&nbsp;&nbsp;<i onClick={()=>{
                    product.isMarked=!product.isMarked;
                    isMarking()//re-rendering
                }} className="fa-solid fa-trash hand"></i></td>
                </tr>
                
            )}
        </tbody>
    </table>
  )
}

export default List