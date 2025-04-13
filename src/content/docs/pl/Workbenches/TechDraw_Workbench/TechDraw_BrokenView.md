---
title: Rysunek Techniczny Utwórz widok z przerwaniem
---
|  |
| --- |
| TechDraw BrokenView |
| Menu location |
| Rysunek Techniczny → Widoki → Wstaw widok przerwania |
| Workbenches |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") |
| Default shortcut |
| *None* |
| Introduced in version |
| 1.0 |
| See also |
| [Wstaw widok](/TechDraw_View/pl "TechDraw View/pl") |
|  |

## Opis

To narzędzie wstawia widok z przerwaniem, który jest oparty na istniejącym [widoku części](/TechDraw_View/pl "TechDraw View/pl") lub jednym bądź wielu obiektach, takich jak [Zawartości](/PartDesign_Body/pl "PartDesign Body/pl") lub [Części](/Std_Part/pl "Std Part/pl"). Widok z przerwaniem wymaga też jednego lub więcej [szkiców](/Sketcher_NewSketch/pl "Sketcher NewSketch/pl") definiujących położenie i rozmiar obszarów do usunięcia. Widok z przerwaniem zachowuje się podobnie do innych widoków. Kierunek rzutowania jest brany z istniejącego widoku części, kierunku ujęcia widoku w oknie widoku 3D lub kierunku normalnego wskazanej ściany.

![](/images/TechDraw_BrokenView_example3d.png)

Kształt do przerwania i szkice definiujące przerwanie.

![](/images/TechDraw_BrokenView_example2d.png)

Otrzymany rezultat.

## Użycie

1. Opcjonalnie obróć [widok 3D](/3D_view/pl "3D view/pl"). Widok 3D determinuje początkowe wartości właściwości DANE**Direction** i DANE**XDirection** widoku przerwania.
2. Wybierz obiekt, którego widok z przerwaniem chcesz utworzyć lub wybierz istniejący widok środowiska Rysunek Roboczy, który zawiera ten obiekt.
3. Dodaj jeden lub więcej szkiców z liniami przerwania do zaznaczenia wybierając je w [widoku drzewa](/Tree_view/pl "Tree view/pl"). Każdy szkic powinien zawierać tylko linie równoległe. Możesz również skorzystać z innych obiektów z dwiema równoległymi liniami.
4. Istnieje kilka sposobów wywołania tego polecenia:
   * Wciśnij przycisk ![](/images/TechDraw_BrokenView.svg) Wstaw widok z przerwaniem.
   * Wybierz z menu opcję **Rysunek Techniczny → Widoki → ![](/images/TechDraw_BrokenView.svg) Wstaw widok z przerwaniem**.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Widok z przerwaniem, formalnie obiekt `TechDraw::DrawBrokenView`, wywodzi się z [Widoku części](/TechDraw_View/pl#Właściwości_-_Widok_części "TechDraw View/pl"), formalnie obiektu `TechDraw::DrawViewPart` i dziedziczy wszystkie jego właściwości. Ma również następujące dodatkowe właściwości:

### Dane

Broken View

* DANE**Breaks** (`LinkList`): Obiekty w widoku 3D, które definiują punkty początkowe / końcowe i kierunek przerwań w tym widoku.
* DANE**Gap** (`Length`): Rozmiar przerwy dla przerwań w tym widoku *(nieskalowana długość 3D)*.

## Uwagi

* Przerwania muszą być pionowe lub poziome. Przerwania ukośne nie są wspierane.
* Zobacz też [Wstaw widok](/TechDraw_View/pl "TechDraw View/pl").

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie Wstaw widok z przerwaniem może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następujących funkcji:

```
doc = FreeCAD.ActiveDocument
box = doc.Box
profile = doc.Sketch
page = doc.Page

brokenView = doc.addObject("TechDraw::DrawBrokenView", "BrokenView")
page.addView(brokenView)
brokenView.Source= box
brokenView.Breaks = [doc.Sketch]

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_BrokenView/pl&oldid=1490997>"