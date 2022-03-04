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

//Java Solution 

// class Solution {
//     public List<List<String>> searchDictionary(String[] strs) {
//         if (strs.length == 0) return new ArrayList();
//         Map<String, List> ans = new HashMap<String, List>();
//         for (String s : strs) {
//             char[] ca = s.toCharArray();
//             Arrays.sort(ca);
//             String key = String.valueOf(ca);
//             if (!ans.containsKey(key)) ans.put(key, new ArrayList());
//             ans.get(key).add(s);
//         }
//         return new ArrayList(ans.values());
//     }
// }
