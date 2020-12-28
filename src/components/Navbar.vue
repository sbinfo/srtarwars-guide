<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dar">
    <router-link class="navbar-brand" to="/">
      <img
        src="@/assets/logo.png"
        width="30"
        height="30"
        class="d-inline-block align-top"
        alt=""
        loading="lazy"
      />
      <!-- STAR WARS GUIDE -->
    </router-link>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link active" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/characters"
            >Characters</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/planets">Planets</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/starships">Starships</router-link>
        </li>
      </ul>

      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  margin-bottom: 40px;
      background: #303030;
    border-radius: 5px;
}

.collapse ul li {
  text-transform: uppercase;
}

.navbar-dark .navbar-nav .nav-link:focus {
  color: rgba(255,255,255,.6);
}

.navbar-dark .navbar-nav .active>.nav-link,
.navbar-dark .navbar-nav .nav-link.active,
.navbar-dark .navbar-nav .nav-link.show, 
.navbar-dark .navbar-nav .show>.nav-link {
  color: #FFEB3B;
}

.btn-outline-success {
    color: #009688;
    border-color: #009688;
}
.btn-outline-success:hover {
    background-color: #009688;
    border-color: #009688;
}
</style>