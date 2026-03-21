const form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // stop page reload

    const formData = new FormData(form);

    // Convert to object (optional, easier to read)
    const data = Object.fromEntries(formData.entries());

    console.log(data);
    form.reset();

    if(data.username === "Moulali") window.location.href = "welcome.html"; 
    else {
       // window.location.href = "index.html"; 
        document.getElementById("error").innerHTML = "Your not Moulali, Only Moulali is allowed..";
    } 
});

