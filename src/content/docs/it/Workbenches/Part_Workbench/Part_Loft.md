---
title: Part Loft
---
|  |
| --- |
| Part Loft |
| Posizione nel menu |
| Parte → Loft... |
| Ambiente |
| [Part](/Part_Workbench/it "Part Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.13 |
| Vedere anche |
| [Sweep](/Part_Sweep/it "Part Sweep/it") |
|  |

## Descrizione

Il comando ![](/images/Part_Loft.svg) Part Loft crea una faccia, un guscio (shell) o una forma solida da due o più profili (sezioni trasversali).

![](/images/Part_Loft_solid_ruled_from3profiles_example_FreeCAD_0_13.jpg)

Loft da tre profili che sono due [Part Cerchi](/Part_Circle/it "Part Circle/it") e un [Part Ellisse](/Part_Ellipse/it "Part Ellipse/it"). I parametri sono Solido "Vero" Rigato "Vero".

## Utilizzo

1. Esistono diversi modi per richiamare il comando:
   * Premere il pulsante ![](/images/Part_Loft.svg) Loft....
   * Selezionare l'opzione **Parte → ![](/images/Part_Loft.svg) Loft...** dal menu.
2. Si apre la [scheda azioni](/Task_panel/it "Task panel/it") Loft .
3. Nell'elenco *Profili disponibili* a sinistra selezionare il primo profilo e fare clic sulla freccia destra per posizionarlo nell'elenco *Profili selezionati* a destra.
4. Ripetere per il secondo profilo e ancora se si desiderano più di due profili.
5. Facoltativamente, utilizzare le frecce su e giù per riordinare i profili selezionati.
6. Definire le opzioni [Crea solido](#Dati), [Superficie rigata](#Dati) e [Chiuso](#Dati).
7. Fare clic su OK.

### Geometria accettata

* **Profili:** può essere un punto (vertice), una linea (bordo), una polilinea o una faccia. I bordi e le polilinee possono essere aperti o chiusi. Esistono varie [Limitazioni](#Limitazioni), vedere di seguito.

* Come profili possono essere utilizzati anche gli oggetti [App Link](/App_Link/it "App Link/it") collegati ai tipi di oggetto appropriati e i contenitori [App Part](/App_Part/it "App Part/it") con gli oggetti visibili appropriati all'interno. [disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it")

## Opzioni

#### Crea solido

Se "Solid" è impostato su "true", FreeCAD crea un solido, a condizione che i profili siano chiusi; se impostato su "false", FreeCAD crea una faccia o un guscio (shell) per profili aperti o chiusi.

#### Superficie rigata

Se "Superficie rigata" è "true" FreeCAD crea una faccia, un guscio (shell) o un solido dalle [superfici rigate](http://en.wikipedia.org/wiki/Ruled_surface).

#### Chiuso

Se "Closed" è "true" FreeCAD tenta di collegare l'ultimo profilo al primo profilo per creare un anello chiuso.

Per ulteriori informazioni su come sono uniti i profili, vedere [Dettagli tecnici di Part Loft](/Part_Loft_Technical_Details/it "Part Loft Technical Details/it").

## Proprietà

Vedere anche: [Editor delle proprietà](/Property_editor/it "Property editor/it").

Un oggetto Part Loft deriva da un oggetto [Funzione Part](/Part_Feature/it "Part Feature/it") e ne eredita tutte le proprietà. Ha inoltre le seguenti proprietà aggiuntive:

### Dati

Loft

* Dati**Sections** (`LinkList`): Elenca le sezioni utilizzate.
* Dati**Solid** (`Bool`): Falso (predefinito). True crea un solido.
* Dati**Ruled** (`Bool`): Falso (predefinito). True crea una superficie rigata.
* Dati**Closed** (`Bool`): False (predefinito). True crea un loft chiuso collegando l'ultimo al primo profilo.
* Dati**Max Degree** (`IntegerConstraint`): Grado massimo.

## Limitazioni

Un Part Loft ha le stesse limitazioni di un [Part Sweep](/Part_Sweep/it#Limitazioni "Part Sweep/it").

### Loft chiusi

* + I risultati dei loft chiusi possono essere inaspettati - il loft può produrre torsioni o piegature. L'operazione Loft è molto sensibile al posizionamento dei profili e per collegare i corrispondenti vertici in tutti i profili servono curve molto complesse.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Loft/it&oldid=1438937>"