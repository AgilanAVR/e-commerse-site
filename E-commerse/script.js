let cards=Array.from(document.getElementsByClassName('card'));
// console.log(cards[0]);


// for each lop for cards
cards.forEach(e => {
    console.log(e);
    let plus=e.getElementsByClassName('increment');
    let minus=e.getElementsByClassName('decrement');
    let proCount=e.getElementsByClassName('total-count');
    console.log(proCount);


});