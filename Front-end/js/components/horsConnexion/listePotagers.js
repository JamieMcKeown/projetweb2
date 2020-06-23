import tpl from '../../utils/avecTemplateHtml'

// export du object literal complet représentant le component
export default tpl({
    template: './html/horsConnexion/listePotagers.html',
    data(){
        return {

        }
    }, //end of data
    methods:  {
        homepageRoute() {
            this.$router.push("/").catch(err => {})
        },
        
        connexionPage() {
            this.$router.push("/connexion")
        },
        inscriptionPage() {
            this.$router.push("/inscription")
        },
        jardiniersPage() {
            this.$router.push("/listeJardiniers")
        },
      

    },// end of mounted
})