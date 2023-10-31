// console.log("Application is started");

const app = Vue.createApp({
  data() {
    return {
      showtemplate: true,
      tittle: "this is a template",
      year: 2001,
      x:0,
      y:0
    }
  },
  methods: {
    toogle() {
        console.log("sdfsdfsdfsf")
        console.log("just for testing purpose.")
        console.log("just for testing purpose.")
        console.log("just for testing purpose.")
        
      this.showtemplate = !this.showtemplate;
    },

    handel(){
        console.log('mouseover')
    },
    handelMouse(e){
        this.x = e.offsetX
        this.y = e.offsetY
    }
  }
}).mount("#app");
