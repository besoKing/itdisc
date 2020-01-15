<template>
  <div id="app">
      
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  
  <a class="navbar-brand" href="/Proizvodi"><img src="./assets/logo.png"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#"> <router-link to="/Proizvodi">Proizvodi</router-link> <span class="sr-only">(current)</span></a>
      </li>
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





    
    <router-view/>
     <footer class="footer">
      <div class="container">
        <span class="text-muted">Place sticky footer content here.</span>
      </div>
    </footer>
    
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

</style>
