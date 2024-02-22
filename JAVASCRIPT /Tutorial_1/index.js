let username;
document.getElementById('sub').onclick = function() {
    username = document.getElementById('in').value;
    document.getElementById('title').textContent = `hello ${username}!`
}
