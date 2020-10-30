var a = 0;
var b = 1;
var c = 1;

function fib(qty){
	document.write(a + " " + b);
	for (var i = 0; i < qty; i++){
		c = a + b;
		a = b;
		b = c;
		document.write(" " + c);
	}
	return c;
}


fib(20);