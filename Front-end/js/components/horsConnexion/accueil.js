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
       this.fetchRandomUser()
       console.log(this.users)
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

        fetchRandomUser() {
            let api_url = this.api + "user/random/4"
            http_get(api_url).then(data => {
                //console.log(data)
                for (let i = 0; i < 4; i++){
                    let id = data[i].id
                    let prenom = data[i].prenom
                    let nom = data[i].nom
                    let toAdd = {
                        userID: id,
                        firstname: prenom,
                        lastname: nom,
                    }
                    //console.log(toAdd)
                    this.users = this.users.concat(toAdd)
                    console.log(this.users)
                }
            })
        },

        fetchRandomPotager() {
            let api_url = this.api + "potager/random/4"
        }
    },
})