import tpl from '../../utils/avecTemplateHtml'
import { http_get } from '../../utils/request'
import validator from "../../../node_modules/validator/es/index"









export default tpl({
    template: './html/horsConnexion/connexion.html',
    data () {
        return {
            isActive: true,
            email: "",
            password: "",
            errorMessage: "",
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
            
            let validation = true
 
             if (validator.isEmpty(this.email)){
                 this.errorMessage = "Ca ne peut pas etre vide"
                 validation = false
             }
             
 
             return validation
            

            let getUserEmail = "http://api.test/api/user/" + this.email + "&" + this.password

            http_get(getUserEmail).then(data => {
                console.log(data)
            })

            e.preventDefault()
        },

    },
})