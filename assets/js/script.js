// var generateBtn = document.querySelector("#generate");

// var passwordLength;
// var includeLower;
// var includeUpper;
// var includeNumber;
// var includeSpecial;
// var userChoices;
// //I do not like they way prettier formats this
// var lowerCase = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];
// // Var To Upper Case
// var blackUpper = [];
// var toUpper = function (x) {
//   return x.toUpperCase();
// };
// upperCase = lowerCase.map(toUpper);
// // var for the numbers and all the special keys on the number row
// var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// var special = [
//   "!",
//   "@",
//   "#",
//   "$",
//   "$",
//   "%",
//   "^",
//   "&",
//   "*",
//   "(",
//   ")",
//   "-",
//   "_",
//   "+",
//   "=",
// ];
// //Seriously, who thinks this looks nice

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// // Start Function
// function generatePassword() {
//   // prompt for password length
//   passwordLength = prompt(
//     "How many characters would you like your password? Choose between 8 and 128"
//   );
//   //prompt for what they want
//   if (passwordLength < 8 || passwordLength > 128) {
//     passwordLength = alert("That wasn't a choice???");
//   } else {
//     includeLower = confirm("Include lower case letters?");
//     includeUpper = confirm("Include upper case letters?");
//     includeNumber = confirm("Include numbers?");
//     includeSpecial = confirm("Include special characters?");
//   }

//   //if they picked everything
//   if (includeLower && includeUpper && includeNumber && includeSpecial) {
//     userChoices = lowerCase.concat(upperCase, numbers, special);
//   }
//   // if they picked three
//   else if (includeLower && includeUpper && includeNumber) {
//     userChoices = lowerCase.concat(upperCase, numbers);
//   } else if (includeLower && includeUpper && includeSpecial) {
//     userChoices = lowerCase.concat(upperCase, special);
//   } else if (includeLower && includeNumber && includeSpecial) {
//     userChoices = lowerCase.concat(numbers, special);
//   } else if (includeUpper && includeNumber && includeSpecial) {
//     userChoices = upperCase.concat(numbers, special);
//   }
//   // if they picked two
//   else if (includeLower && includeUpper) {
//     userChoices = lowerCase.concat(upperCase);
//   } else if (includeLower && includeNumber) {
//     userChoices = lowerCase.concat(numbers);
//   } else if (includeLower && includeSpecial) {
//     userChoices = lowerCase.concat(special);
//   } else if (includeUpper && includeNumber) {
//     userChoices = upperCase.concat(numbers);
//   } else if (includeUpper && includeSpecial) {
//     userChoices = upperCase.concat(special);
//   } else if (includeNumber && includeSpecial) {
//     userChoices = numbers.concat(special);
//   }
//   // if they wanted a simple password
//   else if (includeLower) {
//     userChoices = lowerCase;
//   } else if (includeUpper) {
//     userChoices = blankUpper.concat(upperCase);
//   } else if (includeNumber) {
//     userChoices = numbers;
//   } else if (includeSpecial) {
//     userChoices = special;
//   }

//   //var for password length
//   var passwordBlank = [];

//   // go through a loop for each choice
//   for (var i = 0; i < passwordLength; i++) {
//     var allChoices =
//       userChoices[Math.floor(Math.random() * userChoices.length)];
//     passwordBlank.push(allChoices);
//   }

//   // combine everything and remove any spaces
//   var password = passwordBlank.join("");
//   var password = password.replace(" ", "");
//   console.log(password.length);
//   return password;
// }

// var shoppingFormEl=$('#shopping-form');
// var shoppingListEl=$('#shopping-list');

// function handleFormSubmit(event){
//   event.preventDefault();
//   var shoppingItem=$('input[name="shopping-input"').val();
//   if(!shoppingItem){
//     console.log('No shopping item filled out in form!');
//     return;
//   }
//   var shoppingListItemEl=$('<li class-"flex-row justify-space-between align center p-2 bg-light text-dark>'
//   );
//   shoppingFormEl.text(shoppingItem);
//   shoppingListItemEl.append('<button class="btn btn-danger btn-small delete-item-btn">remove</button>'
//   );
//   var clearPlz =$('.btn btn-danger btn-small delete-item-btn')
//   shoppingListEl.append(shoppingListItemEl);
//   $('input[name="shopping-input"]').val('');
// }
// var button =$('.btn btn-danger btn-small delete-item-btn')

// var rootEl=$('#root');
// var title = $('#text-center');
// $(ul).children().css('background-color','white')
// $(title).children().css('background-color','black')

// var wins=0;
// var ties=0;
// var losses=0;
// var options =["r","p","s"];

// var playGame= function(){
//   var userChoice=window.prompt("pick one loser");
//   if (!userChoice){
//     return;
//   }
//   userChoice=userChoice.toUpperCase();
//   var index=Math.floor(Math.random()*options.length);
//   var computerChoice=options[index];
//   window.alert ('the computer gone git u'+ computerChoice);
//   if (userChoice === computerChoice){
//     ties++;
//     window.alert("git good scrub");
//   } else if (
//     (userChoice=fdjk)
//   );
// }

// var wordBlank = document.querySelector(".word-blanks");
// var win = document.querySelector(".win")

var formEl = $("#guestbook-form");
var nameInputEl = $("#name-input");
var commentInputEl = $("#comment-input");

var guestBookDisplayEl = $("#guest-book-display");

var printGuestData = function (name, comment) {
  var cardColumnEl = $("<div>");
  cardColumnEl.addClass("col-12 cold-sm-4 col-md-3");

  var cardEl = $("<div>");
  cardColumnEl.addClass("card h-100");
  cardEl.appendTo(cardColumnEl);

  var cardName = $("<h5>")
    .addClass("card-header custom-card-header")
    .text(name);
  cardName.appendTo(cardEl);

  var cardBodyEl = $("<div>");
  cardBodyEl.addClass("card-body");
  cardBodyEl.appendTo(cardEl);

  var cardComment = $("<p>").addClass("card-text").text(comment);
  cardComment.appendTo(cardBodyEl);
  guestBookDisplayEl.appendTo(cardColumnEl);
};

var handleFormSubmit=function(event){
  event.preventDefault();

  var nameInput =nameInputEl.val();
  var commentInput = commentInputEl.val();

  if (!nameInput || commentInput){
    console.log('really???');
    return;
  }

  printGuestData(nameInput, commentInput);

  nameInputEl.val('');
  commentInputEl.val('');
};

formEl.on('submit',handleFormSubmit);