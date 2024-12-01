var SpeechRecognition = window.webkitSpeechRecognition; 
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 
 
recognition.onresult = function(event) {

    console.log(event); 
    var Content = event.results[0][0].transcript;
    console.log(Content);
      if(Content =="click picture")
      {
        camera = document.getElementById("camera");
        Webcam.set({
        width:360,
        height:250,
        image_format : 'png',
        png_quality:90
        });
        
        speak();
      }
      else{
        window.open("https://www.google.co.in/search?q="+Content,"_blank")
      }
}

function speak(){
    var synth = window.speechSynthesis;
    
    speak_data = "Adjust yourself your picture will be clicked in next 7 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function()
    { 
        take_snapshot(); 
        save();
    }, 7000);
}

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
   
}

function save()
{
  link = document.getElementById("link");
  image = document.getElementById("selfie_image").src ;
  link.href = image;
  link.click();
}
