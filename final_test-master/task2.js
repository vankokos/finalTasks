let myValidateForm = document.getElementById("MyValidateForm")
let checkbox = document.getElementById("agree")
let submit = document.getElementById("submit")
let inputs = document.querySelectorAll("input")


    inputs[0].addEventListener("change", () => {
        if(inputs[0].value.length < 4) {
            inputs[0].setCustomValidity("логин не может быть короче 4 символов")
            inputs[0].reportValidity()
            inputs[0].classList.add("error")
            inputs[2].classList.remove("OK")
        } else {
            inputs[0].classList.add("OK")
            inputs[2].classList.remove("error")
        }
    })

    inputs[1].addEventListener("change", () => {
        if(inputs[1].value.length < 4) {
            inputs[1].setCustomValidity("пароль не может быть короче 4 символов")
            inputs[1].reportValidity()
            inputs[1].classList.add("error")
            inputs[2].classList.remove("OK")
        } else {
            inputs[1].classList.add("OK")
            inputs[2].classList.remove("error")
        }
    })

    inputs[2].addEventListener("change", () => {
        if(inputs[2].value !== inputs[1].value) {
            inputs[2].setCustomValidity("ваши пароли не совпадают")
            inputs[2].reportValidity()
            inputs[2].classList.add("error")
            inputs[2].classList.remove("OK")
        } else {
            inputs[2].classList.add("OK")
            inputs[2].classList.remove("error")
        }
    })

    checkbox.addEventListener("input", () => {
        if(checkbox.checked == true) {
            submit.removeAttribute("disabled")
        } else {
            submit.setAttribute("disabled")
        }
    })

    submit.addEventListener("click", (event) => {
        event.preventDefault();
        
        if(inputs[0].classList.contains("OK") && inputs[1].classList.contains("OK") && inputs[2].classList.contains("OK")) {
            alert("hello, " + inputs[0].value + " your password is: " + inputs[1].value)
        } else {
            alert("you didn't meet all requirments")
        }
    })