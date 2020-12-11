function Person() {
    this.age = 42;
    setTimeout(() => {
        console.log("this.age", this.age);
    }, 100);
}

let p = new Person();
//console.log(p.age);