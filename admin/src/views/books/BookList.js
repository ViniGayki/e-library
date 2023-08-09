import React, { useEffect, useState } from 'react'

const BookList = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    loadBooksFromServer()
  }, [])

  const loadBooksFromServer = async () => {
    const response = await fetch('http://localhost:8080/books')
    const resData = await response.json()
    console.log(resData)
  }

  return <h1>BookList</h1>
}
export default BookList
