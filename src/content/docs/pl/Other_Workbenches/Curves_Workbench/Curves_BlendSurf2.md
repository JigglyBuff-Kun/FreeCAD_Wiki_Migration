---
title: Krzywe BlendSurf2
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Krzywe: BlendSurf2 |
| Lokalizacja w menu |
| Surfaces → BlendSurface |
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

Narzędzie ![](/images/Curves_BlendSurf2.svg) **Curves BlendSurf2** tworzy powierzchnię między dwiema krawędziami z pewną ciągłością z ich ścianami podparcia.

## Użycie

1. Wybierz cztery kształty podrzędne:
   * **Pierwsza krawędź** i powiązana **pierwsza ściana**
   * **Druga krawędź** i powiązana **druga ściana**
2. Istnieje kilka sposobów na wywołanie tego polecenia:
   * Wciśnij przycisk ![](/images/Curves_BlendSurf2.svg) BlendSurface.
   * Wybierz opcję **Surfaces → ![](/images/Curves_BlendSurf2.svg) BlendSurface** z menu.
3. Utworzony zostanie obiekt **Blend\_Surface**.
4. Opcjonalnie edytuj wartości w [Edytorze właściwości](/Property_editor/pl "Property editor/pl") aby wybrać inną metodę automatycznego skalowania i dostosować powiązane właściwości (zobacz Właściwości poniżej).

## Uwagi

Wydaje się, że to narzędzie obecnie nie posiada opcji odwrócenia kierunków stycznych na początku i końcu powierzchni łączącej.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt **Blend\_Surface** wywodzi się z obiektu [App: Właściwości Python](/App_FeaturePython/pl "App FeaturePython/pl") i dziedziczy wszystkie jego właściwości. Ma też następujące dodatkowe właściwości:

### Dane

Podstawa

* DANE**Samples** (`Integer`): Liczba próbek do wygenerowania powierzchni.
* DANE**Sources** (`LinkSubList`): Krawędzie i ściany podparcia.

Ciągłość

* DANE**Continuity1** (`Integer`): Poziom ciągłości ze ścianą krawędzi 1.
* DANE**Continuity2** (`Integer`): Poziom ciągłości ze ścianą krawędzi 2.

Skala

* DANE**Auto Scale** (`Enumeration`): Oblicz wartości skali aby uzyskać regularne bieguny lub minimalną krzywiznę.
  + `RegularPoles` (domyślnie): ...
  + `MinimizeCurvature`: ...
  + `Manual`: ...
* DANE**Scale1** (`FloatList`): Przeskaluj wartości wzdłuż krawędzi 1.
* DANE**Scale2** (`FloatList`): Przeskaluj wartości wzdłuż krawędzi 2.
* DANE**Scale Samples** (`Integer`): Liczba próbek do automatycznego skalowania.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_BlendSurf2/pl&oldid=1570011>"