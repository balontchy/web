import React from 'react'
import style from '../styles/interface/Login.module.css'
import Image from 'next/image'

function Login() {
  return (
    <div className={style.container + " login"}>
      <Image className={style.image} src={'/younes.jpg' } width={50} height={50} />
      <p>Younes ZAOUDA</p>
      
    </div>
  )
}

export default Login