import accueil from './components/horsConnexion/accueil'
import connexion from './components/horsConnexion/connexion'
import inscription from './components/horsConnexion/inscription'

export default new VueRouter({
    routes: [
        { path: '/', component: accueil },
        { path:'/connexion', component: connexion},
        { path:'/inscription', component: inscription},
    ]
})