	let svg=document.querySelector('svg')
	let image=document.querySelector('image');
	let width=parseInt(svg.getAttribute('width'));
	let height=parseInt(svg.getAttribute('height'));
	let width_ball=parseInt(image.getAttribute('width'));
	let height_ball=parseInt(image.getAttribute('height'));
	let step_x=2;
	let step_y=2;
function move(){
	console.log(svg)
	let x=parseInt(image.getAttribute('x'));
	let y=parseInt(image.getAttribute('y'));
	// console.log(x)
	// console.log(y)
	x+=step_x;
	y+=step_y;
	if (y+height_ball>=height || y<=0) {
		step_y=-step_y;
	}
	if (x+width_ball>=width || x<=0) {
		step_x=-step_x;
	}
	image.setAttribute('x',x);
	image.setAttribute('y',y);
	// console.log(typeof(x));
}
setInterval(move,10)
