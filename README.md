-> Créer un composant Input
-props : - label - name - type:password, text, email, number etc... - required: true / false - value - onChange: fonction - placeholder
-> Créer un composant bouton

- props :
  - title
  - type: submit/button
  - onClick : function
  - className

-> Créer un formulaire réactif login & register
-> à minima : La soumission au formulaire doit faire un console.log des valeurs inputs (sous forme object)
-> Envoies les données à l'API

pour les variables d'environnement pas besoin d'installer dotenv
NEXT_PUBLIC_API_URL =

créer un dossier hook
créer un hook : useFetch (foncton exportable )
qui doit renvoyer 3states : data, loading, error + une fonction qui déclence le fetch
args/props = url à fetcher, body, méthode
dans notre hook : fetch à déclencher dans le useEffect

A consommer dans la page register et login
useFetch('/auth/login', userForm);

cas d'erreur à traiter dans l'interface

- créer un composant Alert/Notification (props message d'erreur )
- afficher le composant, si erreur dans le fetch (erreur serveur, mauvais mot de passe, pas de user reconnu, etc...)
- afficher un loader si à true (setTimeout pour créer de la latence au déclenchement du fetch)

Si login success,

- stocker le JWT dans les cookies (npm i js-cookie)
- rediriger vers la page profil (router next js)
