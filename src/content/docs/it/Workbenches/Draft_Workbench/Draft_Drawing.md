---
title: Draft Disegno
---
:::caution
QUESTO COMANDO È OBSOLETOSia il comando che l'Ambiente Drawingcon cui funziona non sono disponibili inversione 0.21 e superiori. Utilizzare invece il comandoTechDrawe il comandoTechDraw Vista di Draft.
:::

|  |
| --- |
| Disegno |
| Posizione nel menu |
| *Nessuno* |
| Ambiente |
| [Drawing](/Drawing_Workbench/it "Drawing Workbench/it"), [Draft](/Draft_Workbench/it "Draft Workbench/it"), [Arch](/Arch_Workbench/it "Arch Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| [TechDraw Vista di Draft](/TechDraw_DraftView/it "TechDraw DraftView/it") |
|  |

## Descrizione

Il comando ![](/images/Draft_Drawing.svg) **Draft Drawing** inserisce viste degli oggetti selezionati in una pagina [drawing](/Drawing_Workbench/it "Drawing Workbench/it").

Questo comando è simile al comando [Draft View](/Drawing_View/it "Drawing View/it") ma è ottimizzato per gli oggetti [Draft](/Draft_Workbench/it "Draft Workbench/it"). Contrariamente a quel comando, può gestire oggetti specifici come [Draft Quote](/Draft_Dimension/it "Draft Dimension/it") e [Draft Testi](/Draft_Text/it "Draft Text/it"), e può eseguire il rendering delle facce.

Questo comando è ormai obsoleto. Utilizzare invece l' [Ambiente TechDraw](/TechDraw_Workbench/it "TechDraw Workbench/it") e il comando [TechDraw Vista di Draft](/TechDraw_DraftView/it "TechDraw DraftView/it").

![](/images/Draft_drawing_example.jpg)

A sinistra gli oggetti Draft selezionati. A destra le viste del disegno create.

## Utilizzo

1. Per utilizzare questo comando in FreeCAD versione 0.19 e successive è necessario aggiungere un pulsante ad una barra degli strumenti personalizzata. Vedere [Personalizzazione dell'interfaccia](/Interface_Customization/it "Interface Customization/it").
2. Selezionare uno o più oggetti. Verrà creata una vista separata per ciascun oggetto.
3. Facoltativamente aggiungere una pagina [Drawing](/Drawing_Workbench/it "Drawing Workbench/it") alla selezione. In caso contrario, la vista verrà inserita nella prima pagina del documento. Se nel documento non sono presenti pagine, viene creata prima una nuova pagina.
4. Premere il pulsante ![](/images/Draft_Drawing.svg) Draft Drawing.
5. C'è un bug nella versione 0.19 del comando di FreeCAD. Il valore iniziale della proprietà Dati**Direction** è `[0, 0, 0]` che non è consentito. Per gli oggetti su un piano parallelo al piano XY del sistema di coordinate globale dovrebbe essere modificato in `[0, 0, 1]`. Dopo aver modificato questa proprietà, potrebbe essere necessario [ricalcolare](/Std_Refresh/it "Std Refresh/it") la pagina e la vista.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Drawing/it&oldid=1302146>"