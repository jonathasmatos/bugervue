<template>
  <div>
    <Message :msg="msg" v-show="msg" />
    <div>
      <form id="burger-form" @submit="createPao">
        <div class="input-cotainer">
          <label for="pao"> Adicione Pães :</label>
          <input 
            type="text"
            id="pao"
            name="pao"
            v-model="paes"
            placeholder="Digite o pao"
          />
        </div>
        <!-- <div class="input-cotainer">
          <label for="padaria"> Escolha a sua carne :</label>
          <select name="tipo" id="tipo" v-model="padaria">
            <option value="">Selecione o tipo de pão</option>
            <option v-for="padaria in padarias" :key="padaria.id" :value="padaria.tipo">
              {{ padaria.tipo }}
            </option>
          </select>
        </div> -->
        <div class="input-container">
          <input type="submit" class="submit-btn" value="Adicionar Pao!" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Message from "@/components/Message.vue";
export default {
  name: "Cadastro",
  components: {
    Message,
  },
  data() {
    return {
      tipo: null,
      tipos: null,
      pao: [{}],
      paes: null,
      padaria: null,
      padarias: null,
      msg: null,
    };
  },
  methods: {
    async getPadarias() {
      const req = await fetch("http://localhost:3000/padarias");
      const data = await req.json();
      
      this.padarias = data.padarias;
      this.tipos = data.tipos;
      
      
    },
    async createPao(e) {
      e.preventDefault();
      const data = {
        paes: Array.from (this.pao),
        
        
      };
      const dataJson = JSON.stringify(data);
      const req = await fetch("http://localhost:3000/padarias", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });

      const res = await req.json();
      // Chamar mensagem de sucesso.
      this.msg = `Pedido de Nº ${res.id} Realizado com sucesso !`;

      //Limpar MSG
      setTimeout(() => (this.msg = ""), 2000);

      // Limpar Campos do Fornmulário
      this.tipo = "";
    },
  },
  mounted() {
    this.getPadarias();
  },
};
</script>

<style scoped>
#burger-form {
  max-width: 400px;
  margin: 0 auto;
}
.input-cotainer {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
label {
  font-weight: bold;
  margin-bottom: 15px;
  color: #222;
  padding: 5px 10px;
  border-left: 4px solid #fcba03;
}
input,
select {
  padding: 5px 10px;
  width: 300px;
}

#opcionais-title {
  width: 100%;
}
.submit-btn {
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;
}
.submit-btn:hover {
  background-color: transparent;
  color: #222;
}
</style>