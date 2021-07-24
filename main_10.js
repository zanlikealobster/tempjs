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
    <button v-on:click="title++">+ increment count</button>
      <p>{{title}}</p>
    </div>
  `,
};

window.addEventListener('load', function () {
  var elementExists = document.getElementById("wiki_my_app");
  if(elementExists){
    createApp(app).mount('#wiki_my_app');
  }
  else{
    console.log("NO #wiki_my_app div FOUND")
  }
})
