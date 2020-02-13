import axios from 'axios';

const state = {
  user: {},
  token: null,

};
const getters = {};
const actions= {
  getUser({commit}){
    axios.get("/api/v1/user/current")
    .then(response =>{
      commit('SET_USER', response.data);
    });
  },
  loginUser( {dispatch}, user){
    axios.post("/api/v1/user/login", {
      email: user.email,
      password: user.password
    })
    .then(response =>{
      if(response.data.access_token){

        //return dispatch('attempt', response.data.access_token )
        //save token to local storate
        localStorage.setItem("web_token",response.data.access_token);
        window.location.replace("/app");

      }
    })
  },
  logoutUser(){
    localStorage.removeItem("web_token");
    window.location.replace("/login");

  },
  async attempt({commit, state}, token){
    //localStorage.getItem('token');
        if(token){
            commit('SET_TOKEN', token)
        }
        if(!state.token){
          console.log('drugi')
            return
        }
        try{
            //axios.defaults.headers.common['Content-Type'] = 'application/json'
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

            let response = await axios.get('/api/v1/user/current')
            //console.log('try'+ response.data)
            commit('SET_USER', response.data)

            window.location.replace("/app");

        }catch(e){
            commit('SET_TOKEN', null)
            commit('SET_USER', null)
        }
    },
};
const mutations = {
  SET_USER (state, data){
    state.user = data;
  },
  SET_TOKEN (state, token){
    state.token = token
  },

};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
