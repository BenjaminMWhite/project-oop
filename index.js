const Employee =require ("./lib/Employee");
const Manager =require ("./lib/Manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/Engineer");
const inquirer = require("inquirer");
const fs = require('fs');
const { type } = require("os");
let team = 0
const engineer = []
const intern = []
let manager
async function baseQuestions(){
    
    const baseAnswers = await inquirer
 .prompt ([
{ 
type: "input",
name: 'Name',
message: " Enter Employees Name",
},
{ 
    type: "input",
    name: 'ID',
    message: " Enter Employee ID",
    },{ 
        type: "input",
        name: 'Email',
        message: "Enter Employeee Email",
        }]) 
        return baseAnswers}
async function baseQuestions2(){
    
            const baseAnswers2 = await inquirer
         .prompt ([
        { 
            type: "checkbox",
            name: 'AdditionalEmployees',
            message: "Are there any additional team members",
            choices:["Engineer",'Intern','Done']
            
        }


])
//console.log(baseAnswers2)
console.log(baseAnswers2.AdditionalEmployees[0])

       //  return baseAnswers2
    
       switch(baseAnswers2.AdditionalEmployees[0]){
case 'Engineer':
    engQs()
    break;
    case 'Intern':
    intQs();
    break;
    case 'Done':
    createHTML(manager,engineer,intern)
    break;
    }
         }
async function mangQuestions(){
    
    const mangAnswers = await inquirer
 .prompt ([
{ 
    type: "input",
    name: 'officeNumber',
    message: "What is the Managers Phone number?"}])
        return mangAnswers    
}
async function engQuestions(){
    
    const engAnswers = await inquirer
     .prompt ([
    { 
        type: "input",
        name: 'Github',
        message: "What is the Engineer's Github?"}])
        return engAnswers}
async function intQuestions(){
    const intAnswers = await inquirer
         .prompt ([
        { 
            type: "input",
            name: 'School',
            message: "What is the interns school?"}])
          return intAnswers  }

async function managerQs(){ const info = "Please enter manager information"
console.log(info)

const baseAnswers = await baseQuestions()
const mangAnswers= await mangQuestions()
manager = new Manager(baseAnswers.Name,baseAnswers.ID,baseAnswers.Email,mangAnswers.officeNumber)
 
await baseQuestions2()



}
async function engQs(){ const info = "Please enter the engineer's information"
console.log(info)
const baseAnswers = await baseQuestions()
const engAnswers= await engQuestions()
const newEngineer = new Engineer(baseAnswers.Name,baseAnswers.ID,baseAnswers.Email,engAnswers.Github)
engineer.push(newEngineer)
//console.log(newEngineer)
await baseQuestions2()
//console.log(baseAnswers)
//console.log(engAnswers)


}
async function intQs(){ const info = "Please enter the interns's information"
console.log(info)
const baseAnswers = await baseQuestions()
const intAnswers= await intQuestions()
const newIntern = new Intern(baseAnswers.Name,baseAnswers.ID,baseAnswers.Email,intAnswers.School)
intern.push(newIntern)
//console.log(newIntern)
await baseQuestions2()
//console.log(baseAnswers)
//console.log(intAnswers)
//

}
//console.log(employee.name)
//console.log(employee.id)
//console.log(employee.email)
//console.log(employee.getName())
//console.log(employee.getId())
//console.log(employee.getEmail())
//console.log(employee.getRole())
function createHTML(manager,engineer,intern){
    const HTML = '<!DOCTYPE html><html lang="en">    <head>        <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge">  <meta name="viewport" content="width=device-width, initial-scale=1.0">        <title>Document</title>    </head>    <body>'
    const managerdiv=`<div>/<div>`
    const role=document.createElement("p")
    role.innerHTML=manager.getRole()
    managerdiv.appendChild(role)

    const name=document.createElement("p")
    name.innerHTML=manager.getName()
    managerdiv.appendChild(name)
    
    const id=document.createElement("p")
    id.innerHTML=manager.getId()
    managerdiv.appendChild(id)
    
    const email=document.createElement("a")
    email.innerHTML=manager.getEmail()
    email.href=`mailto:${manager.email}`
    managerdiv.appendChild(email)
    
    const number=document.createElement("p")
    number.innerHTML=manager.officeNumber()
    managerdiv.appendChild(number)


}
managerQs()


