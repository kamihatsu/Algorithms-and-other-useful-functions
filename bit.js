unction convert_decimal_to_binary(decimal_number) {
  let binary_number = "";
  while (Math.floor(decimal_number) > 1) {
    binary_number += decimal_number % 2;
    decimal_number = Math.floor(decimal_number / 2);                                                  }
  binary_number += decimal_number;                  return binary_number.split("").reverse().join("");                                                }                                                                                                                                                                