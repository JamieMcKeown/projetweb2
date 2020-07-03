import tpl from '../../utils/avecTemplateHtml'
import { http_get, http_put} from '../../utils/request'

// export du object literal complet représentant le component
export default tpl({
    template: './html/horsConnexion/detailsPotager.html',
    data(){
        return{
            prenom: "",
            nom: "",
            id: "",
            userId: "",
            rating: "",
            vote: "",
            image: "",
            isActive: true,
            potager: this.$route.params.id,
            api: "http://api.test/api/potager/",
            connected: false,
            disconnected: true,
            user: "",
            recoltes: [],
            votes: 1,
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

        fetchThePotager(id) {
            let url = this.api + id

            http_get(url).then(data => {
                this.prenom = data[0].Prenom
                this.nom = data[0].Nom
                this.id = data[0].id
                this.userId = data[0].user_id
                this.rating = data[0].rating
                this.vote = data[0].vote
                if (data[0].rating != 0) {
                    if (data[0].vote != 0) {
                        let num = (data[0].rating / data[0].vote)
                        this.rating = num.toFixed(2)
                    }
                }
                
                this.image = data[0].image
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
        
        goToJardinier(id){
            this.$router.push("/detailsJardinier/" + id)
        },

        getRecolte(id){
            let url = this.api + "http://api.test/api/recolte/potager/" + id

            http_get(url).then(data => {
                this.recoltes = data
                console.log(data)
            })
        }
    },



    mounted() {
        this.checkIfUserIsConnected()
        this.fetchThePotager(this.potager)
        this.getRecolte(this.id)
    }
})