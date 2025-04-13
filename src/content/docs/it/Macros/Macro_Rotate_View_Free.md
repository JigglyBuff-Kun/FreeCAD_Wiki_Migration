---
title: Rotate View Free
---

|                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Rotate View Free                                                                                                                                                                                                                                                                     |
| Descrizione                                                                                                                                                                                                                                                                          |
| Questa def incollata nella console Python FreeCAD (o la tua macro) ti permette di ruotare la vista in 3 assi e l'angolo (in gradi) dà interesse a creare un piano per una posizione desiderata Versione macro: 01.00 Ultima modifica: 2010-11-17 Versione FreeCAD: All Autore: Yorik |
| Autore                                                                                                                                                                                                                                                                               |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                    |
| Download                                                                                                                                                                                                                                                                             |
| _None_                                                                                                                                                                                                                                                                               |
| Link                                                                                                                                                                                                                                                                                 |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                                             |
| Versione macro                                                                                                                                                                                                                                                                       |
| 01.00                                                                                                                                                                                                                                                                                |
| Data ultima modifica                                                                                                                                                                                                                                                                 |
| 2010-11-17                                                                                                                                                                                                                                                                           |
| Versioni di FreeCAD                                                                                                                                                                                                                                                                  |
| All                                                                                                                                                                                                                                                                                  |
| Scorciatoia                                                                                                                                                                                                                                                                          |
| _Nessuna_                                                                                                                                                                                                                                                                            |
| Vedere anche                                                                                                                                                                                                                                                                         |
| [Macro Rotate View](/Macro_Rotate_View/it "Macro Rotate View/it") [Macro_Rotate_ViewAxonometric](/Macro_Rotate_ViewAxonometric/it "Macro Rotate ViewAxonometric/it")                                                                                                                 |
|                                                                                                                                                                                                                                                                                      |
|                                                                                                                                                                                                                                                                                      |

## Descrizione

Questa def incollata nella console Python FreeCAD (o la tua macro) ti permette di ruotare la vista in 3 assi e l'angolo (in gradi) dà interesse a creare un piano per una posizione desiderata

## Utilizzo

Incolla il codice nella console di Python FreeCAD e digita Enter → Enter (per validare) e entra ex: _RotateView(0,1,0,45)_

## Script

**Macro_Rotate_View_Free.FCMacro**

```
#Paste in the Python console and tip ex:
#RotateView(0,1,0,45)
def RotateView(axisX=1.0,axisY=0.0,axisZ=0.0,angle=45.0):
    import math
    from pivy import coin
    try:
        cam = Gui.ActiveDocument.ActiveView.getCameraNode()
        rot = coin.SbRotation()
        rot.setValue(coin.SbVec3f(axisX,axisY,axisZ),math.radians(angle))
        nrot = cam.orientation.getValue() * rot
        cam.orientation = nrot
        print( axisX," ",axisY," ",axisZ," ",angle)
    except Exception:
        print( "Not ActiveView ")
```

entra nelle consola Python esempio :

```
RotateView(0,1,0,45)
```

Se non ci sono documenti aperti viene restituito un errore.

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Rotate_View_Free/it&oldid=1186377>"
