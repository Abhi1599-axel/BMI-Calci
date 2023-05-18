const from = document.querySelector('from');

from.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results =document.querySelector('#results');

    if((height === '') || (height < 0) || (isNaN(height))){
        // NaN !== NaN
        results.innerHTML = " Please provide a Valid height";
    }
    else if ((weight === '') || (height < 0) || (isNaN(height))){
        results.innerHTML = " Please provide a Valid weight";

    } else{
        //calculate BMI
        const bmi = (weight/ ((height*height)/10000)).toFixed(2);
        //display the results
        results.innerHTML= `<span>${bmi}</span>`
    }
});