export function Contact() { 

    // For this part of the JS I used the same thing as Nick showed me in class. 
    // I tried to make it work, but it sadly doesn't

    function send() {

        fetch('http://127.0.0.1:8000/api/contact', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: 'name',
                email: 'email',
                message: 'message'
            }),
        })
        .then(response => response.json())
        .then(data => console.log(data));
    }

    const button = document.querySelector('.submit');

    button.addEventListener('click', function (e) {
        e.preventDefault();
        send();
    });

}