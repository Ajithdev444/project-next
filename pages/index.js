import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [count, setCount] = useState(0)

  const handleClickDecrement =() => {
    setCount(count-1)
  }

    const handleClickIncrement =() => {
    setCount(count+1)
  }

  const setToZero = () => {
    setCount(0)
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="Home" content="About blog serverblog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
       
        <div className='maindiv'>
          <div>
          <Link href='/aboutus'>AboutUs</Link>
          <Link href='/blog'>Blog</Link>
          <Link href='/articless'>Post</Link>
          </div>
        
          <h1 className='heading'>Counter</h1>
          <button onClick={handleClickDecrement} className='btn'>-</button>
          <button className='btn'>{count}</button>
          <button onClick={handleClickIncrement} className='btn'>+</button>
          <button onClick={setToZero} className='btn'>setToZero</button>
        </div>
      </main>
    </>
  )
}
