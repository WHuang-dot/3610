const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d")
const recognition = new webkitSpeechRecognition();

canvas.width = 600
canvas.height = 600

ctx.lineWidth = 3

let color = "black"
let radius = 75

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log("drawing circle")
    ctx.fillStyle = color
    ctx.beginPath()
    ctx.arc(300, 300, radius, 0, 2*Math.PI)
    ctx.fill()
}
draw()

function changeToStop(){
    document.getElementById("speak-button").innerHTML = "Stop"
}

function changeToSpeak(){
    document.getElementById("speak-button").innerHTML = "Speak"
}

let isListening = false

function test(){
    console.log(isListening)
    if(!isListening){
        recognition.onresult = function(event) { 
            resultInText = event.results[0][0].transcript
            console.log(resultInText)
            if(resultInText.toLowerCase() === "help"){
                document.getElementById("message").innerHTML = "Say color, followed by a color, to set the circle color. Say size, followed of a number from 1 to 300, to set the diameter of the circle."
            }else{
                
            }
            let sizeIndex = resultInText.indexOf("size")
            let sizeNumber = parseInt(resultInText.substring(sizeIndex+5,resultInText.length))
            console.log(sizeNumber)
            if(sizeNumber < 1){
                console.log("Too small")
                document.getElementById("message").innerHTML = "Too small"
            }else if(sizeNumber > 300){
                console.log("Too big")
                document.getElementById("message").innerHTML = "Too big"
            }else if(!sizeNumber && resultInText.includes("size")){
                console.log("Invalid Size")
                document.getElementById("message").innerHTML = "Invalid Size"
            }else{
                if(sizeNumber){
                    radius = sizeNumber
                    draw()
                }
            }
            if(resultInText.toLowerCase() === "color blue"){
                console.log("change color to blue")
                color = "blue"
                draw()
            }else if(resultInText.toLowerCase() === "color green"){
                console.log("change color to green")
                color = "green"
                draw()
            }else if(resultInText.toLowerCase() === "color yellow"){
                console.log("change color to yellow")
                color = "yellow"
                draw()
            }else if(resultInText.toLowerCase() === "color purple"){
                console.log("change color to purple")
                color = "purple"
                draw()
            }else if(resultInText.toLowerCase() === "color black"){
                console.log("change color to black")
                color = "black"
                draw()
            }else if(resultInText.toLowerCase() === "color orange"){
                console.log("change color to orange")
                color = "orange"
                draw()
            }else if(resultInText.toLowerCase() === "color red"){
                console.log("change color to red")
                color = "red"
                draw()
            }else if(resultInText.toLowerCase() === "color brown"){
                console.log("change color to brown")
                color = "brown"
                draw()
            }

            document.getElementById("speak-button").innerHTML = "Speak"
            isListening = false
            }
            recognition.start();
            isListening = true
            document.getElementById("speak-button").innerHTML = "Stop"
    }else{
        recognition.abort()
        document.getElementById("speak-button").innerHTML = "Speak"
    }
}