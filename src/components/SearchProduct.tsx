import React from 'react'

const SearchProduct = () => {
// const SearchProduct = ({name, productTypes, productManufacturings, type= "checkbox" }) => {
  return (
    <div>
      <div className='search-container'>
        <form action='' className='form'>
          <div className='form-row'>
            <label className='form-label' htmlFor="type">Loại đồng hồ</label>
            <input className='form-input' type="text" />
          </div>
          <div className='form-row'>
            <label className='form-label' htmlFor="manufacturing">Hãng sản xuất</label>
            <input className='form-input' type="text" />
          </div>
        </form>
      </div>
      
      <div className='search-container'>
        <form action='' className='name'>
          <div className='form-row'>
            <label className='form-label' htmlFor="name">Tên đồng hồ</label>
            <input className='form-input' type="text" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default SearchProduct