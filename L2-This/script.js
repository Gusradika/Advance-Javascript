// This

// Function Declarations
function halo(){
    console.log('halo');
}
halo();


// Object Literal

var obj = {};
obj.halo = function(){
    console.log("Object Literal");
};
obj.halo();

// Constructor

function Halo(){
    console.log('Constructor');
};
new Halo();

// 
// 
// THIS Section
// 
// 

console.log(this);  // Berisi dari windows. atau sering di sebut object Globals
console.log(window === this); // Hasilnya true karena window == this

// function declaration This didalam Function
function halo2(){
    console.log(this);
    console.log("halo");
}
window.halo2();

// object literal
var obj2 = {a : 10, nama : 'sandhika'};
obj2.halo = function(){
    console.log(this);
    console.log('halo');
};
obj2.halo(); 

// constructor
function Halo2(){
    console.log(this);
    console.log('halo');
}

var obj3 = new Halo2();