function Person() {
    this.age = 42;
    setTimeout(() => {
        console.log("this.age", this.age);
    }, 100);
}

let p = new Person();
//console.log(p.age);

function foo(x) {
    x = x !== undefined ? x : 42;
}

foo(undefined)

// check array undefined, null or length === 0
var items = [1,2,3];
if (typeof items != 'undefined' && items != null && items.length > 0) {
    console.log('items is not empty array.');
}else{
   console.log('items is empty array.');
}
