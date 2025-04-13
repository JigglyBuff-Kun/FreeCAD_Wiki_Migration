---
title: Macro_SuperWire/fr
---
|  |
| --- |
| SuperWire |
| Description |
| Cette macro crée un fil d'objets sélectionnés (lignes et arcs) même lorsque les méthodes de création du fil normal (par exemple avec l'outil de mise à niveau) échouent.  Version macro : 0.1 Date dernière modification : 2012-05-22 Version FreeCAD : All Téléchargement : [ToolBar Icon](https://www.freecadweb.org/wiki/images/e/e3/Macro_SuperWire.png) Auteur: Yorik |
| Auteur |
| [Yorik](/User:Yorik "User:Yorik") |
| Téléchargement |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/e/e3/Macro_SuperWire.png) |
| Liens |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr") |
| Version Macro |
| 0.1 |
| Dernière modification |
| 2012-05-22 |
| Version(s) FreeCAD |
| All |
| Raccourci clavier |
| *None* |
| Voir aussi |
| *None* |
|  |
|  |

## Description

Cette macro crée un fil d'objets sélectionnés (lignes et arcs) même lorsque les méthodes de création du fil normal (par exemple avec l'outil de mise à niveau) échouent.

Attention, vous devez avoir une version récente de FreeCAD pour ce travail

## Script

Icône de la barre d'outils
![](/images/Macro_SuperWire.png)

**Macro\_SuperWire.FCMacro**

```
import FreeCAD,FreeCADGui,Part
try:
    import DraftGeomUtils as fcgeo
except:
    from draftlibs import fcgeo

sel = FreeCADGui.Selection.getSelection()
if not sel:
   FreeCAD.Console.PrintWarning("Select something first!")
else:
   elist = []
   for obj in sel:
       if hasattr(obj,"Shape"):
           elist.append(obj.Shape.Edges[0])
   wire = fcgeo.superWire(elist)
   if wire:
       Part.show(wire)
   else:
       FreeCAD.Console.PrintError("SuperWire operation failed!")
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_SuperWire/fr&oldid=1086211>"