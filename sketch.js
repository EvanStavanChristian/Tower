const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;

function preload(){

}

function setup(){
    createCanvas(900,900);
    ground = new Ground(300, 300, 15, 100);

}

function draw(){
    background("blue");
    ground.display();

   

}