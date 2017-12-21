/**
 * Pads a number
 *
 * @param {string|number} value
 * @param {number} places
 * @param {string} padChar
 * @returns {string}
 */
function padNumber(value, places = 2, padChar = '0') {
  const intVal = parseInt(value);
  let padded = `${intVal}`;

  while (intVal > 0 && padded.length < places) {
    padded = padded.replace(/^/, padChar);
  }

  return padded;
}

export default padNumber;
