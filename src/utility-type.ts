//1.Partial 2.Required 3.ReadOnly 4.Pick

interface CollegeType{
    name:string,
    location:string,
    students:number,
    branches?:Array<string>
}

//Partial - optial properties
const collegeData:Partial<CollegeType>={
    // name: "VIT",
    // location: "AP",
    // students: 500,
    // branches: ["CSE","ECE"]
}

//Required(Mandatory all fields)  if optional field present also we will get error 

function getCollegeData(data:Required<CollegeType>){
    return data;
}
getCollegeData({
    name:"sum",
    location:"AP",
    students:2,
    branches:[]
})

//Read-Only
const collegeData2:Readonly<CollegeType>={
    name: "VIT",
    location: "AP",
    students: 500,
    branches: ["CSE","ECE"]
}
//collegeData2.name="IIT" //we cannot modify

//Pick- pick neccessary variable in the object
const collegeData3:Pick<CollegeType,'name'|'location'>={
    name: "VIT",
    location: "AP",
    //students: 500,
    //branches: ["CSE","ECE"]
}

