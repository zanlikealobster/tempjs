const {createApp} = Vue;
const {ref} = Vue;

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

var elementExists = document.getElementById("find-me");
if(elementExists){
  createApp(app).mount('#app');
}
else{
  console.log("NO #app div FOUND")
}

