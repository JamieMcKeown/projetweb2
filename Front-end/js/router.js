import accueil from './components/horsConnexion/accueil'
import connexion from './components/horsConnexion/connexion'
import inscription from './components/horsConnexion/inscription'
import modificationProduit from './components/admin/modificationProduit'
import modificationProfil from './components/admin/modificationProfil'
import profil from './components/admin/profil'
import listePotagers from './components/horsConnexion/listePotagers'
import listeJardiniers from './components/horsConnexion/listeJardiniers'
import detailsPotager from './components/horsConnexion/detailsPotager'
import detailsJardinier from './components/horsConnexion/detailsJardinier'
import produit from './components/horsConnexion/produit'
import admin from './components/admin/admin'
import pageOffres from './components/admin/pageOffres'
import offreEchange from './components/admin/offreEchange'
import evaluationOffre from './components/admin/evaluationOffre'

export default new VueRouter({
    routes: [
        { path: '/', component: accueil },
        { path:'/connexion', component: connexion},
        { path:'/inscription', component: inscription},
        { path:'/modificationProduit', component: modificationProduit },
        { path:'/modificationProfil', component: modificationProfil },
        { path:'/profil', component: profil },
        { path:'/listePotagers', component: listePotagers },
        { path:'/listeJardiniers', component: listeJardiniers },
        { path:'/detailsPotager', component: detailsPotager },
        { path:'/detailsJardinier', component: detailsJardinier },
        { path:'/produit', component: produit },
        { path:'/admin', component: admin },
        { path:'/pageOffres', component: pageOffres },
        { path:'/offreEchange', component: offreEchange },
        { path:'/evaluationOffre', component: evaluationOffre },
    ]
})