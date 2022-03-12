function createCommentBox(commButton, commInput, mainHTML) {
    commButton.onclick = function () {
        console.log(commInput.value)
        var newComm = document.createElement("div")
        newComm.classList.add("commentBox")
        mainHTML.appendChild(newComm)
    
        var accountDetails = document.createElement("div")
        accountDetails.classList.add("accountDetailsClass")
        newComm.appendChild(accountDetails)
    
        var accountImg = document.createElement("img")
        accountImg.src = "https://pickaface.net/gallery/avatar/byotavio56f0b2aeb17c9.png"
        accountDetails.appendChild(accountImg)
    
        var emailAddress = document.createElement("p")
        emailAddress.textContent = "denis@test.com"
        accountDetails.appendChild(emailAddress)
    
        var textPlacement = document.createElement("div")
        textPlacement.innerHTML = commInput.value
        textPlacement.classList.add("textPlacementBorder")
        newComm.appendChild(textPlacement)
        commInput.value = ""
    
    
        var deleteButton = document.createElement("button");
        var deleteButtonPlacement = document.createElement("div")
        newComm.appendChild(deleteButtonPlacement)
    
        deleteButton.classList.add("deleteButtonClass");
        deleteButton.textContent = "DELETE"
        deleteButtonPlacement.appendChild(deleteButton)
    
        deleteButton.onclick = function (event) {
            console.log(event.target)
            mainHTML.removeChild(newComm)
            deleteButtonPlacement.removeChild(event.target)
    
        }
    
    }
}

function createCommentsSection() {
    var mainHTML = document.querySelector("body")
    var commInput = document.getElementById("comm-input");
    var commButton = document.getElementById("comm-button");

    createCommentBox(commButton, commInput, mainHTML)

}

createCommentsSection()



