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

// for(var i=0; i<dogs.length; i++){
//   document.getElementById('dogs').innerHTML += '<h2 class="dog-desc m-0 font-weight-lighter">' + dogs[i].name;
//   document.getElementById('dogs').innerHTML += '<img class="dog-img" src="' + dogs[i].photo + '" alt="dog"/>';
//   document.getElementById('dogs').innerHTML += '<h2 class="dog-desc m-0 font-weight-lighter">' + 'ID - ' + dogs[i].id;
//   document.getElementById('dogs').innerHTML += '<h2 class="dog-desc m-0 font-weight-lighter">' + 'Breed - ' + dogs[i].breed;
//   document.getElementById('dogs').innerHTML += '<h2 class="dog-desc m-0 font-weight-lighter">' + 'Colour - ' + dogs[i].colour;
//   document.getElementById('dogs').innerHTML += '<h2 class="dog-desc m-0 font-weight-lighter">' + 'Height - ' + dogs[i].height;
//   document.getElementById('dogs').innerHTML += '<h2 class="dog-desc m-0 font-weight-lighter">' + 'Age - ' + dogs[i].age;
//   // document.getElementById('dogs').innerHTML += '<h2 class="dog-desc m-0 font-weight-lighter">' + 'Age - ' + dogs[i].abilities;
// }
function callTheDogs(){
for (var i = 0; i < dogs.length; i++) {
  console.log(dogs.length);
  document.getElementById('dogs').innerHTML
  += '<h2 class="dog-name p-3 font-weight-light">' + dogs[i].name + '</h2></br>'
  + '<img class="dog-img container mb-5" src="' + dogs[i].photo + '"alt="dog"/>'
  + '<div class="container text-center float-right col-6">'
  + '<h2 class="dog-desc m-0 font-weight-lighter">' + 'ID Number - ' + dogs[i].id + '</h2></br>'
  + '<h2 class="dog-desc m-0 font-weight-lighter">' + 'Breed - ' + dogs[i].breed  + '</h2></br>'
  + '<h2 class="dog-desc m-0 font-weight-lighter">' + 'Colour - ' + dogs[i].colour + '</h2></br>'
  + '<h2 class="dog-desc m-0 font-weight-lighter">' + 'Height - ' + dogs[i].height + '</h2></br>'
  + '<h2 class="dog-desc m-0 font-weight-lighter">' + 'Age - ' + dogs[i].age + '</h2></br>'
  + '</div>';
}}

 callTheDogs();


// buttons section
document.getElementById('beagle').addEventListener('click', function(){
  document.getElementById('dogs').innerHTML = ' ';
  for (var i = 0; i < dogs.length; i++) {
    if (dogs[i].breed === 'Beagle') {
      callTheDogs();
      console.log(dogs[i].breed);
  }
}});


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
//
//
//
//
// document.getElementById('changeName').addEventListener('click', function(){
//   var oldName = document.getElementById('oldName').value;
//   var newName = document.getElementById('newName').value;
//   console.log(oldName, newName);
//   for (var i = 0; i < dogs.length; i++) {
//     if (oldName === dogs[i].name){
//       dogs[i].name = newName;
//     }
//   }
// })
