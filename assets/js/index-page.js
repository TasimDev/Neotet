fetch('components/header.html')
    .then(response => response.text())
    .then(data => {
        // Inject the HTML content into the container
        $('Navbar').html(data);
    });
fetch('components/footer.html')
    .then(response => response.text())
    .then(data => {
        // Inject the HTML content into the container
        $('Footer').html(data);
    });