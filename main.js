/*document.title="Title changed"
var headerTitle=document.getElementById('header-title');
headerTitle.innerText="Changed value"
headerTitle.innerHTML="<h2>new added title</h2>"
headerTitle.style.borderBottom='solid 3px black'


var main = document.querySelector('.title')
main.style.fontWeight='bold'
main.style.color='green'

var listItem= document.getElementsByClassName('list-group-item')
console.log(listItem)

listItem[1].textContent='hello'
listItem[2].style.backgroundColor='green'

for(let i=0;i<listItem.length;i++){
    listItem[i].style.fontWeight='bold'
}*/



var li =document.getElementsByTagName('li');
console.log(li)

li[1].textContent='li'
li[2].style.backgroundColor='red'
for(let i=0;i<li.length;i++){
    li[i].style.fontWeight='bold'
}
