---
title: Arch Taglio con piano
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                |
| ---------------------------------------------- |
| Taglio con piano                               |
| Posizione nel menu                             |
| Arch → Taglio con piano                        |
| Ambiente                                       |
| [Arch](/Arch_Workbench/it "Arch Workbench/it") |
| Avvio veloce                                   |
| _Nessuno_                                      |
| Introdotto nella versione                      |
| -                                              |
| Vedere anche                                   |
| _Nessuno_                                      |
|                                                |

## Descrizione

Lo strumento **Arch CutPlane** taglia un oggetto solido di Arch come un [Muro](/Arch_Wall/it "Arch Wall/it") o una [Struttura](/Arch_Structure/it "Arch Structure/it") con una faccia planare.

![](/images/Arch_CutPlane_example.jpg)

A sinistra: prima di applicare lo strumento Taglia con piano. Al centro: parete risultante dopo il taglio. A destra: un altro risultato opzionale

## Utilizzo

1. Se il piano di taglio deve essere derivato da un bordo dritto ([disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")), facoltativamente allineare il [piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it"):
   - Il bordo selezionato non può essere parallelo alla normale del piano di lavoro.
   - La faccia di taglio generata sarà perpendicolare al piano di lavoro.
2. Selezionare l'oggetto da tagliare.
3. Effettuare una delle seguenti operazioni:
   - Selezionare un oggetto con una singola faccia planare. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
   - Selezionare una faccia planare nella [vista 3D](/3D_view/it "3D view/it").
   - Selezionare un oggetto con un unico bordo dritto. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
   - Selezionare un bordo dritto nella [Vista 3D](/3D_view/it "3D view/it"). [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
4. Esistono diversi modi per richiamare il comando:
   - Premere il pulsante ![](/images/Arch_CutPlane.svg) Taglio con piano.
   - Selezionare l'opzione **Arch → ![](/images/Arch_CutPlane.svg) Taglio con piano** dal menu.
5. Scegliere **Dietro** o **Di fronte** per indicare su quale lato della superficie di taglio il materiale deve essere rimosso.
6. Premere il pulsante OK.

## Script

_Vedere anche:_ [API di Arch](/Arch_API/it "Arch API/it") e [Nozioni di base sugli script di FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Lo strumento Taglia con Piano può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla console [Python](/Python/it "Python/it") tramite la seguente funzione:

```
cutObj = cutComponentwithPlane(archObject, cutPlane, sideFace)

```

- Crea un oggetto `cutObj` dal `archObject` dato, che è tagliato dal `cutPlane`, che è la faccia di un altro oggetto.
  - `archObject` dovrebbe essere un `SelectionObject` ottenuto da `FreeCADGui.Selection.SelectionEx()[0]`.
  - `cutPlane` dovrebbe essere un `FaceObject` ottenuto da `FreeCADGui.Selection.SelectionEx()[0].SubObjects[0]`.
- `sideFace` specifica su quale lato del `FaceObject` verrà creato un volume; questo volume verrà quindi utilizzato per sottrarlo dal `archObject`. Se `sideFace` è `0` crea un volume nella parte posteriore della faccia, altrimenti lo crea davanti alla faccia.

Esempio:

```
import FreeCAD, FreeCADGui, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 2000, 0)

Line = Draft.makeWire([p1, p2])
Wall = Arch.makeWall(Line, width=150, height=2000)

p3 = FreeCAD.Vector(0, 2000, 0)
p4 = FreeCAD.Vector(3000, 0, 0)

Line2 = Draft.makeWire([p3, p4])
Wall2 = Arch.makeWall(Line2, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

# Select the Wall
main_object = FreeCADGui.Selection.getSelectionEx()[0]

# Select the face of Wall2
selection = FreeCADGui.Selection.getSelectionEx()[0]
cut_face = selection.SubObjects[0]

cutObj = Arch.cutComponentwithPlane(main_object, cut_face, 0)
FreeCAD.ActiveDocument.recompute()

Wall3 = Draft.move(Wall, FreeCAD.Vector(-4000, 0, 0), copy=True)
Wall4 = Draft.move(Wall2, FreeCAD.Vector(-4000, 0, 0), copy=True)
FreeCAD.ActiveDocument.recompute()

# Select the Wall3
main_object2 = FreeCADGui.Selection.getSelectionEx()[0]

# Select the face of Wall4
selection2 = FreeCADGui.Selection.getSelectionEx()[0]
cut_face2 = selection2.SubObjects[0]

cutObj2 = Arch.cutComponentwithPlane(main_object2, cut_face2, 1)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_CutPlane/it&oldid=1432926>"
