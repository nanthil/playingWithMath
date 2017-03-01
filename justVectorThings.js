
let cartesian2dCoordinate = (x,y) =>{
  return {x:x, y:y}
}

  //just vector things
  let vector = (c) => {
    return {
      coords: c,
      magnitude: vectorMagnitute(c),
      direction: vectorDirection(c)
    }
  }
  //calculate direction where a and b are 2d points
  let vectorFromAtoB = (p1,p2) =>{
    return vector(cartesian2dCoordinate(p2.x - p1.x, p2.y - p1.y));
  }
  let add2dVectors = (v1,v2) => {
    return vector(cartesian2dCoordinate(v1.coords.x + v2.coords.x, v1.coords.y + v2.coords.y));
  }
  let subVectorAfromB = (a,b) => {
    return vector(cartesian2dCoordinate(b.coords.x + (a.coords.x * - 1), b.coords.y + (a.coords.y * -1)));
  }


  //where c is a 2d coordinate
  let vectorMagnitute = (c) => {
    return Math.abs(Math.sqrt(square(c.x) + square(c.y)));
  }

  //returns degrees
  let vectorDirection = (c) => {

    //THE ZERO VECTOR
    if(c.x === 0 && c.y === 0) return 0;

    //cardinal directions, vertical and horizontal
    else if(c.x === 0) return c.y > 0 ? 90 : 270
    else if(c.y === 0) return c.x > 0 ? 0 : 180

    //bottom left quadrant
    //console.log(180 + toDegrees(Math.atan(Math.PI + (c.y/c.x))));
    if(c.x < 0 && c.y < 0) return toDegrees(Math.tan(180 + Math.atan(Math.PI + (c.y/c.x))));

    //should be upper right quadrant
    else if(c.x < 0) return Math.atan(180 - Math.atan(c.y/c.x));

    //should be lower right quadrant
    else if(c.y < 0) return toDegrees(Math.tan(360 - Math.atan(c.y/c.x)));

    //top right quadrant
    else return toDegrees(Math.atan(c.y/c.x));
  }


//math helpers
//https://www.mathsisfun.com/geometry/radians.html
//https://en.wikipedia.org/wiki/Radian
let toDegrees = (radians) => {
  return (radians * 180) / Math.PI;
}
let square = (num) => {
  return num * num;
}

//put this in unit test, returns 59
//https://www.varsitytutors.com/hotmath/hotmath_help/topics/magnitude-and-direction-of-vectors
let points = [[2,3], [-5,-8], [3,-7]];
let cartesianPoints = points.map(p => cartesian2dCoordinate(p[0], p[1]));
let genVectorsFromListOfPoints = (points, i, vectors) => {
  if(vectors === undefined) vectors = [];
  if(points[i+1] !== undefined) {
    vectors.push(vectorFromAtoB(points[i], points[i+1]));
    genVectorsFromListOfPoints(points, i + 1, vectors);
  }
  return vectors;
}
let vectors = genVectorsFromListOfPoints(cartesianPoints, 0);
//https://www.mathsisfun.com/algebra/vectors.html
let v4 = add2dVectors(vector(cartesian2dCoordinate(8,13)), vector(cartesian2dCoordinate(26,7)));
let v5 = subVectorAfromB(vector(cartesian2dCoordinate(4,5)), vector(cartesian2dCoordinate(12,2)));

let victoriasVector = vector(cartesian2dCoordinate(3,4));
