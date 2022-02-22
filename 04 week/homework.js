var index;
// display in the console the numbers from 1 to 20
for(index=1; index<=20; index++){
    console.log(index)
}

// display in the console the odd numbers from 1 to 20 - var1
for(index=1; index<20; index=index + 2){
    console.log(index)
}

// display in the console the odd numbers from 1 to 20 - var2
for(index=1; index<=20; index++){
    if(index % 2==1){
        console.log(index)
    }
    
}

// compute the sum of the elements of an array and display it in the console
var array = [ 1, 2, 3, 4, 56, 232, 45, 12, 4, 6, 8, 8,8, 1, 1];
var suma = 0;
for(index=0; index<array.length; index++){
    suma = suma + array[index];
}
console.log(suma)

//compute the maximum of the elements of an array and display it in the console
var array = [ 1, 2, 3, 4, 56, 232, 45, 12, 4, 6, 8, 8,8, 1, 1];
var max=array[0];
for(index=0; index<array.length; index++){
    if(max<array[index]){
        max=array[index];
    }
}
console.log(max)

//compute how many times a certain element appears in an array - tips: use object, var element = 2
var array = [ 1, 2, 3, 4, 56, 232, 45, 12, 4, 6, 8, 8,8, 1, 1];
var element = {
    valoare: 8,
    nrAparitii: 0,
}
var index=0
while(index<array.length){
    if(array[index]==element.valoare){
        element.nrAparitii= element.nrAparitii + 1;
    }
    index++;
}
console.log(element.nrAparitii)

//Using nested control structures (doua for + if) for generate the following pattern
var rezultat = "";
for(var i=0; i<4;i++){
    for(var j=0; j<4; j++){
        if(i%2!=j%2){
            rezultat = rezultat + "1 ";
        }
        else{
            rezultat = rezultat + "0 ";
        }

    }
    rezultat = rezultat + "\n";
}
console.log(rezultat)