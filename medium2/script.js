function anagrams(bananas, apples) {
    var str = bananas.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
    var str2 = apples.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('')
     if (str === str2) {
         console.log(true)
     }else {
         console.log(false)
     }
 }
 
 var string1 = "So dark the con of man"
 var string2 = "Madonna of the Rocks"
 var s1 = "Things are good"
 var s2 = "Dogs eat ants"
 anagrams(string1,string2)
 anagrams(s1,s2)

 
 
 
 
 
 