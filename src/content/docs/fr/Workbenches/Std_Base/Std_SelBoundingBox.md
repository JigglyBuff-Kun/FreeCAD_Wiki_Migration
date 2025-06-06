---
title: Std Boîte englobante
---
|  |
| --- |
| Std Boîte englobante |
| Emplacement du menu |
| Affichage → Activer/désactiver la boîte englobante |
| Ateliers |
| Tous |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.19 |
| Voir aussi |
| [Std Style de représentation](/Std_DrawStyle/fr "Std DrawStyle/fr") |
|  |

## Description

La commande **Std Boîte englobante** bascule le mode de surbrillance du cadre de sélection global. Si ce mode est activé, les objets sélectionnés sont marqués dans une [vue 3D](/3D_view/fr "3D view/fr") avec un cadre de sélection en surbrillance même si leur Vue**Selection Style** est défini sur "Shape" (Forme).

## Utilisation

1. * Sélectionnez l'option **Affichage → ![](/images/Std_SelBoundingBox.svg) Activer/désactiver la boîte englobante** du menu.

## Script

Voir aussi : [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) et [FreeCAD Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Pour modifier le paramètre ShowSelectionBoundingBox, utilisez la méthode `SetBool` du ParameterGrp approprié.

```
import FreeCAD, FreeCADGui

grp = FreeCAD.ParamGet("User parameter:BaseApp/Preferences/View")
if grp.GetBool("ShowSelectionBoundingBox"):
    grp.SetBool("ShowSelectionBoundingBox", False)
else:
    grp.SetBool("ShowSelectionBoundingBox", True)

FreeCADGui.updateCommands()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_SelBoundingBox/fr&oldid=1537175>"