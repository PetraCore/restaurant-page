export function loadContactPage() {
    const content = document.querySelector('#content');
    content.innerHTML = `
        <div class="card textbox contact">
            <h1>Contact</h1>

            <div class="section">
                <h2>Address</h2>
                <p>Via del Mare, 123, 12345 Coastal Town, Italy</p>
            </div>

            <div class="section">
                <h2>Phone</h2>
                <p>+39 123 456789</p>
            </div>

            <div class="section">
                <h2>Email</h2>
                <p>info@restoranto.com</p>
            </div>

            <div class="section">
                <h2>Opening Hours</h2>
                <p>Monday to Sunday: 12:00PM - 10:00PM</p>
            </div>

            <p>Feel free to reach out to us with any inquiries or to make a reservation. We look forward to welcoming you to <em>Restoranto</em>!</p>
        </div>
    `;
}