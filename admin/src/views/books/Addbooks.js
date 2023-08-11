import React, { useState, useEffect } from 'react'
import { CForm, CFormLabel, CFormInput, CFormTextarea, CButton } from '@coreui/react'
import { json } from 'react-router-dom'

const Addbooks = () => {
  const [book, setBook] = useState({})
  const [name, setName] = useState()

  const uploadBookDetails = async (e) => {
    e.preventDefault()

    const requestOption = {
      method: 'POST',
      headers: { 'Content-Type': 'application / json' },
      body: JSON.stringify({ name: name }),
    }

    const response = await fetch('http://localhost:8080/books', requestOption)
    const resData = await response.json()
    console.log(resData)
    // setBook(resData)
  }

  return (
    <React.Fragment>
      <h2>Addbooks</h2>

      <CForm method="post" onSubmit={uploadBookDetails}>
        <div className="mb-3">
          <CFormLabel htmlFor="exampleFormControlInput1">Book Name</CFormLabel>
          <CFormInput
            type="text"
            onChange={(e) => setName(e.target.value)}
            id=""
            placeholder="Enter the book name"
          />
        </div>
        {/* <div className="mb-3">
          <CFormLabel htmlFor="exampleFormControlInput1">Publisher Name</CFormLabel>
          <CFormInput
            type="text"
            onChange={(e) => setName(e.target.value)}
            id=""
            placeholder="Enter the book Publisher name"
          />
        </div> */}
        {/* <div className="mb-3">
          <CFormLabel htmlFor="exampleFormControlInput1">Auther Name</CFormLabel>
          <CFormInput
            type="text"
            onChange={(e) => setAddnewproduct(e.target.value)}
            id=""
            placeholder="Enter the book Auther name"
          />
        </div> */}
        {/* <div className="mb-3">
          <CFormLabel htmlFor="exampleFormControlInput1">No-of-page</CFormLabel>
          <CFormInput
            type="text"
            onChange={(e) => setAddnewproduct(e.target.value)}
            id=""
            placeholder="Enter the No-of-Page"
          />
        </div> */}
        {/* <div className="mb-3">
          <CFormLabel htmlFor="exampleFormControlInput1">Language</CFormLabel>
          <CFormInput
            type="text"
            onChange={(e) => setAddnewproduct(e.target.value)}
            id=""
            placeholder="Enter the book Language "
          />
        </div> */}
        {/* <div className="mb-3">
          <CFormLabel htmlFor="exampleFormControlInput1">Category</CFormLabel>
          <CFormInput
            type="text"
            onChange={(e) => setAddnewproduct(e.target.value)}
            id=""
            placeholder="Enter the  book Category"
          />
        </div> */}
        {/* <div className="mb-3">
          <CFormLabel htmlFor="exampleFormControlInput1">Sub Category</CFormLabel>
          <CFormInput
            type="text"
            onChange={(e) => setAddnewproduct(e.target.value)}
            id=""
            placeholder="Enter the  book Sub category"
          />
        </div> */}
        {/* <div className="mb-3">
          <CFormLabel htmlFor="exampleFormControlInput1">Publish_date</CFormLabel>
          <CFormInput
            type="text"
            onChange={(e) => setAddnewproduct(e.target.value)}
            id=""
            placeholder="Enter the book Publish_date"
          />
        </div> */}
        {/* <div className="mb-3">
          <CFormLabel htmlFor="exampleFormControlInput1">Price</CFormLabel>
          <CFormInput
            type="text"
            onChange={(e) => setAddnewproduct(e.target.value)}
            id=""
            placeholder="Enter the book Price"
          />
        </div> */}
        {/* <div className="mb-3">
          <CFormLabel htmlFor="formFile">Book PDF</CFormLabel>
          <CFormInput
            type="file"
            onChange={(e) => setAddnewproduct(e.target.value)}
            id="formFile"
            placeholder="Attached the Book of PDF"
          />
        </div> */}

        {/* <div className="mb-3">
          <CFormLabel htmlFor="exampleFormControlTextarea1">Note</CFormLabel>
          <CFormTextarea
            id="exampleFormControlTextarea1"
            onChange={(e) => setAddnewproduct(e.target.value)}
            rows={3}
          ></CFormTextarea>
        </div> */}
        <input name="submit" type="submit" />

        {/* <CButton color="primary" onClick={submitform}>
          SAVE
        </CButton> */}
      </CForm>
    </React.Fragment>
  )
}

export default Addbooks
