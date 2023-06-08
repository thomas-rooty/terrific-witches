'use client'
import { useState, useEffect, Suspense } from 'react'
import styles from './page.module.css'
import Loader from '@/components/loader/Loader'
import Header from '@/components/header/Header'
import Navbar from '@/components/navbar/Navbar'
import Book from '@/components/book/Book'

const Home = () => {
  const [showLoader, setShowLoader] = useState(true)
  const [activeClass, setActiveClass] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveClass(true)
    }, 700)

    const timeout = setTimeout(() => {
      setShowLoader(false)
    }, 1000)

    return () => {
      clearTimeout(timer)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <>
      <Suspense fallback={<Loader activeClass={activeClass} />}>
        {showLoader ? (
          <Loader activeClass={activeClass} />
        ) : (
          <>
            <main className={styles.main}>
              <Header />
              <Navbar />
              <Book />
            </main>
          </>
        )}
      </Suspense>
    </>
  )
}

export default Home
