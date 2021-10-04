// let buffer = Buffer.alloc(5);
// let buffer = Buffer.from([1,2,3,4]);
// let buffer = Buffer.from('geovani');

// console.log(buffer.toString());


// --- abecedario con buffer

let abc = Buffer.alloc(26);

console.log(abc);

for (let i=0;i<26;i++){
    abc[i]=i+97
}

console.log(abc.toString());