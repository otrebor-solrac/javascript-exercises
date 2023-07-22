function print(variable) {
  console.log(variable);
}

var a = ["f", "g", "t"];

print(a);

print(a.length);

print(a[0]);

print(a[2]);

a.push("y")

var b = a;

print(b);
a.pop()
var c = a 

print(c);

a.unshift("a")

var d = a
print(d);

a.shift("ff")
var e = a
print(e);

print(a.indexOf('f'))

var estduiantes = ["Maria","Rosa","FG","DER"]

function saludarEstdudiantes(est){
    print(`Hola ${est}`)
}

for(var i=0;i<estduiantes.length;i++){

    saludarEstdudiantes(estduiantes[i])
}

for(var est of estduiantes){
    saludarEstdudiantes(est)
}

while(estduiantes.length>0){
    
    var estudiante = estduiantes.shift()
    saludarEstdudiantes(estudiante)

}
