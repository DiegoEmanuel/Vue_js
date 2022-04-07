<template>
  <div class="card">
    <h3 class="card-header text-center" >Area de Registro</h3>
    <div class="card-body">
      <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label>Firstname</label>
            <input type="text" class="form-control" v-model.trim="$v.firstname.$model" :class="
            {'is-invalid':$v.firstname.$error, 'is-invalid':!$v.firstname.$invalid }">
            <div class="valid-feedback">Your first name is valid!</div>
            <div class="invalid-feedback">Your first name is invalid!</div>
              <span v-if="!$v.firstname.required">First name is required</span>
              <span v-if="!$v.firstname.minLength.min">First name must have at less</span>
              <span v-if="!$v.firstname.maxLength.max">First name must have at most</span>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label>Lastname</label>
            <input type="text" class="form-control" v-model.trim="$v.lastname.$model" :class="
            {'is-invalid':$v.lastname.$error, 'is-invalid':!$v.lastname.$invalid }">
            <div class="valid-feedback">Your last name is valid!</div>
            <div class="invalid-feedback">Your Last name is invalid!</div>
              <span v-if="!$v.lastname.required">Last name is required</span>
              <span v-if="!$v.lastname.minLength.min">Last name must have at less</span>
              <span v-if="!$v.lastname.maxLength.max">Last name must have at most</span>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>age</label>
            <input type="number" class="form-control" v-model.number.lazy="$v.age.$model" :class="
            {'is-invalid':$v.age.$error, 'is-invalid':!$v.age.$invalid }">
            <div class="valid-feedback">Your last name is valid!</div>
            <div class="invalid-feedback">Your last name is invalid!</div>
              <span v-if="!$v.age.required">age name is required</span>
              <span v-if="!$v.age.minLength.min">age name must have at less</span>
              <span v-if="!$v.age.maxLength.max">age name must have at most</span>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import{required, minLength, maxLength, between} from 'vuelidate/lib/validators'

  export default{
    name: 'FormValidation',
    data (){
      return{
        firstname: '',
        lastname: '',
        age: 0
      }
    },
    validations:{
      required,
      minLength:minLength(3),
      maxLength:maxLength(10)
    },
    lastname:{
      required,
      minLength:minLength(4),
      maxLength:maxLength(10)
    },
    age:{
      between:between(15,40)
    }
  }
</script>

<style scoped>
</style>