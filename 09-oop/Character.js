class Character {
    constructor(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.xp = 0;
    }

    describe() {
        return `Character ${this.name} has ${this.health} points, ${this.strength} and ${this.xp} XP points`;
    }
}