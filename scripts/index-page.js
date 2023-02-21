// Array of comments
const commentsArray = [
    {
        name: "Connor Walton",
        timestamp: 1613548800000,
        text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
        img:""
    },
    {
        name: "Emily Beach",
        timestamp: 1610179200000,
        text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
        img:""
    },
    {
        name: "Miles Acosta",
        timestamp: 1608451200000,
        text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
        img:""
    },

];

const timeStampConverter = function (timeStamp) { //time stamp converter function
    const timeDisplay = new Date(timeStamp);
    const dateformat = {   //convert date to use this format of time mm/dd/year
        month: "2-digit", 
        day: "2-digit", 
        year: "numeric"
    };
    const newTimeDisplay = timeDisplay.toLocaleDateString("en-US", dateformat);
    return newTimeDisplay;
}

const commentList = document.querySelector(".conversation__list");//select unordered list

function displayComment(comment){
    const listItem = document.createElement("li");// create list items
    listItem.classList.add("conversation__item"); 

    const commentTextContainer = document.createElement("div")//create container for the name, text, and date
    commentTextContainer.classList.add("conversation__comment-container")
    
    const nameDateContainer = document.createElement("div");//create container for name and date
    nameDateContainer.classList.add("conversation__name-date");

    const nameElement = document.createElement("p");//create text element for names
    nameElement.innerText = comment.name;
    nameElement.classList.add("conversation__name");
    
    const dateElement = document.createElement("p");//time stamp converter function
    const formattedDate = timeStampConverter(comment.timestamp);
    dateElement.innerText = formattedDate;
    dateElement.classList.add("conversation__date");

    const textElement = document.createElement("p");//create text element for text
    textElement.innerText = comment.text;
    textElement.classList.add("conversation__text");

    const commentImage = document.createElement("img"); //create image element for avatars
    commentImage.classList.add("conversation__avatar");
    commentImage.setAttribute("src", "https://via.placeholder.com/150/e1e1e1/e1e1e1.jpg");
    commentImage.setAttribute("alt", "avatar");
    
    commentTextContainer.appendChild(nameElement); //append name to container
    commentTextContainer.appendChild(dateElement); //append date to container
    nameDateContainer.appendChild(commentTextContainer); //append name and date container
    nameDateContainer.appendChild(textElement); // append text to container
    listItem.appendChild(commentImage); // apend image to list item
    listItem.appendChild(nameDateContainer); // append container w/ name and date to list item
    commentList.appendChild(listItem); // append list items to unordered list

};



const commentForm = document.querySelector(".conversation__form");
const commentInput = document.querySelector(".conversation__input")
const nameEl = document.getElementById("name");
const textEl = document.getElementById("comment");

function createCommentEntries() {
    commentsArray.sort((a, b) => b.timestamp - a.timestamp); //sort comments
    commentList.innerHTML = ""; // clear comments from page
    commentsArray.forEach((comment) => {
        displayComment(comment); //render comments from array
    });
}

commentForm.addEventListener("submit", (event) => {//submit function
    event.preventDefault();
    if (nameEl.value === "") {
        nameEl.classList.add("conversation__input-error");
        alert("Please enter your name.");
    }
    if (textEl.value === "") {
        textEl.classList.add("conversation__input-error");
        alert("Please enter your comment.")
        return;
    }
    const newCommentEntry = {
        name: nameEl.value,
        timestamp: Date.now(),
        text: textEl.value 
    };
    commentsArray.push(newCommentEntry);
    createCommentEntries();
    nameEl.classList.remove("conversation__input-error");
    textEl.classList.remove("conversation__input-error");
    event.target.reset(); // clear input fields after submit
});

createCommentEntries();  // render comments on page load

function getfocus() {
    document.getElementById("comment", "name").focus();
}