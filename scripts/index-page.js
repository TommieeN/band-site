// Array of comments
const commentsArray = [
    {
        name: "Connor Walton",
        timestamp: 1594944000,
        text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
        img:""
    },
    {
        name: "Emily Beach",
        timestamp: 07/17/2020,
        text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
        img:""
    },
    {
        name: "Miles Acosta",
        timestamp: 12/20/2020,
        text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
        img:""
    },

];

const timeStampConverter = function (timeStamp) { //time stamp converter function
    const timeDisplay = new Date(timeStamp);
    const newTimeDisplay = timeDisplay.toLocaleDateString();
    return newTimeDisplay;
}

const commentList = document.querySelector(".conversation__list");//create unordered list

for(let i = 0; i < commentsArray.length; i++){ //for loop for list 

    const listItem = document.createElement("li");// create list items
    listItem.classList.add("conversation__item"); 

    const commentTextContainer = document.createElement("div")//create container for the name, text, and date
    commentTextContainer.classList.add("conversation__comment-container")
    
    const nameDateContainer = document.createElement("div");//create container for name and date
    nameDateContainer.classList.add("conversation__name-date");

    const nameElement = document.createElement("p");//create text element for names
    nameElement.innerText = commentsArray[i].name;
    nameElement.classList.add("conversation__name");
    
    const dateElement = document.createElement("p");//time stamp converter function
    timeStampConverter(commentsArray[i].timestamp); //FIX TIME STAMP CONVERTER DATE
    dateElement.classList.add("conversation__date");

    const textElement = document.createElement("p");//create text element for text
    textElement.innerText = commentsArray[i].text;
    textElement.classList.add = ("conversation__text");

    const commentImage = document.createElement("img"); //create image element for avatars
    commentImage.classList.add("conversation__avatar");
    commentImage.src = "./assets/Images/Mohan-muruge.jpg";
    commentImage.alt = "avatar";
    
    commentTextContainer.appendChild(nameElement); //append name to container
    commentTextContainer.appendChild(dateElement); //append date to container
    nameDateContainer.appendChild(commentTextContainer); //append name and date container
    nameDateContainer.appendChild(textElement); // append text to container
    listItem.appendChild(commentImage); // apend image to list item
    listItem.appendChild(nameDateContainer); // append container w/ name and date to list item
    commentList.appendChild(listItem); // append list items to unordered list

};











