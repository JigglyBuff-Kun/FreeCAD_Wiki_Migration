---
title: Cecha
---
## Wprowadzenie

W FreeCAD słowo "Cecha" jest zwykle używane w odniesieniu do obiektu [Cechy](/PartDesign_Feature/pl "PartDesign Feature/pl") środowiska Projekt Części *(klasa `PartDesign::Feature`)*, którya jest zdefiniowana przez środowiskoa pracy [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl"). Jest to operacja lub krok modelowania wykonywany w celu utworzenia lub modyfikacji [Kształtu](/Shape/pl "Shape/pl") bryły zgodnie z paradygmatem [Edycja cech](/Feature_editing/pl "Feature editing/pl").

Więcej informacji na temat tego typu obiektów można znaleźć na stronie [Projekt części: Cecha](/PartDesign_Feature/pl "PartDesign Feature/pl").

## Użycie

1. Przełącz się do środowiska pracy ![](/images/Workbench_PartDesign.svg) [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl").
2. Naciśnij przycisk ![](/images/PartDesign_Body.svg) [Utwórz Zawartość](/PartDesign_Body/pl "PartDesign Body/pl").
3. Naciśnij przycisk ![](/images/PartDesign_NewSketch.svg) [Utwórz szkic](/PartDesign_NewSketch/pl "PartDesign NewSketch/pl"), aby utworzyć nowy [Szkic](/Sketch/pl "Sketch/pl").
4. Utwórz zamkniętą polilinię, a następnie użyj narzędzia ![](/images/PartDesign_Pad.svg) [Wyciągnij](/PartDesign_Pad/pl "PartDesign Pad/pl") do wyciągnięcia szkicu i utworzenia początkowej bryły. Ta początkowa bryła jest początkową Cechą.
5. Dodaj więcej szkiców i podkładek oraz użyj innych narzędzi środowiska pracy [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl"), aby zmodyfikować i przekształcić bryłę początkową. Każdy z tych kroków odpowiada cechom [Zawartości](/Body/pl "Body/pl").
6. Alternatywnie, dodaj obiekty pierwotne, takie jak ![](/images/PartDesign_AdditiveBox.svg) [Addytywny prostopadłościan](/PartDesign_AdditiveBox/pl "PartDesign AdditiveBox/pl") i ![](/images/PartDesign_SubtractiveCylinder.svg) [Subtraktywny walec](/PartDesign_SubtractiveCylinder/pl "PartDesign SubtractiveCylinder/pl"). Dowolna liczba kroków dodawania i odejmowania to funkcje, które są używane do utworzenia ostatecznej objętości.

## Uwagi

W ogólnym znaczeniu, "Cecha" może być dowolnym krokiem modelowania używanym do utworzenia ostatecznego [Kształtu](/Shape/pl "Shape/pl"), za pomocą dowolnego narzędzia dowolnego [Środowiska pracy](/Workbenches/pl "Workbenches/pl").

* Na przykład, w środowisku [Część](/Part_Workbench/pl "Part Workbench/pl"), z przepływem pracy [Konstrukcyjnej geometria bryły](/Constructive_solid_geometry/pl "Constructive solid geometry/pl"), "Cechą" może być dowolna operacja logiczna, taka jak ![](/images/Part_Fuse.svg). [Połączenie](/Part_Fuse/pl "Part Fuse/pl"), ![](/images/Part_Cut.svg) [Wycięcie](/Part_Cut/pl "Part Cut/pl"), lub ![](/images/Part_Common.svg) [Część wspólna](/Part_Common/pl "Part Common/pl").

W bardziej szczegółowym znaczeniu, "Cecha" jest krokiem modelowania używanym wewnątrz [Zawartości](/PartDesign_Body/pl "PartDesign Body/pl").

* Na przykład ![](/images/PartDesign_AdditiveCylinder.svg) [Addytywny walec](/PartDesign_AdditiveCylinder/pl "PartDesign AdditiveCylinder/pl"), ![](/images/PartDesign_AdditiveLoft.svg) [Uzupełnienie wyciągnięciem przez rofile](/PartDesign_AdditiveLoft/pl "PartDesign AdditiveLoft/pl"), ![](/images/PartDesign_Pocket.svg) [Kieszeń](/PartDesign_Pocket/pl "PartDesign Pocket/pl"), ![](/images/PartDesign_SubtractiveCone.svg)[Subtraktywny stożek](/PartDesign_SubtractiveCone/pl "PartDesign SubtractiveCone/pl"), itp. wszystkie są "Cechami".

Retrieved from "<http://wiki.freecad.org/index.php?title=Feature/pl&oldid=1330606>"