import tpl from '../../utils/avecTemplateHtml'
import { http_get } from '../../utils/request'

export default tpl({
    template: './html/horsConnexion/accueil.html',
    data () {
        return {
            users: [],
            potagers: [],
            isActive: true,
            api: "http://pw2/public/api/user/random/"  
        }
    },
    mounted(){
    //    this.fetchRandomUser(4).then(data => {
    //        this.users = data
    //        console.log(this.users[0].firstname)
    //    })
    //    this.fetchRandomPotager(4).then(data => {
    //        this.potagers = data
    //    })
    this.fetchRandomUser(4)
       
       this.fetchRandomPotager(4).then(data => {
           this.potagers = data
       })
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

        fetchRandomUser(amount) {
            let url = this.api + "user/random/" + amount

            console.log(url)

            http_get(url).then(data => {
                this.users = data
                console.log(this.users)
                console.log(this.number)
            })
        },

        fetchRandomPotager(amount) {
            let url = this.api + "potager/random/" + amount

            console.log(url)

            http_get(url).then(data => {
                // this.potagers = data
                console.log(this.users)
                console.log(this.number)
            })
        }

        // fetchRandomUser(amount) {
        //     let api_url = this.api + "user/random/" + amount
        //     return http_get(api_url).then(data => {
        //         const users = []
        //         for (let i = 0; i < amount; i++){
        //             let id = data[i].id
        //             let prenom = data[i].prenom
        //             let nom = data[i].nom
        //             let image = data[i].image
        //             let toAdd = {
        //                 userID: id,
        //                 firstname: prenom,
        //                 lastname: nom,
        //                 picture: image,
        //             }
        //             Vue.set(users, i, toAdd)
        //         }
        //         return users
        //     })
        // },

        // fetchRandomPotager(amount) {
        //     let api_url = this.api + "potager/random/" + amount
        //     return http_get(api_url).then(data => {
        //         const potagers = []
        //         for (let i = 0; i < amount; i++){
        //             let id = data[i].id
        //             let prenom = data[i].Prenom
        //             let nom = data[i].Nom
        //             let image = data[i].image
        //             let toAdd = {
        //                 potagerID: id,
        //                 firstname: prenom,
        //                 lastname: nom,
        //                 picture: image,
        //             }
        //             Vue.set(potagers, i, toAdd)
        //         }
        //         return potagers
        //     })
        // }
    },
})