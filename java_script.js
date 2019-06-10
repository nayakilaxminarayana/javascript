/*let p = new Promise((resolve,reject) =>{
    let a=1+1
    if (a==2){
        resolve("u r in")
    }
    else {
        reject("poor in math")
    }
})
p.then((message ) => {
    console.log("so"+ message)
})
.catch((message) => {
    console.log("so" + message)
})*/

/*ar momsPromise = new Promise(function(resolve, reject) {
    momsSavings = 20000;
    priceOfPhone = 10000;
    if (momsSavings > priceOfPhone) {
      resolve({
        brand: "iphone",
        model: "6s"
      });
    } else {
      reject("We donot have enough savings. Let us save some more money.");
    }
  });
  momsPromise.then(function(value) {
    console.log("Hurray I got this phone as a gift ", JSON.stringify(value));
  });
  momsPromise.catch(function(reason) {
    console.log("Mom coudn't buy me the phone because ", reason);
  });
 /* momsPromise.finally(function() {
    console.log(
      "Irrespecitve of whether my mom can buy me a phone or not, I still love her"
    );
  });*/
  


var promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('foo');
    }, 300);
  });
  
  promise1.then(function(value) {
    console.log(value);
  
  });
  
  console.log(promise1);
  ==================