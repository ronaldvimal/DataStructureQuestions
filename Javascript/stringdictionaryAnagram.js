const dictionary = ['testing', 'abcd', 'estt' , 'test', 'TEST', 'TTES', 'tan','STET'];
const searchWord = 'Test';

const searchDictionary = (dictionary, searchWord) => {
    //Sort the dictioarny and use it as key
    // 'Test' - > sorted after lowercase will give - estt.
    //So estt will be the key for hashmap with list of arrays.
   if(dictionary.length <= 0) return [];
   const dictFound = {};
   for(let i=0; i< dictionary.length; i++){
       const mapKey = dictionary[i].toLowerCase().split('').sort().join();
       if(dictFound[mapKey]){
           dictFound[mapKey].push(dictionary[i]);
       }else {
        dictFound[mapKey] = [dictionary[i]];
       }
   }
   
    //Lookup based on the key
   const searchKey = searchWord.toLowerCase().split('').sort().join();
   if(dictFound[searchKey]) return dictFound[searchKey];

   return [];
}

console.log(searchDictionary(dictionary, searchWord));