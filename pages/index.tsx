import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { CssBaseline } from '@mui/material'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <CssBaseline/>
      <p>Hola</p>
    </div>
  )
}

export default Home
