var myForm= document.getElementById('my-form')


myForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    var name= document.getElementById('name')
    var email =document.getElementById('email')
    localStorage.setItem("name",name.value);
    localStorage.setItem("email",email.value);
    var n=localStorage.getItem("name")
    var e=localStorage.getItem("email")
    var newElement = document.createElement('p');
    newElement.appendChild(document.createTextNode("name "+n))
    newElement.appendChild(document.createTextNode(" email "+e))

    myForm.appendChild(newElement)


})
