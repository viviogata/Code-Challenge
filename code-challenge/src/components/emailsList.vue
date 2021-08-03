<template>
  <div>
    <v-card flat max-width="500">
      <v-virtual-scroll
        :items="emailsList"
        min-height="80"
        max-height="270"
        item-height="35"
        v-show="showEmails"
        class="mb-6"
      >
        <template v-slot:default="{ item }">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="line" id="teste">
                <span id="teste2">{{ item.email }}</span>
                <span class="remove-btn" @click.prevent="removeElement(item.id)"
                  >Remove</span
                >
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-virtual-scroll>
      <transition name="confirmation">
        <div v-show="showMessage">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="line text-wrap">
                <div class="message">
                  User "{{ emailDeleted }}" was removed successfully.
                </div>
                <span class="undo" @click="undo(copy)">
                  <img
                    src="@/assets/reload.svg"
                    height="14px"
                    width="14px"
                    class="reload"
                  />
                  Undo</span
                >
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </transition>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    emails: [],
    copyEmail: [],
    showMessage: false,
    showEmails: true,
    emailDeleted: "",
    indexEmail: 0,
    copy: {},
  }),
  created() {
    this.emails = JSON.parse(localStorage.getItem("contactsApp"));
    this.copyEmail = this.emails;
  },
  computed: {
    emailsList() {
      const emailLength = this.emails.length;
      return Array.from({ length: emailLength }, (k, v) => {
        const email = this.emails[v].email;
        const id = this.emails[v].id;
        return {
          email: `${email}`,
          id: id,
        };
      });
    },
  },
  methods: {
    removeElement(contactId) {
      let contacts = localStorage.getItem("contactsApp");
      if (!contacts) return;
      contacts = JSON.parse(contacts);
      contacts = contacts.filter((contact) => {
        if (contact.id == contactId) {
          this.copy = contact;
          this.emailDeleted = this.copy.email;
          this.indexEmail = contacts
            .map((e) => {
              return e.email;
            })
            .indexOf(this.emailDeleted);
        }
        return contact.id != contactId;
      });
      this.emails = contacts;
      localStorage.setItem("contactsApp", JSON.stringify(contacts));
      this.showMessage = true;
      this.show();
    },
    undo(contact) {
      let contacts = localStorage.getItem("contactsApp");
      contacts = JSON.parse(contacts);
      contacts.splice(this.indexEmail, 0, contact);
      this.emails = contacts;
      localStorage.setItem("contactsApp", JSON.stringify(contacts));
      this.showMessage = false;
      this.show();
    },
    show() {
      if (this.emails.length == 0) {
        this.showEmails = false;
      } else this.showEmails = true;
    },
  },
};
</script>

<style scoped>
.line {
  display: flex;
  justify-content: space-between;
}

.remove-btn {
  color: var(--v-secondary-base);
  cursor: pointer;
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background-color: var(--v-greyLight-base);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: var(--v-greyMedium-base);
  border-radius: 10px;
}

.confirmation-enter-active,
.confirmation-leave-active {
  transition: opacity 0.5s;
}
.confirmation-enter,
.confirmation-leave-to {
  opacity: 0;
}

.reload {
  vertical-align: middle;
  margin-right: 5px;
}

.message {
  max-width: 275px;
}

.undo {
  display: flex;
  align-items: center;
  color: var(--v-secondary-base);
  cursor: pointer;
  text-decoration: underline;
}

.remove-btn:hover,
.undo:hover {
  color: var(--v-accent-base);
}
</style>
