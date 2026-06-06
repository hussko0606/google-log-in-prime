function handleCredentialResponse(response) {

    const data = JSON.parse(
        atob(response.credential.split('.')[1])
    );

    document.getElementById("user-info").innerHTML = `
        <h2>Du är inloggad</h2>
        <img src="${data.picture}" width="100">
        <p>${data.name}</p>
        <p>${data.email}</p>
    `;
}