---
title: PartDesign Mansardare Subtractivă
---
|  |
| --- |
| PartDesign SubtractiveLoft |
| Menu location |
| Part Design → Subtractive loft |
| Workbenches |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench") |
| Default shortcut |
| None |
| Introduced in version |
| - |
| See also |
| [Additive loft](/PartDesign_AdditiveLoft "PartDesign AdditiveLoft"), [Subtractive pipe](/PartDesign_SubtractivePipe "PartDesign SubtractivePipe") |
|  |

## Descriere

Instrumentul **Subtractive Loft** creează un solid substractiv în Corpul activ făcând o tranziție lisă între două sau mai multe schițe (denumite și secțiuni transversale). Forma sa este scăzută din solidul existent.

## Cum se folosește

### Dialog-based workflow

1. Press the ![](/images/PartDesign_SubtractiveLoft.svg) [Subtractive loft](/PartDesign_SubtractiveLoft "PartDesign SubtractiveLoft") button.
2. In the **Select feature** dialog, select a sketch to be used as base profile object and click OK.
   * Alternatively, either a single sketch or the face of a 3D object ([introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")) can be selected prior to pressing the subtractive loft button.
3. In the **Loft parameters**, press the Add Section button.
4. Select the next sketch in the [3D view](/3D_view "3D view"). Repeat to select more sketches in the order you want them to be lofted through. (You can change the section order any time later in the loft dialog by dragging sections in the list to the desired position.
5. Set options if needed and click OK.

### Selection-based workflow

1. Select several sketches. It is hereby important in what order you select them:
   * The sketch selected at first will become the base profile object in the next step
   * The sketches selected after the first one will become the loft sections. Also here the selection order is important: The sketch selected as second will become the first loft section, the one selected as third becomes the second section and so on. (You can change the section order any time later in the loft dialog by dragging sections in the list to the desired position.
   * The first or last selection can also be a face of a 3D object ([introduced in 0.20](/Release_notes_0.20 "Release notes 0.20"))
2. Press the ![](/images/PartDesign_SubtractiveLoft.svg) [Subtractive loft](/PartDesign_SubtractiveLoft "PartDesign SubtractiveLoft") button.
3. Set options if needed and click OK.

## Opţiuni

* **Ruled surface**: face tranziții drepte între secțiuni transversale. Dos nu se aplică la o mansardă cu două secțiuni transversale. Dacă nu este bifată, tranzițiile vor fi netede.
* **Closed**:face o tranziție de la ultima secțiune transversală la prima, creând o buclă.
* Apăsați butonul Remove Section pentru a șterge o schiță, prin selectarea ei într-o vizualizarea 3D.

## Proprietăți

* Date**Label**: numele dat operațiiunii, acest nume poate fi schimbat la nevoie.
* Date**Sections**: listează secțiunile utilizate.
* Date**Ruled**: a se vedea [Options](#Options).
* Date**Closed**: a se vedea [Options](#Options).
* Date**Midplane**: non applicable.
* Date**Reversed**: non applicable.
* Date**Refine**: adevărat sau fals. Dacă este setat la true, curăță solidul de margini reziduale lăsate de funcții. Consultați [Part RefineShape](/Part_RefineShape "Part RefineShape") pentru mai multe detalii.

## Notes

* Schițele trebuie să formeze profiluri închise.
* Nu se poate folosi instrumentul loft către un punct/ vertex.
* O secțiune transversală nu poate fi așezată pe același plan ca cea precedentă.
* Pentru a controla mai bine forma loftului, se recomandă ca toate secțiunile transversale să aibă același număr de segmente. De exemplu, pentru un loft între un dreptunghi și un cerc, cercul poate fi împărțit în 4 arce conectate.

## Legături

* [Part Loft Technical Details](/Part_Loft_Technical_Details "Part Loft Technical Details") explică cum o [Part Loft](/Part_Loft "Part Loft") este creată, o mare parte din conținutul său este relevant pentru instrumetnul Loft(mansardarea) subtractivă PartDesign.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractiveLoft/ro&oldid=1268392>"