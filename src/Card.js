import React from 'react'

export const Card = ({ elem }) => {
    const src = `https://source.unsplash.com/random/?${elem.label}`;
    const title = elem.label

    return (
        <div className="card mx-2" style={{ width: "18rem", display: 'inline-block' }}>
            <img src={src} className="card-img-top" alt="..." style={{ height: '30vh' }} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}
