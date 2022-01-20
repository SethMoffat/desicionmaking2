// let backpack = [];
// backpack.push("sword");
// backpack.push("shield");
// backpack.push("food");
// console.log(backpack);
// backpack.splice(0, 1);
// console.log(backpack);
// backpack.pop();
// console.log(backpack);
// let itemcount = backpack.length;
// console.log(itemcount);

// let Bingus = ["money","phone","keys"]
// // What is the final value of guessMe?

 let guessMe = 54

while (guessMe < 100) {
    if (guessMe % 4 == 0 || guessMe % 5 == 0) {
        guessMe += 25
    } else if (guessMe % 3 == 0) {
        guessMe -= 27
    } else {
        guessMe += 3
    }
    guessMe += 22
    console.log("final value is", guessMe)
}
