import tpl from '../../utils/avecTemplateHtml'

export default tpl({
    template: './html/admin/profil.html',
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