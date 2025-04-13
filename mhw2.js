document.addEventListener('DOMContentLoaded', function () {
    const sezione = document.getElementById('sezione');
    const menu = document.getElementById('menuTendina');

    sezione.addEventListener('click', function (e) {
        e.stopPropagation(); 
        menu.classList.toggle('hidden');
    });


    document.addEventListener('click', function () {
        menu.classList.add('hidden');
    });


});
document.addEventListener('DOMContentLoaded', function () {
    const img = document.getElementById('BegliUomini');

    img.addEventListener('mouseenter', function () {
        img.src = "SecondaImmagine.jpg"; 
    });

    img.addEventListener('mouseleave', function () {
        img.src = "Begli Uomini.jpg"; 
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formRicerca');
    const input = document.getElementById('Ricerca');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const query = input.value.trim().toLowerCase();

        if (query === "") {
            alert("Inserisci qualcosa da cercare!");
        } else {
           
            alert(`Hai cercato: "${query}"`);

            
        }
    });
});


