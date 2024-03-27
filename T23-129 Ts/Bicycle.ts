class Bicycle{
    protected gear:number;
    protected speed:number;
    constructor(gear:number,speed:number){
        this.gear=gear;
        this.speed=speed;

    }
    applyBrake=():void=>{
        this.speed-=5;
        console.log(`By Applying brakes the speed will reduce by ${this.speed}`);


    }
    speedUp=():void=>{
        this.speed+=5;
        console.log(`By appling accerlators the speed will increase by ${this.speed}`);
    }
    toString=():string=>{
        return `Gear :${this.gear},Speed:${this.speed}`;

    }

}
class MountainBike extends Bicycle{
    constructor(gear:number,speed:number){
        super(gear,speed);
    }

}
const mountainBike=new MountainBike(3,80);
console.log("Initial state:"+mountainBike.toString());
mountainBike.speedUp();
mountainBike.applyBrake();
console.log("Updated state is"+mountainBike.toString());

