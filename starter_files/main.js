//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (name, status, color, hungry) {
  this.name = name;
  this.status = status;
  this.color = color;
  this.hungry = hungry;
}
// Instances of Dog
let sadie = new Dog("sadie", "normal", "black", false);
let moonshine = new Dog("moonshine", "drunk", "purple", true);
let atticus = new Dog("atticus");

// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (name, cool) {
  this.name = name;
  this.cool = cool;
}
// Instances of Human
// Needed: mason, julia
Human.prototype.pet = function(dog){
  dog.status = "happy";
};

Human.prototype.feed = function(dog){
  dog.hungry = false;
}

let mason = new Human("mason", false);
let julia = new Human ("julia", true);
