class Boat{
    constructor(x, y, width, height, boatPos, boatAnimation){
        
        var options = {
            restitution: 0.5,
            friction: 1,
            density: 1
        }
 
     this.animation = boatAnimation
     this.speed = 0.05
     this.body = Bodies.rectangle(x, y, width, height, options)
     this.width = width
     this.height = height
     this.isBroken = false
     this.boatposition = boatPos
     this.image = loadImage("./assets/boat.png")
     World.add(world, this.body)
    }

    animate(){
        this.speed += 0.05 % 1.1
    }

    remove(index){
        this.animation = brokenBoat_animation;
        this.speed = 0.05;
        this.width = 300;
        this.height = 300;
        this.isBroken = true;
        setTimeout(()=> {
            Matter.World.remove(world, boats [index].body)
            boats.splice(index, 1)
        }, 2000)
      }


    display(){
        var angle = this.body.angle
        var pos = this.body.position
        var index = floor(this.speed % this.animation.length)
        push()
        translate(pos.x, pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.animation[index], 0, this.boatposition, this.width, this.height)
        pop()
    }



}