
//time stamp converter function
const timeStampConverter = function (timeStamp) { 
    const timeDisplay = new Date(timeStamp);
    const dateformat = { 
        weekday: "short",
        month: "short", 
        day: "2-digit", 
        year: "numeric"
    };
    const newTimeDisplay = timeDisplay.toLocaleDateString("en-US", dateformat);
    return newTimeDisplay;
}

//grabbing element for the comment list
const showUl = document.querySelector(".shows__list");


const apiKey = "https://project-1-api.herokuapp.com/showdates?api_key=8fe4c583-d608-4b2a-b513-88834b758015"
const DisplayData = function () {
    axios
      .get(apiKey)
      .then((response) => {
        console.log(response.data);
        const showData = response.data;
        showData.forEach((showData) => {
          displayShows(showData);
        });
        hoverFunction();
        highLightFunction();
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
    return createElement
};
//function to create element with class
function createElementWithClass(element, className) {
  const createElement = document.createElement(element);
  createElement.classList.add(className);
  return createElement
};

// creating comment list
function displayShows(showData){
    const listItem = createElementWithClass (
        "li",
        "shows__item"
    );

    const dateContainer = createElementWithClass (
        "div",
        "shows__detail-container"
    );

    const venueContainer = createElementWithClass (
        "div",
        "shows__detail-container"
    );

    const locationContainer = createElementWithClass (
        "div",
        "shows__detail-container"
    );

    const dateSubHeading = createElementWithClassAndText (
        "p", 
        "shows__sub-heading",
        "date"
    );

    const formattedDate = timeStampConverter(showData.date)
    const dateItem = createElementWithClassAndText (
        "p",
        "shows__date",
        formattedDate 
    );
   
    const venueSubHeading = createElementWithClassAndText (
        "p",
        "shows__sub-heading",
        "venue"  
    );

    const venueItem = createElementWithClassAndText (
        "p",
        "shows__venue",
        showData.place  
    );
    
    const locationSubHeading = createElementWithClassAndText (
        "p",
        "shows__sub-heading",
        "location"  
    );

    const locationItem = createElementWithClassAndText (
        "p",
        "shows__location",
        showData.location 
    );
    
    const showsButton = createElementWithClassAndText (
        "button",
        "shows__button",
        "buy tickets"  
    );

//append show list
    dateContainer.appendChild(dateSubHeading);
    dateContainer.appendChild(dateItem);
    venueContainer.appendChild(venueSubHeading);
    venueContainer.appendChild(venueItem);
    locationContainer.appendChild(locationSubHeading)
    locationContainer.appendChild(locationItem);
    listItem.appendChild(dateContainer);
    listItem.appendChild(venueContainer);
    listItem.appendChild(locationContainer);
    listItem.appendChild(showsButton);
    showUl.appendChild(listItem)
}

//tablet and desktop sub-heading
const showsTabletSubHeading = document.querySelector(".shows__tablet-display");//
const showsTabletDate = createElementWithClassAndText (
    "p",
    "shows__tablet-heading",
    "date"  
);

const showsTabletVenue = createElementWithClassAndText (
    "p",
    "shows__tablet-heading",
    "venue"  
);

const showsTabletLocation = createElementWithClassAndText (
    "p",
    "shows__tablet-heading",
    "location"  
);

//append sub headers 
showsTabletSubHeading.appendChild(showsTabletDate);
showsTabletSubHeading.appendChild(showsTabletVenue);
showsTabletSubHeading.appendChild(showsTabletLocation);

//create high-light hover
const hoverFunction = function (){
    const showsList = document.querySelectorAll(".shows__item");
showsList.forEach((showItem) => {
    showItem.addEventListener("mouseover", () => {
        showItem.classList.add("shows__item-hover");
    });
    showItem.addEventListener("mouseleave", () => {
        showItem.classList.remove("shows__item-hover")
    });
});
};

//create high-light select
const highLightFunction = function () {
    const activeRows = document.querySelectorAll(".shows__item");
activeRows.forEach((row) => {
    row.addEventListener("click", () => {
        activeRows.forEach((row) => {
            row.classList.remove("shows__item-selected");
        });
        row.classList.add("shows__item-selected");
    });
});
};