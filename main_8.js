import {createApp, ref} from 'vue';

const app = {
  name: 'Test',

  setup() {
      let title = ref(1);
      
      return {
        title
      };
  },
  
  template: `
    <div>
    <button v-on:click="title++">+</button>
      <h1>{{title}}</h1>
    </div>
  `,
};

window.addEventListener('load', function () {
  var elementExists = document.getElementById("app");
  if(elementExists){
    createApp(app).mount('#app');
  }
  else{
    console.log("NO #app div FOUND")
  }
})
