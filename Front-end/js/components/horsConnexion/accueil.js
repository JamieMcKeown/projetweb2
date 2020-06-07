import tpl from '../../utils/avecTemplateHtml'

export default tpl({
    template: './html/horsConnexion/accueil.html',
    data () {
        return {
            show: false,
        }
    },
    mounted(){
       
    },
    methods: {
        homepageRoute() {
            this.$router.push("/").catch(err => {})
        },
        
        connexion() {
            this.show = !this.show  
        },
    },
})