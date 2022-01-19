<template>
  <div>
    <div class="container column">
      <div>
        <div class="mt-5 box">
          <b-field label="Username">
            <b-input
              custom-class="disabledisable"
              disabled
              :value="username"
              expanded
              icon-right="content-copy"
              icon-right-clickable
              @icon-right-click="copy('Username', username)"
            />
          </b-field>
          <b-field label="Token-Typ">
            <b-input
              custom-class="disabledisable"
              disabled
              expanded
              :value="tokenType"
              icon-right="content-copy"
              icon-right-clickable
              @icon-right-click="copy('Token-Typ', tokenType)"
            />
          </b-field>
          <b-field label="Token" custom-class="hidden-scrollbar">
            <b-input
              custom-class="disabledisable"
              :value="token"
              expanded
              disabled
              type="textarea"
              icon-right="content-copy"
              icon-right-clickable
              @icon-right-click="copy('Token', token)"
            ></b-input
          ></b-field>
          <b-button type="is-primary" icon-left="logout" @click="logout()"
            >Abmelden</b-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ToastProgrammatic as Toast } from "buefy";
export default {
  computed: {
    username() {
      return this.$auth.user.username;
    },
    rawToken() {
      return this.$auth.strategy.token.$storage._state["_token.cloud"];
    },
    tokenType() {
      return this.rawToken.split(" ")[0];
    },
    token() {
      return this.rawToken.split(" ")[1];
    },
  },
  methods: {
    async logout() {
      await this.$auth.logout();
      this.$router.push("login");
    },
    copy(label, value) {
      navigator.clipboard.writeText(value);
      Toast.open({
        message: label + " kopiert.",
        position: "is-bottom",
        type: "is-success",
      });
    },
  },
};
</script>

<style>
[disabled].pagination-previous,
[disabled].pagination-next,
[disabled].pagination-link,
[disabled].pagination-ellipsis,
[disabled].file-cta,
[disabled].file-name,
.select select[disabled],
.taginput [disabled].taginput-container.is-focusable,
[disabled].textarea,
[disabled].input,
[disabled].button,
fieldset[disabled] .pagination-previous,
fieldset[disabled] .pagination-next,
fieldset[disabled] .pagination-link,
fieldset[disabled] .pagination-ellipsis,
fieldset[disabled] .file-cta,
fieldset[disabled] .file-name,
fieldset[disabled] .select select,
.select fieldset[disabled] select,
fieldset[disabled] .taginput .taginput-container.is-focusable,
.taginput fieldset[disabled] .taginput-container.is-focusable,
fieldset[disabled] .textarea,
fieldset[disabled] .input,
fieldset[disabled] .button {
  cursor: default;
}
textarea::-webkit-scrollbar {
  width: 0 !important;
}
textarea {
  overflow: -moz-scrollbars-none;
}
textarea {
  -ms-overflow-style: none;
}
</style>
