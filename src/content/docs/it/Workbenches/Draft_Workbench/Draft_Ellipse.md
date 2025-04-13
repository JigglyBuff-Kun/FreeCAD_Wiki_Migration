---
title: Draft Ellisse
---
|  |
| --- |
| Draft Ellisse |
| Posizione nel menu |
| Drafting → Ellisse 2D Drafting → Ellisse |
| Ambiente |
| [Draft](/Draft_Workbench/it "Draft Workbench/it"), [BIM](/BIM_Workbench/it "BIM Workbench/it") |
| Avvio veloce |
| E L |
| Introdotto nella versione |
| 0.7 |
| Vedere anche |
| *Nessuno* |
|  |

## Descrizione

Il comando ![](/images/Draft_Ellipse.svg) **Ellisse** crea un'ellisse nel [piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it") corrente da due punti che definiscono un rettangolo in cui si adatterà l'ellisse.

Un Draft Ellisse può essere trasformata in un arco ellittico impostando le sue proprietà Dati**First Angle** e Dati**Last Angle** su valori diversi.

![](/images/Draft_ellipse_example.jpg)

Ellisse definita dagli angoli di un rettangolo

## Utilizzo

Vedere anche: [Barra di Draft](/Draft_Tray/it "Draft Tray/it"), [Aggancio](/Draft_Snap/it "Draft Snap/it") e [Vincolare](/Draft_Constrain/it "Draft Constrain/it").

1. Esistono diversi modi per invocare il comando:
   * Premere il pulsante ![](/images/Draft_Ellipse.svg) Ellisse.
   * [Draft](/Draft_Workbench/it "Draft Workbench/it"): Selezionare l'opzione **Drafting → ![](/images/Draft_Ellipse.svg) Ellisse** dal menu.
   * [BIM](/BIM_Workbench/it "BIM Workbench/it"): Selezionare l'opzione **2D Drafting → ![](/images/Draft_Ellipse.svg) Ellisse** dal menu.
   * Usare la scorciatoia da tastiera: E poi L.
