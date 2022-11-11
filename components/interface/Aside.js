import React from 'react'
import Link from 'next/link'
import style from '../../styles/interface/Aside.module.css'
import { SlSymbleFemale ,SlSymbolMale} from "react-icons/sl";


function Aside() {
  return (
    <div className='aside'>
      <div className={style.main}>
        <sidebar>
          <div className={style.container}>
            <p><SlSymbleFemale /></p>
            <Link className={style.link} href={'/'}> Women's fashions </Link>

          </div>

          <div className={style.container}>
            <p><SlSymbolMale /></p>
            <Link className={style.link} href={'/'}> Man's fashions </Link>

          </div>
        </sidebar>
      </div>
    </div>
  )
}

export default Aside