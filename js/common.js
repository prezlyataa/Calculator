/*** Init variables ***/

var buttons = document.getElementById('buttons');
var input_field = document.getElementById('input_field');
var equal = document.getElementById('btn-equal');
var clearBtn = document.getElementById('btn-clear');



/*** Onload window active field ***/

window.onload = function () {
    this.input_field.focus();
};



/*** function clear input ***/

function Clear() {
    this.input_field.value = '';
}

clearBtn.onclick = function () {
    Clear();
};



/*** function set value from button to input ***/

function setValue(num){
    if(num === 'C' || num === '=') {
        num = '';
    }
    this.input_field.value += num;
}

buttons.onclick = function(e) {
    if(e.target.tagName==='BUTTON' && e.target.classList.contains('btn')) {
        var currentButton = e.target.innerHTML;
        setValue(currentButton);
        console.log(currentButton);
    }
};



/*** function that execute values from field ***/

function Equal() {
    if(eval(this.input_field.value) === 'undefined') {
        this.input_field.value = '';
    } else {
        this.input_field.value = eval(this.input_field.value);
    }
}

equal.onclick = function() {
    Equal();
};



/*** Work with keyboard ***/

document.onkeydown = function (e) {
    switch (e.key) {
        case '=':
            Equal();
            break;
        case 'Enter':
            Equal();
        default:
            return;
    }
    e.preventDefault();
};