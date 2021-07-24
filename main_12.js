import {createApp, ref} from 'vue';

const app = {
  name: 'Test',

  setup() {
      let title = ref(1);
      let mydata = ref("empty")
      
      fetch('https://gorest.co.in/public/v1/users')
        .then(response => response.json())
        .then(data => mydata.value = data);
    
      return {
        title, mydata
      };
  },
  
  template: `
    <div>
    <button v-on:click="title++">+ increment count</button>
      <p>{{title}}</p>
      <p><b>{{mydata}}</b></p>
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
