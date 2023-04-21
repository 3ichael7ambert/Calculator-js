let result = document.getElementById('result');

function addToResult(value) {
  result.value += value;
}

function clearResult() {
  result.value = '';
}

function deleteLast() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  result.value = eval(result.value);
}

function squareRoot() {
  result.value = Math.sqrt(result.value);
}








document.addEventListener('keydown', function(event) {
  // Get the key code from the event object
  var keyCode = event.keyCode || event.which;

  // Call the appropriate function based on the key code
  switch (keyCode) {
    case 8: // Backspace
      deleteLast();
      break;
    case 13: // Enter
      calculate();
      break;
    case 27: // Escape
      clearResult();
      break;
    case 46: // Delete
      clearResult();
      break;
    case 48: // 0
      addToResult('0');
      break;
    case 49: // 1
      addToResult('1');
      break;
    case 50: // 2
      addToResult('2');
      break;
    case 51: // 3
      addToResult('3');
      break;
    case 52: // 4
      addToResult('4');
      break;
    case 53: // 5
      addToResult('5');
      break;
    case 54: // 6
      addToResult('6');
      break;
    case 55: // 7
      addToResult('7');
      break;
    case 56: // 8
      addToResult('8');
      break;
    case 57: // 9
      addToResult('9');
      break;
    case 187: // + (plus sign)
      addToResult('+');
      break;
    case 189: // - (minus sign)
      addToResult('-');
      break;
    case 190: // . (decimal point)
      addToResult('.');
      break;
    case 191: // / (division sign)
      addToResult('/');
      break;
    case 192: // ` (backtick)
      addToResult('^');
      break;
    case 106: // * (multiply sign on numpad)
      addToResult('*');
      break;
    case 107: // + (plus sign on numpad)
      addToResult('+');
      break;
    case 109: // - (minus sign on numpad)
      addToResult('-');
      break;
    case 111: // / (division sign on numpad)
      addToResult('/');
      break;
    default:
      break;
  }
});
