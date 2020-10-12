class Box {
    constructor(x, y, w, h) {

        var b_options = {
            isStatic: false,
            restitution:0.8,
            density:1,
            friction:1
        }

        this.b = Bodies.rectangle(x,y,w,h,b_options)
        this.h = h;
        this.w = w;
        World.add(world, this.b)


    }

    show() {
        push ()
        translate (this.b.position.x, this.b.position.y)
        rotate (this.b.angle)
        fill ("blue")
        rectMode(CENTER)
        rect(0,0,this.w, this.h)
        pop ()
    }

}
