<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        I'm an example component.
                    </div>
                      <button type="submit" @click="logout(y)" class="btn btn-primary">logOut</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      methods:{
        logout(){
          axios.post('logout').then(response =>{
            window.location.href="login"
          })
        }
      },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
