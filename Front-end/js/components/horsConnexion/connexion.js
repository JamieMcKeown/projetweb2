import tpl from '../../utils/avecTemplateHtml'

export default tpl({
    template: './html/horsConnexion/connexion.html',
    data () {
        return {
        }
    },
    mounted(){
       
    },
    methods: {
        homepageRoute() {
            this.$router.push("/")
        },

        connexionPage() {
            this.$router.push("/connexion").catch(err => {})
        },

        inscriptionPage() {
            this.$router.push("/inscription")
        },
        potagerPage() {
            this.$router.push("/listePotagers")
        }
    },
})