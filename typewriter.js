const sentence = "hello there from lighthouse labs";


let newlineTimer = 0 

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i])
    
  }, newlineTimer);
  newlineTimer += 50
}
setTimeout(() => {
  console.log('\r');
}, newlineTimer += 50)


// console.log(newlineTimer)
// console.log(sentence.length)
