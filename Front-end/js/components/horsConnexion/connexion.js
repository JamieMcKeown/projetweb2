import tpl from '../../utils/avecTemplateHtml'
import { http_get } from '../../utils/request'

export default tpl({
    template: './html/horsConnexion/connexion.html',
    data () {
        return {
            isActive: true,
            email: "",
            password: "",
        }
    },
    mounted(){
       
    },
    methods: {
        homepageRoute() {
            this.$router.push("/")
        },

        connexionPage() {
            this.$router.push("/connexion").catch(err => {})
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

        connexion(e) {
            let getUserEmail = "http://projetweb2api.localhost/api/user/" + this.email

            http_get(getUserEmail).then(data => {
                console.log(data)
                if(data.email == this.email) {
                    this.$router.push("/")
                } else {
                    return
                }
            })

            e.preventDefault()
        }
    },
})