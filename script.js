// First method: reverse only words in a string
function reverseString(str){
    return str.split(' ').reverse().join(' ');
}
console.log(reverseString("Hello World"));

// Second method: reverse the entire string
function reverseEntireString(string){
    let reversed = '';
    for(let i = 0; i < string.length; i++){
        reversed = string[i] + reversed;
    }
    return reversed;
}
console.log(reverseEntireString("Kitty"));