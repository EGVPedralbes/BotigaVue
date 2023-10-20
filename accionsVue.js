const { createApp } = Vue
import { getProductes } from "./communicationManager.js";
createApp({
  data() {
    return {
      comprat: [],
      actiu: 1,
      productes: [],
      totalCompra:0,
      user:localStorage.getItem("name"),
      usermail:localStorage.getItem("mail"),
      dadesPosades:false
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
        let objetoExistente = this.productes.find(item =>item.id === compra.id);
        objetoExistente.stock-=compra.Quantitat;
        this.actiu=1;
        //this.productes[].stock-=compra.Quantitat*compra.preu;
      });
      this.comprat=[];
      this.totalCompra=0;
      
    },
    guardarUser(){
      this.user=document.getElementById("name").value;
      this.usermail=document.getElementById("mail").value;
      localStorage.setItem("name", this.user);
      localStorage.setItem("mail", this.usermail)
      this.dadesPosades=true;
    },
    esborrarDades(){
      localStorage.removeItem("name");
      localStorage.removeItem("mail");
      this.user="";
      this.usermail="";
      this.dadesPosades=false;
    },
    esborrarTotsElsProductes(index){
      this.totalCompra-=this.comprat[index].preu*this.comprat[index].Quantitat;
        this.comprat.splice(index, 1);
      
    }

  },
  created() {
    getProductes().then(data => {
      this.productes = data
      if(this.user){
        this.dadesPosades=true;
        console.log(localStorage.getItem("name"))
      } else{
        this.dadesPosades=false;
        console.log("NohayDatos")
      }
    }
    )
  }

}).mount('#app')
