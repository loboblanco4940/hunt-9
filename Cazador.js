class Cazador{

setup(){

    cazador1 = createSprite(1200,700,20,20);
    cazador1.addImage("cazador1",cazador1_img);
    cazador1.scale = 1;
    
 
    cazador2 = createSprite(1200,500,20,20);
    cazador2.addImage("cazador2",cazador2_img);
    cazador2.scale = 0.7;
 
    cazador3 = createSprite(1200,300,20,20);
    cazador3.addImage("cazador3",cazador3_img);
    cazador3.scale = 0.7;

    cazadoresGroup = new Group;

    cazador1.velocityY = -2;

    cazador2.velocityY = -3;

    cazador3.velocityY = -3;

}

display() {
    cazador1.display();
    cazador2.display();
    cazador3.display();

    cazadoresGroup.add(cazador1);
    cazadoresGroup.add(cazador2);
    cazadoresGroup.add(cazador3);


 }


}