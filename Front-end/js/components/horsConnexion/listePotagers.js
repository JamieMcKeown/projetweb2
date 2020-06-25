import tpl from '../../utils/avecTemplateHtml'

// export du object literal complet représentant le component
export default tpl({
    template: './html/horsConnexion/listePotagers.html',
    data(){
        return {
            isActive: true,
        }
    }, //end of data
    methods:  {
        homepageRoute() {
            this.$router.push("/")
        },
        
        connexionPage() {
            this.$router.push("/connexion")
        },
        inscriptionPage() {
            this.$router.push("/inscription")
        },
        potagerPage() {
            this.$router.push("/listePotagers").catch(err => {})
        },
        jardiniersPage() {
            this.$router.push("/listeJardiniers")
        },
        stopAnimation() {
            if( this.isActive == false) {
                this.isActive = true
            } else {
                this.isActive = false
            }
        },
      

    },// end of mounted
})