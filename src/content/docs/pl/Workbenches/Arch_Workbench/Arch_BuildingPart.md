---
title: Architektura Część budynku - piętro
---
:::caution
TO NARZĘDZIE JEST PRZESTARZAŁENie będzie dostępne wwersja 1.0 i powyżej. Zamiast tego należy użyćArchitektura: Podłoga.
:::

|  |
| --- |
| Arch BuildingPart |
| Lokalizacja w menu |
| Architektura → Część budynku, 3D/BIM → Poziom |
| Środowisko pracy |
| [Architektura](/Arch_Workbench/pl "Arch Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.18 |
| Zobacz także |
| [Budowla](/Arch_Building/pl "Arch Building/pl"), [Teren](/Arch_Site/pl "Arch Site/pl") |
|  |

## Opis

Narzędzie Część budynku zastępuje stare narzędzia [Podłoga](/Arch_Floor/pl "Arch Floor/pl") i [Budynek](/Arch_Building/pl "Arch Building/pl") nową, bardziej wszechstronną wersją, która może być używana nie tylko do tworzenia Pięter / Poziomów, ale także wszelkiego rodzaju sytuacji, w których różne obiekty Arch / BIM muszą być pogrupowane, a ta grupa może wymagać traktowania jako jednego obiektu lub replikacji.

## Użycie

1. Opcjonalnie, wybierz jeden lub więcej obiektów, które mają być zawarte w nowej części budynku.
2. Naciśnij przycisk ![](/images/Arch_BuildingPart.svg) **Część budowli**.

### Uwagi

Obiekty ``Część budynku`` posiadają wbudowaną, domyślną [płaszczyznę przekroju](/Arch_SectionPlane/pl "Arch SectionPlane/pl").

Płaszczyzna ta jest zawsze równoległa do płaszczyzny bazowej obiektu Część budynku, ale można określić przesunięcie między nimi. Tak więc wszystkie narzędzia, które działają z płaszczyzną przekroju, takie jak [Widok 2D kształtu](/Draft_Shape2DView/pl "Draft Shape2DView/pl") i [Wstaw obiekt środowiska Architektura](/TechDraw_ArchView/pl "TechDraw ArchView/pl") również działają z obiektem Część budynku.

## Opcje

* Po utworzeniu obiektu Część budynku można dodać do niego więcej obiektów, przeciągając je i upuszczając w widoku drzewa lub korzystając z narzędzia ![](/images/Arch_Add.svg) [Połącz obiekty](/Arch_Add/pl "Arch Add/pl").
* Można usuwać obiekty z Części budynku, przeciągając je i upuszczając poza obiekt Widoku drzewa lub korzystając z narzędzia ![](/images/Arch_Remove.svg) [Usuń komponent](/Arch_Remove/pl "Arch Remove/pl").
* Podwójne kliknięcie na obiekcie Część budynku w widoku drzewa ustawia płaszczyznę roboczą w jego lokalizacji, a obiekt Część budynku staje się aktywny, co oznacza, że nowe obiekty zostaną do niego automatycznie dodane. Kolejne podwójne kliknięcie na Części budynku ponownie go dezaktywuje i przywróci płaszczyznę roboczą do poprzedniej pozycji *(aby ta opcja była dostępna, należy ją ustawić w panelu Właściwości Widoku - Interakcja - Podwójne Kliknięcie Aktywuje)*.
* Część budynku może wyświetlać znacznik w widoku 3D z etykietą i wskazaniem poziomu.
* Gdy Część budynku jest przesuwana / obracana, wszystkie jej obiekty podrzędne, które nie mają właściwości DANE**Ruch z obiektem nadrzędnym** lub mają ją włączoną, zostaną przesunięte / obrócone razem.
* Części Budynku mogą być [Klonowane](/Draft_Clone/pl "Draft Clone/pl").
* Części Budynku mogą przyjmować dowolny typ IFC. Jego właściwość **Typ IFC** określa jego zastosowanie. Jeśli ustawisz go na **Poziom Budynku**, będzie działać jak poziom. Jeśli ustawisz go na **Budynek**, zachowuje się jak budynek, a jeśli ustawisz go na **Element złożenia**, zachowuje się jak zmontowane elementy. Jego ikona zmieni się, aby odzwierciedlić to ustawienie, ale poza tym nie ma to żadnego innego wpływu w programie FreeCAD. Jednak eksport do IFC jako jeden z tych typów może mieć wpływ na inne aplikacje BIM.
* Części budynku pozwalają zdefiniować **Automatyczną grupę przechwytywania**. Następne obiekty Rysunku Roboczego i Architektury, lub cokolwiek innego, co korzysta z Draft.autogroup(), zostaną automatycznie dodane do tej Części budynku, jeśli znajdują się w całości w polu przechwytywania. [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl")

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt **Część budowli** wywodzi się z obiektu [App: Cechy geometrii](/App_GeoFeature/pl "App GeoFeature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Podstawa

* DANE**Grupa** (`LinkList`): Lista obiektów, do których istnieją odniesienia.
* DANE (Ukryte)**\_ Group Touched** (`Bool`).

Część Budynku

* DANE**Powierzchnia** (`Area`): Obliczona powierzchnia podłogi tej kondygnacji.
* DANE**Wysokość** (`Length`): Wysokość tego obiektu i jego obiektów podrzędnych. Obiekty podrzędne mogą być na przykład [ścianami](/Arch_Wall/pl "Arch Wall/pl"). Wysokość każdej ściany musi być ustawiona na `0`, aby właściwość wysokości Części Budynku przenosiła się do obiektów wewnątrz niej.
* DANE**Przesunięcie Poziomu** (`Length`): Punkt (0,0,0) tego poziomu. Wartość ta jest dodawana do atrybutu `Placement.Base.z` obiektu Część budynku, aby wskazać pionowe przesunięcie bez faktycznego przesuwania obiektu. Wynikowe przesunięcie jest wyświetlane, jeśli WIDOK**Show Level** ma wartość `PRAWDA`.
* DANE (Ukryte)**Tabela Materiałów** (`Map`): Mapa MaterialName:SolidIndexesList, która określa powiązanie nazw materiałów z indeksami brył do użycia podczas odwoływania się do tego obiektu z innych plików.
* DANE**Tylko Bryły** (`Bool`): Jeśli ustawiono `PRAWDA`, tylko bryły będą pobierane przez ten obiekt, gdy będą przywoływane z innych plików.
* DANE (Hidden)**Zapisany twórca** (`FileIncluded`): Ten atrybut przechowuje reprezentację twórcy dla tego obiektu.
* DANE (Hidden)**Kształt** (`PartShape`): Kształt tego obiektu.

Obiekt podrzędny

* DANE**Propagacja wysokości** (`Bool`): Jeśli wartość ta przyjmie `Prawda`, wartość wysokości będzie przekazywana do zawartych obiektów. Zobacz właściwość DANE**Height** dla dodatkowych warunków, które mają zastosowanie.

IFC

* DANE (Hidden)**Dane IFC** (`Map`): dane zgodne ze standardem IFC.
* DANE (Hidden)**Własciwości IFC** (`Map`): Właściwości IFC tego obiektu.
* DANE**Typ IFC** (`Enumeration`): Typ IFC dla tego obiektu.

Atrybuty IFC

* DANE**Opis** (`String`): Opcjonalny opis dla tego komponentu
* DANE**Globalny Id** (`String`).
* DANE**Typ obiektu** (`String`).
* DANE**Wysokość całkowita** (`Length`)
* DANE**Szerokość całkowita** (`Length`)
* DANE**Typ podziału** (`Enumeration`)
* DANE**Zdefiniowany typ** (`Enumeration`)
* DANE**Tag** (`String`): Opcjonalny znacznik dla tego komponentu.
* DANE**Typ podziału użytkownika** (`String`).

### Widok

Grupa automatycznie

* WIDOK**Autogroup Autosize** (`Bool`): Automatycznie ustawia rozmiar pola przechwytywania na podstawie zawartości części budynku. [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl").
* WIDOK**Autogroup Box** (`Bool`): Włącza/wyłącza automatyczne grupowanie (i wyświetlanie pola przechwytywania). [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")
* WIDOK**Autogroup Margin** (`Length`): Margines używany, gdy włączony jest automatyczny rozmiar. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")
* WIDOK**Autogroup Size** (`IntegerList`): Pole przechwytywania dla nowo utworzonych obiektów wyrażone jako [XMin,YMin,ZMin,XMax,YMax,ZMax]. [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl").

Część Budynku

* WIDOK**Nazwa Czcionki** (`Font`): Czcionka do użytku w tekstach.
* WIDOK (Length)**Rozmiar Czcionki** (`Font Size`): Rozmiar czcionki dla tekstów.
* WIDOK (Float)**Grubość Linii** (`Line Width`): Grubość linii dla tego obiektu.
* WIDOK (Bool)**Przesunięcie Początku** (`Origin Offset`): Jeśli wartość to `Prawda`, aktywując, przesunięcie wyświetlania będzie również miało wpływ na znacznik początku.
* WIDOK**Nadpisz Jednostkę** (`String`): Opcjonalna jednostka do wyrażenia poziomów.
* WIDOK**Pokaż Etykietę** (`Bool`): Jeśli wartość to `Prawda`, po aktywowaniu wyświetlana jest etykieta obiektu.
* WIDOK**Pokaż Poziom** (`Bool`): Jeśli wartość to `Prawda`, pokazuj poziom.
* WIDOK**Pokaż Jednostkę** (`Bool`): Jeśli wartość to `Prawda`, pokazuj jednostkę na znaczniku poziomu.

Obiekt podrzędny

* WIDOK**Kolor Linii obiektów podrzędnych** (`Kolor`): Kolor linii do zastosowania dla obiektów podrzędnych tego elementu budynku.
* WIDOK**Grubość Linii obiektów podrzędnych** (`Float`): Grubość linii do zastosowania dla obiektów podrzędnych tego elementu budynku.
* WIDOK**Nadpisanie obiektów podrzędnych** (`Bool`): Jeśli watrość to `Prawda`, obiekty zawarte w tym elemencie budynku będą stosować te ustawienia linii, koloru i przezroczystości.
* WIDOK**Kolor Kształtu obiektów podrzędnych** (`Kolor`): Kolor kształtu do zastosowania dla obiektów podrzędnych tego elementu budynku.
* WIDOK**Przezroczystość obiektów podrzędnych** (`Procent`): Przezroczystość do zastosowania dla obiektów podrzędnych tego elementu budynku.

Wycinek

* WIDOK**Automatyczne Wycinanie Widoku** (`Bool`): Włącz wycinanie widoku podczas aktywacji tego poziomu.
* WIDOK**Margines Wycinania** (`Długość`): Odległość między płaszczyzną poziomu a linią wycinania.
* WIDOK**Wycinanie Widoku** (`Bool`): Wytnij widok powyżej tego poziomu.

Interakcje

* WIDOK**Automatyczna Płaszczyzna Robocza** (`Bool`): Jeśli ustawiono wartość `Prawda`, płaszczyzna robocza będzie utrzymana w trybie Automatycznym.
* WIDOK**Aktywacja Podwójnego Kliknięcia** (`Bool`): Jeśli ustawiono wartość `Prawda`, podwójne kliknięcie tego obiektu w drzewie aktywuje go.
* WIDOK**Przywróć Widok** (`Bool`): Jeśli ustawiono wartość `Prawda`, widok przechowywany w tym obiekcie zostanie przywrócony po podwójnym kliknięciu.
* WIDOK**Zapisz Inventor** (`Bool`): Jeśli opcja jest włączona, reprezentacja inventor tego obiektu zostanie zapisana w pliku FreeCAD, co pozwoli na odwołanie się do niej w innych plikach w trybie lekkim.
* WIDOK (Ukryte)**Zapisany Inventor** (`FileIncluded`): Slot do zapisywania reprezentacji inventor tego obiektu, jeśli jest włączony.
* WIDOK**Ustaw Płaszczyznę Roboczą** (`Bool`): Jeśli ustawiono wartość `Prawda`, po aktywowaniu płaszczyzna robocza automatycznie dostosuje się do tej Części budynku.
* WIDOK (Ukryte)**Dane Widoku** (`FloatList`): Dane pozycji kamery skojarzone z tym obiektem.

## Tworzenie skryptów

*Zobacz również:* [API: Architektura](/Arch_API/pl "Arch API/pl") i [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Część budynku** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następujących funkcji:

```
BuildingPart = makeBuildingPart(objectslist=None)

```

* Tworzy obiekt `BuildingPart` z `objectslist`, który jest listą obiektów.

Przykład:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
baseline2 = Draft.makeLine(p1, -1*p2)

Wall1 = Arch.makeWall(baseline, length=None, width=150, height=2000)
Wall2 = Arch.makeWall(baseline2, length=None, width=150, height=1800)
FreeCAD.ActiveDocument.recompute()

BuildingPart = Arch.makeBuildingPart([Wall1, Wall2])

Floor = Arch.makeFloor([BuildingPart])
Building = Arch.makeBuilding([Floor])
Site = Arch.makeSite(Building)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_BuildingPart/pl&oldid=1462510>"