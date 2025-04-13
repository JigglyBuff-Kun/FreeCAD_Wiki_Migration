---
title: Rysunek Techniczny Dodaj informacje spawalnicze do linii odniesienia
---
|  |
| --- |
| Rysunek Techniczny: Dodaj informacje spawalnicze do linii odniesienia |
| Lokalizacja w menu |
| TechDraw → Symbole → Dodaj informacje spawalnicze do linii odniesienia |
| Środowisko pracy |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.19 |
| Zobacz także |
| [TechDraw Leaderline](/TechDraw_LeaderLine/pl "TechDraw LeaderLine/pl") |
|  |

## Opis

Narzędzie **Dodaj informacje spawalnicze do linii odniesienia** dodaje specyfikacje spawania do istniejącej linii prowadzącej.

![](/images/TechDraw_WeldingSymbol_example.png)

Specyfikacja spawania dodana do linii pomocniczej.

## Użycie

1. Wybierz istniejącą [linię odniesienia](/TechDraw_LeaderLine/pl "TechDraw LeaderLine/pl").
2. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/TechDraw_WeldSymbol.svg) **Dodaj informacje spawalnicze do linii odniesienia**.
   * Wybierz opcję z menu **Rysunek Techniczny → Symbole → ![](/images/TechDraw_WeldSymbol.svg) Dodaj informacje spawalnicze do linii odniesienia**.
3. Otworzy się panel zadań.
4. Określ symbole spawania i towarzyszący im tekst, które mają zostać dodane do linii prowadzącej.
5. Naciśnij przycisk OK.

## Uwagi

* Po utworzeniu symbolu spawania można go edytować, klikając go dwukrotnie w oknie [Widoku drzewa](/Tree_view "Tree view").
* Istnieje [parametr preferencji](/TechDraw_Preferences/pl "TechDraw Preferences/pl") dla domyślnego katalogu symboli spawalniczych. Można dodawać własne symbole w katalogu osobistym.

## Właściwości

### Symbol spawu

* DANE**Spoina dookoła**: Pokazuje symbol *Spoina dookoła* *(okrąg)* na załamaniu linii prowadzącej.
* DANE**Spawać na montażu**: Pokazuje symbol *Spawać na montażu* (flaga) na załamaniu linii odniesienia.
* DANE**Spoina naprzemienna**: Przesuwa dolny symbol, aby wskazać spoiny naprzemienne.
* DANE**Tekst ogona**: Tekst wyświetlany na końcu linii prowadzącej.

### Kafelek

Każdy pojedynczy symbol *("strona strzałki" i "druga strona")* jest reprezentowany przez obiekt "kafelek". Symbol spawania ma 1 lub 2 powiązane z nim kafelki. Każdy z nich ma następujące właściwości:

* DANE**Kafelek nadrzędny**: Nadrzędny symbol spoiny
* DANE**Wiersz kafelka**: Wiersz kafelka. 0 oznacza powyżej linii, -1 poniżej linii. **Uwaga:** Jeśli zmienisz rząd jednego kafelka, musisz również zmienić kafelek dla drugiej strony! W ten sposób można odwrócić strony.
* DANE**Kolumna kafelka**: Kolumna kafelka. W tej chwili jest to zawsze 0, dlatego właściwość nie jest edytowalna.
* DANE**Plik symbolu**: Katalog i nazwa pliku SVG symbolu.
* DANE**Symbol dołączony**: Katalog i nazwa pliku SVG rzeczywistego dołączonego symbolu. *(Jest to katalog tymczasowy)*.
* DANE**Tekst z lewej**: Tekst wyświetlany po lewej stronie symbolu SVG.
* DANE**Tekst środkowy**: Tekst wyświetlany powyżej/poniżej symbolu SVG.
* DANE**Tekst z prawej**: Tekst wyświetlany po prawej stronie symbolu SVG.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Dodaj informacje spawalnicze do linii odniesienia** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następujących funkcji:

```
symbolName = "DrawWeldSymbol001")
symbolType = "TechDraw::DrawWeldSymbol"
App.activeDocument().addObject(symbolType, symbolName)
App.activeDocument().Page.addView(App.activeDocument().DrawWeldSymbol001)
App.activeDocument().DrawWeldSymbol001.Leader = myLeader
App.activeDocument().DrawWeldSymbol001.AllAround = True
App.activeDocument().DrawWeldSymbol001.FieldWeld = True
App.activeDocument().DrawWeldSymbol001.AlternatingWeld = True
App.activeDocument().DrawWeldSymbol001.TailText = "process text"

tileName = "DrawTileWeld001"
tileType = "TechDraw::DrawTileWeld"
App.activeDocument().addObject(tileType, tileName)
App.activeDocument().DrawTileWeld001.TileParent = App.activeDocument().DrawWeldSymbol001
App.activeDocument().DrawTileWeld001.TileRow = 0
App.activeDocument().DrawTileWeld001.TileColumn = 0
App.activeDocument().DrawTileWeld001.SymbolFile = fullPathToMySvgFile
App.activeDocument().DrawTileWeld001.LeftText = "left text"
App.activeDocument().DrawTileWeld001.RightText = "right text"
App.activeDocument().DrawTileWeld001.CenterText = "center text"

```

## Kafelki symboli SVG

Poszczególne symbole są tworzone przez pliki SVG 64x64 pikseli. Dodatkowe symbole SVG można utworzyć w programie, takim jak [Inkscape](https://en.wikipedia.org/wiki/Inkscape), używając jednego z symboli dostarczonych przez FreeCAD jako szablonu.

![](/images/Techdraw-WeldingSymbolLayoutArrow.svg)
![](/images/Techdraw-WeldingSymbolLayoutOther.svg)

* Poszczególne symbole są tworzone przez pliki SVG o rozmiarze 64x64 *(nominalnie)* pikseli. Kafelki mają w rzeczywistości "obramowanie" o rozmiarze 4px. Obramowanie zapewnia ładne połączenie linii prowadzącej i symbolu.
* Symbol jest rysowany w kolorze czarnym na przezroczystym tle. Szerokość obrysu wynosi 0,5 mm.
* Linia prowadząca przechodzi poniżej symboli po stronie strzałki *(patrz obrazek po lewej)* i powyżej symboli po "drugiej" stronie *(patrz obrazek po prawej)*.
* Nie ma określonego standardu nazewnictwa innego niż dodanie "Góra / Dół" do symboli strzałki / drugiej strony.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_WeldSymbol/pl&oldid=1486364>"