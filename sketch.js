const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;


function preload() {
    // create getBackgroundImg( ) here
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    console.log("aaditya")
    getBackgroundImg();
    
}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }
    
  
    
    // add condition to check if any background image is there to add
    //backgroundImg = loadImage(bg);

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    
   
    var respose = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var resposeJSON = await respose.json();
    console.log(resposeJSON)
    var hour = resposeJSON.datetime;
    var time = hour.slice(11,13);
    
    console.log(time);
    //time = 22;
    if(time>=04 && time<=06){
     bg = "sunrise1.png" 
    
    }

   else if(time>=06 && time<=08){
        bg = "sunrise2.png"   
       }

 else if(time>=08 && time<=10){
        bg = "sunrise3.png"   
       }

       else if(time>=10 && time<=12){
        bg = "sunrise4.png"   
       }       
       
       else if(time>=12 && time<=14){
        bg = "sunrise4.png"   
       }

       else if(time>=14 && time<=16){
        bg = "sunrise5.png"   
       }

       else if(time>=16 && time<=19){
        bg = "sunrise6.png"   
       }

       else if(time>=19 && time<=20){
        bg = "sunset10.png"   
       }

       else if(time>=20 && time<=22){
        bg = "sunset11.png"   
       }

       else if(time>=22 && time<=04){
        bg = "sunset12.png"   
       }

       

       backgroundImg = loadImage(bg);

     
}

