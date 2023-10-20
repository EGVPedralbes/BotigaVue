const { createApp } = Vue
import { getProductes } from "./communicationManager.js";
createApp({
  data() {
    return {
      comprat: [],
      actiu: 1,
      productes: [],
      totalCompra:0,
    }
  },
  methods: {
    updateboto(active) {
      this.actiu = active;
      if (active == 2) {
        this.mostrarProductes();
      }
    },
    mostrarProductes() {
      console.log(this.productes);
    },
    afegirCompra(index, num) {
      let objetoExistente = this.comprat.find(item =>item.id === this.productes[index].id)
      if (objetoExistente) {
        if(objetoExistente.Quantitat<this.productes[index].stock){
          objetoExistente.Quantitat+=num;
          this.totalCompra+=this.productes[index].preu;
        }
      } else {
        this.comprat[this.comprat.length] = {
          id: this.productes[index].id,
          Title: this.productes[index].Title,
          preu: this.productes[index].preu,
          Quantitat: num,
         };
         this.totalCompra+=this.productes[index].preu;
      }
    },
    EliminarCompra(index){
      this.comprat[index].Quantitat--;
      this.totalCompra-=this.comprat[index].preu;
      if( this.comprat[index].Quantitat==0){
        this.comprat.splice(index, 1);
      }
    },
    acabarCompra(){
      this.comprat.forEach(compra => {
        //this.productes[].stock-=compra.Quantitat*compra.preu;
      });
      
    }

  },
  created() {
    getProductes().then(data => {
      this.productes = data
    }
    )
  }

}).mount('#app')
