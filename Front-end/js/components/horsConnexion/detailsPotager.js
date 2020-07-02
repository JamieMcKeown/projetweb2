import tpl from '../../utils/avecTemplateHtml'
import { http_get } from '../../utils/request'

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
            user: "",
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
                this.nom = data[0].nom
                this.id = data[0].id
                this.userId = data[0].user_id
                this.rating = data[0].rating
                this.vote = data[0].vote
                this.image = data[0].image
            })
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



    mounted() {
        this.fetchThePotager(this.potager)
        this.checkIfUserIsConnected()
    }
})