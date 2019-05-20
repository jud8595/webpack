import printMe from './print.js';
import times from 'lodash/times';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = 'Click the button and check the console!'

    btn.innerHTML = 'Click me!';
    btn.onclick = printMe;    

    element.appendChild(btn);
    return element;
}
    
document.body.appendChild(component());
times(3, () => console.log('whee'));