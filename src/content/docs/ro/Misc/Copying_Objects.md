---
title: Copierea Obiectelor
---
## Overview

## Descriere

Este o aplicație de duplicare a obiectelor (paragrafe, celule de calcul tabelar, imagini etc.) fiind prezentă în majoritatea aplicațiilor. FreeCAD nu este o excepție. [Document](/Document_structure "Document structure") pot fi copiate în mod liber într-un document sau între documente folosind comenzile [Copy](/Std_Copy "Std Copy"), [Paste](/Std_Paste "Std Paste") și comenzile [Duplicate Selection](/Std_DuplicateSelection "Std DuplicateSelection") .

## Copierea Obiectelor legate între ele

Obiectele [Document](/Document_structure "Document structure") pot fi legate de alte obiecte (de exemplu, o funcție Pad este legată de Sketch-ul său și o funcționalitate Fusion este legată de obiectele componente ale acestuia). Aceasta înseamnă că trebuie să fii atent atunci când alegi obiecte de copiat.

![](/images/Copy_past_duplicate.png)

Please consider that the copy-pasted objects are not dependent on the original. If you want dependent clones please use ![](/images/Draft_Clone.svg) [Draft Workbench's Clone](/Draft_Clone "Draft Clone") or ![](/images/PartDesign_Clone.svg) [Part Design Workbench's Clone](/PartDesign_Clone "PartDesign Clone"). If you need neither a dependent clone nor a parametric replica, you may also use ![](/images/Part_SimpleCopy.svg)  [Part Workbench's Simple Copy](/Part_SimpleCopy "Part SimpleCopy"). For patterned clones, please look into the  [Other Methods section](/Copying_Objects#Other_Methods "Copying Objects") of this page.

## Copying Linked Objects

If an object to be copied has links to object(s) not in the selection, FreeCAD will ask if the unselected objects should be included in the copy operation.

## Finding and Positioning Pasted Object(s)

În general, practica recomandată este selectarea tuturor obiectelor dependente/copii atunci când se copiază un obiect părinte.

## Găsirea și Poziționarea Obiect(ului)elor Pasted

After the Copy/Paste operation, it may not be obvious where the new object(s) are located in the Document window. That is because the new object has the same [Placement](/Placement "Placement") property as the original.
comutați proprietatea Vizibilitate (bara de spațiu) pentru a ascunde originalul. Apoi utilizați dialogul de plasare pentru a muta copia în poziția corectă.

## Other Methods

## Alte Metode

Ca multe lucruri în FreeCAD, există multe modalități de a face o copie. Pentru mai multe idei, uitați-vă la:

* PartDesign: [Mirror](/PartDesign_Mirrored "PartDesign Mirrored"), [Linear Pattern](/PartDesign_LinearPattern "PartDesign LinearPattern"), [Polar Pattern](/PartDesign_PolarPattern "PartDesign PolarPattern"), [MultiTransform](/PartDesign_MultiTransform "PartDesign MultiTransform")
* Part: [Mirror](/Part_Mirror "Part Mirror"), [Simple copy](/Part_SimpleCopy "Part SimpleCopy")
* Draft: [Offset](/Draft_Offset "Draft Offset"), [Scale](/Draft_Scale "Draft Scale"), [Array](/Draft_Array "Draft Array"), [PathArray](/Draft_PathArray "Draft PathArray"), [Clone](/Draft_Clone "Draft Clone"), [Mirror](/Draft_Mirror "Draft Mirror")

## Notă

* În vesiunile ulterioare lui v0.14+, dacă un obiect care urmează să fie copiat are legături către obiecte care nu sunt în selecție, FreeCAD va întreba dacă obiectele neselectate ar trebui să fie incluse în operația de copiere.

Retrieved from "<http://wiki.freecad.org/index.php?title=Copying_Objects/ro&oldid=1073735>"