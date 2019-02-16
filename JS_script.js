/*let calc = function(a, b) {
    return a + b
}

Второй вариант: 
let calc = (a, b) => a + b
*/
let money, time;

function start( ) {
    money = +prompt("Your budget per month?", '');
    time = prompt('Insert the date in YYYY-MM-DD format', '');
    
    while(isNaN(money) || money == "" || money == null)  {
        money = +prompt("Your budget per month?", '');
    }
}

start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Type the item of expenditure", ''),
        b = prompt("How much?");
    
        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
        } else {
            i -= 1;
        }
    }
}

chooseExpenses();

function detectDayBudget() {

    appData.moneyPerDay = (appData.budget / 30).toFixed(1);
    alert('Everyday budget is ' + appData.moneyPerDay);
        
}

detectDayBudget();


function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Poor');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 3000) {
        console.log('Middle');
    } else if (appData.moneyPerDay > 3000) {
        console.log('Rich');
    } else {
        console.log('Error');
    }
}

    detectLevel();

    function checkSavings() {
        if (appData.savings == true) {
            let save = +prompt("What is amount of savings? ");
            let percent = +prompt("What is the percent?");
            appData.monthIncome = save/100/12*percent;
            alert("Your depost income per month: " + appData.monthIncome);
        }

    }

    checkSavings();

    function chooseOptExpenses( ) {

        for (var cnt = 1; cnt <= 3; cnt++) {
            
            let pr = prompt("Item of unnecessary expenditure?");
            appData.optionalExpenses = cnt + ':' + pr;
        }
    }



  