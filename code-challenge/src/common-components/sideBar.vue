<template>
  <div>
    <v-navigation-drawer permanent app fixed width="360px">
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h1 mb-2">
              <img
                src="@/assets/logo.cleancloud.svg"
                alt="logo"
                height="25px"
              />
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item-group active-class="bg-active">
          <v-list-item to="/">
            <v-list-item-content>
              <v-list-item-title>Create emails</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider />
          <v-list-item to="list">
            <v-list-item-content>
              <v-list-item-title>Emails list</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <v-divider />
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<style scoped>
.bg-active {
  background-color: var(--v-primary-base);
  color: var(--v-light-base) !important;
}
</style>
