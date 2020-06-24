import tpl from '../../utils/avecTemplateHtml'
import { http_get, http_post } from '../../utils/request'
// import validator from '../node_modules/validator/es/index'


export default tpl({
    template: './html/horsConnexion/inscription.html',
    data () {
        return {
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
            api: "",
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

        // addUser(email) {
        //     let api_url = this.api + "user/new"
            
        // },
        potagerPage() {
            this.$router.push("/listePotagers")
        },
        jardiniersPage() {
            this.$router.push("/listeJardiniers")
        },

        formValidation(e) {
            console.log(this.prenom)
            console.log(this.nom)
            console.log(this.email)
            console.log(this.password)
            console.log(this.confirmation)
            console.log(this.numero_porte)
            console.log(this.ville)
            console.log(this.code_postal)
            console.log(this.question_secrete)
            console.log(this.reponse)

            let createUserUrl = "http://projetweb2api.localhost/api/user/new"

              http_post(createUserUrl, {
                prenom: this.prenom,
                nom: this.nom,
                email: this.email,
                password: this.password,
                confirmation: this.confirmation,
                numero_porte: this.numero_porte,
                ville: this.ville,
                code_postal: this.code_postal,
                question_secrete: this.question_secrete,
                reponse: this.reponse,
              }).then(data => {
                  console.log(data)
              })

              e.preventDefault()

        }
    },
})