import tpl from '../../utils/avecTemplateHtml'
import { http_get, http_post, http_put } from '../../utils/request'

export default tpl({
    template: './html/admin/modificationProfil.html',
    data () {
        return {
            isActive: true,
            user: "",
            id: "",
            api: "http://projetweb2api.localhost/api/",
            prenom: "",
            nom: "",
            email: "",
            numero_porte: "",
            ville: "",
            code_postal: "",
            password: "",
            question_secrete: "",
            reponse: "",
        }
    },
    mounted(){
        this.getInfos()
        this.preventDisconnectedUser()
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

        getInfos() {
            let retrievedObject = localStorage.getItem('data')
            let parseObject =  JSON.parse(retrievedObject)
            console.log(parseObject)

            this.user = parseObject.prenom
            this.id = parseObject.id
        },
        preventDisconnectedUser() {
            if(window.localStorage.length == 0) {
                this.$router.push("/")
            }
        },

        modifProfil(e) {
            let userEdit = this.api + "user/edit/" + this.id
            console.log(userEdit)
            console.log(this.prenom)
            console.log(this.nom)
            console.log(this.email)
            console.log(this.numero_porte)
            console.log(this.ville)
            console.log(this.code_postal)

            http_put(userEdit , {
                prenom: this.prenom,
                nom: this.nom,
                email: this.email,
                numero_porte: this.numero_porte,
                ville: this.ville,
                code_postal: this.code_postal,
            }).then(data => {
                console.log("changements réussi!")
            })
            e.preventDefault()
        }
    },
})