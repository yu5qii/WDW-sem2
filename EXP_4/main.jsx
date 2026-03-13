function calculateresult() 
{
    let n = document.getElementById("subjects").value;
    let total = 0;

    for (let i=0; i<n; i+=1) {
        let marks = parseFloat(prompt("Enter marks for subject" + (i+1)));
        total += marks;
    }

    let avg = total / n;

    let grade; let result;

    if (avg>90) {
        grade = "A";
    }

    else if (avg>80) {
        grade = "B";
    }

    else if (avg>70) {
        grade = "C";
    }

    else if (avg>60) {
        grade = "D";
    }

    else if (avg>50) {
        grade = "E";
    }

    else if (avg>40) {
        grade = "F";
    }


    if (avg>40) {
        result = "PASS";
    }

    else {
        result = "FAIL";
    }

    document.getElementById("result").innerHTML = 
    "Total marks: " + total + "<br>" 
    + "Average marks: " + avg + "<br>"
    + "Final Result: " + result + "<br>";
}