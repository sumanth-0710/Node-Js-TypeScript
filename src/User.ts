var User:{
    name:String,
    age:Number,
    Address:{
        houseName:String
    }
};
const user1=User={
    name:"Sum",
    age:23,
    Address:{
        houseName:"11-78"
    }
}
console.log(user1);

//Interface for more reable
interface Address {
  houseName: string;
}

interface User extends Address {
  name: string;
  age: number;
}

const user: User = {
    name: "Sum",
    age: 23,
    houseName: "11-7"
};
