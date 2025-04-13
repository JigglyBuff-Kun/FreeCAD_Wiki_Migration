---
title: Draft Hachures
---
|  |
| --- |
| Draft Hachures |
| Emplacement du menu |
| Draft : Formes → Hachures  BIM : Annotation → Hachures |
| Ateliers |
| [Draft](/Draft_Workbench/fr "Draft Workbench/fr"), [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| H A |
| Introduit dans la version |
| 0.20 |
| Voir aussi |
| [Draft Motif](/Draft_Pattern/fr "Draft Pattern/fr") |
|  |

## Description

La commande ![](/images/Draft_Hatch.svg) **Draft Hachures** crée des hachures sur les faces planes d'un objet sélectionné.

## Utilisation

1. Sélectionner un objet avec des faces. Seules les faces planes de l'objet seront hachurées.
2. Il existe plusieurs façons de lancer la commande :
   * Appuyer sur le bouton ![](/images/Draft_Hatch.svg) Hachures.
   * [Draft](/Draft_Workbench/fr "Draft Workbench/fr") : sélectionner l'option **Formes → ![](/images/Draft_Hatch.svg) Hachures** du menu.
   * [BIM](/BIM_Workbench/fr "BIM Workbench/fr") : sélectionner l'option **Annotation → ![](/images/Draft_Hatch.svg) Hachures** du menu.
   * Utiliser le raccourci clavier : H puis A.
3. Le panneau de tâches **Hachure** s'ouvre. Voir [Options](#Options) pour plus d'informations.
4. Appuyer sur le bouton OK pour terminer la commande.

## Options

* Appuyer sur le bouton ... pour sélectionner un **Fichier PAT**. Voir [Remarques](#Remarques).
* Sélectionner un motif **Motif** dans le fichier.
* Spécifier une échelle **Échelle** pour le motif.
* Spécifier une **Rotation** pour le motif.
* Appuyer sur Échap ou sur le bouton Annuler pour interrompre la commande.

## Alignement des motifs

Lorsque le motif de hachures d'une face est calculé, il est temporairement traduit dans le plan XY global par défaut. Pour une face avec des bords droits, le premier bord droit détermine comment cela se passe. Le premier point de cette arête est placé sur l'origine, et l'arête elle-même est alignée avec l'axe X. Si vous créez une [Draft Polyligne](/Draft_Wire/fr "Draft Wire/fr") dans cette optique, vous pouvez contrôler la façon dont le motif de hachures est aligné avec le contour de la face.

Si toutes les faces de l'objet sélectionné se trouvent sur le plan XY global, vous pouvez désactiver ce comportement par défaut en définissant la propriété Données**Translate** de l'ébauche de hachure sur `false`. Le motif de hachures est alors aligné sur l'origine et l'axe X du système de coordonnées global. Pour les faces du plan XY à bords droits, la propriété Données**Translate** peut être utilisée pour basculer entre les motifs absolus (à gauche dans l'image) et relatifs (à droite dans l'image).

![](/images/Draft_Hatch_alignment.png)

Deux Draft Polylignes avec des hachures.  
Les polylignes ont été créées dans une direction sens horaire en partant du point inférieur gauche.  
Pour la hachure à gauche, la propriété Translate est réglée sur false.  
Pour la hachure à droite, elle est réglée sur true.

## Remarques

* Pour l'instant, le conseil est de télécharger un fichier PAT. Vous pouvez en trouver beaucoup en ligne. Vous pouvez par exemple faire une recherche sur le web pour acad.pat ou acadiso.pat.
* Un petit fichier PAT est installé avec FreeCAD : <program\_folder>/data/Mod/TechDraw/PAT/FCPAT.pat, où <program\_folder> est le dossier du programme FreeCAD :
  + Sous Linux c'est généralement /usr/share/freecad.
  + Sous Windows, il s'agit généralement de C:\Program Files\FreeCAD.
  + Sous macOS, il s'agit généralement de /Applications/FreeCAD.
* version 1.0 et précédentes : les motifs avec des lignes en pointillés ne sont pas gérés correctement.

## Préférences

Voir aussi : [Réglage des préférences](/Preferences_Editor/fr "Preferences Editor/fr") et [Draft Préférences](/Draft_Preferences/fr "Draft Preferences/fr").

Les préférences suivantes sont en jeu :

* Fichier PAT : **Outils → Modifier les paramètres... → BaseApp → Preferences → Mod → TechDraw → PAT → FilePattern**.
* Motif : **Outils → Modifier les paramètres... → BaseApp → Preferences → Mod → TechDraw → PAT → NamePattern**.
* Échelle : **Outils → Modifier les paramètres... → BaseApp → Preferences → Mod → Draft → HatchPatternScale**.
* Rotation : **Outils → Modifier les paramètres... → BaseApp → Preferences → Mod → Draft → HatchPatternRotation**.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet Draft Hachures est dérivé d'un [Part Feature](/Part_Feature/fr "Part Feature/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Hatch

* Données**Base** (`Link`) : spécifie l'objet dont les faces sont hachurées.
* Données**File** (`File`) : spécifie le fichier PAT.
* Données**Pattern** (`String`) : spécifie le nom du motif.
* Données**Rotation** (`Angle`) : spécifie la rotation du motif.
* Données**Scale** (`Float`) : spécifie l'échelle du motif.
* Données**Translate** (`Bool`) : indique si les faces sont temporairement translatées dans le plan XY global pendant le processus de hachurage. La valeur `false` peut donner de mauvais résultats pour les faces non XY.

## Script

Voir aussi : [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) et [FreeCAD Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Pour créer des Draft Hachures, utilisez la méthode `make_hatch` du module Draft :

```
hatch = make_hatch(baseobject, filename, pattern, scale, rotation)

```

Exemple :

```
import FreeCAD as App
import Draft

doc = App.newDocument()

rectangle = Draft.make_rectangle(4000, 1000)
rectangle.MakeFace = True
filename = App.getHomePath() + "data/Mod/TechDraw/PAT/FCPAT.pat"
pattern = "Horizontal5"
hatch = Draft.make_hatch(rectangle, filename, pattern, scale=50, rotation=45)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Hatch/fr&oldid=1556573>"