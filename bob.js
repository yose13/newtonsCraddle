class Bob
{
    constructor(x,y,r)
    {
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:0.5


        }
        this.x=x;
        this.y=y;
        this.r=r
        this.body=Bodies.circle(this.x, this.y, this.r, options)
        World.add(world, this.body);


    }
    display()
    {

        var paperpos=this.body.position;

        push()
        translate(paperpos.x, paperpos.y);
        strokeWeight(3);
        fill("blue")
        ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r);
        pop()
    }
}