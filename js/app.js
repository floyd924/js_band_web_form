document.addEventListener('DOMContentLoaded', () => {
  console.log('javascript loaded');

  const form = document.querySelector('#input-form');
  form.addEventListener("submit", handleFormSubmit);

  // make a delete button in html

  const nameInput = document.querySelector('#name');
  nameInput.addEventListener('input', handleFirstInput);


  const deleteButton = document.querySelector('#delete-button');
  deleteButton.addEventListener("submit", handleDeleteButton);

});

const handleFirstInput = function () {
  const text = document.querySelector('#name-result');
  text.textContent = "input detected";
};

const handleFormSubmit = function(event) {
  event.preventDefault();
  //  what happens when the form button is submitted?

  event.preventDefault();
  //create a new <li> called 'band'
  const newBand = document.createElement('li');

  // create a variable 'photo' from inputs
  //add 'photo' to 'band'

  // const photo = document.createElement('h3');
  // photo.textContent = `Photo link: ${this.photo.value}`;
  const photo = document.createElement('img');
  photo.src = `${this.photo.value}`;
  newBand.appendChild(photo);

  // create a variable 'name' from inputs
  //add 'name' to 'band'
  const name = document.createElement('h3');
  name.textContent = `Band name: ${this.name.value}`;
  newBand.appendChild(name);

  // create a variable 'genre' from inputs
  //add 'genre' to 'band'
  const genre = document.createElement('h3');
  genre.textContent = `Genre: ${this.genre.value}`;
  newBand.appendChild(genre);

  const rating = document.createElement('h3');
  rating.textContent = `Rating: ${this.rating.value}`;
  newBand.appendChild(rating);

  const instruments = document.createElement('h3');
    var array = [];
    var allValues = document.querySelectorAll('.instrument');
    allValues.forEach((v) => {
      if(v.checked){
        array.push(` ${v.value}`);
      }
    });

  // for(var i=0; i < checkedValues.length; i++){
  //   if(checkedValues[i].checked){
  //     array.push(checkedValues[i].value);
  //   }
  // }
  instruments.textContent = `Instruments: ${array}`;
  newBand.appendChild(instruments);

  // create a variable 'contact number' from inputs
  //add 'contact number' to 'band'
  const contact_num = document.createElement('h3');
  contact_num.textContent = `Contact: ${this.contact.value}`;
  newBand.appendChild(contact_num);
  //there might be a problem here with the - in the line above!

  //new item will have the class 'band'
  newBand.classList.add("band");

  // add 'band' to the <ul>
  const list_of_bands = document.querySelector('ul');
  list_of_bands.appendChild(newBand);

  document.getElementById('input-form').reset();

};

const handleDeleteButton = function () {
  allBands = document.querySelector('#entries');
  allBands.innerHTML = '';
};
