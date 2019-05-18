import './two.scss';

const btn = document.querySelector('#js-btn');
const input = document.querySelector('#js-input');
const output = document.querySelector('#js-output');

btn.addEventListener('click', () => {
    const number = Number(input.value);
    output.innerHTML = Math.log(number) / Math.log(2);
});