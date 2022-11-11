import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import style from '../../styles/products/SingleProduct.module.css'
import Head from 'next/head'


function SingleProduct({product}) {
    const {id,title,image,price,description} = product;
  return (
            <div className={style.container + " main"}>
                <Head>
                    <title>{title}</title>
                </Head>
                <Image className={style.image} src={image} width={300} height={500}/>
                <div className={style.contant}>
                    <h3>Title: {title}</h3>
                    <h3>Price: {price},00$</h3>
                    <p> <strong>Description:</strong>  {description}</p>

                </div>
            </div>
  )
}

export default SingleProduct



export async function getStaticPaths(){
    const req = await fetch("https://fakestoreapi.com/products")
    const products = await req.json()
    const paths = products.map(product =>{
        return {
            params:{id:product.id.toString()}
        }
    })
    return{
        paths,
        fallback:false
    }
}


export async function getStaticProps(context){
    const id = context.params.id
    const req = await fetch("https://fakestoreapi.com/products/"+id)
    const product = await req.json()
    return {
        props:{product}
    }

}