
var frequency = 0;


function flagSegment(color, xInitial, yInitial, segmentWidth, segmentHeight, param1, param2) {
  fill(color);
  beginShape();
  
  for (let x = xInitial; x < xInitial + segmentWidth; x++) {
    let y = map(sin(frequency + x * param1), -param2, param2, yInitial, yInitial + segmentHeight);
    vertex(x, y);
  }

  for (let x = xInitial + segmentWidth; x > xInitial; x--) {
    let y = map(sin(frequency + x * param1), -param2, param2, yInitial + segmentHeight, yInitial + segmentHeight * 2);
    vertex(x, y);
  }

  endShape(CLOSE);
}

function drawFlags(){

  flagSegment('#FFEB3B',50,50,250,50,0.05,0.9)
  flagSegment('#00FF0A',50,100,250,50,0.05,0.9)
  flagSegment('#FF0000',50,150,250,50,0.05,0.9)


  frequency += 0.08
}