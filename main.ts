#! /usr/bin/env node

import inquirer from "inquirer";

let todos = [];
let condition = true;

while(condition);
    {
        let addTask = await inquirer.prompt(
            [
                {
                    name : "todo",
                    type : "input",
                    message : "what you want to add in your todos?"
                },
                
                {
                    
                    name : "addmore",
                    type : "confirm",
                    message : "Do you want to add more?",
                    default : "false"
                },

                {
                    name : "sure",
                    type : "input",
                    message : "Are you sure you want to add more?"
                }
            ]
        );
        todos.push(addTask.todo);
        condition = addTask.addmore;
        console.log(todos);
        // console.log(addTask.addmore);
};