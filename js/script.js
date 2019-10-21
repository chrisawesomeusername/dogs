console.log('array of objects');
//this is an array of objects, each dog being the object, each stored inside curly braces and seperated by commas
var dogs = [
  {
    name:'Jimbo',
    id:'d01',
    breed:'German Shepard',
    colour: 'black',
    height: 60,
    age: 10,
    // abilities: 'super strength' 'flight',
    photo:"images/d01.jpg"
  },
  {
    name:'Steven',
    id:'d02',
    breed:'Labrador',
    colour: 'gold',
    height: 47,
    age: 19,
    photo:"images/d02.jpg"
  },
  {
    name:'Lucy',
    id:'d03',
    breed:'Great Dane',
    colour: 'white',
    height: 90,
    age: 20,
    photo:"images/d03.jpg"
  },
  {
    name:'Michelle',
    id:'d04',
    breed:'Beagle',
    colour: 'red',
    height: 20,
    age: 1,
    photo:"images/d04.jpg"
  },
  {
    name:'Frederick',
    id:'d05',
    breed:'Dobermann',
    colour: 'blue',
    height: 40,
    age: 8,
    photo:"images/d05.jpg"
  }
];

for(var i=0; i<dogs.length; i++){
  document.getElementById('dogs').innerHTML += '<h2 class="dog-desc m-0 font-weight-lighter">' + dogs[i].name;
  document.getElementById('dogs').innerHTML += '<img class="dog-img" src="' + dogs[i].photo + '" alt="dog"/>';
  document.getElementById('dogs').innerHTML += '<h2 class="dog-desc m-0 font-weight-lighter">' + 'ID - ' + dogs[i].id;
  document.getElementById('dogs').innerHTML += '<h2 class="dog-desc m-0 font-weight-lighter">' + 'Breed - ' + dogs[i].breed;
  document.getElementById('dogs').innerHTML += '<h2 class="dog-desc m-0 font-weight-lighter">' + 'Colour - ' + dogs[i].colour;
  document.getElementById('dogs').innerHTML += '<h2 class="dog-desc m-0 font-weight-lighter">' + 'Height - ' + dogs[i].height;
  document.getElementById('dogs').innerHTML += '<h2 class="dog-desc m-0 font-weight-lighter">' + 'Age - ' + dogs[i].age;
  // document.getElementById('dogs').innerHTML += '<h2 class="dog-desc m-0 font-weight-lighter">' + 'Age - ' + dogs[i].abilities;
}

// for (var i = 0; i < dogs.length; i++) {
//   document.getElementById('dogs').innerHTML
//
//   += '<h2 class="dog-name m-0 col row font-weight-lighter">' + dogs[i].name + '</h2>'
//   + '<img class="row dog-img container mb-5 d-block" src="' + dogs[i].photo + '"alt="dog"/>'
//   + '<ul>'
//   + '<li class="dog-desc m-0 font-weight-lighter float-right">' + 'ID Number - ' + dogs[i].id + '</li>'
//   + '<li class="dog-desc m-0 font-weight-lighter float-right">' + 'Breed - ' + dogs[i].breed  + '</li>'
//   + '</ul>';
//
// };

//buttons section
document.getElementById('beagle').addEventListener('click', function(){
  console.log(dogs);
  document.getElementById('dogs').innerHTML = ' '
  for (var i = 0; i < dogs.length; i++) {
    if (dogs[i].breed === 'Beagle') {
      document.getElementById('dogs').innerHTML += '<h2 class="dog-desc col m-0 font-weight-lighter">' + dogs[i].name;
      document.getElementById('dogs').innerHTML += '<img class="dog-img" src="' + dogs[i].photo + '" alt="dog"/>';
      document.getElementById('dogs').innerHTML += '<h2 class="dog-desc m-0 d-block font-weight-lighter">' + 'ID - ' + dogs[i].id;
      document.getElementById('dogs').innerHTML += '<h2 class="dog-desc m-0 font-weight-lighter">' + 'Breed - ' + dogs[i].breed;
      document.getElementById('dogs').innerHTML += '<h2 class="dog-desc m-0 font-weight-lighter">' + 'Colour - ' + dogs[i].colour;
      document.getElementById('dogs').innerHTML += '<h2 class="dog-desc m-0 font-weight-lighter">' + 'Height - ' + dogs[i].height;
      document.getElementById('dogs').innerHTML += '<h2 class="dog-desc m-0 font-weight-lighter">' + 'Age - ' + dogs[i].age;
      // document.getElementById('dogs').innerHTML += '<h2 class="dog-desc m-0 font-weight-lighter">' + 'Age - ' + dogs[i].abilities;

    }
  }
});


document.getElementById('height').addEventListener('click', function(){
  console.log(dogs);
  document.getElementById('dogs').innerHTML = ' '
  for (var i = 0; i < dogs.height; i++) {
    if (dogs[i].height >= 50) {
      document.getElementById('dogs').innerHTML += '<h2 class="dog-desc m-0 font-weight-lighter">' + dogs[i].name;
      document.getElementById('dogs').innerHTML += '<img class="dog-img" src="' + dogs[i].photo + '" alt="dog"/>';
      document.getElementById('dogs').innerHTML += '<h2 class="dog-desc m-0 font-weight-lighter">' + 'ID - ' + dogs[i].id;
      document.getElementById('dogs').innerHTML += '<h2 class="dog-desc m-0 font-weight-lighter">' + 'Breed - ' + dogs[i].breed;
      document.getElementById('dogs').innerHTML += '<h2 class="dog-desc m-0 font-weight-lighter">' + 'Colour - ' + dogs[i].colour;
      document.getElementById('dogs').innerHTML += '<h2 class="dog-desc m-0 font-weight-lighter">' + 'Height - ' + dogs[i].height;
      document.getElementById('dogs').innerHTML += '<h2 class="dog-desc m-0 font-weight-lighter">' + 'Age - ' + dogs[i].age;
      // document.getElementById('dogs').innerHTML += '<h2 class="dog-desc m-0 font-weight-lighter">' + 'Age - ' + dogs[i].abilities;

    }
  }
});




document.getElementById('changeName').addEventListener('click', function(){
  var oldName = document.getElementById('oldName').value;
  var newName = document.getElementById('newName').value;
  console.log(oldName, newName);
  for (var i = 0; i < dogs.length; i++) {
    if (oldName === dogs[i].name){
      dogs[i].name = newName;      
    }
  }
})
