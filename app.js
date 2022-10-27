
// ---------------My variables 

const text = document.getElementById('text_input');
const amount = document.getElementById('income_input');
const btn = document.getElementById('btn');
const list = document.getElementById('history-list');
let income=[]; /* array with all list items income*/
let expense=[]; /* array with all list items expense*/
let total_expense=0;
let total_income=0;


// --------------Event listnners

btn.addEventListener('click',add);
list.addEventListener('click',deleteBtn);

//-------------- My Functions

// add function: add new item
function add(e){
    let money = amount.value;
    let item = text.value;
    let balance;
    e.preventDefault();
    if(money > 0){
        // create li
        let li = document.createElement('li');
        li.className='list-item-income';
        li.innerHTML=`
         <span>${item}</span>
        <span> +${money}</span>
        <button class="delete-btn"> X </button>`;
        document.getElementById('history-list').appendChild(li);
        // adding to income array
        income.push(+money);
        total_income=income.reduce((a,b)=> a+b);
        document.getElementById('income').innerHTML=`$ ${total_income}.00`
    }
    else if(money < 0){
        // create li
        let li = document.createElement('li');
        li.className='list-item-expense';
        li.innerHTML=`
        <span>${item}</span>
        <span> ${money} </span>
        <button class="delete-btn"> X </button>`;
        document.getElementById('history-list').appendChild(li)
        // adding to expense array
        expense.push(-(-money));
        total_expense=expense.reduce((a,b)=> a+b);
        document.getElementById('expense').innerHTML=`$ ${total_expense}.00`
        // show the balance
    }
    // pop the error message
    else{
        console.log('error')
    }
    // show the balance
    balance = total_income + (total_expense);
    document.getElementById('balance').innerHTML=`$ ${balance}.00`
}

// function delete 
function deleteBtn(e){
    let target = e.target;
    if(target.className ==='delete-btn'){
        target.parentElement.remove()
        console.log(income)
    }
}