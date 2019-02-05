
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

// var newCaptain= new Captain("Crunch","Berzerker","easy",10000,10000,10000);



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
    $('#established,#uncharted').show();
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
    $('#dead').show();
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

  $('#button91').click(function(){
    $('#question9,#button91,#button92').hide();
    $('#question10,#button101,#button102').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#button92').click(function(){
    $('#question9,#button91,#button92').hide();
    $('#question10,#button101,#button102').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#button101').click(function(){
    $('#question10,#button101,#button102').hide();
    $('#question11,#established1,#established2').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#button102').click(function(){
    $('#question10,#button101,#button102').hide();
    $('#question11,#established1,#established2').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#established1').click(function(){
    $('#question11,#established1,#established2').hide();
    $('#question12,#uncharted1,#button122').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#established2').click(function(){
    $('#question11,#established1,#established2').hide();
    $('#question12,#button121,#button122').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#button121').click(function(){
    $('#question12,#button121,#button122').hide();
    $('#question13,#button131,#button132').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#button122').click(function(){
    $('#question12,#button121,#button122').hide();
    $('#question13,#button131,#button132').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#button131').click(function(){
    $('#question13,#button131,#button132').hide();
    $('#question14,#button141,#button142').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#button132').click(function(){
    $('#question13,#button131,#button132').hide();
    $('#question14,#button141,#button142').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#button141').click(function(){
    $('#question14,#button141,#button142').hide();
    $('#question15,#button151,#button152').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#button142').click(function(){
    $('#question14,#button141,#button142').hide();
    $('#question15,#button151,#button152').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#button151').click(function(){
    $('#question15,#button151,#button152').hide();
    $('#question16,#button161,#button162').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#button152').click(function(){
    $('#question15,#button151,#button152').hide();
    $('#question16,#button161,#button162').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#button161').click(function(){
    $('#question16,#button161,#button162').hide();
    $('#question17,#button171,#button172').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#button162').click(function(){
    $('#question16,#button161,#button162').hide();
    $('#question17,#button171,#button172').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#button171').click(function(){
    $('#question17,#button171,#button172').hide();
    $('#question18,#button181,#button182').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#button172').click(function(){
    $('#question17,#button171,#button172').hide();
    $('#question18,#button181,#button182').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#button181').click(function(){
    $('#question18,#button181,#button182').hide();
    $('#question19,#button191,#button192').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#button182').click(function(){
    $('#question18,#button181,#button182').hide();
    $('#question19,#button191,#button192').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#button191').click(function(){
    $('#question19,#button191,#button192').hide();
    $('#question20,#button201,#button202').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#button192').click(function(){
    $('#question19,#button191,#button192').hide();
    $('#question20,#button201,#button202').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#button201').click(function(){
    $('#question20,#button201,#button202').hide();
    $('#question21,#button211,#button212').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#button202').click(function(){
    $('#question20,#button201,#button202').hide();
    $('#question21,#button211,#button212').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#button211').click(function(){
    $('#question21,#button211,#button212').hide();
    $('#question22,#button221,#button222').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#button212').click(function(){
    $('#question21,#button211,#button212').hide();
    $('#question22,#button221,#button222').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#button221').click(function(){
    $('#question22,#button221,#button222').hide();
    $('#question22,#button221,#button222').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#button222').click(function(){
    $('#question22,#button221,#button222').hide();
    $('#question22,#button221,#button222').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#button231').click(function(){
    $('#question23,#button231,#button232').hide();
    $('#question24,#button241,#button242').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#button232').click(function(){
    $('#question23,#button231,#button232').hide();
    $('#question24,#button241,#button242').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#button241').click(function(){
    $('#question24,#button241,#button242').hide();
    $('#question25,#button251,#button252').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#button242').click(function(){
    $('#question24,#button241,#button242').hide();
    $('#question25,#button251,#button252').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#button251').click(function(){
    $('#question25,#button251,#button252').hide();
    $('#question2,#button21,#button22').show();
    newCaptain.recMod(0,0,0,0);
  });
  $('#selfDestruct').click(function(){
    $('body').addClass('displayNone');

  });

  })
