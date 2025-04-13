---
title: Draft Cerchio
---
|  |
| --- |
| Draft Cerchio |
| Posizione nel menu |
| Drafting → Cerchio 2D Drafting → Cerchio |
| Ambiente |
| [Draft](/Draft_Workbench/it "Draft Workbench/it"), [BIM](/BIM_Workbench/it "BIM Workbench/it") |
| Avvio veloce |
| C I |
| Introdotto nella versione |
| 0.7 |
| Vedere anche |
| [Draft Arco](/Draft_Arc/it "Draft Arc/it"), [Draft Arco da 3 punti](/Draft_Arc_3Points/it "Draft Arc 3Points/it") |
|  |

## Descrizione

Il comando ![](/images/Draft_Circle.svg) **Cerchio** crea un cerchio nel [piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it") corrente da un centro e un raggio. Il raggio può essere definito selezionando un punto.

Un Cerchio può essere trasformato in un arco impostando le sue proprietà Dati**First Angle** e Dati**Last Angle** su valori diversi.

![](/images/Draft_Circle_example.jpg)

Cerchio definito da due punti, centro e raggio

## Utilizzo

Vedere anche: [Barra di Draft](/Draft_Tray/it "Draft Tray/it"), [Aggancio](/Draft_Snap/it "Draft Snap/it") e [Vincolare](/Draft_Constrain/it "Draft Constrain/it").

1. Esistono diversi modi per invocare il comando:
   * Premere il pulsante ![](/images/Draft_Circle.svg) Cerchio.
   * [Draft](/Draft_Workbench/it "Draft Workbench/it"): Selezionare l'opzione **Drafting → ![](/images/Draft_Circle.svg) Cerchio** dal menu.
   * [BIM](/BIM_Workbench/it "BIM Workbench/it"): Selezionare l'opzione **2D Drafting → ![](/images/Draft_Circle.svg) Cerchio** dal menu.
   * Usare la scorciatoia da tastiera: C poi I.
2. Si apre il pannello delle attività **Cerchio**. Vedere [Opzioni](#Options) per maggiori informazioni.
3. Scegliere il primo punto, il centro del cerchio, nella [Vista 3D](/3D_view/it "3D view/it"), oppure digitare le coordinate e premere il pulsante ![](/images/Draft_AddPoint.svg) Inserisci punto.
4. Scegliere il secondo punto nella [Vista 3D](/3D_view/it "3D view/it"), o inserire un **Raggio**.

## Opzioni

È possibile modificare le scorciatoie da tastiera a carattere singolo disponibili nel pannello delle attività. Vedere [Preferenze di Draft](/Draft_Preferences/it "Draft Preferences/it"). Le scorciatoie qui menzionate sono le scorciatoie predefinite (per la versione 1.0).

* Per inserire manualmente le coordinate del centro, inserire le componenti X, Y e Z, e premere Enter dopo ciascuna. Oppure si può premere il pulsante ![](/images/Draft_AddPoint.svg) Inserisci punto quando ha i valori desiderati. Si consiglia di spostare il puntatore fuori dalla [Vista 3D](/3D_view/it "3D view/it") prima di inserire le coordinate.
* Premere G o fare clic sulla casella di controllo **Globale** per attivare o disattivare la modalità globale. Se la modalità globale è attiva, le coordinate sono relative al sistema di coordinate globale, altrimenti sono relative al sistema di coordinate [piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it").
* Premere F o fare clic sulla casella di controllo **Riempimento** per attivare o disattivare la modalità riempimento. Se la modalità riempimento è attiva, il cerchio creato avrà Dati**Make Face** impostato su `true` e avrà una faccia piena.
* Premere N o fare clic sulla casella di controllo **Continua** per attivare o disattivare la modalità continua. Se la modalità continua è attiva, il comando si riavvierà al termine, consentendo di continuare a creare cerchi.
* Premere S per attivare o disattivare [Aggancia](/Draft_Snap/it "Draft Snap/it").
* Premi Esc o il pulsante Chiudi per interrompere il comando.

## Note

* Un Cerchio può essere modificato con il comando [Modifica](/Draft_Edit/it "Draft Edit/it").

## Preferenze

Vedere anche: [Impostare le preferenze](/Preferences_Editor/it "Preferences Editor/it") e [Preferenze per l'ambiente Draft](/Draft_Preferences/it "Draft Preferences/it").

* Se l'opzione **Modifica → Preferenze... → Draft → Generale → Crea primitive della parte se possibile** è selezionata, il comando creerà un [Part Cerchio](/Part_Circle/it "Part Circle/it") invece di uno Draft Cerchio.

## Proprietà

Vedere anche: [Editor delle proprietà](/Property_editor/it "Property editor/it").

Un oggetto Draft Cerchio è derivato da un [Part Part2DObject](/Part_Part2DObject/it "Part Part2DObject/it") e ne eredita tutte le proprietà. Ha anche le seguenti proprietà aggiuntive:

### Dati

Draft

* Dati**Area** (`Area`): (sola lettura) specifica l'area della faccia del cerchio. Il valore sarà `0.0` se Dati**Make Face** se `false` o la faccia non può essere creato.
* Dati**First Angle** (`Angle`): specifica l'angolo iniziale del cerchio, normalmente `0°`.
* Dati**Last Angle** (`Angle`): specifica l'angolo finale del cerchio, normalmente `0°`.
* Dati**Make Face** (`Bool`): specifica se il cerchio crea o meno una faccia. Se è `true` viene creata una faccia, altrimenti solo il perimetro è considerato parte dell'oggetto. Questa proprietà funziona solo se Dati**First Angle** e Dati**Last Angle** hanno lo stesso valore. Notare che `0°` e `360°` non sono considerati uguali.
* Dati**Radius** (`Length`): specifica il raggio del cerchio.

### Vista

Draft

* Vista**Pattern** (`Enumeration`): specifica la [Campitura](/Draft_Pattern/it "Draft Pattern/it") con cui riempire la faccia del cerchio. Questa proprietà funziona solo se Dati**Make Face** è `true` e se Vista**Display Mode** è `Flat Lines`.
* Vista**Pattern Size** (`Float`): specifica la dimensione della [Campitura](/Draft_Pattern/it "Draft Pattern/it").

## Script

Vedere anche: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) e [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Per creare un Draft Cerchio usare il metodo `make_circle` ([disponibile dalla versione 0.19](/Release_notes_0.19/it "Release notes 0.19/it")) del modulo Draft. Questo metodo sostituisce il metodo deprecato `makeCircle`.

```
circle = make_circle(radius, placement=None, face=None, startangle=None, endangle=None, support=None)
circle = make_circle(Part.Edge, placement=None, face=None, startangle=None, endangle=None, support=None)

```

* Crea un oggetto `circle` dal dato `radius` in millimetri.
  + `radius` può anche essere un `Part.Edge`, di cui l'attributo `Curve` deve essere un `Part.Circle`.
* Se `placement` è `None` il cerchio viene creato all'origine.
* Se `face` è `True` e il cerchio è chiuso, diventa una faccia e appare riempita.
* Se `startangle` e `endangle` sono dati in gradi e hanno valori diversi, sono usati e l'oggetto appare come un [Arco](/Draft_Arc/it "Draft Arc/it").

Esempio:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

circle1 = Draft.make_circle(200)

zaxis = App.Vector(0, 0, 1)
p2 = App.Vector(1000, 1000, 0)
place2 = App.Placement(p2, App.Rotation(zaxis, 0))
circle2 = Draft.make_circle(500, placement=place2)

p3 = App.Vector(-1000, -1000, 0)
place3 = App.Placement(p3, App.Rotation(zaxis, 0))
circle3 = Draft.make_circle(750, placement=place3)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Circle/it&oldid=1556221>"