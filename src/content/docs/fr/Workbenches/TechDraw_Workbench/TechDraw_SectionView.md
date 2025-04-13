---
title: TechDraw Vue en coupe
---
|  |
| --- |
| TechDraw Vue en coupe |
| Emplacement du menu |
| TechDraw → Vues de Techdraw → Insérer une vue en coupe |
| Ateliers |
| [TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [TechDraw Vue en coupe complexe](/TechDraw_ComplexSection/fr "TechDraw ComplexSection/fr"), [TechDraw Vue](/TechDraw_View/fr "TechDraw View/fr") |
|  |

## Description

L'outil **TechDraw Vue en coupe** insère une vue en coupe transversale basée sur une vue de la pièce existante.

![](/images/TechDraw_section_ANSI.png)  
![](/images/TechDraw_section_ISO.png)

Vue en coupe déjà placée qui montre les trous internes et une surface de coupe hachurée.  
L'image du haut montre le format de flèche ANSI.  
L'image du bas montre le format de flèche ISO.

## Utilisation

1. Sélectionnez une vue de la pièce dans la [vue 3D](/3D_view/fr "3D view/fr") ou la [vue en arborescence](/Tree_view/fr "Tree view/fr").
2. Il existe plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/TechDraw_SectionView.svg) Insérer une vue en coupe.
   * Sélectionnez l'option **TechDraw → Vues de Techdraw → ![](/images/TechDraw_SectionView.svg) Insérer une vue en coupe** du menu.
3. Un panneau de tâches s'ouvre et vous aide à calculer les différentes propriétés. Des valeurs raisonnables pour la direction de la vue sont calculées, mais elles peuvent être modifiées.

![](/images/TechDraw_Section_Taskview.png)

Fenêtre de dialogue pour définir la zone de la vue en coupe

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Dans les propriétés de Données**Base View**, vous pouvez modifier l'apparence de la ligne de la coupe.

Une vue de coupe, en fait un objet `TechDraw::DrawViewSection`, est dérivée d'une [vue de Part](/TechDraw_View/fr#Propriétés_Vue_de_Part "TechDraw View/fr"), objet `TechDraw::DrawViewPart`, et hérite de toutes ses propriétés. Elle possède également les propriétés supplémentaires suivantes :

### Données

Appearance

* Données**Section Line Stretch** (`FloatConstraint`) : ajuste la longueur de la ligne de la coupe. `1.0` est la longueur normale, `1.1` serait 10% plus longue, `0.9` serait 10% plus courte. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

Cut Operation

* Données**Fuse Before Cut** (`Bool`) : fusionne les formes sources avant d'effectuer la coupe de section.
* Données**Trim After Cut** (`Bool`) : découpe la forme résultante après le découpage de section pour supprimer les morceaux indésirables. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")
* Données**Use Previous Cut** (`Bool`) : permet d'utiliser la forme découpée dans la vue de base au lieu de l'objet original. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

Cut Surface Format

* Données**Cut Surface Display** (`Enumeration`) : apparence de la surface de coupe. Options :
  + `Hide` : masque la surface découpée, seul le contour sera affiché.
  + `Color` : colore la surface de coupe en utilisant le paramètre **Cut Surface Color** dans les [TechDraw Préférences](/TechDraw_Preferences/fr "TechDraw Preferences/fr").
  + `SvgHatch` : hachure la section coupée en utilisant une [Hachure](/TechDraw_Hatch/fr "TechDraw Hatch/fr").
  + `PatHatch` : hachure la coupe de section en utilisant une [Hachure géométrique](/TechDraw_GeometricHatch/fr "TechDraw GeometricHatch/fr").
* Données**File Hatch Pattern** (`File`) : chemin complet vers le fichier de motif de hachures SVG.
* Données**File Geom Pattern** (`File`) : chemin complet du fichier de motif PAT.
* Données**Svg Included** (`FileIncluded`) : chemin complet vers le fichier de motif de hachures SVG inclus.
* Données**Pat Included** (`FileIncluded`) : chemin complet vers le fichier de modèle PAT inclus.
* Données**Name Geom Pattern** (`String`) : nom du modèle PAT à utiliser.
* Données**Hatch Scale** (`Float`) : réglage de la taille du motif de hachures.
* Données**Hatch Rotation** (`Float`) : rotation du motif de hachure en degrés dans le sens anti-horaire. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")
* Données (Hidden)**Hatch Offset** (`Vector`) : décalage du motif de hachure. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

