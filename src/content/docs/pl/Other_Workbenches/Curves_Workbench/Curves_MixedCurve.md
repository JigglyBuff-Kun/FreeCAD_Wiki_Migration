---
title: Krzywe Krzywa mieszana
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Krzywe: Krzywa mieszana |
| Lokalizacja w menu |
| Curves → Mixed curve |
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

Narzędzie ![](/images/Curves_MixedCurve.svg) **Curves MixedCurve** tworzy trójwymiarową krzywą przecięcia dwóch krzywych.

## Użycie

1. Wybierz dwie krzywe.
2. Istnieje kilka sposobów na wywołanie tego polecenia:
   * Wciśnij przycisk ![](/images/Curves_MixedCurve.svg) [Mixed curve](/Curves_MixedCurve "Curves MixedCurve").
   * Wybierz opcję **Curves → ![](/images/Curves_MixedCurve.svg) Mixed curve** z menu.
3. Utworzony zostanie obiekt **Mixed\_Curve**.
4. W [Edytorze właściwości](/Property_editor/pl "Property editor/pl") edytuj właściwości DANE**Direction1** i DANE**Direction2** aby ustawić kierunki rzutowania.  
   To jest opcjonalne jeśli obie wybrane krzywe zostały utworzone przy pomocy ![](/images/Workbench_Sketcher.svg) [Szkicownika](/Sketcher_Workbench/pl "Sketcher Workbench/pl").

## Uwagi

* Kierunki rzutowania są automatycznie wykrywane jeśli to możliwe. W przypadku krzywych ze [Szkicownika](/Sketcher_Workbench/pl "Sketcher Workbench/pl"), używany jest kierunek normalny do płaszczyzny szkicu.
* Właściwości DANE**Direction1** i DANE**Direction2** nadpisują automatycznie wykryte kierunki. Konieczne jest wprowadzenie wartości ręcznie jeśli nie jest możliwe automatyczne wykrycie kierunku.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt **Mixed\_Curve** wywodzi się z obiektu [App: Właściwości Python](/App_FeaturePython/pl "App FeaturePython/pl") i dziedziczy wszystkie jego właściwości. Ma też następujące dodatkowe właściwości:

### Dane

Krzywa mieszana

* DANE**Direction1** (`Vector`): Kierunek rzutowania pierwszego kształtu. Jeśli wektor jest pusty, używane jest Umiejscowienie kształtu.
* DANE**Direction2** (`Vector`): Kierunek rzutowania drugiego kształtu. Jeśli wektor jest pusty, używane jest Umiejscowienie kształtu.
* DANE**Fill Face1** (`Bool`): Tworzy powierzchnie prostokreślne między kształtem 1 i wynikową krzywą mieszaną.
* DANE**Fill Face2** (`Bool`): Tworzy powierzchnie prostokreślne między kształtem 2 i wynikową krzywą mieszaną.
* DANE**Shape1** (`Link`): Pierwszy kształt.
* DANE**Shape2** (`Link`): Drugi kształt.

Shape Approximation

* DANE**Active** (`Bool`): Użyj aproksymacji.
* DANE**Approx Tolerance** (`Float`): Tolerancja Aproksymacji.
* DANE**Continuity** (`Enumeration`): Żądana ciągłość krzywych.
* DANE**Degree Max** (`Integer`): Maksymalny stopień krzywej.
* DANE**Degree Min** (`Integer`): Minimalny stopień krzywej.
* DANE**Extension Proxy** (`PythonObject`): Obiekt pośredniczący wydłużenia aproksymacji.
  + `ChordLength`:
  + `Centripetal`:
  + `Uniform`:
* DANE**Parametrization** (`Enumeration`): Typ parametryzacji.
* DANE**Samples** (`Integer`): Liczba próbek.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_MixedCurve/pl&oldid=1569801>"