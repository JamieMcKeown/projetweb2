import tpl from '../../utils/avecTemplateHtml'
import { http_get } from '../../utils/request'


export default tpl({
    template: './html/horsConnexion/accueil.html',
    data () {
        return {
            users: [],
            potagers: [],
            isActive: true,
            searchOption: false,
            api: "http://projetweb2api.localhost/api/",  
            connected: false,
            disconnected: true,
        }
    },
    mounted(){
    this.checkIfUserIsConnected()
    this.fetchRandomUser(4)
    this.fetchRandomPotager(4)
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

        fetchRandomUser(amount) {
            let url = this.api + "user/random/" + amount

            http_get(url).then(data => {
                this.users = data

            })
        },
        fetchRandomPotager(amount) {
            let url = this.api + "potager/random/" + amount

            http_get(url).then(data => {
                this.potagers = data
                console.log(this.potagers)
            })
        },
        searchClicked(){
            this.searchOption = true;
        },
        
        closeSearch(){
            this.searchOption = false;
        },

        checkIfUserIsConnected() {
            let checkStorage = window.localStorage.length
            console.log(checkStorage)
            if(checkStorage != 0) {
                this.connected = true
                this.disconnected = false
                console.log(this.connected)
                let retrievedObject = localStorage.getItem('data')
                let parseObject =  JSON.parse(retrievedObject)
                console.log(parseObject)
    
                this.user = parseObject.prenom
    
                console.log(this.user)
            }
        },

        moveToJardinier(id) {
            this.$router.push("/detailsJardinier/" + id)
        },

        moveToPotager(id) {
            this.$router.push("/detailsPotager/" + id)
        },
    },
})