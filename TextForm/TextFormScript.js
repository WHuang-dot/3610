function draw(font){
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  let text = document.getElementById("fname").value
  let textColor = document.getElementById("textColor").value
  let TextSize = document.getElementById("TextSize").value
  let backgroundColor = document.getElementById("backgorund").value

  if(!font){
    font = 'Arial'
  }

  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = textColor;
  ctx.font = `${TextSize}px ${font}`;
  ctx.fillText(text, 0, 200);

}

function reset(){
  document.getElementById("fname").value = ''
  document.getElementById("textColor").value = "black"
  document.getElementById("TextSize").value = 12
  document.getElementById("backgorund").value = "#FFFFFF"
  draw()
}
