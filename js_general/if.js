function print(variable) {
  console.log(variable);
}

if (true) {
  print("Es verdad");
} else {
  print("Falso");
}

if (true) {
  print("Es verdad");
} else if (false) {
  print("No se");
} else {
  print("No se");
}

var numero = 2;

print(numero === 1 ? "es 1" : "No es 1")
