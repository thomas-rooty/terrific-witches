import styles from './Book.module.css'

const Book = () => {
  const pages = Array.from({ length: 32 }, (_, i) => i + 1)

  const handleClick = (pageNum: number) => {
    const currentPage = document.getElementById(`page-${pageNum}`)
    const nextPage = pageNum % 2 === 0 ? currentPage!.previousElementSibling! : currentPage!.nextElementSibling!
    currentPage!.classList.toggle(styles.flipped)
    nextPage!.classList.toggle(styles.flipped)
  }

  return (
    <div className={styles.book}>
      <div className={styles.pages}>
        {pages.map((pageNum) => (
          <div key={pageNum} id={`page-${pageNum}`} className={`${styles.page} ${pageNum % 2 === 0 ? '' : styles.odd}`} onClick={() => handleClick(pageNum)}>
            {pageNum % 2 === 0 ? <p>Open Me, please!</p> : <p>Hello there!</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Book
