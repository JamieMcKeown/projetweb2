import tpl from '../../utils/avecTemplateHtml'

// export du object literal complet représentant le component
export default tpl({
    template: './html/horsConnexion/produit.html',
    data(){
        return{
            isActive: true,
            connected: false,
            user: "",
        }
    },// end data
    mounted() {
        this.checkIfUserIsConnected()
    },
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
    }
})