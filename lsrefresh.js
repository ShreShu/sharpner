var myForm= document.getElementById('my-form')
var container= document.getElementById('userData')

window.onload=()=>{
    let myObj_deSerialized=JSON.parse(localStorage.getItem("data"))

    var newElement = document.createElement('p');
    newElement.appendChild(document.createTextNode("name "+myObj_deSerialized.name))
    newElement.appendChild(document.createTextNode(" email "+myObj_deSerialized.email))
    container.appendChild(newElement)

    console.log(myObj_deSerialized);
}

let myObj={
    name:"",
    email:""
}


myForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    var name= document.getElementById('name').value;
    var email =document.getElementById('email').value;

myObj.name=name;
myObj.email=email
let myObj_Serialized=JSON.stringify(myObj);

localStorage.setItem("data",myObj_Serialized)



console.log(myObj_Serialized);

})
