function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email,
        }),
    })
    .then(response => response.json())
    .then(function (object) {
        const p = document.createElement('p')
        p.innerHTML = object.id
        document.body.appendChild(p)
    })
    .catch(function (message = "ALERT!") {
        const error = document.createElement('p')
        error.innerHTML = message
        document.body.appendChild(error)
    })
}

submitData()