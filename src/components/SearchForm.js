import React from 'react'

import './SearchForm.scss';

export default function SearchForm({ handleSubmit, handleChange, searchTerm }) {
    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <label for="search">Search by Pokemon Number</label>
            <div className='search-input'>
                <input type="text" name="search" onChange={handleChange} value={searchTerm}></input>
                <button onSubmit={handleSubmit}>Search</button>
            </div>
        </form>
    )
}
