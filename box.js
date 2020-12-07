class Box{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height);
        this.height=height;
        this.width=width;
        World.add(myWorld,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(200,200,52)
        rect(0,0,this.width,this.height);
        pop();
    }
}