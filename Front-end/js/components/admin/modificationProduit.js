import tpl from '../../utils/avecTemplateHtml'
import { http_get, http_post } from '../../utils/request'

var translateValue = 0
var number = 0
var click = 0

export default tpl({
    template: './html/admin/modificationProduit.html',
    data () {
        return {
            isActive: true,
            css: {
                transform: "translate(0px)",
            },
            connected: true,
            disconnected: false,
            api:"http://api.test/api/",
            description : "",
            quantite: "",
            prenom: "",
            jardinierId: "",
            potagerId: "",
            recoltes: [],
            types: [],
        }
    },
    mounted(){
        this.preventDisconnectedUser()
        this.getUsername()
        
        // console.log(click)
        // console.log(translateValue)
        // console.log(this.css)
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

        arrowClickR() {
            if(click === number + 3) {
                return
            } else {
                click += 1
                translateValue -= 95
                this.css = {
                transform: "translate(" + translateValue + "px)"
            } 
            }

            console.log("right")
            console.log(click)
            console.log(translateValue)
            console.log(this.css)
        },

        arrowClickL() {
            if(click === 0) {
                return
            } else {
                click -= 1
                translateValue += 95
                this.css = {
                transform: "translate(" + translateValue + "px)"
            } 
            }

            console.log("left")
        },
        preventDisconnectedUser() {
            if(window.localStorage.length == 0) {
                this.$router.push("/")
            }
        },
        pageProfil() {
            this.$router.push("/profil")
        },

        deconnexion() {
            localStorage.clear()
            this.connected = false
            this.$router.push("/").catch(err => {})
        },
        // ajoutProduit(e) {
        //     let urlAddProduct = this.api + "recolte/new"
        //     http_get(urlAddProduct, {
        //         description: this.description,
        //         quantite: this.quantite,
        //     }).then(data => {
        //         console.log("success")
        //     })

        //     e.preventDefault()
        // },
        getUsername() {
            let retrievedObject = localStorage.getItem('data')
            let parseObject =  JSON.parse(retrievedObject)
            this.prenom = parseObject.prenom
            this.jardinierId = parseObject.id
            this.getPotager(this.jardinierId)
        },

        getRecolte(id) {
            let url = this.api + "recolte/potager/" + id

            http_get(url).then(data => {
                this.recoltes = data
                console.log(data)
            })
        },

        getPotager(id) {
            let url = this.api + "potager/user/" + id

            http_get(url).then(data => {
                this.potagerId = data[0].id
                this.getRecolte(data[0].id)
            })
        },
    },
})