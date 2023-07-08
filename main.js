const foods = {
    bad: ["pizza", "burgers", "ice cream", "chocolate", "french fries"],
    good: ["broccoli", "spinach", "brussel sprouts", "tofu", "peas"],
    neutral: ["bread", "rice", "pasta", "chicken", "eggs"]
}

let personalFood = [];

const generateRandomNumber = num => {
    return Math.floor(Math.random() * num);
}

for (let prop in foods) {
    let optionIdx = generateRandomNumber(foods[prop].length);

    switch (prop) {
        case "bad":
            personalFood.push(
                `You should not eat: "${foods[prop][optionIdx]}".`
            );
            break;
        case "good":
            personalFood.push(
                `You should eat: "${foods[prop][optionIdx]}".`
            );
            break;
        case "neutral":
            personalFood.push(
                `You can eat: "${foods[prop][optionIdx]}".`
            );
            break;
        default:
            personalFood.push("There is not enough info.");
    }
}

console.log(personalFood.join("\n"));