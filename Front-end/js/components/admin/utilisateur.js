import tpl from '../../utils/avecTemplateHtml'

// export du object literal complet représentant le component
export default tpl({
    template: 'utilisateur.html',
    data() {
        return {

        }
    },
    mounted() {
        this.preventDisconnectedUser()
    },
    methods: {
        preventDisconnectedUser() {
            if(window.localStorage.length == 0) {
                this.$router.push("/")
            }
        },
    },
})