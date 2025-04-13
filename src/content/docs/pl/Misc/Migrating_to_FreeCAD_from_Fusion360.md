---
title: Migracja z Fusion360 do FreeCAD
---
## Kontekst

Ta strona jest przeznaczona dla użytkowników, którzy są zainteresowani migracją do FreeCAD ze świata Fusion 360.

## Co powinienem zrobić?

1. Pierwszą rzeczą, którą należy zrobić, jest usunięcie plików z zastrzeżonych formatów i pamięci masowej. Zacznij od wyeksportowania modeli z chmury na komputer lokalny.
   * Popularną metodą jest użycie skryptu [Fusion360 total exporter](https://github.com/Jnesselr/fusion-360-total-exporter).
2. Zalecamy eksport do formatu STEP.

## Słowniczek

:::caution
Prosimy również o odniesienie się do trwających prac w ramach projektuCAD Rosetta Stone, aby poznać analogiczne nazwy, których używają popularne, komercyjne programy CAD.
:::

Odnieś się ogólnie do strony [słowniczka](/Glossary/pl "Glossary/pl"), ale tutaj znajduje się krótka lista konkretnych terminów, które użytkownicy F360 mogą uznać za szczególnie pomocne:

* Tangent constraint - forma FreeCAD **Wiązania współliniowego**. Zobacz informacje na stronie ![](/images/Sketcher_ConstrainTangent.svg) [Wiązanie styczności](/Sketcher_ConstrainTangent/pl#Pomiędzy_dwoma_liniami_(współliniowe) "Sketcher ConstrainTangent/pl").
* Pad - funkcja **wyciągnięcia** w programie FreeCAD. Przeczytaj dokumentację na stronie ![](/images/PartDesign_Pad.svg) [Wyciągnij](/PartDesign_Pad/pl "PartDesign Pad/pl"), aby dowiedzieć się więcej.
* Toponaming - skrót od [Problem Nazewnictwa Topologicznego](/Topological_naming_problem/pl "Topological naming problem/pl"). Bardzo dobrze omówiony w [klipie youtube Brodiego Fairhalla](https://www.youtube.com/watch?v=6p2vqEEmWq4)].

## Najczęściej zadawane pytania

1. Jakie formaty obsługuje FreeCAD?
   * Natywnym formatem pliku w FreeCAD jest BREP, [boundary representation](https://en.wikipedia.org/wiki/Boundary_representation), dostarczany przez wewnętrzne jądro geometrii [OpenCASCADE *(OCCT)*](/OpenCASCADE/pl "OpenCASCADE/pl").
   * FreeCAD obsługuje wszystkie formaty obsługiwane przez OCCT, więc przynajmniej STEP i IGES.
2. Jakich formatów powinienem użyć do migracji do FreeCAD?
   * STEP jest najlepszym formatem, ponieważ jest to format bryłowy [kształtu](/Shape/pl "Shape/pl"), w przeciwieństwie do [siatki](/Mesh/pl "Mesh/pl") *(STL, OBJ, DAE)*. Przykład [Importowanie formatu Step z kolorami](https://forum.freecadweb.org/viewtopic.php?f=3&t=50308).
   * Importowanie STL jest możliwe, ale ten format siatki będzie trudny do dalszej modyfikacji. Zalecamy konwertowanie zaimportowanych siatek na bryły przy użyciu ![](/images/Part_ShapeFromMesh.svg) [Utwórz kształt z siatki](/Part_ShapeFromMesh/pl "Part ShapeFromMesh/pl"). Najlepszą radą jest przemodelowanie obiektu w programie FreeCAD, używając siatki jako odniesienia.

## Wskazówki

* @MPetrika ([twitter](https://twitter.com/MPetrikas/status/1362051484704264198)) zaleca zainstalowanie [Środowisko pracy Nowoczesny UI](/ModernUI_Workbench/pl "ModernUI Workbench/pl") autorstwa HakanSeven12.

## Zasoby dydaktyczne

* [Fusion360 do FreeCAD - wprowadzenie](https://www.youtube.com/watch?v=_GxJkB23ZHM), wideo autorstwa Brodie Fairhall.
* [Fusion360 do FreeCAD - część 2](https://www.youtube.com/watch?v=IESZD4QS3P8), wideo autorstwa Brodiego Fairhalla.
* [V0.19 Benchmarking--2019 Monthly Challenges](https://forum.freecadweb.org/viewtopic.php?f=36&t=50492), seria obiektów stworzonych w Fusion360 jest przebudowywana za pomocą FreeCAD, przez doświadczonego użytkownika ppemawm.
* [Pisemny poradnik dla początkujących: od pierwszej części do rysunku technicznego](https://github.com/macdroid53/LearningFreeCAD) autorstwa macdroid53.
* [Zasoby online dla użytkowników FreeCAD](https://www.freecad.info/).

## Filmy porównawcze

* [Modelowanie turbiny sprężarki w programach FreeCAD i Fusion360](https://www.youtube.com/watch?v=kirDbZd0dvI&feature=youtu.be)

## Pomoc

Czy na tej stronie wiki czegoś brakuje. Złóż prośbę o [dostęp do Wiki](https://forum.freecadweb.org/viewtopic.php?f=21&t=6830) na forum, aby edytować tę stronę.

## Powiązane

* [Migracja z OnShape do FreeCAD](/Migrating_to_FreeCAD_from_OnShape/pl "Migrating to FreeCAD from OnShape/pl")

Retrieved from "<http://wiki.freecad.org/index.php?title=Migrating_to_FreeCAD_from_Fusion360/pl&oldid=1316212>"