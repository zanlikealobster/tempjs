const {ref} = Vue;

export default {
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