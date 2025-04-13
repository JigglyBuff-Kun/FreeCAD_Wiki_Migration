---
title: Draft Poligono
---
|  |
| --- |
| Draft Poligono |
| Posizione nel menu |
| Drafting → Poligono 2D Drafting → Poligono |
| Ambiente |
| [Draft](/Draft_Workbench/it "Draft Workbench/it"), [BIM](/BIM_Workbench/it "BIM Workbench/it") |
| Avvio veloce |
| P G |
| Introdotto nella versione |
| 0.7 |
| Vedere anche |
| *Nessuno* |
|  |

## Descrizione

Il comando ![](/images/Draft_Polygon.svg) **Poligono** crea un poligono regolare nel [piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it") corrente da un centro e un raggio. Il raggio può essere definito selezionando un punto.

Un Poligono può essere cambiato da inscritto a circoscritto modificando la sua proprietà Dati**Draw Mode**. Gli angoli di un poligono possono essere raccordati (arrotondati) o smussati modificandone rispettivamente Dati**Fillet Radius** o Dati**Chamfer Size**.

![](/images/Draft_polygon_example.jpg)

Poligono regolare definito da due punti, centro e raggio

## Utilizzo

Vedere anche: [Barra di Draft](/Draft_Tray/it "Draft Tray/it"), [Aggancio](/Draft_Snap/it "Draft Snap/it") e [Vincolare](/Draft_Constrain/it "Draft Constrain/it").

1. Esistono diversi modi per invocare il comando:
   * Premere il pulsante ![](/images/Draft_Polygon.svg) Poligono.
   * [Draft](/Draft_Workbench/it "Draft Workbench/it"): Selezionare l'opzione **Drafting → ![](/images/Draft_Polygon.svg) Poligono** dal menu.
   * [BIM](/BIM_Workbench/it "BIM Workbench/it"): Selezionare l'opzione **2D Drafting → ![](/images/Draft_Polygon.svg) Poligono** dal menu.
   * Usare la scorciatoia da tastiera: P poi G.
2. Si apre il pannello attività **Poligono**. Vedere [Opzioni](#Options) per maggiori informazioni.
3. Regolare il numero desiderato di **Lati**.
4. Scegliere il primo punto, il centro del poligono, nella [Vista 3D](/3D_view/it "3D view/it"), oppure digitare le coordinate e premere il pulsante ![](/images/Draft_AddPoint.svg) Inserisci punto.
5. Scegliere il secondo punto nella [Vista 3D](/3D_view/it "3D view/it"), o inserire un **Raggio**.

## Opzioni

È possibile modificare le scorciatoie da tastiera a carattere singolo disponibili nel pannello delle attività. Vedere [Preferenze di Draft](/Draft_Preferences/it "Draft Preferences/it"). Le scorciatoie qui menzionate sono le scorciatoie predefinite (per la versione 1.0).

* Per inserire manualmente le coordinate del centro, inserire le componenti X, Y e Z, e premere Enter dopo ciascuna. Oppure si può premere il pulsante ![](/images/Draft_AddPoint.svg) Inserisci punto quando ha i valori desiderati. Si consiglia di spostare il puntatore fuori dalla [Vista 3D](/3D_view/it "3D view/it") prima di inserire le coordinate.
* Premere G o fare clic sulla casella di controllo **Globale** per attivare o disattivare la modalità globale. Se la modalità globale è attiva, le coordinate sono relative al sistema di coordinate globale, altrimenti sono relative al sistema di coordinate [piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it").
* Premere F o fare clic sulla casella di controllo **Riempito** per attivare o disattivare la modalità riempimento. Se la modalità riempimento è attiva, il poligono creato avrà Dati**Make Face** impostato su `true` e avrà una faccia piena.
* Premere N o fare clic sulla casella di controllo **Continua** per attivare o disattivare la modalità continua. Se la modalità continua è attiva, il comando si riavvierà al termine, consentendo di continuare a creare poligoni.
* Premere S per attivare o disattivare [Aggancia](/Draft_Snap/it "Draft Snap/it").
* Premere Esc o il pulsante Chiudi per interrompere il comando.

## Note

* Un Poligono può essere modificato con il comando [Modifica](/Draft_Edit/it "Draft Edit/it").

## Preferenze

Vedere anche: [Impostare le preferenze](/Preferences_Editor/it "Preferences Editor/it") e [Preferenze per l'ambiente Draft](/Draft_Preferences/it "Draft Preferences/it").

* Se l'opzione **Modifica → Preferenze... → Draft → Generale → Crea primitive della parte se possibile** è selezionata, il comando creerà un [Part Poligono regolare](/Part_RegularPolygon/it "Part RegularPolygon/it") invece di un Draft Poligono.

## Proprietà

Vedere anche: [Editor delle proprietà](/Property_editor/it "Property editor/it").

Un oggetto Draft Poligono è derivato da un [Part Part2DObject](/Part_Part2DObject/it "Part Part2DObject/it") e ne eredita tutte le proprietà. Ha anche le seguenti proprietà aggiuntive:

### Dati

Draft

* Dati**Area** (`Area`): (sola lettura) specifica l'area della faccia del poligono. Il valore sarà `0.0` se Dati**Make Face** se `false`.
* Dati**Chamfer Size** (`Length`): specifica la lunghezza degli smussi agli angoli del poligono.
* Dati**Draw Mode** (`Enumeration`): specifica se il poligono è `inscritto` in un cerchio o `circoscritto` attorno a un cerchio.
* Dati**Faces Number** (`Integer`): specifica il numero di lati del poligono.
* Dati**Fillet Radius** (`Length`): specifica il raggio dei raccordi agli angoli del poligono.
* Dati**Make Face** (`Bool`): specifica se il poligono forma o meno una faccia. Se è `true` viene creata una faccia, altrimenti solo il perimetro è considerato parte dell'oggetto.
* Dati**Radius** (`Length`): specifica il raggio del cerchio che definisce il poligono.

### Viste

Draft

* Vista**Pattern** (`Enumeration`): specifica la [Campitura](/Draft_Pattern/it "Draft Pattern/it") con cui riempire la faccia del poligono. Questa proprietà funziona solo se Dati**Make Face** è `true` e se Vista**Display Mode** è `Flat Lines`.
* Vista**Pattern Size** (`Float`): specifica la dimensione della [Campitura](/Draft_Pattern/it "Draft Pattern/it").

## Script

Vedere anche: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) e [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Per creare un Draft Poligono utilizzare il metodo `make_polygon` ([disponibile dalla versione 0.19](/Release_notes_0.19/it "Release notes 0.19/it")) del modulo Draft. Questo metodo sostituisce il metodo deprecato `makePolygon`.

```
polygon = make_polygon(nfaces, radius=1, inscribed=True, placement=None, face=None, support=None)

```

* Crea un oggetto `polygon` con il numero specificato di facce (`nfaces`) e basato su un cerchio di `radius` in millimetri.
* Se `inscribed` è `True`, il poligono è inscritto nel cerchio, altrimenti sarà circoscritto.
* Se `placement` è `None` il poligono viene creato all'origine e uno dei suoi vertici giace sull'asse X.
* Se `face` è `True`, il poligono formerà una faccia, cioè apparirà pieno.

Esempio:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

polygon1 = Draft.make_polygon(4, radius=500)
polygon2 = Draft.make_polygon(5, radius=750)

zaxis = App.Vector(0, 0, 1)
p3 = App.Vector(1000, 1000, 0)
place3 = App.Placement(p3, App.Rotation(zaxis, 90))

Polygon3 = Draft.make_polygon(6, radius=1450, placement=place3)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Polygon/it&oldid=1556250>"