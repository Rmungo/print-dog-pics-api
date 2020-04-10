function getValue(){
    $('.enterNum').on('click', function(event){
        event.preventDefault();
        $('.showPics').empty();
            numOfPics = $('.typeNum').val();
        if (numOfPics > 50 || numOfPics < 1){
            alert('Choose a number between 1 and 50');
        }
        else {
            getPics();
        }
    })
}

function getPics(){
    for (i = 1; i <= numOfPics; i++){
        fetchPics();
    }
}

function fetchPics(){
    fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json()).then(responseJson=> displayPics(responseJson));
}

function displayPics(x){
    $(`.showPics`).append(`<img src="${x.message}">`)
}


function ready(){
    console.log('we reaaaady');
    getValue();
}


$(ready());
