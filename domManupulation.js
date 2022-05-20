var form=document.getElementById('addForm');
var itemList = document.getElementById('items')

//add text
form.addEventListener('submit',(e)=>{
    e.preventDefault()

    //create new li
    var newItem = document.getElementById('item');
    var li= document.createElement('li');
    li.className='list-group-item'
    li.appendChild(document.createTextNode(newItem.value))
    itemList.appendChild(li)

//create a delete button element

var deleteButton = document.createElement('button');
deleteButton.className='btn btn-danger btn-sm float-right delete';
deleteButton.appendChild(document.createTextNode('X'))
li.appendChild(deleteButton)

// creating a edit button
var editBtn = document.createElement('button');
editBtn.className='btn btn-success btn-sm float-right success'
editBtn.appendChild(document.createTextNode('!'));
li.appendChild(editBtn)

    console.log(newItem.value);

})


//remove item
itemList.addEventListener('click',(e)=>{
    e.preventDefault();
if(e.target.classList.contains('delete')){
    if(confirm('Are you sure')){
        var li= e.target.parentElement;
        itemList.removeChild(li)
    }
}
})

