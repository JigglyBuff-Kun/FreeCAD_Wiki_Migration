---
title: Kopírování objektů
---
## Overview

## Přehled

Prostředky k duplikování objektů (odstavců, buněk tabulkových kalkulátorů, obrázků, atd.) jsou k dispozici u mnoha aplikací. FreeCAD není výjimkou.
Objekty [Dokumentu](/Document_structure "Document structure") mohou být libovolně kopírovány uvnitř dokumentu nebo mezi dokumenty použitím [Kopírovat](/Std_Copy "Std Copy"), [Vložit](/Std_Paste "Std Paste") a příkazem [Duplikovat výběr](/Std_DuplicateSelection "Std DuplicateSelection").

## Kopírování propojených objektů

Objekty [Dokumentu](/Document_structure "Document structure") mohou být propojeny na jiné objekty (např. deska může být propojena se svým náčrtem a Fusion feature je propojena s svými komponentními objekty).
To znamená, že stejně musí být postaráno i o kopírované objekty.

![](/images/Copy_past_duplicate.png)

Please consider that the copy-pasted objects are not dependent on the original. If you want dependent clones please use ![](/images/Draft_Clone.svg) [Draft Workbench's Clone](/Draft_Clone "Draft Clone") or ![](/images/PartDesign_Clone.svg) [Part Design Workbench's Clone](/PartDesign_Clone "PartDesign Clone"). If you need neither a dependent clone nor a parametric replica, you may also use ![](/images/Part_SimpleCopy.svg)  [Part Workbench's Simple Copy](/Part_SimpleCopy "Part SimpleCopy"). For patterned clones, please look into the  [Other Methods section](/Copying_Objects#Other_Methods "Copying Objects") of this page.

## Copying Linked Objects

If an object to be copied has links to object(s) not in the selection, FreeCAD will ask if the unselected objects should be included in the copy operation.

## Finding and Positioning Pasted Object(s)

Obecně doporučovaná praxe je při kopírování rodičovského objektu vybrat všechny závislé objekty.

## Hledání a pozicování vkládaných objektů

Po operaci Kopírovat/Vložit nemusí být zřejmé kde jsou zkopírované objekty v okně dokumentu umístěny. Je to proto, že nový objekt má stejnou vlastnost [Umístění](/Placement "Placement") jako měl originál. Přepnutím vlastnosti Viditelnost (mezerníkem) skryjete originál. Potom použijete dialog Umístění abyste přesunuli nový objekt na jeho správnou pozici.

## Other Methods

## Další metody

Jako mnoho věcí ve FreeCADu, je mnoho způsobů jak vytvořit kopii. Pro další inspiraci se podívejte na:

* Návrh dílu: [Zrcadlo](/PartDesign_Mirrored "PartDesign Mirrored"), [Lineární vzor](/PartDesign_LinearPattern "PartDesign LinearPattern"), [Polární vzor](/PartDesign_PolarPattern "PartDesign PolarPattern"), [MultiTransformace](/PartDesign_MultiTransform "PartDesign MultiTransform")
* Díl: [Zrcadlo](/Part_Mirror "Part Mirror")
* Výkres: [Pole](/Draft_Array "Draft Array"),[Klon](/Draft_Clone "Draft Clone")

## Poznámky

* Ve verzi v0.14+, jestliže nějaký kopírovaný objekt je propojen s objektem, který není kopírován, FreeCAD se zeptá jestli by nevybraný objekt neměl být také zahrnut do kopírování.

Retrieved from "<http://wiki.freecad.org/index.php?title=Copying_Objects/cs&oldid=1054182>"