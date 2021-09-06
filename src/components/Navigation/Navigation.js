export const Navbar = () => {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <Link class="navbar-brand" href="./">Dragna Drag</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link" href="about">About</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" href="products">Products</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    )
  }

  export default Navbar;