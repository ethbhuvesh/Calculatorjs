document.addEventListener('DOMContentLoaded',()=> {

function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

let operator;
let number1;
let number2;

function operate(op, num1, num2) {
    switch(op) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1,num2);
            
    }
}

const buttons=document.querySelectorAll('.calc_button');

let keys=[];

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        keys.push(button.value);
        if(keys[3]=='=' && keys.length==4)
            {
                
                let result=operate(keys[1],parseInt(keys[0]),parseInt(keys[2]));
                document.getElementById('display').innerHTML=result;
                while(keys.length>0){
                    keys.pop();
                }
                keys.push(result);
            }
        if(keys.length==4 && keys[3]!='='){
            let result=operate(keys[1],parseInt(keys[0]),parseInt(keys[2]));
            document.getElementById('display').innerHTML=result;
            let op1=keys[3];
            while(keys.length>0){
                keys.pop();
            }
            keys.push(result);
            keys.push(op1);
        }
        
        if(button.value!='='){
            if(keys.length==1)
            {
                document.getElementById('display').innerHTML=keys[0];
                
            }
            else{
                document.getElementById('display').innerHTML+=button.value;
            }
            
        }
    
        if(button.value=='clear'){
            document.getElementById('display').innerHTML='0';
            while(keys.length>0){
                keys.pop();
            }
        }
    });
});

//console.log(keys);

});
