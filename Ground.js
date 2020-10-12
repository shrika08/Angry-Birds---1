class Ground {
    constructor(x, y, w, h) {

        var g_options = {
            isStatic: true
        }

        this.g = Bodies.rectangle(x,y,w,h,g_options)
        this.h = h;
        this.w = w;
        World.add(world, this.g)


    }

    show() {
        rectMode(CENTER)
        rect(this.g.position.x, this.g.position.y, this.w, this.h)
    }

}