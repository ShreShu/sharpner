Global Scope

inside a method

inside a inner function

inside constructor

inside class





Global Scope

this.table='my table'



function clean(){

    console.log(`clean ${this.table}`);

}

clean()



inside a method

let myTable={

    table:'my Table',

    clean(){

        console.log(this.table)

    }

}



myTable.clean()



inside inner function



this.table='mytable'



let outerFun= function(){

    let innerFun = function(){

        console.log(this.table)

    }



    innerFun.call(this)

}

outerFun();



inside constructor



let constructorFun = function(name){

this.table=name

}

constructorFun.prototype.cleanTable=function(){

    console.log(this.table);

}

let table1= new constructorFun('my table')

table1.cleanTable()





inside class

        class CeateRoom {

            constructor(name) {

                this.name = name;

            }





            cleanTable() {

                console.log(this.name)

            }

        }





let room1= new CeateRoom('my room');

room1.cleanTable()





class Student{

static count=0;



    constructor(name , age , phoneNumber, boardMarks){

        Student.count++;

        this.name=name,

        this.age=age,

        this.phoneNumber=phoneNumber,

        this.boardMarks=boardMarks

    }



eligibility(){

    if(this.boardMarks>40){

        console.log(`${this.name} is eligible`);

    }

    else{

        console.log(`${this.name} is not eligible`); 

    }

}



static returnCount(){

    console.log(Student.count)

}

}







let student1= new Student('Shubham',20,'912300987',98)

student1.eligibility()



let student2= new Student('Ravi',20,'912300987',20)

student2.eligibility()



let student3= new Student('Vijay',20,'912300987',56)

student3.eligibility()



let student4= new Student('Rahul',20,'912300987',87)

student4.eligibility()



let student5= new Student('Amit',20,'912300987',12)

student5.eligibility()



Student.returnCount()







Fat arrow:==============

let fun1=a=>a;

console.log(fun1(6))



let square =(a)=>{return a*a}

console.log(square(5));



var a=10;

let sq=()=>{

    return a*a

}

console.log(sq())





let mul =(a,b)=>{return a*b}

console.log(mul(2,4));









var x = function(){

    this.val=1;



    setTimeout(()=>{//fat arrow does not have its own this, so its gonna use its parent this

        this.val++;//if we have used function keyword then 'this' will refer to the this keywork of that function ie scope of that function

        console.log();

    })

}





        class Student {

            static count = 0;

            constructor(name, age, phoneNumber, boardMarks) {

                Student.count++;

                this.name = name,

                    this.age = age,

                    this.phoneNumber = phoneNumber,

                    this.boardMarks = boardMarks

            }











            static returnCount() {

                console.log(Student.count)

            }

        }



       let eligible= (boardMarks)=> {

                if (boardMarks > 40) {

                    return true;

                }

                else {

                    return false;

                }

            }









let student1= new Student('Shubham',20,'912300987',98)

if(eligible(student1.boardMarks)){

    console.log(student1.name);

}







let student2= new Student('Ravi',20,'912300987',20)

if(eligible(student2.boardMarks)){

    console.log(student2.name);

}





let student3= new Student('Vijay',20,'912300987',56)

if(eligible(student3.boardMarks)){

    console.log(student3.name);

}







let student4= new Student('Rahul',20,'912300987',87)

if(eligible(student4.boardMarks)){

    console.log(student4.name);

}





let student5= new Student('Amit',20,'912300987',12)



if(eligible(student5.boardMarks)){

    console.log(student5.name);

}





