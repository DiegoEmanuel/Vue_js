<template>
  <div class="login">
    <div class="card">
      <div class="imagem">ELO</div>
      <h3 class="card-header text-center" >Area de Registro</h3>
        <div class="form-row">
            <div class="form-group col-md-6">
            <div class="summary text-red" v-if="$v.form.$error">
              Form has errors
            </div>
              <form action>
                <div class="form-row">
                  <div class="form-group">
                    <aria-label for="name">Nome</aria-label>
                    <input class="form-control" type="text" name="name" id="name" v-model="form.name"/>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group">
                    <aria-label for="email">E-mail</aria-label>
                    <input class="form-control" type="text" name="email" id="email" v-model="form.email"/>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group">              
                    <aria-label for="password">Defina sua senha</aria-label>
                    <input  class="form-control"  type="password" name="password" id="password" v-model="form.password" />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group">               
                    <aria-label for="confirmation_pass">Confirme sua senha</aria-label>
                    <input  class="form-control" type="password" name="c-password" id="c-password" v-model="form.confirmpassword"/>
                  </div>
                </div >
                  <div class="col">
                    <button type="submit" class="btn btn-success">Fazer login</button>
                  </div>
              </form>
          </div>
        </div>
    </div>
  </div>

</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
  export default {
    name: 'elo_Register',

    data: () => {
    return {
      form: {
        name: "",
        email: ""
      }
    };

    },
      validations: {
    form: {
      name: { required, min: minLength(10) },
      email: { required, email }
    }
  },
  }
</script>
<style>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 30%;
}
.card{
  padding: 10%;
}
.imagem{
  width: 250px;
  height: 70px;
  background: black;
}
.form-control{
  width: 250px;
}
.col{
  margin-top:20px ;
  margin-left: 50%;
  width: 100%;
}

</style>