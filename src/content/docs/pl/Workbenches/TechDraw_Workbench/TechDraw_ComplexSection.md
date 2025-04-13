---
title: Rysunek Techniczny Wstaw przekrój złożony
---
|  |
| --- |
| Rysunek Techniczny: Przekrój złożony |
| Lokalizacja w menu |
| Rysunek Techniczny → Widoki → Wstaw przekrój złożony |
| Środowisko pracy |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.21 |
| Zobacz także |
| [Wstaw widok przekroju](/TechDraw_SectionView/pl "TechDraw SectionView/pl"), [Wstaw widok](/TechDraw_View/pl "TechDraw View/pl") |
|  |

## Opis

Narzędzie **Wstaw przekrój złożony** wstawia widok przekroju na podstawie istniejącego widoku części i profilu.

![](/images/TechDraw_QuarterSection_example.png)

Widok przekroju ćwiartki utworzony za pomocą narzędzia Przekrój złożony.

![](/images/TechDraw_AlignedSection_example.png)

Wyrównany widok przekroju utworzony za pomocą narzędzia Przekrój złożony.

![](/images/TechDraw_OffsetSection_example.png)

Widok przekroju z przesunięciem utworzony za pomocą narzędzia Przekrój złożony

## Użycie

1. Wybierz widok części i obiekt profilu w oknie [widoku 3D](/3D_view/pl "3D view/pl") lub [widoku drzewa](/Tree_view/pl "Tree view/pl"). Profile to zazwyczaj Szkice, ale każdy obiekt, którego kształt można przekształcić w linię będzie działał.
2. Istnieje kilka sposobów wywołania narzędzia:
   * Nacisnąć przycisk ![](/images/TechDraw_ComplexSection.svg) **Przekrój złożony**.
   * Wybierz z menu opcję **Rysunek Techniczny → Widoki → ![](/images/TechDraw_ComplexSection.svg) Wstaw przekrój złożony**.
3. Otworzy się panel zadań, który pomoże obliczyć różne właściwości. Obliczane są rozsądne wartości dla widoku Kierunek, ale można je zmienić.

![](/images/TechDraw_ComplexSection_Taskview1.png)
![](/images/TechDraw_ComplexSection_Taskview2.png)

## Właściwości

Przekrój złożony, formalnie obiekt `TechDraw::DrawComplexSection`, wywodzi się z [Widoku przekroju](/TechDraw_SectionView/pl#Właściwości "TechDraw SectionView/pl"), formalnie obiektu `TechDraw::DrawViewSection` i dziedziczy wszystkie jego właściwości. Ma również następujące dodatkowe właściwości:

### Dane

Narzędzie tnące

* DANE**Obiekt narzędzia tnącego linii łamanej**: Obiekt dokumentu, którego kształt zostanie użyty do wygenerowania profilu cięcia.
* DANE**Strategia rzutowania**: Kontroluje sposób, w jaki cięcie jest wykonywane i jak wynik jest wyświetlany na stronie:
  + `Odsunięcie`: Wykonuje proste cięcie kształtu źródłowego i rzutuje wynik.
  + `Wyrównany`: Wycina kształt źródłowy przy użyciu narzędzia utworzonego z każdego segmentu *(krawędzi)* profilu cięcia. Wyniki każdego cięcia są wyświetlane w układzie pionowym lub poziomym, w zależności od orientacji profilu cięcia.
  + `Nierównoległe`: Jak Wyrównany, ale segmenty profilu, które są równoległe do kierunku widoku, są pomijane.

## Uwagi

* Właściwość [SectionNormal](/TechDraw_SectionView/pl#Dane "TechDraw SectionView/pl") kontroluje która strona profilu jest usuwana i powinna ogólnie wskazywać w przeciwnym kierunku do linii patrzenia reprezentowanej przez strzałki na linii przekroju. Unikaj wybierania takiego SectionNormal, które jest równoległe do segmentów profilu (szczególnie pierwszego i ostatniego), ponieważ to uniemożliwia poprawne obliczenie kierunku strzałki przekroju i może generować odwrócone widoki.
* Zapoznaj się również informacjami na stronie [wstaw widoku przekroju](/TechDraw_SectionView#Uwagi "TechDraw SectionView") środowiska Rysunek Techniczny.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie Wstaw przekrój złożony może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następujących funkcji:

```
doc = FreeCAD.ActiveDocument
box = doc.Box
profile = doc.Sketch
page = doc.Page

view = doc.addObject("TechDraw::DrawViewPart", "View")
page.addView(view)
view.Source = box
view.Direction = (0, 0, 1)

section = doc.addObject("TechDraw::DrawComplexSection", "ComplexSection")
page.addView(section)
section.BaseView = view
section.CuttingToolWireObject = profile
section.Direction = (0, 1, 0)
section.SectionNormal = (-1, 0, 0)

```

## Przykłady

Więcej informacji na temat widoków przekrojów i niektórych przypadków użycia można znaleźć na stronie [Przykłady przekrojów](/TechDraw_Section_Examples/pl "TechDraw Section Examples/pl").

![](/images/TechDraw_ExampleSection-10.png)
![](/images/TechDraw_ExampleSection-13.png)
![](/images/TechDraw_ExampleSection-15.png)
![](/images/TechDraw_ExampleSection-17.png)
![](/images/TechDraw_ExampleSection-34.png)
![](/images/TechDraw_ExampleSection-35.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ComplexSection/pl&oldid=1571176>"