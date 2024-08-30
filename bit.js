function convert_binary_to_decimal(number){         if (number > 1){
    let len = number.length
    let result = 0
    number = number.split("").reverse().join("")
    for (let i=len-1; i>=0; i--){                       result += number[i] * 2**i                      }
    return result
  }                                               }



function convert_decimal_to_binary(decimal_number) {
  let binary_number = "";
  while (Math.floor(decimal_number) > 1) {
    binary_number += decimal_number % 2;
    decimal_number = Math.floor(decimal_number / 2);
  }
  binary_number += decimal_number;
  return binary_number.split("").reverse().join("");
}