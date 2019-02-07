function Captain(name,funds,reputation,food,fuel){
  this.name=name;
  this.funds=funds;
  this.reputation=reputation;
  this.food=food;
  this.fuel=fuel;
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
    $('#routeQuestion').slideDown(2500);
    $('#established,#uncharted, #displayPanel, #dontDeleteThisDiv').show();
    $('#displayPanel').addClass('animated slideInDown');
    $('#controlPanel').addClass('animated slideInUp');
    event.preventDefault();
  });
  $('#controlPanel').click(function(){
    newCaptain.thresholds();
    $('#moneyValue').text(newCaptain.funds+",000");
    $('#foodValue').text(newCaptain.food +",000");
    $('#reputationValue').text(newCaptain.reputation + "%");
    $('#fuelz').removeClass();
    if(newCaptain.fuel>=100){
      newCaptain.fuel=100;
      $('#fuelz').addClass("c100 p100 green");
    } else if(newCaptain.fuel>80){
        $('#fuelz').addClass('c100 p'+ newCaptain.fuel + " blue");
    }else if (newCaptain.fuel>50) {
      $('#fuelz').addClass('c100 p'+ newCaptain.fuel + " orange");
    } else if (newCaptain.fuel<=50){
      $('#fuelz').addClass('c100 p'+ newCaptain.fuel + " red");
    }
  });

  //when user clicks on Established Path
  $('#established').click(function(){
    $("body").css({"background-image": "url(img/party.png)"})
    $('#routeQuestion,#established,#uncharted').hide();
    $('#partyQuestion').slideDown(2500);
    $('#partyYes,#partyNo').show();
    newCaptain.recMod(-40,0,0,-10);
  });

  //when user clicks on uncharted Path
  $('#uncharted').click(function(){
    $("body").css({"background-image": "url(img/uncharted.png)"})
    $('#routeQuestion,#established,#uncharted').hide();
    $('#shipwreckQuestion').slideDown(2500);
    $('#shipInvestigate,#shipIgnore').show();
    newCaptain.recMod(-40,0,0,-10);
  });
  //when user investigates shipwreck
  $('#shipInvestigate').click(function(){
    $("body").css({"background-image": "url(img/wreck.png)"})
    $('#shipwreckQuestion,#shipInvestigate,#shipIgnore').hide();
    $('#alienQuestion').slideDown(2500);
    $('#screen').prepend('<p class="animated fadeOut">Your crew seems cautious</p>');
    $('#rescueAlien,#ignoreAlien').show();
    newCaptain.recMod(-20,0,-40,-20);
  });

  //when user chooses to send rescue team
  $('#rescueAlien').click(function(){
    $("body").css({"background-image": "url(img/wreckinvestigate.png)"})
    $('#alienQuestion,#rescueAlien,#ignoreAlien').hide();
    $('#screen').prepend('<p class="animated fadeOut">Your dog seems happier with you </p>');
    $('#motherShipQuestion').slideDown(2500);
    $('#fleeShip,#returnAlien').show();
    newCaptain.recMod(0,0,10,-10);
  });

  //when user runs away from aliens
  $('#fleeShip').click(function(){
    $(".cockpit").css({"background-image": "url(img/cockpitdamaged.png)"})
    $('#motherShipQuestion,#fleeShip,#returnAlien').hide();
    // plot death
    window.location.replace('gameOver/alienAttack.html')
  });
  //when user lets alien board
  $('#returnAlien').click(function(){
    $('#motherShipQuestion,#fleeShip,#returnAlien').hide();
    $('#alienReward').slideDown(2500);
    $('#alienFood,#alienFuel').show();
    newCaptain.recMod(0,0,10,0);
  });

  $('#alienFood').click(function(){
    $("body").css({"background-image": "url(img/trader.png)"})
    $('#alienReward,#alienFood,#alienFuel').hide();
    $('#traderQuestion').slideDown(2500);
    $('#traderYes,#traderNo').show();
    newCaptain.recMod(40,0,0,0);
  });

  $('#alienFuel').click(function(){
    $("body").css({"background-image": "url(img/trader.png)"})
    $('#alienReward,#alienFood,#alienFuel').hide();
    $('#traderQuestion').slideDown(2500);
    $('#traderYes,#traderNo').show();
    newCaptain.recMod(0,0,0,40);
  });
  //when user clicks on Keep Going button instead of sending rescue team
  $('#ignoreAlien').click(function(){
    $("body").css({"background-image": "url(img/trader.png)"})
    $('#alienQuestion,#rescueAlien,#ignoreAlien').hide();
    $('#traderQuestion').slideDown(2500);
    // lose fuel
    $('#traderYes,#traderNo').show();
    newCaptain.recMod(0,0,-10,-20);
  });
  //when user doesnt investigate shipwreck
  $('#shipIgnore').click(function(){
    $('#shipwreckQuestion,#shipInvestigate,#shipIgnore').hide();
    $('#upsetCrew').slideDown(2500);
    $('#beRude,#beNice').show();
    newCaptain.recMod(0,0,-40,-10);
  });
  //rude response to crew
  $('#beRude').click(function(){
    $('#upsetCrew,#beRude,#beNice').hide();
    $('#crewDisobey').slideDown(2500);
    $('#leaveCrew,#helpCrewRude').show();
    newCaptain.recMod(0,0,-30,0);
  });
  //nice response to crew
  $('#beNice').click(function(){
    $('#upsetCrew,#beRude,#beNice').hide();
    $('#crewDisobey').slideDown(2500);
    $('#leaveCrew,#helpCrewNice').show();
    newCaptain.recMod(0,0,+10,0);
  });
  //leave crew behind if they leave to help shipwreck
  $('#leaveCrew').click(function(){
    $("body").css({"background-image": "url(img/trader.png)"})
    $('#crewDisobey,#leaveCrew,#helpCrewRude,#helpCrewNice').hide();
    $('#traderQuestion').slideDown(2500);
    $('#screen').prepend('<p class="animated fadeOut">Tension dissipates as you fly past the wreck</p>');
    $('#traderYes,#traderNo').show();
    newCaptain.recMod(0,0,-30,-10);
  });
