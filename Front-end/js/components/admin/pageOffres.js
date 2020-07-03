import tpl from '../../utils/avecTemplateHtml'
import { http_get, http_post, http_put } from '../../utils/request'

// export du object literal complet représentant le component
export default tpl({
    template: './html/admin/pageOffres.html',
    data() {
        return {
            api: "http://api.test/api/echange/",
            id: "",
            prenom: "",
            nom: "",
            incomingOffers: [],
            outgoingOffers: [],
            connected: true,
            disconnected: false,
        }
    }, //end of data
    mounted(){
        this.preventDisconnectedUser()
        this.getInfos()
        this.getIncomingOffers(this.id)
        this.getOutgoingOffers(this.id)
    },//end of mounted
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
        preventDisconnectedUser() {
            if(window.localStorage.length == 0) {
                this.$router.push("/")
            }
        },

        getInfos() {
            let data = localStorage.getItem('data')
            let parsed = JSON.parse(data)
            this.id = parsed.id
            this.prenom = parsed.prenom
            this.nom = parsed.nom
        },

        getIncomingOffers(id) {
            let url = this.api + "to/" + id

            http_get(url).then(data => {
                this.incomingOffers = data
                console.log(data)
            })
        },
        getOutgoingOffers(id) {
            let url = this.api + id

            http_get(url).then(data => {
                this.outgoingOffers = data
                console.log(data)
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

        deleteOffer(id) {
            let url = this.api + "complete/" + id

            http_put(url, {
                completed: 1,
                
            }).then(data => {
                this.$router.go()
            })
        },
    }//end of methods
})