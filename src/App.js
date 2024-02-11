// import './App.css';
// import Name from './Name';

import { Component } from './Component';
import { Footer } from './Footer';
import { Header } from './Header';
import { Images } from './Images';
import { useState } from 'react'

function App() {
    const repeat = 4;
    const component = [];
    for (let i = 0; i < repeat; i++)
        component.push(1 + i)   //component : [1,2,3,4]

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
    ]);


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
        <div className="App">
            <Header />
            <Component handleCheck={handleCheck} handleSubmit={handleSubmit} handleDelete={handleDelete} list={list} setList={setList} />
            <Images component={component} />
            <Footer />
        </div>
    );
}

export default App;