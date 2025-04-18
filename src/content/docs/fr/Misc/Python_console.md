---
title: Console Python
---
## Introduction

La console Python est une console qui fait partie de l'[interface utilisateur](/Interface/fr "Interface/fr") de FreeCAD. Elle exécute une instance de l'interpréteur [Python](/Python/fr "Python/fr") qui peut être utilisé pour contrôler les processus FreeCAD, créer et modifier des objets et leurs propriétés.

Elle peut être rendue visible/cachée par le menu déroulant **Visualisation → Panneaux → Console Python**.

La console Python de FreeCAD a une coloration syntaxique de base, capable de différencier avec différents styles et couleurs, commentaires, chaînes, valeurs numériques, fonctions intégrées, sortie texte imprimée et délimiteurs tels que des parenthèses et des virgules. Ces propriétés de la console peuvent être configurées dans l’[éditeur de préférences](/Preferences_Editor/fr "Preferences Editor/fr").

![](/images/FreeCAD_Python_console.png)

La console Python affichant des messages lorsque FreeCAD vient de démarrer.

## Création de scripts

*Pour les débutants complets, voir :* [Introduction à Python](/Introduction_to_Python/fr "Introduction to Python/fr") et [Tutoriel sur les scripts Python](/Python_scripting_tutorial/fr "Python scripting tutorial/fr").

*Voir aussi :* [Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr") et [Objets créés par script](/Scripted_objects/fr "Scripted objects/fr").

La console Python peut effectuer l'achèvement du code de base lorsqu'un point est écrit après un objet. il montrera les méthodes publiques et les attributs (variables) de l'objet actuel (classe), par exemple `obj.`

La console peut également afficher la chaîne de documentation d’une fonction particulière lors de l’écriture de la parenthèse ouvrante, par exemple `function(`

![](/images/FreeCAD_Python_console_example.png)

Exemple de code Python produisant des objets dans la vue 3D.

Les scripts d'initialisation FreeCAD chargent automatiquement certains modules et définissent certains alias. De fait, ceux-ci sont disponibles dans la console Python.

```
App = FreeCAD
Gui = FreeCADGui

```

Par conséquent, ils sont égaux à

```
App.newDocument()
FreeCAD.newDocument()

```

*Remarque :* ces modules et alias pré-chargés ne sont disponibles qu'à partir de la console Python intégrée au programme FreeCAD. Si vous utilisez FreeCAD en tant que bibliothèque dans un programme externe, n'oubliez pas de charger les modules `FreeCAD` et `FreeCADGui` et de définir les alias nécessaires, si vous le souhaitez.

## Actions

Un clic droit sur la console Python affiche certaines commandes:

* **Copy** : stocke le texte sélectionné dans le presse-papiers pour un collage ultérieur ; il est désactivé si rien n'est sélectionné.
* **Copy command** : stocke la commande sélectionnée dans le presse-papiers pour le coller ultérieurement ; il est désactivé si rien n'est sélectionné.
* **Copy history** : copie l'intégralité de l'historique des commandes Python entrées dans cette session.
* **Save history as** : enregistre l'intégralité de l'historique des commandes Python entrées dans cette session dans un fichier texte.
* **Paste** : colle le texte précédemment copié dans le presse-papiers dans la console Python.
* **Select all** : sélectionne tout le texte de la console Python.
* **Clear console** : efface toutes les commandes entrées dans la console Python. Ceci est utile si la console Python est pleine de messages et de commandes entrées précédemment qui pourraient gêner lors du test d’une nouvelle fonction. Ceci est simplement esthétique, car cette commande ne supprime pas les variables existantes ni les modules importés dans la session.
* **Insert file name** : ouvre une fenêtre de dialogue pour rechercher un fichier dans le système, puis insère le chemin complet du fichier. Ceci est utile pour tester les fonctions qui traitent un fichier d'entrée sans avoir à écrire le nom complet dans la console, ce qui est sujet aux erreurs. Cette commande n'exécute pas le fichier et ne l'importe pas en tant que module Python. Elle renvoie simplement le chemin complet de ce fichier.
* **Word wrap** : enveloppe les très longues lignes qui dépassent la dimension horizontale de la console Python.

## Remarques

* On a la possibilité de faire défiler l'API dans la console Python. Exemple :
  1. Dans la console, tapez : `FreeCAD.`
  2. Une fenêtre de dialogue s'affiche avec des classes/fonctions optionnelles à choisir.
  3. Faites défiler la liste pour lire la description de chaque classe/fonction.
  4. En choisissant une fonction et en la faisant suivre d'un `.`, on peut répéter les étapes 2 et 3 pour aller plus loin dans l'API.
* La complétion par tabulation/mot est prise en charge par le raccourci Ctrl+Espace.

Retrieved from "<http://wiki.freecad.org/index.php?title=Python_console/fr&oldid=1496208>"