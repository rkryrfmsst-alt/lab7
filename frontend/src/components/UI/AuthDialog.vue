<script setup>
import { ref, inject } from 'vue'

const emit = defineEmits(['close'])

const loginService = inject('loginService')
const userService = inject('userService')

const activeTab = ref('login')
const email = ref('')
const password = ref('')

const signIn = () => {
  if (!email.value || !password.value) {
    return alert('Не заполнены обязательные поля!')
  }

  loginService.authorizationUser(email.value, password.value)
    .then((response) => {
      console.log(response)
      console.log('Авторизация')
      sessionStorage.setItem('recordId', response.userId)
      return userService.getCurrentUser(response.userId)
    })
    .then((user) => {
      console.log('Текущий пользователь:', user)
    })
}
</script>

<template>
  <div class="dialog-overlay">
    <div class="dialog">
      <div class="tabs">
        <button :class="{ active: activeTab === 'login' }" @click="activeTab = 'login'">Войти</button>
        <button :class="{ active: activeTab === 'register' }" @click="activeTab = 'register'">Зарегистрироваться</button>
      </div>

      <div class="fields">
        <input v-model="email" type="email" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Пароль" />
      </div>

      <div class="actions">
        <button class="cancel" @click="emit('close')">Отмена</button>
        <button class="submit" @click="signIn">Войти</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');

.dialog-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.dialog {
  background: #fff;
  border-radius: 4px;
  padding: 24px;
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: 'Open Sans', sans-serif;
  color: #333;
  box-shadow: 0 4px 24px rgba(0,0,0,0.15);
}

.tabs {
  display: flex;
  border-bottom: 1px solid #e0e0e0;
}

.tabs button {
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  color: #666;
  margin-bottom: -1px;
  font-weight: 400;
}

.tabs button.active {
  color: #01579B;
  border-bottom: 2px solid #01579B;
}

.fields {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.fields input {
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 12px;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  color: #333;
}

.fields input:focus {
  border-color: #01579B;
}

.fields input::placeholder {
  color: #aaa;
  font-weight: 300;
}

.actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
}

.cancel {
  background: none;
  border: none;
  color: #01579B;
  cursor: pointer;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
}

.cancel:hover {
  text-decoration: underline;
}

.submit {
  background: #01579B;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 20px;
  cursor: pointer;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
}

.submit:hover {
  background: #014f8e;
}
</style>