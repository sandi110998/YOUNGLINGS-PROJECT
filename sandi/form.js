// Initialize Firebase (ADD YOUR OWN DATA)
var firebaseConfig = {
    apiKey: "AIzaSyC_po2wWnxMnoDYZSD_FcujYTgAKXAPBjo",
    authDomain: "contact-form-fed37.firebaseapp.com",
    databaseURL: "https://contact-form-fed37.firebaseio.com",
    projectId: "contact-form-fed37",
    storageBucket: "contact-form-fed37.appspot.com",
    messagingSenderId: "557356331525",
    appId: "1:557356331525:web:d823b4c6d9dd575045626c",
    measurementId: "G-WK0D9W968P"
  };
  // Initialize Firebase
  firebase.initializeApp (firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contact-form').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, email, message);
  
    // Clear form
    document.getElementById('contact-form').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      message:message
    });
  }