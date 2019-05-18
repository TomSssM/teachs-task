import './styles.scss';
import '../main-page/menu.scss';

const btn = document.querySelector('#js-calc-btn');
const l = document.querySelector('#l');
const h = document.querySelector('#h');
const output = document.querySelector('#js-output');

btn.addEventListener('click', () => {
    const lVal = Number(l.value);
    const hVal = Number(h.value);
    output.textContent = lVal * Math.log(hVal);
});