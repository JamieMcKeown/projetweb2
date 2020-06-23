import tpl from '../../utils/avecTemplateHtml'
import { http_get, http_post } from '../../utils/request'

export default tpl({
    template: './html/horsConnexion/inscription.html',
    data () {
        return {
            prenom: "",
            nom: "",
            email: "",
            password: "",
            numero_porte: "",
            ville: "",
            code_postal: "",
            question_secrete: "",
            reponse: "",
            verifEmail: "",
            api: "http://api.test/api/",
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

        addUser(email) {
            let api_url = this.api + "user/new"
            
        },
        potagerPage() {
            this.$router.push("/listePotagers")
        }
    },
})