//go back to help crew after rude response
  $('#helpCrewRude').click(function(){
    $("body").css({"background-image": "url(img/wreck.png)"})
    $('#crewDisobey,#leaveCrew,#helpCrewRude').hide();
    $('#emptyShipwreck').slideDown(2500);
    $('#takeFuel,#takeFood').show();
    newCaptain.recMod(-10,0,0,-20);
  });
  //take fuel
  $('#takeFuel').click(function(){
    $("body").css({"background-image": "url(img/trader.png)"})
    $('#emptyShipwreck,#takeFood,#takeFuel').hide();
    $('#traderQuestion').slideDown(2500);
    $('#traderNo,#traderYes').show();
    newCaptain.recMod(0,0,0,30);
  });
  //take food
  $('#takeFood').click(function(){
    $("body").css({"background-image": "url(img/trader.png)"})
    $('#emptyShipwreck,#takeFood,#takeFuel').hide();
    $('#traderQuestion').slideDown(2500);
    $('#traderNo,#traderYes').show();
    newCaptain.recMod(30,0,0,0);
  });
  //go back to help crew after nice response
  $('#helpCrewNice').click(function(){
    $("body").css({"background-image": "url(img/wreckinvestigate.png)"})
    $('#crewDisobey,#leaveCrew,#helpCrewNice').hide();
    $('#shipwreckTrap').slideDown(2500);
    $('#bargainTrap,#runTrap').show();
    newCaptain.recMod(-10,0,20,-10);
  });
  //after go back nice response
  $('#bargainTrap').click(function(){
    $(".cockpit").css({"background-image": "url(img/cockpitdamaged.png)"})
    $('#shipwreckTrap,#bargainTrap,#runTrap').hide();
    // plot death
    window.location.replace('gameOver/alienAttack.html')
  });
  $('#runTrap').click(function(){
    $(".cockpit").css({"background-image": "url(img/cockpitdamaged.png)"})
    $('#shipwreckTrap,#bargainTrap,#runTrap').hide();
    window.location.replace('gameOver/alienAttack.html')
    // plot death
  });

