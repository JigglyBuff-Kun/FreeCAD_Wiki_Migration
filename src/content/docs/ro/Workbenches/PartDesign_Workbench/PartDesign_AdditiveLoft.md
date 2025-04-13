---
title: PartDesign Loft/Mansardă Aditivă
---
|  |
| --- |
| PartDesign Loft Aditivă |
| poziția meniului |
| Part Design → Additive loft |
| Ateliere |
| [PartDesign](/PartDesign_Workbench/ro "PartDesign Workbench/ro") |
| scurtătură |
| *Nici unul* |
| Prezentat în versiune |
| 0.17 |
| A se vedea, de asemenea, |
| [PartDesign AdditivePipe/ro](/PartDesign_AdditivePipe/ro "PartDesign AdditivePipe/ro") |
|  |

## Descriere

**Additive Loft** creează un solid (printr-o extrudarea gen suprafață riglată) în corpul activ (Body) prin realizarea unei tranziții între două sau mai multe polilinii închise sau deschise (denumite și schițe sau secțiuni transversale) Dacă corpul conține deja funcții , Additiv Loft va fi lipit de ele.

![](/images/PartDesign_AddLoft_example.png)

*În partea dreaptă: cross-sections (A), (B) and (C); Additive loft creat în partea dreaptă.*

## Cum se folosește

### Dialog-based workflow

1. Apăsați butonul ![](/images/PartDesign_AdditiveLoft.png) **Additive loft** button.
2. In the **Select feature** dialog, select a sketch to be used as first cross-section and click OK.
   * Alternatively, a single sketch can be selected prior to pressing the Additive loft button.
3. In the **Loft parameters**, press the Add Section button.
4. Select a sketch in the 3D view. Repeat to select more sketches.
5. Definiți opțiunile dacă trebuie și click pe OK.

### Selection-based workflow

1. Select several sketches. It is hereby important in what order you select them:
   * The sketch selected at first will become the base profile object in the next step
   * The sketches selected after the first one will become the loft sections. Also here the selection order is important: The sketch selected as second will become the first loft section, the one selected as third becomes the second section and so on. (You can change the section order any time later in the loft dialog by dragging sections in the list to the desired position.
   * The first or last selection can also be a face of a 3D object ([introduced in 0.20](/Release_notes_0.20 "Release notes 0.20"))
2. Press the ![](/images/PartDesign_AdditiveLoft.svg) [Additive loft](/PartDesign_AdditiveLoft "PartDesign AdditiveLoft") button.
3. Set options if needed and click OK.

## Opţiuni

* **Ruled surface**: face tranziții drepte între secțiuni transversale. Dos nu se aplică la o mansardă/loft cu două secțiuni transversale. Dacă nu este bifată, tranzițiile vor fi netede.
* **Closed**: makes a transition from the last cross-section to the first, creating a loop.
* Apăsați butonul Remove Section pentru a șterge schița, selectându-l în vizualizarea 3D.

## Proprietăți

* Date**Label**: numele dat operațiiunii, acest nume poate fi schimbat la ușurință.
* Date**Sections**: lists the sections used.
* Date**Ruled**: see [Options](#Options).
* Date**Closed**: see [Options](#Options).
* Date**Midplane**: non applicable.
* Date**Reversed**: non applicable.
* Date**Refine**: adevărat sau fals. Dacă este setat la true, curăță solidul de margini reziduale lăsate de caracteristici. Consultați [Part RefineShape](/Part_RefineShape "Part RefineShape") pentru mai multe detalii.

## Notes

* Schițele trebuie să formeze profiluri închise.
* Nu se poate folosi instrumentul loft către un punct/ vertex.
* O secțiune transversală nu poate fi așezată pe același plan ca cea precedentă.
* Pentru a controla mai bine forma loftului, se recomandă ca toate secțiunile transversale să aibă același număr de segmente. De exemplu, pentru un loft între un dreptunghi și un cerc, cercul poate fi împărțit în 4 arce conectate.

## Legături

* [Part Loft Technical Details](/Part_Loft_Technical_Details "Part Loft Technical Details") explains how a [Part Loft](/Part_Loft "Part Loft") is created, much of its content is relevant to the PartDesign Additive loft.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveLoft/ro&oldid=1268380>"