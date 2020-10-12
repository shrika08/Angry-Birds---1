class Log {
    constructor(x, y, h , a) {

        var l_options = {
            isStatic: false,
            restitution:0.8,
            density:1,
            friction:1
        }

        this.l = Bodies.rectangle(x,y,20,h,l_options)
        this.h = h;
        this.w = 20;
        Matter.Body.setAngle(this.l,a)
        World.add(world, this.l)


    }

    show() {
        push ()
        translate (this.l.position.x, this.l.position.y)
        rotate (this.l.angle)
        fill ("brown")
        rectMode(CENTER)
        rect(0,0,this.w, this.h)
        pop ()
    }

}
