var leftWristX=0;
var leftWristY=0;
var rightWristX=0;
var rightWristY=0;
var leftScore=0;
var rightScore=0;

function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("faded");
}

function setup(){
canvas=createCanvas(600,500);
canvas.position(650,250);
video=createCapture(VIDEO);
video.hide();
posenet=ml5.poseNet(video,modelloaded);
posenet.on('pose',gotPoses);
}

function draw(){
    canvas(video,50,50,600,500);
    fill("yellow");
}

function modelloaded(){
    console.log("Model is loaded");
    if(leftScore>0.2){
        song1.stop();
        song2.stop();
        song1.play();
    }
    else if(rightScore>0.2){
        song2.stop();
        song1.stop();
        song2.play();
    }
}

function gotPoses(results){
    if (results.length>0){
    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    leftWristY=results[0].pose.leftWrist.y;
    rightWristX=results[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
    leftScore=results[0].pose.keypoints[9].score;
    rightScore=results[0].pose.keypoints[10].score;
    console.log("Left Wrist"+ leftWristX+leftWristY);
    console.log("Right Wrist"+ rightWristX+rightWristY);
    }
    }