---
title: TechDraw Vista di sezione
---
|  |
| --- |
| TechDraw Vista di sezione |
| Posizione nel menu |
| TechDraw → Viste TechDraw → Inserisci Vista di sezione |
| Ambiente |
| [TechDraw](/TechDraw_Workbench/it "TechDraw Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| [TechDraw Sezione complessa](/TechDraw_ComplexSection/it "TechDraw ComplexSection/it"), [TechDraw Vista](/TechDraw_View/it "TechDraw View/it") |
|  |

## Descrizione

Lo strumento **TechDraw Vista di sezione** inserisce una vista in sezione trasversale basata sulla vista di una parte esistente.

![](/images/TechDraw_section_ANSI.png)  
![](/images/TechDraw_section_ISO.png)

Sezione di una vista già posizionata, che mostra i fori interni e la superficie di taglio tratteggiati.  
L'immagine in alto mostra il formato della freccia ANSI.  
L'immagine in basso mostra il formato della freccia ISO.

## Utilizzo

1. Selezionare una vista della parte nella [Vista 3D](/3D_view/it "3D view/it") o nella [Vista ad albero](/Tree_view/it "Tree view/it").
2. Esistono diversi modi per richiamare lo strumento:
   * Premere il pulsante ![](/images/TechDraw_SectionView.svg) Inserisci Vista di sezione.
   * Seleziona l'opzione **TechDraw → Viste TechDraw → ![](/images/TechDraw_SectionView.svg) Inserisci Vista di sezione** dal menu.
3. Si apre un pannello delle attività che aiuterà a calcolare le varie proprietà. Vengono calcolati valori ragionevoli per la direzione della vista, ma questi possono essere modificati.

![](/images/TechDraw_Section_Taskview.png)

La scheda Azioni per definire il taglio in sezione di una vista

## Proprietà

Vedere anche: [Editor delle proprietà](/Property_editor/it "Property editor/it").

Nelle proprietà della Dati**Base View** si può modificare l'aspetto della linea di sezione.

Una Vista di Sezione, formalmente un oggetto `TechDraw::DrawViewSection`, deriva da un oggetto [Part View](/TechDraw_View/it#Properties_Part_View "TechDraw View/it"), formalmente un oggetto `TechDraw::DrawViewPart` ed eredita tutti le sue proprietà. Ha inoltre le seguenti proprietà aggiuntive:

### Dati

Appearance

* Dati**Section Line Stretch** (`FloatConstraint`): regola la lunghezza della linea di sezione. `1.0` è la lunghezza normale, `1.1` sarebbe più lungo del 10%, `0.9` sarebbe più corto del 10%. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

Cut Operation

* Dati**Fuse Before Cut** (`Bool`): Fonde le forme di origine prima di eseguire il taglio in sezione.
* Dati**Trim After Cut** (`Bool`): Ritaglia inoltre la forma risultante dopo il taglio della sezione per rimuovere eventuali pezzi indesiderati. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")
* Dati**Use Previous Cut** (`Bool`) Utilizza la forma di taglio dalla vista di base invece dell'oggetto originale. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

Cut Surface Format

* Dati**Cut Surface Display** (`Enumeration`): Aspetto della superficie tagliata. Opzioni:
  + `Hide`: Nasconde la superficie tagliata, verrà visualizzato solo il contorno.
  + `Color`: Colora la superficie tagliata utilizzando l'impostazione **Cut Surface Color** nelle [Preferenze TechDraw](/TechDraw_Preferences/it "TechDraw Preferences/it").
  + `SvgHatch`: Tratteggia la sezione tagliata utilizzando un [tratteggio](/TechDraw_Hatch/it "TechDraw Hatch/it")
  + `PatHatch`: Tratteggia la sezione tagliata utilizzando un [tratteggio geometrico](/TechDraw_GeometricHatch/it "TechDraw GeometricHatch/it")
* Dati**File Hatch Pattern** (`File`): Percorso completo del file del modello di tratteggio SVG.
* Dati**File Geom Pattern** (`File`): Percorso completo del file di pattern PAT.
* Dati**Svg Included** (`FileIncluded`): Percorso completo del file del modello di tratteggio SVG incluso.
* Dati**Pat Included** (`FileIncluded`): Percorso completo del file di pattern PAT incluso.
* Dati**Name Geom Pattern** (`String`): Nome del modello PAT da utilizzare.
* Dati**Hatch Scale** (`Float`): Regolazione della dimensione del modello di tratteggio.
* Dati**Hatch Rotation** (`Float`): Rotazione del modello di tratteggio in gradi in senso antiorario. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")
* Dati (Hidden)**Hatch Offset** (`Vector`): Offset del modello di tratteggio. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")

Section

* Dati**Section Symbol** (`String`): l'identificatore di questa sezione.
* Dati**Base View** (`Link`): la vista su cui si basa questa sezione.
* Dati**Section Normal** (`Vector`): un vettore che descrive la direzione normale al piano di taglio.
* Dati**Section Origin** (`Vector`): un vettore che descrive un punto sul piano di taglio. In genere il baricentro della parte originale.
* Dati**Section Direction** (`Enumeration`): la direzione nella vista di base per questa sezione. Opzioni: `Aligned`, `Right`, `Left`, `Up` or `Down`.

### Vista

Cut Surface

* Vista**Cut Surface Color** (`Color`): colore solido per l'evidenziazione della superficie. Utilizzato se Dati**Cut Surface Display** è impostato su `Color`.
* Vista (Hidden)**Show Cut Surface** (`Bool`): mostra/nasconde la superficie tagliata.

Surface Hatch

* Vista**Geom Hatch Color** (`Color`): il colore del modello di tratteggio geometrico.
* Vista**Hatch Color** (`Color`): il colore del modello di tratteggio Svg.
* Vista (Hidden)**Hatch Cut Surface** (`Bool`): tratteggia la superficie tagliata.
* Vista**Weight Pattern** (`Float`): spessore della linea del modello di tratteggio geometrico.

## Note

* **Section Line Format**: sono supportati due formati di linea di sezione (come illustrato sopra) e controllati dall'impostazione delle preferenze "Standard linea di sezione" nella scheda Annotazione. L'opzione `ANSI` utilizza "frecce che tirano" (noto anche come "formato tradizionale" in alcune aree) e l'opzione `ISO` utilizza "frecce che spingono" (noto anche come "formato freccia di riferimento ").
* **Fuse Before Cut**: l'operazione di sezione a volte non riesce a tagliare le forme sorgente. Se **Fuse Before Cut** è true, le forme di origine vengono unite in un'unica forma prima che venga tentata l'operazione di sezione. Se si riscontrano problemi con il funzionamento della sezione, prova a invertire questo valore.
* **Trim After Cut**: l'operazione di taglio della sezione a volte lascia dietro di sé una porzione della forma sorgente. Se **Trim After Cut** è true, viene eseguita un'operazione di taglio aggiuntiva sul risultato del primo taglio che dovrebbe rimuovere eventuali pezzi indesiderati.
* **Cut Surface Display**: la superficie tagliata può essere nascosta, dipinta in un colore solido, tratteggiata utilizzando un modello Svg (predefinito) o tratteggiata utilizzando un modello PAT. Vedere [Tratteggio](/TechDraw_Hatching/it "TechDraw Hatching/it").

## Script

Vedere anche: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) e [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Lo strumento Vista di sezione può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla console [Python](/Python/it "Python/it") tramite le seguenti funzioni:

```
doc = FreeCAD.ActiveDocument
box = doc.Box
page = doc.Page

view = doc.addObject("TechDraw::DrawViewPart", "View")
page.addView(view)
view.Source = box
view.Direction = (0, 0, 1)

section = doc.addObject("TechDraw::DrawViewSection", "Section")
page.addView(section)
section.Source = box
section.BaseView = view
section.Direction = (0, 1, 0)
section.SectionNormal = (-1, 0, 0)

doc.recompute()

```

## Esempi

Per ulteriori informazioni sulle Viste di sezione e su alcuni casi d'uso, dare un'occhiata a: [Esempi di sezione TechDraw](/TechDraw_Section_Examples/it "TechDraw Section Examples/it").

![](/images/TechDraw_ExampleSection-10.png)
![](/images/TechDraw_ExampleSection-13.png)
![](/images/TechDraw_ExampleSection-15.png)
![](/images/TechDraw_ExampleSection-17.png)
![](/images/TechDraw_ExampleSection-34.png)
![](/images/TechDraw_ExampleSection-35.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_SectionView/it&oldid=1516847>"