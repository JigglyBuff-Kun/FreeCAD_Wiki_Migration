---
title: Solid Sweep
---

|                                                                                                                                                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Balayage solide                                                                                                                                                                                                                                                                                       |
| Description                                                                                                                                                                                                                                                                                           |
| Créé un solide en balayant un profil le long d'une trajectoire. Version macro : 1.0 Date dernière modification : 2011-12-03 Version FreeCAD : Toutes versions Téléchargement : [<https://www.freecadweb.org/wiki/images/6/6d/Macro_Solid_Sweep.png> Icône pour votre barre d'outils] Auteur: Normandc |
| Auteur                                                                                                                                                                                                                                                                                                |
| [Normandc](/User:Normandc "User:Normandc")                                                                                                                                                                                                                                                            |
| Téléchargement                                                                                                                                                                                                                                                                                        |
| [<https://www.freecadweb.org/wiki/images/6/6d/Macro_Solid_Sweep.png> Icône pour votre barre d'outils]                                                                                                                                                                                                 |
| Liens                                                                                                                                                                                                                                                                                                 |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                      |
| Version Macro                                                                                                                                                                                                                                                                                         |
| 1.0                                                                                                                                                                                                                                                                                                   |
| Dernière modification                                                                                                                                                                                                                                                                                 |
| 2011-12-03                                                                                                                                                                                                                                                                                            |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                    |
| Toutes versions                                                                                                                                                                                                                                                                                       |
| Raccourci clavier                                                                                                                                                                                                                                                                                     |
| _None_                                                                                                                                                                                                                                                                                                |
| Voir aussi                                                                                                                                                                                                                                                                                            |
| _None_                                                                                                                                                                                                                                                                                                |
|                                                                                                                                                                                                                                                                                                       |
|                                                                                                                                                                                                                                                                                                       |

## Description

Cette macro créé un solide en balayant un profil le long d'une trajectoire, les deux éléments ayant précédemment été sélectionnés dans la vue 3D. Les éléments 2D peuvent être créés à l'aide des outils existants de l'interface graphique de FreeCAD.

Il est à noter que le solide généré ne sera **pas** paramétrique. Si vous décidez de modifier le profil ou la trajectoire, vous devrez exécuter la macro à nouveau.

![Quelques exemples de balayages utilisant une même section oblongue et trois types de trajectoires.](/images/Solid_sweep.png)

## Utilisation

1. Créez deux éléments 2D, un pour la section et un pour la trajectoire, des types répertoriés ci-dessous.
2. Sélectionnez, soit dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") soit dans [Vue 3D](/3D_view/fr "3D view/fr") (**L'ordre est important!**):
   1. La trajectoire
   2. Puis le profil
3. Ouvrez le [Gestionnaire de macros](/Macros/fr "Macros/fr")
4. Sélectionnez la macro **Solid Sweep**
5. Cliquez sur Execute

**Résultat:** un **Balayage** sera créé dans l'arborescence du Projet.

## Éléments 2D supportés

- Filaires

* ![](/images/Sketcher_NewSketch.svg) [Esquisses](/Sketcher_Workbench/fr "Sketcher Workbench/fr")
* ![](/images/Draft_BSpline.svg) [BSplines](/Draft_BSpline/fr "Draft BSpline/fr")

- Primitives 2D depuis le menu _Pièce → ![](/images/Part_Primitives.svg) [Créer des primitives](/Part_Primitives/fr "Part Primitives/fr")..._ (cercle, hélice)

## Conseils

- La section doit être un profil fermé sinon la forme résultante ne sera pas solide.
- La section n'a pas besoin d'être située sur la trajectoire, mais il est préférable qu'elle lui soit normale (perpendiculaire).
- La trajectoire peut indifféremment être un profil ouvert ou fermé (cercle, ou une suite de segments de lignes et d'arcs) mais tous les éléments doivent être tangents, sinon le résultat pourrait être inattendu. Par exemple, une trajectoire avec des coins carrés comme un rectangle ne produira pas un solide.
- S'il y a un nœud dans la forme résultante, modifiez la macro et changez la valeur _isFrenet_ à 0 (zéro), puis essayez à nouveau.
- Réglez la variable _makeSolid_ à 0 (zéro) pour obtenir une forme non solide faite de surfaces avec des extrémités ouvertes.

## Le script

ToolBar Icon ![](/images/Macro_Solid_Sweep.png)

**Macro_Solid_Sweep.FCMacro**

```
import Part, FreeCAD, math, PartGui, FreeCADGui
from FreeCAD import Base

# get the selected objects, with first selection for the trajectory and second for the section
s = FreeCADGui.Selection.getSelection()
try:
     shape1=s[0].Shape
     shape2=s[1].Shape
except:
     print "Wrong selection"

traj = Part.Wire([shape1])
section = Part.Wire([shape2])

# create Part objec in the current document
myObject=App.ActiveDocument.addObject("Part::Feature","Sweep")

# variable makeSolid = 1 to create solid, 0 to create surfaces
makeSolid = True #1
isFrenet = True #1

# create a 3D shape and assigh it to the current document
Sweep = Part.Wire(traj).makePipeShell([section],makeSolid,isFrenet)
myObject.Shape = Sweep
```

## Remerciements

Merci à [Wmayer](/User:Wmayer "User:Wmayer") sans l'aide de qui je n'aurais pu rédiger ce script.

Deux exemples d'utilisation peuvent être consultés dans [cette discussion du forum (en anglais)](http://forum.freecadweb.org/viewtopic.php?f=8&t=1222&start=50#p11120), ainsi que des liens de téléchargement des fichiers FCStd. En utilisant une hélice comme trajectoire, un balayage solide peut être utilisé pour créer un filet de vis.

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Solid_Sweep/fr&oldid=808096>"
