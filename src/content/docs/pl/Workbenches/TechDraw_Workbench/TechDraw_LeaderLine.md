---
title: Rysunek Techniczny Dodaj linię odniesienia do widoku
---
|  |
| --- |
| Rysunek Techniczny: Dodaj linię odniesienia do widoku |
| Lokalizacja w menu |
| Rysunek Techniczny → Dodaj linie → Dodaj linię odniesienia do widoku |
| Środowisko pracy |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.19 |
| Zobacz także |
| [Wstaw adnotację w postaci tekstu sformatowanego](/TechDraw_RichTextAnnotation/pl "TechDraw RichTextAnnotation/pl"), [Dodaj informacje spawalnicze do linii odniesienia](/TechDraw_WeldSymbol/pl "TechDraw WeldSymbol/pl") |
|  |

## Opis

Narzędzie **Dodaj linię odniesienia do widoku** dodaje linię do widoku. Inne obiekty adnotacji *(takie jak [Wstaw adnotację w postaci tekstu sformatowanego](/TechDraw_RichTextAnnotation/pl "TechDraw RichTextAnnotation/pl"))* mogą być połączone z linią prowadzącą w celu utworzenia złożonych adnotacji.

![](/images/TechDraw_LeaderLine_sample.png)

Linia pomocnicza dodana do Widoku.

## Użycie

1. Wybierz widok.
2. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/TechDraw_LeaderLine.svg) Dodaj linię odniesienia do widoku.

Otworzy się okno dialogowe umożliwiające narysowanie linii pomocniczej i przypisanie do niej symboli końcowych.

* Wybierz opcję z menu **Rysunek Techniczny → Dodaj linie → ![](/images/TechDraw_LeaderLine.svg). Dodaj linię prowadzącą do widoku**.

1. Otworzy się panel zadań.
2. Naciśnij przycisk Wybierz punkty.
3. Wybierz pierwszy punkt na stronie, aby zdefiniować punkt początkowy linii.
4. Wybierz następny punkt na stronie. Przytrzymaj Ctrl, aby przyciągnąć do wielokrotności kąta 22,5°. Opcjonalnie użyj podwójnego kliknięcia zamiast pojedynczego, aby zakończyć wprowadzanie punktów.
5. Opcjonalnie dodaj więcej punktów.
6. Jeśli punkt nie został kliknięty dwukrotnie: naciśnij przycisk Zapisz punkty.
7. Opcjonalnie zmień **Symbol początku**, **Symbol końca**, **Kolor**, **Szerokość** i **Styl** linii odniesienia. Więcej informacji można znaleźć w sekcji [Właściwości](#Właściwości).
8. Naciśnij przycisk OK.

## Edycja

1. Kliknij dwukrotnie linię prowadzącą w oknie [Widoku drzewa](/Tree_view "Tree view").
2. Otworzy się panel zadań.
3. Aby edytować punkty:
4. Naciśnij przycisk Edytuj punkty.
   1. Linia prowadząca jest oznaczona tymczasowymi węzłami.
   2. Przeciągnij jeden lub więcej węzłów do nowej pozycji.
   3. Naciśnij przycisk Zapisz zmiany.
5. Opcjonalnie zmień **Symbol początku**, **Symbol końca**, **Kolor**, **Szerokość** i **Styl** linii odniesienia. Więcej informacji można znaleźć w sekcji [Właściwości](#Właściwości).
6. Naciśnij przycisk OK.

## Uwagi

* Nie można dodawać ani usuwać punktów z istniejącej linii odniesienia.
* Jeśli podczas tworzenia nie określono żadnych punktów, na środku widoku umieszczana jest krótka linia. Nie ma sposobu na naprawienie takiej linii, należy ją usunąć.
* Domyślnie zaznaczona jest [opcja](/TechDraw_Preferences/pl#Adnotacje "TechDraw Preferences/pl") **Linia odniesienia automatycznie poziomo**. Oznacza to, że ostatni segment nowej linii odniesienia jest rysowany poziomo. Jeśli jest tylko jeden segment, wynikiem jest pojedyncza pozioma linia.
* Można wyłączyć tę funkcję automatycznego poziomego rysowania dla istniejących linii prowadzących, zmieniając ich właściwość DANE**Auto Poziom**.

## Właściwości

### Dane

Podstawowe

* DANE**Symbol początku** (`Enumeration`): Symbol na początku linii prowadzącej. Opcje: ![](/images/Arrowfilled.svg) ![](/images/Arrowfilled.svg) ![](/images/Arrowopen.svg) Otwarta strzałka, ![](/images/Arrowtick.svg) Grot, ![](/images/Arrowdot.svg) Kropka, ![](/images/Arrowopendot.svg) Otwarte koło, ![](/images/Arrowfork.svg) Widełki, ![](/images/Arrowpyramid.svg) Wypełniony trójkąt, Brak.
* DANE**Symbol końca** (`Enumeration`): Symbol na końcu linii prowadzącej. Idem.
* DANE**X** (`Odległość`): Współrzędna X linii prowadzącej względem widoku.
* DANE**Y** (`Odległość`): Współrzędna Y linii prowadzącej względem widoku.

Linia odniesienia

* DANE**Leader Parent** (`Link`): Widok, do którego dołączona jest linia prowadząca.
* DANE**Punkty trasy** (`VectorList`): Punkty linii prowadzącej.
* DANE**Skalowalny** (`Bool`): Określa, czy linia odniesienia skaluje się wraz z DANE**Leader Parent**.
* DANE**Auto poziom** (`Bool`): Określa, czy ostatni segment linii prowadzącej ma być ustawiony poziomo.

### Widok

Podstawa

* WIDOK**Zachowaj etykietę** (`Bool`): Nieużywane.
* WIDOK**Kolejność na stosie** (`Integer`): Nakładanie się lub niedopasowanie względem innych obiektów rysunku. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

Format linii

* WIDOK**Kolor** (`Color`): Kolor linii prowadzącej.
* WIDOK**Style linii** (`Enumeration`): Styl linii prowadzącej. Opcje: Brak, ![](/images/Continuous-line.svg) Ciągła, ![](/images/Dash-line.svg) Kreska, ![](/images/Dot-line.svg) Kropka, ![](/images/DashDot-line.svg) Kreska kropka, ![Length](/images/DashDotDot-line.svg) Kreska kropka kropka.
* WIDOK**Szerokość linii** (`Length`): Szerokość linii prowadzącej.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Dodaj linię odniesienia do widoku** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następujących funkcji:

```
myPage = FreeCAD.ActiveDocument().Page
myBase = FreeCAD.ActiveDocument().View
leaderObj = FreeCAD.ActiveDocument.addObject('TechDraw::DrawLeaderLine','DrawLeaderLine')
FreeCAD.activeDocument().myPage.addView(leaderObj)
FreeCAD.activeDocument().leaderObj.LeaderParent = myBase
#first waypoint is always (0,0,0)  
#rest of waypoints are positions relative to (0,0,0)
leaderObj.WayPoints = [p0,p1,p2]
leaderObj.X = 5
leaderObj.Y = 5

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_LeaderLine/pl&oldid=1293564>"