---
title: Vue 3D
---
## Introduction

La vue 3D de FreeCAD est une instance d’une [scène graphique](/Scenegraph/fr "Scenegraph/fr") Coin3D qui forme la fenêtre la plus importante de l'[interface](/Interface/fr "Interface/fr"). Coin3D est une bibliothèque qui implémente le standard de description de scène OpenInventor 2.1.

Certaines propriétés de la vue, telles que la couleur d'arrière-plan, le style de [navigation à la souris](/Mouse_navigation/fr "Mouse navigation/fr") et les étapes de zoom, peuvent être configurées dans l'[éditeur de préférences](/Preferences_Editor/fr "Preferences Editor/fr").

![](/images/FreeCAD_3D_view.png)

La vue 3D est une composante de l'[interface](/Interface/fr "Interface/fr") de FreeCAD. Par défaut, elle affiche un petit widget avec les axes de coordonnées et le cube de navigation, également avec des axes de coordonnées. La grille peut être affichée et configurée en chargeant l'[atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr").

## Menu contextuel

Les options du menu contextuel de la vue 3D dépendent de l'objet ou des objets sélectionnés et de l'atelier actif. Pour afficher ce menu, vous pouvez sélectionner un ou plusieurs objets, puis cliquez avec le bouton droit de la souris dans la vue 3D.

## Détails

FreeCAD utilise la bibliothèque Quarter pour utiliser Coin3D dans un environnement Qt.

Il est possible d'interagir directement avec le scénario 3D depuis la [console Python](/Python_console/fr "Python console/fr") à l'aide de la bibliothèque Python Pivy.

Pour plus d'informations, voir la documentation de l'utilisateur expert :

* [Scéne graphique](/Scenegraph/fr "Scenegraph/fr"), description de Coin3D.
* [Pivy](/Pivy/fr "Pivy/fr"), utilisation de Coin3D à partir de la console Python.
* [Bibliothèques tierces](/Third_Party_Libraries/fr "Third Party Libraries/fr") utilisées par FreeCAD.
* Documentation C++ de [Coin3D](https://grey.colorado.edu/coin3d/index.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=3D_view/fr&oldid=1442276>"