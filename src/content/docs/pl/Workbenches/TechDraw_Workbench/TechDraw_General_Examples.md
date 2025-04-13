---
title: Rysunek Techniczny Przykłady
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

## Wprowadzenie

Środowisko pracy ![](/images/Workbench_TechDraw.svg) [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") posiada wiele narzędzi, ale jakie są wymagane elementy, aby zamienić kartkę papieru w odpowiedni rysunek? Ta strona ma na celu wyjaśnienie i podanie kilku przykładów tego, co potrafi środowisko Rysunek Techniczny.

## Rysunki

Rysunek składa się z jednego lub więcej widoków opisujących część geometrycznie... Ale to już wiesz, prawda?

Przyjrzyjmy się podstawowym elementom.

### Rysunki tworzone ręcznie

#### Arkusz papieru

Rozmiary papieru są znormalizowane i aby móc drukować bez skalowania, format naszego arkusza powinien odpowiadać żądanemu formatowi do drukowania.

#### Ramki

Kiedy rysunki rysowano ręcznie, należało je przypiąć lub przykleić taśmą do deski kreślarskiej. Do gotowego rysunku dodano dziurki, umożliwiające dołączenie złożonego rysunku do pliku lub teczki. Ta część zewnętrzna jest oddzielona prostokątną ramą. Kolejna prostokątna ramka wewnątrz pierwszej wyznacza obszar rysowania. Zwykle pomiędzy obiema ramkami znajduje się zestaw indeksów i separatorów służących do lokalizowania określonych elementów rysunku.

#### Blok tytułowy

Blok tytułu zawiera pisemne informacje o narysowanej części i rysunku, takie jak numer części, tytuł, autor, właściciel itp.

#### Zestawienie materiałów

Opcjonalnie rysunki złożeniowe mogą zawierać zestawienie materiałów _(BOM)_. Zestawienie materiałów można również umieścić na osobnym arkuszu rysunkowym lub arkuszu kalkulacyjnym.

#### Rejestr zmian

Zmiany w części lub rysunku są protokołowane w dzienniku na rysunku lub w oddzielnym dokumencie i powiązane z rysunkiem za pomocą odpowiednich indeksów.

#### Widok

Widoki zawierają geometryczny opis części z określonego kierunku. Większość części wymaga co najmniej dwóch widoków do prawidłowego opisu.

#### Opisy

Dodatkowe teksty, które nie należą do elementów rysunku, wymienionych powyżej.

### Rysunki wykonane w środowisku Rysunek Techniczny

Środowisko Rysunek Techniczny używa obiektu Strona jako kontenera dla wszystkich elementów związanych z rysowaniem. Nie może on istnieć samodzielnie, ale musi zawierać szablon. Dlatego nie ma polecenia Nowa strona, a nowy obiekt strony jest tworzony automatycznie za każdym razem, gdy wstawiany jest szablon.

#### Szablony

Obiekt [szablon](/TechDraw_Templates/pl "TechDraw Templates/pl") jest plikiem obrazu [SVG](/SVG/pl "SVG/pl"), a jego kod zawiera wszystkie informacje potrzebne do utworzenia wirtualnej kartki papieru z pasującymi ramkami i blokiem tytułowym oraz opcjonalnie zestawieniem materiałów.

Obrazy SVG nie są parametryczne. Oznacza to, że dla każdego formatu należy utworzyć osobny szablon, taki zestaw szablonów jest potrzebny dla każdej odmiany obiektów ramki lub bloku tytułowego. To sporo do kodowania i zarządzania, ale z drugiej strony szablony nie mogą zostać przypadkowo zmienione we FreeCAD.

Szablon można utworzyć na kilka sposobów:

1. Narysuj go za pomocą programu [Inkscape](https://en.wikipedia.org/wiki/Inkscape), zobacz artykuł [Jak stworzyć własny szablon TechDraw](/TechDraw_TemplateHowTo/pl "TechDraw TemplateHowTo/pl").
2. Napisać go samodzielnie, patrz [Omówienie szablonu](/Sandbox:TechDraw_TemplateExplained "Sandbox:TechDraw TemplateExplained").
3. Użyj makra, zobacz artykuły [Generator szablonów](/TechDraw_TemplateGenerator/pl "TechDraw TemplateGenerator/pl") i [Makrodefinicja: Pomocnik szablonów](/Macro_TemplateHelper/pl "Macro TemplateHelper/pl").

![](/images/TechDraw_ExampleDrawing-01.png)

Wyjaśnienie wyniku działania szablonu

![](/images/Macro_TemplateHelper_A3%2BBOM.png)

Wynik działania makrodefinicji _Pomocnik szablonów_, ISO A3 + zestawienie materiałów

#### Dotychczasowy rysunek

Do tego momentu można śmiało powiedzieć, że środowisko pracy Rysunek Techniczny w połączeniu z osadzonymi szablonami SVG może zapewnić odpowiedni arkusz rysunkowy z ramką i blokiem tytułowym. Niektóre wpisy mogą być zmieniane po utworzeniu dzięki edytowalnym tekstom, a niektóre treści mogą być wstawiane automatycznie, jeśli wykorzystywane są odpowiednie makrodefinicje.

[Przewiń na górę strony](#top)

## Widoki

Widoki zawierają geometryczny opis 2D obiektu. Zawartość widoku Rysunku Technicznego może pochodzić z geometrii 3D lub być uzyskana z innego środowiska pracy, takiego jak ![](/images/TechDraw_ArchView.svg) [Widok architektury](/TechDraw_ArchView/pl "TechDraw ArchView/pl") i ![](/images/TechDraw_DraftView.svg) [Widoki Rysunku Roboczego](/TechDraw_DraftView/pl "TechDraw DraftView/pl").

Ponieważ FreeCAD jest aplikacją do modelowania 3D, kluczową funkcją środowiska pracy Rysunek Techniczny jest tworzenie widoków 2D z geometrii 3D. Spójrzmy na prosty przykład, część z poradnika [Podstawy dla środowiska pracy Projekt Części](/Basic_Part_Design_Tutorial/pl "Basic Part Design Tutorial/pl"), która jest również używana z poradnikiem [Podstawy dla środowiska pracy Rysunek Techniczny](/Basic_TechDraw_Tutorial/pl "Basic TechDraw Tutorial/pl"):

![](/images/Tut17_final_refined.png)

Część z poradnika Podstawy projektowania części

### Aktywny widok

Obraz ![](/images/TechDraw_ActiveView.svg) [Aktyny widok](/TechDraw_ActiveView/pl "TechDraw ActiveView/pl") jest mniej więcej zrzutem ekranu [widoku 3D](/3D_view/pl "3D view/pl") w swoim własnym rodzaju widoku Rysunku technicznego.

![](/images/TechDraw_ExampleDrawing-02.png)

Element wyświetlany w widoku aktywnym z włączoną opcją Bez tła

### Widok

Obraz ![](/images/TechDraw_View.svg) [Widok](/TechDraw_View/pl "TechDraw View/pl") jest podstawowym obiektem widoku Rysunku technicznego do tworzenia odpowiednich rysunków. W przeciwieństwie do widoku aktywnego, nie jest on ograniczony do widocznych obiektów na ekranie, ale wyświetla również wybrane obiekty poza ekranem. Preferowana skala zależy od dostępnej przestrzeni i poziomu szczegółowości, który ma być wyświetlany.

![](/images/TechDraw_ExampleDrawing-03.png)

Element wyświetlany w dowolnym widoku, takim jak Aktywny widok - powyżej

### Grupa rzutów

Narzędzie ![](/images/TechDraw_ProjectionGroup.svg) [Grupa rzutów](/TechDraw_ProjectionGroup/pl "TechDraw ProjectionGroup/pl") dostarcza zestaw widoków. Kierunek każdego widoku jest prostopadły do jego sąsiada i wszystkie domyślnie zależą od kierunku okna 3D. Środowisko pracy Rysunek Techniczny zapewnia sześć widoków pasujących do boków [Kostki nawigacyjnej](/Navigation_Cube/pl "Navigation Cube/pl") i cztery widoki izometryczne.

![](/images/TechDraw_ExampleDrawing-04.png)

Element wyświetlany w grupie rzutów składającej się z trzech widoków _(w trybie rzutu pod pierwszym kątem)_

### Widok przekroju

Środowisko pracy Rysunek Techniczny zapewnia narzędzia do tworzenia ![](/images/TechDraw_SectionView.svg) [Widoku przekroju](/TechDraw_SectionView/pl "TechDraw SectionView/pl") lub ![](/images/TechDraw_ComplexSection.svg) [Widoku przekroju złożonego](/TechDraw_ComplexSection/pl "TechDraw ComplexSection/pl"). Oba rodzaje są zależne od widoku bazowego i narzędzi do definiowania linii przekroju i określania kierunku widoku. Zapoznaj się z omówieniem w [przykładów przekrojów](/TechDraw_Section_Examples/pl "TechDraw Section Examples/pl").

![](/images/TechDraw_ExampleDrawing-05.png)

Element przecięty wyświetlany w przekroju A-A na podstawie widoku z przodu

### Widok pomocniczy

Gdybyśmy potrzebowali widoku pochylonej płaszczyzny, aby zobaczyć jej rzeczywiste długości, zdefiniowalibyśmy kierunek widoku w widoku podstawowym i odpowiednio umieścilibyśmy widok pomocniczy, ale środowisko Rysunek Techniczny nie zapewnia jeszcze narzędzia do widoków pomocniczych.

Dobra wiadomość: jest to dość łatwe do naśladowania przy użyciu narzędzia ![](/images/TechDraw_SectionView.svg) [Widok przekroju](/TechDraw_SectionView/pl "TechDraw SectionView/pl"):

1. Wybierz widok podstawowy.
2. Utwórz ![](/images/TechDraw_SectionView.svg) [Widok przekroju](/TechDraw_SectionView/pl "TechDraw SectionView/pl") z domyślnymi ustawieniami.
3. Użyj ![](/images/TechDraw_AngleDimension.svg) [Wstaw wymiar kąta](/TechDraw_AngleDimension/pl "TechDraw AngleDimension/pl") aby zmierzyć kąt płaszczyzny.
4. Edytuj kąt widoku przekroju w obszarze Ustaw kierunek widoku w panelu zadań.
5. Edytuj współrzędne widoku przekroju w obszarze Section Plane Location w panelu zadań. Użyj _małych kroków_, aby przesunąć linię przekroju poza obiekt, w przeciwnym razie FreeCAD może się zawiesić.
6. Ukryj niechciane elementy adnotacji, takie jak linia przekroju, strzałki przekroju i nazwa przekroju.
7. Dodaj potrzebne elementy, takie jak strzałka widoku i nazwa widoku.

![](/images/TechDraw_ExampleDrawing-06.png)

Domyślny widok przekroju oparty na widoku z lewej strony, wyświetlający kąt linii przekroju

![](/images/TechDraw_ExampleDrawing-07.png)

Widok przekroju z kątem linii przekroju ustawionym na `218,93°` _(38,93° plus 180° do odwrócenia kierunku)_

![](/images/TechDraw_ExampleDrawing-08.png) ![](/images/Button_right.svg)
![](/images/TechDraw_ExampleDrawing-09.png)

Widok przekroju z przeniesioną linią przekroju → Gotowy widok pomocniczy

### Widok szczegółu

Obiekt ![](/images/TechDraw_DetailView.svg) [Widok szczegółu](/TechDraw_DetailView/pl "TechDraw DetailView/pl") to kopia obszaru widoku podstawowego, zwykle w celu powiększenia słabo widocznej geometrii.

![](/images/TechDraw_ExampleDrawing-10.png)

Szczegół _(widok)_ Y na podstawie przekroju A-A

### Niedoskonałości

- Widok detalu zgodnie ze standardem ISO nie ma ramki/obramowania _(górnej części otaczającego okręgu)_. Uwaga redaktora: co należy przez to rozumieć? Ramki nie są drukowane...
- Linia przerwania, która odcina detal od reszty powinna być cienką linią odręczną lub jej odpowiednikiem w programie CAD, cienką linią zygzakowatą. FreeCAD i środowisko pracy Rysunek Techniczny nie zapewniają _(jeszcze)_ kreślenia linii odręcznych / zygzakowatych.
- Obszary zakreskowane w widoku podstawowym powinny być również zakreskowane w widoku szczegółowym.

### Widok architektoniczny

![](/images/TechDraw_ArchView.svg) [Widok architektoniczny](/TechDraw_ArchView/pl "TechDraw ArchView/pl") wyświetla widok ![](/images/Arch_SectionPlane.svg) [płaszczyzny przekroju](/Arch_SectionPlane/pl "Arch SectionPlane/pl"). Jego zawartość jest renderowana przez środowisko pracy ![](/images/Workbench_BIM.svg) [BIM](/BIM_Workbench/pl "BIM Workbench/pl").

### Widok środowiska Rysunek Roboczy

Obraz ![](/images/TechDraw_DraftView.svg) [Widok obiektu Rysunku Roboczego](/TechDraw_DraftView/pl "TechDraw DraftView/pl") wyświetla widok wybranego obiektu opartego na środowisku pracy [Część](/Part_Workbench/pl "Part Workbench/pl") lub obiektu grupy. Jest przeznaczony dla obiektów 2D. Jego zawartość jest renderowana przez środowisko ![](/images/Workbench_Draft.svg) [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl").

![](/images/05_Dr01_Draft_Text_ShapeString.png) ![](/images/Button_right.svg)
![](/images/06_Dr01_Draft_TechDraw_page.png)

Wybrane elementy szkicu w widoku 3D → Te same elementy wyświetlane w widoku rysunku roboczego na rysunku

### Widok Arkusza kalkulacyjnego

- Wstawia widok wybranego ![](/images/TechDraw_SpreadsheetView.svg) [Arkusza kalkulacyjnego](/TechDraw_SpreadsheetView/pl "TechDraw SpreadsheetView/pl") ze środowiska pracy [Arkusz kalkulacyjny](/Spreadsheet_Workbench/pl "Spreadsheet Workbench/pl").

![](/images/TechDraw_Spreadsheetview.png)

Obiekt środowiska Arkusz kalkulacyjny wyświetlany w widoku arkusza kalkulacyjnego

### Dotychczasowe widoki

Środowisko Rysunek Techniczny potrzebuje kilku dodatków, takich jak linie łamania i odpowiednie narzędzie widoku pomocniczego, a także ulepszenia narzędzia widoku szczegółu. Ale nawet w tym stanie możemy opisać nasze obiekty wizualnie całkiem dobrze:

![](/images/TechDraw_ExampleDrawing-11.png)

Tak mógłby wyglądać rysunek z zestawem widoków przykładowego elementu

[Przewiń na górę strony](#top)

## Wymiarowanie

Teraz, gdy nasz przedmiot jest opisany geometrycznie, wymiary zostaną dodane w celu dalszego zdefiniowania kształtu, a tolerancje w celu zdefiniowania dopuszczalnego odchylenia.
Środowisko pracy Rysunek Techniczny dostarcza kilka narzędzi do zastosowania wymiarów do dwuwymiarowej reprezentacji naszego przedmiotu:

- ![](/images/TechDraw_LengthDimension.svg) [Wymiar długości](/TechDraw_LengthDimension/pl "TechDraw LengthDimension/pl")
- ![](/images/TechDraw_HorizontalDimension.svg) [Wymiar poziomy](/TechDraw_HorizontalDimension "TechDraw HorizontalDimension")
- ![](/images/TechDraw_VerticalDimension.svg) [Wymiar pionowy](/TechDraw_VerticalDimension/pl "TechDraw VerticalDimension/pl")
- ![](/images/TechDraw_RadiusDimension.svg) [Wymiar promienia](/TechDraw_RadiusDimension/pl "TechDraw RadiusDimension/pl")
- ![](/images/TechDraw_DiameterDimension.svg) [Wymiar średnicy](/TechDraw_DiameterDimension/pl "TechDraw DiameterDimension/pl")
- ![](/images/TechDraw_AngleDimension.svg) [Wymiar kąta](/TechDraw_AngleDimension/pl "TechDraw AngleDimension/pl")
- ![](/images/TechDraw_3PtAngleDimension.svg) [Trzy punktowy wymiar kąta](/TechDraw_3PtAngleDimension/pl "TechDraw 3PtAngleDimension/pl")

Ich wspólną cechą jest to, że mierzą rzutowany kształt elementu. Jeśli uczyłeś się kreślenia w sposób ręczny, wiesz, jak używać widoków pomocniczych, aby obrócić element do pozycji, w której długości rzutowane są równe długościom rzeczywistym. W przypadku wizualizacji innej niż ta staroszkolna, wymiary można powiązać z geometrią 3D za pomocą narzędzia ![](/images/TechDraw_DimensionRepair.svg) [Napraw odniesienia do wymiarów](/TechDraw_DimensionRepair/pl "TechDraw DimensionRepair/pl"), aby wyświetlić "rzeczywiste wymiary".

Dwa inne narzędzia mierzą całkowitą długość odpowiednio poziomo lub pionowo:

- ![](/images/TechDraw_HorizontalExtentDimension.svg) [Wstaw wymiar rozpiętości poziomej](/TechDraw_HorizontalExtentDimension/pl "TechDraw HorizontalExtentDimension/pl")
- ![](/images/TechDraw_VerticalExtentDimension.svg) [Wstaw wymiar rozpiętości pionowej](/TechDraw_VerticalExtentDimension/pl "TechDraw VerticalExtentDimension/pl")

Nie można ich jeszcze łączyć z geometrią 3D.

Zobacz informacje na stronie [Okjnodialogowe](/TechDraw_LengthDimension/pl#Okno_dialogowe "TechDraw LengthDimension/pl") _(i następującą sekcję właściwości)_ dla wszystkich ustawień, które nie zostały wymienione w tym przeglądzie.

### Wymiary podstawowe

Tekst wymiaru zależy głównie od tych właściwości:

- DANE**Specyfikator formatu**
- DANE**Format Specyfikacji Nad Tolerancją**
- DANE**Format Specyfikacji Pod Tolerancją**.

: Domyślnie ich wartości to `%.2f`.

Aby "oszukać", możemy użyć tych dwóch właściwości:

- DANE**Dowolnie**

: : Ustaw na `FAŁSZ`, aby użyć zawartości **Specyfikator formatu** do sformatowania rzeczywistej wartości wymiaru.
: Ustaw na `PRAWDA`, aby użyć zawartości **Specyfikator formatu** do wyświetlenia jako tekst zamiast wartości wymiaru.

- DANE**Tolerancja dowolnie**: Podobnie jak DANE**Dowolnie**, ale dla tolerancji.

Jeśli potrzebujemy tylko wartości wymiaru, nie pozostaje nic innego, jak zmienić liczbę miejsc po przecinku w razie potrzeby.

: Na przykład: `%.2f` → `%.3f`, aby wyświetlić 3 miejsca po przecinku, lub `%.2f` → `%.0f`, aby wyświetlić liczby całkowite.

#### Wymiar długości

Dostępne są trzy narzędzia do dodawania wymiarów długości: ![](/images/TechDraw_LengthDimension.svg) [Wymiar długości](/TechDraw_LengthDimension/pl "TechDraw LengthDimension/pl"), ![](/images/TechDraw_HorizontalDimension.svg) [Wymiar poziomy](/TechDraw_HorizontalDimension/pl "TechDraw HorizontalDimension/pl"), oraz ![](/images/TechDraw_VerticalDimension.svg) [Wymiar pionowy](/TechDraw_VerticalDimension/pl "TechDraw VerticalDimension/pl").

![](/images/TechDraw_ExampleDrawing-17.png) ![](/images/Button_right.svg)
![](/images/TechDraw_ExampleDrawing-18.png)

Po lewej: Dwa widoki obiektu z zastosowanymi wymiarami długości → Po prawej: Ten sam widok z przodu obrócony o 20°

Pokazuje to, że ważne jest, aby obrócić widok z przodu w oknie dialogowym Grupy rzutów, w przeciwnym razie połączone widoki nie będą zgodne. Z drugiej strony ograniczyłoby nas to do obrotów o 90°.

Jeśli wymiar musi przebiegać równolegle do krawędzi, wymaga innej wybieralnej linii prostopadłej do krawędzi i narzędzia ![](/images/TechDraw_LengthDimension.svg) [Wstaw wymiar długości](/TechDraw_LengthDimension/pl "TechDraw LengthDimension/pl"), które może znaleźć najkrótszą `(= prostopadłą)` odległość między punktem a linią. Krawędź nie zostanie automatycznie przedłużona przez umowną linię, więc musimy ręcznie utworzyć linię pomocniczą `(kosmetyczną)`. `(Można również użyć punktu kosmetycznego, ale wymaga to jeszcze więcej pracy)`.

- Czarny (punkt do linii) ![](/images/TechDraw_LengthDimension.svg) [Wymiar długości](/TechDraw_LengthDimension/pl "TechDraw LengthDimension/pl") zależy od linii pomocniczej, która nie obraca się wraz z widokiem _(punkt kosmetyczny też nie byłby pomocny)_.
- ![](/images/TechDraw_HorizontalDimension.svg) [Wymiar poziomy](/TechDraw_HorizontalDimension/pl "TechDraw HorizontalDimension/pl") i ![](/images/TechDraw_VerticalDimension.svg) [Wymiar pionowy](/TechDraw_VerticalDimension/pl "TechDraw VerticalDimension/pl") _(czerwony i zielony)_ pozostają w orientacji strony i odpowiednio zmieniają swoje wartości.
- Niebieski to punkt do linii ![](/images/TechDraw_LengthDimension.svg) [Wymiar długości](/TechDraw_LengthDimension/pl "TechDraw LengthDimension/pl"), ale obraca się wraz z widokiem, ponieważ nie ma geometrii pomocniczej.

#### Wymiar kąta

Środowisko pracy Rysunek Techniczny udostępnia dwa narzędzia do dodawania wymiarów kątowych: ![](/images/TechDraw_AngleDimension.svg) [Wymiar kąta](/TechDraw_AngleDimension/pl "TechDraw AngleDimension/pl") oraz ![](/images/TechDraw_3PtAngleDimension.svg) [Trzy punktowy wymiar kąta](/TechDraw_3PtAngleDimension/pl "TechDraw 3PtAngleDimension/pl").

![](/images/TechDraw_ExampleDrawing-19.png)

Dwa sposoby dodania wymiaru kąta.

- Niebieski: ![](/images/TechDraw_AngleDimension.svg) [Wymiar kąta](/TechDraw_AngleDimension/pl "TechDraw AngleDimension/pl") między dwiema krawędziami.
- Czerwony: ![](/images/TechDraw_3PtAngleDimension.svg) [Trzy punktowy wymiar kąta](/TechDraw_3PtAngleDimension/pl "TechDraw 3PtAngleDimension/pl") przy użyciu punktów końcowych i punktu środkowego łuku.

#### Wymiar sfazowania

Wymiar fazowania można zastosować jako [Wymiar długości](#Wymiar_długości) z ręcznie edytowaną właściwością DANE**Specyfikator formatu** lub przy użyciu narzędzia ![](/images/TechDraw_ExtensionCreateHorizChamferDimension.svg) [Wymiar poziomy sfazowania](/TechDraw_ExtensionCreateHorizChamferDimension/pl "TechDraw ExtensionCreateHorizChamferDimension/pl") oraz ![](/images/TechDraw_ExtensionCreateVertChamferDimension.svg) [Wymiar pionowy sfazowania](/TechDraw_ExtensionCreateVertChamferDimension/pl "TechDraw ExtensionCreateVertChamferDimension/pl"), aby utworzyć rozmiar i wymiar kąta sfazowania.

![](/images/TechDraw_ExampleDrawing-14.png) ![](/images/Button_right.svg)
![](/images/TechDraw_ExampleDrawing-15.png) ![](/images/Button_right.svg)
![](/images/TechDraw_ExampleDrawing-16.png)

Po lewej: Wymiary sfazowania zastosowane do obiektu z poziomymi i pionowymi bokami → Środek: Ten sam widok obrócony o 10° → Po prawej: Obiekt przechylony o 10°, widok pod kątem 0.

Narzędzia do sfazowania działają dobrze w przypadku obiektów o poziomych i pionowych bokach, o ile są one równoległe do osi X i Y widoku = strony, ale wiele części nie zrobi nam przysługi, aby były idealnie wyrównane.

Wartości kąta nie są parametryczne! Nie zmieniają się, gdy widok jest przechylony. Ostatnia strona pokazuje prawidłowe kąty, ale wymiary ustawione w ten sposób nie mają sensu.

Aby wyrównać wymiar sfazowania wzdłuż krawędzi, potrzebujemy punktu pomocniczego _(kosmetycznego)_, w którym spotykałyby się niefazowane krawędzie i musimy użyć ![](/images/TechDraw_LengthDimension.svg) [Wymiar długości](/TechDraw_LengthDimension/pl "TechDraw LengthDimension/pl"). Ale punkt kosmetyczny nie będzie podążał za krawędziami, jeśli widok jest przechylony. _(zobacz także akapit [Wymiar długości](#Wymiar_długości))_.

#### Wymiar promienia

![](/images/TechDraw_RadiusDimension.svg) [Wstaw wymiar promienia](/TechDraw_RadiusDimension/pl "TechDraw RadiusDimension/pl"): dodaje wymiar promienia do okręgu lub łuku.

![](/images/TechDraw_ExampleDrawing-20.png)

Dwa sposoby dodania wymiaru promienia, czerwony z odwróconymi grotami strzałek.

Aby zmienić kierunek strzałek, wystarczy ustawić wartość właściwości WIDOK**Odwróć groty** na `Prawda`.

#### Wymiar średnicy

Wymiary średnicy można dodać jako ![](/images/TechDraw_DiameterDimension.svg) [Wymiar średnicy](/TechDraw_DiameterDimension/pl "TechDraw DiameterDimension/pl") lub jeden z wymiarów długości ![](/images/TechDraw_LengthDimension.svg) [Wymiar długości](/TechDraw_LengthDimension/pl "TechDraw LengthDimension/pl"), ![](/images/TechDraw_HorizontalDimension.svg) [Wymiar poziomy](/TechDraw_HorizontalDimension/pl "TechDraw HorizontalDimension/pl"), oraz ![](/images/TechDraw_VerticalDimension.svg) [Wymiar pionowy](/TechDraw_VerticalDimension/pl "TechDraw VerticalDimension/pl") _(lub w połączeniu z linią odniesienia wskazującą na środek okręgu lub linię środkową - niewyświetlane)_.

![](/images/TechDraw_ExampleDrawing-12.png)

Kilka sposobów umieszczenia wymiaru średnicy _(zignoruj brakującą linię środkową)_.

- Niebieski: ![](/images/TechDraw_VerticalDimension.svg) wymiar długości w widoku bocznym otworu wymaga przedrostka "⌀", aby odróżnić go od prostokątnego otworu.

: ![](/images/TechDraw_ExtensionInsertDiameter.svg) [Dodaj przedrostek "⌀"](/TechDraw_ExtensionInsertDiameter/pl "TechDraw ExtensionInsertDiameter/pl") jest łatwym sposobem na wykonanie tego, ale właściwość DANE**Specyfikator formatu** może być również edytowana ręcznie.

- Zielony: zwykły ![](/images/TechDraw_VerticalDimension.svg) wymiar długości.

: Wymaga pewnej geometrii pomocniczej _(punkty kosmetyczne)_, ponieważ nie można go zastosować bezpośrednio do okręgów.

- Czerwony: ![](/images/TechDraw_DiameterDimension.svg) wymiar średnicy. Jeśli spojrzysz wzdłuż osi otworu i zobaczysz okrągły kształt otworu, "⌀" może zostać pominięte. Aby go usunąć, należy ręcznie edytować właściwość DANE**Specyfikator formatu**.

#### Wymiar gwintu

Wymiary gwintu mogą być stosowane tak samo jak wymiary średnicy, ale wymagają pewnej pomocniczej geometrii utworzonej wcześniej: ![](/images/TechDraw_ExtensionThreadHoleSide.svg) [Geometria pomocnicza dla otworu gwintowanego, widok z boku](/TechDraw_ExtensionThreadHoleSide/pl "TechDraw ExtensionThreadHoleSide/pl"), ![](/images/TechDraw_ExtensionThreadHoleBottom.svg) [Geometria pomocnicza dla otworu gwintowanego, widok od dołu](/TechDraw_ExtensionThreadHoleBottom/pl "TechDraw ExtensionThreadHoleBottom/pl"), ![](/images/TechDraw_ExtensionThreadBoltSide.svg) [Geometria pomocnicza dla gwintu śruby, widok z boku](/TechDraw_ExtensionThreadBoltSide/pl "TechDraw ExtensionThreadBoltSide/pl"), lub ![](/images/TechDraw_ExtensionThreadBoltBottom.svg) [Geometria pomocnicza dla gwintu śruby, widok od dołu](/TechDraw_ExtensionThreadBoltBottom/pl "TechDraw ExtensionThreadBoltBottom/pl").

![](/images/TechDraw_ExampleDrawing-13.png)

Gwint stożkowy z kilkoma sposobami umieszczenia wymiaru gwintu _(i średnicy stożka)_

Wszystkie wymiary gwintów są stosowane do linii pomocniczych _(kosmetycznych)_ lub okręgów _(w połączeniu z punktami kosmetycznymi)_, a wszystkie właściwości DANE**Specyfikator formatu** muszą być edytowane ręcznie, aby poprzedzić "M" dla gwintów metrycznych.

#### Tolerancja

Tolerancje określają, jak bardzo zmierzony wymiar może odbiegać od wartości wymiaru na rysunku. Aby dodać wartości tolerancji do wartości wymiaru, wystarczy ustawić właściwość DANE**Powyżej tolerancji** na wartość inną niż `0`, co skutkuje symetryczną tolerancją, taką jak `±0,5`.

Dla asymetrycznej tolerancji ustaw wartość właściwość DANE**Tolerancja symetryczna** na `Fałsz` i określ niższą wartość dla właściwości DANE**Poniżej tolerancji**.

Wartości można ustawić w [okienku dialogowym](/TechDraw_LengthDimension/pl#Okno_dialogowe "TechDraw LengthDimension/pl") lub bezpośrednio w [Edytorze właściwości](/Property_editor/pl "Property editor/pl").

#### Pasowanie otwór / wał

Tolerancje pasowania mogą być dodawane poprzez dodanie klas tolerancji do wymiaru. Klasa tolerancji składa się ze specyfikatora pola tolerancji _(duża litera dla otworów, mała litera dla wałków)_ i specyfikatora klasy tolerancji _(liczba)_ i może być dodana na trzy sposoby:

1. Ustaw wartość właściwości DANE**Tolerancja dowolna** na `true` i określ obie klasy tolerancji we właściwościach DANE**Powyżej tolerancji** i DANE**Poniżej tolerancji**.
2. Użyj narzędzia ![](/images/TechDraw_HoleShaftFit.svg) [Dodaj pasowanie otworu / wału](/TechDraw_HoleShaftFit/pl "TechDraw HoleShaftFit/pl"). Ten sufiks dodaje tylko jedną klasę tolerancji, ale dodaje powiązane wartości do właściwości DANE**Powyżej tolerancji** i DANE**Poniżej tolerancji**.
3. W przypadku pojedynczej tolerancji wystarczy dodać klasę tolerancji do specyfikatora formatu we właściwości DANE**Specyfikator formatu**.

#### Pasowanie gwintu

Tolerancje pasowania gwintu mogą być opatrzone przyrostkiem, jak opisano powyżej dla tolerancji pasowania otworu / wału, z wyjątkiem metody 2. Klasy tolerancji gwintu wyświetlają specyfikator stopnia tolerancji _(liczbę)_ przed specyfikatorem pola tolerancji _(wielką literę dla gwintów wewnętrznych, małą literę dla gwintów zewnętrznych)_.

### Wymiary kontrolne

Wymiary kontrolne (wymiary testowe) nie zostały jeszcze zaimplementowane.
_(Może już przestarzałe. Zobacz temat [...wymiar testowy został wycofany...](https://forum.freecad.org/viewtopic.php?p=691914#p691914) na forum)_

Aby uzyskać pozorny wymiar kontrolny, ustawiamy właściwość DANE**Specyfikator formatu** na " " _(jedna spacja - nie ma żadnego znaku i nie mielibyśmy żadnego uchwytu do chwycenia linii wymiaru, aby ją przesunąć)_, a następnie ustawiamy wartość właściwości DANE**Dowolny** na `PRAWDA`; skutkuje to wymiarem bez wartości. Wartość można teraz zastąpić dymkiem bez linii odniesienia. Działa to tylko w przypadku wymiarów poziomych, ponieważ nie możemy obracać dymków.

![](/images/TechDraw_ExampleDrawing-21.png)

Przykładowy element z wymiarem kontrolnym. W tym przypadku 100% elementów produkcyjnych musi zostać sprawdzonych, czy mieszczą się w tolerancji.

### Wymiarowanie geometrii i tolerancja

System [Wymiarowanie geometrii i tolerancja](/TechDraw_Geometric_dimensioning_and_tolerancing/pl "TechDraw Geometric dimensioning and tolerancing/pl") _(GD&T)_ ma na celu opisanie kształtów dokładniej niż mogą to zrobić same wymiary tolerowane. Opiera się na punktach odniesienia, teoretycznie dokładnych wymiarach i wskaźnikach tolerancji.

#### Odniesienia

Odniesienia to wirtualne powierzchnie, płaszczyzny, linie i punkty używane jako odniesienia do opisywania cech geometrycznych z teoretycznie dokładnymi wymiarami i wskaźnikami tolerancji. Można ich użyć do zbudowania teoretycznie dokładnego wirtualnego układu współrzędnych.

#### Cecha odniesienia

Cecha odniesienia jest cechą geometryczną obiektu odpowiadającą pewnemu układowi odniesienia. Symbole punktów odniesienia są dodawane za pomocą ![](/images/TechDraw_Balloon.svg) [dymków](/TechDraw_Balloon/pl "TechDraw Balloon/pl") adnotacji.

![](/images/TechDraw_ExampleDrawing-22.png)

Przykładowy element z cechami odniesienia. Oba widoki wyświetlają dokładnie te same elementy odniesienia

Wartość właściwości DANE**Długość załamania** musi być ustawiona na `0` dla pionowych linii odniesienia. W wersja 0.21 i poniżej skutkuje to wyświetleniem fragmentu linii w ramce.

![](/images/TechDraw_ExampleDrawing-27.png)

Teraz linia odniesienia zaczyna się na ramce, co jest idealne dla poziomych linii odniesienia, ale teraz niemożliwe jest prawidłowe narysowanie pionowych linii odniesienia

#### Cel odniesienia

Punkty odniesienia to punkty lub stosunkowo małe obszary, które wskazują miejsce, z którego należy wyprowadzić układ odniesienia. Najczęstszym zastosowaniem jest tworzenie teoretycznie dokładnego wirtualnego układu współrzędnych z zestawu sześciu punktów odniesienia.

![](/images/TechDraw_ExampleDrawing-23.png)

Ten rodzaj docelowego układu odniesienia nie został jeszcze zaimplementowany

Obecnie nie jest znane żadne obejście tego problemu.

: Specjalne symbole punktów wskazujące punkt odniesienia celu układu odniesienia nie są jeszcze uwzględnione w opcjach linii odniesienia.
: Okręgi muszą pochodzić z geometrii 3D i są trudne w obsłudze w grupach rzutowania.

#### Wymiary teoretycznie dokładne

Teoretycznie dokładne wymiary są dodawane w taki sam sposób jak [Wymiary podstawowe](#Wymiary_podstawowe), a różnicę zapewnia pole wyboru Teoretycznie dokładne: Ustawia ono wartość właściwości DANE**W teorii dokładnie** na `Prawda`, która dodaje prostokątną ramkę do wartości wymiaru i dezaktywuje tolerancje oraz wszystkie ustawienia tolerancji.

### Wskaźnik tolerancji

Wskaźnik tolerancji, nazywany również "ramką kontrolną cech", to ramka zawierająca informacje o tolerancji dotyczące:

- wskazania która cecha geometryczna jest tolerowana,
- kształtu i rozmiaru pola tolerancji,
- układów odniesienia, do których należy się odnieść,
- dodatkowych symboli opisujących cechy jeszcze dokładniej.

![](/images/TechDraw_ExampleDrawing-24.png)

Teoretycznie dokładne wymiary _(czerwony)_ i wskaźniki tolerancji w odniesieniu do elementu odniesienia A _(niebieski)_.

Wskaźniki tolerancji są jak symbole punktów odniesienia dodane przy użyciu adnotacji ![](/images/TechDraw_Balloon.svg) [w dymkach](/TechDraw_Balloon/pl "TechDraw Balloon/pl"), ale przy użyciu opcji `Prostokąt`. Użyj narzędzia ![](/images/TechDraw_ExtensionCustomizeFormat.svg) [Dostosuj format etykiety](/TechDraw_ExtensionCustomizeFormat/pl "TechDraw ExtensionCustomizeFormat/pl"), aby wstawić znaki specjalne.

W większości przypadków wskaźniki tolerancji są wyrównane z linią wymiarową, co jest niemożliwe do zrealizowania w środowisku Rysunek Techniczny, z wyjątkiem wymiarów poziomych, ponieważ, jak już wspomniano, adnotacje w dymkach nie mogą być obracane.

[Przewiń na górę strony](#top)

## Adnotacje

### Linia odniesienia

![](/images/TechDraw_LeaderLine.svg) [Linia odniesienia](/TechDraw_LeaderLine/pl "TechDraw LeaderLine/pl") wskazuje na wierzchołek, krawędź lub ścianę, gdzie znajdują się dołączone informacje.

: Narzędzia, które dostarczają informacji i dołączają do wstępnie wybranej linii odniesienia to ![](/images/TechDraw_RichTextAnnotation.svg) [Opis z tekstem sformatowanym](/TechDraw_RichTextAnnotation/pl "TechDraw RichTextAnnotation/pl"), oraz ![](/images/TechDraw_WeldSymbol.svg) [Symbol spawalniczy](/TechDraw_WeldSymbol/pl "TechDraw WeldSymbol/pl").

### Dymki

![](/images/TechDraw_Balloon.svg) [Dymek](/TechDraw_Balloon/pl "TechDraw Balloon/pl") to połączenie linii odniesienia i krótkiego tekstu. Wymaga wstępnie wybranego widoku lub elementu należącego do widoku, w przeciwnym razie polecenie zwróci komunikat o błędzie. Linia odniesienia bez wyjątku zaczyna się poziomo i skręca w kierunku wybranego elementu po krótkiej odległości zdefiniowanej we właściwości DANE**Długość zagięcia**. Jej wartość może być również ustawiona na `0`.

### Tekst

Rysunek Techniczny udostępnia dwa narzędzia do dodawania tekstu do rysunku:

- ![](/images/TechDraw_Annotation.svg) [Wstaw adnotację](/TechDraw_Annotation/pl "TechDraw Annotation/pl") dodaje zwykły blok tekstu jako adnotację do strony. Adnotacje używają tych samych domyślnych ustawień co wymiary, niektóre parametry mogą być zmieniane, mogą być edytowane i obracane, ale nie mogą być dołączane.
- ![](/images/TechDraw_RichTextAnnotation.svg) [Wstaw adnotację w postaci tekstu sformatowanego](/TechDraw_RichTextAnnotation/pl "TechDraw RichTextAnnotation/pl") dodaje blok tekstu sformatowanego jako adnotację do strony, linii odniesienia lub widoku. Adnotacje dołączone do linii odniesienia lub widoku przesuwają się synchronicznie z widokiem lub linią odniesienia, gdy zmienia się ich położenie.

### Symbol spawakniczy

![](/images/TechDraw_WeldSymbol.svg) [Symbol spawalniczy](/TechDraw_WeldSymbol/pl "TechDraw WeldSymbol/pl") dołącza się do wstępnie wybranej linii odniesienia i dodaje informacje o tym, jak utworzyć określony spaw między dwoma obiektami, aby uniknąć modelowania powierzchni szwu na surowych częściach. Tekst rozwidlenia określa, który proces spawania lub lutowania ma być użyty dla szwu.

: Wygląda na to, że symbole spoin wymagają zintegrowanej linii odniesienia, aby uzyskać symbol rozwidlenia pasujący do rozmiaru tekstu, w przeciwnym razie symbole na linii odniesienia muszą być skalowalne.

![](/images/TechDraw_ExampleDrawing-26.png)

Symbol spoiny dla obwodowego szwu V, 111 oznaczający ręczne spawanie łukowe - Nie bij mnie, jeśli źle zacytowałem zasoby internetu.

### Symbole wykończenia powierzchni

![](/images/TechDraw_SurfaceFinishSymbols.svg) [Dodaj symbol wykończenia powierzchni](/TechDraw_SurfaceFinishSymbols/pl "TechDraw SurfaceFinishSymbols/pl") dodaje symbol wykończenia powierzchni do strony, co oznacza, że symbole te nie poruszają się wraz z geometrią, do której się odnoszą.

![](/images/TechDraw_ExampleDrawing-25.png)

Symbol wykończenia powierzchni w zestawieniu z wymiarem

Symbole te nie mogą być dostosowywane pod względem szerokości linii i typu czcionki, aby pasowały do wymiarów i trudno je edytować po utworzeniu.

[Przewiń na górę strony](#top)

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_General_Examples/pl&oldid=1485823>"
