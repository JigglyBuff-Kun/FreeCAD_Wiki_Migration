---
title: Arch Sito
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                           |
| ----------------------------------------------------------------------------------------- |
| Sito                                                                                      |
| Posizione nel menu                                                                        |
| Arch → Sito                                                                               |
| Ambiente                                                                                  |
| [Arch](/Arch_Workbench/it "Arch Workbench/it")                                            |
| Avvio veloce                                                                              |
| S I                                                                                       |
| Introdotto nella versione                                                                 |
| -                                                                                         |
| Vedere anche                                                                              |
| [Piano](/Arch_Floor/it "Arch Floor/it"), [Edificio](/Arch_Building/it "Arch Building/it") |
|                                                                                           |

## Descrizione

Il Sito di Arch è un oggetto speciale che unisce le proprietà di un oggetto gruppo standard di FreeCAD con quelle degli oggetti Arch. Esso è particolarmente adatto per rappresentare un intero sito del progetto o un terreno. Nei lavori di architettura basati su IFC, serve soprattutto per organizzare il modello, racchiudendo in esso gli oggetti [edificio](/Arch_Building/it "Arch Building/it"). Il sito è utilizzato anche per gestire e visualizzare un terreno fisico, e può calcolare i volumi di terra che devono essere aggiunti o rimossi.

## Utilizzo

1. Selezionare uno o più oggetti da includere nel nuovo sito
2. Premere il pulsante ![](/images/Arch_Site.svg) Sito, oppure premere i tasti S e I

## Opzioni

