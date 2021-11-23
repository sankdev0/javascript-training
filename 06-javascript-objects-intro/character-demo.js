// You can use Node.js to run this script with command^
// node <file-name.js>
// Alternatively you can reference the script in an html file and run in a web browser.

// This is a JavaScript object literal.
const aurora = {
    name: "Aurora",
    health: 150,
    strength: 50,
    experience: 0,

    describe() {
        return `${this.name} has ${this.health} points, ${this.strength} strength and ${this.experience} XP.`;
    },

    getHarm(points) {
        if (this.health > 0 ) {
        this.health -= points;
        } else if (this.health <= 0) {
            this.health = 0;
        }
    },

    gainStrength(points) {
        this.strength += points;
    },

    gainExperience(points) {
        this.experience += points;
    }

};

console.log("Start: " + aurora.describe());

// Aurora is harmed by an arrow
aurora.getHarm(20);

// Aurora equips a strength necklace
aurora.gainStrength(10);

// Aurora learns a new skill
aurora.gainExperience(15);

console.log("End: " + aurora.describe());

