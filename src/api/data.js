const students = [
    {
        'id': 1,
        'name': 'Hulk',
        'games': ['Football', 'Cricket', 'Tennis'],
        'selected': false
    },
    {
        'id': 2,
        'name': 'Thor',
        'games': ['Cricket', 'Tennis'],
        'selected': false
    },
    {
        'id': 3,
        'name': 'IronMan',
        'games': ['Badminton', 'Tennis', 'Chess'],
        'selected': false
    },
    {
        'id': 4,
        'name': 'Vision',
        'games': [],
        'selected': false
    },
    {
        'id': 5,
        'name': 'BlackPanther',
        'games': ['Kabaddi'],
        'selected': false
    },
    {
        'id': 6,
        'name': 'Loki',
        'games': ['Cricket'],
        'selected': false
    },
    {
        'id': 7,
        'name': 'Spiderman',
        'games': [],
        'selected': false
    },
    {
        'id': 8,
        'name': 'Superman',
        'games': ['Olympic swimmer'],
        'selected': false
    },
]

export default {
    getStudents() {
        return students;
    }
}