import tpl from '../../utils/avecTemplateHtml'

export default tpl({
    template: './html/admin/modificationProfil.html',
    data () {
        return {
            isActive: true,
            prenom: "",
            nom: "",
            ville: "",
            email: "",
            numero_porte: "",
            code_postal: "",
            bio: "", 
            id: "",

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

            this.prenom = parseObject.prenom
            this.nom = parseObject.nom
            this.ville = parseObject.ville
            this.numero_porte = parseObject.numero_porte
            this.code_postal = parseObject.code_postal
            this.bio = parseObject.bio
            this.id = parseObject.id
            this.email = parseObject.email
        },
        preventDisconnectedUser() {
            if(window.localStorage.length == 0) {
                this.$router.push("/")
            }
        },
    },
})