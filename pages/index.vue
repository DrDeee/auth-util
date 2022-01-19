<template>
  <div>
    <b>Username:</b> {{ $auth.user.username }}<br />
    <b>Token:</b><br />
    <code> {{ $auth.strategy.token.$storage._state["_token.cloud"] }}</code>
    <br /><br />
    <button @click="logout()">Abmelden</button>
  </div>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$auth.logout();
      this.$router.push("login");
    },
  },
};
</script>
