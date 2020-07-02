import tpl from '../../utils/avecTemplateHtml'
import { http_get, http_post, http_put } from '../../utils/request'

export default tpl({
    template: './html/admin/modificationProfil.html',
    data () {
        return {
            isActive: true,
            prenom: "",
            nom: "",
            ville: "",
            email: "",
            numero_porte: "",
            code_postal: "",
            bio: "", 
            id: "",
            api: "http://projetweb2api.localhost/api/",
            connected: true,
            disconnected: false,

        }
    },
    mounted(){
        this.preventDisconnectedUser()
        this.getInfos()
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

            this.prenom = parseObject.prenom
            this.nom = parseObject.nom
            this.ville = parseObject.ville
            this.numero_porte = parseObject.numero_porte
            this.code_postal = parseObject.code_postal
            this.bio = parseObject.bio
            this.id = parseObject.id
            this.email = parseObject.email
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
                this.$router.push("/profil")
            })
            e.preventDefault()
        },
        pageProfil() {
            this.$router.push("/profil")
        },
    
        deconnexion() {
            localStorage.clear()
            this.connected = false
            this.$router.push("/").catch(err => {})
        },
    },
})