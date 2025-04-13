---
title: Krzywe Wklej obiekt SVG
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Krzywe: Wklej obiekt SVG |
| Lokalizacja w menu |
| Misc. → Paste SVG |
| Środowisko pracy |
| [Krzywe](/Curves_Workbench/pl "Curves Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie ![](/images/Curves_PasteSVG.svg) Krzywe: Wklej obiekt SVG wkleja zawartość SVG ze schowka do okna [widoku 3D](/3D_view/pl "3D view/pl").

## Użycie

1. Skopiuj żądaną zawartość SVG (kod) do schowka.
2. Istnieje kilka sposobów na wywołanie tego polecenia:
   * Naciśnij przycisk ![](/images/Curves_PasteSVG.svg) Wklej zawartość SVG.
   * Wybierz opcję **Misc. → ![](/images/Curves_PasteSVG.svg) PasteSVG** z menu.
3. Dla każdego rozpoznanego elementu SVG zostanie utworzony osobny obiekt.

## Uwagi

Przykładowy wynik:

* 1 rect -> 1 obiekt Prostokąt
* 1 circle -> 1 obiekt Okrąg
* 5 path -> 6 obiektów Ścieżka (jedna ścieżka podzielona na dwie w drugim poleceniu **m**)
* 4 text -> 12 obiektów Tekst (pierwszy obiekt z każdej trójki zawiera pozycję tekstu, następny zawiera ciąg znaków a ostatni ?)

Obiekty Prostokąt i Okrąg są wypełnione i widoczne, Ścieżki są widoczne, ale nic nie jest wyświetlane dla żadnego obiektu Tekst.  
Jakie jest zastosowanie tych obiektów?

## Właściwości

Te obiekty nie mają dodatkowych właściwości.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_PasteSVG/pl&oldid=1570255>"