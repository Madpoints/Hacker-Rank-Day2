// Given a mealCost, a taxPercent, and a tipPercent calculate the totalBill for a meal (rounded to nearest whole number)

function bill(mealCost, tipPercent, taxPercent) {
    var totalTip = (mealCost * (tipPercent / 100));
    var totalTax = (mealCost * (taxPercent / 100));   
    var totalBill = totalTip + totalTax + mealCost;
    console.log('The total meal cost is ' + Math.round(totalBill) + ' dollars.');
}

bill(12, 20, 8);
// should return 'The total meal cost is 15 dollars.'
