import tpl from '../../utils/avecTemplateHtml'

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
        }
    },
    mounted(){
        console.log(click)
        console.log(translateValue)
        console.log(this.css)
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
    },
})