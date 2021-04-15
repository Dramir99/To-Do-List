const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

let id = 0
let uncheckedId = 0

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  //ask the user to enter the To Do task
  let todo = prompt('Enter to do item')
  //check if the user selects cancel or if the user doesnt input anything
  if(todo == null || todo.length === 0){
    return
  }
  else{
  //create a div element
  let toDOTile = document.createElement('div')
  //set the class attribute as 'todo-container'
  toDOTile.setAttribute('class', classNames.TODO_ITEM)
  //create checkbox for each to do task
  let toDoCheck = createCheckBox()
  //create the remove button for each to task element
  toDOTile.innerHTML = "<button id=\"" + id  + "\" type=\"button\" onClick=\"removeToDo(this)\">&times;</button>" + todo
  //increase the id for each element
  id++
  //append the checkbox to the buttton
  toDOTile.appendChild(toDoCheck)
  //append the button tile/checkbox tile to the overall list
  list.appendChild(toDOTile)
  //increase the item counter for each to do task element being created
  //parse the innerhtml string to integer then increase it by one
  let itemCounter = parseInt(itemCountSpan.innerHTML) + 1
  //set the new innerhtml to the new counter
  itemCountSpan.innerHTML = itemCounter
  }
  

}

function createCheckBox(){
  //create an input element
  let toDocheck = document.createElement('input')
  //set the type of the element to checkbox
  toDocheck.setAttribute('class', classNames.TODO_CHECKBOX)
  //set the type of the element to checkbox
  toDocheck.setAttribute('type', 'checkbox')
  //set the onclick 
  toDocheck.setAttribute('onClick', 'isChecked(this)')
  //increase the unchecked id
  uncheckedId++
  //increase the uncheckedcountspan for each checkbox element being created
  //parse the innerhtml string to integer then increase it by one
  let uncheckedItemCounter = parseInt(uncheckedCountSpan.innerHTML) + 1
  //set the new innerhtml to the new counter
  uncheckedCountSpan.innerHTML = uncheckedItemCounter
  //set the id as the uncheckedid
  toDocheck.setAttribute('id', uncheckedId)

  //set the onclick function
  toDocheck.onclick = function(){
    //if the user checks the item is true
    if(this.checked){
      //if the number is greater than 1 or equal to it
      if(parseInt(uncheckedCountSpan.innerHTML) >= 1){
      let uncheckedItemCounter = parseInt(uncheckedCountSpan.innerHTML) - 1
      uncheckedCountSpan.innerHTML = uncheckedItemCounter
      }
    }
    else{
      let uncheckedItemCounter = parseInt(uncheckedCountSpan.innerHTML) + 1
      uncheckedCountSpan.innerHTML = uncheckedItemCounter
    }
  }
  //return the todoCheck element
  return toDocheck
}

function isChecked(element){
  
  let toDoElement = element.parentNode

  if(toDoElement.checked){
      let uncheckedItemCounter = parseInt(uncheckedCountSpan.innerHTML) + 1
      uncheckedCountSpan.innerHTML = uncheckedItemCounter
    }

}

function removeToDo(element){
  //set the to do element
  let toDoElement = element.parentNode
  //if the element is not checked then decrease the size
  if(!toDoElement.checked){
    //if the number is greater than 1 or equal to it
    if(parseInt(uncheckedCountSpan.innerHTML) >= 1){
    let uncheckedItemCounter = parseInt(uncheckedCountSpan.innerHTML) - 1
    uncheckedCountSpan.innerHTML = uncheckedItemCounter
    }
  }
  //remove the child from the list
  list.removeChild(toDoElement)
  //decrease the item count
  if(parseInt(itemCountSpan.innerHTML) >= 1){
  let itemCounter = parseInt(itemCountSpan.innerHTML) - 1
  itemCountSpan.innerHTML = itemCounter
  }
  
}
