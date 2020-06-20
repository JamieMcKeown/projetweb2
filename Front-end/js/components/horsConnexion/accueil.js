import tpl from '../../utils/avecTemplateHtml'

export default tpl({
    template: './html/horsConnexion/accueil.html',
    data () {
        return {
        }
    },
    mounted(){
       
    },
    methods: {
        homepageRoute() {
            this.$router.push("/").catch(err => {})
        },
        
        connexionPage() {
            this.$router.push("/connexion")
        },
        inscriptionPage() {
            this.$router.push("/inscription")
        }
    },
})