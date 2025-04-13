---
title: Draftː Vista forma 2D
---
|  |
| --- |
| Draft Vista forma 2D |
| Posizione nel menu |
| Modifiche → Vista forma 2D |
| Ambiente |
| [Draft](/Draft_Workbench/it "Draft Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| [TechDraw Proietta forma](/TechDraw_ProjectShape/it "TechDraw ProjectShape/it") |
|  |

## Descrizione

Il comando ![](/images/Draft_Shape2DView.svg) **Draft Vista forma 2D** crea proiezioni 2D da oggetti selezionati, solitamente solidi 3D o [Arch Piani di sezione](/Arch_SectionPlane/it "Arch SectionPlane/it"). Le proiezioni vengono posizionate nella [Vista 3D](/3D_view/it "3D view/it").

Le proiezioni Draft Vista forma 2D possono essere visualizzate su una pagina [TechDraw](/TechDraw_Workbench/it "TechDraw Workbench/it") utilizzando il comando [TechDraw DraftView](/TechDraw_DraftView/it "TechDraw DraftView/it"). In alternativa, [TechDraw](/TechDraw_Workbench/it "TechDraw Workbench/it") offre i propri comandi di proiezione. Ma questi creano proiezioni che vengono visualizzate solo sulla pagina di disegno e non nella [Vista 3D](/3D_view/it "3D view/it").

![](/images/Draft_Shape2DView_example.jpg)

Proiezione di forme solide sul piano XY

## Utilizzo

1. Facoltativamente, ruotare la [Vista 3D](/3D_view/it "3D view/it"). La direzione della telecamera nella [Vista 3D](/3D_view/it "3D view/it") determina il vettore di proiezione. Ad esempio, una [vista dall'alto](/Std_ViewTop/it "Std ViewTop/it") verrà proiettata sul piano XY. Il vettore di proiezione viene ignorato per le proiezioni create da [Arch Piano sezione](/Arch_SectionPlane/it "Arch SectionPlane/it").
2. Opzionalmente selezionare uno o più oggetti.
3. Esistono diversi modi per invocare il comando:
   * Premere il pulsante ![](/images/Draft_Shape2DView.svg) Vista forma 2D.
   * Selezionare l'opzione **Modifiche → ![](/images/Draft_Shape2DView.svg) Vista forma 2D** dal menu.
4. Se non si ha ancora selezionato un oggetto: selezionare un oggetto nella [Vista 3D](/3D_view/it "3D view/it").
5. Gli oggetti proiettati vengono creati sul piano XY.

## Come produrre piante e sezioni con spessori di linea diversi

![](/images/Draft_shape2dview_example_plan.png)

I disegni con spessori di linea diversi per le linee visualizzate e tagliate possono essere facilmente prodotti utilizzando due oggetti VistaForma2D da uno stesso [Arch Piano Sezione](/Arch_SectionPlane/it "Arch SectionPlane/it"). Uno degli oggetti VistaForma2D ha la sua modalità di proiezione impostata su **Solid**, che esegue il rendering delle linee visualizzate, e un altro impostato su **Cut lines** o **Cut faces** per eseguire il rendering del taglio linee. Le due viste shape2D vengono quindi posizionate nella stessa posizione, una sopra l'altra.

## Proprietà

Vedere anche: [Editor delle proprietà](/Property_editor/it "Property editor/it").

Un oggetto Draft Vista Forma 2D è derivato da un [Part Part2DObject](/Part_Part2DObject/it "Part Part2DObject/it") e ne eredita tutte le proprietà. Ha anche le seguenti proprietà aggiuntive:

### Data

Draft

* Dati**Auto Update** (`Bool`): specifica se la proiezione deve essere ricalcolata automaticamente se l'oggetto Dati**Base** cambia. Selezionare `false` può essere utile se ci sono molte Draft VistaForma2D in un documento o se sono complesse. Se impostato su `false` il comando [Aggiorna](/Std_Refresh/it "Std Refresh/it") deve essere utilizzato per aggiornare la proiezione.
* Dati**Base** (`Link`): specifica l'oggetto da proiettare.
* Dati**Clip** (`Bool`): se è True, il contenuto viene ritagliato ai bordi del piano di sezione, se applicabile. Ciò sovrascrive la proprietà Clip dell'oggetto base.
* Dati**Face Numbers** (`IntegerList`): specifica gli indici delle facce da proiettare. Funziona solo se Dati**Projection Mode** è `Individual Faces`.
* Dati**Fuse Arch** (`Bool`): specifica se [BIM](/BIM_Workbench/it "BIM Workbench/it") dello stesso tipo e materiale sono fusi o meno.
* Dati**Hidden Lines** (`Bool`): specifica se le linee nascoste vengono visualizzate o meno.
* Dati**In Place** (`Bool`): funziona solo se l'oggetto selezionato è un [Arch Piano Sezione](/Arch_SectionPlane/it "Arch SectionPlane/it") e Dati**Projection Mode** è `Cutlines` o `Cutfaces`, specifica se la proiezione apparirà complanare al piano di sezione.
* Dati**Projection** (`Vector`): specifica la direzione della proiezione. Ignorato se Dati**Base** è un [Arch Piano Sezione](/Arch_SectionPlane/it "Arch SectionPlane/it").
* Dati**Projection Mode** (`Enumeration`): specifica la modalità di proiezione. Sono disponibili le seguenti modalità:
  + `Solid`: proietta l'intero oggetto selezionato.
  + `Individual Faces`: proietta solo i volti nell'elenco Dati**Face Numbers**.
  + `Cutlines`: funziona solo se l'oggetto selezionato è un [Arch Piano Sezione](/Arch_SectionPlane/it "Arch SectionPlane/it"), proietta solo i bordi tagliati dal piano di sezione.
  + `Cutfaces`: funziona solo se l'oggetto selezionato è un [Arch Piano Sezione](/Arch_SectionPlane/it "Arch SectionPlane/it"), proietta le aree tagliate attraverso i solidi dal piano di sezione come facce.
  + `Facce solide`: proietta l'intero oggetto selezionato tagliando le facce una per una. Può essere utilizzato se la modalità `Solid` dà risultati errati.
* Dati**Segment Length** (`Float`): specifica la dimensione in millimetri dei segmenti lineari se Dati**Tessellation** è `true`.
* Dati**Tessellation** (`Bool`): specifica se deve essere eseguita la tassellazione. La tassellatura significa che le curve vengono sostituite da sequenze di segmenti di linea. Questo può essere computazionalmente intenso se Dati**Segment Length** è troppo breve.
* Dati**Visible Only** (`Bool`): specifica se la proiezione deve essere ricalcolata solo se è visibile.
* Dati**Exclusion Points** (`Vector list`): un elenco di punti di esclusione. Qualsiasi bordo che passa attraverso uno di questi punti non verrà disegnato. [disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it")
* Dati**Exclusion Names** (`String list`)ː un elenco di nomi oggetto. Qualsiasi oggetto figlio visualizzato o tagliato con un nome in quell'elenco non verrà disegnato.

### Vista

Draft

* Vista**Pattern** (`Enumeration`): not used.
* Vista**Pattern Size** (`Float`): not used.

## Script

Vedere anche: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) e [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Per creare una proiezione 2D usare il metodo `make_shape2dview` ([disponibile dalla versione 0.19](/Release_notes_0.19/it "Release notes 0.19/it")) del modulo Draft. Questo metodo sostituisce il metodo deprecato `makeShape2DView`.

```
shape2dview = make_shape2dview(baseobj, projectionVector=None, facenumbers=[])

```

* `baseobj` è l'oggetto da proiettare.
* `projectionVector` è il vettore di proiezione. Se non fornito viene utilizzato l'asse Z.
* `facenumbers` è un elenco di numeri di facce (in base 0). Se fornite vengono considerate solo queste facce.
* `shape2dview` viene restituito con la proiezione 2D creata.

Se necessario, modificare la proprietà `ProjectionMode` dell'oggetto creato. Può essere: `"Solid"`, `"Individual Faces"`, `"Cutlines"`, `"Cutfaces"` o `" Facce solide"`.

Esempio:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

box = doc.addObject("Part::Box", "Box")
box.Length = 2300
box.Width = 500
box.Height = 1000

shape1 = Draft.make_shape2dview(box)

shape2 = Draft.make_shape2dview(box, App.Vector(1, -1, 1))

shape3 = Draft.make_shape2dview(box, App.Vector(-1, 1, 1), [0, 5])
shape3.ProjectionMode = "Individual Faces"

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Shape2DView/it&oldid=1513764>"