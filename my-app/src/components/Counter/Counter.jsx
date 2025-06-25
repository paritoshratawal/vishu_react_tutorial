import React from 'react'

export default function Counter() {
    let count = 3;
    let user = {
        name: 'Vishu',
        lname: "Barolia",
        add: "Akshra Threater",
        edc: "Graduation"
    }
let span_arr = [];
    for(let key in user){
        let string = `${key} - ${user[key]}`;
        span_arr.push(<span key={key}>{string} </span> )
    }
    
    return (
        <div>
            <button>Increment</button>
            <span>{count}</span>
            <button>Decrement</button>
            {span_arr}
        </div>
    )
}
