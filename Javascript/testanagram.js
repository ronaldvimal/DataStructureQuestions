const anagramdata='ronnin';

const anagramCheck =(anagramdata) => {

    let returnAnagram=0;
    if(anagramdata.length%2 > 0) return -1;

    const characterFrequency = Array(26).fill(0);

    for(let i=0; i < anagramdata.length; i++){
        const index = anagramdata.charAt(i).charCodeAt(0) - 'a'.charCodeAt(0);

        if(i < anagramdata.length /2) {
            characterFrequency[index]++;
        } else {
            characterFrequency[index]--
        }
    }

    for(let i=0; i< characterFrequency.length; i++){
        if(characterFrequency[i] > 0) {
            returnAnagram+=characterFrequency[i]
        }
    }
    return returnAnagram;

}

console.log(anagramCheck(anagramdata));