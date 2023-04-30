// FOR OF & FOR IN
// NEW LOOP
// Creates a loop iterating over ITERABLE OBJECTS

// ITERABLE OBJECTS is such as :
// String
// Array
// Arguments / Nodelist
// TypedArray
// Map
// Set
// UserDefined Iterables

// FOR .. OF

const mhs = ["Aditya", "Kesuma", "Ngurah"];

for(var i = 0; i < mhs.length; i++){
    console.log(mhs[i]);
}

mhs.forEach((x) => console.log(x));

for(const m of mhs){
    console.log(m);
}