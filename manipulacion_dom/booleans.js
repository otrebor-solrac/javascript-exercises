function print(variable) {
  console.log(variable);
}

//Flase values
print(Boolean(0));
print(Boolean(null));
print(Boolean(NaN));
print(Boolean(undefined));
print(Boolean(""));
//True values
print(Boolean(1));
print(Boolean([]));
print(Boolean({}));
print(Boolean(function(){}));
