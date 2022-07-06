// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBHftiRQ9OQzAfF3ScUjZ1c_1PvpkdpHwU",
  authDomain: "contact-b0040.firebaseapp.com",
  projectId: "contact-b0040",
  storageBucket: "contact-b0040.appspot.com",
  messagingSenderId: "1012943639279",
  appId: "1:1012943639279:web:f3a61f2c7d06901c91011a",
  measurementId: "G-20R9KNB9KT",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}
