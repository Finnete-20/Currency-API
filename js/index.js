const inserted = document.getElementById('myInput')
inserted.addEventListener('input', function(event){
    let converted = event.target.value
    let dollarValue = document.getElementById('dollarId')
    dollarValue.innerHTML = converted / 102
    let poundsValue = document.getElementById('poundsId')
    poundsValue.innerHTML = converted / 145
    let euroValue = document.getElementById("eurosId")
    euroValue.innerHTML = converted / 180


})