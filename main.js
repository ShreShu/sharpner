/*
document.title="Title changed"
var headerTitle=document.getElementById('header-title');
headerTitle.innerText="Changed value"
headerTitle.innerHTML="<h2>new added title</h2>"
headerTitle.style.borderBottom='solid 3px black'


var main = document.querySelector('.title')
main.style.fontWeight='bold'
main.style.color='green'
*/
//getElementsByClassName//

/*var listItem= document.getElementsByClassName('list-group-item')
console.log(listItem)

listItem[1].textContent='hello'
listItem[2].style.backgroundColor='green'

for(let i=0;i<listItem.length;i++){
    listItem[i].style.fontWeight='bold'
}*/


//getElementsByTagName//

/*
var li =document.getElementsByTagName('li');
console.log(li)

li[1].textContent='li'
li[2].style.backgroundColor='red'
for(let i=0;i<li.length;i++){
    li[i].style.fontWeight='bold'
}
*/


/*
//QuerySelector//
var header = document.querySelector('#main-header')
console.log(header)

header.style.borderBottom='solid 4px #ccc';

var input= document.querySelector('input') //element name
//there r two input field , by default it will select 1st one
input.value='hello' 

var submit =document.querySelector('input[type="submit"]')
submit.value='send'

var item= document.querySelector('.list-group-item')//it will get the 1st element with the given class name
item.style.color='red'

var lastItem= document.querySelector('.list-group-item:last-child')
lastItem.style.color='blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color='coral'

secondItem.style.backgroundColor='green'

var thirdItem= document.querySelector('.list-group-item:nth-child(3)')
thirdItem.style.display='none'

*/


//QuerySelectorAll//
var titles = document.querySelectorAll('.title')
console.log(titles)

var odd= document.querySelectorAll('li:nth-child(odd)')
var even= document.querySelectorAll('li:nth-child(even)')

for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green'
}


var second= document.querySelectorAll('li')
second[1].style.color='green'
console.log(second)
