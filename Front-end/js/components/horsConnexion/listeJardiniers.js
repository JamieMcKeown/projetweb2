import tpl from '../../utils/avecTemplateHtml'
import { http_get } from '../../utils/request'

// export du object literal complet représentant le component
export default tpl({
    template: './html/horsConnexion/listeJardiniers.html',
    data(){
        return {
            isActive: true,
            jardiniers: [],
            api: "http://api.test/api/user",
            connected: false,
            disconnected: true,
            user: "",
        }
    }, //end of data
    methods:  {
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
            this.$router.push("/listeJardiniers").catch(err => {})
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

        fetchAllUser(){
            let url = this.api

            http_get(url).then(data => {
                this.jardiniers = data
                console.log(this.jardiniers)
            })
        },

        moveToJardinier(id) {
            this.$router.push("/detailsJardinier/" + id)
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
      

    },
    
    mounted(){
        this.checkIfUserIsConnected()
        console.log("Loading")
        this.fetchAllUser()  
    }// end of mounted
})