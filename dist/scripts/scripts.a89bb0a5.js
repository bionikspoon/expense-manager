"use strict";angular.module("ExpenseManagerApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).run(["$log","$window","$rootScope","ExpenseService","MockData",function(a,b,c,d,e){a.info('Pro Tip: Type "migrate" to populate mock data and "reset" to reset'),Object.defineProperty(b,"migrate",{get:function(){return a.info("Populating your app with mock data."),e.forEach(function(a){d.saveExpense(a)}),e.length+" records added."}}),Object.defineProperty(b,"reset",{get:function(){var b;return a.info("Resetting data."),b=d.reset(),c.$digest(),b+" records removed."}})}]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/home.html",controller:"HomeCtrl"}).when("/add-expense",{templateUrl:"views/add-expense.html",controller:"AddExpenseCtrl"}).when("/view-summary",{templateUrl:"views/view-summary.html",controller:"ViewSummaryCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("ExpenseManagerApp").controller("HomeCtrl",function(){}),angular.module("ExpenseManagerApp").controller("AddExpenseCtrl",["$scope","CategoryList","ExpenseService",function(a,b,c){a.categories=b,a.submit=function(){c.saveExpense(a.expense),a.expense={},a.AddExpenseForm.$setPristine()}}]),angular.module("ExpenseManagerApp").controller("ViewSummaryCtrl",["$scope","ExpenseService",function(a,b){a.expenses=b.expenses,b.getExpenses(),a.summaryData=b.expensesByCategory,b.getExpensesByCategory(),a.toggleActive=function(b){a.active===b?a.active=null:a.active=b},a.removeExpense=function(c){a.active=null,b.removeExpense(c)}}]),angular.module("ExpenseManagerApp").value("CategoryList",["Food","Fuel","Grocery","Entertainment"]),angular.module("ExpenseManagerApp").factory("ExpenseService",["$q","CategoryList",function(a,b){var c="expense-manager:",d={};return d.expenses=[],d.expensesByCategory=[],d.saveExpense=function(a){var b=Math.round((new Date).getTime()),e=c+b+Math.random();a.amount=Math.round(100*a.amount)/100,a=JSON.stringify(a),localStorage[e]=a,d.getExpenses()},d.getExpenses=function(){var b=[];return Object.keys(localStorage).forEach(function(a){if(a.substring(0,c.length)===c){var d=localStorage[a];d=JSON.parse(d),d.key=a,b.push(d)}}),a.when(b).then(function(a){angular.copy(a,d.expenses),d.getExpensesByCategory()})},d.getCategoryTotal=function(a){var b=0;return d.expenses.forEach(function(c){c.category===a&&(b+=parseFloat(c.amount))}),b},d.getExpensesByCategory=function(){var c=[];return d.expenses.length&&b.forEach(function(a){var b=d.getCategoryTotal(a);c.push({category:a,amount:b})}),a.when(c).then(function(a){angular.copy(a,d.expensesByCategory)})},d.removeExpense=function(a){localStorage.removeItem(a.key),d.getExpenses()},d.reset=function(){var a=0;return Object.keys(localStorage).forEach(function(b){b.substring(0,c.length)===c&&(localStorage.removeItem(b),a++)}),d.getExpenses(),a},d}]),angular.module("ExpenseManagerApp").directive("barChart",function(){return{scope:{data:"="},template:'<div id="chart"></div>',restrict:"E",link:function(a){var b=d3.select("#chart").append("svg").style("width","95%");a.drawGraph=function(c){b.selectAll("*").remove();var d=20,e=5,f=100,g=b.style("width"),h=a.data.length*(d+e),i=d3.scale.category10(),j=d3.scale.linear().domain([0,d3.max(c,function(a){return a.amount})]).range([0,g]);b.attr("height",h),b.selectAll("categoryBars").data(c).enter().append("rect").attr("height",d).attr("x",f).attr("y",function(a,b){return b*(d+e)}).attr("fill",function(a){return i(a.amount)}).attr("width",function(a){return j(a.amount)}),b.selectAll("categoryLabel").data(c).enter().append("text").attr("fill","#fff").attr("y",function(a,b){return b*(d+e)+15}).attr("x",f-5).attr("text-anchor","end").text(function(a){return a.category}),b.selectAll("values").data(c).enter().append("text").attr("fill","#fff").attr("y",function(a,b){return b*(d+e)+15}).attr("x",f+5).attr("text-anchor","start").text(function(a){return a.amount.toFixed(2)})},a.drawGraph(a.data),a.$watchCollection("data",function(b){a.drawGraph(b)}),window.onresize=function(){a.$apply(a.drawGraph(a.data))}}}});var range=function(a,b){return Math.random()*(b-a)+a},choice=function(a){var b=Math.floor(Math.random()*a.length);return a[b]},gasStations=["Shell","Exxon","Mobil","BP","7-11"],restaurants=["BurgerKing","Portillos","Cheesecake Factory","Subway","5 Guys","Red Lobster"],groceryStores=["Whole Foods","Trader Joes","Redners","Publix"];angular.module("ExpenseManagerApp").constant("MockData",[{category:"Food",amount:range(10,300),description:choice(restaurants)},{category:"Fuel",amount:range(5,50),description:choice(gasStations)},{category:"Grocery",amount:range(50,200),description:choice(groceryStores)},{category:"Entertainment",amount:range(10,100),description:"Drinks"},{category:"Food",amount:range(10,300),description:choice(restaurants)},{category:"Fuel",amount:range(5,50),description:choice(gasStations)},{category:"Grocery",amount:range(50,200),description:choice(groceryStores)},{category:"Entertainment",amount:range(10,100),description:"More Drinks"},{category:"Food",amount:range(10,300),description:choice(restaurants)},{category:"Fuel",amount:range(5,50),description:choice(gasStations)},{category:"Entertainment",amount:range(100,500),description:"Jamaica"},{category:"Food",amount:range(10,300),description:choice(restaurants)},{category:"Fuel",amount:range(5,50),description:choice(gasStations)},{category:"Grocery",amount:range(50,200),description:choice(groceryStores)},{category:"Entertainment",amount:range(10,100),description:"Pub"},{category:"Entertainment",amount:range(100,500),description:"PyCon 2015"},{category:"Food",amount:range(10,300),description:choice(restaurants)},{category:"Fuel",amount:range(5,50),description:choice(gasStations)},{category:"Food",amount:range(10,300),description:choice(restaurants)},{category:"Fuel",amount:range(5,50),description:choice(gasStations)},{category:"Grocery",amount:range(50,200),description:choice(groceryStores)},{category:"Food",amount:range(10,300),description:choice(restaurants)},{category:"Fuel",amount:range(5,50),description:choice(gasStations)},{category:"Entertainment",amount:range(10,100),description:"Avengers 2"},{category:"Entertainment",amount:range(100,500),description:"Max Rager Concert"}]),angular.module("ExpenseManagerApp").controller("NavigationCtrl",["$scope","$location","$q","$timeout",function(a,b,c,d){a.slidingDirection="slide-right";var e=function(a){var c=["/","/add-expense","/view-summary"],d=b.path(),e=c.length-1,f=c.indexOf(d),g=f+a;-1===g&&(g=e),g>e&&(g=0);var h=c[g]||"";b.url(h)};a.goLeft=function(){c.when(a.slidingDirection="slide-left").then(d(function(){e(-1)}))},a.goRight=function(){c.when(a.slidingDirection="slide-right").then(d(function(){e(1)}))}}]);