- Dopo aver creato un sito, è possibile aggiungere ad esso altri oggetti con il drag-and-drop nella [Vista ad albero](/Tree_view/it "Tree view/it") o utilizzando lo strumento ![](/images/Arch_Add.svg) [Aggiungi](/Arch_Add/it "Arch Add/it"). Ciò determina solo quali oggetti fanno parte di un dato sito, e non ha effetto sul terreno stesso.
- È possibile rimuovere gli oggetti da un sito trascinandoli fuori con il drag-and-drop nella [Vista ad albero](/Tree_view/it "Tree view/it") o utilizzando lo strumento ![](/images/Arch_Remove.svg) [Rimuovi](/Arch_Remove/it "Arch Remove/it")
- È possibile aggiungere un oggetto terreno modificando la proprietà Dati**Terrain** del Sito. Il terreno può essere un guscio aperto o ([disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")) un solido.
- È possibile aggiungere volumi da sommare o da sottrarre dal terreno di base, facendo doppio clic sul Sito, e aggiungendo gli oggetti ai suoi gruppi Rimozioni o Aggiunte. Gli oggetti devono essere dei solidi.
- La proprietà Dati**Extrusion Vector** può essere utilizzata per risolvere alcuni problemi che possono presentarsi quando il terreno è un guscio aperto e vi sono aggiunte e/o rimozioni. Per svolgere tali aggiunte o rimozioni, il guscio aperto viene estruso in un solido, che viene poi opportunamente aggiunto o sottratto. A seconda della topologia del terreno, questa estrusione potrebbe non riuscire con il vettore di default di estrusione. Può darsi che sia possibile risolvere il problema assegnando al vettore a un valore diverso. Questa proprietà viene ignorata se il terreno è un solido.

## Proprietà

### Dati

Site

- Dati**Terrain**: Il terreno di base del sito
- Dati**Address**: La via e il numero civico di questo sito
- Dati**Postal Code**: Il codice postale o zip di questo sito
- Dati**City**: La città di questo sito
- Dati**Country**: Il paese di questo sito
- Dati**Latitude**: La latitudine di questo sito
- Dati**Longitude**: La longitudine di questo sito
- Dati**Url**: Un URL che mostra questo sito in un sito web mapping
- Dati**Projected Area**: L'area della proiezione di questo oggetto sul piano XY
- Dati**Perimeter**: La lunghezza del perimetro di questo terreno
- Dati**Addition Volume**: Il volume di terra da aggiungere a questi terreni
- Dati**Subtraction Volume**: Il volume di terra da rimuovere da questi terreni
- Dati**Extrusion Vector**: Un vettore di estrusione da utilizzare durante l'esecuzione di operazioni booleane
- Dati**Remove Splitter**: Rimuovere gli scarti dalla forma risultante
- Dati**Declination**: l'angolo tra la direzione Nord reale e quella Nord in questo documento, ovvero l'asse Y. Ciò significa che per impostazione predefinita l'asse Y punta a Nord e l'asse X punta a Est; l'angolo aumenta in senso antiorario. Questa proprietà era precedentemente nota comeDati**North Deviation**.
- Dati**EPW File**: Consente di allegare un file EPW dal [sito web di dati EPW Ladybug](https://www.ladybug.tools/epwmap/) a questo sito. Ciò è necessario per visualizzare i diagrammi della rosa dei venti

### Vista

Compass

- Vista**Compass** (`Bool`): Default is `False`. Shows or hides the compass.
- Vista**Compass Position** (`Vector`): The position of the compass relative to the site placement.
- Vista**Compass Rotation** (`Angle`): The rotation of the compass relative to the site.
- Vista**Update Declination** (`Bool`): Default is `False`. Update the declination value based on the compass rotation.

Site

- Vista**Solar Diagram**: Mostra o nasconde il diagramma solare
- Vista**Solar Diagram Color**: Il colore del diagramma solare
- Vista**Solar Diagram Position**: La posizione del diagramma solare
- Vista**Solar Diagram Scale**: La scala del diagramma solare
- Vista**Wind Rose**: Mostra o nasconde il diagramma della rosa dei venti (richiede che la proprietà dati **File EPW** sia riempita e il modulo Ladybug Python sia installato (vedere sotto)

## Tipico flusso di lavoro

Iniziare creando un oggetto che rappresenta il terreno. Per esempio, è facile per importare dati mesh, che possono essere trasformati in una Part Shape dal menu **Part → Crea Forma da Mesh**. Poi, creare un oggetto Sito, e impostare la sua proprietà Dati**Terrain** dalla Parte appena creata:

![](/images/Arch_site_example_01.jpg)

Creare alcuni volumi (devono essere dei solidi) che rappresentano le aree che si desidera scavare o riempire. Fare doppio clic sull'oggetto Sito nella struttura ad albero, e aggiungere questi volumi ai gruppi Aggiunte o Sottrazioni. Fare clic su OK.

![](/images/Arch_site_example_02.jpg)

La geometria sito sarà ricalcolata e le proprietà aree, il perimetro e i volumi rivalutati.

![](/images/Arch_site_example_03.jpg)

## Diagrammi solari e del vento

Se nel proprio sistema è installato [Ladybug](https://www.ladybug.tools/ladybug.html), i Siti di Arch possono visualizzare un diagramma solare o del vento. Per questo, le proprietà Dati**Longitude**, Dati**Latitude** e Dati**Declination** (precedentemente era Dati**North Deviation**) devono essere impostate correttamente, e la proprietà Vista**Solar Diagram** o Vista**Wind Rose** impostata su `true`. [disponibile dalla versione 0.17](/Release_notes_0.17/it "Release notes 0.17/it") e [disponibile dalla versione 0.19](/Release_notes_0.19/it "Release notes 0.19/it")

### Notes

**Nota**: Se non avete Ladybug, [pysolar](http://pysolar.org/) è ancora supportato per generare diagrammi solari, ma non rose dei venti. E' richiesto Pysolar 0.7 o superiore; questa versione funziona solo con Python 3. Se serve questa funzione con Python 2, si deve avere Pysolar 0.6 in quanto questa è l'ultima versione che funziona con Python 2.
Tuttavia, Ladybug è uno strumento molto più potente che probabilmente verrà utilizzato di più in futuro, quindi si consiglia di utilizzarlo al posto di pysolar. Ladybug può essere installato semplicemente tramite [pip](https://github.com/ladybug-tools/ladybug).

![](/images/Freecad-solar-diagram.jpg)

## Script

_Vedere anche:_ [API di Arch](/Arch_API/it "Arch API/it") e [Nozioni di base sugli script di FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Lo strumento Sito può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla console [Python](/Python/it "Python/it") utilizzando la seguente funzione:

```
Site = makeSite(objectslist=None, baseobj=None, name="Site")

```

- Crea un oggetto `Site` da `objectslist`, che è una lista di oggetti, o da un `baseobj`, che è una `Shape` o un `Terrain`.

Esempio:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
Wall = Arch.makeWall(baseline, length=None, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

Building = Arch.makeBuilding([Wall])
Site = Arch.makeSite([Building])

FreeCAD.ActiveDocument.recompute()
FreeCAD.Gui.ActiveDocument.ActiveView.viewIsometric()

```

### Diagramma solare

Se il modulo `pysolar` è presente, è possibile aggiungere al sito un diagramma solare. Impostare gli angoli di longitudine, latitudine e declinazione in modo appropriato, nonché una scala adeguata per le dimensioni del modello.

At this time, the diagram serves only informative purposes and is there for visual display. For a sun path diagram that enables visualizing shadows and interactively changing dates and times, the best option is to use an external website that allows uploading 3D models. Some of them support .obj and .stl formats for instance, which can be exported to with FreeCAD.

Notare che è richiesto Pysolar 0.7 o superiore, e questa versione funziona solo con Python 3.

```
Site.Longitude = -46.38
Site.Latitude = -23.33
Site.Declination = 30
# Uncomment if you want to show the compass
# Site.ViewObject.Compass = True

Site.ViewObject.SolarDiagram = True
Site.ViewObject.SolarDiagramScale = 10000
FreeCAD.ActiveDocument.recompute()

```

### Diagramma solare indipendente dal sito

Un diagramma solare può essere creato con la seguente funzione, indipendentemente da qualsiasi sito:

```
Node = makeSolarDiagram(longitude, latitude, scale=1, complete=False)

```

- Crea un diagramma solare come nodo Pivy, usando `longitude` e `latitude`, con una `scale` opzionale.
- Se `complete` è `True`, disegna i 12 mesi, che mostra l'intero [analemma](https://en.wikipedia.org/wiki/Analemma) solare.

```
import FreeCADGui, Arch

Node = Arch.makeSolarDiagram(-46.38, -23.33, scale=10000, complete=True)
FreeCAD.Gui.ActiveDocument.ActiveView.getSceneGraph().addChild(Node)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Site/it&oldid=1561146>"
