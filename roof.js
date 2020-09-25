class Ground{
    constructor(x,y){

        var ground_options ={
            isStatic: true
        }

        this.ground = Bodies.rectangle(x,y,800,50,ground_options);
        World.add(world,this.ground);
    }
    display(){
        rectMode(CENTER);
        rectMode(CENTER);
        fill(255);
        rect(this.ground.position.x,this.ground.position.y,800,20);
      
    }
}