<template>
  <v-form ref="form">
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-text-field
            class="custom-label-color"
            label="Type email address here"
            outlined
            dense
            type="email"
            v-model="contact.email"
            :rules="emailRules"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-btn
            depressed
            height="40px"
            width="90px"
            color="accent"
            @click.prevent="add(contact)"
            @keypress.enter="add(contact)"
          >
            Add
          </v-btn>
        </v-col>
      </v-row>
      <transition name="confirmation">
        <div v-show="show">
          <span>Ok! E-mail added. </span>
          <span class="dimiss" @click="close">Dismiss</span>
        </div>
      </transition>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    show: false,
    contacts: [],
    contact: {
      id: "",
      email: "",
    },
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) =>
        /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v
        ) || "E-mail must be valid",
    ],
  }),
  methods: {
    close() {
      this.show = false;
    },
    add(email) {
      const validate = this.$refs.form.validate();
      if (validate) {
        this.saveEmail(email);
        this.contact.email = "";
        this.$refs.form.reset();
        this.show = true;
      }
    },
    saveEmail(contact) {
      let contacts = localStorage.getItem("contactsApp");
      contact.id = new Date().getTime();

      if (contacts) {
        //atualizar contatos no local storage
        contacts = JSON.parse(contacts);
        let copy = contacts;
        copy.push(contact);
      } else {
        // criar chave contatos
        contacts = [contact];
      }
      this.contacts = contacts;
      // atualizar o local storage independentemente de nova adição
      localStorage.setItem("contactsApp", JSON.stringify(contacts));
    },
  },
};
</script>

<style scoped>
.v-btn {
  text-transform: none !important;
  font-weight: bold;
}

.dimiss {
  color: var(--v-secondary-base);
  cursor: pointer;
}

.dimiss:hover {
  color: var(--v-accent-base);
}

.v-text-field--outlined >>> fieldset {
  border-color: var(--v-greyMedium-base);
  border-width: 2px;
  border-radius: 8px;
}

.confirmation-enter-active,
.confirmation-leave-active {
  transition: opacity 0.5s;
}
.confirmation-enter,
.confirmation-leave-to {
  opacity: 0;
}
</style>
