---
title: Visualizza Stile di disegno
---

|                                                                   |
| ----------------------------------------------------------------- |
| Stile di disegno                                                  |
| Posizione nel menu                                                |
| Visualizza → Stile di disegno                                     |
| Ambiente                                                          |
| Tutti                                                             |
| Avvio veloce                                                      |
| V 1 - V 7                                                         |
| Introdotto nella versione                                         |
| -                                                                 |
| Vedere anche                                                      |
| [Box contenitore](/Std_SelBoundingBox/it "Std SelBoundingBox/it") |
|                                                                   |

## Descrizione

Il comando **Stile di disegno** può sovrascrivere l'effetto delle [proprietà](/Property_editor/it "Property editor/it") che definiscono la Vista**modalità di visualizzazione** degli oggetti nella [vista 3D](/3D_view/it "3D view/it").

## Utilizzo

1. Esistono diversi modi per invocare il comando:
   - Fare clic sulla freccia nera verso il basso a destra del pulsante ![](/images/Std_DrawStyleAsIs.svg) Stile di disegno e selezionare uno stile dal riquadro a comparsa.
   - Andare nel menu **Visualizza → Stile di disegno** e scegliere uno stile.
   - Nel menu contestuale [Vista 3D](/3D_view/it "3D view/it") andare in **Stile di disegno** e selezionare uno stile.
   - Usare una delle scorciatoie da tastiera: V e poi 1, 2, 3, 4, 5, 6 o 7.

## Stili di disegno disponibili

### Come è

Lo stile **Come è** non sovrascrive la proprietà Vista**Display Mode** (Modalità di visualizzazione) degli oggetti.

![](/images/Std_DrawStyleAsIs_example.png)

4 oggetti identici ciascuno con una modalità di visualizzazione diversa (da sinistra a destra: 'Punti', 'Reticolo', 'Ombreggiato' e 'Facce piene') con lo stile di disegno 'Come è' applicato

### Punti

Lo stile **Punti** sovrascrive la proprietà Vista**Display Mode** degli oggetti. Questo stile corrisponde alla modalità di visualizzazione 'Punti'. I vertici sono visualizzati in tinta unita. I bordi e le facce non vengono visualizzati.

![](/images/Std_DrawStylePoints_example.png)

Gli stessi oggetti con lo stile di disegno 'Punti' applicato

### Reticolo

Lo stile **Reticolo** sovrascrive la proprietà Vista**Display Mode** degli oggetti. Questo stile corrisponde alla modalità di visualizzazione 'Wireframe'. Vertici e bordi sono visualizzati in colori solidi. Le facce non vengono visualizzate.

![](/images/Std_DrawStyleWireframe_example.png)

Gli stessi oggetti con lo stile di disegno 'Reticolo' applicato

### Linee nascoste

Lo stile **Linee nascoste** sovrascrive la proprietà Vista**Display Mode** degli oggetti. Gli oggetti vengono visualizzati come se fossero convertiti in mesh triangolari.

![](/images/Std_DrawStyleHiddenLine_example.png)

Gli stessi oggetti con lo stile di disegno 'Linee nascoste' applicato

### Senza ombre

Lo stile **Senza ombre** sovrascrive la proprietà Vista**Display Mode** degli oggetti. Vertici, bordi e facce sono visualizzati in colori solidi.

![](/images/Std_DrawStyleNoShading_example.png)

Gli stessi oggetti con lo stile di disegno 'Senza ombre' applicato

### Ombreggiato

Lo stile **Ombreggiato** sovrascrive la proprietà Vista**Display Mode** degli oggetti. Questo stile corrisponde alla modalità di visualizzazione 'Shaded'. Vertici e bordi non vengono visualizzati. Le facce sono illuminate a seconda del loro orientamento.

![](/images/Std_DrawStyleShaded_example.png)

Gli stessi oggetti con lo stile di disegno 'Ombreggiato' applicato

### Facce piene

Lo stile **Facce piene** sovrascrive la proprietà Vista**Display Mode** degli oggetti. Questo stile corrisponde alla modalità di visualizzazione 'Flat lines'. Vertici e bordi sono visualizzati in colori solidi. Le facce sono illuminate a seconda del loro orientamento.

![](/images/Std_DrawStyleFlatLines_example.png)

Gli stessi oggetti con lo stile di disegno 'Facce piene' applicato

## Note

- Gli oggetti nella [Vista 3D](/3D_view/it "3D view/it") hanno anche una proprietà Vista**Draw Style** (stile di disegno). Questa proprietà controlla il tipo di linea utilizzato per i bordi. Il comando Std DrawStyle non sostituisce questa proprietà.
- Per una macro per alternare tra due stili di disegno, vedere: [Macro Stile di disegno](/Macro_Toggle_Drawstyle/it "Macro Toggle Drawstyle/it").

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_DrawStyle/it&oldid=1449931>"
