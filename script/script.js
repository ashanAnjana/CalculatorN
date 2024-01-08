let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button'); //all buttons include the buttons variables

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click' , (e) => {
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'CE'){
            string = "";
            input.value = string;
        }//CE button
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }//DEL button
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})