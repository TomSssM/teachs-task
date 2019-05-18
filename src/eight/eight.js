import './eight.scss';
import '../main-page/menu.scss';

const output = document.querySelector('#js-output');



/**
 * since there are no Interfaces in JS
 * one of the best ways to describe a class
 * is JSDoc, like this:
 * */
class Cesar {
    /**
     * creates a Ceasar instance
     * */
    constructor() {
        this.name = 'Цезарь';
    }

    /**
     * get PrivateZeil
     * @return {string} some message
     * */
    get PrivateZeil() {
        return 'Cлава полководца, властолюбие';
    }

    /**
     * get Zeil
     * @return {string} some other message
     * */
    get Zeil() {
        return 'единовластие в Риме как насущная необходимость';
    }
}

const ceasar = new Cesar();
const separator = ' --- ';

document.querySelector('#js-btn-one').addEventListener('click', () => {
    output.textContent = ceasar.name + separator + ceasar.PrivateZeil;
});
document.querySelector('#js-btn-both').addEventListener('click', () => {
    output.textContent = ceasar.name + separator + ceasar.PrivateZeil + separator + ceasar.Zeil;
});