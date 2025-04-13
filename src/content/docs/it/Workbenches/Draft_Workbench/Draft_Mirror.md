---
title: Draft Specchio
---
|  |
| --- |
| Draft Specchio |
| Posizione nel menu |
| Modifiche → Specchio Modifica → Specchio |
| Ambiente |
| [Draft](/Draft_Workbench/it "Draft Workbench/it"), [BIM](/BIM_Workbench/it "BIM Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Draft Clona](/Draft_Clone/it "Draft Clone/it") |
|  |

## Descrizione

Il comando ![](/images/Draft_Mirror.svg) **Specchio** crea copie speculari, oggetti [Part Specchio](/Part_Mirror/it "Part Mirror/it"), dagli oggetti selezionati. Un oggetto [Part Specchio](/Part_Mirror/it "Part Mirror/it") è parametrico, si aggiornerà se il suo oggetto sorgente cambia.

Il comando può essere utilizzato su oggetti 2D creati con [Draft](/Draft_Workbench/it "Draft Workbench/it") o [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it"), ma anche su molti oggetti 3D come quelli creati con gli ambienti [Part](/Part_Workbench/it "Part Workbench/it"), [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") o [BIM](/BIM_Workbench/it "BIM Workbench/it").

![](/images/Draft_Mirror_example.jpg)

Specchiare un oggetto

## Utilizzo

Vedere anche: [Aggancio](/Draft_Snap/it "Draft Snap/it") e [Vincolare](/Draft_Constrain/it "Draft Constrain/it").

1. Opzionalmente selezionare uno o più oggetti.
2. Esistono diversi modi per invocare il comando:
   * Premere il pulsante ![](/images/Draft_Mirror.svg) Specchio.
   * [Draft](/Draft_Workbench/it "Draft Workbench/it"): Selezionare l'opzione **Modifiche → ![](/images/Draft_Mirror.svg) Specchio** dal menu.
   * [BIM](/BIM_Workbench/it "BIM Workbench/it"): Selezionare l'opzione **Modifica → ![](/images/Draft_Mirror.svg) Specchio** dal menu.
   * Usare la scorciatoia da tastiera: M poi I.
3. Se non si ha ancora selezionato un oggetto: selezionare un oggetto nella [Vista 3D](/3D_view/it "3D view/it").
4. Si apre il pannello attività **Specchio**. Vedere [Opzioni](#Opzioni) per maggiori informazioni.
5. Scegliere il primo punto del piano speculare nella [Vista 3D](/3D_view/it "3D view/it"), oppure digitare le coordinate e premere il pulsante ![](/images/Draft_AddPoint.svg) Inserisci punto.
6. Scegliere il secondo punto del piano speculare nella [Vista 3D](/3D_view/it "3D view/it"), oppure digitare le coordinate e premi il pulsante ![](/images/Draft_AddPoint.svg) Inserisci punto.
7. Il piano speculare è definito dai punti selezionati e dalla normale del [piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it").

## Opzioni

È possibile modificare le scorciatoie da tastiera a carattere singolo disponibili nel pannello delle attività. Vedere [Preferenze di Draft](/Draft_Preferences/it "Draft Preferences/it"). Le scorciatoie menzionate qui sono le scorciatoie predefinite.

* Per inserire manualmente le coordinate, inserire le componenti X, Y e Z e premere Enter dopo ognuna di esse. Oppure si può premere il pulsante ![](/images/Draft_AddPoint.svg) Inserisci punto quando ha i valori desiderati. Si consiglia di spostare il puntatore fuori dalla [Vista 3D](/3D_view/it "3D view/it") prima di inserire le coordinate.
* Premere R o fare clic sulla casella di controllo **Relativa** per attivare o disattivare la modalità relativa. Se la modalità relativa è attiva, le coordinate del secondo punto sono relative al primo punto, altrimenti sono relative all'origine del sistema di coordinate.
* Premere G o fare clic sulla casella di controllo **Globale** per attivare o disattivare la modalità globale. Se la modalità globale è attiva, le coordinate sono relative al sistema di coordinate globale, altrimenti sono relative al sistema di coordinate [piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it").
* Premere S per attivare o disattivare [Aggancia](/Draft_Snap/it "Draft Snap/it").
* Premere Esc o il pulsante Chiudi per interrompere il comando.

## Note

* Le copie speculari di [Lineee](/Draft_Line/it "Draft Line/it"), [Polilinee](/Draft_Wire/it "Draft Wire/it"), [Archi](/Draft_Arc/it "Draft Arc/it") e [Cerchi](/Draft_Circle/it "Draft Circle/it") possono essere trasformate in oggetti Draft modificabili indipendenti utilizzando [ [Draft\_Downgrade/it|Declassa]] e poi [Promuovi](/Draft_Upgrade/it "Draft Upgrade/it").
* Il comando [Part Copia Semplice](/Part_SimpleCopy/it "Part SimpleCopy/it") può essere utilizzato per creare una copia di un oggetto specchiato che non è collegato al suo oggetto di origine.

## Proprietà

Vedere anche: [Editor delle proprietà](/Property_editor/it "Property editor/it").

Un oggetto [Part Specchia](/Part_Mirror/it "Part Mirror/it") deriva da un oggetto [Funzione Part](/Part_Feature/it "Part Feature/it") e ne eredita tutte le proprietà. Ha anche le seguenti proprietà aggiuntive:

### Dati

Base

* Dati**Source** (`Link`): specifica l'oggetto di cui è stata eseguita la specchiatura.

Plane

* Dati**Base** (`Vector`): specifica il punto base del piano speculare.
* Dati**Normal** (`Vector`): specifica la direzione normale del piano speculare.

## Script

Vedere anche: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) e [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Per specchiare gli oggetti usare il metodo `mirror` del modulo Draft.

```
mirrored_list = mirror(objlist, p1, p2)

```

* `objlist` contiene gli oggetti da specchiare. È un singolo oggetto o un elenco di oggetti.
* `p1` è il primo punto del piano speculare.
* `p2` è il secondo punto del piano speculare.
* Se il [piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it") è disponibile, l'allineamento del piano speculare è determinato dalla sua normale, altrimenti viene utilizzata la direzione della vista della telecamera nella [Vista 3D](/3D_view/it "3D view/it") attiva. Se l'interfaccia grafica non è disponibile, viene utilizzato l'asse Z.
* `mirrored_list` viene restituito con i nuovi oggetti `Part::Mirroring`. È un singolo oggetto o un elenco di oggetti, a seconda di `objlist`.

Esempio:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

place = App.Placement(FreeCAD.Vector(1000, 0, 0), App.Rotation())
polygon1 = Draft.make_polygon(3, 750)
polygon2 = Draft.make_polygon(5, 750, placement=place)

p1 = App.Vector(2000, -1000, 0)
p2 = App.Vector(2000, 1000, 0)

line1 = Draft.make_line(p1, p2)
mirrored1 = Draft.mirror(polygon1, p1, p2)

Line2 = Draft.make_line(-p1, -p2)
mirrored2 = Draft.mirror([polygon1, polygon2], -p1, -p2)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Mirror/it&oldid=1513743>"