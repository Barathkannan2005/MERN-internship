for (let i of objects.entires(b)){
    console.log(i,j)
}


//destruction operator
var array = [10,20,30]
var [a,b,c,d] = array
console.log(a,b,c,d);


//hoisting
console.log(a);
const a = 10;
console.log(b);
const b = 10;
console.log(c);
const c = 10;


//callback
function submitform(submit,isvalid){
    isvalid();

}

 function validation(){
    console.log("Form   Validation Successfull")
 }
 submitform("Form Submitted Successfull",validations)


 function database(){
    dbName = "SECE"
    return dbName,("Data Stored Successfully")

 }


 function formValidation(){
    email = "sece@sece.ac.in"
    password = "12345678"
    if (email=="sece@secwe.ac.in"
 } 
 
