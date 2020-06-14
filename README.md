# Doctoleak

Une extension Firefox démontrant l'utilisation des informations stockées globalement dans l'objet window.

Facilement accessibles aux scripts de la même page, ces informations peuvent être envoyées à un serveur tiers ou affichées. C'est cette dernière option qui a été choisie. Ici, le script est une extension Firefox qui accède directement à l'objet window. Ce pourrait être un script utilisé dans les dépendances npm, comme l'imaginait (cet article)[https://medium.com/hackernoon/im-harvesting-credit-card-numbers-and-passwords-from-your-site-here-s-how-9a8cb347c5b5].

## Installation

Cloner le dépôt en local:

`git clone https://github.com/jeanremy/doctoleak.git`

Puis ouvrir dans Firefox:

Dans Firefox : Ouvrez la page `about:debugging`, cliquez sur "Firefox" (dans les versions plus récentes de Firefox), cliquez sur "Load Temporary Add-on", puis sélectionnez n'importe quel fichier dans le répertoire de votre extension.

Plus d'informations sur les WebExtensions sur la (page MDN)[https://developer.mozilla.org/fr/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension]
