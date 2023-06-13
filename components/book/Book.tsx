import { useEffect, useRef } from 'react'
import './book.css'
import styles from './book.module.css'

interface PageElement extends HTMLElement {
  pageNum: number
}

const Book = () => {
  const cooldownRef = useRef(false)

  // Function to handle page click
  const handlePageClick = (page: PageElement) => {
    if (!cooldownRef.current) {
      if (page.pageNum % 2 === 0) {
        page.classList.remove('flipped')
        if (page.previousElementSibling) {
          page.previousElementSibling.classList.remove('flipped')
        }
      } else {
        page.classList.add('flipped')
        if (page.nextElementSibling) {
          page.nextElementSibling.classList.add('flipped')
        }
      }
      cooldownRef.current = true
      setTimeout(() => {
        cooldownRef.current = false
      }, 1000) // Set cooldown of 1 second to prevent spamming
    }
  }

  // Book pagination system
  useEffect(() => {
    const pages = document.getElementsByClassName('page') as HTMLCollectionOf<PageElement>

    for (let i = 0; i < pages.length; i++) {
      const page = pages[i]
      if (i % 2 === 0) {
        page.style.zIndex = String(pages.length - i)
      }
      page.pageNum = i + 1
      page.addEventListener('click', () => handlePageClick(page))
    }
  }, [])

  return (
    <div className={styles.container}>
      <div className="book">
        <div id="pages" className="pages">
          <div className="page page1" />
          <div className="page page2" />
          <div className="page page3" />
          <div className="page page4" />
          <div className="page page5" />
          <div className="page page6" />
          <div className="page page7" />
          <div className="page page8" />
          <div className="page page9" />
          <div className="page page10" />
          <div className="page page11" />
          <div className="page page12" />
          <div className="page page13" />
          <div className="page page14" />
        </div>
      </div>
    </div>
  )
}

export default Book
