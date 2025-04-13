---
title: Narzędzia w GUI
---
Polecenia Gui to jedna z najważniejszych funkcji FreeCAD, stanowiąca główny punkt interakcji użytkownika. Za każdym razem, gdy użytkownik wybiera pozycję z menu lub naciska przycisk paska narzędziowego, aktywowane zostaje GuiCommand. Niektóre z atrybutów GuiCommand to:

* Definiuje nazwę,
* Zawiera ikonę,
* Określa zakres operacji cofania/przywracania,
* Posiada stronę pomocy,
* Otwiera i kontroluje okna dialogowe,
* Nagrywanie makr,
* i inne.

## Nazwy

Polecenie Gui jest nazwane w standardowy sposób: *NazwaModułu\_NazwaPolecenia*, na przykład "[Base\_Open](/index.php?title=Base_Open&action=edit&redlink=1 "Base Open (page does not exist)")" to polecenie otwierania w interfejsie graficznym w systemie Base. Nazwa polecenia Gui w określonym module zawiera nazwę modułu na początku, na przykład "[Part\_Cylinder](/Part_Cylinder/pl "Part Cylinder/pl")".

Jeśli dokumentacja nie jest ukończona, użyj szablonu [Template:UnfinishedDocu](/Template:UnfinishedDocu "Template:UnfinishedDocu").

## Strona pomocy

Każde polecenie Gui musi mieć stronę pomocy. Strona pomocy jest hostowana w serwisie Wiki dokumentacji programu FreeCAD. Artykuł ma taką samą nazwę jak polecenie Gui, na przykład [Draft ShapeString](/Draft_ShapeString/pl "Draft ShapeString/pl").

Do tworzenia własnych stron pomocy można użyć szablonu [GuiCommand model](/GuiCommand_model/pl "GuiCommand model/pl").

Przykład:

* [Draft ShapeString](/Draft_ShapeString/pl "Draft ShapeString/pl")
* [Draft Line](/Draft_Line/pl "Draft Line/pl")

## Ikony

![](/images/Tango-Palette.png)

Każde polecenie Gui musi mieć ikonę. Używamy zestawu ikon [Tango](http://tango-project.org/Tango_Desktop_Project/) i jego wytycznych. Po prawej stronie widzisz paletę kolorów Tango.

Wszystkie ikony powinny być tworzone w formacie [SVG](/SVG/pl "SVG/pl") za pomocą aplikacji do tworzenia obrazów wektorowych, takiej jak [Inkscape](http://inkscape.org).
Ułatwia to wprowadzanie zmian i tworzenie dodatkowych ikon w tej samej przestrzeni aplikacji.

### Tabela kodowania kolorami ikon

![](/images/Colorchart.png)

Staramy się jak najbardziej przestrzegać tego schematu, więc kolor ikon ma bezpośrednie znaczenie.

Retrieved from "<http://wiki.freecad.org/index.php?title=Gui_Command/pl&oldid=1385424>"