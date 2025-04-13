---
title: Sketcher Dividi
---
|  |
| --- |
| Sketcher Dividi |
| Posizione nel menu |
| Schizzo → Strumenti Sketcher → Dividi bordo |
| Ambiente |
| [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") |
| Avvio veloce |
| G Z |
| Introdotto nella versione |
| 0.20 |
| Vedere anche |
| [Sketcher Ritaglia](/Sketcher_Trimming/it "Sketcher Trimming/it") |
|  |

## Descrizione

Lo strumento ![](/images/Sketcher_Split.svg) Sketcher Dividi divide un bordo. Se il bordo è una curva chiusa (cioè un cerchio, un'ellisse o una B-spline periodica) viene convertito in una curva aperta (rispettivamente un arco, un arco di ellisse o una B-spline non periodica).

## Utilizzo

Vedere anche: [Aiuti per il disegno](/Sketcher_Workbench/it#Drawing_aids "Sketcher Workbench/it").

1. Esistono diversi modi per richiamare lo strumento:
   * Premere il pulsante ![](/images/Sketcher_Split.svg) Dividi bordo.
   * Selezionare l'opzione **Schizzo → Strumenti Sketcher → ![](/images/Sketcher_Split.svg) Dividi bordo** dal menu.
   * Usare la scorciatoia da tastiera: G quindi Z.
2. Se c'è una selezione precedente, viene cancellata. Lo strumento non accetta una preselezione.
3. Il cursore si trasforma in una croce con l'icona dello strumento.
4. Fare clic su un bordo nel punto in cui deve essere diviso.
5. Se il bordo originale è una linea o una curva aperta, vengono creati due nuovi bordi collegati da un [Vincolo coincidente](/Sketcher_ConstrainCoincident/it "Sketcher ConstrainCoincident/it"). Per le curve chiuse viene creata una nuova curva aperta, il nuovo punto quindi non riceve un vincolo Coincidente. I vincoli applicabili esistenti vengono trasferiti ai nuovi bordi. Vedi [Note](#Note).
6. Questo strumento viene sempre eseguito in modalità continua: facoltativamente mantienere la divisione dei bordi.
7. Per terminare, fare clic in un'area vuota nella [VIsta 3D](/3D_view/it "3D view/it"), fare clic con il pulsante destro del mouse o premere Esc oppure avviare un altro strumento di creazione di geometrie o vincoli.

## Note

* Un vincolo [Coincidente](/Sketcher_ConstrainCoincident/it "Sketcher ConstrainCoincident/it") viene applicato ai punti centrali dei nuovi archi.
* I vincoli [Raggio](/Sketcher_ConstrainRadius/it "Sketcher ConstrainRadius/it") e [Diametro](/Sketcher_ConstrainDiameter/it "Sketcher ConstrainDiameter/it") vengono copiati su nuovi archi (con conseguente ridondanza).
* I vincoli coincidenti e i vincoli [Punto sull'oggetto](/Sketcher_ConstrainPointOnObject/it "Sketcher ConstrainPointOnObject/it") vengono trasferiti al nuovo bordo più vicino.
* I vincoli [Orizzontale](/Sketcher_ConstrainHorizontal/it "Sketcher ConstrainHorizontal/it") e [Verticale](/Sketcher_ConstrainVertical/it "Sketcher ConstrainVertical/it") tra i punti vengono trasferiti al nuovo bordo più vicino.
* I vincoli orizzontali e verticali associati alle linee vengono copiati nei nuovi segmenti di linea.
* I vincoli [Parallelo](/Sketcher_ConstrainParallel/it "Sketcher ConstrainParallel/it") e [Perpendicolare](/Sketcher_ConstrainPerpendicular/it "Sketcher ConstrainPerpendicular/it") vengono copiati su nuovi segmenti di linea, per i nuovi archi vengono copiati solo su quello più vicino.
* I vincoli [Distanza orizzontale](/Sketcher_ConstrainDistanceX/it "Sketcher ConstrainDistanceX/it"), [Distanza verticale](/Sketcher_ConstrainDistanceY/it "Sketcher ConstrainDistanceY/it") e [Distanza](/Sketcher_ConstrainDistance/it "Sketcher ConstrainDistance/it") vengono trasferiti al nuovo bordo più vicino.
* I vincoli [Angolo](/Sketcher_ConstrainAngle/it "Sketcher ConstrainAngle/it"), [Simmetrico](/Sketcher_ConstrainSymmetric/it "Sketcher ConstrainSymmetric/it") e [Blocca](/Sketcher_ConstrainBlock/it "Sketcher ConstrainBlock/it") attualmente non vengono trasferiti.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Split/it&oldid=1523032>"