class MagicianDaemon {
  constructor(name, level, health, attack, defence, stoned = false) {
    this.name = name;
    this.level = level;
    this.health = health;
    this._attack = attack;
    this.defence = defence;
    this._stoned = stoned;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(stoned) {
    if (typeof stoned !== 'boolean') {
      throw new Error('you can set stoned to only true or false');
    }
    this._stoned = stoned;
  }

  get attack() {
    return (n) => {
      const result = this._attack - (n - 1) * 10;

      return Math.max((this._stoned ? result - Math.log2(n) * 5 : result), 0);
    };
  }

  set attack(attack) {
    this._attack = attack;
  }
}

class Magician extends MagicianDaemon {
  constructor(name, level, health, attack, defence, stoned = false) {
    super(name, level, health, attack, defence, stoned);
    this.type = 'Magician';
  }
}

class Daemon extends MagicianDaemon {
  constructor(name, level, health, attack, defence, stoned = false) {
    super(name, level, health, attack, defence, stoned);
    this.type = 'Daemon';
  }
}

export {
  Magician,
  Daemon,
};
