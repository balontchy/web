import React from 'react'
import Product from '../components/products/Product'
import style from '../styles/products/Product.module.css'

function index({products}) {
  return (
    <div className={style.main + ' main'}>
      {
        products.map(product => <Product key={product.id} product={product}/>)
      }
    </div>
  )
}

export default index


export async function getStaticProps(){
  const req = await fetch("https://fakestoreapi.com/products")
  const products = await  req.json()
  return {
    props:{products}
  }
}