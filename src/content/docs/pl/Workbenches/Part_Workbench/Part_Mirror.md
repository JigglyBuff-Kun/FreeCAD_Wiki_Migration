---
title: Część Odbicie lustrzane
---
|  |
| --- |
| Część: Odbicie lustrzane |
| Lokalizacja w menu |
| Część → Odbicie lustrzane ... |
| Środowisko pracy |
| [Część](/Part_Workbench/pl "Part Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

**Odbicie lustrzane** tworzy nowy obiekt *(obraz)*, który jest odbiciem oryginalnego obiektu *(źródła)*. Obiekt obrazu jest tworzony za płaszczyzną lustrzaną. Płaszczyzna lustrzana może być płaszczyzną standardową *(**XY**, **YZ** lub **XZ**)* lub dowolną płaszczyzną równoległą do płaszczyzny standardowej lub ([dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")) dowolną płaszczyznę przy użyciu obiektu referencyjnego.

Dla przykładu:

![](/images/PARTMirrorBeforev11.png)

Przed.

![](/images/PARTMirrorAfterv11.png)

Po odbiciu lustrzanym w płaszczyźnie YZ.

## Użycie

![](/images/PartMirroring_Scr1.png)

1. Opcjonalnie wybierz jeden lub więcej obiektów źródłowych.
2. Polecenie można wywołać na kilka sposobów:
   * Naciśnij przycisk ![](/images/Part_Mirror.svg) **Odbicie lustrzane**.
   * Wybierz opcją z menu **Część → ![](/images/Part_Mirror.svg) Odbicie lustrzane ...**
3. Jeśli nie zaznaczyłeś jeszcze obiektów lub chcesz zmienić zaznaczenie: wybierz jeden lub więcej obiektów z listy **Kształty**.
4. Wykonaj jedną z następujących czynności:
   * Wybierz standardową **Płaszczyznę lustrzaną** z rozwijanej listy.
   * [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Wybierz obiekt odniesienia w oknie [widoku drzewa](/Tree_view/pl "Tree view/pl") lub [widoku 3D](/3D_view/pl "3D view/pl"). Obiektem odniesienia może być dowolna płaska powierzchnia lub okrągła krawędź.
5. Naciśnij przycisk OK.
6. Dla każdego obiektu źródłowego tworzony jest osobny obiekt Odbicie lustrzane.

Gdy etykieta przycisku wyboru przedstawia napis Wybieranie ..., jesteś w trybie wyboru odniesienia i jest aktywny wybór, który uniemożliwia wybór nieobsługiwanych obiektów odniesienia. Kliknięcie przycisku wyłącza bramkę wyboru, a etykieta przycisku zmienia się na Wybierz odniesienie ....

Płaszczyzna lustra jest zdefiniowana przez DANE**Normal** *(kierunek)* i DANE**Base** *(położenie)*. Gdy właściwość DANE**Płaszczyzna odbicia lustrzanego:** zawiera obiekt referencyjny, właściwości te są tylko do odczytu, ponieważ są obliczane na podstawie tego obiektu. Płaszczyzna jest nieskończona, nawet jeśli obiekt odniesienia nie jest.

Obiektem referencyjnym może być płaska powierzchnia, taka jak powierzchnia [sześcianu](/Part_Box/pl "Part Box/pl") środowiska Część, okrągła krawędź, [Dpłaszczyzna odniesienia](/PartDesign_Plane/pl "PartDesign Plane/pl"), [płaszczyzna odniesienia położenia grupy](/App_OriginGroupExtension/pl "App OriginGroupExtension/pl") kontenera [Część](/Std_Part/pl "Std Part/pl") lub dowolny obiekt z pojedynczą płaską powierzchnią lub pojedynczą okrągłą krawędzią. Istnieje również wsparcie dla [Łączy](/App_Link/pl "App Link/pl"). Należy jednak pamiętać, że powierzchnie krzywych złożonych, takie jak [powierzchnie prostokreślne](/Part_RuledSurface/pl "Part RuledSurface/pl") lub [ściany wyciągnięcia przez profile](/Part_Loft/pl "Part Loft/pl") nie są obsługiwane.

## Opcje

Jeśli wybrana zostanie płaszczyzna standardowa zamiast obiektu referencyjnego pola **Punkt odniesienia** można użyć do przesunięcia płaszczyzny lustra równolegle do wybranej standardowej płaszczyzny lustra. Tylko jedno z pól **X**, **Y** lub **Z** może być użyte dla danej płaszczyzny standardowej.

| Standardowa płaszczyzna | Pole punktu bazowego | Efekt |
| --- | --- | --- |
| **XY** | **Z** | Przesuń płaszczyznę lustra wzdłuż osi **Z**. |
| **XY** | **X**, **Y** | Nie ma żadnego efektu. |
| **XZ** | **Y** | Przesuń płaszczyznę lustra wzdłuż osi **Y**. |
| **XZ** | **X**, **Z** | Nie ma żadnego efektu. |
| **YZ** | **X** | Przesuń płaszczyznę lustra wzdłuż osi **X**. |
| **YZ** | **Y**, **Z** | Nie ma żadnego efektu. |

## Uwagi

* Obiekty [Odnośników](/App_Link/pl "App Link/pl") powiązane z odpowiednimi typami obiektów i kontenery [Część: App](/App_Part/pl "App Part/pl") z odpowiednimi widocznymi obiektami wewnątrz mogą być również używane jako obiekty źródłowe. [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl")
* Po wybraniu standardowej płaszczyzny lustrzanej własciwości DANE**Normal** i DANE**Baza** obiektu Odbicie lustrzane można zmienić na dowolną wartość. Dzięki temu nawet bez obiektu referencyjnego nie jesteś ograniczony do standardowych płaszczyzn.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Mirror/pl&oldid=1403356>"