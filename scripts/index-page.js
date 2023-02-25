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

//grab data from axios for displaying comments
const DisplayData = function () {
    axios
      .get(apiKey)
      .then((response) => {
        console.log(response.data);
        const commentData = response.data;
        commentData.sort((a, b) => b.timestamp - a.timestamp);
        commentList.innerHTML = "";
        commentData.forEach((commentData) => {
          displayComment(commentData, response);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  DisplayData();
  
//function to create element with class and text
function createElementWithClassAndText(element, className, text) {
    const createElement = document.createElement(element);
    createElement.textContent = text;
    createElement.classList.add(className);
    return createElement;
}
//function to create element with class
function createElementWithClass(element, className) {
  const createElement = document.createElement(element);
  createElement.classList.add(className);
  return createElement
}

//creating all of comment list
function displayComment(commentData){
    const listItem = createElementWithClass ("li", "conversation__item");

    const commentTextContainer = createElementWithClass (
      "div", 
      "conversation__comment-container"
      );
    
    const nameDateContainer = createElementWithClass (
      "div",
      "conversation__name-date"
    );

    const nameElement = createElementWithClassAndText (
      "p",
      "conversation__name",
      commentData.name
    );
    const formattedDate = timeStampConverter(commentData.timestamp);

    const dateElement = createElementWithClassAndText (
      "p",
      "conversation__date",
      formattedDate 
      );

    const textElement = document.createElement("p");
    textElement.innerText = commentData.comment;

    const commentImage = document.createElement("img"); 
    commentImage.classList.add("conversation__avatar");
    commentImage.setAttribute("src", "https://via.placeholder.com/150/e1e1e1/e1e1e1.jpg");
    commentImage.setAttribute("alt", "avatar");

    const buttonWrapper = createElementWithClass (
      "div",
      "conversation__button-wrap"
    );

    const likeButton = createElementWithClassAndText (
      "button",
      "conversation__like-button",
      `${commentData.likes} likes`
    );
    
    commentTextContainer.appendChild(nameElement); //append name to container
    commentTextContainer.appendChild(dateElement); //append date to container
    nameDateContainer.appendChild(commentTextContainer); //append name and date container
    nameDateContainer.appendChild(textElement); // append text to container
    buttonWrapper.appendChild(likeButton);
    listItem.appendChild(commentImage); // apend image to list item
    nameDateContainer.appendChild(buttonWrapper);
    listItem.appendChild(nameDateContainer); // append container w/ name and date to list item 
    commentList.appendChild(listItem); // append list items to unordered list

    const id = commentData.id;
    likeButton.addEventListener("click", () => {
      axios
      .put(
        `https://project-1-api.herokuapp.com/comments/${id}/like?api_key=4c340e07-2457-4375-a64b-fb7ab3887b68`
      )
      .then((response) => {
        console.log(response);
        commentData.likes = response.data.likes;
        likeButton.innerText = `${response.data.likes} likes`;
      })
      .catch((error) => {
        console.log(error);
      });
    });
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
  }

  if (textEl.value === "") {
    textEl.classList.add("conversation__input-error");
    alert("Please enter your comment.");
  }

  if (nameEl.value === "" || textEl.value === "") {
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


