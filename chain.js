class Rope{
    constructor(body1,body2,offsetX,offsetY){

        this.offsetX = this.offsetX;
        this.offsetY = this.offsetY;
        
        var options={
            bodyA:body1,
            bodyB:body2,
            Diameter:40,
            bodyB:{x:this.offsetX,y:this.offsetY},
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
        
    }

    display(){

        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        strokeWeight(2);
        var Anchor1x=pointA.x;
        var Anchor1y=pointA.y;

        var Anchor2X=pointB.x+this.offsetX
        var Anchor2Y=pointB.y+this.offsetY

        line(Anchor1x,Anchor1y,Anchor2X,Anchor2Y);
    }
}