---
title: Atelier CurvedShapes
---

:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::
![](/images/CurvedShapes_workbench_icon.svg)

Icône de l'atelier externe CurvedShapes

## Introduction

Curved Shapes est un [atelier externe](/External_workbenches/fr "External workbenches/fr") de FreeCAD qui crée des formes 3D à partir de courbes 2D.

## Installation

L'installation recommandée se fait par le ![](/images/Std_AddonMgr.svg) [Gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr") de Freecad via **Outils → Gestionnaire des extensions**

## Outils

- ![](/images/CurvedShapes_CurvedArray.svg) [CurvedArray](/CurvedShapes_CurvedArray/fr "CurvedShapes CurvedArray/fr"): crée un réseau et redimensionne les éléments dans les limites d'une ou plusieurs courbes de coque.
- ![](/images/CurvedShapes_CurvedSegment.svg) [CurvedSegment](/index.php?title=CurvedShapes_CurvedSegment/fr&action=edit&redlink=1 "CurvedShapes CurvedSegment/fr (page does not exist)"): interpole entre deux courbes 2D. Les courbes interpolées peuvent être redimensionnées dans les limites de certaines courbes de coque.
- ![](/images/CurvedShapes_InterpolatedMiddle.svg) [InterpolatedMiddle](/index.php?title=CurvedShapes_InterpolatedMiddle/fr&action=edit&redlink=1 "CurvedShapes InterpolatedMiddle/fr (page does not exist)"): interpole une forme 2D au milieu entre deux courbes 2D. Les formes de base peuvent être connectées à une forme avec un coin pointu.
- ![](/images/CurvedShapes_SurfaceCut.svg) [SurfaceCut](/index.php?title=CurvedShapes_SurfaceCut/fr&action=edit&redlink=1 "CurvedShapes SurfaceCut/fr (page does not exist)"): coupe une surface pour obtenir la courbe de contour ou une face. Cet outil est similaire à ![](/images/Part_CrossSections.svg) [Part Coupes](/Part_CrossSections/fr "Part CrossSections/fr") dans l'![](/images/Workbench_Part.svg) [Atelier Part](/Part_Workbench/fr "Part Workbench/fr") mais il est entièrement paramétrique et a une option pour réduire la complexité de la courbe de sortie. Il essaie de supprimer les bords qui se chevauchent.

### Exemples

- ![](/images/CurvedShapes_HortenHIX.svg) [HortenHIX](/index.php?title=CurvedShapes_HortenHIX/fr&action=edit&redlink=1 "CurvedShapes HortenHIX/fr (page does not exist)"): script Python qui crée la forme du [Horten (également appelé Horten H IX)](https://en.wikipedia.org/wiki/Horten_Ho_229), un chasseur furtif qui a été construit en Allemagne en 1944.
- ![](/images/CurvedShapes_FlyingWingS800.svg) [FlyingWingS800](/index.php?title=CurvedShapes_FlyingWingS800/fr&action=edit&redlink=1 "CurvedShapes FlyingWingS800/fr (page does not exist)"): script Python qui crée la forme d'un modèle radio commandé d'aile volante.

## Références

- Auteur: @chbergmann
- Dépôt Github: <https://github.com/chbergmann/CurvedShapesWorkbench>

## En relation

- [Atelier Curves](/Curves_Workbench/fr "Curves Workbench/fr")
- [Atelier AirPlaneDesign](https://github.com/FredsFactory/FreeCAD_AirPlaneDesign)

## Ateliers externes

Retrieved from "<http://wiki.freecad.org/index.php?title=CurvedShapes_Workbench/fr&oldid=1536741>"
