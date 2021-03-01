let body = document.querySelector("body")

let index = document.getElementById("index")
let company = document.getElementById("company")
let email = document.getElementById("email")
let phone = document.getElementById("phone")
let address = document.getElementById("address")
fetch("http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2")
.then((response) => {
    response.json().then((json) => {
        var obj = json
        
        
        for (let i = 0; i < obj.length; i++) {
            let indexIn = document.createElement("p")
            let companyIn = document.createElement("p")
            let emailIn = document.createElement("p")
            let phoneIn = document.createElement("p")
            let addressIn = document.createElement("p")

            indexIn.innerHTML = obj[i]["index"]
            companyIn.innerHTML = obj[i]["company"]
            emailIn.innerHTML = obj[i]["email"]
            phoneIn.innerHTML = obj[i]["phone"]
            addressIn.innerHTML = obj[i]["address"]

            index.appendChild(indexIn)
            company.appendChild(companyIn)
            email.appendChild(emailIn)
            phone.appendChild(phoneIn)
            address.appendChild(addressIn)


        }

    })
})
