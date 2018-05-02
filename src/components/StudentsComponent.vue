<template>
  <div>
    <h1>Students - Total is {{studentCount}}</h1>
    <ul>
      <li v-for="(student,index) in students" :key="student.id">
        {{student.name}}
        <i>{{student.games.length}} games he plays</i>
        <button @click="addTeamMember({type:'A',index})" :disabled="student.selected">Team A</button>
        <button @click="addTeamMember({type:'B',index})" :disabled="student.selected">Team B</button>
      </li>
    </ul>
    <hr>

    <TeamComponent  type='A'>Team A</TeamComponent>
    <TeamComponent  type='B'>Team B</TeamComponent>
    <InfoComponent></InfoComponent>
  </div>
</template>

<script>
import TeamComponent from "./TeamComponent";
import InfoComponent from "./InfoComponent";
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  components: { TeamComponent, InfoComponent },
  computed: {
    ...mapState(["students"]),
    ...mapGetters(["studentCount"])
  },
  methods: {
    ...mapActions(["addTeamMember"])
  },
  created() {
    this.$store.dispatch("getStudents");
  }
};
</script>

<style>

</style>
