import './book.css'
import styles from './book.module.css'
import { useEffect } from 'react'

interface PageElement extends HTMLElement {
  pageNum: number
}

const Book = () => {
  // Book pagination system
  useEffect(() => {
    const pages = document.getElementsByClassName('page') as HTMLCollectionOf<PageElement>

    for (let i = 0; i < pages.length; i++) {
      const page = pages[i]
      if (i % 2 === 0) {
        page.style.zIndex = String(pages.length - i)
      }
    }

    for (let i = 0; i < pages.length; i++) {
      const page = pages[i]
      page.pageNum = i + 1

      page.addEventListener('click', () => {
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
      })
    }
  }, [])

  return (
    <div className={styles.container}>
      <div className="book">
        <div id="pages" className="pages">
          <div className="page page1" />
          <div className="page"></div>
          <div className="page">
            <p className={styles.title}>Terrific Witches</p>
          </div>
          <div className="page">4</div>
          <div className="page">5</div>
          <div className="page page6">6</div>
        </div>
      </div>
    </div>
  )
}

export default Book
