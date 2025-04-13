---
title: Tutorial base di TechDraw
---
|  |
| --- |
| Tutorial |
| Argomento |
| Modellazione |
| Livello di difficoltà |
| Base |
| Tempo di esecuzione |
| Meno di un'ora |
| Autori |
| [WandererFan](/index.php?title=User:WandererFan&action=edit&redlink=1 "User:WandererFan (page does not exist)") |
| Versione di FreeCAD |
| 0.17 o superiore |
| Files di esempio |
| [Basic PartDesign for v0.17 Sample](https://github.com/FreeCAD/Examples/blob/master/Basic_Part_Design_Tutorial_Example_017_Files/Basic_Part_Design_Tutorial_017.fcstd?raw=true) [Basic TechDraw Tutorial Sample](https://github.com/FreeCAD/Examples/blob/master/Basic_TechDraw_Tutorial_Example_Files/Basic_TechDraw_Tutorial.fcstd?raw=true) |
| Vedere anche |
| *Nessuno* |
|  |

## Introduzione

Questo tutorial introduce il nuovo utente ad alcuni strumenti e alle tecniche utilizzate nell'ambiente di ![](/images/Workbench_TechDraw.svg) [Disegno tecnico (TechDraw)](/TechDraw_Workbench/it "TechDraw Workbench/it"). Questo tutorial non è una guida completa ed esaustiva all'ambiente TechDraw e molti dei suoi strumenti e delle sue funzionalità non vengono trattati. Questo tutorial guida l'utente attraverso i passaggi necessari per produrre i disegni tecnici della Parte descritta nel tutorial [Esercitazione di base su Part](/Basic_Part_Design_Tutorial/it "Basic Part Design Tutorial/it").

## Prima di iniziare

Scaricare il [file di esempio](https://github.com/FreeCAD/Examples/blob/master/Basic_Part_Design_Tutorial_Example_017_Files/Basic_Part_Design_Tutorial_017.fcstd?raw=true) dal tutorial di Part Design.

## L'Obiettivo

In questo tutorial, si utilizzerà TechDraw per creare i disegni 2D della parte 3D sottostante. Creeremo più viste della parte e aggiungeremo le quote chiave. Questo tutorial non userà tutte le funzionalità e gli strumenti disponibili all'interno di TechDraw, ma dovrebbe essere sufficiente per fornire all'utente una base su cui costruire le proprie conoscenze e abilità.

## La Parte

![](/images/Tut17_final_refined.png)

## Creare un disegno

### Inizio

* Prima di iniziare si possono regolare le [preferenze](/TechDraw_Preferences/it "TechDraw Preferences/it"). Vedere la nota 1.
* Per prima cosa aprire il file contenente la parte 3D. Quindi assicurarsi di essere nell'ambiente TechDraw.
* Selezionare gli elementi nella finestra Drawing o nella vista combinata. La selezione in TechDraw funziona come nella finestra 3D. Gli oggetti diventano gialli quando il cursore è in posizione per selezionarli e diventano verdi quando vengono selezionati. Per selezionare più elementi usare il tasto Ctrl mentre si fa clic.

### Viste e quotatura

In TechDraw tutti i lavori iniziano con una Pagina. Le Pagine sono basate sui modelli e contengono le Viste.

1. Per creare una nuova Pagina cliccare su ![](/images/TechDraw_PageDefault.svg) [Inserisci Pagina predefinita](/TechDraw_PageDefault/it "TechDraw PageDefault/it").
2. Fare clic sul Corpo nella [Vista 3D](/3D_view/it "3D view/it") o nella [Vista combinata](/Combo_view/it "Combo view/it").
3. Cliccare su ![](/images/TechDraw_View.svg) [Inserisci Vista](/TechDraw_View/it "TechDraw View/it"). Questo aggiunge la Vista alla pagina, che è appena stata creata.

Ora nella pagina c'è una vista dall'alto del corpo, però è un po' piccola.

![](/images/TDTut_TopView1to1.png)

1. Selezionare la pagina nella [vista combinata](/Combo_view/it "Combo view/it") e scorrere fino alla proprietà Scala della scheda Dati.
2. Cambiare la scala da 1 a 2 e premere Invio. La vista diventa più grande.
3. Trascinare la vista dal blocco della documentazione in basso a destra della pagina.

![](/images/TDTut_TopView2to1.png)

Meglio, ma un po' noioso. Aggiungiamo alcune quote.

1. Selezionare il vertice in alto a sinistra (piccolo punto) con il LMB (pulsante sinistro del mouse), quindi selezionare anche (Ctrl+LMB) il vertice in basso a sinistra.
2. Cliccare su ![](/images/TechDraw_VerticalDimension.svg) [Quota verticale](/TechDraw_VerticalDimension/it "TechDraw VerticalDimension/it"). Trascinare il testo della quota lontano dal corpo.
3. Riprovare con i vertici in alto a sinistra e in alto a destra e ![](/images/TechDraw_HorizontalDimension.svg) [Quota orizzontale](/TechDraw_HorizontalDimension/it "TechDraw HorizontalDimension/it").

![](/images/TDTut_TopView2Dims.png)

### Testo editabile

Bisogna aggiungere della documentazione al disegno.

1. Fare clic sul quadratino verde accanto a Titolo nel blocco della documentazione. Si apre una finestra pop-up in cui si può cambiare titolo in qualcosa di più significativo.
2. Solo per esercizio, mettere il proprio nome nel campo Designed by.

![](/images/TDTut_DocBlock.png)

Miglioramenti. Aggiungere del testo alla pagina.

1. Cliccare su ![](/images/TechDraw_Annotation.svg) [Annotazione TechDraw](/TechDraw_Annotation/it "TechDraw Annotation/it"). Al centro della pagina appare un blocco di testo.
2. Trascinare il blocco di testo lontano dalla vista principale.
3. Fare clic su Annotazione nella vista combinata e scorrere fino alla proprietà Testo nella scheda Dati.
4. Fare clic nell'area dati, fare clic sui puntini a destra del campo. Si apre una finestra pop-up in cui si può cambiare il testo in qualcosa di più significativo.

![](/images/TDTut_Annotation.png)

Prima di lasciare questa pagina, vediamo come sarà quando la stamperemo.

1. Cliccare su ![](/images/TechDraw_ToggleFrame.svg) [TechDraw Attiva/Disattiva cornice](/TechDraw_ToggleFrame/it "TechDraw ToggleFrame/it"). I riquadri Vertices e View scompaiono. Per riaverli fare nuovamente clic su Attiva/disattiva.

![](/images/TDTut_Toggle.png)

### Viste Multiple di una Singola Parte

Creiamo un disegno a vista multipla utilizzando un Modello diverso come punto di partenza. Useremo la convenzione del Primo Angolo, ma potete passare al Terzo Angolo se questa è la convenzione locale che volete utilizzare.

1. Cliccare su ![](/images/TechDraw_PageTemplate.svg) [Pagina da modello](/TechDraw_PageTemplate/it "TechDraw PageTemplate/it"). Appare una finestra di selezione dei file. Selezionare un file modello. Usare "ANSIB.SVG". Appare una nuova scheda.
2. Selezionare "Body" e "Page001" (se nel documento ci sono più pagine, bisogna dire a TechDraw quale deve usare).
3. Cliccare su ![](/images/TechDraw_ProjectionGroup.svg) [Gruppo di proiezioni](/TechDraw_ProjectionGroup/it "TechDraw ProjectionGroup/it"). Appare la familiare vista piccola al centro della pagina e nel pannello Azioni appare una finestra di dialogo.
4. Fare clic su diverse caselle nella sezione Viste secondarie della finestra di dialogo.
5. Trascinare la vista con l'etichetta "Front". Tutte le altre viste si muovono con essa.
6. Cambiare la casella a discesa Scala da Pagina a Personalizzata e cambiare la scala personalizzata in 2: 1. Premere il tasto OK.

![](/images/TDTut_ProjGroup21.png)

1. Nella vista denominata "TopLeftFront", selezionare i due vertici all'estremità del bordo anteriore del pezzo.
2. Cliccare su ![](/images/TechDraw_LengthDimension.svg) [Quota allineata](/TechDraw_LengthDimension/it "TechDraw LengthDimension/it"). Trascinare il testo della quota lontano dal corpo.

### Collegare le Quote al Modello 3D

Notate un problema con la quota che è appena stata creata?

![](/images/TDTut_NewLengthDim.png)

Dalla prima parte di questo tutorial, sappiamo che il pezzo da lavorare è largo 53 mm, ma la nuova dimensione è 43.27. Questo perché "TopLeftFront" è una [proiezione isometrica](https://en.wikipedia.org/wiki/Isometric_projection), e il nostro primo disegno è stato invece una [orthogonal (multiview) proiezione](https://en.wikipedia.org/wiki/Orthographic_projection). Per ottenere il giusto valore, si deve collegare la dimensione direttamente al modello 3D.

1. Annotare il nome della dimensione difettosa nel pannello Combo. Ne avremo bisogno tra un minuto.
2. Passare alla scheda 3D e selezionare i vertici alle estremità del bordo anteriore del pezzo. Selezionare anche Page001.
3. Cliccare su ![](/images/TechDraw_LinkDimension.svg) [Nuovo Link](/TechDraw_LinkDimension/it "TechDraw LinkDimension/it"). Nel pannello Azioni si apre una finestra di dialogo.
4. Nella finestra di dialogo, spostare la dimensione dalla colonna Disponibile alla colonna Selezionato. Premere OK.
5. Ritornare a Page001. Ora per la dimensione si dovrebbe leggere il valore corretto di 53. (se si continua a vedere 43.27, può essere necessario premere il pulsante Ricalcola o trascinare un po' il valore della quota, fino a quando non cambia).

## Andare avanti

In questo tutorial si dovrebbe aver imparato abbastanza su TechDraw per produrre un disegno come questo (by [NormandC](/User:Normandc "User:Normandc")). Vedere nota 2.

![](/images/TDTut_FC018_TechDraw_Dim_Iso_View_01_NC.png)

TechDraw offre molte altre funzionalità da esplorare: viste di sezione, viste di dettagli, simboli Svg, immagini, tratteggio di facce.

## Note

1. C'è un eccellente set di preferenze suggerite in questa [discussione nel Forum](https://www.forum.freecadweb.org/viewtopic.php?f=3&t=30083#p248189).
2. Questo disegno è stato prodotto con la versione 0.18. Mostra le quote nel formato corretto per una vista isometrica. Nella versione 0.17 le linee di riferimento sono perpendicolari al bordo invece che allineate con gli assi.

## Risorse aggiuntive

* File FreeCAD di questo esercizio per il confronto (realizzato con 0.17) [Download](https://github.com/FreeCAD/Examples/blob/master/Basic_TechDraw_Tutorial_Example_Files/Basic_TechDraw_Tutorial.fcstd?raw=true)

Retrieved from "<http://wiki.freecad.org/index.php?title=Basic_TechDraw_Tutorial/it&oldid=1503075>"