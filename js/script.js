// script.js
var data ;

async function fetchAndDisplayList() {
  try {
    // Fetch the JSON file
    const response = await fetch('./json/data.json');
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    data = await response.json();
    
    const listElement = document.getElementById('list');
    
    
    data.forEach((item, index) => {

    const tag = `<li><a class="btn btn-primary" data-num=${index} data-bs-toggle="modal" href="#pop" role="button">${item.title}</a></li>`;

      
      
      // Append list item to the list element
      listElement.insertAdjacentHTML('beforeend', tag);
    });
  } catch (error) {
    console.error('Error fetching or parsing JSON:', error);
  }
}

// Call the function when the window loads
window.onload = fetchAndDisplayList;
let tit = document.getElementById("title");
let img = document.getElementById("img");
let icon = document.getElementById("dev")
let desc = document.getElementById("desc");

var exampleModal = document.getElementById('pop')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  var dataNum = button.getAttribute('data-num');
  console.log(data[dataNum],tit);
  tit.innerHTML = data[dataNum].title;
  img.src = `/img/img_0${dataNum}.jpg`;
  icon.innerHTML = "";
  data[dataNum].dev.forEach(el => {
    var tag = `<i class="${el}"></i>`
    icon.insertAdjacentHTML('beforeend', tag);
  });
  desc.innerHTML = data[dataNum].description;
})