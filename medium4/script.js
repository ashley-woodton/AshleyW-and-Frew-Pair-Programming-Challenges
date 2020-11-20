var car = {
    make: "Acura",
    model: "TLX",
    year: 2019,
    milage: 12000,
    color: "Red",
    drivetToWork : function(){
       console.log(`Old mileage: ${this.milage} | new mileage: ${this.milage + 33}`)
       this.milage += 33;
    },
    driveAroundTheWorld : function(){
        console.log(`Old mileage: ${this.milage} | new mileage: ${this.milage + 24000}`)
        this.milage += 24000;
    },
    runErrands : function(){
        console.log(`Old mileage: ${this.milage} | new mileage: ${this.milage + 30}`)
        this.milage += 30;
    }
}

car.drivetToWork();
car.driveAroundTheWorld();
car.runErrands();