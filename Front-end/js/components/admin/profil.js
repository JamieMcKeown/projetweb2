import tpl from '../../utils/avecTemplateHtml'

export default tpl({
    template: './html/admin/profil.html',
    data () {
        return {
            isActive: true,

        }
    },
    mounted(){
        this.getInfos()
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

        modificationProfil() {
            this.$router.push("/modificationProfil")
        },

        modificationAjoutProduit() {
            this.$router.push("/modificationProduit")
        },

        offres() {
            this.$router.push("/pageOffres")
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
        }


    },
})