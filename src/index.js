import './style.css';
import 'normalize.css';
import Owner from  './img/giorgio.jpg';

function loadHomePage() {
    const content = document.querySelector('#content');
    content.innerHTML = `
        <div class="card">
            <img class="profile" src="${Owner}" width=150px height=150px>
            <!-- Photo by <a href="https://unsplash.com/@lisagageler?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Lisa Gageler</a> on <a href="https://unsplash.com/photos/a-chef-cooking-food-in-a-restaurant-LEKLkHu91BU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> -->

            <div class="textbox">
                <h1>From Ocean to Table, Pure Delight!</h1>

                <p><em>Buongiorno, amici del gusto!</em> Welcome to <em>Restoranto</em>, where passion meets the palate by the sparkling shores of the Mediterranean.</p>
                <p>At <em>Restoranto</em>, we believe in the transformative power of food – each dish crafted with love, tradition, and the freshest ingredients nature has to offer. Our kitchen is a symphony of flavors, where every recipe tells a story of Italy's rich culinary heritage.</p>
                <p>From the delicate aroma of freshly baked focaccia to the tantalizing taste of homemade pasta kissed by the sea breeze, every bite is a journey through the vibrant tapestry of Mediterranean cuisine.</p>
                <p>Join us for an unforgettable dining experience, where the beauty of the sea meets the warmth of Italian hospitality. Whether you're savoring a romantic dinner under the stars or sharing laughter with friends and family, <em>Restoranto</em> promises to delight your senses and nourish your soul.</p>
                <p><em>Arrivederci e buon appetito!</em></p>
                <p class="author">~ Giorgio Giordano</p>
            </div>
        </div>
    `;
}

loadHomePage();