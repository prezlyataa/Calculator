/*** Init variables ***/

var buttons = document.getElementById('buttons');
var input_field = document.getElementById('input_field');
var equal = document.getElementById('btn-equal');
var clearBtn = document.getElementById('btn-clear');
var history_field = document.getElementById('history');
var popup = document.getElementById('popup');
var closeBtn = document.getElementById('btn-close');
var cosBtn = document.getElementById('btn-cos');
var sinBtn = document.getElementById('btn-sin');
var sqrtBtn = document.getElementById('btn-sqrt');




/*** factory that create new methods ***/

var MethodsFactory = function(method) {
    this.method = method;
    var input_field = document.getElementById('input_field');
    var history_field = document.getElementById('history');
    this.execute = function() {
        input_field.value =  this.method(eval(input_field.value));
        history_field.value = input_field.value;
    }
};

var sqrtMethod = new MethodsFactory(Math.sqrt);
var cosMethod = new MethodsFactory(Math.cos);
var sinMethod = new MethodsFactory(Math.sin);

sqrtBtn.onclick = function() {
    sqrtMethod.execute();
};

cosBtn.onclick = function() {
    cosMethod.execute();
};

sinBtn.onclick = function() {
    sinMethod.execute();
};




/*** Onload window active field ***/

window.onload = function () {
   this.input_field.focus();
};



/*** function clear input ***/

function Clear() {
    this.input_field.value = '';
    this.history_field.value = '';
}

clearBtn.onclick = function () {
    Clear();
};



/*** function set value from button to input ***/

function setValue(num){
    if(num === 'C' || num === '=' || num === 'cos' || num === 'sin' || num === '√') {
        num = '';
    }
    this.input_field.value += num;
    this.history_field.value += num;
}

buttons.onclick = function(e) {
    if(e.target.tagName==='BUTTON' && e.target.classList.contains('btn')) {
        var currentButton = e.target.innerHTML;
        setValue(currentButton);
    }
};



/*** function that execute values from field ***/

function Equal() {
    if(this.input_field.value !== '') {
        this.input_field.value = eval(this.input_field.value);
    }
}

equal.onclick = function() {
    Equal();
};



/*** Work with keyboard ***/

document.onkeydown = function (e) {
    if(e.key === 'Enter' || e.key === '=') {
        input_field.value = eval(history_field.value);
    }
};



/*** function set value for history field ***/

function setHistory() {
    this.history_field.value = this.input_field.value;
}

input_field.oninput = function() {
    validation(input_field);
    setHistory();
};

history_field.oninput = function () {
    validation(history_field);
};



/*** validation fields only for numbers and operators ***/

function validation(field) {
    var regexNumbers = /[0-9]+$/;
    var regexSigns = new RegExp(/[\+\-\/\*\(\)\.]+$/g);

    if(field.value.match(regexSigns) || field.value.match(regexNumbers)) {
        return true;
    } else {
        field.value = field.value.substring(0, field.value.length - 1);
        return false;
    }
}



/*** execute history value ***/

history_field.onkeydown = function(e) {
    if(e.key === 'Enter' || e.key === '=') {
        input_field.value = eval(history_field.value);
    }
};



/*** show popup with tip ***/

function showPopup() {
    this.popup.style.opacity = '1';
}

function closePopup() {
    this.popup.style.opacity = '0';
}

history_field.onclick = function() {
    showPopup();
};

closeBtn.onclick = function() {
    closePopup();
};

