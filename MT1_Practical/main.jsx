

function find_largest() {
    let a = parseFloat(document.getElementById('n1').value);
    let b = parseFloat(document.getElementById('n2').value);
    let c = parseFloat(document.getElementById('n3').value);
    let d = parseFloat(document.getElementById('n4').value);
    let e = parseFloat(document.getElementById('n5').value);

    let numbers = [a, b, c, d, e];
    let max = 0;
    for (let i=0; i<5; i+=1) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    document.getElementById('result').innerText = "Largest is: " + max;
}