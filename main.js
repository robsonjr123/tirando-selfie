var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
 //var joão = novo humano()
function start() {
    document.getElementById("textbox").innerHTML = "";
  recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);

    var resultado = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML= resultado;
    if(resultado == "tire minha selfie"){
        speak();
   }
}

function speak() {
 var synth = window.speechSynthesis;
var speak_data  = "tirando selfie em alguns segundos"

var utterthis = new SpeechSynthesisUtterance(speak_data); //converter o texto para voz e guarda em utterthis
synth.speak(utterthis)

Webcam.attach(camera);

setTimeout(function()  {
  take_selfie(); 
  save();
}, 5000);
}

var camera = document.getElementById("camera");

Webcam.set({
  width: 360,
  height: 250,
  image_format: 'jpeg',
  jpeg_quality:90
});


function take_selfie() {
  Webcam.snap(function(data_uri)
  {
    document.getElementById("result").innerHTML = '<img id="selfieImage" src="'+data_uri+'"/>';
  }) 
}
var guardar_imagem
function save() {
 link = document.getElementById("link");
 guardar_imagem = document.getElementById("selfieImage").src;
link.href = guardar_imagem;
link.click();
}