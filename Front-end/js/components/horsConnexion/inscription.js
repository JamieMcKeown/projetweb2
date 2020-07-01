import tpl from '../../utils/avecTemplateHtml'
import { http_get, http_post } from '../../utils/request'
import validator from "../../../node_modules/validator/es/index"



export default tpl({
    template: './html/horsConnexion/inscription.html',
    data () {
        return {
            isActive: true,
            error: "",
            prenom: "",
            nom: "",
            email: "",
            password: "",
            confirmation: "",
            numero_porte: "",
            ville: "",
            code_postal: "",
            question_secrete: "",
            reponse: "",
            verifEmail: "",
            errorMessage: "",
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

        inscriptionPage() {
            this.$router.push("/inscription").catch(err => {})
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
        refresh(){ 
           
            this.errorMessage = ""
            
        },

        formValidation(e) {
            e.preventDefault()
          
            let validation = true
   
            if (validator.isEmpty(this.email)){
                this.errorMessage = "Ca ne peut pas etre vide"
                validation = false
                return validation
               }
               


            let createUserUrl = this.api + "user/new"

            http_post(createUserUrl, {
              prenom: this.prenom,
              nom: this.nom,
              email: this.email,
              password: this.password,
              numero_porte: this.numero_porte,
              ville: this.ville,
              code_postal: this.code_postal,
              question_secrete: this.question_secrete,
              reponse: this.reponse,
            }).then(data => {
                this.$router.push("/")
            })
            

        }
    },
})