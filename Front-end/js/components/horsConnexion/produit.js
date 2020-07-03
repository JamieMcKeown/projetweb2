import tpl from '../../utils/avecTemplateHtml'
import { http_get } from '../../utils/request'

// export du object literal complet représentant le component
export default tpl({
    template: './html/horsConnexion/produit.html',
    data(){
        return{
            isActive: true,
            connected: false,
            disconnected: true,
            user: "",
            recolteID: this.$route.params.id,
            api: "http://api.test/api/recolte/",
            jardinierID: "",
            jardinierPrenom: "",
            jardinierNom: "",
            jardinierImage: "",
            potagerID: "",
            potagerImage: "",
            produceDescription: "",
            produceQte: "",
            produceID: "",
            produceName: "",
            produceImage: "",
        }
    },// end data
    mounted() {
        this.checkIfUserIsConnected()
        this.fetchProduce(this.recolteID)
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

        checkIfUserIsConnected() {
            let checkStorage = window.localStorage.length

            if(checkStorage != 0) {
                this.connected = true
                this.disconnected = false

                let retrievedObject = localStorage.getItem('data')
                let parseObject =  JSON.parse(retrievedObject)

    
                this.user = parseObject.prenom
    

            }
        },

        fetchProduce(id) {
            let url = this.api + id

            http_get(url).then(data => {

                this.jardinierID = data[0].potager_owner_id
                this.jardinierPrenom = data[0].potager_owner_prenom
                this.jardinierNom = data[0].potager_owner_nom
                this.potagerID = data[0].potager_id
                this.produceDescription = data[0].description
                this.produceQte = data[0].quantite
                this.produceID = data[0].recolte_id
                this.produceName = data[0].type
                this.potagerImage = data[0].image_potager
                this.jardinierImage = data[0].image_jardinier
                this.produceImage = data[0].image_recolte
            })
        },

        goToPotager(id){
            this.$router.push("/detailsPotager/" + id)
        },

        goToJardinier(id){
            this.$router.push("/detailsJardinier/" + id)
        },
    }
})