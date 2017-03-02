
//draw scale, use this to modify values so they match to the scale
let scale = (num) => {
  return num * 10;
}

//maps points around all vectors in given array
let drawLinesAroundVectors = (vectors, origin, ctx) => {
  //order by angle then draw lines
  sortVectors(vectors).map((v, i, arr) => {
    if(i+1 < arr.length) {
      drawLine(relativePoint(origin, calcVectorCoordinates(v)),
              relativePoint(origin, calcVectorCoordinates(arr[i+1])),
              ctx,
              "red");
    } else {
      drawLine(relativePoint(origin, calcVectorCoordinates(v)),
              relativePoint(origin, calcVectorCoordinates(arr[0])),
              ctx,
              "red");
    }
  });
}

//sort vectors by degrees
let sortVectors = (vectors) => {
  return vectors.sort((a,b)=> {
    return b.degrees - a.degrees;
  })
}

//allows you to set from where the points of vectors will be referenced before drawing a line
let relativePoint = (origin, p) => {
  return cartesian2dCoordinate(origin.x + p.x, origin.y + p.y);
}
//find physical location of vectors
//usually used when finding the relative point of the vectors
let calcVectorCoordinates = (v) =>{
  return cartesian2dCoordinate((scale(v.magnitude)) *  Math.cos(v.direction), (scale(v.magnitude)) * Math.sin(v.direction));
}


let drawVectorsFromOrigin = (vectors, origin, ctx) => {
  vectors.map(v => {
    //only calculate once
    let endV = relativePoint(origin, calcVectorCoordinates(v));
    drawLine(origin, endV, ctx, "green");
    drawPoint(v.coords, endV, ctx);
  });
}


//where p is the unscaled point, and scaled is the scaled points, relative to origin
let drawPoint = (p, scaled, ctx) => {
  ctx.beginPath();
  ctx.fillRect(scaled.x, scaled.y, -3, -3);
  ctx.fillRect(scaled.x, scaled.y, 3, -3);
  ctx.fillRect(scaled.x, scaled.y, -3, 3);
  ctx.fillRect(scaled.x, scaled.y, 3, 3);
  ctx.lineWidth = 1;
  if(p !== undefined){
    ctx.strokeText('(' + p.x + ', ' + p.y + ')', scaled.x + 10, scaled.y + 10);
    ctx.closePath();
  }
}

//draws a line from point to point
let drawLine = (from, to, ctx, color) =>{
  ctx.beginPath();
  ctx.moveTo(from.x, from.y);
  ctx.lineTo(to.x, to.y);
  ctx.strokeStyle = (color !== undefined) ? color: "black";
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.closePath();
}
