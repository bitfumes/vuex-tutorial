import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex)
import data from '../api/data';
import state from './state';
import actions from './actions';

const info = {
    namespaced: true,
    state: {
        matchDate: '01/01/2021'
    },
    getters: {
        teamACount(state, getters, rootState) {
            return rootState.teamA.length
        }
    },
    actions: {},
    mutations: {}
}
export default new Vuex.Store({
    modules: {
        info: info
    },
    state,
    getters: { // computed properties
        studentCount(state, getters) {
            return state.students.length;
        }
    },
    actions,
    mutations: { // Used for changing the
        setStudents(state) {
            state.students = data.getStudents()
        },
        pushMemberToTeam(state, data) {
            if (data.type === 'A') {
                state.teamA.push(state.students[data.index])
            } else {
                state.teamB.push(state.students[data.index])
            }
        },
        enableSelectedState(state, index) {
            state.students[index].selected = true
        },
        disableSelectedState(state, data) {
            state.students.forEach((student) => {
                student.id === data.member.id ? student.selected = false : "";
            })
        },
        spliceFromTeam(state, data) {
            if (data.type === 'A') {
                state.teamA.splice(data.index, 1);
            } else {
                state.teamB.splice(data.index, 1);
            }
        }
    }
})