---
title: TechDraw Link alla geometria 3D
---
:::caution
Lo strumentoTechDraw Link alla geometria 3DèDEPRECATOe verrà rimosso in una versione futura. Dovrebbe essere utilizzato solo con versioni e file vecchi (< v0.19) di FreeCAD.Nelle versioni più recenti è necessario utilizzare lo strumentoTechDraw Ripara la quotaper modificare sia i riferimenti 2D che quelli 3D.
:::

|  |
| --- |
| TechDraw Link alla geometria 3D |
| Posizione nel menu |
| TechDraw → Quotatura → Link alla geometria 3D |
| Ambiente |
| [TechDraw](/TechDraw_Workbench/it "TechDraw Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| [TechDraw Vista](/TechDraw_View/it "TechDraw View/it"), [TechDraw Gruppo proiezioni](/TechDraw_ProjectionGroup/it "TechDraw ProjectionGroup/it") |
|  |

## Descrizione

Lo strumento **TechDraw Link alla geometria 3D** crea un collegamento tra la geometria 3D e una o più quote proiettate esistenti su una Pagina. Questo collegamento consente alla Quota di utilizzare valori 3D effettivi anziché valori proiettati 2D.

L'uso più comune dello strumento Link alla geometria 3D è nella quotatura delle viste isometriche in un gruppo di proiezione. La lunghezza proiettata di un Bordo in una vista isometrica, ovviamente, non sarà necessariamente uguale alla lunghezza effettiva del bordo. In una vista ortogonale le lunghezze proiettate e quelle effettive saranno uguali.

Il link alla geometria 3D indica alla Quota di calcolare il valore direttamente dalla geometria 3D.

## Utilizzo

1. Creare una quota appropriata nella Pagina di disegno utilizzando uno qualsiasi tra [TechDraw Quota allineata](/TechDraw_LengthDimension/it "TechDraw LengthDimension/it"), [TechDraw Quota orizzontale](/TechDraw_HorizontalDimension/it "TechDraw HorizontalDimension/it"), ecc. Questa quota sarà nel posto giusto sulla Pagina, ma mostrerà un valore proiettato.
2. Selezionare la geometria nella vista 3D, ad esempio un bordo, che corrisponde alla geometria proiettata della propria quota.
3. Esistono diversi modi per richiamare lo strumento:
   * Premere il pulsante ![](/images/TechDraw_LinkDimension.svg) Collega dimensione alla geometria 3D.
   * Seleziona l'opzione **TechDraw → Quotatura → ![](/images/TechDraw_LinkDimension.svg) Link alla geometria 3D** dal menu.
4. Si apre un pannello delle azioni.
5. Selezionare una o più quote da collegare alla geometria 3D selezionata.
6. Premere OK.

L'operazione di collegamento modifica la proprietà Dati**MeasureType** della quota da `Projected` a `True`.

## Limitazioni

Gli oggetti Quota sono vulnerabili al "[problema di denominazione topologica](/Topological_naming_problem/it "Topological naming problem/it")". Per ulteriori informazioni, vedere [TechDraw Quota allineata](/TechDraw_LengthDimension/it "TechDraw LengthDimension/it"). Si consiglia di collegare le quote come uno degli ultimi passaggi del processo di disegno.

Lo strumento Link alla dimensione non impedisce di creare collegamenti errati, quindi bisogna scegliere il bordo corretto dalla vista 3D quando si crea il collegamento.

Al momento non c'è modo di interrompere un link; si può però ripristinare la proprietà Dati**MeasureType** in `Projected` in modo che la dimensione utilizzi il valore proiettato invece del valore collegato.

Notare che se la dimensione da collegare si basa su due vertici, si devono selezionare due vertici nella vista 3D. Allo stesso modo se la dimensione si basa su un bordo, è necessario selezionare un bordo nella vista 3D.

## Script

*Vedere anche:* [API TechDraw](/TechDraw_API/it "TechDraw API/it") e [Nozioni di base sugli script di FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Lo strumento TechDraw Link alla geometria 3D non è utilizzabile direttamente nelle macro, ma la modifica della proprietà Dati**References 3D** può ottenere lo stesso risultato.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_LinkDimension/it&oldid=1490125>"