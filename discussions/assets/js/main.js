 var firebaseConfig = {
    apiKey: "AIzaSyC1qGtIQejXE8oID1JvkeO1FNQxOZPjzzk",
    authDomain: "contact-form-dd735.firebaseapp.com",
    databaseURL: "https://contact-form-dd735.firebaseio.com",
    projectId: "contact-form-dd735",
    storageBucket: "contact-form-dd735.appspot.com",
    messagingSenderId: "917236780436",
    appId: "1:917236780436:web:e042a16da5a2ac2523d381",
    measurementId: "G-N52TJGY5EV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var messagesRef = firebase.database().ref('messages');
  document.getElementById('submit').addEventListener('submit', submitForm);

  function submitForm(e){
    e.preventDefault();
    var message = getInputVal('message');
    saveMessage(message);
    document.querySelector('.alert').style.display = 'block';
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('vscode').reset();
  }
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  function saveMessage(message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      message:message
    });
  }