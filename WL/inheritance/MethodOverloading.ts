function addData(data1: string, data2: string) : string;
function addData(data1: number, data2: number) : number; 
function addData(data1: number, data2 : string) : any;
function addData(data1, data2){
    return data1 + data2;
}

console.log(addData("Hello ","Sarah"));
console.log(addData(20, " Hello "));

