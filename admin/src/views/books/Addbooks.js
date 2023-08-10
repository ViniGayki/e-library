import React, { useState, useEffect } from 'react'
import { CForm, CFormLabel, CFormInput, CFormTextarea, CButton } from '@coreui/react'

const Addbooks = () => {
  const [addbooks, setAddbooks] = useState([])
  const [addnewproduct, setAddnewproduct] = useState()
  const [addproduct, setAddproduct] = useState([])

  const submitform = () => {
    setAddproduct((prevState) => {
      return [...prevState, addnewproduct]
    })
  }

  useEffect(() => {}, [])

  return (
    <React.Fragment>
      <h2>Addbooks</h2>

      <CForm>
        <div className="mb-3">
          <CFormLabel htmlFor="exampleFormControlInput1">Book Name</CFormLabel>
          <CFormInput
            type="text"
            onChange={(e) => setAddnewproduct(e.target.value)}
            id=""
            placeholder="Enter the book name"
          />
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="exampleFormControlInput1">Publisher Name</CFormLabel>
          <CFormInput
            type="text"
            onChange={(e) => setAddnewproduct(e.target.value)}
            id=""
            placeholder="Enter the book Publisher name"
          />
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="exampleFormControlInput1">Auther Name</CFormLabel>
          <CFormInput
            type="text"
            onChange={(e) => setAddnewproduct(e.target.value)}
            id=""
            placeholder="Enter the book Auther name"
          />
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="exampleFormControlInput1">No-of-page</CFormLabel>
          <CFormInput
            type="text"
            onChange={(e) => setAddnewproduct(e.target.value)}
            id=""
            placeholder="Enter the No-of-Page"
          />
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="exampleFormControlInput1">Language</CFormLabel>
          <CFormInput
            type="text"
            onChange={(e) => setAddnewproduct(e.target.value)}
            id=""
            placeholder="Enter the book Language "
          />
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="exampleFormControlInput1">Category</CFormLabel>
          <CFormInput
            type="text"
            onChange={(e) => setAddnewproduct(e.target.value)}
            id=""
            placeholder="Enter the  book Category"
          />
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="exampleFormControlInput1">Sub Category</CFormLabel>
          <CFormInput
            type="text"
            onChange={(e) => setAddnewproduct(e.target.value)}
            id=""
            placeholder="Enter the  book Sub category"
          />
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="exampleFormControlInput1">Publish_date</CFormLabel>
          <CFormInput
            type="text"
            onChange={(e) => setAddnewproduct(e.target.value)}
            id=""
            placeholder="Enter the book Publish_date"
          />
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="exampleFormControlInput1">Price</CFormLabel>
          <CFormInput
            type="text"
            onChange={(e) => setAddnewproduct(e.target.value)}
            id=""
            placeholder="Enter the book Price"
          />
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="formFile">Book PDF</CFormLabel>
          <CFormInput
            type="file"
            onChange={(e) => setAddnewproduct(e.target.value)}
            id="formFile"
            placeholder="Attached the Book of PDF"
          />
        </div>

        <div className="mb-3">
          <CFormLabel htmlFor="exampleFormControlTextarea1">Note</CFormLabel>
          <CFormTextarea
            id="exampleFormControlTextarea1"
            onChange={(e) => setAddnewproduct(e.target.value)}
            rows={3}
          ></CFormTextarea>
        </div>
        {/* <button onClick={submitform}>Submit Data</button> */}
        <CButton color="primary" onClick={submitform}>
          SAVE
        </CButton>
      </CForm>
    </React.Fragment>
  )
}

export default Addbooks
