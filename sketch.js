var bird, bordas;
var solo;
var doenca, grupodeobstaculos
var jogando,exit
var estadoJogo = jogando
function preload(){

}

function setup(){
  createCanvas(600,200);
  
  // criando o bird 
  bird = createSprite(50,160,20,50);
  bordas = createEdgeSprites();
  
  solo = createSprite(50,180,600,30)
  solo.shapeColor = "blue"
  solo.velocityX = -3;

  grupodeobstaculos = createGroup();
  
  solo.x = solo.width/2
  
  // adicionando escala e posição ao bird
  bird.scale = 0.5;
  bird.x = 50
}


function draw(){
  // definir cor de fundo
  background("white");
  
  // registrando a posição y do bird
    console.log(bird.y)
    console.log(solo.x)

    if (estadoJogo === jogando) {
        gerarObstaculos();
        if (grupodeobstaculos.isTouching(bird)) {
            estadoJogo = exit
        }
    }
    if (estadoJogo === exit) {
        if (keyDown('k')) {
            estadoJogo = jogando
        }
    }
  
  if (solo.x < 0) {
   solo.x = solo.width/2
    
  }

  
  // o bird pula quando a tecla espaço é acionada 
  if(keyDown("space")&& bird.y >= 110) {
    bird.velocityY = -5;
    }
  
  bird.velocityY = bird.velocityY + 0.5;
  
  // impedir o bird de cair 
  bird.collide(solo);
 
  if (grupodeobstaculos.isTouching(bird)) {
      estadoJogo = exit;
  }

  drawSprites();
}


function gerarObstaculos(){
    if (frameCount % 60 === 0){
      var obstaculo = createSprite(400,165,10,40);
     obstaculo.velocityX = -6;
         
       //atribuir escala e tempo de duração ao obstáculo         
       obstaculo.scale = 0.5;
       obstaculo.lifetime = 300;
      
       //adicionar cada obstáculo ao grupo
       grupodeobstaculos.add(obstaculo);
    }
   }
   
   
   