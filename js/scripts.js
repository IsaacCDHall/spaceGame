
function Captain(name,story,difficulty,funds,reputation,food){
  this.name=name;
  this.story=story;
  this.difficulty=difficulty;
  this.funds=funds;
  this.reputation=reputation;
  this.food=food;
  this.population=100;
  this.timeLine=0;
}

Captain.prototype.recMod=function(food,funds,reputation,population){
  this.food+=food;
  this.funds+=funds;
  this.reputation+=reputation;
  this.population+=population;
}

// function Event(question,option,food1,food2,funds1,funds2,reputation1,reputation2,population1,population2){
//   this.question=question;
//
// }



var newCaptain= new Captain("Crunch","Berzerker","easy",10000,10000,10000);

newCaptain;

$(document).ready(function(){
  var newCaptain=[];
  // Are you ready? Yes button is same as submit below
  // Should "No" answer take you to Game Over screen? Or reset form?
  ("#captainForm").submit(function(event){
    event.preventDefault();
    var nameInput= $("#nameInput").val();
    var storyInput= $("#storyInput").val();
    var difficultyInput= $("#difficultyInput").val();
    if (difficultyInput==="easy"){
      newCaptain= new Captain(nameInput,storyInput,difficultyInput,10000,10000,10000);
    } else if (difficultyInput==="medium"){
      newCaptain= new Captain(nameInput,storyInput,difficultyInput,1000,1000,1000);
    } else if (difficultyInput==="hard"){
      newCaptain= new Captain(nameInput,storyInput,difficultyInput,100,100,100);
    }
    $('#question1').show();
  });
  $('#questionOne')

  // function changeQuestion(question,one,two,food,){
  //   $('#question').text(question);
  //   $('#optionOne').text(one);
  //   $('#optiontwo').text(two);
  // });


//
//   function changeQuestion(question){
//     $('#question').text(question);
//   }
// });
//
// if(answer==="optionOne"){
//   newCaptain.recMod(10,-50,10,10)
// } else if(answer==="optionTwo"){
//   newCaptain.recMod(10,-50,10,10)
// }
