---
title: Informacje o wydaniu 0.13
---

To jest podsumowanie najciekawszych zmian, które zaszły w FreeCAD od ostatniej wersji. Zobacz [Mantis changelog](http://www.freecadweb.org/tracker/changelog_page.php) na SourceForge, aby uzyskać pełną listę zmian.

Starsze wersje: [0.12](/Release_notes_0.12/pl "Release notes 0.12/pl") - [0.11](/Release_notes_0.11/pl "Release notes 0.11/pl")

![](/images/FreeCAD013.jpg)

_wymodelowany w FreeCAD przez psicofil_

## Ogólne

- **Preferencje kolorystyczne**: Znudził Ci się stary, dobry, szary kształt na czarnych liniach FreeCAD? Teraz można go zmienić w preferencjach użytkownika _(Wyświetlanie → Kolor)_, wraz z kilkoma innymi domyślnymi kolorami.
- **Wyrównanie**: dwa kształty mogą być wyrównane względem siebie w maksymalnie trzech punktach za pomocą tego narzędzia dostępnego w menu Edycja.

## Moduł Kreślenie

- **Funkcja wycinków**: Nowy obiekt [Wycinek](/Drawing_Clip/pl "Drawing Clip/pl") umożliwia umieszczanie widoków obiektów wewnątrz przyciętych prostokątów na stronach Rysunku.
- **Edytowalne bloki tytułowe**: Podczas projektowania Szablonów rysunków można teraz oznaczać teksty jako edytowalne. Teksty te można następnie edytować bezpośrednio w programie FreeCAD.
- **Funkcja adnotacji**: Nowy obiekt [Adnotacja rysunku](/Drawing_Annotation/pl "Drawing Annotation/pl"), prosta funkcja szybkiego umieszczania bloków tekstowych na stronie rysunku.
- **Widoki ortogonalne**: Nowe narzędzie [Rysowanie widoków ortograficznych](/Drawing_Orthoviews/pl "Drawing Orthoviews/pl") ułatwia tworzenie wielu widoków wyrównanych względem siebie, zgodnie z rzutem pierwszego lub trzeciego kąta.
- **Podgląd w przeglądarce**: Ponieważ wszystkie możliwości SVG nie zawsze są obsługiwane przez wewnętrzną przeglądarkę Qt SVG, przycisk ten pozwala sprawdzić, jak strona wygląda w przeglądarce Webkit, która w pełni obsługuje format SVG. Jest to rozwiązanie tymczasowe, dopóki nie przestawimy naszej przeglądarki SVG na Webkit ...
- **Eksport DXF**: można teraz eksportować widok strony bezpośrednio do pliku DXF.
- Niektóre poprawki błędów umożliwiają teraz drukowanie stron w skali.

## Moduł Szkicownika

- **Tworzenie punktów**

![](/images/Release-0.13-PointTool.png)

Punkty mogą być teraz dodawane i używane jako elementy szkicu.

- **Odniesienie położenia szkicu**

![](/images/Release-0.13-Origin.png)

Użytkownik może teraz używać punktu odniesienia położenia szkicu do definiowania geometrii, a także osi szkicu.

- **Wiązania styczności i prostopadłości dla łuków i okręgów**.
- **Wiązania w odniesieniu do zewnętrznej _(rzutowanej)_ geometrii.**
- **Ulepszone liczenie stopni swobody szkicu.**
- **Wiązanie symetrii względem punktu symetrii** _(wiązanie punktu środkowego)_.

- **Ulepszona etykieta układu odniesienia i wizualizacje wiązań:**

![](/images/Release-0.13-SketcherDimensions.png)

- - Każda etykieta wiązania _(w tym strzałki)_ będzie poprawnie skalowana automatycznie do rozmiaru sceny w rzutni 3D.
  - Tekst etykiety odniesienia dla odległości, odległości X, odległości Y i promienia można teraz dowolnie pozycjonować z większą kontrolą.
  - Niewielkie ulepszenia nakładających się ikon wiązań i poprawki stabilności działania.
  - Tekst etykiety układu odniesienia zostanie odwrócony, gdy widok zostanie zorientowany z przeciwnej strony.

- **W pełni związane szkice są teraz podświetlone:**

![Kolor szkicu zmienia się z białego na zielony, aby wskazać, że jest on w pełni związany. Te domyślne kolory można dostosować.](/images/Release-0.13-SketcherFullyConstrained.png)

- **Wybór zakresu gumowania:**

![](/images/Release-0.13-RubberBandSelection.png)

Geometria _(punkty, linie i krzywe)_ może zostać wybrana poprzez przeciągnięcie zaznaczenia na tło w celu utworzenia prostokątnego zaznaczenia.

- **Rozszerzona funkcjonalność narzędzia polilinii:** za pomocą klawisza m można przełączać się między trybem łuku i linii oraz między przejściami swobodnymi, stycznymi i prostopadłymi z poprzedniego segmentu.

- **Mapuj szkic na powierzchnię** to nowe narzędzie do mapowania _(lub ponownego mapowania)_ istniejącego szkicu na wybraną powierzchnię na bryle. Pozwala to na użycie tego szkicu dla funkcji takich jak Wyciągnięcie i Kieszeń.

- **Drobne usprawnienia:**
  - Podczas konstruowania geometrii obok kursora wyświetlana jest wskazówka narzędzia z powiązanymi informacjami.
  - **Widok szkicu**, który ustawia widok 3D prostopadle do płaszczyzny szkicu, ma teraz ikonę na pasku narzędzi Szkicownika.

## Moduł Rysunek Roboczy

- **Tryb zadań**: Tryb widoku zadań modułu Rysunek Roboczy jest teraz trybem domyślnym. Nie obawiaj się, jeśli podobał Ci się pasek narzędzi, jest on nadal dostępny w ustawieniach preferencji tego środowiska pracy.
- **Importer DXF**: Importer DXF obsługuje teraz punkty _(translacja na [punkt](/Draft_Point/pl "Draft Point/pl") środowiska pracy Kreślenie)_ i linie odniesienia _(translacja na [polilinie](/Draft_Wire/pl "Draft Wire/pl"))_.
- **Zupełnie nowy system przyciągania**: [System przyciągania](/Draft_Snap/pl "Draft Snap/pl") modułu Kreślenie został przepisany niemal od zera. Jest teraz znacznie łatwiejszy do rozszerzenia i użycia w innych skryptach i modułach, ma teraz nowe wizualizacje z ikonami kursora przyciągania i paskiem narzędzi, który pozwala włączać / wyłączać poszczególne lokalizacje przyciągania lub cały system przyciągania.

![](/images/013-draft-snap.jpg)

- **Lepsze wiązanie**: Podczas wprowadzania punktów 3D, oprócz istniejącego wiązania Shift, można teraz wiązać ruch w kierunku X, Y lub Z, naciskając klawisze X, Y lub Z. Ponowne ich naciśnięcie wyłącza ograniczanie.
- **Konwersja Rysunek Roboczy <-> Szkic**: Środowisko pracy Rysunek Roboczy zawiera teraz nowe narzędzie konwersji [Rysunek roboczy na szkic](/Draft_Draft2Sketch/pl "Draft Draft2Sketch/pl"), które konwertuje wybrane obiekty szkicu _(lub dowolny płaski kształt)_ na szkice i odwrotnie.
- **Narzędzie klonowania**: Tworzy kopie wybranych obiektów za pomocą tego poręcznego narzędzia. Gdy oryginał ulegnie zmianie, klon zostanie automatycznie zaktualizowany. Klon może być przesuwany, obracany, a także posiada właściwość skali, która pozwala na zmianę rozmiaru kopii.
- **Importer SVG**: Importer SVG ma teraz znacznie lepszą obsługę krzywych Béziera. Globalna definicja jednostek użytkownika jest teraz przestrzegana, a geometria jest prawidłowo skalowana do milimetra. Dodano obsługę nowych elementów, takich jak elipsy, zaokrąglone prostokąty. Parser został przerobiony i obsługuje teraz ścieżki z programu Adobe Illustrator.
- **Zakrzywione narożniki**: Kilka obiektów Rysunku Roboczego _([Polilinia](/Draft_Wire/pl "Draft Wire/pl"), [Prostokąt](/Draft_Rectangle/pl "Draft Rectangle/pl") i [Wielokąt](/Draft_Polygon/pl "Draft Polygon/pl"))_ ma teraz właściwość **Promień zaokrąglenia**, która zaokrągla ich narożniki o podaną wartość.

![](/images/013-draft-fillet.jpg)

- **Obiekt widoku 2D**: Nowe narzędzie [Widok 2D kształtu](/Draft_Shape2DView/pl "Draft Shape2DView/pl") pozwala na szybkie umieszczenie widoku 2D wybranego obiektu w dokumencie. Można określić wektor rzutowania.

![](/images/013-draft-shape2dview.jpg)

## Moduł Architektura

- **Integracja z Rysunkiem Roboczym**: Moduły Architektura i Rysunek Roboczy są teraz ściśle zintegrowane. Narzędzia Architektury używają systemu [przyciągania](/Draft_Snap/pl "Draft Snap/pl") środowiska Rysunek Roboczy, a wszystkie narzędzia Rysunku Roboczego są obecne w środowisku pracy Architektura. W rzeczywistości, jeśli chcesz, możesz teraz całkowicie wyłączyć moduł Rysunek Roboczy _(Preferencje -> Rysunek Roboczy -> Ukryj środowisko pracy Rysunek Roboczy)_.
- **Nowe narzędzie do rysowania ścian**: [narzędzie do rysowania ścian](/Arch_Wall/pl "Arch Wall/pl") zostało znacznie ulepszone i posiada teraz tryb rysowania bezpośredniego, który jest aktywowany po naciśnięciu przycisku Ściana bez zaznaczonego obiektu, co pozwala na rysowanie ścian tak, jak rysuje się proste linie. Dodatkowo, ściany są teraz automatycznie łączone po przyciągnięciu do istniejącej ściany.

![](/images/013-arch-wall.jpg)

- **Nowe narzędzie dachu**: Nowe narzędzie [Dach](/Arch_Roof/pl "Arch Roof/pl") jest teraz dostępne w module Architektura, które pozwala na szybkie tworzenie pochyłych dachów z wybranej ściany.
- **Nowe narzędzie okna**: [Okna](/Arch_Window/pl "Arch Window/pl") są teraz tworzone bezpośrednio na płaskim kształcie, który zawiera jeden lub więcej przewodów, takich jak prostokąt lub szkic. Jeśli ten kształt został narysowany bezpośrednio na ścianie, okno automatycznie wytnie otwór w ścianie.
- **Nowy system przekrojów**: Tworzenie planów 2D, przekrojów i elewacji z modelu jest teraz bardzo proste: Umieść obiekt [Płaszczyzna przekroju](/Arch_SectionPlane/pl "Arch SectionPlane/pl"), zorientuj go tak, jak chcesz, edytuj go, aby zawierał obiekty, które musi widzieć, i gotowe!
- **Nowy renderer brył**: Oprócz opartego na OpenCasCADe renderera szkieletowego 2D używanego obecnie przez [środowisko pracy Kreślenie](/Drawing_Workbench/pl "Drawing Workbench/pl"), moduł Architektura posiada teraz nowy renderer 2D, który jest w stanie renderować wypełnione powierzchnie do arkusza rysunku SVG, dając znacznie ładniejsze widoki 2D.

![](/images/013-arch-vrm.jpg)

- **Import IFC z [IfcOpenShell](http://www.ifcopenshell.org)**: Moduł Architektura może teraz korzystać z [IfcOpenShell](http://www.ifcopenshell.org), jeśli jest zainstalowany w systemie. Pozwala to na znacznie bardziej wydajny import IFC, a cała zawartość pliku IFC jest gwarantowana do zaimportowania.
- **Nowe obiekty pięter i budynków**: Budynki i piętra są teraz grupami, dzięki czemu można dodawać i usuwać z nich obiekty za pomocą prostego przeciągania i upuszczania z widoku drzewa.
- **Nowy układ osi**: Dodano nową funkcję [układ osi](/Arch_Axis/pl "Arch Axis/pl"), która pozwala na szybkie tworzenie złożonych układów osi. Osie te mogą być następnie dodawane do obiektów [Konstrukcji](/Arch_Structure/pl "Arch Structure/pl"), dzięki czemu rozłożą się automatycznie na węzłach siatki.

![](/images/013-arch-axes.jpg)

- **Obiekty Architektury z siatek**: [Ściany](/Arch_Wall/pl "Arch Wall/pl") i [Konstrukcja](/Arch_Structure/pl "Arch Structure/pl") mogą być teraz tworzone bezpośrednio z siatki, pod warunkiem, że jest ona zamknięta, bryłowa i wszystkie krawędzie są [typu manifold](http://doc.spatial.com/index.php/Manifold_and_Non-manifold_Objects). Pozwala to na bardzo szybkie przekształcenie geometrii zaimportowanej z innych aplikacji, takich jak [Blender](http://www.blender.org), w prawidłowe obiekty Architektoniczne.

## Moduł Część

- **Udoskonal kształt** to nowe narzędzie, które czyści powierzchnie po kilku operacjach na kształcie. Może być ustawione na automatyczne uruchamianie po operacjach logicznych w Preferencjach.
- **Nowe narzędzie Loft** umożliwia wyciągnięcie złożonego zestawu powierzchni lub bryły poprzez serię szkiców lub obiektów Draft.
- **Nowe narzędzie Sweep** umożliwia wyciągnięcie złożonego zestawu powierzchni lub bryły poprzez serię szkiców lub obiektów Draft i ścieżkę _(szkic, krawędź lub obiekt Rysunku Roboczego)_.
- **Nowe narzędzie Odsunięcie** umożliwia odsunięcie pojedynczej powierzchni lub kształtu.
- **Nowe narzędzie Grubość** może wydrążyć bryłę poprzez ustawienie grubości ścianki i otwarcie jednej lub więcej powierzchni.
- **Kreator kształtów** i **Tworzenie prymitywów** są teraz dostępne na pasku narzędzi części.

## Moduł Projekt Części

- **Wyciągnięcie** i **Kieszeń** są teraz bardziej wydajne dzięki większej liczbie parametrów, takich jak wyciągnięcie do pierwszego/ostatniego, do powierzchni, 2 wymiary, symetryczne do płaszczyzny.
- **Fazowanie** i **zaokrąglanie** zostały ulepszone: wybór powierzchni jest teraz dozwolony, wszystkie zewnętrzne i wewnętrzne krawędzie tej powierzchni zostaną przetworzone.
- **Wyciągnięcie przez obrót**: linia konstrukcyjna może być teraz używana jako oś obrotu.
- **Nowe narzędzie rowka**: wycinanie materii z bryły poprzez obracanie szkicu.
- Narzędzia **Szyk liniowy**, **Lustrzany**, **Szyk biegunowy** i **Szyk wielokrotny**, które umożliwiają wyrównanie i rozmieszczenie podkładek i kieszeni na elemencie.
- Kreator wałów _(Shaft Wizard)_ ułatwiający projektowanie obiektów wałów.

## Moduł projektowania statków

- Nowy moduł statku _([Przewodnik](/FreeCAD-Ship_s60_tutorial/pl "FreeCAD-Ship s60 tutorial/pl"))_

## Myszy 3D

- Obsługa myszy 3D _(Spaceball, Space Navigator)_ została dodana do wersji Windows.
- Nowa zakładka **Spaceball Motion** w oknie dialogowym Dostosuj pozwala na precyzyjne dostrojenie myszy 3D do żądanych ustawień, bezpośrednio z programu FreeCAD.

## Moduł OpenSCAD

- Ten zupełnie nowy _(eksperymentalny)_ moduł wprowadza możliwość importowania plików OpenSCAD do FreeCAD. Ten format plików jest niezwykle popularny w społeczności RepRap i na stronie Thingiverse do udostępniania projektów cyfrowych.
- Skrypt OpenSCAD może być wykonywany z poziomu FreeCAD, przez OpenSCAD _(jeśli jest zainstalowany na komputerze)_, a wynik pojawia się w dokumencie FreeCAD.
- Więcej informacji można znaleźć na stronie środowiska pracy [OpenSCAD](/OpenSCAD_Workbench/pl "OpenSCAD Workbench/pl") na wiki FreeCAD.

Retrieved from "<http://wiki.freecad.org/index.php?title=Release_notes_0.13/pl&oldid=1469813>"
