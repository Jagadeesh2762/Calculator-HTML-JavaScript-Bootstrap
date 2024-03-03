//clear
document.querySelector('#clear').addEventListener('click',()=>{
    document.querySelector('#display').value = '';
}) 

//backspace

const backspace=() =>{
    const temp = document.querySelector('#display').value.slice(0,-1);
    document.querySelector('#display').value = temp;
}

//numbers

const one=()=>{
    document.querySelector("#display").value += "1";
}

const two=()=>{
    document.querySelector("#display").value += "2";
}

const three=()=>{
    document.querySelector("#display").value += "3";
}

const four=()=>{
    document.querySelector("#display").value += "4";
}

const five=()=>{
    document.querySelector("#display").value += "5";
}

const six=()=>{
    document.querySelector("#display").value += "6";
}

const seven=()=>{
    document.querySelector("#display").value += "7";
}

const eight=()=>{
    document.querySelector("#display").value += "8";
}

const nine=()=>{
    document.querySelector("#display").value += "9";
}

const zero=()=>{
    document.querySelector("#display").value += "0";
}

const dot=()=>{
    document.querySelector("#display").value += ".";
}