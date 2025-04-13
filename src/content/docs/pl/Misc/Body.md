---
title: Zawartość
---
## Wprowadzenie

W programie FreeCAD słowo **Zawartość** jest zwykle używane w odniesieniu do obiektu [zawartości](/PartDesign_Body/pl "PartDesign Body/pl") środowiska Projekt Części *(klasa `PartDesign::Body`)*, który jest zdefiniowany przez środowisko [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl"). Jest to obiekt kontenerowy, który może przechowywać [szkice 2D](/Sketch/pl "Sketch/pl") i [przestrzenne cechy geometryczne](/PartDesign_Feature/pl "PartDesign Feature/pl") w celu zbudowania bryły.

Zobacz stronę [Zawartość](/PartDesign_Body/pl "PartDesign Body/pl") środowiska Projekt Części, aby uzyskać więcej informacji na temat tego typu obiektu.

## Użycie

1. Przełącz się na środowisko pracy [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl")
2. Naciśnij przycisk ![](/images/PartDesign_Body.svg) [Stwórz zawartość](/PartDesign_Body/pl "PartDesign Body/pl").
3. Naciśnij przycisk ![](/images/PartDesign_NewSketch.svg) [Nowy szkic](/PartDesign_NewSketch/pl "PartDesign NewSketch/pl"), aby utworzyć nowy [szkic](/Sketch/pl "Sketch/pl").
4. Utwórz zamkniętą linię, a następnie użyj narzędzia ![](/images/PartDesign_Pad.svg) [Wyciągnij](/PartDesign_Pad/pl "PartDesign Pad/pl"), aby wyciągnąć szkic i utworzyć bryłę wyjściową.
5. Dodaj więcej szkiców i wyciągnięć oraz użyj innych narzędzi środowiska [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl"), aby zmodyfikować i przekształcić początkową bryłę.

Alternatywnie, zamiast używać [szkicu](/Sketch/pl "Sketch/pl"), możesz dodać [cechę](/PartDesign_Feature/pl "PartDesign Feature/pl") jako element pierwotny, na przykład ![](/images/PartDesign_AdditiveBox.svg) [Addytywny prostopadłościan](/PartDesign_AdditiveBox/pl "PartDesign AdditiveBox/pl"). Do stworzenia ostatecznej objętości można użyć dowolnej liczby cech addytywnych i subtraktywnych.

## Uwagi

Zawartość jest niezbędna podczas korzystania ze środowiska pracy [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") w metodologii [edycji cech](/Feature_editing/pl "Feature editing/pl").

Zawartość nie jest wymagana podczas używania środowiska pracy [Część](/Part_Workbench/pl "Part Workbench/pl"), ponieważ to środowisko używa przepływu pracy [konstrukcyjnej geometrii brył](/Constructive_solid_geometry/pl "Constructive solid geometry/pl"), opartego na [kształtach pierwotnych](/Part_Primitives/pl "Part Primitives/pl") i operacjach logicznych.

Retrieved from "<http://wiki.freecad.org/index.php?title=Body/pl&oldid=1351041>"