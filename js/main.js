class MyHeader extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <header > 
            <div class="toppage">
                <a href="#" class="logo">&#127807;plants</a><br><br>
                <div class="icons">
                    <a href="signinup.html" class="fas fa-user"></a>
                </div>
            </div>

            <nav class="navbar">
                <a href="index.html">home</a>
                <a href="about.html">about</a>
                <a href="products.html">products</a>
                <a href="contact.html">contact</a>
            </nav>
            
        </header> 
        `;
    } 
}
class MyFooter extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <footer > 
            <div class="footerbar">
                <h3>Quick Links</h3>
                <ul>
                    
                    <li><a href="index.html">home</a></li>
                    <li><a href="about.html">about</a></li>
                    <li><a href="products.html">products</a></li>
                    <li><a href="contact.html">contact</a></li>
                </ul>
            </div>
            <div class="mediaicons">
                <h3>Follow Us</h3>
                <ul>
                    <li><a href=""><i class="fa-brands fa-facebook"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-linkedin"></i></a></li>
                </ul>
            </div>
        </footer>
        `;
    } 
}
customElements.define('my-header', MyHeader);
customElements.define('my-footer', MyFooter);