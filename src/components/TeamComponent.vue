<template>
  <div>
      <h1>Team {{type}}</h1>
      <ul>
          <li v-for="(member,index) in team" :key="member.id">
              {{member.name}}
              <button @click="removeFromTeam({type,index,member})">X</button>
          </li>
      </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  props: ["type"],
  methods: {
    ...mapActions(["removeFromTeam"])
  },
  computed: {
    team() {
      return this.type === "A"
        ? this.$store.state.teamA
        : this.$store.state.teamB;
    }
  }
};
</script>

<style>

</style>
