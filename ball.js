class Ball{
    constructor(x,y){
        
	var ballfunction={
		isStatic:false,
		restitution:0.7,
		friction:0.5,
		density:1.2
    }

	this.crumpled = Bodies.circle(x,y,20,ballfunction);
	World.add(world,this.crumpled);
    }
    display(){
        ellipseMode(RADIUS);
        ellipse(this.crumpled.position.x, this.crumpled.position.y,20,20);
        
      
    }
}