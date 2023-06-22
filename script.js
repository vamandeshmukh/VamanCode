
function getData() {
    fetch('http://localhost:8080/emp', { method: 'GET' })
        .then(data => {
            return data.json();
        })
        .then((response) => {
            document.getElementById("hello").innerHTML = JSON.stringify(response);
        })

}