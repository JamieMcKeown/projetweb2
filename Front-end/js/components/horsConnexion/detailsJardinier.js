import tpl from '../../utils/avecTemplateHtml'
import { http_get } from '../../utils/request'

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
            user: this.$route.params.id,
            api: "http://api.test/api/user/"
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
                this.rating = data[0].truerating
                this.id = data[0].id
                this.image = data[0].image
                this.bio = data[0].bio
            })
        }
    },

    mounted() {
        this.fetchTheUser(this.user)
    }
})