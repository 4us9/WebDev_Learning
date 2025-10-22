//to send backend message

const xhr = new XMLHttpRequest(); //creates object

// two params:
//one, what type of request and second is where it is at
xhr.open('GET', 'https://supersimplebackend.dev');

xhr.send();

