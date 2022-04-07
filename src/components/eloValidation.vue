<template>
  <div class="card">
    <h3 class="card-header text-center" >Area de Registro</h3>
      <div class="form-row">
          <div class="form-group col-md-6">
          <div class="summary text-red" v-if="$v.form.$error">
            Form has errors
          </div>
            <form action>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="name">Nome</label>
                  <input type="text" name="name" id="name" v-model="form.name"/>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">              
                  <label for="password">Defina sua senha</label>
                  <input type="password" name="password" id="password" />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">               
                  <label for="confirmation_pass">Confirme sua senha</label>
                  <input type="password" name="c-password" id="c-password" />
                </div>
              </div>
                  <button type="submit" class="btn btn-success">Fazer login</button>
            </form>
        </div>
      </div>
  </div>

</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
  export default {
    name: 'eloValidation',

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
