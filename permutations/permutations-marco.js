
const permutation = (string) => {
    var parentArray = [];

    // split string into it's character
    for (let i = 0; i < string.length; i++) {
        const character = string[i];
        const remainingCharacters = string.replace(character, "");

        // if no remaining characters, return the character found as an array
        if (remainingCharacters.length == 0) {
            return [character];
        }
        else {
            // otherwise, keep permutating the remaining characters
            var arr = permutation(remainingCharacters);

            // inject character to returned array so 'a' and ['b'] becomes ['ab']
            for (let i = 0; i < arr.length; i++) {
                arr[i] = character + arr[i];
                parentArray.push(arr[i]);
            }
        }
    }

    return parentArray;
};

// given "abc", return ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
console.log(permutation("abc"));