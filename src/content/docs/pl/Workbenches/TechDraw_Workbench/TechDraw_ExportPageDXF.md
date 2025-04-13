---
title: Rysunek Techniczny Wyeksportuj stronę do formatu DXF
---
|  |
| --- |
| Rysunek Techniczny: Wyeksportuj stronę do formatu DXF |
| Lokalizacja w menu |
| Rysunek Techniczny → Strona → Wyeksportuj stronę do formatu DXF |
| Środowisko pracy |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.18 |
| Zobacz także |
| [Wyeksportuj stronę do formatu SVG](/TechDraw_ExportPageSVG/pl "TechDraw ExportPageSVG/pl"), [DXF](/Draft_DXF/pl "Draft DXF/pl") |
|  |

## Opis

Narzędzie **Wyeksportuj stronę do formatu DXF** zapisuje stronę rysunku jako plik [DXF](/DXF/pl "DXF/pl").

## Użycie

1. Jeśli w dokumencie znajduje się wiele stron rysunku: opcjonalnie aktywuj żądaną stronę, wybierając ją w oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl").
2. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/TechDraw_ExportPageDXF.svg) Wyeksportuj stronę do formatu DXF.
   * Wybierz opcję z menu **Rysunek Techniczny → Strona → ![](/images/TechDraw_ExportPageDXF.svg) Wyeksportuj stronę do formatu DXF**.
   * Jeśli strona jest wyświetlana w [głównym obszarze widoku](/Main_view_area/pl "Main view area/pl"): kliknij prawym przyciskiem myszy okno strony i wybierz opcję **Eksportuj do formatu DXF** z menu kontekstowego.
3. Jeśli w dokumencie znajduje się wiele stron rysunku, a strona nie została jeszcze aktywowana, otworzy się okno dialogowe **Wybór strony**:
   1. Wybierz żądaną stronę.
   2. Naciśnij przycisk OK.
4. Zostanie otwarte okno dialogowe **Eksportuj stronę do formatu DXF**.
5. Wybierz lokalizację i nazwę pliku.

## Ograniczenia

* Wymiary promieniowe i średnicowe będą eksportowane poprawnie tylko wtedy, gdy znajdują się "wewnątrz" łuku.
* Skalowanie nie jest obsługiwane. Plik DXF zostanie narysowany w rzeczywistym rozmiarze tak jak na stronie Rysunku Technicznego.
* Jednostki nie są obsługiwane. Plik DXF zostanie narysowany w milimetrach *(mm)*. Tekst wymiarów będzie wyświetlany dokładnie tak, jak jest wyświetlany na stronie Rysunku Technicznego.
* Środowisko Rysunek Techniczny nie może eksportować [obiektów środowiska Rysunek Roboczy](/TechDraw_DraftView/pl "TechDraw DraftView/pl") lub [Architektury](/TechDraw_ArchView/pl "TechDraw ArchView/pl") do DXF. Widoki te są elementami [SVG](/SVG/pl "SVG/pl") generowanymi wewnętrznie przez środowisko pracy [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), więc nie ma geometrycznego kształtu do wyeksportowania. Aby wyeksportować widok jako DXF, musi on zostać utworzony za pomocą narzędzia [Wstaw widok](/TechDraw_View/pl "TechDraw View/pl") lub [Wstaw grupę rzutów](/TechDraw_ProjectionGroup/pl "TechDraw ProjectionGroup/pl"). Na przykład wybierz narzędzie [Płaszczyzna przekroju](/Arch_SectionPlane/pl "Arch SectionPlane/pl") środowiska Architektura, następnie użyj [Widok 2D kształtu](/Draft_Shape2DView/pl "Draft Shape2DView/pl") ze środowiska Rysunek Roboczy, aby utworzyć płaski kształt rzutowania, a następnie użyj [Wstaw widok](/TechDraw_View/pl "TechDraw View/pl") na tym obiekcie. Alternatywnie, wybierz obiekty z widoku drzewa lub widoku 3D i wyeksportuj do DXF za pomocą opcji **Plik → [Eksport](/Std_Export/pl "Std Export/pl")**.
* Blok tytułowy strony jest również szablonem [SVG](/SVG/pl "SVG/pl"), więc również nie zostanie wyeksportowany do DXF.
* Ogólnie rzecz biorąc, Rysunek Techniczny może eksportować do DXF tylko te obiekty, które są obsługiwane przez klasę `Import::ImpExpDxfWrite` modułu [Import Module](/Draft_DXF/pl "Draft DXF/pl").

## Uwagi

* Ta funkcja eksportuje wersje R12 *(AC1009)* i R14 *(AC1014)* [DXF](/DXF/pl "DXF/pl").
  + R12 jest starszą, prostszą wersją standardu, ale powinna być czytelna dla większości innych programów.
  + R14 jest wersją domyślną. Zawiera między innymi obsługę splajnów i elips.
* Te parametry wpływają na dane wyjściowe:
  + **Przybory → Edycja parametrów → BaseApp/Preferencje/Mod/Import → DxfVersionOut**. Jest to wartość całkowita. Prawidłowe wpisy to 12 lub 14. Domyślną wartością jest 14.
  + **Przybory → Edycja parametrów → BaseApp/Preferencje/Mod/Import → DiscretizeEllipses**. Jest to wartość logiczna. Jeśli jest to wartość `PRAWDA`, splajny i elipsy są konwertowane na polilinie. Jeśli jest to wartość `FAŁSZ`, splajny i elipsy są zapisywane jako obiekty splajnów i elips. Wartością domyślną jest `FAŁSZ`. Jeśli parametr DxfVersionOut ma wartość 12, splajny i elipsy są zawsze konwertowane na polilinie.
  + **Przybory → Edycja parametrów → BaseApp/Preferencje/Mod/Import → maxsegmentlength**. Jest to wartość zmiennoprzecinkowa. Jeśli splajny i elipsy są konwertowane na polilinie, parametr ten określa długość segmentu.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Wyeksportuj stronę do formatu DXF** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następujących funkcji:

```
TechDraw.writeDXFPage(page,filename)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ExportPageDXF/pl&oldid=1486485>"