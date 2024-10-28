var list = document.querySelectorAll('img'); /*documents refers to the html file*/

const first = Math.floor(Math.random() * 6)+1;
const imageFirst = 'assets/dice'+first+'.png';
list[0].setAttribute('src', imageFirst);
/* random generates between 0.1- 0.9
    0.1 -0.9 *6
    0.6- 5.4
    floor func removes decimla point
    0- 5 +1
    1-6 */

const second = Math.floor(Math.random() * 6)+1;
const imageSecond = 'assets/dice'+second+'.png';
list[1].setAttribute('src', imageSecond);

if (first > second){
    document.querySelector('h1').innerHTML = "The winner is User 1";
}
else if (second > first){
    document.querySelector('h1').innerHTML = "The winner is User 2";
}
else {
    document.querySelector('h1').innerHTML = "It is a tie/draw!!";
}
