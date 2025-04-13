---
title: Arch Tetto
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                           |
| ----------------------------------------------------------------------------------------- |
| Tetto                                                                                     |
| Posizione nel menu                                                                        |
| Arch → Tetto                                                                              |
| Ambiente                                                                                  |
| [Arch](/Arch_Workbench/it "Arch Workbench/it")                                            |
| Avvio veloce                                                                              |
| R F                                                                                       |
| Introdotto nella versione                                                                 |
| -                                                                                         |
| Vedere anche                                                                              |
| [Struttura](/Arch_Structure/it "Arch Structure/it"), [Muro](/Arch_Wall/it "Arch Wall/it") |
|                                                                                           |

## Descrizione

Lo strumento ![](/images/Arch_Roof.svg) Tetto consente di creare un tetto inclinato selezionando un contorno. L'oggetto Tetto creato in questo modo è parametrico e mantiene le sue relazioni con l'oggetto base. Si basa sul principio che ad ogni bordo viene assegnata una falda del tetto (con le caratteristiche di pendenza, larghezza coperta, sbalzo, spessore).

**Nota:** Questo strumento è ancora in sviluppo e potrebbe non funzionare correttamente con le forme molto complesse.

![](/images/RoofExample.png)

Vista dall'alto di un modello di edificio che mostra il tetto in trasparenza

## Utilizzo (profilo di base)

1. Creare un contorno chiuso seguendo il senso antiorario e selezionarlo.

   : ![](/images/CounterclockwiseWire.png)

2. Premere il pulsante ![](/images/Arch_Roof.svg) Tetto, o premere i tasti R e poi F.
3. Se l'oggetto tetto di default ha una forma strana è perché lo strumento non possiede tutte le informazioni necessarie.
4. Dopo aver creato il tetto di default, fare doppio clic sull'oggetto nella [vista ad albero](/Tree_view/it "Tree view/it") per accedere alla modifica di tutte le sue proprietà. Angolo deve essere compreso tra 0 e 90.

   : ![](/images/RoofTable.png)

5. Ogni riga corrisponde ad una falda del tetto. Quindi è possibile impostare le proprietà desiderate per ogni falda del tetto.
6. Per aiutarvi, è possibile impostare `Angle` o `Run` a `0` e definire un `Relative Id`, questo rende automatici i calcoli per trovare i dati relativi a `Relative Id`.
7. Funziona in questo modo:
   1. Se `Angle = 0` e `Run = 0` allora il profilo è identico al profilo relativo.
   2. Se `Angle = 0` allora `Angle` viene calcolato in modo che l'altezza sia la stessa del profilo relativo.
   3. Se `Run = 0` allora `Run` è calcolato in modo che l'altezza sia la stessa del profilo relativo.
8. Alla fine, impostare un angolo di 90° per creare un frontone, una parete di tamponamento.

   : ![](/images/RoofProfil.png)

9. _Nota_: per una migliore comprensione, vedere questo [youtube clip](https://www.youtube.com/watch?v=4Urwru71dVk).

## Usage (solido di base)

Se il tetto ha una forma complessa (ad esempio contiene finestre inclinate o altre caratteristiche non standard) si può creare un oggetto solido personalizzato utilizzando vari altri ambienti di lavoro di FreeCAD ([Part](/Part_Workbench/it "Part Workbench/it"), [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") ecc.) . E poi usare questo solido come oggetto Dati**Base** del tetto:

1. Selezionare l'oggetto solido di base.
2. Premere il pulsante ![](/images/Arch_Roof.svg) Tetto, oppure premere i tasti R quindi i tasti F.

## Sottrarre un tetto

I tetti hanno un volume di sottrazione generato automaticamente ([disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it") per tetti con una base solida). Quando un tetto viene [rimosso](/Arch_Remove/it "Arch Remove/it") dalle pareti di un edificio, sia il tetto stesso che tutto ciò che sta sopra di esso viene sottratto dalle pareti.

[disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): è possibile sovrascrivere il volume di sottrazione automatica impostando la proprietà Dati**Subvolume** del tetto su un oggetto solido personalizzato.

![](/images/Arch_Roof_Subtract_Default.png) ![](/images/Arch_Roof_Subtract_Subvolume.png) ![](/images/Arch_Roof_Subvolume_Example.png)

Tetto a base solida prima (1a immagine) e dopo (2a immagine) [averlo rimosso](/Arch_Remove/it "Arch Remove/it") dai muri.  
La terza immagine mostra il volume di sottrazione generato.

## Proprietà

An Arch Roof object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

### Dati

Roof

- Dati**Angles** (`FloatList`): L'elenco degli angoli dei segmenti del tetto.
- Dati**Border Length** (`Length`): La lunghezza totale dei bordi del tetto.
- Dati**Face** (`Integer`): Il numero di faccia dell'oggetto base utilizzato per costruire il tetto (non utilizzato).
- Dati**Flip** (`Bool`): Specifica se la direzione del tetto deve essere invertita.
- Dati**Heights** (`FloatList`): L'elenco delle altezze calcolate dei segmenti del tetto.
- Dati**Id Rel** (`IntegerList`): L'elenco degli ID dei relativi profili dei segmenti di tetto.
- Dati**Overhang** (`FloatList`): L'elenco delle sporgenze dei segmenti del tetto.
- Dati**Ridge Length** (`Length`): La lunghezza totale delle creste e dei fianchi del tetto.
- Dati**Runs** (`FloatList`): L'elenco delle proiezioni della lunghezza orizzontale dei segmenti del tetto.
- Dati**Subvolume** (`Link`): il volume da sottrarre. Se specificato, viene utilizzato al posto del sottovolume generato automaticamente. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
- Dati**Thickness** (`FloatList`): L'elenco degli spessori dei segmenti del tetto.

## Script

_Vedere anche:_ [API di Arch](/Arch_API/it "Arch API/it") e [Nozioni di base sugli script di FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Lo strumento Tetto può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla console [Python](/Python/it "Python/it") utilizzando la seguente funzione:

```
Roof = makeRoof(baseobj=None, facenr=0, angles=[45.,], run=[], idrel=[0,], thickness=[50.,], overhang=[100.,], name="Roof")

```

- Crea un oggetto `Roof` dal `baseobj` dato, che può essere un contorno chiuso o un oggetto solido.
  - Se `baseobj` è un contorno, è possibile fornire elenchi per `angles`, `run`, `idrel`, `thickness`, e `overhang`, per ciascun bordo del contorno per definire la forma del tetto.
  - Gli elenchi vengono completati automaticamente per corrispondere al numero di spigoli del contorno.

Esempio:

```
import FreeCAD as App
import Arch, Draft

doc = App.newDocument()

rect = Draft.makeRectangle(3000, 4000)
doc.recompute()

roof = Arch.makeRoof(rect, angles=[30.,])

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 1000, 0)
p3 = App.Vector(0, 2000, 0)

wire = Draft.make_wire([p1, p2, p3], closed=True)
doc.recompute()

roof1 = Arch.makeRoof(wire)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Roof/it&oldid=1539744>"
