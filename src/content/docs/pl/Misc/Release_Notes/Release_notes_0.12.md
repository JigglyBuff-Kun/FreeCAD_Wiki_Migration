---
title: Release notes 0.12
---

To jest podsumowanie najbardziej interesujących zmian, które miały miejsce w programie FreeCAD w odniesieniu do poprzedniej wersji. Pełną listę zmian znajdziesz na stronie [Mantis changelog](http://www.freecadweb.org/tracker/changelog_page.php).

Starsze wersje: [0.11](/Release_notes_0.11/pl "Release notes 0.11/pl")

### Witaj!

- Gdy otwierasz FreeCAD po raz pierwszy, jesteś witany całkowicie nowym centrum startowym, które zawiera najbardziej popularne czynności jak: otwarcie określonego warsztatu (workbench), załadowanie ostatnio edytowanych plików, przegląd niusów z prac nad FreeCAD-em czy oglądanie jenego z wielu nowych wideotutoriali stworzonych niedawno przez heroiczną społeczność FreeCAD-a.

![](/images/FreeCAD_start_center.jpg)

### Skzkicownik i Projekt Części

![](/images/Rim_bling.png)

- Środowisku pracy [Szkicownika (Sketcher)](/Sketcher_Workbench/pl "Sketcher Workbench/pl") poświęcono wiele uwagi od czasu ostatniego wydania. Obecnie posiada on nowy solver zaprojektowany specjalnie do tego zadani. Szkicownik potrafi obecnie wykonać większość operacji rysunku 2D [modułu Draft](/Draft_Workbench "Draft Workbench"), wraz z szeroką gamą więzów dla elementów szkicu.

- Dodatkowo, środowisko pracy [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") również znacznie ewoluowało i obecnie posiada wiele popularnych _(i w pełni parametrycznych)_ narzędzi do pracy na bazie szkiców jak wyciąganie _(extrusion)_, przeciąganie _(lofting)_ czy obracanie _(revolution)_.

### Architektura

- Nowy [moduł Architektury](/Arch_Workbench/pl "Arch Workbench/pl") jest obecnie częścią programu FreeCAD. Jest on wciąż we wczesnej fazie budowy, ale już teraz posiada garść podręcznych obiektów pomocniczych jak ściany czy elementy struktury (słupy i belki). Mogą być one zbudowane na bazie istniejącej geometrii 2D, jak linie, przewody (wires) czy szkice, przez podanie szerokości i wysokości lub, dla elementów struktury, na bazie profili 2D. Mogą one także bazować na bryłach lub nawet zawierać inne bryły jako dodanie lub odjęcie, pozwalając wirtualnie na dowolną geometrię.

![](/images/Arch_screenshot.jpg)

- Moduł Architektura posiada także importer [IFC](http://en.wikipedia.org/wiki/Industry_Foundation_Classes), importer i exporter [DAE _(collada)_](http://en.wikipedia.org/wiki/Collada) i specjalny eksporter [OBJ](http://en.wikipedia.org/wiki/Wavefront_.obj_file) bardziej dopasowany do modeli architektonicznych niż standardowy eksporter.

- W module Arch zawarto także rosnącą kolekcję narzędzi do łatwiejszej pracy z obiektami Siatki _(Mesh)_ pobranymi z innego oprogramowania jak [Blender](http://www.blender.org). Siatki, jeśli są dobrze wymodelowane, mogą być łatwo i automatycznie zamienione w "czyste" kształty i potem w parametryczne obiekty Arch.

### 2D Drafting

![](/images/Draft_taskview.jpg)

- Odzyskaj swoją przestrzeń roboczą! Moduł Draft posiada obecnie nowy tryb interfejsu użytkownika, który używa systemu FreeCAD Task, zbierającego całą interakcję w jedno miejcie, uwalniając cenne miejsce pożerane wcześniej przez pasek narzędzi Draft.

- Narzędzie Draft Przytnij / Rozszerz _(Trim / Extend)_ pozwala obecnie wyciągać pojedyncze ściany z istniejących obiektów.

- Zostało dodanych kilka nowych trybów przyciągania, pozwalając obecnie na na przyciąganie prostopadłe lub równoległe do istniejących linii i znajdowanie pozycji w których są wyrównanie do innych linii.

- Moduł Draft posiada nowe narzędzie, które tworzy, wewnątrz tego samego dokumentu, rzutowany widok 2D istniejącego kształtu 3D.

- Obiekty Draft mogą być teraz rysowane na powierzchni istniejących ścian. Jeśli nie wskażesz płaszczyzny roboczej tymczasowo zostanie wykorzystania ściana leżąca poniżej.

- Moduł draft potrafi teraz importować krzywe Béziera z plików SVG.

Dostępne języki: [![](/images/Flag-en.jpg)](/Release_notes_0.12 "Release notes 0.12 ") [![](/images/9/98/Flag-es.jpg)](/Release_notes_0.12/es "Release notes 0.12/es") [![](/images/Flag-fr.jpg)](/Release_notes_0.12/fr "Release notes 0.12/fr ") [![](/images/8/80/Flag-it.jpg)](/Release_notes_0.12/it "Release notes 0.12/it") [![](/images/Flag-ru.jpg)](/Release_notes_0.12/ru  "Release notes 0.12/ru")

Retrieved from "<http://wiki.freecad.org/index.php?title=Release_notes_0.12/pl&oldid=1122002>"
