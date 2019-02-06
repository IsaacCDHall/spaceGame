// Can navigate to new page for gameOver Screens using JS


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

Captain.prototype.recMod=function(food,funds,reputation,fuel){
  this.food+=food;
  this.funds+=funds;
  this.reputation+=reputation;
  this.fuel+=fuel;
  console.log(this);
}
Captain.prototype.thresholds=function(){
  if(this.food<=0){
    window.location.replace('gameOver/starve.html');
  }else if(this.fuel<=0){
    window.location.replace('gameOver/stranded.html');
  }else if(this.reputation<=0){
    window.location.replace('gameOver/mutiny.html');
  }else if(this.funds<=0){
    window.location.replace('gameOver/bankrupt.html');
  }
};

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
  $('#controlPanel').click(function(){
    newCaptain.thresholds();
    $('#moneyValue').text(newCaptain.funds+",000");
    $('#foodValue').text(newCaptain.food +",000");
    $('#reputationValue').text(newCaptain.reputation + "%");
    $('#fuelz').removeClass();
    $('#fuelz').addClass('c100 p'+ newCaptain.fuel + " orange");
  });

  //when user clicks on Established Path
  $('#established').click(function(){
    $('#routeQuestion,#established,#uncharted').hide();
    $('#partyQuestion').slideDown(4000);
    $('#partyYes,#partyNo').show();
    newCaptain.recMod(-30,0,0,-10);
  });

  //when user clicks on uncharted Path
  $('#uncharted').click(function(){
    $('#routeQuestion,#established,#uncharted').hide();
    $('#shipwreckQuestion').slideDown(4000);
    $('#shipInvestigate,#shipIgnore').show();
    newCaptain.recMod(-30,0,0,-10);
  });
  //when user investigates shipwreck
  $('#shipInvestigate').click(function(){
    $('#shipwreckQuestion,#shipInvestigate,#shipIgnore').hide();
    $('#alienQuestion').slideDown(4000);
    $('#screen').prepend('<p class="animated fadeOut">Your crew seems cautious</p>');
    $('#rescueAlien,#ignoreAlien').show();
    newCaptain.recMod(-30,0,-40,-10);
  });

  //when user chooses to send rescue team
  $('#rescueAlien').click(function(){
    $('#alienQuestion,#rescueAlien,#ignoreAlien').hide();
    $('#screen').prepend('<p class="animated fadeOut">Your dog seems happier with you </p>');
    $('#motherShipQuestion').slideDown(4000);
    $('#fleeShip,#returnAlien').show();
    newCaptain.recMod(0,0,+50,0);
  });

  //when user runs away from aliens
  $('#fleeShip').click(function(){
    $('#motherShipQuestion,#fleeShip,#returnAlien').hide();
    $('#dead').show();
    newCaptain.recMod(0,0,-50,-10);
  });
  //when user lets alien board
  $('#returnAlien').click(function(){
    $('#motherShipQuestion,#fleeShip,#returnAlien').hide();
    $('#traderQuestion').slideDown(4000);
    $('#traderYes,#traderNo').show();
    newCaptain.recMod(0,0,0,0);
  });
  //when user clicks on Keep Going button instead of sending rescue team
  $('#ignoreAlien').click(function(){
    $('#alienQuestion,#rescueAlien,#ignoreAlien').hide();
    $('#traderQuestion').slideDown(4000);
    // lose fuel
    $('#traderYes,#traderNo').show();
    newCaptain.recMod(0,0,-20,0);
  });
  //when user doesnt investigate shipwreck
  $('#shipIgnore').click(function(){
    $('#shipwreckQuestion,#shipInvestigate,#shipIgnore').hide();
    $('#upsetCrew').slideDown(4000);
    $('#beRude,#beNice').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#beRude').click(function(){
    $('#upsetCrew,#beRude,#beNice').hide();
    $('#crewDisobey').slideDown(4000);
    $('#leaveCrew,#helpCrewRude').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#beNice').click(function(){
    $('#upsetCrew,#beRude,#beNice').hide();
    $('#crewDisobey').slideDown(4000);
    $('#leaveCrew,#helpCrewNice').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#leaveCrew').click(function(){
    $('#crewDisobey,#leaveCrew,#helpCrewRude,#helpCrewNice').hide();
    $('#traderQuestion').slideDown(4000);
    $('#screen').prepend('<p class="animated fadeOut">Tension dissipates as you fly past the wreck</p>');
    $('#traderYes,#traderNo').show();

    newCaptain.recMod(-30,0,20,-10);
  });

  $('#helpCrewRude').click(function(){
    $('#crewDisobey,#leaveCrew,#helpCrewRude').hide();
    $('#emptyShipwreck').slideDown(4000);
    $('#takeFunds,#takeFood').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#takeFunds').click(function(){
    $('#emptyShipwreck,#takeFood,#takeFunds').hide();
    $('#traderQuestion').slideDown(4000);
    $('#traderNo,#traderYes').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#takeFood').click(function(){
    $('#emptyShipwreck,#takeFood,#takeFunds').hide();
    $('#traderQuestion').slideDown(4000);
    $('#traderNo,#traderYes').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#helpCrewNice').click(function(){
    $('#crewDisobey,#leaveCrew,#helpCrewNice').hide();
    $('#shipwreckTrap').slideDown(4000);
    $('#bargainTrap,#runTrap').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#bargainTrap').click(function(){
    $('#shipwreckTrap,#bargainTrap,#runTrap').hide();
    $('#dead').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#runTrap').click(function(){
    $('#shipwreckTrap,#bargainTrap,#runTrap').hide();
    $('#dead').show();
    newCaptain.recMod(0,0,0,0);
  });

