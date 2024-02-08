import React from 'react'
import { useState } from 'react'

export const Component = () => {
    const [list, setList] = useState([
        {
            label: "Potato",
            id: 1,
            checked: false
        },
        {
            label: "Onion",
            id: 2,
            checked: true
        },
        {
            label: "Carrot",
            id: 3,
            checked: false
        }
    ])

    function handleCheck(id) {
        console.log('selected item has id : ', id);

        setList((Mylist) => {
            return Mylist.map(elem => elem.id === id ? { ...elem, checked: !elem.checked } : elem)
        })
    }
    //
    function handleDelete(id) {
        console.log('Delete request for item having id : ', id);

        const deletingItem = list.find((elem) => elem.id === id);
        if (deletingItem.checked === false)
            return;

        setList(Mylist => {
            return Mylist.filter(elem => elem.id !== id)
        })
        console.log('item is ready to be deleted');
    }

    function handleSubmit() {
        const checked = document.getElementById('labelCheckBox').checked;
        const label = document.getElementById('labelInputBox').value;
        const id = list.length + 1;
        const newItem = { checked, label, id }
        console.log(checked, label);

        document.getElementById('labelInputBox').value = '';
        document.getElementById('labelCheckBox').checked = false;

        setList(list.concat([newItem]))
    }


    return (
        <main>
            <div className="m-3">
                <ul>
                    {list.map((elem) => {
                        return (
                            <li className='listItem my-3' key={elem.id}>
                                <input className='mx-1' type='checkbox' checked={elem.checked} onClick={() => handleCheck(elem.id)} />
                                <label style={{ textDecoration: elem.checked ? "line-through" : "" }}
                                    onDoubleClick={() => handleCheck(elem.id)}>{elem.label}</label>
                                <button onClick={() => handleDelete(elem.id)} className='mx-2 btn btn-outline-danger btn-sm'>Delete<i class="bi bi-trash-fill mx-1"></i></button>
                            </li>
                        )
                    })}
                </ul>
                <label className="mx-2 mt-3">Add Item:</label>
                <input defaultChecked="false" id="labelCheckBox" className='mx-2' type='checkBox'></input>
                <input id="labelInputBox"></input>
                <button className='mx-2 btn btn-outline-success btn-sm' onClick={handleSubmit}>Submit<i className="bi bi-check mx-1"></i></button>
            </div>
        </main >
    )
}