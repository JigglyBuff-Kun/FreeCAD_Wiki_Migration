---
title: Krzywe ParametricBlendCurve
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Krzywe: ParametricBlendCurve |
| Lokalizacja w menu |
| Curves → Blend curve |
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

Narzędzie ![](/images/Curves_ParametricBlendCurve.svg) **Curves ParametricBlendCurve** tworzy łączącą krzywą między dwiema krawędziami.

## Użycie

1. Wybierz dwie krzywe.
2. Istnieje kilka sposobów na wywołanie tego polecenia:
   * Wciśnij przycisk ![](/images/Curves_ParametricBlendCurve.svg) [Blend curve](/Curves_ParametricBlendCurve "Curves ParametricBlendCurve").
   * Wybierz opcję **Curves → ![](/images/Curves_ParametricBlendCurve.svg) Blend curve** z menu.
3. Utworzony zostanie obiekt **Blend\_Curve**.
4. Opcjonalnie dostosuj wartości w [Edytorze właściwości](/Property_editor/pl "Property editor/pl"):
   * Ustaw właściwości DANE**Parameter1** i DANE**Parameter2** na `0.0 mm` aby użyć wierzchołków początkowych wybranych krzywych do umieszczenia wierzchołków początkowych i końcowych krzywej łączącej.
   * Ustaw właściwości DANE**Reverse1** i DANE**Reverse2** na `Prawda` aby przełączyć wierzchołki początkowe i końcowe wybranych krzywych.

## Uwagi

Aby odwrócić orientację początkowych i końcowych stycznych do krzywej łączącej, dodaj `-` przed wartością jej właściwości DANE**Scale1** lub DANE**Scale2**.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt **Blend\_Curve** wywodzi się z obiektu [App: Właściwości Python](/App_FeaturePython/pl "App FeaturePython/pl") i dziedziczy wszystkie jego właściwości. Ma też następujące dodatkowe właściwości:

### Dane

Krzywa łącząca

* DANE**Auto Scale** (`Bool`): Oblicz wartości skali aby uzyskać minimalną krzywiznę wzdłuż krzywej.
* DANE**CurvePts** (`VectorList`): Bieguny krzywej Béziera.
* DANE**Output** (`Enumeration`): Typ wyniku.
  + `Single` (domyślnie): Wynik składa się tylko z krzywej łączącej.
  + `Wire`: Wynik składa się z trzech niezależnych krzywych - krzywej łączącej i obu krzywych wejściowych.
  + `Joined`: Wynik składa się z jednej ciągłej krzywej złożonej z krzywej łączącej i obu krzywych wejściowych.

Krawędź 1

* DANE**Continuity1** (`Enumeration`): Poziom ciągłości.
  + `C0` (= G0): Krzywe stykają się w punkcie połączenia.
  + `G1` (domyślnie): Jak wyżej plus krzywe również dzielą wspólny kierunek styczny w punkcie połączenia.
  + `G2`: Jak wyżej plus krzywe również dzielą wspólny środek krzywizny w punkcie połączenia.
  + `G3`: Jak wyżej plus krzywej również dzielą wspólną prędkość wzrostu krzywizny w punkcie połączenia.
  + `G4`: Jak wyżej plus krzywe również dzielą wspólne przyspieszenie wzrostu krzywizny w punkcie połączenia.
* DANE**Edge1** (`LinkSub`): Krawędź 1.
* DANE**Parameter1** (`Distance`): Położenie na pierwszej krawędzi.
* DANE**Reverse1** (`Bool`): Odwróć krawędź.
* DANE**Scale1** (`Bool`): Skala krzywej łączącej, użyj wartości ujemnej aby odwrócić kierunek styczny.

Krawędź 2

* DANE**Continuity2** (`Enumeration`): Poziom ciągłości. (`C0`, `G1`, `G2`, `G3`, `G4`, zobacz powyżej)
* DANE**Edge2** (`LinkSub`): Krawędź 2.
* DANE**Parameter2** (`Distance`): Położenie na krawędzi drugiej.
* DANE**Reverse2** (`Bool`): Odwróć krawędź.
* DANE**Scale2** (`Bool`): Skala krzywej łączącej, użyj wartości ujemnej aby odwrócić kierunek styczny.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_ParametricBlendCurve/pl&oldid=1569768>"