Section

* Données**Section Symbol** (`String`) : identifiant de cette section.
* Données**Base View** (`Link`) : vue sur laquelle est basée cette section.
* Données**Section Normal** (`Vector`) : vecteur décrivant la direction normale au plan de coupe.
* Données**Section Origin** (`Vector`) : vecteur décrivant un point sur le plan de coupe. Généralement le centroïde de la pièce d'origine.
* Données**Section Direction** (`Enumeration`) : direction dans la vue de base pour cette section. Options : `Aligned`, `Right`, `Left`, `Up` ou `Down`.

### Vue

Cut Surface

* Vue**Cut Surface Color** (`Color`) : couleur solide pour la mise en évidence de la surface. Utilisé si Données**Cut Surface Display** est défini sur `Color`.
* Vue (Hidden)**Show Cut Surface** (`Bool`) : affiche/masque la surface de coupe.

Surface Hatch

* Vue**Geom Hatch Color** (`Color`): couleur du motif de hachures géométriques.
* Vue**Hatch Color** (`Color`) : couleur du motif de hachures Svg.
* Vue (Hidden)**Hatch Cut Surface** (`Bool`) : permet de hachurer la surface de coupe.
* Vue**Weight Pattern** (`Float`) : poids de ligne du motif de hachures géométriques.

## Remarques

* **Section Line Format** : deux formats de ligne de section sont pris en charge (comme illustré ci-dessus) et contrôlés par le paramètre de préférence "Norme de ligne de section" dans l'onglet Annotation. L'option `ANSI` utilise des "flèches tirées" (connues sous le nom de "format traditionnel" dans certains domaines) et l'option `ISO` utilise des "flèches poussées" (également connues sous le nom de "format de la flèche de référence").
* **Fuse Before Cut** : l'opération de coupe échoue parfois à découper les formes sources. Si **Fuse Before Cut** est vrai, les formes sources sont fusionnées en une seule forme avant que l'opération de section ne soit tentée. Si vous rencontrez des problèmes avec l'opération de section, essayez d'inverser cette valeur.
* **Trim After Cut** : l'opération d'ajustement de la coupe laisse parfois derrière elle une partie de la forme source. Si **Trim After Cut** est vrai, une opération d'ajustement supplémentaire est effectuée sur le résultat de le premier ajustement qui devrait enlever tous les morceaux non désirés.
* **Cut Surface Display**: la surface de coupe peut être cachée, peinte dans une couleur solide, hachurée en utilisant un motif Svg (par défaut) ou hachurée en utilisant un motif PAT. Voir [TechDraw Hachures](/TechDraw_Hatching/fr "TechDraw Hatching/fr").

## Script

Voir aussi : [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) et [FreeCAD Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Une Vue en coupe peut être créée à partir de [macros](/Macros/fr "Macros/fr") et de la console [Python](/Python/fr "Python/fr") en utilisant la fonction suivante :

```
doc = FreeCAD.ActiveDocument
box = doc.Box
page = doc.Page

view = doc.addObject("TechDraw::DrawViewPart", "View")
page.addView(view)
view.Source = box
view.Direction = (0, 0, 1)

section = doc.addObject("TechDraw::DrawViewSection", "Section")
page.addView(section)
section.Source = box
section.BaseView = view
section.Direction = (0, 1, 0)
section.SectionNormal = (-1, 0, 0)

doc.recompute()

```

## Exemples

Pour plus d'informations sur les coupes et certains cas d'utilisation, consultez : [TechDraw Exemples de coupes](/TechDraw_Section_Examples/fr "TechDraw Section Examples/fr").

![](/images/TechDraw_ExampleSection-10.png)
![](/images/TechDraw_ExampleSection-13.png)
![](/images/TechDraw_ExampleSection-15.png)
![](/images/TechDraw_ExampleSection-17.png)
![](/images/TechDraw_ExampleSection-34.png)
![](/images/TechDraw_ExampleSection-35.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_SectionView/fr&oldid=1495685>"