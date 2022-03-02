class Pared{


  setup() {
   
    tierra1 = createSprite(50,150,100,1500);
    tierra1.shapeColor = "red";
    tierra1.visible = false;
 
    tierra2 = createSprite(1200,700,70,70);
    tierra2.addImage("cueva",cueva_Img); 
    tierra2.scale = 0.4;
     
    tierra3 = createSprite(370,50,230,200);
    tierra3.shapeColor = "red";
    tierra3.visible = false;
     
    tierra4 = createSprite(800,10,1000,20);
    tierra4.shapeColor = "red";
    tierra4.visible = false;
 
    tierra5 = tierra5= createSprite(290,250,60,200);
    tierra5.shapeColor = "red";
    tierra5.visible = false;
 
    tierra6= createSprite(1300,100,60,500);
    tierra6.shapeColor = "red";
    tierra6.visible = false;
 
    tierra7= createSprite(390,600,65,90);
    tierra7.addImage("rock", rock_img);
    tierra7.scale = 0.1;
 
    tierra8= createSprite(630,700,60,90);
    tierra8.addImage("rock", rock_img);
    tierra8.scale = 0.1;

    tierra9 = createSprite(600,570,600,30);
    tierra9.shapeColor = "red";
    tierra9.visible = false;
 
    tierra10 = createSprite(1090,600,40,250);
    tierra10.shapeColor = "red";
    tierra10.visible = false;
 
    tierra11 = createSprite(200,20,70,70);
    tierra11.addImage("cueva",cueva_Img); 
    tierra11.scale = 0.4; 
 
    tierra12 = createSprite(520,330,200,200);
    tierra12.shapeColor = "red";
    tierra12.visible = false;
 
    tierra13= createSprite(900,100,300,50);
    tierra13.shapeColor = "red";
    tierra13.visible = false;
 
    tierra14= createSprite(340,440,600,50);
    tierra14.shapeColor = "red";
    tierra14.visible = false;
 
    tierra15= createSprite(600,730,1000,50);
    tierra15.shapeColor = "red";
    tierra15.visible = false;
 
    tierra16= createSprite(790,460,50,180);
    tierra16.shapeColor = "red";
    tierra16.visible = false;
 
    tierra17= createSprite(820,600,60,90);
    tierra17.addImage("rock", rock_img);
    tierra17.scale = 0.1;

 
    tierra18= createSprite(1300,590,30,400);
    tierra18.shapeColor = "red";
    tierra18.visible = false;
 
    tierra19= createSprite(790,200,60,200);
    tierra19.shapeColor = "red";
    tierra19.visible = false;
 
    tierra20= createSprite(1100,150,150,150);
    tierra20.shapeColor = "red";
    tierra20.visible = false;
 
    tierra21= createSprite(1150,370,500,30);
    tierra21.shapeColor = "red";
    tierra21.visible = false;
 
    tierra22= createSprite(850,450,100,50);
    tierra22.shapeColor = "red";
    tierra22.visible = false;
 
    tierra23= createSprite(920,340,60,280);
    tierra23.shapeColor = "red";
    tierra23.visible = false;
 
    tierra24= createSprite(1100,340,150,80);
    tierra24.shapeColor = "red";
    tierra24.visible = false;
 
    tierra25= createSprite(700,150,200,30);
    tierra25.shapeColor = "red";
    tierra25.visible = false;
   
   tierrasGroup = new Group;
  }
   

   display(){
     background(rgb(198,135,103));
     tierra1.display();
     tierra2.display();
     tierra3.display();
     tierra4.display();
     tierra5.display();
     tierra7.display();
     tierra8.display();
     tierra9.display();
     tierra10.display();
     tierra11.display();
     tierra12.display();
     tierra14.display();
     tierra15.display();
     tierra16.display();
     tierra17.display();
     tierra18.display();
     tierra19.display();
     tierra20.display();
     tierra21.display();
     tierra22.display();
     tierra23.display();
     tierra24.display();
     tierra25.display();
   
     tierrasGroup.add(tierra1);
     tierrasGroup.add(tierra2);
     tierrasGroup.add(tierra3);
     tierrasGroup.add(tierra4);
     tierrasGroup.add(tierra5);
     tierrasGroup.add(tierra7);
     tierrasGroup.add(tierra8);
     tierrasGroup.add(tierra9);
     tierrasGroup.add(tierra10);
     tierrasGroup.add(tierra11);
     tierrasGroup.add(tierra12);
     tierrasGroup.add(tierra14);
     tierrasGroup.add(tierra15);
     tierrasGroup.add(tierra16);
     tierrasGroup.add(tierra17);
     tierrasGroup.add(tierra18);
     tierrasGroup.add(tierra19);
     tierrasGroup.add(tierra20);
     tierrasGroup.add(tierra21);
     tierrasGroup.add(tierra22);
     tierrasGroup.add(tierra23);
     tierrasGroup.add(tierra24);
     tierrasGroup.add(tierra25);
     drawSprites();  
   }
 };
