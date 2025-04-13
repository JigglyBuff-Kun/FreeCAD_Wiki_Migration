---
title: Arch Spazio
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                             |
| ------------------------------------------------------------------------------------------- |
| Spazio                                                                                      |
| Posizione nel menu                                                                          |
| Arch → Spazio                                                                               |
| Ambiente                                                                                    |
| [Arch](/Arch_Workbench/it "Arch Workbench/it")                                              |
| Avvio veloce                                                                                |
| S P                                                                                         |
| Introdotto nella versione                                                                   |
| 0.14                                                                                        |
| Vedere anche                                                                                |
| [Parete](/Arch_Wall/it "Arch Wall/it"), [Struttura](/Arch_Structure/it "Arch Structure/it") |
|                                                                                             |

## Descrizione

Lo strumento Spazio consente di definire un volume vuoto, basato su una forma solida, oppure definendo i suoi confini, o con un mix di entrambi. Se è basato esclusivamente sui confini, il volume viene calcolato a partire dai confini dati, e sottraendo lo spazio interno ai confini. L'oggetto Spazio definisce sempre un volume solido. Può anche essere visualizzata la superficie di un oggetto spazio, calcolata intersecando un piano orizzontale nel centro di massa del volume dello spazio.

![](/images/Arch_Space_example.jpg)

Oggetto spazio creato da un oggetto solido esistente, poi sono aggiunte due facce della parete come confini.

## Utilizzo

1. Selezionare un oggetto solido esistente o le facce che lo delimitano.
2. Invocare il comando Spazio utilizzando uno dei seguenti metodi:
   - Premendo il pulsante ![](/images/Arch_Space.svg) Spazio nella barra degli strumenti.
   - Usando i tasti della tastiera S e poi P
   - Usando la voce **Arch → Spazio** dal menu in alto

Once a space has been created, you can also add or remove boundaries to/from it using the ![](/images/Arch_Add.svg) [Add](/Arch_Add "Arch Add") or ![](/images/Arch_Remove.svg) [Remove](/Arch_Remove "Arch Remove") buttons in the toolbar. Alternatively, you can also do this in the Tasks panel or in the [Property editor](/Property_editor "Property editor").

As an example, to add a boundary, given a space that intersects a wall:

1. Select the wall face that intersects the space. That will be the new boundary.
2. Keeping the Ctrl key pressed, select the space.
3. Press the ![](/images/Arch_Add.svg) [Add](/Arch_Add "Arch Add") button in the toolbar.
4. The wall face now defines a new boundary, and the space will only extend up to the wall face in the direction facing it.

The same example: add a boundary, given a space that intersects a wall. This time we're using the Tasks panel:

1. Double-click the space object in the Tree View. This will activate its Tasks panel.
2. Select the wall face that intersects the space. That will be the new boundary.
3. Press the ![](/images/Arch_Add.svg) [Add](/Arch_Add "Arch Add") button in the Tasks panel. The name of the wall face will be displayed in the "Space boundaries" section there.
4. Press the OK button in the Tasks panel.
5. The wall face now defines a new boundary, and the space will only extend up to the wall face in the direction facing it.

Yet another alternative: add a boundary, given a space that intersects a wall. This time we're using the Property editor:

1. Navigate to the Property View and locate the Dati**Boundaries** property under the "Space" group.
2. On the right hand side of the Dati**Boundaries** property, click on the ellipsis button.
3. Select the wall face that intersects the space. That will be the new boundary. The "Link" dialog will reflect your selection.
4. Press the OK button in the "Link" dialog.
5. The wall face now defines a new boundary, and the space will only extend up to the wall face in the direction facing it.

### Limitazioni

- Attualmente, le proprietà boundaries non sono modificabile tramite GUI.
- Per seguire l'evoluzione dello strumento consultare la pagina [Arch Space](http://forum.freecadweb.org/viewtopic.php?f=9&t=4275) nel forum.

## Proprietà

