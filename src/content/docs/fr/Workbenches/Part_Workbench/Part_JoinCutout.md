---
title: Part Découper
---
|  |
| --- |
| Part Découper |
| Emplacement du menu |
| Part → Joindre → Découper pour un objet |
| Ateliers |
| [Part](/Part_Workbench/fr "Part Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.16 |
| Voir aussi |
| [Part Connecter](/Part_JoinConnect/fr "Part JoinConnect/fr"), [Part Intégrer](/Part_JoinEmbed/fr "Part JoinEmbed/fr"), [Part Opération booléenne](/Part_Boolean/fr "Part Boolean/fr"), [Part Évider](/Part_Thickness/fr "Part Thickness/fr") |
|  |

## Description

L'outil ![](/images/Part_JoinCutout.svg) **Part Découper** crée une découpe dans un objet avec des parois (par exemple, un tuyau) pour s'adapter à un autre objet à parois.

![](/images/JoinFeatures_Cutout.png)

## Utilisation

1. Sélectionnez d'abord l'objet de base, puis l'objet destiné à définir la découpe. L'ordre de sélection est important. Il suffit de sélectionner une sous forme de chaque objet (par exemple les faces).
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Part_JoinCutout.svg) Découper pour un objet.
   * Sélectionnez l'option **Part → Joindre → ![](/images/Part_JoinCutout.svg) Découper pour un objet** du menu.
3. Un objet Part JoinFeature est créé, avec un mode défini sur "Cutout". Les objets originaux sont cachés et le résultat de la découpe est affiché dans la [vue 3D](/3D_view/fr "3D view/fr").

## Propriétés

Base

* Données**Base** : référence à l'objet de base (celui dans lequel on veut faire la découpe). L'objet doit être un solide unique.
* Données**Tool** : référence à l'objet Outil (l'objet à utiliser pour la découpe). L'objet peut être un solide unique ou un [composé valide](/Part_Compound/fr "Part Compound/fr") de solides.
* Données**Mode** : le mode d'opération est "Cutout" (changement qui transformera l'outil en un autre Part\_JoinXXX). La valeur "bypass" peut être utilisée pour désactiver temporairement les longs calculs (un composé de la base et de l'outil sera créé, ce qui est une opération rapide).
* Données**Refine** : définit s'il faut appliquer l'opération [Part Affiner la forme](/Part_RefineShape/fr "Part RefineShape/fr") ou non, à la forme finale. La valeur par défaut est déterminée par la case à cocher "Affiner automatiquement la forme après l'opération booléenne" dans les préférences de PartDesign. Lorsque la propriété Mode est à "bypass", Affiner est ignoré (jamais appliqué).

## Exemple

1. Créez un tuyau en appliquant un [évidement](/Part_Thickness/fr "Part Thickness/fr") à un [cylindre](/Part_Cylinder/fr "Part Cylinder/fr") :  
   ![](/images/JoinFeatures_Example_step1.png)
2. Créez un autre tuyau de plus petit diamètre et placez-le de manière à ce qu'il perce la paroi du premier tuyau :  
   ![](/images/JoinFeatures_Example_step2.png)
3. Sélectionnez le premier tuyau, puis le second (l'ordre de sélection est important), puis cliquez le bouton "Découper pour un objet" de la barre d'outils déroulante Joindre les objets.  
   ![](/images/JoinFeatures_Example_step3_Cutout.png)

## Algorithme

Les algorithmes derrière les outils Joindre sont assez simples et leur compréhension est importante pour utiliser les outils correctement.

1. L'objet de base subit une [soustraction booléenne](/Part_Cut/fr "Part Cut/fr") de l'objet Outil. La forme résultante est un ensemble ([composé](/Part_Compound/fr "Part Compound/fr")) de solides non sécants (généralement deux).

2. Le composé résultant est filtré : seul le plus grand solide est conservé.

3. Si la propriété Refine est vraie, la forme résultante est [affinée](/Part_RefineShape/fr "Part RefineShape/fr").
  
  
![](/images/JoinFeatures-Algo-Cutout.png)

### Remarques

* Si après l’étape 1, l’objet reste en un seul morceau, le résultat de la découpe sera équivalent à une [Part Soustraction booléenne](/Part_Cut/fr "Part Cut/fr") de la base et de l’Outil.
* Actuellement, l'outil produira un résultat inattendu, si un composé est fourni comme base. Cela pourra être changé dans le futur.
* Étant donné que la plus grande pièce est déterminée en comparant les volumes des pièces, l'outil ne peut fonctionner qu'avec des solides. Cela pourra être changé dans le futur.

## Script

L'outil Joindre peut être utilisé dans des [macros](/Macros/fr "Macros/fr") à partir de la console Python en utilisant la fonction suivante :

```
JoinFeatures.makePartJoinFeature(name = 'Cutout', mode = 'Cutout')

```

* Crée une fonction Cutout (découpe) vide (ou une autre fonction Joindre, selon le mode sélectionné). Les propriétés Base et Tool (Outil) doivent ensuite être attribuées explicitement.
* Retourne le nouvel objet créé.

Exemple :

```
import JoinFeatures
j = JoinFeatures.makePartJoinFeature(name = 'Cutout', mode = 'Cutout' )
j.Base = FreeCADGui.Selection.getSelection()[0]
j.Tool = FreeCADGui.Selection.getSelection()[1]

```

L'outil lui-même est implémenté en Python, voir /Mod/Part/JoinFeatures.py ([Github link](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Part/JoinFeatures.py)) là où FreeCAD est installé.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_JoinCutout/fr&oldid=1514578>"