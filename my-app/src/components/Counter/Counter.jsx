import React, { useState } from 'react'

import Span from './Span';
// let count = 0;
export default function Counter() {
    console.log("i am re-render")
    const counter_useState = useState(0);
    const count = counter_useState[0];
    const Re_Rendering = counter_useState[1];
    let user = {
        name: 'Vishu_1',
        lname: "Barolia",
        add: "Akshra Threater",
        edc: "Graduation"
    }
    let span_arr = [];
    for (let key in user) {
        let string = `${key} - ${user[key]}`;
        span_arr.push(<span key={key}>{string} </span>)
    }

    function incr(){
        // count ++;
        Re_Rendering(50)
        // Re_Rendering(prev => prev+1)
        console.log('click on incr', count)
    }

    function dcr(){
        if(count > 0){
            Re_Rendering(count-1)
        }
        console.log('click on dcr', count)
    }

    return (
        <div>
            <button onClick={incr}>Increment</button>
            {/* <Span count={count}></Span> */}
            <span>{count}</span>
            <button onClick={dcr}>Decrement</button>
            {/* {span_arr} */}
        </div>
    )
}
