import tpl from '../../utils/avecTemplateHtml'

export default tpl({
    template: './html/horsConnexion/inscription.html',
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
            this.$router.push("/connexion")
        },
    },
})