class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        this.body= Constraint.create(options)
        this.pointB = pointB
        World.add(world, this.body)
    }
    display(){
        if(this.body.bodyA){
        line(this.body.bodyA.position.x, this.body.bodyA.position.y, this.pointB.x, this.pointB.y)
        }
    }
    soltar(){
        this.body.bodyA=null
    }
}