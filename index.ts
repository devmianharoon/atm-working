import inquirer from "inquirer";

interface USER {
    userName: string,
    name: string
    pin: number
    balance: number
}
const user: USER[] = [{
    userName: 'mian',
    name: 'Mian Haroon',
    pin: 7861,
    balance: Math.floor(Math.random() * 900000)

},
{
    userName: 'hary',
    name: 'Mian Harry',
    pin: 1122,
    balance: Math.floor(Math.random() * 900000)

}
]

console.log(user);

async function atm(user: USER[]) {
   
    var preTranstion: string[] = [];
    const answer = await inquirer.prompt([{
        type: "input",
        name: 'userName',
        message: 'Please enter your valid username'
    }, {
        type: 'password',
        name: 'pin',
        message: 'Please enter your valid PIN',
        mask: '*',

    }])
    const { userName, pin, } = answer;

    const users = user.find((u) => u.userName === userName && u.pin === Number(pin));
    if (users) {
        console.log(`Welcome Back ${users.name}`);
        while (true) {
        const answer = await inquirer.prompt({
            type: "rawlist",
            name: 'operation',
            choices: ["Cheak Balence", "Withdraw", "Previous Transtion"],
            message: 'Please enter your valid PIN'
        })
        if (answer.operation === "Cheak Balence") {
            console.log(`Your Balance is ${users.balance}`);

        }
        else if (answer.operation === "Withdraw") {
            console.log("Withdraw");
            const question = await inquirer.prompt({
                name: 'withdraw',
                type: 'list',
                message: 'Select Amount',
                choices: ["500", "1000", "5000", "10000"],
            });


            if (question.withdraw === "500") {
                console.log('Sucessfuly Withdraw');
                users.balance-500
                console.log(`Your current balance is (${users.balance })`);
                preTranstion.push("500")


            } else if (question.withdraw == "1000") {
                console.log('Sucessfuly Withdraw');
                users.balance-5000
                console.log(`Your current balance is (${users.balance })`);
                preTranstion.push("1000")
            } else if (question.withdraw == "5000") {
                console.log('Sucessfuly Withdraw');
                users.balance-5000
                console.log(`Your current balance is (${users.balance })`);
                preTranstion.push("5000")
            } else if (question.withdraw == "10000") {
                console.log('Sucessfuly Withdraw');
                users.balance-5000
                console.log(`Your current balance is ${users.balance }`);
                preTranstion.push("10000")
            }

        }
        else if (answer.operation === "Previous Transtion") {
            console.log("Previous Transtion");
            console.log(preTranstion);

        }
        }
    } else {
        console.log("Invalid username or PIN.");
    }
}


atm(user)