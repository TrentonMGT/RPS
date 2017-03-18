window.onload = function() {
     // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC7Ya0xt0_a6n_yVMAasQnH54-xNbG3V58",
    authDomain: "r-p-s-259bd.firebaseapp.com",
    databaseURL: "https://r-p-s-259bd.firebaseio.com",
    storageBucket: "r-p-s-259bd.appspot.com",
    messagingSenderId: "1007759017766"
  };
  firebase.initializeApp(config);


var playersRef = firebase.database().ref("players/");

playersRef.set({
   Player1: {
      name: 1,
      options: ['rock', 'paper', 'scissors'],
      wins: 30
   },
    
   Player2: {
      number: 2,
      age: 20
   }
});
var fbPlayer1 = firebase.database().ref("players/Player1");

fbPlayer1.update({
   "name": 23
});

    var usernameInput = document.querySelector('#username');
    var textInput = document.querySelector('#text');
    var postButton = document.querySelector('#post');

    postButton.addEventListener("click", function() {
      var msgUser = usernameInput.value;
      var msgText = textInput.value;
      myFirebase.set(msgUser + " says: " + msgText);
      textInput.value = "";
    });

    //Objects
    var player1 = {
        name: "",
        options: ['rock', 'paper', 'scissors'],
        wins: 0,
        loss: 0
    };
    var player2 = {
        name: "",
        options: ['rock', 'paper', 'scissors'],
        wins: 0,
        loss: 0
    };

    // //Objects
    // var player1 = {
    //     name: "",
    //     options: ['rock', 'paper', 'scissors'],
    //     wins: 0,
    //     loss: 0
    // };
    // var player2 = {
    //     name: "",
    //     options: ['rock', 'paper', 'scissors'],
    //     wins: 0,
    //     loss: 0
    // };


    $("#p1Ready").hide();
    $("#p2Ready").hide();

    //Player picks and option and a condition descides
    //who wins
    var compare = function(choice1, choice2) {

        if (choice1 === choice2) {
            return "The result is a tie!";
        }

        if (choice1 === "rock") {
            if (choice2 === "scissors") {
                return "<h1>" + player1.name + " throws rock and wins!</h1>";
                player1.wins += 1;
                player2.loss += 1;
            } else {
                return "<h1>" + player2.name + " throws scissors and wins!</h1>";
                player2.wins += 1;
                player1.loss += 1;
            }
        }

        if (choice1 === "paper") {
            if (choice2 === "rock") {
                return "<h1>" + player1.name + " throws paper and wins!</h1>";
                player1.wins += 1;
                player2.loss += 1;


            } else {
                return "<h1>" + player2.name + " throws scissors and wins!</h1>";
                player2.wins += 1;
                player1.loss += 1;

            }
        }

        if (choice1 === "scissors") {
            if (choice2 === "paper") {
                return "<h1>" + player1.name + " throws scissors and wins!</h1>";
                player1.wins += 1;
                player2.loss += 1;

            } else {
                return "<h1>" + player2.name + " throws rock and wins!</h1>";
                player2.wins += 1;
                player1.loss += 1;
            }
        }
    };
    // Put the player in their correct staging area
    // to begin the game
    $("#start-button").click(function() {
        if (!player1.name) {
            player1.name = $("#name-textbox").val();
            $("#name-textbox").val("");
            $("#player-one").empty();
            $("#player-one").append("<h3>" + player1.name + " is ready</h3>");

            for (var i = 0; i < player1.options.length; i++) {
                // Inside the loop...

                // 2. Create a variable named "letterBtn" equal to $("<button>");
                var player1optionVar = $("<h2>");

                // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
                player1optionVar.addClass("playerOneOptionsBox");

                // 4. Then give each "letterBtn" a data-attribute called "data-letter".
                player1optionVar.attr("data-playerOneOptionsattr", player2.options[i]);

                // 5. Then give each "letterBtns" a text equal to "letters[i]".
                player1optionVar.text(player1.options[i]);

                // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
                $("#player-one").append(player1optionVar);
            }
            $("#p1Ready").show();

        } else {
            player2.name = $("#name-textbox").val();
            $("#name-textbox").val("");
            $("#player-two").empty();
            $("#player-two").append("<h3>" + player2.name + " is ready</h3>");

            for (var i = 0; i < player2.options.length; i++) {

                // Inside the loop...

                // 2. Create a variable named "letterBtn" equal to $("<button>");
                var player2optionVar = $("<h2>");

                // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
                player2optionVar.addClass("playerTwoOptionsBox");

                // 4. Then give each "letterBtn" a data-attribute called "data-letter".
                player2optionVar.attr("data-playerTwoOptionsattr", player2.options[i]);

                // 5. Then give each "letterBtns" a text equal to "letters[i]".
                player2optionVar.text(player2.options[i]);

                // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
                $("#player-two").append(player2optionVar);
            }
            $("#p2Ready").show();


        }
    });
    // target the players choice and calls the 
    // camper funtion for results
    $(document).on('click', 'h2', function() {
        $("#middle-box").empty();

        var choice1 = $(this).attr("data-playerTwoOptionsattr");
        var choice2 = $(this).attr("data-playerOneOptionsattr");

        // console.log(choice1);
        // console.log(choice2);


        // var winner = compare(choice1, choice2);

        // 2. Create a variable named "letterBtn" equal to $("<button>");
        var winnersBox = $("<div>");

        // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
        winnersBox.addClass("player-middle-stage");

        // 4. Then give each "letterBtn" a data-attribute called "data-letter".
        // player2optionVar.attr("data-playerTwoOptionsattr");

        // 5. Then give each "letterBtns" a text equal to "letters[i]".
        // winnersBox.text(winner);

        // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
        // $("#middle-box").append(winnersBox);

        $("#middle-box").append("<h1>" + compare(choice1, choice2) + "</h1>");

        // console.log(compare(choice1, choice2));


    });


    // Show the results

    // console.log(compare(choice1, choice2));

};
