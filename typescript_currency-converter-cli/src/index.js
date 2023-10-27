"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var axios_1 = require("axios");
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
var answers = await inquirer_1.default.prompt([
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
]);
var url = "https://api.api-ninjas.com/v1/exchangerate?pair=";
try {
    var response = await axios_1.default.get("".concat(url).concat(answers.from, "_").concat(answers.to), {
        'headers': {
            'X-Api-Key': process.env.API_KEY
        }
    });
    answers.baseCurrencyAmount = response.data.exchange_rate * answers.baseCurrencyAmount;
    console.log("".concat(answers.from, " to ").concat(answers.to, " Conversion for your amount is: ").concat(Math.floor(answers.baseCurrencyAmount), " ").concat(answers.to));
}
catch (error) {
    console.error(error);
}
