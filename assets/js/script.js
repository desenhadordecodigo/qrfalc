$('.owl-carousel').owlCarousel({
    loop:true,
    dots: true,
    nav:false,
    items: 1
});

//Ativar o modo noturno
(function nightMode (){
	const el = document.querySelectorAll('.night-mode');
	const body = document.getElementsByTagName('BODY')[0];
	let dataNM = body.getAttribute('data-nm');
    let getLocalStorageNM = localStorage.getItem('data-nm');
    let date = new Date();
    let fullHour = date.getHours() + ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes() + ':' + date.getSeconds();

	// Verifica se já tem algum valor armazenado em localStorage
	getLocalStorageNM === 'true' ? body.setAttribute('data-nm', 'true') : body.setAttribute('data-nm', 'false');

    // Atribui a ação ao botão
    for(let i = 0; i < el.length; i++){
        el[i].addEventListener('dblclick', () => {
            dataNM = body.getAttribute('data-nm');

            dataNM === 'false' ? (
                body.setAttribute('data-nm', 'true'),
                localStorage.setItem('data-nm', 'true')
            ) : (
                body.setAttribute('data-nm', 'false'),
                localStorage.setItem('data-nm', 'false')
            );
        });
    }
    
    if (fullHour > '21:00:00' && fullHour < '05:00:00'){
        body.setAttribute('data-nm', 'true');
        localStorage.setItem('data-nm', 'true')
    } else {
        if(localStorage.getItem('data-nm') === 'true'){
            body.setAttribute('data-nm', 'true');
        }else{
            body.setAttribute('data-nm', 'false');
        }
    };
}());