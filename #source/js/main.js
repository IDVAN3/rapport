//@prepros-append script.js
'use strict'


$(document).ready(function () {

    /* select */

    let select = function() {
        let selectItem = document.querySelectorAll('.select__item');

        selectItem.forEach( item => {
            item.addEventListener('click', selectChoose)
        });

        function selectChoose(){
            let text = this.innerText;
            let currentText = this.closest('.topmenu').querySelector('.select-region');
            currentText.innerText = text;
        }
    }

    select();
    /* select end*/


    /* email corrert */
    let email = document.querySelector('#email');
    let email2 = document.querySelector('#email2');
    let buttonLoginForm = document.querySelector('.form-btn');
    let buttonLoginForm2 = document.querySelector('.form-btn2');
    let message = $('.form-message');
    let message2 = $('.form-message2');
    let errorLogin = document.getElementById('error-login');
    let errorLogin2 = document.getElementById('error-login2');

    buttonLoginForm.onclick = function() {
        event.preventDefault();
        message.addClass('active');
        if (email.value == ''){
            errorLogin.innerHTML = 'Это обязательное поле!';
            message.css({'color':'red'});
        }
        else if (email.value.indexOf("@") == -1){
            errorLogin.innerHTML = 'Введите корректный email!';
            message.css({'color':'red'});
        }
        else{
            errorLogin.innerHTML = 'Ваше сообщение отправлено. Ждите!';
            message.css({'color':'#30d05d'});
        }
    }
    buttonLoginForm2.onclick = function() {
        event.preventDefault();
        message2.addClass('active');
        if (email2.value == ''){
            errorLogin2.innerHTML = 'Это обязательное поле!';
            message2.css({'color':'red'});
        }
        else if (email2.value.indexOf("@") == -1){
            errorLogin2.innerHTML = 'Введите корректный email!';
            message2.css({'color':'red'});
        }
        else{
            errorLogin2.innerHTML = 'Ваше сообщение отправлено. Ждите!';
            message2.css({'color':'#30d05d'});
        }
    }

    /* email corrert end*/

    

});