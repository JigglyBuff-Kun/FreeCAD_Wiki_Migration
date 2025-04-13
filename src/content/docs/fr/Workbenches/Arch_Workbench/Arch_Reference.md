---
title: Arch Référence externe
---
:::caution
Cette commande fait partie de l'ensemble intégré de l'atelier BIMavec la V1.0Cette page a été mise à jour pour cette version.
:::

|  |
| --- |
| Arch Référence externe |
| Emplacement du menu |
| 3D/BIM → Outils 3D génériques → Référence externe |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil **Arch Référence externe** vous permet de placer un objet dans le document en cours qui copie sa forme et ses couleurs à partir d'un objet issu de l'[atelierPart](/Part_Workbench/fr "Part Workbench/fr") (y compris [Arch Partie de bâtiment](/Arch_BuildingPart/fr "Arch BuildingPart/fr")) enregistré dans un autre fichier FreeCAD. Si ce fichier FreeCAD change, l'objet de référence est marqué pour être rechargé.

![](/images/Arch_reference_screenshot.png)

## Utilisation

1. Appuyez sur le bouton ![](/images/Arch_Reference.svg) Référence externe,
2. Appuyez sur le bouton "Choisir un fichier..." et sélectionnez un fichier FreeCAD existant,
3. Sélectionnez l'un des objets à base de pièce inclus dans la liste déroulante,
4. Appuyer sur **OK**.

## Options

* L'objet de référence peut être déplacé et pivoté, la position en cours sera conservée après le rechargement de l'objet.
* Si l'objet original est déplacé dans le fichier contenant, ce mouvement sera reflété dans l'objet de référence.
* En cliquant avec le bouton droit de la souris sur un objet de référence dans l'arborescence, vous avez le choix entre recharger l'objet d'origine ou ouvrir le fichier qui le contient.
* Pour référencer plusieurs objets à la fois, placez-les dans un [Arch Partie de bâtiment](/Arch_BuildingPart/fr "Arch BuildingPart/fr").
* Lorsque vous désactivez la propriété de vue **Update Colors** de la référence, les couleurs d'origine ne sont plus rechargées, vous pouvez donc les modifier en toute sécurité.

## Propriétés

* Données**File** : fichier de base sur lequel ce composant est construit
* Données**Part** : l'item à utiliser à partir du fichier de base.
* Vue**Update Colors** : si la valeur est true, les couleurs du fichier lié seront mises à jour.

## Script

L'outil Reference externe peut être utilisé à l'intérieur d'une [macro](/Macros/fr "Macros/fr") et à partir de la console [Python](/Python/fr "Python/fr"), en utilisant la fonction suivante :

```
reference = makeReference([filepath], [partname], [name])

```

Crée un objet `reference` nommé `name` à partir de l'objet `partname` dans le fichier `filepath`. Tous les arguments sont facultatifs.

Exemple :

```
import Arch
Arch.makeReference("/path/to/some/file.FSCtd", "myPart")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Reference/fr&oldid=1481341>"