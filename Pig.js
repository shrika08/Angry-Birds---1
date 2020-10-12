class Pig {
    constructor(x, y, w, h) {

        var p_options = {
            isStatic: false,
            restitution:0.8,
            density:1,
            friction:1
        }

        this.p = Bodies.rectangle(x,y,w,h,p_options)
        this.h = h;
        this.w = w;
        World.add(world, this.p)


    }

    show() {
        push ()
        translate (this.p.position.x, this.p.position.y)
        rotate (this.p.angle)
        fill ("green")
        rectMode(CENTER)
        rect(0,0,this.w, this.h)
        pop ()
    }

}
