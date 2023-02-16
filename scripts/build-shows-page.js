const showTimes = [
{
    container: "",
    date: "Sun Sep 05 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA"
}
];

const showList = document.getElementById("show-list");

for(let i = 0; i < showTimes.length; i++){
    const listItem = document.createElement('li');
    listItem.classList.add('show-list__item');

    const containerElement = document.createElement ('div');
    containerElement.innerText = showTimes[i].container;
    containerElement.classList.add('show-list__container');

    const dateElement = document.createElement('p');
    dateElement.innerText = showTimes[i].date;
    dateElement.classList.add('show-list__date');

    const venueElement = document.createElement('p');
    venueElement.innerText = showTimes[i].venue;
    venueElement.classList.add('show-list__venue');

    const locationElement = document.createElement('p');
    locationElement.innerText = showTimes[i].location;
    locationElement.classList.add('show-list__location');

    listItem.appendChild(containerElement);
    listItem.appendChild(dateElement);
    listItem.appendChild(venueElement);
    listItem.appendChild(locationElement);
    showList.appendChild(listItem);
}

