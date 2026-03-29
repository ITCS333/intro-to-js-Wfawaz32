/**
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @returns {number} The sum of a and b.
 */
function sum(a, b) {
    return a + b;
}

/**
 * @param {string} str The string to reverse.
 * @returns {string} The reversed string.
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}

/**
 * @param {number[]} numbers An array of numbers.
 * @returns {number} The largest number in the array. Return null if the array is empty.
 */
function findLargest(numbers) {
    if (numbers.length === 0) return null;
    return Math.max(...numbers);
}

/**
 * @param {string} str The string to check.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or racecar.
 * The check should be case-insensitive.
 */
function isPalindrome(str) {
    const cleaned = str.toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}

/**
 * @param {number[]} numbers An array of numbers.
 * @returns {number} The average of the numbers. Return null if the array is empty.
 */
function findAverage(numbers) {
    if (numbers.length === 0) return null;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

// ✅ لا تغيّر أسماء الدوال هنا
module.exports = { sum, reverseString, findLargest, isPalindrome, findAverage };
