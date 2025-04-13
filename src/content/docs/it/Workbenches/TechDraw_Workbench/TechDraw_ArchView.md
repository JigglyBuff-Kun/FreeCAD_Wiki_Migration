---
title: TechDraw Vista di Arch
---
|  |
| --- |
| TechDraw Vista di Arch |
| Posizione nel menu |
| TechDraw → Viste da altri ambienti di lavoro → Inserisci Oggetto ambiente BIM |
| Ambiente |
| [TechDraw](/TechDraw_Workbench/it "TechDraw Workbench/it"), [BIM](/BIM_Workbench/it "BIM Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Arch Piano di sezione](/Arch_SectionPlane/it "Arch SectionPlane/it") |
|  |

## Descrizione

Lo strumento **TechDraw Vista di Arch** inserisce una Vista di Arch, una vista di un ![](/images/Arch_SectionPlane.svg) [Piano di sezione Arch](/Arch_SectionPlane/it "Arch SectionPlane/it"), su una [Pagina TechDraw](/TechDraw_PageDefault/it "TechDraw PageDefault/it").

[disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): lo strumento [TechDraw Vista](/TechDraw_View "TechDraw View") può anche creare una vista di Arch.

![](/images/TechDraw_Arch_example.jpg)

## Utilizzo

1. Selezionare un piano di sezione di Arch nella [Vista 3D](/3D_view/it "3D view/it") o nella [Vista albero](/Tree_view/it "Tree view/it").
2. Se nel documento sono presenti più pagine di disegno: facoltativamente aggiungere la pagina desiderata alla selezione selezionandola nella [Vista ad albero](/Tree_view/it "Tree view/it").
   * Selezionare l'opzione **TechDraw → Viste da altri ambienti di lavoro → ![](/images/TechDraw_ArchView.svg) Inserisci oggetto Ambiente BIM** dal menu.
3. Se nel documento sono presenti più pagine di disegno e se nessuna pagina è visualizzata nell'[Area della vista principale](/Main_view_area/it "Main view area/it") e non si ha ancora selezionato una pagina, si apre la finestra di dialogo **Scelta pagina**:
   1. Selezionare la pagina desiderata.
   2. Premere il pulsante OK.

## Opzioni

* La Vista di Arch è renderizzata dall'[Ambiente BIM](/BIM_Workbench/it "BIM Workbench/it").
* [Quotature Draft](/Draft_Snap_Dimensions/it "Draft Snap Dimensions/it"), [Testi Draft](/Draft_Text/it "Draft Text/it") e qualsiasi altro oggetto 2D (Sketch o Draft) considerato dal piano di sezione viene reso "così com'è" (senza intersezioni o linee nascoste) sopra la geometria solida
* Il volume di [Arch Spazio](/Arch_Space/it "Arch Space/it") non viene renderizzato, verrà renderizzata solo l'etichetta
* Le linee di taglio, le linee proiettate (se la proprietà Mostra nascosto è impostata su True) e le linee 2D sopra possono essere renderizzate con larghezze di linea diverse. Questo può essere configurato nelle preferenze di Arch.
* Vista di Arch ha due modalità di rendering:
  + Wireframe, che utilizza gli algoritmi OpenCasCade di [TechDraw](/TechDraw_Workbench/it "TechDraw Workbench/it"), è veloce e produce solo linee (non è possibile il riempimento della faccia)
  + Solido, che si basa sull'[Painter's algorithm](https://en.wikipedia.org/wiki/Painter%27s_algorithm) ed è in grado di rendere i volti riempiti con il colore della loro forma. Tuttavia, è molto più lento e può fallire in molte situazioni.

:   L'immagine seguente illustra la differenza tra le due modalità di rendering:

:   ![](/images/TechDraw_Arch_rendering.jpg)

* Per le [Tubazioni Arch](/Arch_Pipe/it "Arch Pipe/it") sono renderizzate solo le linee di base, ma non il volume dei tubi:

:   ![](/images/TechDraw_Arch_piping.jpg)

## Note

La Vista di Arch viene renderizzata all'interno dell'ambiente [BIM](/BIM_Workbench/it "BIM Workbench/it"), pertanto TechDraw ha un controllo limitato sul suo aspetto. Potrebbe essere necessario apportare modifiche all'interno di Arch per ottenere la rappresentazione desiderata.

## Proprietà

Vedere anche: [Editor delle proprietà](/Property_editor/it "Property editor/it").

Una Vista Arch, formalmente un oggetto `TechDraw::DrawViewArch`, ha le [proprietà](/TechDraw_View#Properties_Part_View "TechDraw View") comuni a tutti i tipi di Vista. Ha inoltre le seguenti proprietà aggiuntive:

### Dati

Arch view

* Dati**Source** (`Link`): l'oggetto piano di sezione da visualizzare.
* Dati**All On** (`Bool`): se gli oggetti nascosti devono essere mostrati o meno. Se `false`, viene eseguito il rendering solo degli oggetti visibili nella vista 3D.
* Dati**Render Mode** (`Enumeration`): la modalità di rendering da utilizzare, `Solid` o `Wireframe`.
* Dati**Fill Spaces** (`Bool`): Se `true`, gli Spazi Arch vengono visualizzati come un'area colorata.
* Dati**Show Hidden** (`Bool`): se la geometria nascosta (la parte della geometria che si trova dietro il piano di sezione) viene mostrata o meno. Verrà visualizzato in una linea tratteggiata, che può essere configurata nelle preferenze di Arch.
* Dati**Show Fill** (`Bool`): se le aree tagliate devono essere riempite con un colore grigio o meno.
* Dati (Float)**Line Width** (`Float`): la larghezza delle linee principali. I rapporti delle linee di taglio e delle larghezze delle linee proiettate/2D possono essere configurati nelle preferenze di Arch.
* Dati**Font Size** (`Float`): la dimensione di tutti i testi che appaiono in questa vista.
* Dati**Cut Line Width** (`Float`): larghezza delle linee di taglio in questa vista.
* Dati**Join Arch** (`Bool`): Se `true`, i muri e le strutture verranno fusi dal materiale.
* Dati**Line Spacing** (`Float`): la spaziatura tra le righe da utilizzare per i testi su più righe. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

Drawing view

* Dati (Hidden)**Symbol** (`String`): il codice SVG che definisce questo simbolo.
* Dati**Editable Texts** (`StringList`): valori di sostituzione per le stringhe modificabili in questo simbolo.
* Dati**Owner** (`Link`): feature a cui è associato questo simbolo. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

## Script

Vedere anche: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) e [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Lo strumento Vista di Arch può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla [console di Python](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it") tramite la seguente funzione:

```
dv = FreeCAD.ActiveDocument.addObject('TechDraw::DrawViewArch','TestArch')
dv.Source = mySectionPlane
rc = page.addView(dv)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ArchView/it&oldid=1490955>"