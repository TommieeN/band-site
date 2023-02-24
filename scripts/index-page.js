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
const apiKey = "https://project-1-api.herokuapp.com/comments?api_key=4c340e07-2457-4375-a64b-fb7ab3887b68"

const DisplayData = function () {
    axios
      .get(apiKey)
      .then((response) => {
        console.log(response.data);
        const commentData = response.data;
        commentData.sort((a, b) => b.timestamp - a.timestamp);
        commentList.innerHTML = "";
        commentData.forEach((commentData) => {
          displayComment(commentData);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  DisplayData();
//function to create element with class and text
function createElementWithClassAndText(element, text, className) {
    const createElement = document.createElement(element);
    element.textContent = text;
    element.classList.add(className);
    return createElement;
}

function displayComment(commentData){
    const listItem = document.createElement("li");// create list items
    listItem.classList.add("conversation__item"); 

    const commentTextContainer = document.createElement("div")//create container for the name, text, and date
    commentTextContainer.classList.add("conversation__comment-container")
    
    const nameDateContainer = document.createElement("div");//create container for name and date
    nameDateContainer.classList.add("conversation__name-date");

    const nameElement = document.createElement("p");//create text element for names
    nameElement.innerText = commentData.name;
    nameElement.classList.add("conversation__name");
 
    const dateElement = document.createElement("p");//time stamp converter function
    const formattedDate = timeStampConverter(commentData.timestamp);
    dateElement.innerText = formattedDate;
    dateElement.classList.add("conversation__date");

    const textElement = document.createElement("p");//create text element for text
    textElement.innerText = commentData.comment;
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

commentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (nameEl.value === "") {
    nameEl.classList.add("conversation__input-error");
    alert("Please enter your name.");
    return;
  }
  if (textEl.value === "") {
    textEl.classList.add("conversation__input-error");
    alert("Please enter your comment.");
    return;
  }

  const commentInfo = {
    name: nameEl.value,
    comment: textEl.value,
  };

  axios
    .post(apiKey, commentInfo)
    .then(() => {
      DisplayData();
    })
    .catch((error) => {
      console.log("error: ", error);
    });

  nameEl.classList.remove("conversation__input-error");
  textEl.classList.remove("conversation__input-error");
  event.target.reset();
});


