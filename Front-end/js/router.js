import accueil from './components/horsConnexion/accueil'
import connexion from './components/horsConnexion/connexion'
import inscription from './components/horsConnexion/inscription'
import modificationProduit from './components/admin/modificationProduit'
import modificationProfil from './components/admin/modificationProfil'
import profil from './components/admin/profil'
import listePotagers from './components/horsConnexion/listePotagers'

export default new VueRouter({
    routes: [
        { path: '/', component: accueil },
        { path:'/connexion', component: connexion},
        { path:'/inscription', component: inscription},
        { path:'/modificationProduit', component: modificationProduit },
        { path:'/modificationProfil', component: modificationProfil },
        { path:'/profil', component: profil },
        { path:'/listePotagers', component: listePotagers },
    ]
})