import React from 'react'

export const LineIem = ({ elem, handleCheck, handleDelete }) => {
    return (
        <li className='listItem my-3' key={elem.id}>
            <input className='mx-1' type='checkbox' checked={elem.checked} onClick={() => handleCheck(elem.id)} />
            <label style={{ textDecoration: elem.checked ? "line-through" : "" }}
                onDoubleClick={() => handleCheck(elem.id)}>{elem.label}</label>
            <button onClick={() => handleDelete(elem.id)} className='mx-2 btn btn-outline-danger btn-sm'>Delete<i class="bi bi-trash-fill mx-1"></i></button>
        </li>
    )
}
