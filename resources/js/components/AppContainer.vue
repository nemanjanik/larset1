<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">NIT Starter</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">
        <router-link to="/">Dashboard</router-link>
      </a>
        <!-- <a class="nav-link" href="#">Dashboard <span class="sr-only">(current)</span></a> -->
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
        <router-link to="/contact">Contact</router-link>
      </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Users</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {{currentUser.name}}
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">My Profil</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#" @click.prevent="logout">Logout</a>
        </div>
      </li>

    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

  <router-view></router-view>

</div>
</template>

<script>
    export default {
      methods:{
        logout(){
          // axios.post('logout').then(response =>{
          //   window.location.href="login"
          // })
          this.$store.dispatch('currentUser/logoutUser');
        }

      },
      computed:{
        currentUser:{
          get(){
            return this.$store.state.currentUser.user;
          }
        }
      },
      created(){

        if(localStorage.hasOwnProperty("web_token")){
          axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("web_token");
          this.$store.dispatch('currentUser/getUser');
        }else{
          window.location.replace("/login");
        }

      },
        mounted() {

            //console.log('Component mounted.')
        }
    }
</script>
