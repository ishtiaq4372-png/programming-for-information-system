// Sum of multiples of a or b less than n
        function sumMultiples() {
            let a = parseInt(document.getElementById('inputA').value);
            let b = parseInt(document.getElementById('inputB').value);
            let n = parseInt(document.getElementById('inputN').value);

            if ([a, b, n].some(v => isNaN(v) || v <= 0)) {
                alert('Please enter positive numbers for a, b, and n.');
                return;
            }

            let sum = 0;
            for (let i = 1; i < n; i++) {
                if (i % a === 0 || i % b === 0) {
                    sum += i;
                }
            }

            document.getElementById('sumResult').textContent = 
                `Sum of multiples of ${a} or ${b} less than ${n} is: ${sum}`;
        }