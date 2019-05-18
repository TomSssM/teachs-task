import './six.scss';
import '../main-page/menu.scss';

const res =
    "Normal people's animals                      Coder's animals\n" +
    "Cat says MIAU                                     Cat says GAV-GAV\n" +
    "Dog says GAV-GAV                             Dog says IA\n" +
    "Ass says IA Ass                                    Ass says KU-KA-RE-KU\n" +
    "Cock says KU-KA-RE-KU                  Cock says Hello\n" +
    "Homo says Hello                                  Homo says MIAU\n";

const output = document.querySelector('#js-output');
document.querySelector('#js-btn-speak').addEventListener('click', () => {
    output.textContent = res;
});
document.querySelector('#js-btn-stop').addEventListener('click', () => {
    output.textContent = '';
});