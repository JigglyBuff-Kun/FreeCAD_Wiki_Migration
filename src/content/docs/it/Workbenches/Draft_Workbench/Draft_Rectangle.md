---
title: Draft Rettangolo
---
|  |
| --- |
| Draft Rettangolo |
| Posizione nel menu |
| Drafting → Rettangolo 2D Drafting → Rettangolo |
| Ambiente |
| [Draft](/Draft_Workbench/it "Draft Workbench/it"), [BIM](/BIM_Workbench/it "BIM Workbench/it") |
| Avvio veloce |
| R E |
| Introdotto nella versione |
| 0.7 |
| Vedere anche |
| *Nessuno* |
|  |

## Descrizione

Il comando ![](/images/Draft_Rectangle.svg) **Rettangolo** crea un rettangolo nel [piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it") corrente da due punti.

È possibile aggiungere facoltativamente uno smusso di 45 gradi o un raccordo circolare a ogni angolo del rettangolo e dividere il rettangolo in una serie di righe e colonne di uguale dimensione.

![](/images/Draft_Rectangle_example.jpg)

Rettangolo definito da due punti

## Utilizzo

Vedere anche: [Barra di Draft](/Draft_Tray/it "Draft Tray/it"), [Aggancio](/Draft_Snap/it "Draft Snap/it") e [Vincolare](/Draft_Constrain/it "Draft Constrain/it").

1. Esistono diversi modi per invocare il comando:
   * Premere il pulsante ![](/images/Draft_Rectangle.svg) Rettangolo.
   * [Draft](/Draft_Workbench/it "Draft Workbench/it"): Selezionare l'opzione **Drafting → ![](/images/Draft_Rectangle.svg) Rettangolo** dal menu.
   * [BIM](/BIM_Workbench/it "BIM Workbench/it"): Selezionare l'opzione **2D Drafting → ![](/images/Draft_Rectangle.svg) Rettangolo** dal menu.
   * Usare la scorciatoia da tastiera: R poi E.
2. Si apre il pannello delle attività **Rectangle**. Vedere [Opzioni](#Options) per maggiori informazioni.
3. Scegliere il primo punto nella [Vista 3D](/3D_view/it "3D view/it"), oppure digitare le coordinate e premere il pulsante ![](/images/Draft_AddPoint.svg) Inserisci punto.
4. Scegliere il secondo punto nella [Vista 3D](/3D_view/it "3D view/it"), oppure digitare le coordinate e premere il pulsante ![](/images/Draft_AddPoint.svg) Inserisci punto. Questo punto non deve essere vincolato all'asse X, Y o Z.

## Opzioni

È possibile modificare le scorciatoie da tastiera a carattere singolo disponibili nel pannello delle attività. Vedere [Preferenze di Draft](/Draft_Preferences/it "Draft Preferences/it"). Le scorciatoie qui menzionate sono le scorciatoie predefinite (per la versione 1.0).

* Per inserire manualmente le coordinate, inserire le componenti X, Y e Z e premere Enter dopo ognuna di esse. Oppure si può premere il pulsante ![](/images/Draft_AddPoint.svg) Inserisci punto quando ha i valori desiderati. Si consiglia di spostare il puntatore fuori dalla [Vista 3D](/3D_view/it "3D view/it") prima di inserire le coordinate.
* Premere R o fare clic sulla casella di controllo **Relativo** per attivare o disattivare la modalità relativa. Se la modalità relativa è attiva, le coordinate del secondo punto sono relative al primo punto, altrimenti sono relative all'origine del sistema di coordinate.
* Premee G o fare clic sulla casella di controllo **Globale** per attivare o disattivare la modalità globale. Se la modalità globale è attiva, le coordinate sono relative al sistema di coordinate globale, altrimenti sono relative al sistema di coordinate [piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it").
* Premere F o fare clic sulla casella di controllo **Riempito** per attivare o disattivare la modalità riempimento. Se la modalità riempimento è attiva, il rettangolo creato avrà Dati**Make Face** impostato su `true` e avrà una faccia piena.
* Premere N o fare clic sulla casella di controllo **Continua** per attivare o disattivare la modalità continua. Se la modalità continua è attiva, il comando verrà riavviato al termine, consentendo di continuare a creare rettangoli.
* Premere S per attivare o disattivare [Aggancia](/Draft_Snap/it "Draft Snap/it").
* Premere Esc o il pulsante Chiudi per interrompere il comando.

## Note

* Un Rettangolo può essere modificato con il comando [Modifica](/Draft_Edit/it "Draft Edit/it").

## Preferenze

Vedere anche: [Impostare le preferenze](/Preferences_Editor/it "Preferences Editor/it") e [Preferenze per l'ambiente Draft](/Draft_Preferences/it "Draft Preferences/it").

* Se l'opzione **Modifica → Preferenze... → Draft → Generale → Crea primitive della parte se possibile** è selezionata, il comando creerà un [Part Piano](/Part_Plane/it "Part Plane/it") invece di un Draft Rettangolo.

## Proprietà

Vedere anche: [Editor delle proprietà](/Property_editor/it "Property editor/it").

Un oggetto Draft Rettangolo è derivato da un [Part Part2DObject](/Part_Part2DObject/it "Part Part2DObject/it") e ne eredita tutte le proprietà. Ha anche le seguenti proprietà aggiuntive:

### Dati

Draft

* Dati**Area** (`Area`): (sola lettura) specifica l'area della faccia del rettangolo. Il valore sarà `0.0` se Dati**Make Face** se `false`.
* Dati**Chamfer Size** (`Length`): specifica la lunghezza degli smussi agli angoli del rettangolo.
* Dati**Columns** (`Integer`): specifica il numero di colonne di uguali dimensioni in cui è diviso il rettangolo.
* Dati**Fillet Radius** (`Length`): specifica il raggio dei raccordi agli angoli del rettangolo.
* Dati**Height** (`Distance`): specifica l'altezza del rettangolo.
* Dati**Length** (`Distance`): specifica la lunghezza del rettangolo.
* Dati**Make Face** (`Bool`): specifica se il rettangolo crea o meno una faccia. Se è `true` viene creata una faccia, altrimenti solo il perimetro è considerato parte dell'oggetto.
* Dati**Rows** (`Integer`): specifica il numero di righe di uguali dimensioni in cui è diviso il rettangolo.

### Vista

Draft

* Vista**Pattern** (`Enumeration`): specifica la [Campitura](/Draft_Pattern/it "Draft Pattern/it") con cui riempire la faccia del rettangolo. Questa proprietà funziona solo se Dati**Make Face** è `true` e se Vista**Display Mode** è `Flat Lines`.
* Vista**Pattern Size** (`Float`): specifica la dimensione della [Campitura](/Draft_Pattern/it "Draft Pattern/it").
* Vista**Texture Image** (`File`): specifica il percorso del file immagine da mappare sulla faccia del rettangolo. L'oscuramento di questa proprietà rimuoverà l'immagine. Il rettangolo dovrebbe avere le stesse proporzioni dell'immagine per evitare distorsioni.

## Script

Vedere anche: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) e [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Per creare un Draft Rettangolo usare il metodo `make_rectangle` ([disponibile dalla versione 0.19](/Release_notes_0.19/it "Release notes 0.19/it")) del modulo Draft. Questo metodo sostituisce il metodo deprecato `makeRectangle`.

```
rectangle = make_rectangle(length, height, placement=None, face=None, support=None)

```

* Crea un oggetto `rectangle` con `length` nella direzione X e `height` nella direzione Y, con unità in millimetri.
* Se `placement` è `None` il rettangolo viene creato all'origine e la lunghezza sarà parallela all'asse X.
* Se `face` è `True`, il rettangolo formerà una faccia, cioè apparirà pieno.

Esempio:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

rectangle1 = Draft.make_rectangle(4000, 1000)
rectangle2 = Draft.make_rectangle(1000, 4000)

zaxis = App.Vector(0, 0, 1)
p3 = App.Vector(1000, 1000, 0)
place3 = App.Placement(p3, App.Rotation(zaxis, 45))

rectangle3 = Draft.make_rectangle(3500, 250, placement=place3)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Rectangle/it&oldid=1556241>"