- Dati**Base**: L'oggetto base, se esiste (deve essere un solido).
- Dati**Boundaries**: Un elenco di confini opzionali.
- Dati**Area**: L'area del pavimento calcolata in questo spazio.
- Dati**FinishFloor**: La finitura del pavimento di questo spazio.
- Dati**FinishWalls**: La finitura delle pareti di questo spazio.
- Dati**FinishCeiling**: La finitura del soffitto di questo spazio.
- Dati**Group**: Gli oggetti che sono inclusi in questo spazio, come arredo.
- Dati**SpaceType**: Il tipo di questo spazio.
- Dati**FloorThickness**: Lo spessore della finitura del pavimento.
- Dati**NumberOfPeople**: Il numero di persone che di solito occupano questo spazio.
- Dati**LightingPower**: La potenza elettrica necessaria per illuminare questo spazio in Watt.
- Dati**EquipmentPower**: La potenza elettrica necessaria per gli apparecchi di questo spazio in Watt.
- Dati**AutoPower**: Se True, Equipment Power viene compilata automaticamente dalla potenza degli apparecchi inclusi in questo spazio.
- Dati**Conditioning**: Il tipo di aria condizionata di questo spazio.
- Dati**Internal**: Specifica se questo spazio è interno o esterno.

- Vista**Text**: Il testo da mostrare. Usare $area, $label, $tag, $floor, $walls, $ceiling per inserire i rispettivi dati.
- Vista**FontName**: Il nome del carattere.
- Vista**TextColor**: Il colore del testo.
- Vista**FontSize**: La dimensione del testo.
- Vista**FirstLine**:La dimensione della prima riga di testo (moltiplica la dimensione del carattere 1 = stessa dimensione, 2 = doppia dimensione, ecc.).
- Vista**LineSpacing**: Lo spazio tra le righe di testo.
- Vista**TextPosition**: La posizione del testo. Lasciare (0,0,0) per la posizione automatica.
- Vista**TextAlign**: La giustificazione del testo.
- Vista**Decimals**: Il numero di decimali da utilizzare per i testi calcolati.
- Vista**ShowUnit**: Mostra il suffisso dell'unità di misura o no.

## Opzioni

- Per creare zone che raggruppano più spazi, utilizzare [Parte di edificio](/Arch_BuildingPart/it "Arch BuildingPart/it") e impostare il tipo di IFC su "Spatial Zone"
- L'oggetto Spazio ha le stesse modalità di visualizzazione degli altri oggetti Arch e Part, con una modalità in più chiamata **Footprint**, che visualizza solo la faccia inferiore dello spazio.

## Script

_Vedere anche:_ [API di Arch](/Arch_API/it "Arch API/it") e [Nozioni di base sugli script di FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Lo strumento Spazio può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla console [Python](/Python/it "Python/it") tramite la seguente funzione:

```
Space = makeSpace(objects=None, baseobj=None, name="Space")

```

- Crea un oggetto `Space` con gli `objects` dati, o con un `baseobj`, che può essere.
  - un oggetto del documento, nel qual caso diventa la forma base dell'oggetto Spazio, o
  - un elenco di oggetti selezionati restituiti da `FreeCADGui.Selection.getSelectionEx()`, o
  - una lista di tuple `(object, subobjectname)`

Esempio:

```
import FreeCAD, Arch

Box = FreeCAD.ActiveDocument.addObject("Part::Box", "Box")
Box.Length = 1000
Box.Width = 1000
Box.Height = 1000

Space = Arch.makeSpace(Box)
Space.ViewObject.LineWidth = 2
FreeCAD.ActiveDocument.recompute()

```

Dopo aver creato un oggetto spazio, ad esso si possono aggiungere delle facce selezionate con il seguente codice:

```
import FreeCAD, FreeCADGui, Draft, Arch

points = [FreeCAD.Vector(-500, 0, 0), FreeCAD.Vector(1000, 1000, 0)]
Line = Draft.makeWire(points)
Wall = Arch.makeWall(Line, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

# Select a face of the wall
selection = FreeCADGui.Selection.getSelectionEx()
Arch.addSpaceBoundaries(Space, selection)

```

I confini possono anche essere rimossi, selezionando nuovamente le facce indicate:

```
selection = FreeCADGui.Selection.getSelectionEx()
Arch.removeSpaceBoundaries(Space, selection)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Space/it&oldid=1559099>"
