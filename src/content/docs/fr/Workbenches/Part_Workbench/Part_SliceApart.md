---
title: Part Séparer/exploser
---
|  |
| --- |
| Part Séparer/exploser |
| Emplacement du menu |
| Part → Scinder → Séparer et exploser |
| Ateliers |
| [Part](/Part_Workbench/fr "Part Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.18 |
| Voir aussi |
| [Part Scinder](/Part_Slice/fr "Part Slice/fr"), [Part Éclater le composé](/Part_ExplodeCompound/fr "Part ExplodeCompound/fr") |
|  |

## Description

Outil pour diviser des formes par intersection avec d'autres formes. Par exemple, pour une boîte et un plan, deux solides sont créés.
![](/images/Part_Slice_Demo.png)

Ci-dessus : les morceaux ont été séparés manuellement par la suite pour révéler le découpage.

Séparer/exploser est identique à ![](/images/Part_Slice.svg) [Part Scinder](/Part_Slice/fr "Part Slice/fr") suivi de ![](/images/Part_ExplodeCompound.svg) [Part Éclater le composé](/Part_ExplodeCompound/fr "Part ExplodeCompound/fr"). Alors que "Slice to compound (Scinder vers composé)" est totalement paramétrique et ne pose aucun problème lorsque le nombre de pièces change, "Slice apart (Séparer/exploser)" ne met pas à jour le nombre d'objets lorsque le nombre de pièces change. Ils créent tous deux la fonction paramétrique Slice, qui place les morceaux scindés dans un composé, mais "Slice apart" fait exploser le composé résultant en objets séparés.

La forme de sortie occupe le même espace que l'original. Mais elle est divisée là où elle croise d'autres formes. Les pièces divisées sont des pièces individuelles.

Veuillez visiter la page [Part Scinder](/Part_Slice/fr "Part Slice/fr") pour plus d'informations.

### Arborescence de Séparer/exploser

La commande Séparer/exploser crée plus que l'objet tranché. Dans l'exemple suivant, un cube est découpé en tranches par une face.

Le tranchage est créé et pour chaque partie de celui-ci, un [Part Filtre de composé](/Part_CompoundFilter/fr "Part CompoundFilter/fr") est créé. Ainsi, la même tranche se produit plusieurs fois sous chaque CompoundFilter (Filtre de composé). Tous ces CompoundFilters sont réunis dans un Compound (Composé).

![](/images/Part_SliceApartTree.png)

## Exemple

* Faire un puzzle : Voir [Part Scinder](/Part_Slice/fr "Part Slice/fr") exemple étapes 1 à 6

## Script

L'outil peut être utilisé dans une [macro](/Macros/fr "Macros/fr") et à partir de la console Python en utilisant la fonction suivante :

```
BOPTools.SplitFeatures.makeSlice(name)

```

Réglez le mode sur **Scinder** pour séparer/exploser

* Crée une fonction Slice vide. Les propriétés "Base" et "Tools" doivent être attribuées explicitement, par la suite.
* Renvoie l'objet nouvellement créé.

Séparer/exploser peut également être appliqué à des formes simples, sans avoir besoin d'un objet document via :

```
BOPTools.SplitAPI.slice(base_shape, tool_shapes, mode, tolerance = 0.0)

```

Cela peut être utile pour créer des fonctionnalités de script personnalisées Python.

Exemple :

```
import BOPTools.SplitFeatures
j = BOPTools.SplitFeatures.makeSlice(name= 'Slice')
j.Base = FreeCADGui.Selection.getSelection()[0]
j.Tools = FreeCADGui.Selection.getSelection()[1:]

```

L'outil lui-même est implémenté en Python, voir /Mod/Part/BOPTools/SplitFeatures.py ([lien GitHub](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Part/BOPTools/SplitFeatures.py)) là où FreeCAD est installé.

## Remarques

Séparer/exploser a été introduit dans FreeCAD v0.18.15506. FreeCAD doit être compilé avec OCC 6.9.0 ou une version ultérieure sinon, l'outil n'est pas disponible.

## Tutoriels vidéo

* <https://www.youtube.com/watch?v=tzHkQaHgrfQ> : FreeCad 0.18 PART WB using SLICE and SLICE APART (en anglais), auteur: Ha Gei

* <https://www.youtube.com/watch?v=JJAL5JmqqKQ> : FreeCAD Slice und Slice Apart und andere Tricks (en allemand), auteur: Ha Gei

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_SliceApart/fr&oldid=1518256>"