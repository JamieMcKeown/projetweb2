import tpl from '../../utils/avecTemplateHtml'

// export du object literal complet représentant le component
export default tpl({
    template: './html/admin/admin.html',
    data() {
        return {
            
        }
    }, //end of data
    mounted(){
        this.preventDisconnectedUser()
    },//end of mounted
    methods: {
        homepageRoute() {
            this.$router.push("/").catch(err => {})
        },
        
        connexionPage() {
            this.$router.push("/connexion")
        },
        inscriptionPage() {
            this.$router.push("/inscription")
        },
        potagerPage() {
            this.$router.push("/listePotagers")
        },
        jardiniersPage() {
            this.$router.push("/listeJardiniers")
        },
        preventDisconnectedUser() {
            if(window.localStorage.length == 0) {
                this.$router.push("/")
            }
        },
    }//end of methods
})