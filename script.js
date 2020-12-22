var input=document.getElementById("userinput");
var button=document.getElementById("enter");
var ul=document.querySelector("ul");
var listItems=document.getElementsByTagName("li"); 


function inputLength(){
	return input.value.length;
}

//function to create and add a list element
function createListElement(){
var li=document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";

		var btn = document.createElement("button");
		btn.appendChild(document.createTextNode("Delete!"));
		li.appendChild(btn);
 		btn.onclick = removeParent;
}

//using the createListElement() function to add a list element after clicking the "Enter" button on the page
function addListAfterClick(){
    if (inputLength()>0){
    	createListElement();

    }
}

//using the createListElement() function to add a list element when you use the enter key on the keyboard
//keycode 13 is for the enter key on the keyboard
function addListAfterKeypress(event){
	  if (inputLength()>0 && event.keyCode===13){
	  	createListElement();
	  }
}

button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);

//function to toggle when clicked on any list item
ul.onclick=function(event){
	var target=event.target;
	target.classList.toggle("done");
}

function listLength(){
	return listItems.length;
}

function deleteButton(){
	var btn=document.createElement("button");
btn.appendChild(document.createTextNode("Delete!"));
listItems[i].appendChild(btn);
btn.onclick=removeParent;
}

for( i=0;i<listLength();i++){

deleteButton();
}

function removeParent(evt){
	evt.target.parentNode.remove();
} 