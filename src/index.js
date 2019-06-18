import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Navbar-cirle-animation
</h1>
<div>
<body>
    <nav>
      <div class="hamburger">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <ul class="nav-links">
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Projects</a></li>
      </ul>
    </nav>

    <section class="landing">
      <img src="./file.svg" alt="dots" />
      <h1>Dots</h1>
    </section>

    <script src="app.js"></script>
</body>
</div>
`;
