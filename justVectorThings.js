
let cartesian2dCoordinate = (x,y) =>{
  return {x:x, y:y}
}

  //just vector things
  let vector = (c) => {
    let dir = vectorDirection(c);
    let deg = toDegrees(dir);
    return {
      coords: c,
      magnitude: vectorMagnitute(c),
      direction: dir,
      degrees: deg > 0 ? deg : deg + 360
    }
  }
  //calculate direction where a and b are 2d points
  let vectorFromAtoB = (p1,p2) =>{
    return vector(cartesian2dCoordinate(p2.x - p1.x, p2.y - p1.y));
  }
  let add2dVectors = (v1,v2) => {
    return vector(cartesian2dCoordinate(v1.coords.x *-1+ v2.coords.x, v1.coords.y *-1+ v2.coords.y));
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
    console.log();
    if(c.x === 0 && c.y === 0) return 0;

    //cardinal directions, vertical and horizontal
    else if(c.x === 0) return c.y > 0 ? .5 : 1.5;
    else if(c.y === 0) return c.x > 0 ? 0:Math.PI;

    //q3
    else if(c.x< 0 && c.y < 0) return (1+ (Math.atan(-1*((c.y * -1) / c.x))));
    //q2
    else if(c.x < 0 && c.y > 0) return (Math.PI / 180)*(180 + toDegrees(Math.atan((c.y * -1)/c.x)));
    //q4
    else if(c.y < 0 && c.x > 0) return  (Math.PI / 180)*(toDegrees(Math.atan((c.y * -1)/c.x)));
    //q1
    else return Math.atan(c.y*-1/c.x);
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
