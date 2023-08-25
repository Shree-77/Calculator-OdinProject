const display = document.querySelector('#outputbox');
const buttons = document.querySelectorAll('button');
const content = document.createElement('div');
content.classList.add('content')
content.setAttribute('style', 'color : black; padding:5px;font-weight:bold;');
let op1, op2, opd;
function displayOP(value) {
    if (value === '1' || value === '2' || value === '5' || value === '8' ||
        value === '4' || value === '3' || value === '6' || value === '7' ||
        value === '9' || value === '0' || value === '00') {
        content.textContent += value;
        op1 = content.textContent;
    } else if (value == '+' || value == '-' || value == '*' || value == '/' || value == '%') {
        content.textContent = " ";
        opd = value;
    }

}
buttons.forEach((button) => button.addEventListener('click', () => {
    displayOP(button.value)
}));


display.appendChild(content);
