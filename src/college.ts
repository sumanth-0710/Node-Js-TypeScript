interface College{
    name:string;
    display():void;
}

class CollegeImp implements College {
    name:string
    constructor(cName:string){
        this.name=cName
    }
    display(): void {
        console.log("sum");
        ;
    }
}