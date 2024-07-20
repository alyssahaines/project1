function func1() {
let albums = ["Debut", "Fearless", "Speak Now", "Red","1989","Reputation","Lover","Folklore","Evermore","Midnights","TTPD"];
let randomNumber = Math.floor(Math.random() * 11);
let message = '';
let answer = document.getElementById('inputAlbum').value;
if (answer === albums[randomNumber]) {
    message = 'Correct!';
}
else {
    message = 'Sorry, not correct :(';
}
document.getElementById('response').innerHTML = message;
}