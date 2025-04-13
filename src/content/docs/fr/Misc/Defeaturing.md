---
title: Suppression de fonctions
---
## Introduction

La suppression de fonctions de modèles 3D a été ajoutée à [Open CASCADE 7.3](https://dev.opencascade.org/index.php?q=node/1211) et peut être utilisée pour modifier des modèles STEP en supprimant des fonctions du modèle.

Il est également possible de l'utiliser pour la modélisation directe, lorsque l'historique des opérations n'est pas disponible. (C'est le cas pour les modèles 3D STEP). La suppression de fonctions peut également être utile pour supprimer les informations propriétaires du modèle avant de le partager.

Le moyen le plus simple de supprimer des fonctions est d’utiliser l'[atelier Defeaturing](/Defeaturing_Workbench/fr "Defeaturing Workbench/fr").

## Extrait de code

La suppression de fonctions peut également être utilisé avec Python :

```
box = Part.makeBox(10,10,10)
box2 = Part.makeBox(5,5,5,FreeCAD.Vector(5,5,0))
box3 = box.cut(box2)
Part.show(box3)
faces = App.ActiveDocument.ActiveObject.Shape.Faces[6:] #the faces of box3 that are part of the corner pocket
box4 = App.ActiveDocument.ActiveObject.Shape.defeaturing(faces) #defeature the shape
Part.show(box4) #show defeatured shape

```

![](/images/Box3.PNG)

Forme Box3 utilisée dans le code Python, avant la suppression d'une fonction

![](/images/Box4.PNG)

Forme Box4 utilisée dans le code Python, après la suppression de la fonction

Retrieved from "<http://wiki.freecad.org/index.php?title=Defeaturing/fr&oldid=1512030>"