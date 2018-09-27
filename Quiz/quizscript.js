var currentQuestion = 0;
var score = 0;
var totalQuestions = questions.length;


var container = document.getElementById('quizContainer');
var questionElement = document.getElementById('question');
var luachon1 = document.getElementById('luachon1');
var luachon2 = document.getElementById('luachon2');
var luachon3 = document.getElementById('luachon3');
var luachon4 = document.getElementById('luachon4');


var nextButton = document.getElementById('nextButton');
var resultContainer = document.getElementById('result');

function loadQuestion (questionIndex) {
	var q = questions[questionIndex]
	questionElement.textContent = (questionIndex + 1) + '. ' + q.question;
	luachon1.textContent = q.option1;
	luachon2.textContent = q.option2;
	luachon3.textContent = q.option3;
	luachon4.textContent = q.option4;
}


function loadNextQuestion(){
	var selectedOption = document.querySelector('input[type=radio]:checked');
	
	if (!selectedOption){
		alert('Please guess 1 answer!');
		return;
	}

	var answer = selectedOption.value;

	if (questions[currentQuestion].answer == answer) {
		score = score +1;
	}

	selectedOption.checked = false;
	currentQuestion= currentQuestion+1;
	
	if (currentQuestion == totalQuestions - 1) {
		nextButton.textContent = 'Finish';
	}

	if (currentQuestion == totalQuestions){
		container.style.display = 'none';
		resultContainer.style.display= '';
		if (score < 5 ){
			resultContainer.textContent = 'Failed with: ' + score + ' points, please try again';
			window.location.href = 'failpage.html';
		}
		else {
			window.location.href = 'congrats.html';
		}
		return;
		
	}




	loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);