//when user decides to trade with the shady dude
  $('#traderYes').click(function(){
    $(".cockpit").css({"background-image": "url(img/cockpitdamaged.png)"})
    $('#traderQuestion,#traderYes,#traderNo').hide();
    window.location.replace('gameOver/traderDeath.html')
    // plot death
  });
  //when decides not to trade with shady dude
  $('#traderNo').click(function(){
    $("body").css({"background-image": "url(img/trader.png)"})
    $('#traderQuestion,#traderYes,#traderNo').hide();
    $('#hostileTrader').slideDown(2500);
    $('#giveResources,#stopTrader').show();
    newCaptain.recMod(-30,0,0,-10);
  });
  $('#giveResources').click(function(){
    $("body").css({"background-image": "url(img/home.png)"})
    $('#hostileTrader,#giveResources,#stopTrader').hide();
    // victory
    newCaptain.recMod(-20,-60,20,-10);
    window.location.replace('gameOver/victory.html')
  });
  $('#stopTrader').click(function(){
    $("body").css({"background-image": "url(img/trader.png)"})
    $('#hostileTrader,#giveResources,#stopTrader').hide();
    window.location.replace('gameOver/traderDeath.html')
    // plot death
  });
  //when user decides to party
  $('#partyYes').click(function(){
    $(".cockpit").css({"background-image": "url(img/cockpitparty.png)"})
    $('#partyQuestion,#partyYes,#partyNo').hide();
    $('#QuantityParty').slideDown(2500);
    $('#getWasted,#responsible').show();
    newCaptain.recMod(-10,-10,20,0);
  });
  //when user decides NOT to party
  $('#partyNo').click(function(){
    $('#partyQuestion,#partyYes,#partyNo').hide();
    $('#toastQuestion').slideDown(2500);
    $('#eatToast,#noToast').show();
    newCaptain.recMod(0,0,-50,0);
  });
  //When user gets rickety wrecked
  $('#getWasted').click(function(){
    $(".cockpit").css({"background-image": "url(img/cockpitdamaged.png)"})
    $('#QuantityParty,#getWasted,#responsible').hide();
    window.location.replace('gameOver/drunkDriver.html')
    // plot death
  });
  //when user thinks about his children and decides not to get too drunk
  $('#responsible').click(function(){
    $(".cockpit").css({"background-image": "url(img/cockpit.png)"})
    $('#QuantityParty,#getWasted,#responsible').hide();
    $('#toastQuestion').slideDown(2500);
    $('#eatToast,#noToast').show();
    newCaptain.recMod(0,0,+20,0);
  });
  // when user eats the toast
  $('#eatToast').click(function(){
    $('#toastQuestion,#eatToast,#noToast').hide();
    $('#autoPilot').slideDown(2500);
    $('#yesAuto,#noAuto').show();
    newCaptain.recMod(-10,0,0,-10);
  });
  // when user decides he's too good for toast
  $('#noToast').click(function(){
    $('#toastQuestion,#eatToast,#noToast').hide();
    $('#autoPilot').slideDown(2500);
    $('#yesAuto,#noAuto').show();
    newCaptain.recMod(0,0,-10,-10);
  });
  // user decides to do auto pilot
  $('#yesAuto').click(function(){
    $(".cockpit").css({"background-image": "url(img/cockpitdamaged.png)"})
    $("body").css({"background-image": "url(img/asteroids.png)"})
    $('#autoPilot,#yesAuto,#noAuto').hide();
    $('#asteroidDeath').slideDown(2500);
    $('#findSolution,#sleepAgain').show();
    newCaptain.recMod(0,0,0,-30);
  });
  $('#sleepAgain').click(function(){
    $('#asteroidDeath,#findSolution,#sleepAgain').hide();
    window.location.replace('gameOver/autoDeath.html')
    // plot death
  });
  $('#findSolution').click(function(){
    $('#asteroidDeath,#findSolution,#sleepAgain').hide();
    window.location.replace('gameOver/autoDeath.html')
  });
  // user decides against autopilot
  $('#noAuto').click(function(){
    $('#autoPilot,#yesAuto,#noAuto').hide();
    $("body").css({"background-image": "url(img/asteroids.png)"})
    $('#asteroidEscape').slideDown(2500);
    $('#dropFood,#extraFuel').show();
    newCaptain.recMod(0,0,0,-30);
  });
  //lose food to escape
    $('#dropFood').click(function(){
      $('#asteroidEscape,#dropFood,#extraFuel').hide();
      $('#AI').slideDown(2500);
      $('#repairAI,#noRepairAI').show();
      newCaptain.recMod(-40,0,0,0);
    });
    //lose fuel to escape
    $('#extraFuel').click(function(){
      $('#asteroidEscape,#dropFood,#extraFuel').hide();
      $('#AI').slideDown(2500);
      $('#repairAI,#noRepairAI').show();
      newCaptain.recMod(0,0,0,-50);
    });
  // user chooses to repair AI
  $('#repairAI').click(function(){
    $('#AI,#repairAI,#noRepairAI').hide();
    // victory
    newCaptain.recMod(0,0,-30,0);
    window.location.replace('gameOver/victory.html')
  });
  // user doesnt fix the AI
  $('#noRepairAI').click(function(){
    $('#AI,#repairAI,#noRepairAI').hide();
    $('#aiSleep').slideDown(4000);
    $('#repairAI_2,#betrayCrew_1').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#betrayCrew_1').click(function(){
    $('#aiSleep,#repairAI_2,#betrayCrew_1').hide();
    // victory
    newCaptain.recMod(0,0,-50,0);
    window.location.replace('gameOver/victory.html')
  });

  $('#repairAI_2').click(function(){
    $('#aiSleep,#repairAI_2,#betrayCrew_1').hide();
    $('#aiToxins').slideDown(4000);
    $('#professLove,#notEssential').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#notEssential').click(function(){
    $('#professLove,#notEssential,#aiToxins').hide();
    window.location.replace('gameOver/AiDeath.html')
    // plot death
  });

  $('#professLove').click(function(){
    $('#professLove,#notEssential,#aiToxins').hide();
    $('#aiCries').slideDown(4000);
    $('#wasAfraid,#betrayCrew_2').show();
    newCaptain.recMod(0,0,-30,0);
  });
  $('#betrayCrew_2').click(function(){
    $('#professLove,#betrayCrew_2,#wasAfraid').hide();
    // victory

    newCaptain.recMod(0,0,-50,-20);
    window.location.replace('gameOver/victory.html');
  });
  $('#wasAfraid').click(function(){
    $('#wasAfraid,#betrayCrew_2,#wasAfraid').hide();
    // victory
    newCaptain.recMod(0,0,-30,0);
    window.location.replace('gameOver/victory.html');
  });
  $('#selfDestruct').click(function(){
    window.location.replace('gameOver/selfDestruct.html');
  });
});