2. Si apre il pannello delle attività **Ellisse**. Vedere [Opzioni](#Options) per maggiori informazioni.
3. Scegliere il primo punto nella [Vista 3D](/3D_view/it "3D view/it"), oppure digitare le coordinate e premere il pulsante ![](/images/Draft_AddPoint.svg) Inserisci punto.
4. Scegliere il secondo punto nella [Vista 3D](/3D_view/it "3D view/it"), oppure digitare le coordinate e premere il pulsante ![](/images/Draft_AddPoint.svg) Inserisci punto. Questo punto non deve essere vincolato all'asse X, Y o Z.

## Opzioni

È possibile modificare le scorciatoie da tastiera a carattere singolo disponibili nel pannello delle attività. Vedere [Preferenze di Draft](/Draft_Preferences/it "Draft Preferences/it"). Le scorciatoie qui menzionate sono le scorciatoie predefinite (per la versione 1.0).

* Per inserire manualmente le coordinate, inserire le componenti X, Y e Z e premere Enter dopo ognuna di esse. Oppure si può premere il pulsante ![](/images/Draft_AddPoint.svg) Inserisci punto quando ha i valori desiderati. Si consiglia di spostare il puntatore fuori dalla [Vista 3D](/3D_view/it "3D view/it") prima di inserire le coordinate.
* Premere R o fare clic sulla casella di controllo **Relativo** per attivare o disattivare la modalità relativa. Se la modalità relativa è attiva, le coordinate del secondo punto sono relative al primo punto, altrimenti sono relative all'origine del sistema di coordinate.
* Premere G o fare clic sulla casella di controllo **Globale** per attivare o disattivare la modalità globale. Se la modalità globale è attiva, le coordinate sono relative al sistema di coordinate globale, altrimenti sono relative al sistema di coordinate [piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it").
* Premere F o fare clic sulla casella di controllo **Riempimento** per attivare o disattivare la modalità riempimento. Se la modalità riempimento è attiva, l'ellisse creata avrà Dati**Make Face** impostato su `true` e avrà una faccia piena.
* Premere N o fai clic sulla casella di controllo **Continua** per attivare o disattivare la modalità continua. Se la modalità continua è attiva, il comando verrà riavviato al termine, consentendo di continuare a creare ellissi.
* Premere S per attivare o disattivare [Aggancia](/Draft_Snap/it "Draft Snap/it").
* Premere Esc o il pulsante Chiudi per interrompere il comando.

## Note

* Un'Ellisse può essere modificata con il comando [Modifica](/Draft_Edit/it "Draft Edit/it").

## Preferenze

Vedere anche: [Impostare le preferenze](/Preferences_Editor/it "Preferences Editor/it") e [Preferenze per l'ambiente Draft](/Draft_Preferences/it "Draft Preferences/it").

* Se l'opzione **Modifica → Preferenze... → Draft → Generale → Crea primitive della parte se possibile** è selezionata, il comando creerà una [Part Ellisse](/Part_Ellipse/it "Part Ellipse/it") invece di una Draft Ellisse.

## Proprietà

Vedere anche: [Editor delle proprietà](/Property_editor/it "Property editor/it").

Un oggetto Draft Ellisse è derivato da un [Part Part2DObject](/Part_Part2DObject/it "Part Part2DObject/it") e ne eredita tutte le proprietà. Ha anche le seguenti proprietà aggiuntive:

### Dati

Draft

* Dati**Area** (`Area`): (sola lettura) specifica l'area della faccia dell'ellisse. Il valore sarà `0.0` se Dati**Make Face** se `false` o la faccia non può essere creata.
* Dati**First Angle** (`Angle`): specifica l'angolo del primo punto dell'ellisse, normalmente `0°`.
* Dati**Last Angle** (`Angle`): specifica l'angolo dell'ultimo punto dell'ellisse, normalmente `0°`.
* Dati**Major Radius** (`Length`): specifica il raggio maggiore dell'ellisse.
* Dati**Make Face** (`Bool`): specifica se l'ellisse crea o meno una faccia. Se è `true` viene creata una faccia, altrimenti solo il perimetro è considerato parte dell'oggetto. Questa proprietà funziona solo se la forma è un'ellisse completa.
* Dati**Minor Radius** (`Length`): specifica il raggio minore dell'ellisse.

### Vista

Draft

* Vista**Pattern** (`Enumeration`): specifica la [Campitura](/Draft_Pattern/it "Draft Pattern/it") con cui riempire la faccia dell'ellisse. Questa proprietà funziona solo se Dati**Make Face** è `true` e se Vista**Display Mode** è `Flat Lines`.
* Vista**Pattern Size** (`Float`): specifica la dimensione della [Campitura](/Draft_Pattern/it "Draft Pattern/it").

## Script

Vedere anche: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) e [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Per creare una Draft Ellisse usare il metodo `make_ellipse` ([disponibile dalla versione 0.19](/Release_notes_0.19/it "Release notes 0.19/it")) del modulo Draft. Questo metodo sostituisce il metodo deprecato `makeEllipse`.

```
ellipse = make_ellipse(majradius, minradius, placement=None, face=True, support=None)

```

* Crea un oggetto `ellipse` dai dati di (`majradius`) e (`minradius`) in millimetri.
  + Il valore più grande viene utilizzato per il raggio maggiore (asse X) se non viene fornito nessun altro posizionamento.
* Se `placement` è `None` l'ellisse viene creata all'origine.
* Se `face` è `True`, l'ellisse crea una faccia, cioè appare riempita.

Esempio:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

ellipse1 = Draft.make_ellipse(3000, 200)
ellipse2 = Draft.make_ellipse(700, 1000)

zaxis = App.Vector(0, 0, 1)
p3 = App.Vector(1000, 1000, 0)
place3 = App.Placement(p3, App.Rotation(zaxis, 90))

ellipse3 = Draft.make_ellipse(700, 1000, placement=place3)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Ellipse/it&oldid=1556232>"