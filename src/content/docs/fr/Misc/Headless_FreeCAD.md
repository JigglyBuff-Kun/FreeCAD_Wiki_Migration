---
title: FreeCAD sans GUI
---
## Introduction

Cette page wiki documente les différents aspects de l'exécution de FreeCAD dans la console sans activer l'interface utilisateur graphique (GUI) ou aussi appelé "headless".

## Représentation du graphe de scène

Comme il n'est pas possible de créer ou d'accéder au [fournisseur de vues](/Viewprovider/fr "Viewprovider/fr") en mode headless, ce qui est possible, c'est de charger `FreeCADGui` en mode headless, mais il n'y a aucun moyen d'accéder au document GUI car il ne sera pas créé et, par conséquent, il n'existe aucun fournisseur de vues.

Cependant, il est possible de créer une représentation du [Graphe de scène](/Scenegraph/fr "Scenegraph/fr") d'un objet :

```
import FreeCADGui as Gui
from pivy import coin

Gui.setupWithoutGUI()
doc = App.newDocument()
obj = doc.addObject("Part::Box","Box")
doc.recompute()
view = Gui.subgraphFromObject(obj)

```

Voir : [fil du forum](https://forum.freecadweb.org/viewtopic.php?f=10&t=55794&p=481586#p481586).

## Exemples

### Recherche des modules FreeCAD

1. Ouvrez le terminal et tapez :

   :   `$ /path/to/FreeCAD -c`

       :   ou
   :   `$ /path/to/FreeCADCmd`
2. Un shell python démarre avec une invite. Tapez `help()`.
3. Un texte d'aide s'affiche.
4. Tapez `modules freecad`.

## En relation

* [Intégrer FreeCAD](/Embedding_FreeCAD/fr#Utilisation_de_FreeCAD_sans_interface_graphique_.28GUI.29 "Embedding FreeCAD/fr")
* [Démarrage et configuration](/Start_up_and_Configuration/fr#Executer_FreeCAD_sans_interface_graphique_utilisateur "Start up and Configuration/fr")

Retrieved from "<http://wiki.freecad.org/index.php?title=Headless_FreeCAD/fr&oldid=1440743>"