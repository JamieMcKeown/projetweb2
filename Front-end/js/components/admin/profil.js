import tpl from '../../utils/avecTemplateHtml'
import { http_get } from '../../utils/request'

export default tpl({
    template: './html/admin/profil.html',
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
            vote_potager: "",
            rating_potager: "",
            vote_user: "",
            rating_user: "",
            api_potager: "http://projetweb2api.localhost/api/potager/user/",
            connected: false,

        }
    },
    mounted(){
        this.preventDisconnectedUser()
        this.checkIfUserIsConnected()
        this.getInfos()
        this.getPotagerRating()
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

        modificationProfil() {
            this.$router.push("/modificationProfil")
        },

        modificationAjoutProduit() {
            this.$router.push("/modificationProduit")
        },

        offres() {
            this.$router.push("/pageOffres")
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
            //console.log(parseObject)
            this.prenom = parseObject.prenom
            this.nom = parseObject.nom
            this.ville = parseObject.ville
            this.numero_porte = parseObject.numero_porte
            this.code_postal = parseObject.code_postal
            this.bio = parseObject.bio
            this.id = parseObject.id
            this.email = parseObject.email

            if (parseObject.vote != 0 && parseObject.rating != 0) {
                this.rating_user = parseObject.rating / parseObject.vote
                this.vote_user = parseObject.vote
            } else {
                this.rating_user = 0
                this.vote_user = 0
            }
        },

        preventDisconnectedUser() {
            console.log(window.localStorage.length)
            if(window.localStorage.length == 0) {
                this.$router.push("/")
            }
        },

        getPotagerRating() {
            let url = this.api_potager + this.id

            http_get(url).then(data => {
                console.log(data)
                this.rating_potager = data[0].rating
                this.vote_potager = data[0].vote
            })
        },
        pageProfil() {
            this.$router.push("/profil")
        },

        deconnexion() {
            localStorage.clear()
            this.connected = false
            this.$router.push("/").catch(err => {})
        },
        checkIfUserIsConnected() {
            let checkStorage = window.localStorage.length
            console.log(checkStorage)
            if(checkStorage != 0) {
                this.connected = true
                console.log(this.connected)
                let retrievedObject = localStorage.getItem('data')
                let parseObject =  JSON.parse(retrievedObject)
                console.log(parseObject)
    
                this.user = parseObject.prenom
    
                console.log(this.user)
            }
        },


    },
})