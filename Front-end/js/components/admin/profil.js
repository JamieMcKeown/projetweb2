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
            image_user: "",
            image_potager: "",
            id_potager: "",
            api_potager: "http://api.test/api/potager/user/",
            api_jardinier: "http://api.test/api/user/",
            connected: true,
            disconnected: false,

        }
    },
    mounted(){
        this.preventDisconnectedUser()
        this.getInfos()
        this.getPotagerRating()
        this.getJardinierRating()
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

            // if (parseObject.vote != 0 && parseObject.rating != 0) {
            //     this.rating_user = parseObject.rating / parseObject.vote
            //     this.vote_user = parseObject.vote
            // } else {
            //     this.rating_user = 0
            //     this.vote_user = 0
            // }
        },

        preventDisconnectedUser() {
            if(window.localStorage.length == 0) {
                this.$router.push("/")
            }
        },

        getPotagerRating() {
            let url = this.api_potager + this.id

            http_get(url).then(data => {
                this.image_potager = data[0].image
                this.id_potager = data[0].id
                if(data[0].rating != 0) {
                    if (data[0].vote != 0) {
                        let num = data[0].rating / data[0].vote
                        this.rating_potager = num.toFixed(2)
                        this.vote_potager = data[0].vote
                    }
                } else {
                    this.rating_potager = data[0].rating
                    this.vote_potager = data[0].vote
                }
            })
        },

        getJardinierRating() {
            let url = this.api_jardinier + this.id
            http_get(url).then(data => {
                this.rating_user = data[0].truerating.toFixed(2)
                this.vote_user = data[0].vote
                this.image_user = data[0].image
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

        goToJardinier(id){
            this.$router.push("/detailsJardinier/" + id)
        },

        goToPotager(id){
            this.$router.push("/detailsPotager/" + id)
        },
    },
})