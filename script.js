//selecting popup box popup overlay button these 3 i want to change so i select that 3
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

//eppola button click agutho apola popupoverlay & popupbox ahum na none ah mathanum
addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//select cancel button bcz cancel button is defaultly work so i stop that
var cancelpopup = document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    //but when i click cancel button i none the popupoverley,popupbox
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

//select container,add-book,book-title-input,book-author-input,book-description-input
var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var bookdescriptioninput = document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
            <h5>${bookauthorinput.value}</h5>
            <p>${bookdescriptioninput.value}</p>
            <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    //value add pana apro popupbox.popupoverlay remove aydanum so i use again this
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

//select container->delete button 
function deletebook(event)
{
   event.target.parentElement.remove() //intha button yetha delete panum container ah so button oda parent yaru container so i use parentElement
}
