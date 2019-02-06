// Can navigate to new page for gameOver Screens using JS

// window.location.replace('url')

function Captain(name,funds,reputation,food,fuel){
  this.name=name;
  this.funds=funds;
  this.reputation=reputation;
  this.food=food;
  this.fuel=fuel;
  // this.story=story;
  // this.difficulty=difficulty;
  // this.population=100;
  // this.timeLine=0;
}

Captain.prototype.recMod=function(food,funds,reputation,population){
  this.food+=food;
  this.funds+=funds;
  this.reputation+=reputation;
  // this.population+=population;
  console.log(this);
}


$(document).ready(function(){
  var newCaptain;
  $("#nameForm").submit(function(event){
    var nameInput= $("#nameInput").val();
    newCaptain = new Captain(nameInput, 100, 100, 100, 100);
    $('.nameInput').text(nameInput);
    $('#moneyValue').text(newCaptain.funds+",000");
    $('#foodValue').text(newCaptain.food +",000");
    $('#reputationValue').text(newCaptain.reputation + "%");
    $('form, .username').hide();
    $('#routeQuestion').slideDown(4000);
    $('#established,#uncharted, #displayPanel, #dontDeleteThisDiv').show();
    $('#displayPanel').addClass('animated slideInDown');
    $('#controlPanel').addClass('animated slideInUp');
    console.log(newCaptain.name);

    event.preventDefault();
  // Are you ready? Yes button is same as submit below
  // Should "No" answer take you to Game Over screen? Or reset form?
    // var storyInput= $("#storyInput").val();
    // var difficultyInput= $("#difficultyInput").val();
    // if (difficultyInput==="easy"){
    //   newCaptain= new Captain(nameInput,storyInput,difficultyInput,10000,10000,10000);
    // } else if (difficultyInput==="medium"){
    //   newCaptain= new Captain(nameInput,storyInput,difficultyInput,1000,1000,1000);
    // } else if (difficultyInput==="hard"){
    //   newCaptain= new Captain(nameInput,storyInput,difficultyInput,100,100,100);
    // }
  });
  $('#established').click(function(){
    $('#routeQuestion,#established,#uncharted').hide();
    $('#partyQuestion').slideDown(4000);
    $('#partyYes,#partyNo').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#uncharted').click(function(){
    $('#routeQuestion,#established,#uncharted').hide();
    $('#shipwreckQuestion').slideDown(4000);
    $('#shipInvestigate,#shipIgnore').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#shipInvestigate').click(function(){
    $('#shipwreckQuestion,#shipInvestigate,#shipIgnore').hide();
    $('#alienQuestion').slideDown(4000);
    $('#rescueAlien,#ignoreAlien').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#rescueAlien').click(function(){
    $('#alienQuestion,#rescueAlien,#ignoreAlien').hide();
    $('#motherShipQuestion').slideDown(4000);
    $('#fleeShip,#returnAlien').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#fleeShip').click(function(){
    $('#motherShipQuestion,#fleeShip,#returnAlien').hide();
    $('#dead').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#returnAlien').click(function(){
    $('#motherShipQuestion,#fleeShip,#returnAlien').hide();
    $('#traderQuestion').slideDown(4000);
    $('#traderYes,#traderNo').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#ignoreAlien').click(function(){
    $('#alienQuestion,#rescueAlien,#ignoreAlien').hide();
    $('#traderQuestion').slideDown(4000);
    // lose fuel
    $('#traderYes,#traderNo').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#shipIgnore').click(function(){
    $('#shipwreckQuestion,#shipInvestigate,#shipIgnore').hide();
    $('#traderQuestion').slideDown(4000);
    $('#traderYes,#traderNo').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#traderYes').click(function(){
    $('#traderQuestion,#traderYes,#traderNo').hide();
    $('#dead').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#traderNo').click(function(){
    $('#traderQuestion,#traderYes,#traderNo').hide();
    $('#mars').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#partyYes').click(function(){
    $('#partyQuestion,#partyYes,#partyNo').hide();
    $('#QuantityParty').slideDown(4000);
    $('#getWasted,#responsible').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#partyNo').click(function(){
    $('#partyQuestion,#partyYes,#partyNo').hide();
    $('#dead').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#getWasted').click(function(){
    $('#QuantityParty,#getWasted,#responsible').hide();
    $('#dead').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#responsible').click(function(){
    $('#QuantityParty,#getWasted,#responsible').hide();
    $('#toastQuestion').slideDown(4000);
    $('#eatToast,#noToast').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#eatToast').click(function(){
    $('#toastQuestion,#eatToast,#noToast').hide();
    $('#autoPilot').slideDown(4000);
    $('#yesAuto,#noAuto').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#noToast').click(function(){
    $('#toastQuestion,#eatToast,#noToast').hide();
    $('#autoPilot').slideDown(4000);
    $('#yesAuto,#noAuto').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#yesAuto').click(function(){
    $('#autoPilot,#yesAuto,#noAuto').hide();
    $('#dead').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#noAuto').click(function(){
    $('#autoPilot,#yesAuto,#noAuto').hide();
    $('#AI').slideDown(4000);
    $('#repairAI,#noRepairAI').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#repairAI').click(function(){
    $('#AI,#repairAI,#noRepairAI').hide();
    $('#mars').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#noRepairAI').click(function(){
    $('#AI,#repairAI,#noRepairAI').hide();
    $('#dead').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#selfDestruct').click(function(){
    $('body').addClass('displayNone');

  });

  })
