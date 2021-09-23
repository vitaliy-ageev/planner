// Фокусировка инпутов формы
let authField = document.querySelectorAll('.signin-field'),
    forEach = Array.prototype.forEach,
    login = document.getElementById('login'),
    password = document.getElementById('password'),
    submit = document.getElementById('submit');

forEach.call(authField, function (_this) {
    this.addEventListener('focusin', ClassAdd(_this, true));
    this.addEventListener('focusout', ClassAdd(_this, false));
})

// Функция для обработок действий
function ClassAdd (_this, _true) {
    let event;
    _true === true ? event = 'focusin' : event = 'focusout';
    _this.addEventListener(`${event}`, function () {
        let inputs = this.getElementsByTagName('input');
        for (let input of inputs) {
            if(event === 'focusin') {
                input.classList.add('focus');
            } else {
                input.classList.remove('focus');
            }

            input.addEventListener('input', () => {
                if(login.value.length >= 1 && password.value.length >= 1) {
                    submit.classList.add('active');
                } else {
                    submit.classList.remove('active');
                }
            })
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

