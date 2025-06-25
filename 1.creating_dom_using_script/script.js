var root_elem = document.body;
let number_of_divs = 5;
let hi_number_init = 0;
let imgs = [
    "https://plus.unsplash.com/premium_photo-1750063400799-d3d386a86c36?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1743601567013-b72682fdc511?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
]

// creating divs dynamically
for (let i = 0; i < number_of_divs; i++) {
    hi_number_init++;
    const newElement = document.createElement('div'); // Creates a new <div> element
    newElement.innerHTML = "Hi.." + hi_number_init
    root_elem.appendChild(newElement)
}
// End


function show(action) {
    let img_div_elem = root_elem.children[7];
    if(img_div_elem.children.length){
        for(const child of img_div_elem.children){
            img_div_elem.removeChild(child)
        }
        
    }
    const img_elem = document.createElement('img')
    if(action == 'show_red_door'){
        img_elem.src = imgs[0];
    }else{
        img_elem.src = imgs[1];
    }
    img_div_elem.appendChild(img_elem);
}