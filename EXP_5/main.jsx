let employees = [];

function addemp() {
    
    let name = document.getElementById("emp_name").value;
    let emp_id = document.getElementById("emp_id").value;
    let sal = document.getElementById("salary").value;
    let dep = document.getElementById("department").value;

    if (name == "" || emp_id == "" || sal == "" || dep == "") {
        alert("Fill all fields");
        return;
    }

    let employee = {name : name , emp_id : emp_id , salary : sal , dep : dep};

    employees.push(employee);

    alert("Employee added succesfully");

    document.getElementById("emp_name").value = "";
    document.getElementById("emp_id").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("department").value = "";
}


function dispemp() {

    let output = <h3>All Emplyoees</h3>;

    employee.forEach(emp => {
        output +=
            Name : ${emp.name} |
            ID : ${emp.emp_id} |
            Salary : &#8377;${emp.sal} |
            Department : ${emp.dep}
    });
}