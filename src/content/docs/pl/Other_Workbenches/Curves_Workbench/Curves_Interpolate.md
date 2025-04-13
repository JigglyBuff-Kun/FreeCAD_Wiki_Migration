---
title: Krzywe Interpoluj
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Krzywe: Interpoluj |
| Lokalizacja w menu |
| Curves → Interpolate |
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

Narzędzie ![](/images/Curves_Interpolate.svg) **Interpoluj** dokonuje interpolacji punktów za pomocą krzywej złożonej.

## Użycie

1. Wybierz kilka wierzchołków lub jeden obiekt zawierający przynajmniej 2 wierzchołki.
2. Istnieje kilka sposobów na wywołanie tego polecenia:
   * Naciśnij przycisk ![](/images/Curves_Interpolate.svg) Krzywe: Interpoluj.
   * Wybierz opcję **Curves → ![](/images/Curves_Interpolate.svg) Interpolate** z menu.
3. Utworzony zostanie obiekt **Interpolation\_Curve**.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt **Interpolation\_Curve** wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Ogólne

* DANE**CustomTangents** (`Bool`): Styczne określone przez użytkownika.
* DANE (Hidden)**DetectAligned** (`Bool`): interpoluj 3 wyrównane punkty linią.
* DANE**Periodic** (`Bool`): Ustaw krzywą zamkniętą.
* DANE (Hidden)**PointList** (`LinkSubList`): Lista punktów do interpolacji.
* DANE**Polygonal** (`Bool`): interpoluj krzywą wielomianową 1 rzędu.
* DANE**Source** (`Link`): Obiekt źródłowy, który zapewnia punkty do interpolacji.
* DANE**StartOffset** (`Integer`): Odsuń początkowy indeks listy punktów.
* DANE**TangentFlags** (`BoolList`): Flaga aktywacji dla stycznych.
* DANE**Tangents** (`VectorList`): Styczne w interpolowanych punktach.
* DANE**Tolerance** (`Float`): Tolerancja interpolacji.

Parametry

* DANE (Hidden)**Parameters** (`FloatList`): Parametry interpolowanych punktów.
* DANE **Parametrization**  (`Enumeration`): Typ parametryzacji.
  + `ChordLength` (domyślnie): ...
  + `Centripetal`: ...
  + `Uniform`: ...
  + `Custom`: ...
* DANE**WireOutput** (`Bool`): generuje polilinię lub pojedynczą krawędź.

Spirala

* DANE**FaceSupport** (`LinkSub`): Ściana stanowiąca podparcie dla spirali.
* DANE**UTurns** (`Integer`): Liczba skrętów między 2 punktami w kierunku U.
* DANE**VTurns** (`Integer`): Liczba skrętów między 2 punktami w kierunku V.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_Interpolate/pl&oldid=1571219>"