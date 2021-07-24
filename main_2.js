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
createApp(app).mount('#app');

