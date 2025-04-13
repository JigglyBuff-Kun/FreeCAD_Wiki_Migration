---
title: Atelier Assembly
---

![](/images/Workbench_Assembly.svg)

Icône de l'atelier Assembly

## Introduction

[introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

L'![](/images/Workbench_Assembly.svg) atelier Assembly est le nouvel atelier d'assemblage intégré de FreeCAD. Il utilise le [solveur open-source d'Ondsel](https://github.com/Ondsel-Development/OndselSolver).

![](/images/Assembly_Workbench_Example.png)

## Outils

### Assemblage

- ![](/images/Assembly_CreateAssembly.svg) [Assemblage](/Assembly_CreateAssembly/fr "Assembly CreateAssembly/fr") : crée un assemblage de base dans le document en cours ou un sous-assemblage dans un assemblage actif préexistant.

- ![](/images/Assembly_InsertLink.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Insérer :

: \- ![](/images/Assembly_InsertLink.svg) [Insérer un composant](/Assembly_InsertLink/fr "Assembly InsertLink/fr") : insère un composant dans l'assemblage actif.

: \- ![](/images/Assembly_InsertNewPart.svg) [Nouvelle pièce](/Assembly_InsertNewPart/fr "Assembly InsertNewPart/fr") : insère une nouvelle pièce.

- ![](/images/Assembly_SolveAssembly.svg) [Résoudre un assemblage](/Assembly_SolveAssembly/fr "Assembly SolveAssembly/fr") : résout l'assemblage actif.

- ![](/images/Assembly_CreateView.svg) [Vue éclatée](/Assembly_CreateView/fr "Assembly CreateView/fr") : crée un conteneur de vues éclatées dans l'assemblage actif qui contient une ou plusieurs vues éclatées.

- ![](/images/Assembly_CreateSimulation.svg) [Simulation](/Assembly_CreateSimulation/fr "Assembly CreateSimulation/fr") : crée une simulation de l'assemblage en cours. [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr")

- ![](/images/Assembly_CreateBom.svg) [Nomenclature](/Assembly_CreateBom/fr "Assembly CreateBom/fr") : crée une nomenclature à partir d'un sous-ensemble sélectionné ou du document.

- ![](/images/Assembly_ExportASMT.svg) Exporter un fichier ASMT : exporte les données de l'assemblage actif dans un fichier ASMT à des fins de débogage.

: Cet outil est destiné aux développeurs et ne sera pas inclus dans les futures versions. (voir le [fil du forum](https://forum.freecad.org/viewtopic.php?p=812936#p812925))

### Liaisons

- ![](/images/Assembly_ToggleGrounded.svg) [Bascule du blocage](/Assembly_ToggleGrounded/fr "Assembly ToggleGrounded/fr") : fixe la position et l'orientation d'une forme par rapport au système de coordonnées de l'assemblage auquel elle appartient.

- ![](/images/Assembly_CreateJointFixed.svg) [Liaison fixe](/Assembly_CreateJointFixed/fr "Assembly CreateJointFixed/fr") : crée une liaison bloquant deux pièces d'assemblage l'une contre l'autre, empêchant tout mouvement ou rotation, mais peut également être utilisé pour définir d'autres types de liaisons.

- ![](/images/Assembly_CreateJointRevolute.svg) [Liaison pivot](/Assembly_CreateJointRevolute/fr "Assembly CreateJointRevolute/fr") : crée une liaison articulée, permettant la rotation autour d'un seul axe entre deux parties sélectionnées.

- ![](/images/Assembly_CreateJointCylindrical.svg) [Liaison pivot glissant](/Assembly_CreateJointCylindrical/fr "Assembly CreateJointCylindrical/fr") : crée une liaison pivot glissant entre deux pièces sélectionnées, permettant une rotation autour d'un seul axe et un mouvement le long du même axe.

- ![](/images/Assembly_CreateJointSlider.svg) [Liaison glissière](/Assembly_CreateJointSlider/fr "Assembly CreateJointSlider/fr") : crée une liaison glissière entre deux pièces sélectionnées, permettant un mouvement linéaire le long d'un seul axe tout en limitant la rotation.

- ![](/images/Assembly_CreateJointBall.svg) [Liaison bille](/Assembly_CreateJointBall/fr "Assembly CreateJointBall/fr") : crée une liaison bille entre deux pièces sélectionnées en un seul point, permettant une rotation libre autour du point tout en gardant les deux pièces connectées en ce point.

- ![](/images/Assembly_CreateJointDistance.svg) [Liaison distance](/Assembly_CreateJointDistance/fr "Assembly CreateJointDistance/fr") : crée une liaison distance entre deux pièces sélectionnées, fixant la distance entre les deux pièces.

- ![](/images/Assembly_CreateJointParallel.svg) [Liaison parallèle](/Assembly_CreateJointParallel/fr "Assembly CreateJointParallel/fr") : crée une liaison parallèle entre deux pièces sélectionnées, en mettant en parallèle les axes Z des systèmes de coordonnées sélectionnés.

- ![](/images/Assembly_CreateJointPerpendicular.svg) [Liaison perpendiculaire](/Assembly_CreateJointPerpendicular/fr "Assembly CreateJointPerpendicular/fr") : crée une liaison perpendiculaire entre deux pièces sélectionnées, en mettant perpendiculaire les axes Z des systèmes de coordonnées sélectionnés.

- ![](/images/Assembly_CreateJointAngle.svg) [Liaison d'angle](/Assembly_CreateJointAngle/fr "Assembly CreateJointAngle/fr") : crée une liaison d'angle entre deux pièces sélectionnées, fixant l'angle entre les axes Z des systèmes de coordonnées sélectionnés.

- ![](/images/Assembly_CreateJointRackPinion.svg) [Liaison crémaillère](/Assembly_CreateJointRackPinion/fr "Assembly CreateJointRackPinion/fr") : crée une liaison à crémaillère qui couple la translation d'une partie d'une liaison glissière et la rotation d'une partie d'une liaison pivot.

- ![](/images/Assembly_CreateJointScrew.svg) [Liaison hélicoïdale](/Assembly_CreateJointScrew/fr "Assembly CreateJointScrew/fr") : crée une liaison hélicoïdale qui couple la translation d'une partie d'une liaison glissière et la rotation d'une partie d'une liaison pivot.

- ![](/images/Assembly_CreateJointGears.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Liaison engrenage/courroie :

: \- ![](/images/Assembly_CreateJointGears.svg) [Liaison engrenage](/Assembly_CreateJointGears/fr "Assembly CreateJointGears/fr") : crée une liaison par engrenage qui couple la rotation de deux parties de deux liaisons pivots différentes.

: \- ![](/images/Assembly_CreateJointBelt.svg) [Liaison courroie](/Assembly_CreateJointBelt/fr "Assembly CreateJointBelt/fr") : crée une liaison par courroie qui couple la rotation de deux parties de deux liaisons pivots différentes.

## Préférences

- ![](/images/Preferences-assembly.svg) [Préférences](/Assembly_Preferences/fr "Assembly Preferences/fr") : préférences pour l'atelier Assembly.

## Exemple d'une manivelle et une tige coulissante

![](/images/Assembly3_KinematicExample-01.png) Cet exemple est temporaire et pourra être supprimé lorsque des descriptions/tutoriels appropriés seront disponibles.

### Assemblage d'une manivelle et d'une tige coulissante

L'assemblage à créer se compose de quatre parties : une base, une tige coulissante, une manivelle et une bielle. Elles sont reliées par quatre articulations.

![](/images/Assembly3_KinematicExample-01.png)

Pièces assemblées : la base (ambre), la tige coulissante (bleu clair), la manivelle (rouge), la bielle (vert)

### Préparer les pièces

Dans cet exemple, toutes les pièces et l'assemblage sont créés dans un seul document.

Les géométries cylindriques des objets sont soit parallèles, soit perpendiculaires. Le reste des formes n'est pas pertinent pour cet exemple, à moins qu'il n'y ait des collisions. En gardant cela à l'esprit, vous pouvez modéliser vos propres objets ou les créer à l'aide du code Python ci-dessous. Le code créera un nouveau document avec les quatre objets (plus simples que dans les images). Il suffit de copier-coller les lignes suivantes dans la [console Python](/Python_console/fr "Python console/fr") :

```
import FreeCAD as App
import FreeCADGui as Gui
import Part

doc = App.newDocument()

box1 = Part.makeBox(140, 40, 7, App.Vector(0, -20, 0))
cyl1 = Part.makeCylinder(4, 8, App.Vector(120, 0, 7))
box2 = Part.makeBox(20, 12, 10, App.Vector(5, -6, 7))
cyl2 = Part.makeCylinder(6, 20, App.Vector(25, 0, 17), App.Vector(-1, 0, 0))
cyl3 = Part.makeCylinder(4, 20, App.Vector(25, 0, 17), App.Vector(-1, 0, 0))
shape = box1.fuse([cyl1, box2, cyl2]).removeSplitter().cut(cyl3)
base = doc.addObject("Part::Feature", "Base")
base.Shape = shape

box1 = Part.makeBox(4, 12, 12, App.Vector(-12, -6, 0))
box2 = Part.makeBox(14, 12, 4, App.Vector(-8, -6, 0))
cyl1 = Part.makeCylinder(4, 8, App.Vector(0, 0, 4))
cyl2 = Part.makeCylinder(4, 88, App.Vector(-12, 0, 6),App.Vector(-1, 0, 0))
shape = box1.fuse([box2, cyl1, cyl2]).removeSplitter()
slider_rod = doc.addObject("Part::Feature", "SliderRod")
slider_rod.Shape = shape
slider_rod.Placement.Base = App.Vector(100, -40, 0)

cyl1 = Part.makeCylinder(7.5, 4)
box1 = Part.makeBox(15, 30, 4, App.Vector(-7.5, 0, 0))
cyl2 = Part.makeCylinder(7.5, 4, App.Vector(0, 30, 0))
cyl3 = Part.makeCylinder(4, 6, App.Vector(0, 30, 4))
cyl4 = Part.makeCylinder(4, 4)
shape = cyl1.fuse([box1, cyl2]).removeSplitter().fuse(cyl3).cut(cyl4)
crank = doc.addObject("Part::Feature", "Crank")
crank.Shape = shape
crank.Placement.Base = App.Vector(125, -70, 0)

cyl1 = Part.makeCylinder(6, 4)
box1 = Part.makeBox(50, 12, 4, App.Vector(0, -6, 0))
cyl2 = Part.makeCylinder(6, 4, App.Vector(50, 0, 0))
cyl3 = Part.makeCylinder(4, 4)
cyl4 = Part.makeCylinder(4, 4, App.Vector(50, 0, 0))
shape = cyl1.fuse([box1, cyl2]).removeSplitter().cut(cyl3.fuse(cyl4))
connecting_rod = doc.addObject("Part::Feature", "ConnectingRod")
connecting_rod.Shape = shape
connecting_rod.Placement.Base = App.Vector(25, -70, 0)

mat = base.ViewObject.ShapeAppearance[0]
mat.DiffuseColor = (0.80, 0.60, 0.15, 0.0)
base.ViewObject.ShapeAppearance = (mat,)

mat = slider_rod.ViewObject.ShapeAppearance[0]
mat.DiffuseColor = (0.55, 0.70, 0.70, 0.0)
slider_rod.ViewObject.ShapeAppearance = (mat,)

mat = crank.ViewObject.ShapeAppearance[0]
mat.DiffuseColor = (0.70, 0.30, 0.20, 0.0)
crank.ViewObject.ShapeAppearance = (mat,)

mat = connecting_rod.ViewObject.ShapeAppearance[0]
mat.DiffuseColor = (0.55, 0.70, 0.0, 0.0)
connecting_rod.ViewObject.ShapeAppearance = (mat,)

doc.recompute()
view = Gui.ActiveDocument.ActiveView
view.viewIsometric()
view.fitAll()

```

### Ajouter un assemblage

La commande ![](/images/Assembly_CreateAssembly.svg) [Assemblage](/Assembly_CreateAssembly/fr "Assembly CreateAssembly/fr") permet d'ajouter un assemblage au document.

![](/images/Assembly_KinematicExample-01.png)

Arborescence des pièces et des assemblages

### Déplacer les pièces dans l'assemblage

Dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"), glissez et déposez les pièces sur l'objet Assemblage. Elles peuvent maintenant être traitées par le solveur de l'assemblage.

![](/images/Assembly_KinematicExample-02.png)

Les pièces sont maintenant dans le conteneur d'assemblage

### Fixer une pièce

Pour maintenir l'assemblage dans la position souhaitée, la base doit être verrouillée ou fixée (en anglais grounded). Sélectionnez la base dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou dans la [vue 3D](/3D_view/fr "3D view/fr") et utilisez la commande ![](/images/Assembly_ToggleGrounded.svg) [Activer/désactiver le blocage](/Assembly_ToggleGrounded/fr "Assembly ToggleGrounded/fr"). Cette commande fixe la position de la base par rapport au système de coordonnées local (LCS) du conteneur Assembly. Un objet GroundedJoint est ajouté au conteneur Joints.

![](/images/Assembly_KinematicExample-03.png)
![](/images/Button_right.svg)
![](/images/Assembly_KinematicExample-04.png)

Développez le conteneur Joints pour trouver l'objet GroundedJoint

### Alternative : insérer un lien

Au lieu des deux étapes mentionnées ci-dessus, il est également possible d'utiliser la commande ![](/images/Assembly_InsertLink.svg) [Insérer un composant](/Assembly_InsertLink/fr "Assembly InsertLink/fr") pour placer des objets à l'intérieur d'un assemblage. Le premier objet devient automatiquement la partie fixée. Il faut donc commencer par l'objet Base. La commande crée des liens et les objets d'origine reste en dehors de l'assemblage. Pour éviter toute confusion, il est conseillé de les rendre invisibles.

### Appliquer des liaisons

Une liaison relie exactement deux éléments de pièces différentes. Ils peuvent être sélectionnés avant que la commande de la liaison souhaitée ne soit lancée (tout nombre d'éléments sélectionnés autre que deux entraîne une sélection vide).  
Les éléments définissent la position et l'orientation d'un LCS représenté par un cercle rempli sur le plan local XY et trois lignes le long des axes locaux X (rouge), Y (vert) et Z (bleu).

- Une liaison pivot entre la base et la manivelle

![](/images/Assembly_KinematicExample-05.png)
![](/images/Button_right.svg)
![](/images/Assembly_KinematicExample-06.png)

Éléments sélectionnés + ![](/images/Assembly_CreateJointRevolute.svg) [Créer une liaison pivot](/Assembly_CreateJointRevolute/fr "Assembly CreateJointRevolute/fr") → manivelle réarrangée

Déplacez la **manivelle** à l'aide du bouton gauche de la souris. Seule une rotation autour du pivot doit être possible.

- Une liaison glissière glissant entre la base et la tige coulissante

![](/images/Assembly_KinematicExample-07.png)
![](/images/Button_right.svg)
![](/images/Assembly_KinematicExample-08.png)

Éléments sélectionnés + ![](/images/Assembly_CreateJointSlider.svg) [Créer une liaison glissière](/Assembly_CreateJointSlider/fr "Assembly CreateJointSlider/fr") → tige coulissante réarrangée

Déplacez la **tige coulissante** à l'aide du bouton gauche de la souris. Seul un déplacement le long de sa ligne centrale devrait être possible.

- Une liaison pivot entre la manivelle et la bielle

![](/images/Assembly_KinematicExample-09.png)
![](/images/Button_right.svg)
![](/images/Assembly_KinematicExample-10.png)

Éléments sélectionnés + ![](/images/Assembly_CreateJointRevolute.svg) [Créer une liaison pivot](/Assembly_CreateJointRevolute/fr "Assembly CreateJointRevolute/fr") → bielle réarrangée

Déplacez la **bielle** à l'aide du bouton gauche de la souris. Seule une rotation autour du pivot doit être possible.

![](/images/Assembly_KinematicExample-11.png)
![](/images/Button_right.svg)
![](/images/Assembly_KinematicExample-12.png)

S'il y a plusieurs joints dans une ligne, nous devons aider le solveur à trouver une solution raisonnable.  
Si nécessaire, cliquez et faites glisser les pièces vers une position plus facile à calculer.

- Une liaison pivot glissant entre la bielle et la tige coulissante

![](/images/Assembly_KinematicExample-13.png)
![](/images/Button_right.svg)
![](/images/Assembly_KinematicExample-14.png)

Éléments sélectionnés + ![](/images/Assembly_CreateJointCylindrical.svg) [Créer une liaison pivot glissant](/Assembly_CreateJointCylindrical/fr "Assembly CreateJointCylindrical/fr") → assemblage terminé

Dans l'assemblage terminé, utilisez le pointeur de la souris pour faire glisser les pièces en fonction des liaisons utilisées.

#### Remarque

L'axe de la tige coulissante est orienté de manière redondante. Son axe central est parallèle à l'axe de la base par l'intermédiaire de la chaîne cinématique allant de la base à la manivelle et à la bielle, c'est-à-dire que son axe Z local ne peut pivoter autour d'aucun axe X ou Y. L'articulation du coulisseau empêche également la rotation de son axe Z autour de deux axes locaux. L'articulation coulissante empêche également la rotation de son axe Z autour de deux axes locaux, ce qui se traduit par deux degrés de liberté contraints de manière redondante. Une articulation cylindrique à la place de l'articulation coulissante ne bloquerait qu'une rotation, ce qui se traduirait par un seul degré de liberté contraint de manière redondante.

### Contrôler la manivelle

Pour contrôler la disposition de l'assemblage par l'angle entre la base et la manivelle, nous devons remplacer l'articulation à rotule entre les deux par une articulation fixe. Pour contrôler la position de l'assemblage par l'angle entre la base et la manivelle, nous devons transformer la liaison pivot en liaison fixe. Pour ce faire, double-cliquez sur l'objet Pivot dans l'arborescence. Dans la fenêtre de dialogue, changez la valeur Pivot en Fixe et modifiez la valeur de la rotation comme vous le souhaitez (le mouvement doit suivre l'action de la molette de la souris).

Remarquez qu'un changement de type de liaison modifie l'étiquette de la liaison mais pas son nom. Dans ce cas, l'étiquette est remplacée par "Fixed".

Pour animer l'assemblage, nous pouvons modifier la rotation (Offset1.Angle) de la liaison fixe avec du code Python. Il suffit de copier-coller les lignes suivantes dans la console Python :

```
import math
import FreeCAD as App
import FreeCADGui as Gui

actuator = App.ActiveDocument.getObjectsByLabel("Fixed")[0]

for angle in range(0, 361, 10):
    # A full rotation of the Crank in steps of 10°
    actuator.Offset1.Rotation.Angle = math.radians(angle)
    App.ActiveDocument.recompute()
    Gui.updateGui()

```

La fin de l'intervalle doit être supérieure à 360 pour que cet angle soit également considéré comme un résultat valide.

## Exemple d'un joint de Cardan

![](/images/Assembly_UniversalJointExample-01.png) Cet exemple est temporaire et pourra être supprimé lorsque des descriptions/tutoriels appropriés seront disponibles.

### Assemblage d'un joint de Cardan

![](/images/Assembly_UniversalJointExample-01.png)

Dans cet exemple, un [joint de Cardan](https://fr.wikipedia.org/wiki/Joint_de_Cardan) est créé.

L'assemblage se compose de trois éléments solides : deux fourches identiques et une croix. Deux éléments non solides supplémentaires, Axle1 et Axle2, représentant les arbres coudés, sont également nécessaires. Les arbres et les éléments solides sont reliés par plusieurs liaisons.

### Préparer les pièces

Dans cet exemple, toutes les pièces et l'assemblage sont créés dans un seul document.

Le code Python ci-dessous créera un nouveau document avec quatre objets (seulement 1 fourche). Il suffit de copier-coller les lignes suivantes dans la [console Python](/Python_console/fr "Python console/fr") :

```
import math
import FreeCAD as App
import FreeCADGui as Gui
import Part

doc = App.newDocument()

axle1 = doc.addObject("Part::Line", "Axle1")
axle1.X2 = -80
axle1.Y2 = 0
axle1.Z2 = 0

axle2 = doc.addObject("Part::Line", "Axle2")
axle2.X2 = 80
axle2.Y2 = 0
axle2.Z2 = 0
axle2.Placement.Rotation.Angle = math.radians(20)

sph1 = Part.makeSphere(50, App.Vector(0, 0, 0), App.Vector(-1, 0, 0), 0, 90, 360)
box1 = Part.makeBox(50, 40, 80, App.Vector(-50, -20, -40))
cyl1 = Part.makeCylinder(20, 80, App.Vector(0, 0, -40))
cyl2 = Part.makeCylinder(20, 80, App.Vector(0, 0, 0), App.Vector(-1, 0, 0))
cyl3 = Part.makeCylinder(30, 60, App.Vector(0, -30, 0), App.Vector(0, 1, 0))
box2 = Part.makeBox(30, 60, 60, App.Vector(0, -30, -30))
cyl4 = Part.makeCylinder(15, 80, App.Vector(0, 0, -40))
cyl5 = Part.makeCylinder(15, 80, App.Vector(0, 0, 0), App.Vector(-1, 0, 0))
shape = sph1.common(box1).fuse([cyl1, cyl2]).cut(cyl3.fuse([box2, cyl4, cyl5]))
fork = doc.addObject("Part::Feature", "Fork")
fork.Shape = shape.removeSplitter()
fork.Placement.Base = App.Vector(0, 100, 0)

cyl1 = Part.makeCylinder(15, 80, App.Vector(0, 0, -40))
cyl2 = Part.makeCylinder(15, 80, App.Vector(0, -40, 0), App.Vector(0, 1, 0))
shape = cyl1.fuse([cyl2])
cross = doc.addObject("Part::Feature", "Cross")
cross.Shape = shape.removeSplitter()
cross.Placement.Base = App.Vector(70, 100, 0)

mat = fork.ViewObject.ShapeAppearance[0]
mat.DiffuseColor = (0.80, 0.60, 0.15, 0.0)
fork.ViewObject.ShapeAppearance = (mat,)

mat = cross.ViewObject.ShapeAppearance[0]
mat.DiffuseColor = (0.55, 0.70, 0.70, 0.0)
cross.ViewObject.ShapeAppearance = (mat,)

doc.recompute()
view = Gui.ActiveDocument.ActiveView
view.viewIsometric()
view.fitAll()

```

### Changer l'angle des arbres

L'angle entre les arbres est fixé à 20°. Si l'angle doit être modifié, Axle2 est sélectionné et sa propriété Placement.Angle est ajustée. Cette propriété doit être modifiée avant que Axle2 ne soit déplacé dans l'assemblage.

Attention : les pièces peuvent entrer en collision si l'angle est trop grand.

### Ajouter un assemblage

La commande ![](/images/Assembly_CreateAssembly.svg) [Assemblage](/Assembly_CreateAssembly/fr "Assembly CreateAssembly/fr") permet d'ajouter un assemblage au document.

### Déplacer les arbres dans l'assemblage

Dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"), glisser-déposer les arbres sur l'objet Assembly.

### Bloquer les arbres

Sélectionnez les deux arbres dans l'arborescence et utilisez l'outil ![](/images/Assembly_ToggleGrounded.svg) [Bascule du blocage](/Assembly_ToggleGrounded/fr "Assembly ToggleGrounded/fr").

### Déplacer les pièces dans l'assemblage

Pour les autres objets, nous utiliserons l'outil ![](/images/Assembly_InsertLink.svg) [Insérer un composant](/Assembly_InsertLink/fr "Assembly InsertLink/fr") :

1. Lancez l'outil.
2. Dans la fenêtre de dialogue qui s'ouvre, cliquez une fois sur l'objet Cross et deux fois sur l'objet Fork.
3. Appuyez sur le bouton OK.
4. Rendre invisible les objets extérieurs à l'assemblage.
5. Si les objets à l'intérieur de l'assemblage se chevauchent trop, vous pouvez les faire glisser vers une nouvelle position.

### Appliquer des liaisons

- Une liaison pivot entre Axle1 et Fork001

![](/images/Assembly_UniversalJointExample-02.png)
![](/images/Button_right.svg)
![](/images/Assembly_UniversalJointExample-03.png)

Éléments sélectionnés + ![](/images/Assembly_CreateJointRevolute.svg) [Créer une liaison pivot](/Assembly_CreateJointRevolute/fr "Assembly CreateJointRevolute/fr") → + Décalage de +40mm ou -40mm → Fork001 réarrangé

Si vous lancez d'abord l'outil, puis sélectionnez les éléments, vous pouvez cliquer à proximité du bonne extrémité d'Axle1 pour éviter d'avoir à saisir un décalage.

- Une liaison pivot glissant entre Fork001 et Cross001

![](/images/Assembly_UniversalJointExample-04.png)
![](/images/Button_right.svg)
![](/images/Assembly_UniversalJointExample-05.png)

Éléments sélectionnés + ![](/images/Assembly_CreateJointCylindrical.svg) [Créer une liaison pivot glissant](/Assembly_CreateJointCylindrical/fr "Assembly CreateJointCylindrical/fr") → Cross001 réarrangé

- Une liaison pivot glissant entre Axle2 et Fork002

![](/images/Assembly_UniversalJointExample-06.png)
![](/images/Button_right.svg)
![](/images/Assembly_UniversalJointExample-07.png)

Éléments sélectionnés + ![](/images/Assembly_CreateJointCylindrical.svg) [Créer une liaison pivot glissant](/Assembly_CreateJointCylindrical/fr "Assembly CreateJointCylindrical/fr") → Fork002 réarrangé

Si nécessaire, inversez la direction de la liaison en utilisant le bouton ![](/images/Button_sort.svg) dans le panneau des tâches.

- Une liaison pivot glissant entre Cross001 et Fork002

![](/images/Assembly_UniversalJointExample-08.png)
![](/images/Button_right.svg)
![](/images/Assembly_UniversalJointExample-09.png)

Éléments sélectionnés + ![](/images/Assembly_CreateJointCylindrical.svg) [Créer une liaison pivot glissant](/Assembly_CreateJointCylindrical/fr "Assembly CreateJointCylindrical/fr") → Cross001 et Fork002 réarrangés

### Actionner le joint de Cardan

Le joint de Cardan peut être actionné en déplaçant Fork001 avec la souris gauche.

Si vous voulez vérifier la situation à des angles de rotation distincts, procédez comme suit :

1. Changez la liaison pivot glissant entre Axle1 et Fork001 en une liaison fixe.
2. Sélectionnez la propriété Offset1.Angle de la liaison fixe et faites tourner la molette de la souris.
3. Le joint de Cardan peut être positionné à n'importe quel angle.

## Exemple d'un étau

![](/images/Assembly_ViseExample-01.png) Cet exemple est temporaire et pourra être supprimé lorsque des descriptions/tutoriels appropriés seront disponibles.

### Assemblage d'un étau

![](/images/Assembly_ViseExample-01.png)

Dans cet exemple, un [étau](https://fr.wikipedia.org/wiki/%C3%89tau) est créé.

L'assemblage se compose de trois parties solides : une mâchoire fixe et une mâchoire mobile, ainsi qu'une vis de manœuvre. Un élément supplémentaire non solide, une manivelle, est également nécessaire. La manivelle et les parties solides sont reliées par plusieurs liaisons.

La liaison à vis couple la translation d'une partie d'une liaison à glissière et la rotation d'une partie d'une liaison pivot. La partie vis doit effectuer à la fois un mouvement de translation et de rotation et doit donc faire partie d'une liaison pivot glissant. Pour ce faire, la vis est couplée à la mâchoire mobile par une liaison distance à la manivelle non solide par une liaison parallèle et à la mâchoire fixe par une liaison pivot glissant.

### Préparer les pièces

Dans cet exemple, toutes les pièces et l'assemblage sont créés dans un seul document.

Le code Python ci-dessous crée un nouveau document avec quatre objets. Il suffit de copier-coller les lignes suivantes dans la [console Python](/Python_console/fr "Python console/fr") :

```
import math
import FreeCAD as App
import FreeCADGui as Gui
import Part

doc = App.newDocument()

box1 = Part.makeBox(95, 40, 75, App.Vector(0, -20, -22))
cyl1 = Part.makeCylinder(35, 80, App.Vector(0, -40, 53), App.Vector(0, 1, 0), 90)
box2 = Part.makeBox(20, 80, 30, App.Vector(-20, -40, 58))
cyl2 = Part.makeCylinder(15, 80, App.Vector(-15, -40, 58), App.Vector(0, 1, 0), 90)
box3 = Part.makeBox(5, 80, 15, App.Vector(-20, -40, 58))
box4 = Part.makeBox(35, 24, 24, App.Vector(0, -12, -12))
box5 = Part.makeBox(60, 34, 69, App.Vector(35, -17, -19))
cyl3 = Part.makeCylinder(20, 55, App.Vector(-20, -40, 53), App.Vector(1, 0, 0))
cyl4 = Part.makeCylinder(20, 55, App.Vector(-20, 40, 53), App.Vector(1, 0, 0))
cyl5 = Part.makeCylinder(5, 35, App.Vector(0, 0, 38), App.Vector(1, 0, 0))
box6 = Part.makeBox(7, 88, 15, App.Vector(-22, -44, 75))
box7 = Part.makeBox(95, 90, 10, App.Vector(0, -45, -32))
shape = box1.fuse([cyl1, box2, box6, box7]).cut(cyl2.fuse([box3, cyl3, cyl4, cyl5, box4, box5]))
fixedJaw = doc.addObject("Part::Feature", "FixedJaw")
fixedJaw.Shape = shape.removeSplitter()
fixedJaw.Placement.Rotation.Axis = App.Vector(0, 0, 1)
fixedJaw.Placement.Rotation.Angle = math.radians(180)

box1 = Part.makeBox(35, 40, 75, App.Vector(0, -20, -22))
cyl1 = Part.makeCylinder(35, 80, App.Vector(0, -40, 53), App.Vector(0, 1, 0), 90)
box2 = Part.makeBox(20, 80, 30, App.Vector(-20, -40, 58))
cyl2 = Part.makeCylinder(15, 80, App.Vector(-15, -40, 58), App.Vector(0, 1, 0), 90)
box3 = Part.makeBox(160, 24, 24, App.Vector(-160, -12, -12))
box4 = Part.makeBox(5, 80, 15, App.Vector(-20, -40, 58))
box5 = Part.makeBox(160, 18, 18, App.Vector(-160, -9, -9))
cyl3 = Part.makeCylinder(20, 55, App.Vector(-20, -40, 53), App.Vector(1, 0, 0))
cyl4 = Part.makeCylinder(20, 55, App.Vector(-20, 40, 53), App.Vector(1, 0, 0))
cyl5 = Part.makeCylinder(5, 35, App.Vector(0, 0, 38), App.Vector(1, 0, 0))
box6 = Part.makeBox(7, 88, 15, App.Vector(-22, -44, 75))
shape = box1.fuse([cyl1, box2, box3, box6]).cut(cyl2.fuse([box4, cyl3, cyl4, box5, cyl5]))
movableJaw = doc.addObject("Part::Feature", "MovableJaw")
movableJaw.Shape = shape.removeSplitter()
movableJaw.Placement.Base = App.Vector(150, 100, 0)

cyl1 = Part.makeCylinder(5, 190, App.Vector(0, 0, 0), App.Vector(1, 0, 0))
cyl2 = Part.makeCylinder(10, 20, App.Vector(190, 0, 0), App.Vector(1, 0, 0))
cyl3 = Part.makeCylinder(4, 100, App.Vector(200, 0, -50), App.Vector(0, 0, 1))
shape = cyl1.fuse([cyl2, cyl3])
leverScrew = doc.addObject("Part::Feature", "LeverScrew")
leverScrew.Shape = shape.removeSplitter()
leverScrew.Placement.Base = App.Vector(150, -100, 0)

wire1 = Part.makePolygon([App.Vector(0, 0, 100), App.Vector(0, 0, 0), App.Vector(100, 0, 0)])
crank = doc.addObject("Part::Feature", "Crank")
crank.Shape = wire1
crank.Placement.Base = App.Vector(0, -100, 0)

mat = fixedJaw.ViewObject.ShapeAppearance[0]
mat.DiffuseColor = (0.80, 0.60, 0.15, 0.0)
fixedJaw.ViewObject.ShapeAppearance = (mat,)

mat = movableJaw.ViewObject.ShapeAppearance[0]
mat.DiffuseColor = (0.55, 0.70, 0.70, 0.0)
movableJaw.ViewObject.ShapeAppearance = (mat,)

mat = leverScrew.ViewObject.ShapeAppearance[0]
mat.DiffuseColor = (0.70, 0.30, 0.20, 0.0)
leverScrew.ViewObject.ShapeAppearance = (mat,)

doc.recompute()
view = Gui.ActiveDocument.ActiveView
view.viewIsometric()
view.fitAll()

```

### Ajouter un assemblage

La commande ![](/images/Assembly_CreateAssembly.svg) [Assemblage](/Assembly_CreateAssembly/fr "Assembly CreateAssembly/fr") permet d'ajouter un assemblage au document.

### Déplacer les pièces dans le conteneur d'assemblage

Dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"), glissez et déposez les pièces sur l'objet Assemblage. Elles peuvent maintenant être traitées par le solveur de l'assemblage.

### Fixer une pièce

Pour maintenir l'assemblage dans la position souhaitée, la partie FixedJaw doit être verrouillée/fixée. Sélectionnez FixedJaw dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou dans la [vue 3D](/3D_view/fr "3D view/fr") et utilisez l'outil ![](/images/Assembly_ToggleGrounded.svg) [Bascule du blocage](/Assembly_ToggleGrounded/fr "Assembly ToggleGrounded/fr"). Un objet GroundedJoint est ajouté au conteneur Joints.

### Appliquer des liaisons

- Une liaison pivot entre la mâchoire fixe et la manivelle

![](/images/Assembly_ViseExample-02.png)
![](/images/Button_right.svg)
![](/images/Assembly_ViseExample-03.png)

Éléments sélectionnés + ![](/images/Assembly_CreateJointRevolute.svg) [Créer une liaison pivot](/Assembly_CreateJointRevolute/fr "Assembly CreateJointRevolute/fr") → manivelle réarrangée

- Une liaison glissière entre la mâchoire fixe et la mâchoire mobile

![](/images/Assembly_ViseExample-04.png)
![](/images/Button_right.svg)
![](/images/Assembly_ViseExample-05.png)

Éléments sélectionnés + ![](/images/Assembly_CreateJointSlider.svg) [Créer une liaison glissière](/Assembly_CreateJointSlider/fr "Assembly CreateJointSlider/fr") → mâchoire mobile réarrangée

Réglez la longueur minimale sur -77 mm et la longueur maximale sur -7 mm. Cela limite l'ouverture de l'étau à 70 mm.

Les trois liaisons suivantes sont nécessaires pour forcer la vis de manœuvre à : déplacer la mâchoire mobile, tourner la manivelle et tourner autour de l'axe principal.

- Une liaison distance entre la vis de manœuvre et la mâchoire mobile

![](/images/Assembly_ViseExample-06.png)
![](/images/Button_right.svg)
![](/images/Assembly_ViseExample-07.png)

Éléments sélectionnés + ![](/images/Assembly_CreateJointDistance.svg) [Créer une liaison distance](/Assembly_CreateJointDistance/fr "Assembly CreateJointDistance/fr") → vis de manœuvre réarrangée

Sélectionnez deux faces. Réglez la valeur de la distance sur 20 mm.

- Une liaison parallèle entre la vis de manœuvre et la manivelle

![](/images/Assembly_ViseExample-08.png)
![](/images/Button_right.svg)
![](/images/Assembly_ViseExample-09.png)

Éléments sélectionnés + ![](/images/Assembly_CreateJointParallel.svg) [Créer une liaison parallèle](/Assembly_CreateJointParallel/fr "Assembly CreateJointParallel/fr") → vis de manœuvre réarrangée

- Une liaison pivot glissant entre la vis de manœuvre et la mâchoire fixe

![](/images/Assembly_ViseExample-10.png)
![](/images/Button_right.svg)
![](/images/Assembly_ViseExample-11.png)

Éléments sélectionnés + ![](/images/Assembly_CreateJointCylindrical.svg) [Créer une liaison pivot glissant](/Assembly_CreateJointCylindrical/fr "Assembly CreateJointCylindrical/fr") → vis de manœuvre réarrangée

- Une liaison hélicoïdale entre la mâchoire mobile et la manivelle

![](/images/Assembly_ViseExample-12.png)
![](/images/Button_right.svg)
![](/images/Assembly_ViseExample-13.png)

Éléments sélectionnés (vis de manœuvre invisible) + ![](/images/Assembly_CreateJointScrew.svg) [Créer une liaison hélicoïdale](/Assembly_CreateJointScrew/fr "Assembly CreateJointScrew/fr") → mécanisme complet de l'étau (vis de manœuvre visible)

Si nécessaire, rendre la vis de manœuvre invisible pendant la sélection.

Régler le rayon du pas à 5 mm

### Actionner l'étau

L'étau peut être actionné en déplaçant la manivelle ou la mâchoire mobile à l'aide de la souris gauche.

## Exemple d'un amortisseur

![](/images/Assembly_ShockAbsorberExample-01.png) Cet exemple est temporaire et pourra être supprimé lorsque des descriptions/tutoriels appropriés seront disponibles.

### Assemblage d'un amortisseur

![](/images/Assembly_ShockAbsorberExample.gif)

Dans cet exemple, un [amortisseur](https://fr.wikipedia.org/wiki/Amortisseur) est créé.

L'assemblage se compose de trois éléments solides : un piston, un cylindre et un ressort. Trois autres éléments non solides, deux axes et une tige, sont également nécessaires. Toutes les pièces sont reliées par plusieurs articulations.

La charnière du piston tourne autour de l'axe 2, tandis que la charnière du cylindre se déplace sur un arc de cercle centré sur l'axe 1. La tige non solide est utilisée pour ce mouvement. La longueur de la tige correspond au rayon de l'arc de cercle.

### Préparer les pièces

Le code Python ci-dessous créera un nouveau document avec 6 objets. Créez une nouvelle [macro](/Macros/fr "Macros/fr") et copiez-collez le code ci-dessous dans l'éditeur Python (pas dans la console Python). Puis [exécuter la macro](/Std_DlgMacroExecuteDirect/fr "Std DlgMacroExecuteDirect/fr").

Le code ci-dessous ne peut pas être exécuté à partir de la console Python car le ressort doit être un objet [Part::FeaturePython](/App_FeaturePython/fr "App FeaturePython/fr") défini par une classe avec les fonctions de rappel `execute()` et `onChanged()`. Ce n'est qu'ensuite que sa hauteur peut être modifiée au moyen d'une propriété.

```
import math
import FreeCAD as App
import FreeCADGui as Gui
import Part

doc = App.newDocument()

class Spring():
    def __init__(self, spring):
        spring.addProperty("App::PropertyLength", "Height", "Spring", "Height of the helix").Height = 200.0
        spring.Proxy = self
        spring.ViewObject.Proxy = 0

    def execute(self, spring):
        helix = Part.makeHelix(spring.Height/8.5, spring.Height, 35)
        startPnt = helix.Edges[0].Curve.value(0)
        section = Part.Wire([Part.Circle(startPnt, App.Vector(0, 1, 0), 5).toShape()])
        hel1 = helix.makePipeShell([section], True, True)
        box1 = Part.makeBox(80, 80, 10, App.Vector(-40, -40, -10))
        box2 = Part.makeBox(80, 80, 10, App.Vector(-40, -40, spring.Height))
        shape = hel1.cut(box1).cut(box2)
        spring.Shape = shape

    def onChanged(self, spring, prop):
        if prop == "Height":
            self.execute(spring)

spring = doc.addObject("Part::FeaturePython", "Spring")
Spring(spring)
spring.Placement.Base = App.Vector(0, 100, 0)

axle1 = doc.addObject("Part::Line", "Axle1")
axle1.X2 = 0
axle1.Y2 = 80
axle1.Z2 = 0

axle2 = doc.addObject("Part::Line", "Axle2")
axle2.X2 = 0
axle2.Y2 = 80
axle2.Z2 = 0
axle2.Placement.Base = App.Vector(120, 0, -250)

rod = doc.addObject("Part::Line", "Rod")
rod.X2 = 100
rod.Y2 = 0
rod.Z2 = 0
rod.Placement.Base = App.Vector(0, -50, 0)

cyl1 = Part.makeCylinder(40, 10,App.Vector(0, 0, -5))
tor1 = Part.makeTorus(40, 5)
cyl2 = Part.makeCylinder(45, 5)
box1 = Part.makeBox(30, 10, 30,App.Vector(-15, -5, -35))
cyl3 = Part.makeCylinder(15, 10, App.Vector(0, -5, -35), App.Vector(0, 1, 0))
cyl4 = Part.makeCylinder(40, 5)
cyl5 = Part.makeCylinder(5, 10,App.Vector(0, -5, -35), App.Vector(0, 1, 0))
cyl6 = Part.makeCylinder(5, 130)
cyl7 = Part.makeCylinder(20, 5,App.Vector(0, 0, 130))
shape = cyl1.fuse([tor1,cyl2, box1, cyl3]).cut(cyl4.fuse([cyl5])).fuse([cyl6, cyl7])
piston = doc.addObject("Part::Feature", "Piston")
piston.Shape = shape.removeSplitter()
piston.Placement.Base = App.Vector(200, 100, -200)

cyl1 = Part.makeCylinder(40, 10,App.Vector(0, 0, -5))
tor1 = Part.makeTorus(40, 5)
cyl2 = Part.makeCylinder(45, 5)
box1 = Part.makeBox(30, 10, 30,App.Vector(-15, -5, -35))
cyl3 = Part.makeCylinder(15, 10,App.Vector(0, -5, -35), App.Vector(0, 1, 0))
cyl4 = Part.makeCylinder(40, 5)
cyl5 = Part.makeCylinder(5, 10,App.Vector(0, -5, -35), App.Vector(0, 1, 0))
cyl6 = Part.makeCylinder(25, 130)
tor2 = Part.makeTorus(20, 5,App.Vector(0, 0, 130))
cyl7 = Part.makeCylinder(20, 135)
cyl8 = Part.makeCylinder(20, 130)
cyl9 = Part.makeCylinder(5, 135)
shape = cyl1.fuse([tor1, cyl2, box1, cyl3]).cut(cyl4.fuse([cyl5])).fuse([cyl6, tor2, cyl7]).cut(cyl8.fuse([cyl9]))
cylinder = doc.addObject("Part::Feature", "Cylinder")
cylinder.Shape = shape.removeSplitter()
cylinder.Placement.Rotation.Axis = App.Vector(0, 1, 0)
cylinder.Placement.Rotation.Angle = math.pi
cylinder.Placement.Base = App.Vector(100, 100, 0)

mat = piston.ViewObject.ShapeAppearance[0]
mat.DiffuseColor = (0.80, 0.60, 0.15, 0.0)
piston.ViewObject.ShapeAppearance = (mat,)

mat = cylinder.ViewObject.ShapeAppearance[0]
mat.DiffuseColor = (0.55, 0.70, 0.70, 0.0)
cylinder.ViewObject.ShapeAppearance = (mat,)

doc.recompute()
view = Gui.ActiveDocument.ActiveView
view.viewIsometric()
view.fitAll()

```

### Ajouter un assemblage

La commande ![](/images/Assembly_CreateAssembly.svg) [Assemblage](/Assembly_CreateAssembly/fr "Assembly CreateAssembly/fr") permet d'ajouter un assemblage au document.

### Déplacer les pièces dans le conteneur d'assemblage

Dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"), glissez et déposez les pièces sur l'objet Assemblage. Elles peuvent maintenant être traitées par le solveur de l'assemblage.

### Fixer les deux axes

Pour maintenir l'assemblage dans la position souhaitée, les deux axes doivent être verrouillés/fixés. Sélectionnez les deux axes dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou dans la [vue 3D](/3D_view/fr "3D view/fr") et utilisez l'outil ![](/images/Assembly_ToggleGrounded.svg) [Bascule du blocage](/Assembly_ToggleGrounded/fr "Assembly ToggleGrounded/fr"). Deux objets GroundedJoint est ajouté au conteneur Joints.

### Appliquer des liaisons

- Une liaison pivot entre l'axe 2 et le piston

![](/images/Assembly_ShockAbsorberExample-02.png)
![](/images/Button_right.svg)
![](/images/Assembly_ShockAbsorberExample-03.png)

![](/images/Assembly_CreateJointRevolute.svg) [Créer une liaison pivot](/Assembly_CreateJointRevolute/fr "Assembly CreateJointRevolute/fr") + Éléments sélectionnés → Piston réarrangé

- Une liaison glissière glissant entre le piston et le cylindre

![](/images/Assembly_ShockAbsorberExample-04.png)
![](/images/Button_right.svg)
![](/images/Assembly_ShockAbsorberExample-05.png)

![](/images/Assembly_CreateJointSlider.svg) [Créer une liaison glissière](/Assembly_CreateJointSlider/fr "Assembly CreateJointSlider/fr") + Éléments sélectionnés → Cylindre réarrangé et déplacé

Faites attention à l'emplacement du système de coordonnées avant de sélectionner une face. Il doit se trouver au centre de chaque face.

Faites glisser le cylindre pour créer une certaine distance entre lui et le piston. Les faces d'appui du ressort doivent être visibles.

- Une liaison distance entre le piston et le cylindre

![](/images/Assembly_ShockAbsorberExample-06A.png)
![](/images/8/8e/List-add.svg)
![](/images/Assembly_ShockAbsorberExample-06B.png)
![](/images/Button_right.svg)
![](/images/Assembly_ShockAbsorberExample-07.png)

![](/images/Assembly_CreateJointDistance.svg) [Créer une liaison distance](/Assembly_CreateJointDistance/fr "Assembly CreateJointDistance/fr") + Faces sélectionnées → Distance du cylindre réarrangée et fixée à 200 mm

Réglez la valeur de la distance à 200 mm.

Les deux liaisons suivantes sont nécessaires pour forcer la charnière du cylindre à se déplacer sur un arc de cercle.

- Une liaison pivot glissant entre l'axe 1 et la tige

![](/images/Assembly_ShockAbsorberExample-08.png)
![](/images/Button_right.svg)
![](/images/Assembly_ShockAbsorberExample-09.png)

![](/images/Assembly_CreateJointCylindrical.svg) [Créer une liaison pivot glissant](/Assembly_CreateJointCylindrical/fr "Assembly CreateJointCylindrical/fr") + Éléments sélectionnés → Tige réarrangée

Assurez-vous que l'axe Z du système de coordonnées (bleu) est perpendiculaire à la tige en sélectionnant un point d'extrémité.

- Une liaison pivot entre la tige et le cylindre

![](/images/Assembly_ShockAbsorberExample-10.png)
![](/images/Button_right.svg)
![](/images/Assembly_ShockAbsorberExample-11.png)

![](/images/Assembly_CreateJointRevolute.svg) [Créer une liaison pivot](/Assembly_CreateJointRevolute/fr "Assembly CreateJointRevolute/fr") + Éléments sélectionnés → Cylindre réarrangé

Assurez-vous à nouveau que l'axe Z du système de coordonnées (bleu) est perpendiculaire à la tige.

Il se peut que vous rencontriez des problèmes avec cette liaison. Si c'est le cas, essayez ce qui suit :

1. Supprimez la liaison.
2. Passez à la [vue de face](/Std_ViewFront/fr "Std ViewFront/fr").
3. Faites pivoter l'assemblage (en faisant glisser le piston) et faites pivoter la tige de manière à ce que le centre du trou de la charnière du cylindre se trouve sur la tige.
4. Créez à nouveau la liaison.

Les deux liaisons suivantes sont nécessaires pour fixer le ressort à la face d'appui.

- Une liaison parallèle entre le ressort et le piston

![](/images/Assembly_ShockAbsorberExample-12A.png)
![](/images/8/8e/List-add.svg)
![](/images/Assembly_ShockAbsorberExample-12B.png)
![](/images/Button_right.svg)
![](/images/Assembly_ShockAbsorberExample-13.png)

![](/images/Assembly_CreateJointParallel.svg) [Créer une liaison parallèle](/Assembly_CreateJointParallel/fr "Assembly CreateJointParallel/fr") + Faces sélectionnées → Ressort réarrangé

Sélectionnez le centre de la face d'appui du piston et le centre de la face inférieure du ressort. Maintenez la valeur de la distance à 0.

- Une liaison fixe entre le ressort et le piston

![](/images/Assembly_ShockAbsorberExample-14A.png)
![](/images/8/8e/List-add.svg)
![](/images/Assembly_ShockAbsorberExample-14B.png)
![](/images/Button_right.svg)
![](/images/Assembly_ShockAbsorberExample-15.png)

![](/images/Assembly_CreateJointFixed.svg) [Créer une liaison fixe](/Assembly_CreateJointFixed/fr "Assembly CreateJointFixed/fr") + Éléments sélectionnés → Ressort réarrangé

Sélectionnez le sommet inférieur du joint du cylindre dans le piston et le sommet du coin dans le ressort.

- Relier la propriété de la distance de la liaison **Distance** à la propriété **Hauteur** du ressort à l'aide d'une [expression](/Expressions/fr "Expressions/fr") :

1. Sélectionnez le ressort dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
2. Sélectionnez l'icône bleue ![](/images/Bound-expression.svg) dans le champ de propriété Height.
3. Entrez dans l'éditeur d'expression : `<<Distance>>.Distance`

### Actionner l'armortisseur

Pour ce faire, double-cliquez sur l'objet Distance dans l'arborescence et modifiez sa propriété Distance. Recalculez le document. Le ressort change de longueur.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly_Workbench/fr&oldid=1550183>"
