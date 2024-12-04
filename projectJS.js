

let Breakfast = (localStorage['Breakfast'] || 'NA')
let Snack1 = (localStorage['Snack1'] || 'NA')
let Lunch = (localStorage['Lunch'] || 'NA')
let Snack2 = (localStorage['Snack2'] || 'NA')
let Dinner = (localStorage['Dinner'] || 'NA')
let Name = (localStorage['Name'] || 'NA')
let email = (localStorage['email'] || 'NA')
let goal = (localStorage['goal'] || 'NA')
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
let meals = ["Breakfast", "Snack1", "Lunch", "Snack2", "Dinner"]
let submitted = []

// Defined variables, all the meals can be stored locally on the browser so that everytime the user makes a change it is saved



window.addEventListener('load', function() {
    if ([Name, email, goal].includes('NA')) {
        document.getElementById('form').style.display = 'none';
    } else {
        document.getElementById('name').value = Name
        document.getElementById('email').value = email
        document.getElementById('goal').value = goal
        document.getElementById(`name`).disabled = true; 
        document.getElementById(`email`).disabled = true; 
        document.getElementById(`goal`).disabled = true; 
        document.getElementById(`personalSubmit`).disabled = true; 
        submitted.push("Personal")
        document.getElementById('form').style.display = 'block';
    }
    if ([Breakfast, Snack1, Lunch, Snack2, Dinner].includes('NA')) {
        document.getElementById('outputSpace').style.display = 'none';
        
    } else {
        document.getElementById('Breakfast').value = Breakfast
        document.getElementById('Snack1').value = Snack1
        document.getElementById('Lunch').value = Lunch
        document.getElementById('Snack2').value = Snack2
        document.getElementById('Dinner').value = Dinner
        document.getElementById('savePDFOrPrint').style.display = 'block';
        document.getElementById('form').style.display = 'block'
        for (y=0; y<meals.length; y++) {
            for (x=0; x<days.length; x++) {
                document.getElementById(`${days[x]}${meals[y]}`).innerHTML = localStorage[meals[y]]
                document.getElementById(`${meals[y]}`).disabled = true;
            }
            console.log(`${meals[y]}: `, localStorage[`${meals[y]}`])
        }
        document.getElementById(`submit`).disabled = true; 
    }
})

document.getElementById('personalForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let emailReg = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if (emailReg.test(document.getElementById('email').value)) {
       localStorage['Name'] = document.getElementById('name').value
        localStorage['email'] = document.getElementById('email').value
        localStorage['goal'] = document.getElementById('goal').value
        document.getElementById('form').style.display = 'block';
        document.getElementById('clearInfoDiv').style.display = 'block';
        document.getElementById(`name`).disabled = true; 
        document.getElementById(`email`).disabled = true; 
        document.getElementById(`goal`).disabled = true; 
        document.getElementById(`personalSubmit`).disabled = true;  
    } else {
        window.alert("Please enter a valid email.")
    }
    
    
})

document.getElementById("clearInfo").addEventListener('click', function() {
    document.getElementById('form').style.display = 'none';
    document.getElementById(`name`).disabled = false; 
    document.getElementById(`email`).disabled = false; 
    document.getElementById(`goal`).disabled = false; 
    document.getElementById(`personalSubmit`).disabled = false;
    document.getElementById(`name`).value = ''; 
    document.getElementById(`email`).value = ''; 
    document.getElementById(`goal`).value = ''; 
})

document.getElementById('clearPlan').addEventListener('click', function() {
    document.getElementById('form').style.display = 'none';
    document.getElementById('outputSpace').style.display = 'none';
    document.getElementById('savePDFOrPrint').style.display = 'none';
    for (x=0; x<days.length; x++) {
        for (y=0; y<meals.length; y++) {
            document.getElementById(`${days[x]}${meals[y]}`).innerHTML = ""
            document.getElementById(`${meals[y]}`).disabled = false;
        }
    }
    document.getElementById(`submit`).disabled = false;
    document.getElementById(`name`).disabled = false; 
    document.getElementById(`email`).disabled = false; 
    document.getElementById(`goal`).disabled = false; 
    document.getElementById(`personalSubmit`).disabled = false;
})

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('clearInfoDiv').style.display = 'none';
    document.getElementById('outputSpace').style.display = 'block';
    document.getElementById('savePDFOrPrint').style.display = 'block';
    for (y=0; y<meals.length; y++) {
        for (x=0; x<days.length; x++) {
            document.getElementById(`${days[x]}${meals[y]}`).innerHTML = document.getElementById(`${meals[y]}`).value
            document.getElementById(`${meals[y]}`).disabled = true;
            
        }
        localStorage[`${meals[y]}`] = document.getElementById(`${meals[y]}`).value
        console.log(`${meals[y]}: `, localStorage[`${meals[y]}`])
    }
    document.getElementById(`submit`).disabled = true; 

    
})

document.getElementById('savePDFOrPrint').addEventListener('click', function() {
    document.getElementById('form').style.display = 'none';
    document.getElementById('savePDFOrPrint').style.display = 'none';
    document.getElementById('clearPlan').style.display = 'none';
    document.getElementById('header').style.display = 'none';
    document.getElementById('personalSubmit').style.display = 'none';
    document.getElementById('outputSpace').style.marginLeft = '10%'; 
    document.getElementById('mainLogo').style.marginLeft = '33%'; 
    document.getElementById('mainLogo').style.marginTop = '10%'; 
    document.getElementById('outputSpace').style.marginTop = '-150px'; 
    print()
    document.getElementById('form').style.display = 'block';
    document.getElementById('savePDFOrPrint').style.display = 'block';
    document.getElementById('clearPlan').style.display = 'block';
    document.getElementById('outputSpace').style.marginLeft = '35%'; 
    document.getElementById('header').style.display = 'block';
    document.getElementById('personalSubmit').style.display = 'block';
    document.getElementById('mainLogo').style.marginLeft = '43.5%'; 
    document.getElementById('mainLogo').style.marginTop = '-75px'; 
    document.getElementById('outputSpace').style.marginTop = '0px'; 
    document.getElementById('personalSubmit').style.marginLeft = "45%";
})