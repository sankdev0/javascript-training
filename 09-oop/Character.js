export class Character {
    constructor(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.xp = 0;
    }

    // Attack a target
    attack(target) {
        if (this.health > 0) {
            const damage = this.strength;
            console.log(
                `${this.name} attacks ${target.name} and causes ${damage} damage points`);
            target.health -= damage;
            if (target.health > 0) {
                console.log(`${target.name} has ${target.health} health points left`);
            } else {
                target.health = 0;
                const bonusXP = 10;
                console.log(
                    `${this
                        .name} eliminated ${target.name} and wins ${bonusXP} experience points`
                );
                this.xp += bonusXP;
            }
        } else {
            console.log(`${this.name} can't attack (they've been eliminated)`);
        }
    }


    describe() {
        return `Character ${this.name} has ${this.health} points, ${this.strength} and ${this.xp} XP points`;
    }
}