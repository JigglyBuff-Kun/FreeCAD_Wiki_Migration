---
title: Odniesienie położenia
---
## Wprowadzenie

W FreeCAD słowo "Odniesienie położenia" jest zwykle używane w odniesieniu do geometrii pomocniczej w środowisku pracy [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl"). Te elementy geometryczne nie będą stanowić części ostatecznego [Kształtu](/Shape/pl "Shape/pl") [Zawartości](/Body/pl "Body/pl"), ale mogą być używane jako odniesienia i podpory dla [Szkiców](/Sketch/pl "Sketch/pl") i innych typów [Cech](/Feature/pl "Feature/pl").

Następujące elementy odpowiadają elementom wywodzącym się z klasy `Part::Datum`, która sama wywodzi się z [Część: Cecha](/Part_Feature/pl "Part Feature/pl"):

* [Projekt Części: Punkt odniesienia](/PartDesign_Point/pl "PartDesign Point/pl")
* [Projekt Części: Linia odniesienia](/PartDesign_Line/pl "PartDesign Line/pl")
* [Projekt Części: Płaszczyzna odniesienia](/PartDesign_Plane/pl "PartDesign Plane/pl")
* [Projekt Części: Lokalny układ współrzędnych](/PartDesign_CoordinateSystem/pl "PartDesign CoordinateSystem/pl")

Następujące elementy pochodzą bezpośrednio z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl"):

* [Projekt Części: Łącznik kształtu](/PartDesign_ShapeBinder/pl "PartDesign ShapeBinder/pl")
* [Łącznik kształtów podrzędnych](/PartDesign_SubShapeBinder/pl "PartDesign SubShapeBinder/pl")

## Użycie

1. Przełącz się do środowiska pracy [Projekt części](/PartDesign_Workbench/pl "PartDesign Workbench/pl").
2. Naciśnij przycisk ![](/images/PartDesign_Body.svg) [Utwórz zawartość](/PartDesign_Body/pl "PartDesign Body/pl").
3. Wybierz odniesienie położenia bryły i ustaw ją jako widoczną, naciskając klawisz Spacja na klawiaturze.
4. Naciśnij ![](/images/PartDesign_Plane.svg) [Utwórz płaszczyznę odniesienia](/PartDesign_Plane/pl "PartDesign Plane/pl"), aby otworzyć [panel zadań](/Task_panel/pl "Task panel/pl") płaszczyzny.
5. W oknie [widoku 3D](/3D_view/pl "3D view/pl") kliknij jedną ze standardowych płaszczyzn, na przykład płaszczyznę XY. Następnie naciśnij OK, aby zamknąć panel zadań.
6. Teraz w [widoku drzewa](/Tree_view/pl "Tree view/pl") wybierz nowo utworzoną Płszczyznę odniesienia, a następnie naciśnij przycisk ![](/images/PartDesign_NewSketch.svg) [Utwórz szkic](/PartDesign_NewSketch/pl "PartDesign NewSketch/pl").
7. Utwórz zamkniętą polilinię, a następnie użyj ![](/images/PartDesign_Pad.svg) [wyciągnięcia](/PartDesign_Pad/pl "PartDesign Pad/pl") do wyciągnięcia szkicu i utworzenia początkowej bryły.

Teraz możesz dowolnie przesuwać i obracać Płaszczyzne odniesienia, zmieniając jej właściwości w [edytorze właściwości](/Property_editor/pl "Property editor/pl"), a Szkic i Wyciągnięcie będą podążać za jej nowym [umiejscowieniem](/Placement/pl "Placement/pl").

Można dodać inne typy układów odniesienia, które będą używane z innymi szkicami i funkcjami.

## Uwagi

Odkąd pojawiły się w wersji 0.17, obiekty odniesienia miały być używane wewnątrz [Zawartości](/PartDesign_Body/pl "PartDesign Body/pl") środowiska Projekt Części. Ponieważ jednak są one użytecznymi obiektami "referencyjnymi" z różnymi metodami [dołączenia](/Part_EditAttachment/pl "Part EditAttachment/pl"), zaproponowano, aby były one dostępne poza środowiskiem pracy [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl"). W ten sposób będą one użyteczne we wszystkich środowiskach roboczych jako geometria pomocnicza, szczególnie w kontekście tworzenia [złożeń](/Assembly/pl "Assembly/pl").

* [Tworzenie i wyświetlanie lokalnego układu współrzędnych](https://forum.freecadweb.org/viewtopic.php?f=10&t=2604)
* [Obiekty układu odniesienia w App::Part](https://forum.freecadweb.org/viewtopic.php?f=22&t=33654)
* [Pasek narzędzi struktury i układy odniesienia](https://forum.freecadweb.org/viewtopic.php?t=42759)
* [Lokalny układ współrzędnych nie może być użyty w środowisku pracy Projekt Części](https://forum.freecadweb.org/viewtopic.php?f=3&t=42960)

Retrieved from "<http://wiki.freecad.org/index.php?title=Datum/pl&oldid=1331029>"