let currentInput = '';

function appendNumber(number) {
  const display = document.getElementById('display');
  if (currentInput === '0' && number !== '.') {
    currentInput = number;
  } else {
    currentInput += number;
  }
  display.textContent = currentInput;
}

function appendOperator(operator) {
  const display = document.getElementById('display');
  if (!currentInput) return;
  const lastChar = currentInput.slice(-1);
  if (['+', '-', '*', '/'].includes(lastChar)) {
    currentInput = currentInput.slice(0, -1);
  }
  currentInput += operator;
  display.textContent = currentInput;
}

function clearDisplay() {
  currentInput = '';
  document.getElementById('display').textContent = '0';
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1) || '0';
  document.getElementById('display').textContent = currentInput;
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    document.getElementById('display').textContent = currentInput;
  } catch (error) {
    document.getElementById('display').textContent = 'Error';
    currentInput = '';
  }
}
