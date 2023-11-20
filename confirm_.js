// confirm
let runAgain = true

const canDrive = (age) => {
    return age>=18?true:false
}
while (runAgain){
    let age = prompt("Enter your Age");
    age = Number.parseInt(age);

    if (age<0){
        console.error("Please enter a valid number.");
        break
    }
    
    if (canDrive(age)){
        alert("You can drive")
    }
    else{
        alert("You cannot drive")
    }
    runAgain = confirm("Do you want to Enter Again?")
}