//when user decides to trade with the shady dude

  $('#traderYes').click(function(){
    $('#traderQuestion,#traderYes,#traderNo').hide();
    $('#dead').show();
    newCaptain.recMod(-30,0,0,-10);
  });
  //when decides not to trade with shady dude
  $('#traderNo').click(function(){
    $('#traderQuestion,#traderYes,#traderNo').hide();
    $('#mars').show();
    newCaptain.recMod(-30,0,0,-10);
  });
  //when user decides to party
  $('#partyYes').click(function(){
    $('#partyQuestion,#partyYes,#partyNo').hide();
    $('#QuantityParty').slideDown(4000);
    $('#getWasted,#responsible').show();
    newCaptain.recMod(-10,-10,10,0);
  });
  //when user decides NOT to party
  $('#partyNo').click(function(){
    $('#partyQuestion,#partyYes,#partyNo').hide();
    $('#dead').show();
    newCaptain.recMod(-30,0,0,-10);
  });
  //When user gets rickety wrecked
  $('#getWasted').click(function(){
    $('#QuantityParty,#getWasted,#responsible').hide();
    $('#dead').show();
    newCaptain.recMod(0,0,+50,0);
  });
  //when user thinks about his children and decides not to get too drunk
  $('#responsible').click(function(){
    $('#QuantityParty,#getWasted,#responsible').hide();
    $('#toastQuestion').slideDown(4000);
    $('#eatToast,#noToast').show();
    newCaptain.recMod(0,0,+20,0);
  });
  // when user eats the toast
  $('#eatToast').click(function(){
    $('#toastQuestion,#eatToast,#noToast').hide();
    $('#autoPilot').slideDown(4000);
    $('#yesAuto,#noAuto').show();
    newCaptain.recMod(0,0,0,0);
  });
  // when user decides he's too good for toast
  $('#noToast').click(function(){
    $('#toastQuestion,#eatToast,#noToast').hide();
    $('#autoPilot').slideDown(4000);
    $('#yesAuto,#noAuto').show();
    newCaptain.recMod(-30,0,0,-10);
  });
  // user decides to do auto pilot
  $('#yesAuto').click(function(){
    $('#autoPilot,#yesAuto,#noAuto').hide();
    $('#dead').show();
    newCaptain.recMod(0,0,0,-30);
  });
  // user decides against autopilot
  $('#noAuto').click(function(){
    $('#autoPilot,#yesAuto,#noAuto').hide();
    $('#AI').slideDown(4000);
    $('#repairAI,#noRepairAI').show();
    newCaptain.recMod(-20,0,0,-10);
  });
  // user chooses to repair AI
  $('#repairAI').click(function(){
    $('#AI,#repairAI,#noRepairAI').hide();
    $('#mars').show();
    newCaptain.recMod(0,0,10,0);
  });
  // user doesnt fix the AI
  $('#noRepairAI').click(function(){
    $('#AI,#repairAI,#noRepairAI').hide();
    $('#dead').show();
    newCaptain.recMod(0,0,-30,0);
  });
  $('#selfDestruct').click(function(){
    $('body').addClass('displayNone');

  });
});
