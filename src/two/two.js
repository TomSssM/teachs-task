import './two.scss';
import '../main-page/menu.scss';

const btn = document.querySelector('#js-btn');
const input = document.querySelector('#js-input');
const output = document.querySelector('#js-output');

btn.addEventListener('click', () => {
    const number = Number(input.value);
    const outputValue = Math.log(number) / Math.log(2);
    if (isNaN(outputValue)) {
        output.innerHTML = 'Error';
        return;
    }
    output.innerHTML = outputValue;
});