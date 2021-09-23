// Фокусировка инпутов формы
let authField = document.querySelectorAll('.auth-field'),
    forEach = Array.prototype.forEach;

forEach.call(authField, function (_this) {
    this.addEventListener('focusin', ClassAdd(_this, true));
    this.addEventListener('focusout', ClassAdd(_this, false));
})

// Функция для обработок действий
function ClassAdd (_this, _true) {
    let event;
    _true === true ? event = 'focusin' : event = 'focusout';
    _this.addEventListener(`${event}`, function () {
        let labels = this.getElementsByTagName('label'),
            inputs = this.getElementsByTagName('input'),
            textInputs = this.querySelectorAll('.textInputBox');
        for (let label of labels) {
            for (let textInput of textInputs) {
                if(event === 'focusin') {
                    label.classList.add('focus');
                    textInput.classList.add('focus');
                } else {
                    label.classList.remove('focus');
                    textInput.classList.remove('focus');
                }
            }
            for (let input of inputs) {
                if(input.value.length >= 1) {
                    label.classList.add('notempty');
                } else {
                    label.classList.remove('notempty');
                }
            }
        }
    })
}

// Кнопка "Показать пароль"
// Если произошел клик по иконке - показать пароль
let buttonPasswordOn = document.querySelectorAll('.auth-button-views-icon'),
    buttonPasswordOff = document.querySelectorAll('.auth-button-views-icon-closed'),
    pass = document.getElementById('password');

for (let element of buttonPasswordOn) {
    for (let elem of buttonPasswordOff) {
        
        element.addEventListener('click', () => {
            pass.setAttribute('type', 'text');
            element.classList.remove('active');
            elem.classList.add('active');
        })

        elem.addEventListener('click', () => {
            pass.setAttribute('type', 'password');
            element.classList.add('active');
            elem.classList.remove('active');
        })
    }
}

