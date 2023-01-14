// Creating a module that handles the data
// var budgetController = (function() {
     
//      var x = 23;

//      var add = function(a) {
//          return x + a;
//      }

//      return {
//       publicTest: function(b) {
//         return(add(b));
//       }
//      }
// })(); // The created function is an example of IIFE. IIFE creates a new scope that is not visible from the outside

// // Note: Because of closure and inner function has always access to the variables and parameters of its outer
// // function even after the outside function has returned

// var uiController = (function () {
  
//   // Some code
  
// })();

// var controller = (function (budgetCtrl, UICtrl) { //Modules can also receive argument because they are function expression
//   var z = budgetCtrl.publicTest(7);
  
//   return {
//     anotherPublic: function () {
//       console.log(z)
//     }
//   }
// })(budgetController, uiController);

// Separation of concerns means that each part of the app should only be interested in doing one thing independently
// For instance the Data Module can be seen to be separate from the User interface Module


// BUDGET CONTROLLER 
var budgetController = (function () {
  
    // Some code
  //  Creating function constructors which can be  used to instantiate lost of object  instances 
  // Note function constructors are created with capital letters to distinguish it from other functions 
  
  var Expense = function (id, description, value) { //Creating an Income and Expense function
    this.id = id;
    this.description = description;
    this.value = value;
    this.percentage = -1;
  };
  
  Expense.prototype.calcPercentage = function (totalIncome) {
    if (totalIncome > 0) {
       this.percentage = Math.round((this.value / totalIncome) * 100);
    } else {
      this.percentage = -1;
    }
   
  };

  Expense.prototype.getPercentage = function () {
    return this.percentage;
  };

  var Income = function (id, description, value) { //Creating an Income and Expense function
    this.id = id;
    this.description = description;
    this.value = value;
  };


  // var allExpenses = [];
  // var allIncomes = [];
  // var totalExpenses = 0;

  var calculateTotal = function (type) {
    var sum = 0; 
    data.allItems[type].forEach(function (cur) {
      sum += cur.value;
    });
    data.totals[type] = sum;
  };

  var data = { //Creating an Income and Expense function
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    },
    budget: 0,
    percentage: -1
  }; 

  return { // Adding new Item to the budget controller
    addItem: function (type, des, val) {
      var newItem, ID;
      
      // Create new ID
      if (data.allItems[type].length > 0) {
          ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }
      
      
      // Create new item based on 'inc' or 'exp' type
      if (type === 'exp') {
          newItem = new Expense(ID, des, val);
      } else if (type === 'inc') {
        newItem = new Income(ID, des, val);
      }
      
      // Push it into our data structure
      data.allItems[type].push(newItem);
  
      // Return the new element
      return newItem;
    },

    deleteItem: function (type, id) {
      var ids, index;
      // loop over all element in the income and expense data

      var ids = data.allItems[type].map(function (current) {
        return current.id;
      }); // map receives a callback function that has access to the current element the current index and the entire array. The difference between map and forEach is that returns a brand new array
      
      index = ids.indexOf(id);

      if (index !== -1) {
        data.allItems[type].splice(index, 1);
      }// splice is used to remove or delete element while split is used to make a copy of an element
    },

    calculateBudget: function () {
         
        // calculate total income and expenses
        calculateTotal('exp');
        calculateTotal('inc');
      
        //  calculate the budget: income - expenses
        data.budget = data.totals.inc - data.totals.exp;
       
        // calculate the percentage of income that we spent
      if (data.totals.inc > 0) {
          data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
      } else {
        data.percentage = -1;
      } 
       
    },

    calculatePercentages: function () {
      
      data.allItems.exp.forEach(function (cur) {
        return cur.calcPercentage(data.totals.inc);
      });

    },

    getPercentages: function () {
      var allPerc = data.allItems.exp.map(function (cur) {
        return cur.getPercentage();
      });
      return allPerc;
    },
    
    getBudget: function () {
      return {
        budget: data.budget,
        totalInc: data.totals.inc,
        totalExp: data.totals.exp,
        percentage: data.percentage     
      };
    },
    testing: function () {
      console.log(data);
    }
  };

})();

 
// UI CONTROLLER 
var uiController = (function () {
  
    // Some code  
  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
    incomeContainer: '.income__list',
    expensesContainer: '.expenses__list',
    budgetLabel: '.budget__value',
    incomeLabel: '.budget__income--value',
    expensesLabel: '.budget__expenses--value',
    percentageLabel: '.budget__expenses--percentage',
    container: '.container',
    expensesPercLabel: '.item__percentage',
    dateLabel: '.budget__title--month'
  };
  // return {
  //   getInput: function () {
  //     return {
  //       type: document.querySelector('.add__type').value, // Will be either income or expense
  //       description: document.querySelector('.add__description').value,
  //       value: document.querySelector('.add__value').value,
  //     };
  //   }
  // };

  var formatNumber = function (num, type) {
    var numSplit, int, dec, type;
    /***
     *  + or - before number exactly 2 decimal points
     * with comma separating the thousands
     * 30000 should be + 30,000.00
    */
      
    num = Math.abs(num);
    num = num.toFixed(2)

    numSplit = num.split('.');

    int = numSplit[0];
    if (int.length > 3) {
      int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
    }

    dec = numSplit[1];

    // type === 'exp' ? sign = '-' : sign = '+';

    // return type + ' ' + int + dec;

    return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;

  };
  
      var nodeListForEach = function (list, callback) {
        for (var i = 0; i < list.length; i++) {
          callback(list[i], i);
        }
      };

  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // Will be either income or expense
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
      };
    },
    
    addListItem: function (obj, type) { // Adding a new item to the user interface
      var html, newHtml, element; 
      // Create HTML string with placeholder text
      
      if (type === 'inc') {
        element = DOMstrings.incomeContainer;
         html = '<div class="item clearfix" id="inc-%id%"><div cla ss="item__description">%description%</div> \
         <div class="right clearfix" ><div class="item__value">%value%</div><div class="item__delete"> \
         <button button class="item__delete--btn" > <i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else if (type === 'exp') {
        element = DOMstrings.expensesContainer;
        html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div> \
      <div div class="right clearfix" ><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn" \
      ><i class="ion-ios-close-outline"></i></button></div></div></div>';

      }

      // Replace the placeholder text with some actual data
      newHtml = html.replace('%id%', obj.id);
      newHtml = newHtml.replace('%description%', obj.description);
      newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));

      // Insert the HTML into the DOM
      document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
    },

    deleteListItem: function (selectorID) {
      
      var el = document.getElementById(selectorID);
      el.parentNode.removeChild(el); 
    },

    clearFields: function () {
      var fields, fieldsArr;

      fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);

      fieldsArr = Array.prototype.slice.call(fields);

      fieldsArr.forEach(function (current, index, array) {
        current.value = "";
      });

      fieldsArr[0].focus();
    },

    displayBudget: function (obj) {
      var type;
      obj.budget > 0 ? type = 'inc' : type = 'exp';

      document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
      document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
      document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');

      if (obj.percentage > 0) {
        document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
      } else {
        document.querySelector(DOMstrings.percentageLabel).textContent = '---';
      }
    },
    
    displayPercentages: function (percentages) {
      
      var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);

      nodeListForEach(fields, function (current, index) {
        if (percentages[index] > 0) {
          current.textContent = percentages[index] + '%';
        } else {
          current.textContent = '---';
        } 
        
      });

 
    },

    displayMonth: function () {
      var now, months, month, year;

      now = new Date(); // This returns the date of today
      // var valentine = new Date(2023, 1, 14); // This returns the date specified

      months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      month = now.getMonth();

      year = now.getFullYear();
      document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' ' + year;

    },

    changedType: function () {
      
      var fields = document.querySelectorAll(
        DOMstrings.inputType + ',' +
        DOMstrings.inputDescription + ',' +
        DOMstrings.inputValue);
      
      nodeListForEach(fields, function (cur) {
        cur.classList.toggle('red-focus');
      });
      
      document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
    },

    getDOMstrings: function () {
      return DOMstrings;
    }
  };
   
})();

