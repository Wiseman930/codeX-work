function reverseWords(str) {
    var first = str.split('').reverse().join("");
    var second = first.split(' ').reverse().join(" ")
    return second;
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));