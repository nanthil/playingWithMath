
function testAllTheThings(origin, canvas, ctx){

  //use to test the draw methods, to make sure points are relative
  let changeOriginForDemonstration = cartesian2dCoordinate(origin.x + 25, origin.y+12);
  //put this in unit test, returns 59
  //https://www.varsitytutors.com/hotmath/hotmath_help/topics/magnitude-and-direction-of-vectors
  let points = [[2,3], [-5,-8], [3,-7], [-6, 1], [2, -7], [-6,-7],[-2, -4],[-1,-12], [3,-2]];
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
  //test vectors and functionality
  vectors.push(add2dVectors(vector(cartesian2dCoordinate(8,13)), vector(cartesian2dCoordinate(26,7))));
  vectors.push(subVectorAfromB(vector(cartesian2dCoordinate(4,5)), vector(cartesian2dCoordinate(12,2))));
  vectors.push(vector(cartesian2dCoordinate(3,4)));

  drawGraph(canvas, origin, ctx);
  drawLinesAroundVectors(vectors, origin, ctx);
  drawVectorsFromOrigin(vectors, origin, ctx);
  //Visualization- not in use
  //plotPoints(origin, cartesianPoints, ctx);
  //what do I do with 0,0?
  //vectors.push(vector(cartesian2dCoordinate(0,0)));
}
