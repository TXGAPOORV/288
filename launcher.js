class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }


        this.pointB = pointB;
        this.launch = Constraint.create(options);
        World.add(world, this.launch);
    }
    fly(){
        this.launch.bodyA = null;
    }
 
    display(){
  
            var pointA = this.launch.bodyA.position;
            var pointB = this.pointB;
            
            push();       
            stroke(48,22,8);
           
            strokeWeight(4);
            line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y);
     
            pop();
    }
    }
