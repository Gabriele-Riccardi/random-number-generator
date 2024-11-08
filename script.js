function generateRandom(){
        min = parseInt(document.getElementById("min").value)
        max = parseInt(document.getElementById("max").value)
        
        if (isNaN(min) || isNaN(max) || min >= max) {
            document.getElementById('output').textContent = "Please enter valid min and max numbers.";
        } else {
            const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
            document.getElementById('output').textContent = "Random Number: " + randomNum;
        }

        
}