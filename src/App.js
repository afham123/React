// import './App.css';
// import Name from './Name';

import { Component } from './Component';
import { Footer } from './Footer';
import { Header } from './Header';
import { Images } from './Images';
import { useEffect, useState } from 'react'

function App() {
    const repeat = 4;
    const component = [];
    for (let i = 0; i < repeat; i++)
        component.push(1 + i)   //component : [1,2,3,4]

    const [list, setList] = useState(JSON.parse(localStorage.getItem('MyGrocerList')) || []);

    // useEffect is a React hook that expects a callback function and an array(optional) as a parameter.
    // The callback function passed to the useEffect would be rerunning depeneding on the array that is passed as a parameter.
    // If the value that is there inside the array changes its value then the use Effectcall back fn.  would be running again

    useEffect(() => {
        handleSave();
    }, [list]);

    function handleCheck(id) {
        console.log('selected item has id : ', id);
        setList((Mylist) => {
            return Mylist.map(elem => elem.id === id ? { ...elem, checked: !elem.checked } : elem)
        })
    }
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

        const id = (list.length !== 0) ? Math.max(...list.map(elem => elem.id)) + 1 : 1;
        const newItem = { checked, label, id }
        // console.log(checked, label);

        document.getElementById('labelInputBox').value = '';
        document.getElementById('labelCheckBox').checked = false;

        setList(list.concat([newItem]))
    }

    function handleSave() {
        localStorage.setItem('MyGrocerList', JSON.stringify(list))
    }

    return (
        <div className="App">
            <Header />
            <Component handleCheck={handleCheck} handleSubmit={handleSubmit} handleDelete={handleDelete} list={list} setList={setList} />
            <Images list={list} />
            <Footer />
        </div>
    );
}

// TO get the list back when we clear the search box item, the lists should be deleting.
export default App;