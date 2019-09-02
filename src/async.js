
const myPromise = new Promise((resolve, reject)=>{
    if (false) {
        setTimeout(()=>{
            resolve('J\'ai reussis');
        }, 1000);
        
    } else {
        reject('J\'ai echoué');
    }

});

myPromise
.then(value => console.log(value))
.catch(rejectValue => console.log(rejectValue));
