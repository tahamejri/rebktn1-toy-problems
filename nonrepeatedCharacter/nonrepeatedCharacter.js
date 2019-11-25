/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */
//the idea is to look for the unrepeated characters and push em in an array,
// the first one will be at the first index so we return it
var firstNonRepeatedCharacter = function(string) {
  var arrayOfNonRepeated = [] ;
  var repeatedChars = [] ;
  for(var i=0 ; i<string.length ; i++){
  	for(var j = i+1 ; j<string.length ; j++){
  		if(string[i] === string[j]){
  			repeatedChars.push(string[i])
  		}

  	}
  	if(repeatedChars.indexOf(string[i]) === -1){
  		arrayOfNonRepeated.push(string[i])
  	}

  }
  return arrayOfNonRepeated[0]
};
