var currentQuestion = 0;
var score = 0;
var totalQuestions = questions.length;
//save questionslength into totalQuestion


var container = document.getElementById('quizContainer');
var questionElement = document.getElementById('question');
var luachon1 = document.getElementById('luachon1');
var luachon2 = document.getElementById('luachon2');
var luachon3 = document.getElementById('luachon3');
var luachon4 = document.getElementById('luachon4');
//save option(luachon) into variabe luachon1-4


var nextButton = document.getElementById('nextButton');
var resultContainer = document.getElementById('result');
//again, create variable for id from html page

function loadQuestion (questionIndex) {
	var q = questions[questionIndex]
	questionElement.textContent = (questionIndex + 1) + '. ' + q.question;
	//get question from the correct array by adding 1
	luachon1.textContent = q.option1;
	luachon2.textContent = q.option2;
	luachon3.textContent = q.option3;
	luachon4.textContent = q.option4;
	//get option from question.js 
}
//this function to load question from question.js


function loadNextQuestion(){
	var selectedOption = document.querySelector('input[type=radio]:checked');
	
	if (!selectedOption){
		alert('Please guess 1 answer!');
		return;
	}

	var answer = selectedOption.value;
	//save answer that we've selected into answer variable

	if (questions[currentQuestion].answer == answer) {
		score = score +1;
	}
	//correct answer will get 1 score

	selectedOption.checked = false;
	currentQuestion= currentQuestion+1;
	//plus to get new question
	
	if (currentQuestion == totalQuestions - 1) {
		nextButton.textContent = 'Finish';
	}
	//last question button will be switched to Finish

	if (currentQuestion == totalQuestions){
		container.style.display = 'none';
		resultContainer.style.display= '';
		if (score < 5 ){
			resultContainer.textContent = 'Failed with: ' + score + ' points, please try again';
			window.location.href = 'failpage.html';
		}
		//get to fail page if score is lower than 5
		else {
			window.location.href = 'congrats.html';
		}
		return;
		
	}




	loadQuestion(currentQuestion);
	//load question(new question)
}

loadQuestion(currentQuestion);
//1st question need to be loaded manually