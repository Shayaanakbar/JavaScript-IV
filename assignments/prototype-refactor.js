/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

// * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
// 

class GameObject { 
    constructor (attributes) {
    this.createdAt = attributes.createdAt;
    this.dimensions = attributes.dimensions;
    }
    destroy() {
        return 'Object was removed from the game';
    }
}


//   === CharacterStats ===
//   * healthPoints
// @@ -23,6 +32,19 @@
//   * should inherit destroy() from GameObject's prototype


  class CharacterStats extends GameObject {
      constructor (charaAttributes) {
          super (attributes) 
            this.healthPoints = charaAttributes.healthPoints;
            this.name = charaAttributes.name;
            this.hp = charaAttributes.hp;
      }
      takeDamage () {
          return `${this.name} took damage`;
      }
    }
// CharacterStats.prototype = Object.create(GameObject.prototype); 

// CharacterStats.prototype.takeDamage = function () {
//   return `${this.name} took damage`;
// }

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
@@ -32,6 +54,19 @@
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

class Humanoid extends CharacterStats {
    constructor (humanAttributes) {
        super (attributes)
            this.team = humanAttributes.team;
            this.weapons = humanAttributes.weapons;
            this.language = humanAttributes.language;
    }
    greet () {
        return `${this.name} offers a greeting in ${this.language}`;
    }

}


Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}.`;
};


//   * Inheritance chain: GameObject -> CharacterStats -> Humanoid
// @@ -41,7 +76,7 @@

// Test you work by un-commenting these 3 objects and the list of console logs below:



//   const mage = new Humanoid({
//     createdAt: new Date(),
//     dimensions: {
// @@ -102,9 +137,28 @@
//   console.log(archer.greet()); // Lilith offers a greeting in Elvish.
//   console.log(mage.takeDamage()); // Bruce took damage.
//   console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.



  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods! 
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

  class Hero extends Humanoid {
      constructor (attributes) {
          super (attributes) 
      }
      defend () {
          return `AHHHHH!!! YOUR HEALTH IS ${currentHealth}, your opponent is ${power}`
      }
  }

  class Villian extends Humanoid {
    constructor (attributes) {
        super (attributes) 
    }
}

//   Hero.prototype.defend = function(hp, power) {
//     let currentHealth = hp;
//     while (currentHealth > 0); {
//     console.log(`AHHHHH!!! YOUR HEALTH IS ${currentHealth}, your opponent is ${power} STRONG!`);
//   }
//   console.log("YOU LOST!!");
// }; 