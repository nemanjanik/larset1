<template>
  <div>
    <section>
      <div class="container mt-5">
          <div class="row justify-content-center">
              <div class="col-md-8">
                  <div class="card">
                      <div class="card-header">Dashboard </div>

                      <div class="card-body">
                          Welcome, You're logged as: {{currentUser.name}}
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
  </div>

</template>
<script>
export default {
  computed:{
    currentUser:{
      get(){
        return this.$store.state.currentUser.user;
      }
    }
  },
}
</script>
