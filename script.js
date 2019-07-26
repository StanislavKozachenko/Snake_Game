//Let's start this!
const canvas = document.getElementById('snakeGame');

const context = canvas.getContext('2d');

const ground = new Image();
ground.src = "img/fon.png";

var box = 32;

var score = 0;

var food = {
	x: Math.floor((Math.random() * 17 + 1)) * box,
	y: Math.floor((Math.random() * 17 + 1)) * box,
};

var snake = [];
snake[0] = {
	x: 9 * box,
	y: 9 * box,
};

document.addEventListener('keydown', direction);
	
	var dir;

	function direction(e){
		if(event.keyCode == 37 && dir != 'right') {
			dir = 'left';
		} else if(event.keyCode == 38 && dir != 'down') {
			dir = 'up';
		} else if(event.keyCode == 39 && dir != 'left') {
			dir = 'right';
		} else if(event.keyCode == 40 && dir != 'up') {
			dir = 'down';
		}
		
	}
	
	function tail(head, arr) {
  for(let i = 0; i < arr.length; i++) {
    if(head.x == arr[i].x && head.y == arr[i].y){
      clearInterval(game);      
  	  alert('Игра закончена! Ваш счёт: ' + score);
    }
  }
}
function drawGame() {
	context.drawImage(ground, 0, 0);	

 	context.fillStyle = 'green';
  	context.fillRect(food.x, food.y, box, box);

	for(let i = 0; i < snake.length; i++) {
    context.fillStyle = "#C9511C"
    context.fillRect(snake[i].x, snake[i].y, box, box);
  }

	context.fillStyle = '#fff';
	context.font = '40px Arial';
	context.fillText(score, box * 2.5, box * 1.4);

	var snakeX = snake[0].x;
	var snakeY = snake[0].y;

	if(snakeX == food.x && snakeY == food.y) {
		score++;
		food = {
	x: Math.floor((Math.random() * 17 + 1)) * box,
	y: Math.floor((Math.random() * 17 + 1)) * box,
		};
	} else {
	snake.pop();
	}

	if(snakeX < 0 || snakeX > box * 18 || snakeY < 0 || snakeY > box * 18){
		alert('Игра закончена! Ваш счёт: ' + score);
		clearInterval(game);
	  	
	}
	
	if(dir == 'left') {
		snakeX -= box;
	}
	if(dir == 'right') {
		snakeX += box;
	}
	if(dir == 'up') {
		snakeY -= box;
	}
	if(dir == 'down') {
		snakeY += box;
	}

	var newH = {
		x: snakeX,
		y: snakeY
	};

	tail(newH, snake);
	snake.unshift(newH);

}

var game = setInterval(drawGame, 100);