var cards= ['1','2','3','4','5'];
var current= null;
var isPlaying = false;
var count = 0;
var remainingTime = 75;

function shuffle(array){
	var currentIndex = array.length, temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		//And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue; 
	}
	return array;
}

function playSound(type) {
    document.getElementById(type + '-sound').load();
    document.getElementById(type + '-sound').play();
}

function flip(card) {
	console.log(card);
	if (!isPlaying) return;

	// Disable click this card
	$(card).css('pointer-events', 'none');
	

	$(card).toggleClass('flipped');

	if (!current) {
		current = $(card);
	} else{
		if (current.attr('data-name') != $(card).attr('data-name')) {
			//different
			setTimeout(function(){
				current.toggleClass('flipped');
				$(card).toggleClass('flipped');
				current = null;


				// Play incorrect sound
                playSound('incorrect');

				// Enable click all cards
                if(isPlaying){
                    $('.card').css('pointer-events', 'auto');
                }
			}, 700);
		}else{
			//similar
			setTimeout(function(){
				$(card).css('opacity', '0');
				current.css('opacity', '0');
				current = null;


				// Play correct sound
                playSound('correct');


				if(count == 10) alert ("You are win");
			}, 600);		
		}
	}
}

$(function() {
	// duplicate the array
	cards = cards.concat(cards);


	//shuffle cards' position
	cards = shuffle(cards);

	//add content (of cards) into element class with class="content"
	var html = '';
	for (var i = 0; i < cards.length; i++) {
		html += `<div class="grid"> 
		<div class="card" data-name="${cards[i]}"  onclick="flip(this)">
		<div class="front"><img src="image/main.jpg"/></div>
		<div class= "back"><img src="image/${ cards[i]}.jpg"/></div> 
		</div></div>`;
	};
	$('.content').html(html);


	var run = setInterval(function(){
		remainingTime--;
		console.log(remainingTime);

		//run out of time
		if (remainingTime == 0){
		//game over
		clearInterval(run);
		alert("Game over!");
		}
	}, 1000);
});


    // Start game
    isPlaying = true;
    var current = null;
    $('.card').css('pointer-events', 'auto');



