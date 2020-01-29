<template>
  <div id="app">
      
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  
  <a class="navbar-brand" href="/Home"><img src="./assets/logo.png"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
       <li class="nav-item active">
        <a class="nav-link" href="#"><router-link to="/Login">Login</router-link> <span class="sr-only">(current)</span></a>
      </li>
       <li class="nav-item active">
        <a class="nav-link" href="#"><router-link to="/Register">Register</router-link> <span class="sr-only">(current)</span></a>
      </li>
       <li class="nav-item active">
        <a class="nav-link" href="#"><router-link to="/Secret">Secret</router-link> <span class="sr-only">(current)</span></a>
      </li>
      
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <div id="Header">
    <Top-Header></Top-Header>
    
      </div>
  </div>
  
</nav>

<div class="col-sm-3">
      
 <div class="sidebar">
   <a class="sidebar-link" href="/Home">Home</a>
  <a class="sidebar-link" href="/Trgovine">Prikaz trgovina</a>
  <a class="sidebar-link" href="/Proizvodi">Proizvodi</a>
  <a class="sidebar-link" href="/Kategorije">Kategorije</a>
</div>
 
</div>



    
    <router-view/>
     
    
  </div>
  
  
</template>


<script>
import TopHeader from "./components/Top-Header";
export default {
  components: {'Top-Header': TopHeader}
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
}
#Header{
  float:right;
  width: 150px;
  height: 50px;
  


}
img{
  width: 100px;
  height: 100px;


}
.footer {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background-color: lightcyan;
  
}
.nav {
  padding: 30px;
  background-color: lightcyan;
  }

/* The side navigation menu */
.sidebar {
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
}

/* Sidebar links */
.sidebar a {
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
}

/* Active/current link */
.sidebar a.active {
  background-color: #4CAF50;
  color: white;
}

/* Links on mouse-over */
.sidebar a:hover:not(.active) {
  background-color: #555;
  color: white;
}

/* Page content. The value of the margin-left property should match the value of the sidebar's width property */
div.content {
  margin-left: 200px;
  padding: 1px 16px;
  height: 1000px;
}

/* On screens that are less than 700px wide, make the sidebar into a topbar */
@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {float: left;}
  div.content {margin-left: 0;}
}

/* On screens that are less than 400px, display the bar vertically, instead of horizontally */
@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}

</style>
