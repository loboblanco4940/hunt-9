class Fruta{

setup(){

fruta1 = createSprite(200,200,20,20);
fruta1.addImage("fruta1",apple_img);
fruta1.scale = 0.3;
fruit1.visible = false;

fruta2 = createSprite(200,200,20,20);
fruta2.addImage("fruta2",orange_img);
fruta2.scale = 0.3;
fruit2.visible = false;

fruta3 = createSprite(200,200,20,20);
fruta3.addImage("fruta3",peach_img);
fruta3.scale = 0.3;
fruit3.visible = false;


fruta4 = createSprite(200,200,20,20);
fruta4.addImage("fruta4",pear_img);
fruta4.scale = 0.3;
fruit4.visible = false;

honey = createSprite(200,200,20,20);
honey.addImage("honey",honey_img);
honey.scale = 0.3;
honey.visible = false;

frutasGroup = new Group;
}

display(){

fruta1.display();
fruta2.display();
fruta3.display();
fruta4.display();
honey.display();

frutasGroup.add(fruta1);
frutasGroup.add(fruta2);
frutasGroup.add(fruta3);
frutasGroup.add(fruta4);
frutasGroup.add(honey);
drawSprites();
}

}