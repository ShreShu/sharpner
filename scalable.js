var myForm = document.getElementById('my-form')
var container = document.getElementById('userData')

var formData = JSON.parse(localStorage.getItem("userData")) || [];

window.onload = () => {
    let myObj_deSerialized = JSON.parse(localStorage.getItem("userData"))
    container.innerHTML = "";
    myObj_deSerialized.forEach(user => {
        container.innerHTML += `
    <p>name : ${user.name}
    email: ${user.email}
    </p>
`
    })

}



myForm.addEventListener('submit', (e) => {
    e.preventDefault()
    var n = document.getElementById('name');
    var e = document.getElementById('email');
    formData.push({
        name: n.value,
        email: e.value
    })
    localStorage.setItem("userData", JSON.stringify(formData));

    let myObj_deSerialized = JSON.parse(localStorage.getItem("userData"))

    n.value = '';
    e.value = ''

    container.innerHTML = "";
    myObj_deSerialized.forEach(user => {
        container.innerHTML += `
    <p>name : ${user.name}
    email: ${user.email}
    </p>
`
    });







    //console.log(myObj_Serialized);

})
