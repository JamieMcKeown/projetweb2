import tpl from '../../utils/avecTemplateHtml'
import { http_get, http_put } from '../../utils/request'

// export du object literal complet représentant le component
export default tpl({
    template: './html/horsConnexion/detailsJardinier.html',
    data(){
        return{
            prenom: "",
            nom: "",
            id: "",
            ville: "",
            image: "",
            rating: "",
            vote: "",
            bio: "",
            isActive: true,
            jardinier: this.$route.params.id,
            api: "http://api.test/api/user/",
            connected: false,
            disconnected: true,
            user: "",
            votes: 0,
            potagerId: "",
        }
    },// end data
    methods: {
        homepageRoute() {
            this.$router.push("/")
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
        pageProfil() {
            this.$router.push("/profil")
        },
        deconnexion() {
            localStorage.clear()
            this.connected = false
            this.disconnected = true
            this.$router.push("/").catch(err => {})
        },
        stopAnimation() {
            if( this.isActive == false) {
                this.isActive = true
            } else {
                this.isActive = false
            }
        },

        fetchTheUser(id){
            let url = this.api + id

            http_get(url).then(data => {
                this.prenom = data[0].prenom
                this.nom = data[0].nom
                this.ville = data[0].ville
                this.vote = data[0].vote
                this.rating = data[0].truerating.toFixed(2)
                this.id = data[0].id
                this.image = data[0].image
                this.bio = data[0].bio
                this.findPotager(data[0].id)
            })
        },

        checkIfUserIsConnected() {
            let checkStorage = window.localStorage.length

            if(checkStorage != 0) {
                this.connected = true
                this.disconnected = false

                let retrievedObject = localStorage.getItem('data')
                let parseObject =  JSON.parse(retrievedObject)

    
                this.user = parseObject.prenom
    

            }
    },

    upVote() {
        let upvoteUrl = this.api + "vote/" + this.id

        http_put(upvoteUrl , {
            rating: this.votes
        }).then(data => {
            this.$router.go()
        })
    },

    findPotager(id) {
        let potagerUrl = "http://api.test/api/potager/user/" + id

        http_get(potagerUrl).then(data => {
            this.potagerId = data[0].id
        })
    },

    goToPotager(id) {
        this.$router.push("/detailsPotager/" + id)
    }
    },



    mounted() {
        this.checkIfUserIsConnected()
        this.fetchTheUser(this.jardinier)
        
    }
})