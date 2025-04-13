---
title: Mouse over cb
---

|                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Mouse over cb                                                                                                                                                                                                                                                                                                                                           |
| Description                                                                                                                                                                                                                                                                                                                                                   |
| Cette macro affiche tous les éléments situés sous le curseur (tous les éléments couverts par d'autres éléments seront également affichés). Version macro : 00.00 Date dernière modification : 2016-12-13 Version FreeCAD : Toutes Téléchargement : [Icône de la barre d'outils](https://wiki.freecad.org/images/5/55/Macro_Mouse_over_cb.png) Auteur: Chris_G |
| Auteur                                                                                                                                                                                                                                                                                                                                                        |
| [Chris_G](/index.php?title=User:Chris_G&action=edit&redlink=1 "User:Chris G (page does not exist)")                                                                                                                                                                                                                                                           |
| Téléchargement                                                                                                                                                                                                                                                                                                                                                |
| [Icône de la barre d'outils](https://wiki.freecad.org/images/5/55/Macro_Mouse_over_cb.png)                                                                                                                                                                                                                                                                    |
| Liens                                                                                                                                                                                                                                                                                                                                                         |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                                                                              |
| Version Macro                                                                                                                                                                                                                                                                                                                                                 |
| 00.00                                                                                                                                                                                                                                                                                                                                                         |
| Dernière modification                                                                                                                                                                                                                                                                                                                                         |
| 2016-12-13                                                                                                                                                                                                                                                                                                                                                    |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                                                            |
| Toutes                                                                                                                                                                                                                                                                                                                                                        |
| Raccourci clavier                                                                                                                                                                                                                                                                                                                                             |
| _None_                                                                                                                                                                                                                                                                                                                                                        |
| Voir aussi                                                                                                                                                                                                                                                                                                                                                    |
| [Macro FC element selector](/Macro_FC_element_selector/fr "Macro FC element selector/fr")                                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                                                                                                                               |
|                                                                                                                                                                                                                                                                                                                                                               |

## Description

Cette macro affiche dans la vue du rapport tous les éléments situés sous le curseur (tous les éléments couverts par d'autres éléments seront également affichés).

## Utilisation

Lancez la macro, la macro reste résidente en mémoire.

## Script

Icône de la barre d'outils ![](/images/Macro_Mouse_over_cb.png)

**Macro_Mouse_over_cb.FCMacro**

```
from pivy import coin
import FreeCADGui

def mouse_over_cb( event_callback):
    event = event_callback.getEvent()
    pos = event.getPosition().getValue()
    listObjects = FreeCADGui.ActiveDocument.ActiveView.getObjectsInfo((int(pos[0]),int(pos[1])))
    obj = []
    if listObjects:
        FreeCAD.Console.PrintMessage("\n *** Objects under mouse pointer ***")
        for o in listObjects:
            label = str(o["Object"])
            if not label in obj:
                obj.append(label)
        FreeCAD.Console.PrintMessage("\n"+str(obj))

view = FreeCADGui.ActiveDocument.ActiveView

mouse_over = view.addEventCallbackPivy( coin.SoLocation2Event.getClassTypeId(), mouse_over_cb )

# to remove Callback :
#view.removeEventCallbackPivy( coin.SoLocation2Event.getClassTypeId(), mouse_over_cb)
```

## Liens

La discussion sur le forum [finding/selecting all elements below cursor](https://forum.freecadweb.org/viewtopic.php?f=10&t=19072)

Autre macro similaire [Selecting internal faces of a pressure vessel](https://forum.freecadweb.org/viewtopic.php?f=18&t=12381&p=151950#p151950) (téléchargez le fichier [FC_element_selector_v1p1p1.py](https://forum.freecadweb.org/download/file.php?id=31041))

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Mouse_over_cb/fr&oldid=1345468>"
