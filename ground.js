class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.height=height;
        this.width=width;
        World.add(myWorld,this.body);
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill(280,150,20)
        rect(pos.x,pos.y,this.width,this.height);
    }
}