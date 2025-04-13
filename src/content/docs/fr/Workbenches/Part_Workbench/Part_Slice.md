---
title: Part Scinder
---
|  |
| --- |
| Part Scinder |
| Emplacement du menu |
| Part → Scinder → Scinder vers composé |
| Ateliers |
| [Part](/Part_Workbench/fr "Part Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [Part Fragments booléens](/Part_BooleanFragments/fr "Part BooleanFragments/fr"), [Part OU exclusif](/Part_XOR/fr "Part XOR/fr"), [Part Jointure](/Part_CompJoinFeatures/fr "Part CompJoinFeatures/fr"), [Part Opérations booléennes](/Part_Boolean/fr "Part Boolean/fr") |
|  |

## Description

L'outil ![](/images/Part_Slice.svg) Part Scinder aussi connue sous **Scinder vers composé** est utilisé pour diviser des formes par intersection avec d'autres formes. Par exemple, pour une boîte et un plan, un composé de deux solides est créé.

![](/images/Part_Slice_Demo.png)

Ci-dessus : les pièces ont été déplacées manuellement après l'operation, pour montrer le découpage

Il existe deux commandes pour découper une forme: ![](/images/Part_SliceApart.svg) [Part Séparer/exploser](/Part_SliceApart/fr "Part SliceApart/fr") et ![](/images/Part_Slice.svg) Part Scinder. Elles créent toutes les deux une fonction paramétrique "Slice" (Scinder), qui place les pièces découpées dans un composé. Cependant, ![](/images/Part_SliceApart.svg) [Part Séparer/exploser](/Part_SliceApart/fr "Part SliceApart/fr") fait exploser le composé résultant en objets séparés. "Slice to compound (Scinder vers composé)" est entièrement paramétrique et ne pose aucun problème lorsque le nombre de pièces change. "Slice apart" ne met pas à jour le nombre d'objets lorsque le nombre de pièces change.

La forme finale occupe le même volume que l'original. Mais elle est divisée là où elle est traversée par les autres formes. Les pièces découpées sont placées dans un composé (ou compsolid), de sorte que l'objet semble rester en une seule pièce. Vous devez exploser le composé pour obtenir des pièces individuelles. Si vous souhaitez accéder aux différentes pièces de manière paramétrique, vous pouvez utiliser ![](/images/Part_CompoundFilter.svg) [Part Filtre de composé](/Part_CompoundFilter/fr "Part CompoundFilter/fr") à cette fin. Pour un accès direct utilisez, par exemple, ![](/images/Draft_Downgrade.svg) [Draft Désagréger](/Draft_Downgrade/fr "Draft Downgrade/fr").

L'outil comporte trois modes : "Standard", "Split" (fractionné) et "CompSolid" (composé de solides). Il n'y a pas de formulaire de sélection, ils sont prédéfinis, mais sont accessibles après l'opération au niveau des tranches obtenues.

"Standard" et "Split" diffèrent par l'action de l'outil sur les fils, les coques et les solides composés : pour "Split", ceux-ci sont séparés ; Pour "Standard", ils sont conservés ensemble (on obtient des segments supplémentaires).

Le composé dans les modes "Standard" et "Split" suit la structure de la pièce tranchée.

En mode "CompSolid", la sortie est un composé de solides (ou un composé de composés de solides, si les solides résultants ne sont pas connectés). Un compsolid est un ensemble de solides reliés par des faces ; ils sont liés aux solides, comme les fils sont liés aux bords, et les coques sont liées aux faces; le nom est probablement une phrase abrégée "solide composite".

Le résultat de l'outil est très similaire à ![](/images/Part_BooleanFragments.svg) [Part Fragments booléens](/Part_BooleanFragments/fr "Part BooleanFragments/fr") sauf que les parties de la première forme sont dans le résultat.

## Utilisation

1. Sélectionnez d'abord l'objet à découper, puis certains objets à découper.   
    L'ordre de sélection est important. Les composés avec auto-intersections ne sont pas autorisés (les auto-intersections peuvent parfois être prises en compte en passant le composé à travers ![](/images/Part_BooleanFragments.svg) [Part Fragments booléens](/Part_BooleanFragments/fr "Part BooleanFragments/fr"))
2. Lancez la commande Part Scinder de plusieurs manières :
   * Appuyez sur le bouton ![](/images/Part_Slice.svg) Scinder vers composé dans la barre d'outils Part
   * Utilisez l'entrée **Part → Scinder → Scinder vers composé** depuis le menu

1. Remarque ː Les objets à découper doivent séparer complètement l’objet à découper. Ainsi, un cube ne peut pas être coupé par un fil mais par un plan dérivé d'un fil extrudé, par exemple.

Un objet paramétrique Scinder est créé. Les objets d'origine sont cachés et le résultat de l'intersection est affiché dans la [vue 3D](/3D_view/fr "3D view/fr").

### Arborescence de Scinder

La commande Scinder crée un objet tranché. Dans l'exemple suivant, un cube est découpé en tranches par une face.

La découpe est créée et chaque morceau est réuni dans un composé.

![](/images/Part_SliceTree.png)

## Propriétés

Slice

* Données**Base** : objet à découper.
* Données**Tools** : liste d'objets à découper. (À partir de FreeCAD v0.17.8053, cette propriété n'est pas affichée dans l'éditeur de propriétés et ne peut être accessible qu'avec Python).
* Données**Mode** : "Standard", "Split" (fractionné) ou "CompSolid" (composé de solides). "Split" est la valeur par défaut. Standard et Split diffèrent par l'action de l'outil sur le type d'agrégation des formes : si Split est sélectionné, ceux-ci sont séparés; sinon ils sont conservés ensemble (on obtient alors des segments supplémentaires).
* Données**Tolerance** : valeur "floue". Il s'agit d'une tolérance supplémentaire à appliquer lors de la recherche d'intersections, en plus des tolérances enregistrées dans les formes d'entrée.

