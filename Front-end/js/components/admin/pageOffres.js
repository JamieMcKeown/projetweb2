import tpl from '../../utils/avecTemplateHtml'
import { http_get, http_post } from '../../utils/request'

// export du object literal complet représentant le component
export default tpl({
    template: './html/admin/pageOffres.html',
    data() {
        return {
            api: "http://projetweb2api.localhost/api/echange/",
            id: "",
            prenom: "",
            nom: "",
            incomingOffers: [],
            connected: false,

        }
    }, //end of data
    mounted(){
        this.preventDisconnectedUser()
        this.checkIfUserIsConnected()
        this.getInfos()
        this.getIncomingOffers(this.id)
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

        // deleteOffer(id) {
        //     let url = this.api + "complete/" + id

        //     http_post(url, {
        //         id: this.id
        //     })
        // }
    }//end of methods
})