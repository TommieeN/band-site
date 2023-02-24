const timeStampConverter = function (timeStamp) { //time stamp converter function
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

const showUl = document.querySelector(".shows__list");//grabbing element for the comment list

const apiKey = "https://project-1-api.herokuapp.com/showdates?api_key=4c340e07-2457-4375-a64b-fb7ab3887b68"
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

  function createElementWithClassAndText(tagName, className, text) {
    const element = document.createElement(tagName);
    element.classList.add = className;
    element.innerText = text;
  }

// creating comment list
function displayShows(showData){
    const listItem = document.createElement("li");//create list items
    listItem.classList.add("shows__item");

    const dateContainer = document.createElement("div")//div container for date and date sub-header
    dateContainer.classList.add("shows__detail-container");

    const venueContainer = document.createElement("div");//div container for venue and venue sub-header
    venueContainer.classList.add("shows__detail-container");

    const locationContainer = document.createElement("div");//div container for location and location sub-header
    locationContainer.classList.add("shows__detail-container");

    const dateSubHeading = document.createElement ("p");//Sub-heading for date
    dateSubHeading.innerText = ("date")
    dateSubHeading.classList.add("shows__sub-heading");

    // const dateSubHeading = createElementWithClassAndText(
    //     "p", 
    //     "shows__sub-heading",
    //     "date"
    //     );

    const dateItem = document.createElement("p");
    const formattedDate = timeStampConverter(showData.date)//Date details
    dateItem.innerText = formattedDate
    dateItem.classList.add("shows__date");
   
    const venueSubHeading = document.createElement("p");//Sub-heading for venue
    venueSubHeading.innerText = ("venue");
    venueSubHeading.classList.add("shows__sub-heading")

    const venueItem = document.createElement("p");//Venue details
    venueItem.innerText = showData.place;
    venueItem.classList.add("shows__venue");
    
    const locationSubHeading = document.createElement("p");//Location sub-heading
    locationSubHeading.innerText = ("location");
    locationSubHeading.classList.add("shows__sub-heading");

    const locationItem = document.createElement("p");//Location details
    locationItem.innerText = showData.location;
    locationItem.classList.add("shows__location");
    
    const showsButton = document.createElement("button");//Shows button
    showsButton.innerText = ("buy tickets");
    showsButton.classList.add("shows__button");

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

const showsTabletDate = document.createElement ("p");//Sub-heading for tablet & desktop date
showsTabletDate.innerText = ("date")
showsTabletDate.classList.add("shows__tablet-heading");

const showsTabletVenue = document.createElement("p");//Sub-heading for tablet & desktop venue
showsTabletVenue.innerText = ("venue");
showsTabletVenue.classList.add("shows__tablet-heading")

const showsTabletLocation = document.createElement("p");//Sub-heading for tablet & desktop location
showsTabletLocation.innerText = ("location");
showsTabletLocation.classList.add("shows__tablet-heading");


showsTabletSubHeading.appendChild(showsTabletDate);
showsTabletSubHeading.appendChild(showsTabletVenue);
showsTabletSubHeading.appendChild(showsTabletLocation);//append sub headers to ".shows__tablet-display" element


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
