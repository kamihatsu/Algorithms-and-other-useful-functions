function convert_binary_to_decimal(number){
  if (number > 1){
    let len = number.length
    let result = 0
    number = number.split("").reverse().join("")
    for (let i=len-1; i>=0; i--){
      result += number[i] * 2**i	  
    }
    return result
  }
}



function convert_decimal_to_binary(decimal_number) {
  let binary_number = "";
  while (Math.floor(decimal_number) > 1) {
    binary_number += decimal_number % 2;
    decimal_number = Math.floor(decimal_number / 2);
  }
  binary_number += decimal_number;
  return binary_number.split("").reverse().join("");
}

let hex_map = {
"0000" : "0",
"0001" : "1",
"0010" : "2",
"0011" : "3",
"0100" : "4",
"0101" : "5",
"0110" : "6",
"0111" : "7",
"1000" : "8",
"1001" : "9",
"1010" : "A",
"1100" : "B",
"1101" : "C",
"1110" : "D",
"1111" : "F"
}

let binary_number = "101001101001"
let len = binary_number.length
for(let i=-1; i>-len+1; i--)
{
  if(i%4 == 0){
	  if(i===(-4)){
		  console.log(binary_number.slice(i))
	  }
	  else{
	  console.log(binary_number.slice((i-1)*2), i-1)}
  }
}
