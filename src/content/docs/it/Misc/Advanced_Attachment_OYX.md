---
title: Associazione avanzata OYX
---
|  |
| --- |
| Tutorial |
| Argomento |
| Associazione |
| Livello di difficoltà |
| Intermedio avanzato |
| Tempo di esecuzione |
| 1 ora |
| Autori |
| drmacro |
| Versione di FreeCAD |
| 0.19 o superiore |
| Files di esempio |
| [TBD] |
| Vedere anche |
| *Nessuno* |
|  |

![](/images/AttOYX_Setup.png)

Gli oggetti nella posizione iniziale

## Introduzione

Questa dimostrazione affronta l'uso della modalità di associazione OYX per fissare la posizione dell'origine di uno schizzo come descritto in [Part: Associazione](/Part_EditAttachment/it "Part EditAttachment/it"), non è completa, ma si spera che possa aiutare gli utenti a sperimentare.

L'immagine sopra mostra la geometria utilizzata in questa dimostrazione.

Il riquadro in basso a destra mostra la vista dall'alto della scena. Notare che la scena include uno schizzo contenente un quadrato e un testo che indica gli assi verticale (Y) e orizzontale (X) dello schizzo. L'angolo inferiore sinistro del quadrato si trova a 0,0,0 dello schizzo (l'origine dello schizzo).

L'origine dello schizzo e l'origine globale (designata dagli [assi](/Std_AxisCross/it "Std AxisCross/it") rosso, verde e blu) sono le stesse. Negli altri fotogrammi dell'immagine possiamo vedere che il quadrato è a Z=0, quindi lo schizzo è nel piano XY.

Sono presenti altri due schizzi che includono la geometria che verrà utilizzata per riposizionare lo schizzo contenente il quadrato. Uno schizzo contiene una linea arancione orientata lungo l'asse Z globale nel piano XZ. L'altro schizzo contiene una linea gialla nel piano XY.

## Discussione

La modalità di associazione Allinea O-Y-X è definita come segue in [Part:Attachment](/Part_EditAttachment/it "Part EditAttachment/it"): *Abbina l'origine dell'oggetto con il primo vertice di riferimento e allinea i suoi assi del piano verticale e orizzontale verso il vertice/lungo la linea.*. Rileva inoltre che esistono diverse combinazioni di riferimenti.

:   Combinazioni di riferimenti
:   Vertice, Vertice, Vertice
:   Vertice, Vertice, Bordo
:   Vertice, Bordo, Vertice
:   Vertice, Bordo, Bordo
:   Vertice, Vertice
:   Vertice, Bordo

Cominciamo con *Vertice, Vertice, Vertice*.

Se abbiniamo la definizione al riferimento:

Il primo vertice selezionato posizionerà l'origine dello schizzo sul vertice selezionato.

Il secondo vertice selezionato allineerà l'asse verticale dello schizzo (nella configurazione demo questo asse è indicato con **Y**).

Quindi, se selezioniamo il vertice superiore/sinistro del bordo giallo (come mostrato nel riquadro destro più grande) e il vertice inferiore/destro del bordo giallo, lo schizzo sarà posizionato in questo modo:

![](/images/AttOYX_vv.png)

:   Note
:   L'Allineamento O-Y-X è selezionato nella finestra di dialogo Associazione.
:   L'origine dello schizzo è ora nel vertice superiore/sinistro della linea gialla.
:   L'asse Y dello schizzo è ora allineato con la linea gialla.
:   L'asse Z dello schizzo è perpendicolare alla linea gialla.

Ora se aggiungiamo un terzo riferimento selezionando il vertice superiore del bordo arancione la scena cambia in:

![](/images/AttOYX_vvv.png)

:   Note
:   Ora l'asse X dello schizzo è allineato nella direzione del vertice selezionato del bordo arancione.

Retrieved from "<http://wiki.freecad.org/index.php?title=Advanced_Attachment_OYX/it&oldid=1503225>"