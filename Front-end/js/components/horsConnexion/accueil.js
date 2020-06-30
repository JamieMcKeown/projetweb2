import tpl from '../../utils/avecTemplateHtml'
import { http_get } from '../../utils/request'

export default tpl({
    template: './html/horsConnexion/accueil.html',
    data () {
        return {
            users: [],
            potagers: [],
            isActive: true,
            api: "http://projetweb2api.localhost/api/"  
        }
    },
    mounted(){
    this.fetchRandomUser(4)
    this.fetchRandomPotager(4)
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
        },
        potagerPage() {
            this.$router.push("/listePotagers")
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

        fetchRandomUser(amount) {
            let url = this.api + "user/random/" + amount

            http_get(url).then(data => {
                this.users = data

            })
        },
        fetchRandomPotager(amount) {
            let url = this.api + "potager/random/" + amount

            http_get(url).then(data => {
                this.potagers = data
                console.log(this.potagers)
            })
        }
    },
})