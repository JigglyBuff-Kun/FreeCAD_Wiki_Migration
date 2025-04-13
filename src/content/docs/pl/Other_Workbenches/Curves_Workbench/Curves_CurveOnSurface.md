---
title: Krzywa Krzywa na powierzchni
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Krzywe: Krzywa na powierzchni |
| Lokalizacja w menu |
| Curves → CurveOnSurface |
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

Narzędzie ![](/images/Curves_CurveOnSurface.svg) **Curves CurveOnSurface** rzutuje krzywą na ścianę i opcjonalnie tworzy ścianę normalną lub binormalną.

## Użycie

1. Wybierz krzywą i ścianę podparcia.
2. Istnieje kilka sposobów na wywołanie tego polecenia:
   * Wciśnij przycisk ![](/images/Curves_CurveOnSurface.svg) CurveOnSurface.
   * Wybierz opcję **Curves → ![](/images/Curves_CurveOnSurface.svg) CurveOnSurface** zmenu.
3. Utworzony zostanie obiekt **CurveOnSurface**.
4. Opcjonalnie edytuj wartości w [Edytorze właściwości](/Property_editor/pl "Property editor/pl") aby dodać ścianę normalną lub binormalną i dostosuj powiązane właściwości (zobacz Właściwości poniżej).

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt **CurveOnSurface** wywodzi się z obiektu [App: Właściwości Python](/App_FeaturePython/pl "App FeaturePython/pl") i dziedziczy wszystkie jego właściwości. Ma też następujące dodatkowe właściwości:

### Dane

Curve On Surface

* DANE**Closed** (`Bool`): Zamknij krzywą.
* DANE**Face** (`LinkSub`):Ściana podparcia.
* DANE**Face Width** (`Distance`): Szerokość wynikowej ściany.
* DANE**Input Edge** (`LinkSub`): Wejściowa krawędź.
* DANE**Output** (`Enumeration`): Typ wyniku.
  + `Curve only` (domyślnie): Tworzona jest tylko krzywa rzutowaną na wybraną ścianę
  + `Normal face`: Tworzona jest krzywa oraz ściana wzdłuż krzywej i normalna do wybranej ściany.
  + `Binormal face`: Tworzona jest krzywa oraz ściana wzdłuż krzywej i styczna do wybranej ściany.
* DANE**Reverse** (`Bool`): Odwraca parametryczną orientację krzywej.
* DANE**Samples** (`Integer`): Liczba próbek.
* DANE**Symmetric** (`Bool`): Ściana symetryczna w poprzek krzywej.
* DANE**Tolerance** (`Float`): Tolerancja.

Orientacja

* DANE**Reverse Binormal** (`Bool`):Odwróć binormalną.
* DANE**Reverse Normal** (`Bool`): Odwróć normalną.
* DANE**Reverse Tangent** (`Bool`): Odwróć styczną.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_CurveOnSurface/pl&oldid=1569964>"