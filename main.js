console.log("Hello, Airtable!");

var Airtable = require("airtable");
console.log(Airtable);

var base = new Airtable({ apiKey: "keyi1IBlNibommJFD" }).base(
  "app0OfTXzDJWZCYRA"
);


base("room").select({}).eachPage(gotPageOfRoom, gotAllRoom);

const room = [];

const CONTAINER_WIDTH = document.getElementById('container').offsetWidth;
const CONTAINER_HEIGHT = document.getElementById('container').offsetHeight;

function gotAllRoom(err) {
  console.log("gotAllRoom()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
 }

   consoleLogRoom();
  showRoom();

}


 function gotPageOfRoom (records, fetchNextPage) {
   room.push(...records);
   fetchNextPage();
 }


// just loop through the books and console.log them
function consoleLogRoom() {
  console.log("consoleLogRoom()");
  room.forEach(room => {
    console.log("Room:", room);
  });
}


 
function showRoom() {
  console.log("showRoom()");
  room.forEach(item => {

    // var roomTitle = document.createElement("h1");
    // roomTitle.classList.add("room-title");
    // roomTitle.innerText = item.fields.title;
    //   document.body.append(roomTitle);
    //      document.querySelector("#container").append(roomTitle);


    //   var nameofDescription = document.createElement("p");
    //   nameofDescription.classList.add("room-description");
    // nameofDescription.innerText = item.fields.description;
    //   document.body.append(nameofDescription);
    //     document.querySelector("#container").append(nameofDescription);

      var roomImage = document.createElement("img");
      roomImage.classList.add("room-image");
    roomImage.src = item.fields.image[0].url;
    roomImage.dataset.title = item.fields.title;
      document.querySelector("#container").append(roomImage);
      // roomImage.style.setProperty(‘—top’, `${Math.random() * 100}%`);
      // roomImage.style.setProperty(‘—left’, `${Math.random() * 100}%`);
      roomImage.style.setProperty('--left', `${Math.random() * 100}%`);
      roomImage.style.setProperty('--top', `${Math.random() * 100 - 10}%`);

      // roomImage.style.left = `${Math.random() * 100}%`;
// roomImage.style.top = `${Math.random() * 100}%`;



roomImage.addEventListener('click', () => {
  createModal({
    image: item.fields.image[0].url,
    title: item.fields.title,
    description: item.fields.description
  });
});

document.querySelector('#close-info').addEventListener('click', () => {
    document.querySelector('#info').classList.remove("show");
})


function createModal({ image, title, description }) {
  document.querySelector('#room-title').innerText = title;
  document.querySelector('#room-description').innerText = description;
  document.querySelector('#info').classList.add("show");

  // const roomImage = document.createElement('img');
  // roomImage.src = image;
  // roomImage.alt = '';
  // const roomTitle = document.createElement('h1');
  // roomTitle.classList.add('room-title');
  // roomTitle.textContent = title;
  // const roomDescription = document.createElement('p');
  // roomDescription.classList.add('room-description');
  // roomDescription.textContent = description;
  // const content = document.createElement('article');
  // content.append(roomImage, roomTitle, roomDescription);
  // const exitImg = document.createElement('img');
  // exitImg.src = 'assets/x.png';
  // exitImg.alt = 'Close';
  // const exitButton = document.createElement('button');
  // exitButton.classList.add('exit-button');
  // exitButton.appendChild(exitImg);
  // const modal = document.createElement('div');
  // modal.classList.add('modal');
  // modal.append(content, exitButton);
  // document.body.appendChild(modal);
}
  });
}



