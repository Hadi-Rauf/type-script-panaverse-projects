import inquirer from "inquirer";
import axios from 'axios';
import { config } from "dotenv";
config()

interface ansType {
    to: string;
    from: string;
    baseCurrencyAmount: number;
}

let answers: ansType = await inquirer.prompt([
    {
        type: 'input',
        name: 'to',
        message: 'Base Currency:',
    },
    {
        type: 'input',
        name: 'from',
        message: 'Target Currency:',
    },
    {
        type: 'input',
        name: 'baseCurrencyAmount',
        message: 'Amount:',
    }
])

let url: string = "https://api.api-ninjas.com/v1/exchangerate?pair="

try {
    const response = await axios.get(`${url}${answers.from}_${answers.to}`, {
        'headers': {
            'X-Api-Key': process.env.API_KEY
        }
    })

    answers.baseCurrencyAmount = response.data.exchange_rate * answers.baseCurrencyAmount

    console.log(`${answers.from} to ${answers.to} Conversion for your amount is: ${Math.floor(answers.baseCurrencyAmount)} ${answers.to}`)
} catch (error) {
    console.error(error)
}