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

var elementExists = document.getElementById("wiki_my_app");
if(elementExists){
  createApp(app).mount('#wiki_my_app');
}
else{
  console.log("NO #wiki_my_app div FOUND")
}

