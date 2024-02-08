// import './App.css';
// import Name from './Name';
// import { Card } from './Card';
import { Component } from './Component';
import { Footer } from './Footer';
import { Header } from './Header';

function App() {
    const repeat = 5;
    const component = [];
    for (let i = 0; i < repeat; i++)
        component.push(1)

    return (
        <div className="App">
            <Header />
            <Component />
            <Footer />
        </div>
    );
}

export default App;