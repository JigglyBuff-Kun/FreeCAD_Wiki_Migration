---
title: Architektura Přehled
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Architektura Přehled |
| Umístění Menu |
| Arch → Survey |
| Pracovní stoly |
| [Architektura](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce |
| *Nikdo* |
| Představen ve verzi |
| - |
| Viz také |
| [FcInfo (macro)](/Macro_FCInfo/cs "Macro FCInfo/cs") |
|  |

## Popis

Nástroj Přehled spustí speciální přehledový mód, který umožňuje rychle zjistit rozměry a informace z modelu a přenést tyto informace do jiných aplikací. Když už jste v přehledovém módu, kliknutí na jiný subelement 3D objektu posbírá následující informace v závislosti na co jste klikli:

* Jestli jste klikli na hranu, dostanete její délku
* Jestli jste klikli na vrchol, dostanete jeho výšku (souřadnici na ose Z)
* Jestli jste klikli na plochu, dostanete její plošnou výměru
* Jestli dvojkliknete na cokoliv, vyberete celý objekt a dostanete jeho objem

Když jsou informace posbírány, stanou se 3 věci:

* Nad element je umístěno návěští, které zobrazuje hodnotu (s "a" pro plochu, "l" pro délku, "z" pro výšku nebo "v" pro objem)
* Numerická hodnota je zkopírována do schránky, takže ji můžete vložit do jiné aplikace
* Ve výstupním okně FreeCADu je vytištěn řádek. Po ukončení přehledového módu mohou být tyto řádky zkopírovány a následně vloženy do jiné aplikace (hodnoty jsou odděleny čárkou, což usnadňuje jejich přenos do tabulkového programu)

![](/images/Arch_Survey_example.jpg)

*Obrázek nahoře ukazuje co se stane při spuštění přehledového módu.*

## Použití

1. Stiskněte tlačítko ![](/images/Arch_Survey.png) Architektura Přehled
2. Klikejte na vrcholy, hrany, plochy nebo dvojklikněte pro výběr celého objektu
3. Stiskněte klávesuESC nebo tlačítko **Zrušit** pro ukončení přehledového módu a odstranění všech návěští.

## Options

* You can add a custom label to any line in the Task dialog by clicking that line, then adding a text in the description field, then press the **set description** button.
* Once you are done, before closing, you can export the contents of the Task dialog by pressing the "export CSV" button. The resulting CSV file can then be opened in any spreadsheet application such as Excel or LibreOffice Calc. The values and units will be separated in the resulting CSV file, and the totals are written as SUM() functions.

![](/images/Arch_Survey_spreadsheet.jpg)

## Scripting

## Skriptování

Přehledový mód nemůže být použit přímo ze skriptů Pythonu, ale získání stejných informací z jakéhokoliv objektu založeného na [Dílu](/Part_Workbench/cs "Part Workbench/cs") je snadno reprodukovatelné podle následujícího skriptu:

```
import FreeCADGui

selection = FreeCADGui.Selection.getSelectionEx()

for obj in selection:
    for element in obj.SubObjects:
        print("Area: %f", element.Area)
        print("Length: %f", element.Length)
        print("Volume: %f", element.Volume)
        print("Center of Mass: %f", element.CenterOfMass)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Survey/cs&oldid=1498630>"