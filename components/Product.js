import React from 'react'
import style from '../styles/Product.module.css'
import Image from 'next/image'
import Footer from './Footer'

function Product({product}) {
    const {id, title , image,price } = product;
  return (
     <div className={style.container}>

        <Image className={style.image} src={image} width={100} height={150}/>
        <div>{title}</div>
        <div>{price},00$</div>
     </div>

  )
}

export default Product