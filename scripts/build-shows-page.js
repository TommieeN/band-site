const showTimesArray = [
    {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA"
    },
    {
    date:"Tue Sept 21 2021",
    venue:"Pier 3 East",
    location:"San Francisco, CA"
    },
    {
    date:"Fri Oct 15 2021",
    venue:"View Lounge",
    location:"San Francisco, CA"
    },
    {
    date:"Sat Nov 06 2021",
    venue:"Hyatt Agency",
    location:"San Francisco, CA"
    },
    {
    date:"Fri Nov 26 2021",
    venue:"Moscow Center",
    location:"San Francisco, CA"
    },
    {
    date:"Wed Dec 15 2021",
    venue:"Press Club",
    location:"San Francisco, CA"
    },
];

const showUl = document.querySelector(".shows__list");//grabbing element for the comment list


// creating comment list
for(let i = 0; i < showTimesArray.length; i++){

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

    const dateItem = document.createElement("p");//Date details
    dateItem.innerText = showTimesArray[i].date;
    dateItem.classList.add("shows__date");
   
    const venueSubHeading = document.createElement("p");//Sub-heading for venue
    venueSubHeading.innerText = ("venue");
    venueSubHeading.classList.add("shows__sub-heading")

    const venueItem = document.createElement("p");//Venue details
    venueItem.innerText = showTimesArray[i].venue;
    venueItem.classList.add("shows__venue");
    
    const locationSubHeading = document.createElement("p");//Location sub-heading
    locationSubHeading.innerText = ("location");
    locationSubHeading.classList.add("shows__sub-heading");

    const locationItem = document.createElement("p");//Location details
    locationItem.innerText = showTimesArray[i].location;
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

//append sub headers to ".shows__tablet-display" element
showsTabletSubHeading.appendChild(showsTabletDate);
showsTabletSubHeading.appendChild(showsTabletVenue);
showsTabletSubHeading.appendChild(showsTabletLocation);


//create high-light hover
const showsList = document.querySelectorAll(".shows__item");
showsList.forEach((showItem) => {
    showItem.addEventListener("mouseover", () => {
        showItem.classList.add("shows__item-hover");
    });
    showItem.addEventListener("mouseleave", () => {
        showItem.classList.remove("shows__item-hover")
    })
})

//create high-light select
const activeRows = document.querySelectorAll(".shows__item");
activeRows.forEach((row) => {
    row.addEventListener("click", () => {
        activeRows.forEach((row) => {
            row.classList.remove("shows__item-selected");
        });
        row.classList.add("shows__item-selected");
    });
});