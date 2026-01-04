var add = document.querySelector("#add")
var addBook = document.querySelector("#addBook")
var cancel = document.querySelector("#cancel")
 
function delBook(event){

    //delete a book
    event.target.parentElement.remove()
}

add.addEventListener("click",(event)=>{

    //make the overlay and popup
    var overlay=document.querySelector("#overlay").style.display="block"
    var popup=document.querySelector("#popup").style.display="block"
})

cancel.addEventListener("click",(event)=>{

    //removing the overlay and popup
    var overlay=document.querySelector("#overlay").style.display="none"
    var popup=document.querySelector("#popup").style.display="none"
})

addBook.addEventListener("click",()=>{
    var addTitle = document.querySelector("#addTitle")
    var addAuthor = document.querySelector("#addAuthor")
    var addDescription = document.querySelector("#addDescription")
    var centerbody = document.querySelector("#centerbody")

    //alert when the input is empty
    if(addTitle.value==""||addAuthor.value==""||addDescription.value=="")
    {
        alert("Enter the Title, Author and Description!!")
    }
    else{
    //creates the container, called book
    var newBook = document.createElement("div")
    newBook.setAttribute("class","container")
    newBook.innerHTML=`<h2>${addTitle.value}</h2><h3>${addAuthor.value}</h3><p>${addDescription.value}</p><button class="del" onclick="delBook(event)">Delete</button>`
    centerbody.append(newBook)

        //clearing the inputs
    addTitle.value="";
    addAuthor.value="";
    addDescription.value="";


    //removing the overlay and popup
    var overlay=document.querySelector("#overlay").style.display="none"
    var popup=document.querySelector("#popup").style.display="none"

    }
})