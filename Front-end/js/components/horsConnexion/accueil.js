import tpl from '../../utils/avecTemplateHtml'
import { http_get } from '../../utils/request'

export default tpl({
    template: './html/horsConnexion/accueil.html',
    data () {
        return {
            users: [],
            potagers: [],
            api: "http://api.test/api/"
        }
    },
    mounted(){
       this.fetchRandomUser(4)
       this.fetchRandomPotager(4)
       console.log(this.users)
       console.log(this.potagers)
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

        fetchRandomUser(amount) {
            let api_url = this.api + "user/random/4"
            http_get(api_url).then(data => {
                for (let i = 0; i < amount; i++){
                    let id = data[i].id
                    let prenom = data[i].prenom
                    let nom = data[i].nom
                    let image = data[i].image
                    let toAdd = {
                        userID: id,
                        firstname: prenom,
                        lastname: nom,
                        picture: image,
                    }
                    Vue.set(this.users, i, toAdd)
                }
            })
        },

        fetchRandomPotager(amount) {
            let api_url = this.api + "potager/random/4"
            http_get(api_url).then(data => {
                for (let i = 0; i < amount; i++){
                    let id = data[i].id
                    let prenom = data[i].Prenom
                    let nom = data[i].Nom
                    let image = data[i].image
                    let toAdd = {
                        potagerID: id,
                        firstname: prenom,
                        lastname: nom,
                        picture: image,
                    }
                    Vue.set(this.potagers, i, toAdd)
                }
            })
        }
    },
})