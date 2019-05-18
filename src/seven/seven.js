import '../main-page/menu.scss';

const output = document.querySelector('#js-output');

class Animal {
    constructor(canBite) {
        this.canBit = canBite;
    }
}
class AEagle extends Animal {
    constructor(canBite) {
        super(canBite);
        this.name = 'AEagle';
    }

    say() {
        return 'Hi!';
    }
}
class ACock extends Animal {
    constructor(canBite) {
        super(canBite);
        this.name = 'ACock';
    }

    say() {
        return 'ku-ka-re-ku';
    }
}
class AAss extends Animal {
    constructor(canBite) {
        super(canBite);
        this.name = 'AAss';
    }

    say() {
        return 'IA';
    }
}
class ACat extends Animal {
    constructor(canBite) {
        super(canBite);
        this.name = 'ACat';
    }

    say() {
        return 'MIAU';
    }
}
class ADog extends Animal {
    constructor(canBite) {
        super(canBite);
        this.name = 'ADog';
    }

    say() {
        return 'GAV-GAV';
    }
}

document.querySelector('#js-btn-show').addEventListener('click', () => {
    const animals = [];
    animals.push(new AEagle(false));
    animals.push(new ACock(false));
    animals.push(new AAss(true));
    animals.push(new ACat(false));
    animals.push(new ADog(true));

    let outputMessage = '';
    for (let animal of animals) {
        outputMessage += animal.name + ' says ' + animal.say();
        if (animal.canBite) outputMessage += ' and can bite';
        outputMessage += '<br>';
    }
    output.innerHTML = outputMessage;
});