// Always remember is not just to make things work but equally to make life easier 


// GLOBAL APP CONTROLLER 
var controller = (function (budgetCtrl, UICtrl) {
  
  var setupEventListeners = function () {
    var DOM = UICtrl.getDOMstrings();
      // }); // Creating an event listener
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (event) {
      
    // console.log(event);

      if (event.keyCode === 13 || event.which === 13) {
      // console.log('ENTER was pressed.'); 
         ctrlAddItem();
      }

    });
    document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

    document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);

  };
  
  var updatePercentages = function () {
    // 1. Calculate percentages
    budgetCtrl.calculatePercentages();
    // 2. Read percentages from the budget controller
    var percentages = budgetCtrl.getPercentages();
    // 3. Update the UI with the  new percentages
    console.log(percentages);
    UICtrl.displayPercentages(percentages);
  };

  var updateBudget = function () {
   /* 1. Calculate the budget
    */budgetCtrl.calculateBudget();

   /* 2. Return the budget
    */ var budget = budgetCtrl.getBudget();
    /* 3. Display the budget on the UI
    */
    // console.log(budget);
    UICtrl.displayBudget(budget);
  };
  
 
  var ctrlAddItem = function () {
    var input, newItem;
    /* Things to be done as soon as someone clicks the button
     * 1. Get the filled input data */
    input = UICtrl.getInput();
    // console.log(input);

    if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
         /*
         * 2. Add the item to the budget controller
        */
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        /* 3. Add the item to the UI
       */UICtrl.addListItem(newItem, input.type);
  
        // 4. Clear the fields
        UICtrl.clearFields();

        // 5. Calculate and update budget
      updateBudget();

      // 6. Calculate and update percentages
      updatePercentages();
      
    }
    // console.log('It works.');
  };
   
  var ctrlDeleteItem = function (event) {
    var itemID, splitID, type, ID;

    itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
    
    if (itemID) {

        //inc-1 
      splitID = itemID.split('-'); 
      type = splitID[0];
      ID = parseInt(splitID[1]);

      // 1. delete the item from the data structure
      budgetCtrl.deleteItem(type, ID);

      // 2. Delete the item from the UI
      UICtrl.deleteListItem(itemID);
      // 3. Update and show the new budget 
      updateBudget();

      // 4. Calculate and update percentages
      updatePercentages();
    }
  };

  // document.querySelector('.add__btn').addEventListener('click', function () {
  //   // console.log('Button was clicked!'); // Test
   
  return {
    init: function () {
      console.log('Application has started.');
      UICtrl.displayMonth();
      UICtrl.displayBudget({
        budget: 0,  
        totalInc: 0,
        totalExp: 0,
        percentage: -1
      });
      setupEventListeners();
    }
  };

})(budgetController, uiController);

controller.init();