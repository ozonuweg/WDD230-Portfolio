// List of links for each week's note and assignments
const links = [
    {
        label: "Week 1 Notes",
        url: "week1/index.html"
    },
    {
        label: "Week 2 Notes",
        url: "week2/index.html"
    },
    {
        label: "Week 3 Notes",
        url: "week3/index.html"
    },
    {
        label: "Week 4 Notes",
        url: "week4/index.html"
    },
    {
        label: "Week 5 Notes",
        url: "week5/index.html"
    },
    {
        label: "Week 6 Notes",
        url: "week6/index.html"
    }
  ]
 
// Create/link the id for the HTML unordered list
const list_of_weeks = document.getElementById("weeks")

// Read the list of links above, iterate through each item to create li and a elements, then add to ol from the html file
  for (let i = 0; i < links.length; i++) {
    var item = document.createElement("li");
    var a = document.createElement("a");

    a.textContent = links[i].label;
    a.setAttribute('href', links[i].url);
    
    item.appendChild(a);
    list_of_weeks.append(item);  
}

// Get Current Year & Last updated
let currentYear = new Date().getFullYear();
document.querySelector('#currentYear').textContent = currentYear;
document.querySelector('#lastmod').textContent = document.lastModified;