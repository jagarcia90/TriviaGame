var set = $("#Trivia");

$(document).on("click", "#start", function(event){
  game.start();
});

$(document).on("click", "#done", function(event){
  game.done();
});

var questions = [{
	question: "How did Daenerys Targaryen eventually hatch her dragon eggs?",
	choices: ["In a lightning storm", "In a funeral pyre", "In a fireplace", "In a frozen cave"],
	correctAnswer: "In a funeral pyre"

}, {	

	question: "The phrase 'Valar Morghulis' or 'all men must die' is usually responded with:",
	choices: ["Valar Dohaeris", "Valar Rohnas", "Valar GoGo", "Valar Istaehs"],
	correctAnswer: "Valar Dohaeris"

}, {

	question: "What is the only thing that can put out volatile Wildfire?",
	choices: ["Sand", "Water", "Dragon's Blood", "Sunlight"],
	correctAnswer: "Sand"

}, {

	question: "Besides dragonglass, what is the only other substance capable of defeating White Walkers??",
	choices: ["Weirwood", "Wildfire", "Valyrian Steel", "Snowballs"],
	correctAnswer: "Valyrian Steel"

}, {

	question: "How many times has Beric Dondarrion been brought back to life??",
	choices: ["Three times", "Five times", "Six times", "Seven times"],
	correctAnswer: "Six times"

}];

var game = {
	correct: 0,
	incorrect: 0,
	counter: 60,

  countdown: function() {
  	game.counter--;
  	$("#counter-number").html(game.counter);

  	if (game.counter === 0) {
  		alert("TIME'S UP");
  		game.done();

  	}
  },

  start: function() {
  	timer = setInterval(game.countdown, 1000);
  	$('#subcontainer').prepend('<h2>Time Remaining: <span id="counter-number">60</span> Seconds</h2>');
  	$("#start").remove();

  	for (var i = 0; i < questions.length; i++) {
      set.append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].choices.length; j++){
        set.append('<input type="radio" name ="question' + '-' + i + '"value="' + questions[i].choices[j] + '">' + questions[i].choices[j]);
        }
  		}
  		set.append("<button id='done'>DONE</button>");
      
  	},

  	done: function() {

  		$.each($("input[name='question-0']:checked"), function() {
  			if ($(this).val() == questions[0].correctAnswer) {
  				  game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-1']:checked"), function() {
  			if ($(this).val() == questions[1].correctAnswer) {
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-2']:checked"), function() {
  			if ($(this).val() == questions[2].correctAnswer) {
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-3']:checked"), function() {
  			if ($(this).val() == questions[3].correctAnswer) {
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-4']:checked"), function() {
  			if ($(this).val() == questions[4].correctAnswer) {
                game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});

  		this.results();
  	},


  	  results:function() {
  	  	clearInterval(timer);

  	  	$("#subcontainer h2").remove();
  	   set.html("<h2>You're Done!</h2>");
  	   set.append("<h3>You got this many right: " + this.correct + "</h3>");
  	   set.append("<h3>You got this many wrong: " + this.incorrect + "</h3>");
  	   set.append("<h3>You didn't answer this many: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  	  
  	  }

  };
