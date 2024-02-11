import React from 'react';
import { Card } from './Card';

export const Images = ({ list }) => {
    return (
        <div>
            {list.map((elem) => <Card key={elem.id} elem={elem} />)}
        </div>
    )
}

// The compoenent which calls the other componenet is a parent, which is being called is a child component.

/*
props : {
    component : [1,1,1,1]
}

const component = props.component;
const {component} = props;   // object destructuring.


info : {
    firstName : 'star',
    lastName : 'Edward'
}

const firstName = info.firstName;
const {firstName} = info;     // object destructuring
*/