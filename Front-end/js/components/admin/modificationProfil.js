import tpl from '../../utils/avecTemplateHtml'

export default tpl({
    template: './html/admin/modificationProfil.html',
    data () {
        return {
            isActive: true,
            user: "",
        }
    },
    mounted(){
        this.getInfos()
        this.preventDisconnectedUser()
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
            console.log(parseObject)

            this.user = parseObject.prenom
        },
        preventDisconnectedUser() {
            if(window.localStorage.length == 0) {
                this.$router.push("/")
            }
        },
    },
})