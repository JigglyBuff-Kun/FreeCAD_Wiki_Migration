---
title: Draft Polilinea
---
|  |
| --- |
| Draft Polilinea |
| Posizione nel menu |
| Drafting → Polilinea 2D Drafting → Polilinea |
| Ambiente |
| [Draft](/Draft_Workbench/it "Draft Workbench/it"), [BIM](/BIM_Workbench/it "BIM Workbench/it") |
| Avvio veloce |
| P L |
| Introdotto nella versione |
| 0.7 |
| Vedere anche |
| [Draft Linea](/Draft_Line/it "Draft Line/it"), [Draft BSpline](/Draft_BSpline/it "Draft BSpline/it") |
|  |

## Descrizione

Il comando ![](/images/Draft_Wire.svg) **Polilinea** [crea](#Create) una polilinea, ovvero una sequenza di segmenti di linea collegati. Il comando può anche essere usato per [unire](#Join) [Linee](/Draft_Line/it "Draft Line/it") e Polilinee.

I vertici di una Polilinea possono essere raccordati (stondati) o smussati cambiando le sue Dati**Fillet Radius** or Dati**Chamfer Size** rispettivamente. E' anche possibile suddividere i bordi di una Polilinea cambiando la sua Dati**Subdivisions** proprietà.

![](/images/Draft_Polyline_example.jpg)

Polilinea definita da più punti

## Creazione

### Utilizzo

Vedere anche: [Barra di Draft](/Draft_Tray/it "Draft Tray/it"), [Aggancio](/Draft_Snap/it "Draft Snap/it") e [Vincolare](/Draft_Constrain/it "Draft Constrain/it").

1. Esistono diversi modi per invocare il comando:
   * Premere il pulsante ![](/images/Draft_Wire.svg) Polilinea.
   * [Draft](/Draft_Workbench/it "Draft Workbench/it"): Selezionare l'opzione **Drafting → ![](/images/Draft_Wire.svg) Polilinea** dal menu.
   * [BIM](/BIM_Workbench/it "BIM Workbench/it"): Selezionare l'opzione **2D Drafting → ![](/images/Draft_Wire.svg) Polilinea** dal menu.
   * Usare la scorciatoia da tastiera: P poi L.
2. Si apre il pannello attività **Polilinea**. Vedi [Opzioni](#Options) per maggiori informazioni.
3. Scegliere il primo punto nella [Vista 3D](/3D_view/it "3D view/it"), oppure digitare le coordinate e premere il pulsante ![](/images/Draft_AddPoint.svg) Inserisci punto.
4. Scegliere altri punti nella [Vista 3D](/3D_view/it "3D view/it"), oppure digitare le coordinate e premere il pulsante ![](/images/Draft_AddPoint.svg) Inserisci punto.
5. Premere Esc o il pulsante Chiudi per terminare il comando.

### Opzioni

È possibile modificare le scorciatoie da tastiera a carattere singolo disponibili nel pannello delle attività. Vedere [Preferenze di Draft](/Draft_Preferences/it "Draft Preferences/it"). Le scorciatoie qui menzionate sono le scorciatoie predefinite (per la versione 1.0).

* Per inserire manualmente le coordinate, inserire le componenti X, Y e Z e premere Enter dopo ognuna di esse. Oppure si può premere il pulsante ![](/images/Draft_AddPoint.svg) Inserisci punto quando si hanno i valori desiderati. Si consiglia di spostare il puntatore fuori dalla [Vista 3D](/3D_view/it "3D view/it") prima di inserire le coordinate.
* Premere R o fare clic sulla casella di controllo **Relativo** per attivare o disattivare la modalità relativa. Se la modalità relativa è attiva, le coordinate sono relative all'ultimo punto, se disponibile, altrimenti sono relative all'origine del sistema di coordinate.
* Premere G o fare clic sulla casella di controllo **Globale** per attivare o disattivare la modalità globale. Se la modalità globale è attiva, le coordinate sono relative al sistema di coordinate globale, altrimenti sono relative al sistema di coordinate del [piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it").
* Premere F o fare clic sulla casella di controllo **Riempimento**[Template:VersionNoteMinus/it](/index.php?title=Template:VersionNoteMinus/it&action=edit&redlink=1 "Template:VersionNoteMinus/it (page does not exist)") o **Crea faccia**[Template:VersionNote/it](/index.php?title=Template:VersionNote/it&action=edit&redlink=1 "Template:VersionNote/it (page does not exist)") per attivare la modalità di creazione della faccia. Se la modalità Crea faccia (Make face) è attiva, la polilinea creata avrà Dati**Make Face** impostato su `true` e avrà una faccia piena, a condizione che sia chiusa e non si autointersechi. Una polilinea autointersecante con una faccia non verrà visualizzata correttamente, per tale polilinea Dati**Make Face** deve essere impostata su `false`.
* Premere N o fare clic sulla casella di controllo **Continua** per attivare o disattivare la modalità continua. Se la modalità continua è attiva, il comando verrà riavviato dopo aver utilizzato ![](/images/Draft_FinishLine.svg) Fine o ![](/images/Draft_CloseLine.svg) Chiudi, o dopo aver creato una polilinea chiusa eseguendo lo snap al primo punto della stessa, consentendo di continuare a creare ulteriori polilinee.
* Premere / o il pulsante ![](/images/Draft_UndoLine.svg) Annulla per annullare l'ultimo punto.
* Premere A o il pulsante ![](/images/Draft_FinishLine.svg) Fine per terminare il comando e lasciare la polilinea aperta.
* Premere O o il pulsante ![](/images/Draft_CloseLine.svg) Chiudi per terminare il comando e chiudere la polilinea. È inoltre possibile creare una polilinea chiusa eseguendo lo snap al primo punto della stessa.
* Premere W o il pulsante ![](/images/Draft_Wipe.svg) Pulisci per eliminare i segmenti già posizionati, ma continuare a lavorare dall'ultimo punto.
* Premere U o il pulsante ![](/images/Draft_SelectPlane.svg) [Imposta il piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it") per regolare il piano di lavoro corrente nell'orientamento dell'ultimo segmento.
* Premere S per attivare o disattivare lo [Snap](/Draft_Snap/it "Draft Snap/it").
* Premere Esc o il pulsante Chiudi per terminare il comando.

## Unione

### Utilizzo

1. I punti finali delle [Linee](/Draft_Line/it "Draft Line/it") e/o Polilinee da unire devono essere esattamente coincidenti. Se necessario, prima regolare i punti per assicurarsi che sia così.
2. Selezionare due o più [Linee](/Draft_Line/it "Draft Line/it") e/o Polilinee.
3. Esistono diversi modi per invocare il comando:
   * Premere il pulsante ![](/images/Draft_Wire.svg) Polilinea.
   * Selezionare l'opzione **Drafting → ![](/images/Draft_Wire.svg) Polilinea** dal menu.
   * Usare la scorciatoia da tastiera: P poi L.

## Note

* Un Polilinea può essere modificata con il comando [Modifica](/Draft_Edit/it "Draft Edit/it").
* Una Polilinea può essere convertita in una [BSpline](/Draft_BSpline/it "Draft BSpline/it") con il comando [Polilinea in BSpline](/Draft_WireToBSpline/it "Draft WireToBSpline/it").
* [Linee](/Draft_Line/it "Draft Line/it") e Polilinee possono anche essere unite con il comando [Unisci](/Draft_Join/it "Draft Join/it") o il comando [Promuovi](/Draft_Upgrade/it "Draft Upgrade/it").

## Proprietà

Vedere anche: [Editor delle proprietà](/Property_editor/it "Property editor/it").

Un oggetto Draft Polilinea è derivato da un [Part Part2DObject](/Part_Part2DObject/it "Part Part2DObject/it") e ne eredita tutte le proprietà. Ha anche le seguenti proprietà aggiuntive:

### Dati

Draft

* Dati**Area** (`Area`): (sola lettura) specifica l'area della faccia della polilinea. Il valore sarà `0.0` se Dati**Make Face** è `false` o la faccia non può essere creata.
* Dati**Base** (`Link`)
* Dati**Chamfer Size** (`Lenght`): specifica la lunghezza degli smussi agli angoli della polilinea.
* Dati**Closed** (`Bool`): specifica se la polilinea è chiusa o meno. Se la polilinea è inizialmente aperta questo valore è `false`, impostandolo su `true` disegnerà un segmento di linea per chiudere la polilinea. Se la polilinea è inizialmente chiusa questo valore è `true`, impostandolo su `false` rimuoverà l'ultimo segmento di linea e aprirà la polilinea.
* Dati**End** (`VectorDistance`): specifica il punto finale dela polilinea.
* Dati**Fillet Radius** (`Lenght`): specifica il raggio dei raccordi agli angoli della polilinea.
* Dati**Length** (`Length`): (sola lettura) specifica la lunghezza totale della polilinea.
* Dati**Make Face** (`Bool`): specifica se la polilinea forma o meno una faccia. Se è `true` viene creata una faccia, altrimenti solo i bordi sono considerati parte dell'oggetto. Questa proprietà funziona solo se Dati**Closed** è `true` e se il collegamento non si autointerseca.
* Dati**Points** (`VectorList`): specifica i punti della polilinea nel suo sistema di coordinate locale.
* Dati**Start** (`VectorDistance`): specifica il punto iniziale della polilinea.
* Dati**Subdivisions** (`Integer`): specifica il numero di suddivisioni per ogni bordo della polilinea. Se è `1` ogni spigolo sarà diviso in `2` segmenti uguali. Le suddivisioni vengono applicate prima di smussi e raccordi.
* Dati**Tool** (`Link`)

### Vista

Draft

* Vista**Arrow Size** (`Lenght`): specifica la dimensione del simbolo visualizzato all'estremità della polilinea.
* Vista**Arrow Type** (`Enumeration`): specifica il tipo di simbolo visualizzato all'estremità della polilinea, che può essere `Dot`, `Circle`, `Arrow`, `Tick` o `Tick-2`.
* Vista**End Arrow** (`Bool`): specifica se mostrare un simbolo all'estremità della polilinea, in modo che possa essere utilizzato come linea di annotazione.
* Vista**Pattern** (`Enumeration`): specifica la [Campitura](/Draft_Pattern/it "Draft Pattern/it") con cui riempire la faccia del contorno chiuso. Questa proprietà funziona solo se Dati**Make Face** è `true` e se Vista**Display Mode** è `Flat Lines`.
* Vista**Pattern Size** (`Float`): specifica la dimensione della [Campitura](/Draft_Pattern/it "Draft Pattern/it").

## Script

Vedere anche: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) e [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Per creare una Draft Polilinea usare il metodo `make_wire` ([disponibile dalla versione 0.19](/Release_notes_0.19/it "Release notes 0.19/it")) del modulo Draft. Questo metodo sostituisce il metodo deprecato `makeWire`.

```
wire = make_wire(pointslist, closed=False, placement=None, face=None, support=None)
wire = make_wire(Part.Wire, closed=False, placement=None, face=None, support=None)

```

* Crea un oggetto `Wire` con l'elenco di punti indicato, `pointslist`.
  + Ogni punto nella lista è definito dal suo `FreeCAD.Vector`, con unità in millimetri.
  + In alternativa, l'input può essere una `Part.Wire`, da cui vengono estratti i punti.
* Se `closed` è `True`, o se il primo e l'ultimo punto coincidono, la polilinea è chiusa.
* Se `placement` è `None` la forma viene creata nell'origine.
* Se `face` è `True` e la polilinea è chiusa, diventa una faccia e appare riempita.

Esempio:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 1000, 0)
p3 = App.Vector(2000, 0, 0)

wire1 = Draft.make_wire([p1, p2, p3], closed=True)
wire2 = Draft.make_wire([p1, 2*p3, 1.3*p2], closed=True)
wire3 = Draft.make_wire([1.3*p3, p1, -1.7*p2], closed=True)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Wire/it&oldid=1559522>"