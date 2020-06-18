import tpl from '../../utils/avecTemplateHtml'

var translateValue = 0
var number = 0
var click = 0

export default tpl({
    template: './html/admin/modificationProduit.html',
    data () {
        return {
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
            this.$router.push("/")
        },
        
        connexionPage() {
            this.$router.push("/connexion")
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