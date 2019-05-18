import './styles.scss';
import '../main-page/menu.scss';

const one = document.querySelector('#js-one-d');
const two = document.querySelector('#js-two-d');
const output = document.querySelector('output');

const evalBtn = document.querySelector('#js-expr-eval');
evalBtn.addEventListener('click', evaluate);

function evaluate(e) {
    const firstDigit = Number(one.value);
    const secondDigit = Number(two.value);
    output.textContent = firstDigit + secondDigit;
}