function useState(params){
    let first_value;
    // console.log(first_value);
    if(params !== undefined || params !== null || params !== NaN){
        first_value = params
    }else{
        first_value = undefined
    }

    let second_value = (inner_params) => {
        // console.log("second_val", inner_params)
        let prev = first_value;
        if(prev !== inner_params){
            first_value = inner_params;
        }
        return first_value;
    }

    return [first_value, second_value]
}

function counter(){
    let [count, setCount] = useState(0);

    return [function incr(){
        count = setCount(count+1)
        console.log(count);
    },
    function drc() {
            count = setCount(count-1)
        console.log(count);
    } 
    ]
}

let [incr, drc] = counter();

for(let i = 1; i <= 4; i++ ){
    incr();
}

drc();
drc();
drc();



