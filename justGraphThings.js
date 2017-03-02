
//tick marks for graph
let drawTicks = (canvas, x, y, ctx, direction) => {

  if(direction === 'y' && y < canvas.height){
    drawLine(cartesian2dCoordinate(x + 5, y),
            cartesian2dCoordinate(x - 5, y), ctx);
    drawTicks(canvas,x,y+10,ctx,direction);
  }

  if(direction === 'x' && x < canvas.width){
    drawLine(cartesian2dCoordinate(x, y + 5),
            cartesian2dCoordinate(x, y - 5), ctx);
    drawTicks(canvas,x+10, y, ctx, direction);
  }
}

//draw 2d graph
let drawGraph = (canvas, origin, ctx) => {
  //x axis
  drawLine(cartesian2dCoordinate(0, origin.y),
          cartesian2dCoordinate(canvas.width, origin.y),
          ctx,
          "black");
  drawTicks(canvas, 0, origin.y, ctx, 'x');
  //y axis
  drawLine(cartesian2dCoordinate(origin.x, 0),
          cartesian2dCoordinate(origin.x, canvas.height),
          ctx,
          "black");
  drawTicks(canvas, origin.x, 0, ctx, 'y');
}

//plot points on graph
let plotPoints = (origin, points, ctx)=>{
  points.map((point) => {

    let scaled = relativePoint(origin,
          cartesian2dCoordinate(scale(point.x), scale(point.y)));

    drawLine(scaled, cartesian2dCoordinate(origin.x, scaled.y), ctx);
    drawLine(scaled, cartesian2dCoordinate(scaled.x, origin.y), ctx);
    drawPoint(point, scaled, ctx);
  });
}
