console.log('array of objects');
//this is an array of objects, each dog being the object, each stored inside curly braces and seperated by commas
var dogs = [
  {
    name:'Jimbo',
    id:'d1',
    breed:'German Shepard',
    colour: 'black',
    height: 60,
    age: 10,
    photo1:"images/d01.jpg",
    photo2:"images/d06.jpg",
    photo3:"images/d07.jpg"
  },
  {
    name:'Steven',
    id:'d2',
    breed:'Labrador',
    colour: 'gold',
    height: 47,
    age: 19,
    photo1:"images/d02.jpg",
    photo2:"images/d08.jpg",
    photo3:"images/d09.jpg"
  },
  {
    name:'Lucy',
    id:'d3',
    breed:'Great Dane',
    colour: 'white',
    height: 90,
    age: 20,
    photo1:"images/d03.jpg",
    photo2:"images/d10.jpg",
    photo3:"images/d11.jpg"
  },
  {
    name:'Michelle',
    id:'d4',
    breed:'Beagle',
    colour: 'red',
    height: 20,
    age: 1,
    photo1:"images/d04.jpg",
    photo2:"images/d12.jpg",
    photo3:"images/d13.jpg"
  },
  {
    name:'Frederick',
    id:'d5',//all image ids follow a pattern
    breed:'Dobermann',
    colour: 'blue',
    height: 40,
    age: 8,
    photo1:"images/d05.jpg",
    photo2:"images/d14.jpg",
    photo3:"images/d15.jpg"
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

var id = 1;//this variable is used to generate ids for images
function callTheDogs(){
for (var i = 0; i < dogs.length; i++) {
  console.log(dogs.length);
  document.getElementById('dogs').innerHTML
  += '<h2 class="dog-name p-3 font-weight-light">' + dogs[i].name + '</h2></br>'
  + '<img id="d'+id.toString()+'" class="dog-img shadow-lg p-0 container mb-5" src="' + dogs[i].photo1 + '"alt="dog"/>'
  + '<div class="container text-center float-right col-6">'
  + '<h2 class="dog-desc m-0 font-weight-lighter">' + 'ID Number - ' + dogs[i].id + '</h2></br>'
  + '<h2 class="dog-desc m-0 font-weight-lighter">' + 'Breed - ' + dogs[i].breed  + '</h2></br>'
  + '<h2 class="dog-desc m-0 font-weight-lighter">' + 'Colour - ' + dogs[i].colour + '</h2></br>'
  + '<h2 class="dog-desc m-0 font-weight-lighter">' + 'Height - ' + dogs[i].height + '</h2></br>'
  + '<h2 class="dog-desc m-0 font-weight-lighter">' + 'Age - ' + dogs[i].age + '</h2></br>'
  + '</div>';
  id++//id is incrimented automatically
}}

 callTheDogs();


//jquery
 $('.dog-img').on('click', function(){
   $('.myModal').show();
   console.log(this.id);
   for (var i = 0; i < dogs.length; i++) {
     //id property of dogs is checkedd with the equivalance of the image with the checked element
     if (dogs[i].id === this.id){
       console.log(dogs[i].name);
       console.log(dogs[i].breed);
       console.log(dogs[i].age);
       document.getElementById('modalContent').innerHTML
       = '<div class="text-center display-3">'+dogs[i].name + '</div></br>'
       // + '<img class="dog-img-modal p-4 container" src="' + dogs[i].photo1 + '"alt="dog"/>';


       + '<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">'
       +  '<ol class="carousel-indicators">'
       +    '<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>'
       +    '<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>'
       +    '<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>'
       +  '</ol>'
       +  '<div class="carousel-inner">'
       +    '<div class="carousel-item active">'
       +      '<img class="dog-img-modal p-4 container" src="' + dogs[i].photo1 + '"alt="dog"/>'
       +    '</div>'
       +    '<div class="carousel-item">'
       +      '<img class="dog-img-modal p-4 container" src="' + dogs[i].photo2 + '"alt="dog"/>'
       +    '</div>'
       +    '<div class="carousel-item">'
       +      '<img class="dog-img-modal p-4 container" src="' + dogs[i].photo3 + '"alt="dog"/>'
       +    '</div>'
       +  '</div>'
       +  '<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">'
       +    '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'
       +    '<span class="sr-only">Previous</span>'
       +  '</a>'
       +  '<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">'
       +    '<span class="carousel-control-next-icon" aria-hidden="true"></span>'
       +    '<span class="sr-only">Next</span>'
       +  '</a>'
       + '</div>';
     }
     var background = document.getElementById('mainCont');
     background.classList.add('blur');
   }
 });

$('.closeBar').on('click', function(){
  $('.myModal').hide();
  var background = document.getElementById('mainCont');
  background.classList.remove('blur');
})








document.getElementById('nameA').addEventListener('click', function(){
  document.getElementById('dogs').innerHTML = ' '
  dogs.sort(compare);//calling a function called compare to define the object property
  function compare(a,b){
    if (a.name > b.name){
      return 1;//return one means it returns true.
    } else if (a.name < b.name) {
      return -1;//returns false.
    }
  }
  callTheDogs();
});

document.getElementById('nameZ').addEventListener('click', function(){
  document.getElementById('dogs').innerHTML = ' '
  dogs.sort(compare);//calling a function called compare to define the object property
  function compare(a,b){
    if (a.name < b.name){
      return 1;//return one means it returns true.
    } else if (a.name > b.name) {
      return -1;//returns false.
    }
  }
  callTheDogs();
});



document.getElementById('ageUp').addEventListener('click', function(){
  document.getElementById('dogs').innerHTML = ' '
  dogs.sort(compare);//calling a function called compare to define the object property
  function compare(a,b){
    if (a.age > b.age){
      return 1;//return one means it returns true.
    } else if (a.age < b.age) {
      return -1;//returns false.
    }
  }
  callTheDogs();
});
document.getElementById('ageDown').addEventListener('click', function(){
  document.getElementById('dogs').innerHTML = ' '
  dogs.sort(compare);//calling a function called compare to define the object property
  function compare(a,b){
    if (a.age < b.age){
      return 1;//return one means it returns true.
    } else if (a.age > b.age) {
      return -1;//returns false.
    }
  }
  callTheDogs();
});








// buttons section
// document.getElementById('beagle').addEventListener('click', function(){
//   document.getElementById('dogs').innerHTML = ' ';
//   for (var i = 0; i < dogs.length; i++) {
//     if (dogs[i].breed == 'Beagle') {
//       callTheDogs();
//       console.log(dogs[i].breed);
//   }
// }});
//
//
// document.getElementById('height').addEventListener('click', function(){
//   console.log(dogs);
//   document.getElementById('dogs').innerHTML = ' '
//   for (var i = 0; i < dogs.height; i++) {
//     if (dogs[i].height >= 50) {
//       document.getElementById('dogs').innerHTML += '<h2 class="dog-desc m-0 font-weight-lighter">' + dogs[i].name;
//       document.getElementById('dogs').innerHTML += '<img class="dog-img" src="' + dogs[i].photo + '" alt="dog"/>';
//       document.getElementById('dogs').innerHTML += '<h2 class="dog-desc m-0 font-weight-lighter">' + 'ID - ' + dogs[i].id;
//       document.getElementById('dogs').innerHTML += '<h2 class="dog-desc m-0 font-weight-lighter">' + 'Breed - ' + dogs[i].breed;
//       document.getElementById('dogs').innerHTML += '<h2 class="dog-desc m-0 font-weight-lighter">' + 'Colour - ' + dogs[i].colour;
//       document.getElementById('dogs').innerHTML += '<h2 class="dog-desc m-0 font-weight-lighter">' + 'Height - ' + dogs[i].height;
//       document.getElementById('dogs').innerHTML += '<h2 class="dog-desc m-0 font-weight-lighter">' + 'Age - ' + dogs[i].age;
//       // document.getElementById('dogs').innerHTML += '<h2 class="dog-desc m-0 font-weight-lighter">' + 'Age - ' + dogs[i].abilities;
//
//     }
//   }
// });
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
