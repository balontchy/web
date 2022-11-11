import React from 'react'
import Link from 'next/link'
import style from '../../styles/interface/Aside.module.css'
import { SlSymbleFemale ,
  SlSymbolMale,
  SlScreenSmartphone,
  SlScreenDesktop,
  SlHandbag,
  SlCup
} from "react-icons/sl";


function Aside() {
  return (
    <div className='aside'>
      <div className={style.main}>
        <div className={style.logo}>
          SIMPLE STORE
        </div>
          <div className={style.container}>
            <p><SlSymbleFemale /></p>
            <Link className={style.link} href={'/'}> Women's fashions </Link>
          </div>

          <div className={style.container}>
            <p><SlSymbolMale /></p>
            <Link className={style.link} href={'/'}> Man's fashions </Link>
          </div>

          <div className={style.container}>
            <p><SlScreenSmartphone /></p>
            <Link className={style.link} href={'/'}> Phones </Link>
          </div>

          <div className={style.container}>
            <p><SlScreenDesktop /></p>
            <Link className={style.link} href={'/'}> Consumer Electronics </Link>
          </div>

          <div className={style.container}>
            <p><SlHandbag /></p>
            <Link className={style.link} href={'/'}> Bags & Shoes </Link>
          </div>

          <div className={style.container}>
            <p><SlCup /></p>
            <Link className={style.link} href={'/'}> Health & Hair </Link>
          </div>


      </div>
    </div>
  )
}

export default Aside