var color= [];
var dem = 0;
var numberRam = 6;
var clickColors;
var uplevel = 1;
var level = document.querySelector('.levels');
var display = document.querySelector('#color-display');
var reset = document.querySelector('#reset');
var square = document.querySelectorAll('.square');
var modeButtons = document.querySelectorAll(".mode");
var easyButton = document.querySelector(".mode");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

level.textContent = clickColors
var colorRandom = () => {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"; 
}

var chooseColor = () =>{
	var random = Math.floor(Math.random() * color.length);
	return color[random];
}

var getColor = (num) => {
	var arr = [];
	for(let i= 0 ; i< num ; i++){
		arr.push(colorRandom());
	}
	return arr;
}
var changeColor = (color) => {
	for(let i= 0 ; i < square.length ; i++){
		square[i].style.background = color;

	}
}

var setSquare = () => {
	color = getColor(numberRam);
	clickColors = chooseColor();
	display.textContent = clickColors();
	console.log(clickColors)
	console.log('a' + uplevel)
	if(numberRam === 6){
		for(let i=0 ; i < square.length ; i++){
			square[i].style.background = color[i];
			square[i].addEventListener('click', () => {
				dem++;
				console.log(dem)
				var getColors = square[i].style.backgroundColor;
				console.log(getColors)

				if(clickColors === getColors){
					uplevel ++;
					dem = 0;
					console.log(uplevel)
					messageDisplay.textContent = 'Correct';
					reset.textContent = "Play Again";
					changeColor(getColors);
					resets();

				}else{
					square[i].style.background = '#333'
					messageDisplay.textContent = 'try Again';

				}
				if(dem === 3){
					resets();
					dem=0;
					uplevel = 1;
					alert('ban da chon sai 3 lan')
				}


			} )

			
		}

		
	}else if(numberRam === 3){
		for(let i=0 ; i < square.length && i < numberRam ; i++){
			
			square[i].style.background = color[i];
			square[i].addEventListener('click', () => {
				dem++;
				var getColors = square[i].style.backgroundColor;
				console.log(getColors)

				if(clickColors === getColors){
					messageDisplay.textContent = 'Correct';
					reset.textContent = "Play Again";
					changeColor(getColors);
				}else{
					square[i].style.background = '#333'
					messageDisplay.textContent = 'try Again';

				}


			} )
		}

	}


}
var resets = () =>{
	color = getColor(numberRam);
	level.textContent = 'Level '+uplevel;
	console.log(level.textContent)
	clickColors = chooseColor();
	reset.textContent = "new color";
	messageDisplay.textContent = '';
	changeColor(clickColors);
	for(let i = 0 ; i< square.length ; i++){
		if(color[i]){
			square[i].style.display = "block";
			square[i].style.backgroundColor = color[i];
		}
		else {
			square[i].style.display = "none";
		}
	}

}
var level = ()=> {
	for(let i=0; i < modeButtons.length ; i++){
		modeButtons[i].addEventListener('click', () => {
			for(let i =0 ; i < modeButtons.length ; i++){
				modeButtons[i].classList.remove('selected');
			}
			modeButtons[i].classList.add('selected');
			if(modeButtons[i].textContent  === 'Easy'){
				numberRam = 3;
			}else{
				numberRam = 6;
			}
		})
	}
}
reset.addEventListener('click',()=>{
	resets();
})
setSquare();
level();
