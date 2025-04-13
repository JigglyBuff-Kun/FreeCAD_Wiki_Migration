---
title: Architektura Ściana
---
:::caution
POLECENIE TO JEST CZĘŚCIĄ ZINTEGROWANEGO środowiska pracyBIMw V1.0Ta strona została zaktualizowana dla tej wersji.
:::

|  |
| --- |
| Architektura: Ściana |
| Lokalizacja w menu |
| 3D / BIM → Ściana |
| Środowisko pracy |
| [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| W A |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie **Ściana** tworzy obiekt Ściany od podstaw lub na bazie dowolnego innego obiektu opartego na [kształcie](/Part_Workbench/pl "Part Workbench/pl") lub [siatce](/Mesh_Workbench/pl "Mesh Workbench/pl"). Ściana może być budowana bez żadnego obiektu bazowego, wtedy zachowuje się jak objętość sześcianu, korzystając z właściwości długości, szerokości i wysokości. Gdy budowana jest na istniejącym kształcie, ściana może być oparta na:

* Obiekt **liniowy 2D**, taki jak linie, krawędzie, łuki lub szkice, w którym możesz zmienić grubość, wyrównanie *(prawo, lewo lub wyśrodkowane)* i wysokość. Właściwość długości nie ma wpływu.
* Płaska **powierzchnia**, w której możesz zmieniać tylko wysokość. Właściwości długości i szerokości nie mają wpływu. Jeśli płaszczyzna bazowa jest pionowa, ściana użyje właściwości szerokości zamiast wysokości, pozwalając na budowę ścian z obiektów przypominających przestrzeń lub studia masy.
* **Bryła**, w której właściwości długości, szerokości i wysokości nie mają wpływu. Ściana po prostu używa podstawowej bryły jako swojego kształtu.
* **Siatka**, w której podstawowa siatka musi być zamkniętą, trójwymiarową bryłą.

![](/images/Arch_Wall_example.jpg)

Ściany zbudowane z linii, polilinii, ściany, bryły i szkicu.

Ściany mogą także mieć obiekty dodawane lub odejmowane. Obiekty dodawane to inne obiekty, których kształty są łączone w kształt tej ściany, podczas gdy odejmowane stanowią ubytki. Dodatki i odejmowania mogą być obsługiwane za pomocą narzędzi [Dodaj](/Arch_Add/pl "Arch Add/pl") i [Arch Remove](/Arch_Remove/pl "Arch Remove/pl"). Dodatki i odejmowania nie mają wpływu na parametry ściany, takie jak wysokość i szerokość, które nadal można zmieniać. Ściany mogą także mieć automatyczną wysokość, jeśli są one zawarte w obiekcie wyższego poziomu, takim jak [piętra](/Arch_Floor/pl "Arch Floor/pl"). Wysokość musi być ustawiona na 0, wtedy ściana przyjmie wysokość określoną w obiekcie nadrzędnym.

Kiedy kilka ścian powinno się przecinać, musisz umieścić je w [podłodze](/Arch_Floor/pl "Arch Floor/pl"), aby ich geometria się przecinała.

## Użycie

### Kreślenie ścian od podstaw

1. Jest kilka sposobów wywołania tego narzędzia:
   * Wciśnij przycisk ![](/images/Arch_Wall.svg) Ściana.
   * Wybierz opcję **3D/BIM → ![](/images/Arch_Wall.svg) Ściana** z menu.
   * Użyj skrótu klawiszowego: W a następnie A.
2. Kliknij pierwszy punkt w widoku 3D lub wprowadź współrzędne.
3. Kliknij drugi punkt w widoku 3D lub wprowadź współrzędne.

### Kreślenie ściany na wybranym obiekcie

1. Wybierz jeden lub więcej obiektów bazowej geometrii (obiekt środowiska Rysunek Roboczy, szkic itd.).
2. Wywołaj narzędzie jak opisano powyżej.
3. Dostosuj właściwości takie jak wysokość lub szerokość.

## Opcje

* Wysokość, szerokość i wyrównanie ściany można ustawić podczas rysowania, za pomocą panelu zadań.
* Przyciągając ścianę do istniejącej ściany, obie ściany zostaną połączone w jedną. Sposób, w jaki są one łączone, zależy od ich właściwości: Jeśli mają one taką samą szerokość, wysokość i wyrównanie, oraz jeśli opcja "Połącz szkice bazowe ścian, jeśli to możliwe" jest włączona w preferencjach Architektury, rezultatem będzie jedna ściana oparta na szkicu złożonym z kilku segmentów. W przeciwnym razie, ta druga ściana zostanie dodana do pierwszej jako obiekt dodany.
* Naciśnij X, Y lub Z po pierwszym punkcie, aby ograniczyć drugi punkt do wybranej osi.
* Aby wprowadzić współrzędne ręcznie, po prostu wpisz liczby, a następnie naciśnij Enter między każdą składową X, Y i Z.
* Naciśnij R lub kliknij pole wyboru, aby zaznaczyć / odznaczyć pole **Względnie**. Jeśli tryb relatywny jest włączony, współrzędne drugiego punktu są względne względem pierwszego. Jeśli nie, są one bezwzględne, pobrane z punktu odniesienia położenia (0,0,0).
* Naciśnij Shift podczas rysowania, aby [ograniczyć](/Draft_Constrain/pl "Draft Constrain/pl") drugi punkt poziomo lub pionowo w stosunku do pierwszego.
* Naciśnij Esc lub przycisk Anuluj, aby przerwać bieżące polecenie.
* Podwójne kliknięcie na ścianie w widoku drzewa po jej utworzeniu pozwala wejść w tryb edycji i uzyskać dostęp i modyfikować jej obiekty dołączone i odejmowane.
* Wielowarstwowe ściany można łatwo tworzyć, budując kilka ścian z tego samego punktu odniesienia. Ustawiając ich właściwość Wyrównanie na lewo lub prawo oraz określając wartość Odsunięcie, można efektywnie skonstruować kilka warstw ściany. Umieszczenie okna w takiej warstwie ściany spowoduje rozprzestrzenienie się otworu na inne warstwy ściany w oparciu o tę samą linię bazową.
* Ściany mogą również korzystać z [Wielomateriałowej struktury](/Arch_MultiMaterial/pl "Arch MultiMaterial/pl"). Korzystając z wielu materiałów, ściana stanie się wielowarstwowa, korzystając z grubości określonych przez wiele materiałów. Każda warstwa o grubości zerowej będzie miała swoją grubość automatycznie określoną przez pozostałe miejsce określone przez Wartość Szerokość ściany, po odjęciu innych warstw.
* Ściany mogą wyświetlać bloki zamiast pojedynczej bryły, przez włączenie ich właściwości DANE**Utwórz bloki**. Rozmiar i przesunięcie bloków można skonfigurować za pomocą różnych właściwości, a liczba bloków jest automatycznie obliczana.

## Przyciąganie

1. Wybierz jeden lub więcej obiektów geometrii bazowej *(szkic obiektu, szkic itp.)*.
2. Naciśnij przycisk ![](/images/Arch_Wall.svg) **Ściana** lub naciśnij klawisze W, a następnie A.
3. Dostosuj potrzebne właściwości, takie jak wysokość lub szerokość.

![](/images/Arch_wall_snap.jpg)

Druga ściana przylegająca prostopadle do pierwszej.

## Właściwości

* Ściany dzielą wspólne właściwości i zachowania wszystkich [Komponentów Architektonicznych](/Arch_Component/pl "Arch Component/pl").

### Dane

Blok

* DANE**Wysokość Bloku**: Wysokość każdego bloku.
* DANE**Długość Bloku**: Długość każdego bloku.
* DANE**Liczba Zniszczonych**: Liczba zniszczonych bloków *(tylko do odczytu)*.
* DANE**Liczba Wystąpień**: Liczba wszystkich bloków *(tylko do odczytu)*.
* DANE**Połączenie**: Rozmiar spoiny, pusta przestrzeń między blokami.
* DANE**Twórz Bloki**: Włącza generowanie bloków.
* DANE**Odsunięcie Pierwszego**: Poziome przesunięcie pierwszej i każdej nieparzystej linii bloków.
* DANE**Odsunięcie Drugiego**: Poziome przesunięcie drugiej i każdej parzystej linii bloków.

Komponent

Zobacz również: [Komponent](/Arch_Component/pl#Właściwości "Arch Component/pl").

IFC

Zobacz również: [Komponent](/Arch_Component/pl#Właściwości "Arch Component/pl").

Atrybuty IFC

Zobacz również: [Komponent](/Arch_Component/pl#Właściwości "Arch Component/pl").

Ściana

:   ![](/images/Sketch_vs_Wall.jpg)

* DANE**Wyrównanie**: Wyrównanie ściany na jej linii/liniach bazowych: Lewo, Prawo lub Środek. W trybach Lewo i Prawo strona, po której ściana jest tworzona zależy od kierunku każdej pojedynczej linii bazowej. Innymi słowy, kierunek pojedynczych krawędzi obiektu bazowego (szkicu/szkicu architektury) jest brany pod uwagę, dając większą kontrolę nad każdym segmentem ściany. Zobacz schemat powyżej aby poznać więcej szczegółów. Łuki w szkicach są zawsze przeciwne do ruchu wskazówek zegara. Gdy zakrzywiony segment ściany jest wyrównany w lewo, wewnętrzna krawędź segmentu pokrywa się z łukiem w szkicu. Zobacz również **Nadpisywanie krawędzi**.
* DANE**Powierzchnia**: Powierzchnia całej ściany, podział na bloki nie ma znaczenia *(tylko do odczytu)*.
* DANE**Powierzchnia**: Powierzchnia całej ściany, podział na bloki nie ma znaczenia *(tylko do odczytu)*.
* DANE**Ściana**: Indeks ściany z obiektu bazowego do użycia. Jeśli wartość nie jest ustawiona lub wynosi 0, używany jest cały obiekt.
* DANE**Wysokość**: Wysokość ściany. Ignorowane, jeśli ściana oparta jest na bryle. Jeśli ustawiono na zero, a ściana znajduje się wewnątrz obiektu [Piętro](/Arch_Floor/pl "Arch Floor/pl") z zdefiniowaną wysokością, ściana automatycznie przyjmie wartość wysokości piętra.
* DANE**Długość**: Długość ściany. Wartość może być edytowana jeśli ściana jest oparta na niezwiązanym szkicu z pojedynczą krawędzią lub na [polilinii](/Draft_Wire/pl "Draft Wire/pl") z pojedynczą krawędzią, w innym wypadku wartość jest tylko do odczytu. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl") Wartość w przypadku właściwości będącej tylko do odczytu jest dokładniejsza. Jest oparta na medium ściany jeśli segmenty mają różne właściwości DANE**Szerokość**, DANE**Wyrównanie** i/lub DANE**Odsunięcie**. Zauważ, że nadal mogą występować niedokładności jeśli ściana jest skomplikowana, np. ma przecięcia w kształcie litery T lub samoprzecięcia. W takich przypadkach zalecane jest użycie zamiast tego właściwości DANE**Obszar poziomy** do dalszych obliczeń.
* DANE**Normalna**: Kierunek wyciągania dla ściany. Jeśli ustawiono na (0,0,0), kierunek wyciągania jest automatyczny.
* DANE**Odsunięcie**: Odległość między ścianą a jej linią bazową. Działa tylko, jeśli właściwość **Wyrównanie** jest ustawiona na Prawo lub Lewo. Kierunek pojedynczych krawędzi obiektu bazowego (szkicu/szkicu architektury) jest brany pod uwagę, dając większą kontrolę nad każdym segmentem ściany. Zobacz również **Zastąp Odsunięcie**.
* DANE**Nadpisywanie krawędzi**: *([dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"))* Wprowadzane są numery indeksowe krawędzi geometrii Bazowego obiektu ArchSketch / Szkic *(w trybie Edycji)*. Wybrane krawędzie są używane do tworzenia kształtu tej ściany kurtynowej architektury (zamiast domyślnego używania wszystkich krawędzi). Ignorowane, jeśli Bazowy szkic dostarczył wybrane krawędzie. AKTUALIZACJA przez ArchSketch: Narzędzie GUI "Edytuj ścianę kurtynową" jest dostępne w zewnętrznym ![](/images/SketchArch_Workbench.svg) [dodatku SketchArch](https://github.com/paullee0/FreeCAD_SketchArch), aby umożliwić użytkownikom interaktywny wybór krawędzi. "Toponaming-Tolerant", jeśli ArchSketch jest używany jako baza *(i zainstalowany jest dodatek SketchArch)*. Ostrzeżenie: Nie jest 'Toponaming-Tolerant', jeśli używany jest tylko Szkic. *(Zobacz wątek na forum - <https://forum.freecad.org/viewtopic.php?t=73018&start=40#p756554>)*
* DANE**Nadpisz szerokość**: Nadpisuje właściwość **Szerokość** i pozwala na ustawienie innej szerokości dla każdego segmentu ściany. Dane wejściowe to lista wartości numerycznych (bez jednostek), po jednej dla każdego segmentu ściany. Jeśli wartość na liście wynosi 0, odpowiedni segment używa wartości właściwości **Szerokość**, efektywnie usuwając nadpisanie dla danego segmentu. Właściwość ta jest ignorowana, jeśli obiekt bazowy ściany dostarcza informacje o szerokościach za pomocą metody `getWidths()` (na przykład szkice utworzone w zewnętrznym środowisku pracy ![](/images/SketchArch_Workbench.svg) [SketchArch](https://github.com/paullee0/FreeCAD_SketchArch)). Ten dodatek zapewnia również dodatkowe usprawnienia: graficzne narzędzie *Edytuj Szerokość Segmentu Ściany*, umożliwiające interaktywne ustawianie wartości szerokości, oraz tolerancję na zmiany nazw topologicznych, jeśli obiekt ArchSketch jest używany jako obiekt bazowy ściany (i jeśli dodatek jest zainstalowany).
* DANE**Zastąp Odsunięcie**: ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")) Parametr ten zastępuje atrybut **Odsunięcie** w celu ustawienia odsunięcia każdego segmentu ściany. Ignorowane, jeśli obiekt Bazowy dostarcza informacji o przesunięciach za pomocą metody getOffsets() (jeśli wartość wynosi zero, zostanie zastosowana wartość "Offset"). AKTUALIZACJA przez ArchSketch: Narzędzie GUI "Edytuj przesunięcie segmentu ściany" jest dostępne w zewnętrznym dodatku![](/images/SketchArch_Workbench.svg) [SketchArch](https://github.com/paullee0/FreeCAD_SketchArch), aby umożliwić użytkownikom interaktywny wybór krawędzi. "Toponaming-Tolerant", jeśli ArchSketch jest używany jako Baza *(i zainstalowany jest dodatek SketchArch)*. Ostrzeżenie: Nie jest "Toponaming-Tolerant", jeśli używany jest tylko Szkic. Właściwość jest ignorowana, jeśli Base ArchSketch dostarczył wybrane krawędzie.
* DANE**Szerokość**: Szerokość ściany. Ignorowana jeśli ściana jest oparta o powierzchnię lub bryłę. Zobacz również **Nadpisz Szerokość**.

## Tworzenie skryptów

*Zobacz również:* [API: Architektura](/Arch_API/pl "Arch API/pl") i [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Ściana** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następujących funkcji:

```
Wall = makeWall(baseobj=None, length=None, width=None, height=None, align="Center", face=None, name="Wall")

```

* Tworzy obiekt `Wall` na podstawie podanego obiektu `baseobj`, który może być obiektem środowiska pracy [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl"), ścianą lub bryłą.
  + Jeśli nie podano `baseobj`, można podać numeryczne wartości dla `length`, `width` *(grubości)* i `height`.
  + Jeśli podano, `face` może być używane do podania indeksu twarzy z podstawowego obiektu, na którym ma być zbudowana ta ściana, zamiast używania całego obiektu.
* `wyrównanie` może mieć wartość `"Center"`, `"Left"` lub `"Right"`.
* Zwraca `None`, jeśli operacja się nie powiedzie.

Przykład:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
Wall1 = Arch.makeWall(baseline, length=None, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

Wall2 = Arch.makeWall(None, length=2000, width=200, height=1000)
Draft.move(Wall2, FreeCAD.Vector(0, -1000, 0))
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Wall/pl&oldid=1549137>"