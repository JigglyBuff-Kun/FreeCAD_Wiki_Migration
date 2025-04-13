---
title: Drawing
---
## Introduzione

In FreeCAD la parola "Drawing" (Disegno tecnico) viene normalmente utilizzata per fare riferimento a una proiezione 2D di un [modello 3D](/Model/it "Model/it"). Generalmente viene creato con l'ambiente [TechDraw](/TechDraw_Workbench/it "TechDraw Workbench/it") .

## Utilizzo

1. Iniziare con un [modello 3D](/Model/it "Model/it") già creato, creato ad esempio con [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it"). In realtà, funziona con qualsiasi oggetto che ha una [Forma](/Shape/it "Shape/it"), inclusi gli oggetti 2D.
2. Passare in [TechDraw](/TechDraw_Workbench/it "TechDraw Workbench/it").
3. Premere il pulsante ![](/images/TechDraw_PageDefault.svg) [Nuovo disegno standard](/TechDraw_PageDefault/it "TechDraw PageDefault/it") o ![](/images/TechDraw_PageTemplate.svg) [Nuovo disegno da modello](/TechDraw_PageTemplate/it "TechDraw PageTemplate/it") per creare una pagina.
4. Selezionare il modello esistente, quindi premere ![](/images/TechDraw_View.svg) [Vista di oggetto](/TechDraw_View/it "TechDraw View/it") o ![](/images/TechDraw_ProjectionGroup.svg) [Gruppo di proiezioni](/TechDraw_ProjectionGroup/it "TechDraw ProjectionGroup/it").
5. Viene creata una proiezione 2D sulla pagina. Ora è possibile regolare le sue proprietà, ad esempio Dati**Scala**, Dati**Rotazione**, e Dati**Direzione**.
6. Quando il disegno è pronto, è possibile premere ![](/images/TechDraw_ExportPageSVG.svg) [Esporta pagina in SVG](/TechDraw_ExportPageSVG/it "TechDraw ExportPageSVG/it"), ![](/images/TechDraw_ExportPageDXF.svg) [Esporta pagina in DXF](/TechDraw_ExportPageDXF/it "TechDraw ExportPageDXF/it"), o usare [Esporta](/Std_Export/it "Std Export/it"), per esportare la pagina in formato SVG, DXF o PDF per un ulteriore utilizzo in un altro software o per la stampa.

## Note

Nell'uso informale, un "Disegno"può essere qualsiasi figura geometrica che è visibile nel [vista 3D](/3D_view/it "3D view/it"), e quindi il suo concetto può essere confuso con quello di "[Corpo](/Body/it "Body/it")", "[Parte](/Part/it "Part/it")", o "[modello](/Model/it "Model/it")".

Tuttavia, quando è richiesta maggiore precisione, è necessario fare distinzione.

* Un "[Corpo](/Body/it "Body/it")" ([Corpo o Body di PartDesign](/PartDesign_Body/it "PartDesign Body/it")) è un oggetto derivato da una [Part Feature](/Part_Feature/it "Part Feature/it") (classe `Part::Feature`), creato con [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it").
* Una "[Parte](/Part/it "Part/it")" ([App Part](/App_Part "App Part")) è usato per raggruppare diversi "[Corpi](/Body/it "Body/it")" per formare un assemblaggio.
* Un "Disegno" è una proiezione 2D di un "Corpo" o di una "Parte".

Retrieved from "<http://wiki.freecad.org/index.php?title=Drawing/it&oldid=1253680>"