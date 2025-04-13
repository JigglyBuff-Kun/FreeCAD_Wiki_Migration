---
title: PartDesign Desemnarea ca Vârf/Funcție rezultantă
---
|  |
| --- |
| PartDesign MoveTip |
| Menu location |
| Contextual menu → Set tip |
| Workbenches |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench") |
| Default shortcut |
| None |
| Introduced in version |
| - |
| See also |
| [Move object to other body](/PartDesign_MoveFeature "PartDesign MoveFeature"), [Move object after other object](/PartDesign_MoveFeatureInTree "PartDesign MoveFeatureInTree") |
|  |

## Descriere

**Set tip** deoarece această comandă este etichetată în meniul contextual, ea redefinește vârful, care este caracteristică expusă în afara corpului. Implicit, vârful este ultima caracteristică adăugată corpului; dar uneori poate fi util să setați vârful la o caracteristică mai devreme în arbore. Acest lucru se poate face pentru a adăuga o schiță, o geometrie de referință sau o caracteristică care, retrospectiv, ar fi trebuit să fie creată mai devreme în istoria Corpului.

Trucul este distins vizual în arborele model printr-o săgeată mică albă într-un cerc verde suprapus peste pictograma entității.

![](/images/PartDesign_Body_tree-04.png)

## Cum se folosește

1. În arborescența Model, click dreapta pe funcția care urmează a fi definită ca funcție rezultantă
2. Selectați ![](/images/PartDesign_MoveTip.png) **Set tip**.
3. Funcția nouă rezultată este vizibilă și toate elementele de sub ea sunt ascunse. Elementele nou create din acest punct vor fi plasate sub funcția rezultată și deasupra celorlalte elemente existente.

**Notă**: Este important să rețineți că ajustați vârful la ultima caracteristică din partea inferioară a arborelui caroseriei.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_MoveTip/ro&oldid=894447>"