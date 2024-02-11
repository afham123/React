import React from 'react'
import { LineIem } from './LineIem';

export const Component = ({ handleSubmit, handleDelete, handleCheck, list, setList }) => {
    function searchHandler(event) {
        const val = event.target.value
        console.log('input box changed: ', val);
        setList(list.filter((elem) => {
            console.log(elem.label.toLowerCase(), val.toLowerCase())
            return elem.label.toLowerCase().includes(val.toLowerCase())
        }))
    }

    return (
        <main>
            <div className="m-3">
                <input placeholder='Search Item' onChange={(ev) => searchHandler(ev)} />
                <ul>
                    {
                        list.map((elem) => {
                            return <LineIem
                                elem={elem}
                                handleSubmit={handleSubmit}
                                handleDelete={handleDelete}
                                handleCheck={handleCheck} />
                        })
                    }
                </ul>
                <label className="mx-2 mt-3">Add Item:</label>
                <input defaultChecked="false" id="labelCheckBox" className='mx-2' type='checkBox'></input>
                <input id="labelInputBox"></input>
                <button className='mx-2 btn btn-outline-success btn-sm' onClick={handleSubmit}>Submit<i className="bi bi-check mx-1"></i></button>
            </div>
        </main >
    )
}


// not to write every coponent code inside component, rather than that we would be using the child concept.


// handlerfunction => coponent.js -> LineIem;
// handlerfunction => App.js -> coponent.js -> LineIem   : Props drilling.