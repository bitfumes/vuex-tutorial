export default { // methods 
    getStudents(context) {
        context.commit('setStudents')
    },
    addTeamMember(context, data) {
        context.commit('pushMemberToTeam', data);
        context.commit('enableSelectedState', data.index);
    },
    removeFromTeam(context, data) {
        context.commit('disableSelectedState', data)
        context.commit('spliceFromTeam', data)
    }
}