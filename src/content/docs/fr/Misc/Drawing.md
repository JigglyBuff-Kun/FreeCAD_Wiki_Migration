---
title: Drawing
---
## Introduction

Dans FreeCAD, le mot "Drawing" est normalement utilisé pour faire référence à une projection 2D d'un [modèle 3D](/Model/fr "Model/fr"). Ceci est généralement créé avec l'[atelier TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr").

## Utilisation

1. Commencez avec un [modèle 3D](/Model/fr "Model/fr") déjà créé avec par exemple l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr"). En fait, tout objet qui a une [Shape](/Shape/fr "Shape/fr") y compris les objets 2D, fonctionnera.
2. Basculez vers l'[atelier TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr").
3. Appuyez sur ![](/images/TechDraw_PageDefault.svg) [Page standard](/TechDraw_PageDefault/fr "TechDraw PageDefault/fr") ou ![](/images/TechDraw_PageTemplate.svg) [Page selon modèle](/TechDraw_PageTemplate/fr "TechDraw PageTemplate/fr") pour créer une page.
4. Sélectionnez le modèle existant, puis appuyez sur ![](/images/TechDraw_View.svg) [Vue](/TechDraw_View/fr "TechDraw View/fr") ou sur ![](/images/TechDraw_ProjectionGroup.svg) [Groupe de projections](/TechDraw_ProjectionGroup/fr "TechDraw ProjectionGroup/fr").
5. Une projection 2D sur la page sera créée. Vous pouvez maintenant ajuster ses propriétés comme Données**Scale**, Données**Rotation** et Données**Direction**.
6. Lorsque le dessin est prêt, vous pouvez appuyer sur ![](/images/TechDraw_ExportPageSVG.svg) [Exporter en SVG](/TechDraw_ExportPageSVG/fr "TechDraw ExportPageSVG/fr"), ![](/images/TechDraw_ExportPageDXF.svg) [Exporter en DXF](/TechDraw_ExportPageDXF/fr "TechDraw ExportPageDXF/fr") ou utilisez [Std Exporter](/Std_Export/fr "Std Export/fr") pour exporter la page aux formats SVG, DXF ou PDF pour une utilisation ultérieure dans un autre logiciel ou pour l'impression.

## Remarques

Dans un usage informel, un "Drawing" peut être n'importe quelle figure géométrique visible dans la [vue 3D](/3D_view/fr "3D view/fr"), et donc son concept peut être confondu avec celui de "[Corps](/Body/fr "Body/fr")", "[Part](/Part/fr "Part/fr")" ou "[modèle](/Model/fr "Model/fr")".

Cependant, lorsque plus de précision est requise, la distinction doit être faite.

* Un "[Corps](/Body/fr "Body/fr")" (Body) ([PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr")) est un objet dérivé d'une [Part Feature](/Part_Feature/fr "Part Feature/fr") classe (`Part::Feature`) créé avec l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr").
* Un "[Part](/Part/fr "Part/fr")" ([App Part](/App_Part/fr "App Part/fr")) est utilisé pour regrouper plusieurs "[Bodies](/Body/fr "Body/fr")" pour former un assemblage.
* Un "Drawing" est une projection 2D d'un "Body" ou d'une "Part".

Retrieved from "<http://wiki.freecad.org/index.php?title=Drawing/fr&oldid=1549418>"