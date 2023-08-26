const display = document.querySelector('#outputbox');
const buttons = document.querySelectorAll('button');
const content = document.createElement('div');
content.classList.add('content')
content.setAttribute('style', 'color : black; padding:5px;font-weight:bold;');
let op1, op2, opt;

function Operation(operator) {
    switch (operator) {
        case '+':
            return parseInt(op1) + parseInt(op2);
        case '-':
            return op1 - op2;
        case '*':
            return op1 * op2;
        case '/':
            return op1 / op2;
        case '%':
            return op1 % op2;
        default:
            return 0;

    }
}
function displayOP(value) {
    if (value === '1' || value === '2' || value === '5' || value === '8' ||
        value === '4' || value === '3' || value === '6' || value === '7' ||
        value === '9' || value === '0' || value === '00' || value == '.') {
        if (opt === undefined) {
            content.textContent += value;
            op1 = content.textContent;
        } else {
            content.textContent += value;
            op2 = content.textContent;
        }

    } else if (value == '+' || value == '-' || value == '*' || value == '/' || value == '%') {
        content.textContent = "";
        opt = value;
    } else if (value === '=') {
        content.textContent = "";
        content.textContent = Operation(opt);
        op1 = Operation(opt);
    } else if (value === 'C') {
        content.textContent = "";
    } else if (value === 'backspace') {
        const splitStr = content.textContent.split("");
        splitStr.pop();
        content.textContent = splitStr.join("");

    }
}
buttons.forEach((button) => button.addEventListener('click', () => {
    displayOP(button.value)
}));


display.appendChild(content);
