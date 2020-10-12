class Bird {
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
        var pos = this.b.position
        pos.x = mouseX
        pos.y = mouseY
        push ()
        translate (pos.x,pos.y)
        rotate (this.b.angle)
        fill ("red")
        rectMode(CENTER)
        rect(0,0,this.w, this.h)
        pop ()
    }

}
