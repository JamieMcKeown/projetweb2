import tpl from '../../utils/avecTemplateHtml'
import { http_get } from '../../utils/request'

// export du object literal complet représentant le component
export default tpl({
    template: './html/horsConnexion/listePotagers.html',
    data(){
        return {
            potagers: [],
            isActive: true,
            api: "http://api.test/api/potager"
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

        fetchAllPotager(){
            let url = this.api

            http_get(url).then(data => {
                this.potagers = data
                console.log(this.potagers)
            })
        },
      

    },// end of mounted

    mounted() {
        this.fetchAllPotager()
    }
})