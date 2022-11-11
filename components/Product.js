import React from 'react'
import style from '../styles/products/Product.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Product({product}) {
    const {id, title , image,price } = product;
  return (
     <div className={style.container}>

        <Image className={style.image} src={image} width={80} height={120} alt={title}/>
        <div>{title}</div>
        <div>{price},00$</div>
         <Link className={style.link} href={`./products/${id}`} >more details</Link>
     </div>

  )
}

export default Product