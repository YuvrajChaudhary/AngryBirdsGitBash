class SlingShot {
        constructor(bodyA, pointB) {
            var options = {
                bodyA : bodyA,
                pointB : pointB,
                lenght : 20,
                stiffness: 1.05
            }
            this.pointB = pointB;
            this.sling = Constraint.create(options);
            World.add(world, this.sling);





        }
        display() {
            if(this.sling.bodyA) {
                line(this.sling.bodyA.position.x , this.sling.bodyA.position.y, this.pointB.x, this.pointB.y);
                


            }
            

        } 

        fly() {
            this.sling.bodyA = null


        }



}