̈Remarque : les propriétés sont accessibles sur l'objet interne des tranches, pas sur le niveau de résultat.

## Exemple

### Créer un puzzle

1. Basculez vers l'![](/images/Workbench_Sketcher.svg) [atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr")
   * Créez une esquisse.
   * Dessinez un rectangle qui délimitera la forme générale du puzzle.
   * Fermez l'esquisse.   
     ![](/images/Slice_example_step1.png)
2. Basculez vers l'![](/images/Workbench_Part.svg) [atelier Part](/Part_Workbench/fr "Part Workbench/fr").
   * Sélectionnez l'esquisse et choisissez **Part → ![](/images/Part_MakeFace.svg) [Créer une face](/Part_MakeFace/fr "Part MakeFace/fr")**.  
     ![](/images/Slice_example_step2.png)
3. Revenez à l'![](/images/Workbench_Sketcher.svg) [atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr")
   * Créez une autre esquisse sur le même plan.
   * À l'aide de l'outil polyligne, tracez les lignes qui diviseront le puzzle en morceaux.   
     ![](/images/Slice_example_step3.png)
4. Revenez à l'![](/images/Workbench_Part.svg) [atelier Part](/Part_Workbench/fr "Part Workbench/fr").
   * Sélectionnez l'esquisse de fractionnement et appliquez ![](/images/Part_BooleanFragments.svg) [Part Fragments booléens](/Part_BooleanFragments/fr "Part BooleanFragments/fr"). Cela insérera des sommets où les lignes de l'esquisse de séparation se coupent. Les avoir est essentiel pour que la prochaine étape fonctionne.  
     ![](/images/Slice_example_step4.png)
5. Sélectionnez la face rectangulaire et les fragments booléens de l'esquisse de séparation, puis appliquez ![](/images/Part_Slice.svg) Part Scinder.  
   ![](/images/Slice_example_step5.png)
6. Utilisez ![](/images/Part_ExplodeCompound.svg) [Part Éclater le composé](/Part_ExplodeCompound/fr "Part ExplodeCompound/fr") sur la face découpée, pour séparer le composé fabriqué par Part Scinder en morceaux individuels.

**Remarques :** les étapes 5 et 6 peuvent être effectuées en un seul clic en utilisant ![](/images/Part_SliceApart.svg) [Part Séparer/exploser](/Part_SliceApart/fr "Part SliceApart/fr")

## Remarques

* L'outil a été introduit dans FreeCAD v0.17.8053. FreeCAD doit être compilé avec OCC 6.9.0 ou version ultérieure; Sinon, l'outil n'est pas disponible.
* ̈Les propriétés sont accessibles sur l'objet interne des tranches, pas au niveau du résultat.
* Les objets à scinder doivent séparer complètement l'objet à découper. Ainsi un cube ne peut pas être tranché par un fil mais par un plan dérivé d'un fil extrudé par exemple.
* L'objet tranchant doit passer le contrôle BOP. Voir ![](/images/Part_CheckGeometry.svg) [Part Vérifier la géométrie](/Part_CheckGeometry/fr "Part CheckGeometry/fr").

## Script

L'outil peut être utilisé dans des [macros](/Macros/fr "Macros/fr") et à partir de la console [Python](/Python/fr "Python/fr") en utilisant la fonction suivante :

```
BOPTools.SplitFeatures.makeSlice(name)

```

* Crée une fonction Slice vide. Les propriétés "Base" et "Outils" doivent être attribuées explicitement, par la suite.
* Renvoie l'objet nouvellement créé.

Trancher peut également être appliquée à des formes simples, sans avoir besoin d'un objet de document via :

```
BOPTools.SplitAPI.slice(base_shape, tool_shapes, mode, tolerance = 0.0)

```

Cela peut être utile pour créer des fonctionnalités personnalisées de script Python.

Exemple :

```
import BOPTools.SplitFeatures
j = BOPTools.SplitFeatures.makeSlice(name= 'Slice')
j.Base = FreeCADGui.Selection.getSelection()[0]
j.Tools = FreeCADGui.Selection.getSelection()[1:]

```

L'outil lui-même est implémenté en Python, voir /Mod/Part/BOPTools/SplitFeatures.py ([lien GitHub](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Part/BOPTools/SplitFeatures.py)) là où FreeCAD est installé.

## Tutoriels

* [FreeCad 0.18 Part WB using Slice and Slice Apart](https://www.youtube.com/watch?v=tzHkQaHgrfQ) (en anglais), auteur : Ha Gei

* [FreeCAD Slice und Slice Apart und andere Tricks](https://www.youtube.com/watch?v=JJAL5JmqqKQ) (en allemand), auteur : Ha Gei

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Slice/fr&oldid=1518260>"