import React from 'react'
import style from '../../styles/interface/Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'

function  Navbar() {
  return (
    <div className='navbar' >
      <div className={style.container}>
        <div className={style.burger}>
          <Image src={'/burger.png'} width={30} height={28} alt={'burger'}  />
        </div>
        <div className={style.logo}>
          <h3>Store</h3>
        </div>
        <nav className={style.nav}>
          <ul>
              <Link className={style.link}  href={'/'}> Home </Link>
              <Link className={style.link}  href={'/dashboard'}> dashboard </Link>
              <Link className={style.link}  href={'/contact'}> contact </Link>
              <Link className={style.link}  href={'/about'}> about </Link>
              <Link className={style.link}  href={'/project'}> project </Link>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default  Navbar