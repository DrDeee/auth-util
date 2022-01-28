<template>
  <div>
    <div class="container column">
      <div class="mt-5 box">
        <b-message> Melde dich an, um dein Token zu bekommen. </b-message>
        <b-button
          icon-left="login"
          expanded
          @click="$auth.loginWith('cloud')"
          type="is-primary"
          >Anmelden</b-button
        >
      </div>
    </div>
  </div>
</template>
