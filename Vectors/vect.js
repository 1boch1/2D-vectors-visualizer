function setup() 
{
  createCanvas(600, 600);
}

let x = 400;
let y = 200;

let x2 = 400;
let y2 = 100;

let or = 300;

function draw() 
{
  background(4);
  stroke('white')
  strokeWeight(4)
  
  line(or, or, 550, or);
  triangle(550, or+5, 555, or, 550, or-5);
  line(or, or, 50, or);
  
  line(or, or, or, 550);
  line(or, or, or, 50);
  triangle(or-5, 50, or, 45, or+5, 50);
  
  
  if (mouseIsPressed) 
  {
    if (mouseButton === LEFT) 
    {
      x = mouseX;
      y = mouseY;
    }
    
    if (mouseButton === CENTER) 
    {
      x2 = mouseX;
      y2 = mouseY;
    }
    
  } 

  strokeWeight(5)
  
  stroke('red');
  line(or, or, x, y);
  
  triang(or, x-300, y-300)

  
  stroke('blue');
  line(or, or, x2, y2);
  
  triang(or, x2-300, y2-300)
  
  stroke('orange');
  line(or, or, x + x2 - 300, y + y2 - 300);
  
  triang(or, x+x2-600, y+y2-600)
  
  strokeWeight(0.5)
  stroke('blue');
  line(x, y, x + x2 - 300, y + y2 - 300)
  
  stroke('red');
  line(x2, y2, x + x2 - 300, y + y2 - 300)
}


function triang(or, x, y)
{ 
  let p = 5;
  let ang = atan(y/x) + PI/2;
  
  let x1 = p*cos(ang);
  let y1 = p*sin(ang);
  
  let p2 = -5;
  
  let x2 = p2*cos(ang);
  let y2 = p2*sin(ang);
  
  let p3 = x < 0 ? -6 : 6;
  let ang3 = atan(y/x);
  
  let x3 = p3*cos(ang3);
  let y3 = p3*sin(ang3);
  
  triangle(x + x1 + or, y + y1 + or, x + x3 + or, y + y3 + or, x + x2 + or, y + y2 + or);
}
