// Initialize Firebase
const config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
};
firebase.initializeApp(config);

// Reference messages collection
let messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactform').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  const name = getInputVal('name');
  const company = getInputVal('company');
  const email = getInputVal('email');
  const message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 sec
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  // Clear fields
  document.getElementById('contactform').reset();
}

// Get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to FireBase fn
function saveMessage(name, company, email, phone, message) {
  let newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message
  });
}
