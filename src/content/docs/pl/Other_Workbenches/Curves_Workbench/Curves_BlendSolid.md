---
title: Krzywe BlendSolid
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Krzywe: BlendSolid |
| Lokalizacja w menu |
| Surfaces → BlendSolid |
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

Narzędzie ![](/images/Curves_BlendSolid.svg) **Curves BlendSolid** tworzy bryłę między dwiema krawędziami z pewną ciągłością z ich ścianami podparcia.

## Użycie

1. Wybierz dwie ściany różnych brył.
2. Istnieje kilka sposobów na wywołanie tego polecenia:
   * Wciśnij przycisk ![](/images/Curves_BlendSolid.svg) BlendSolid.
   * Wybierz opcję **Surfaces → ![](/images/Curves_BlendSolid.svg) BlendSolid** z menu.
3. Utworzony zostanie obiekt **Blend\_Solid**.
4. Opcjonalnie edytuj wartości w [Edytorze właściwości](/Property_editor/pl "Property editor/pl") aby wybrać inną metodę automatycznego skalowania i dostosować powiązane właściwości (zobacz Właściwości poniżej).

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt **Blend\_Solid** wywodzi się z obiektu [App: Właściwości Python](/App_FeaturePython/pl "App FeaturePython/pl") i dziedziczy wszystkie jego właściwości. Ma też następujące dodatkowe właściwości:

### Dane

Podstawa

* DANE**Sources** (`LinkSubList`): Ściany do połączenia.

Ciągłość

* DANE**Continuity1** (`Integer`): Rząd ciągłości G... z kształtem 1.
* DANE**Continuity2** (`Integer`): Rząd ciągłości G... z kształtem 2.

Skala

* DANE**Auto Scale** (`Enumeration`): Oblicz wartości skali aby uzyskać regularne bieguny lub minimalną krzywiznę.
  + `RegularPoles` (domyślnie): ...
  + `MinimizeCurvature`: ...
  + `Manual`: ...
* DANE**Scale1** (`FloatList`): Przeskaluj wartości wzdłuż ściany 1.
* DANE**Scale2** (`FloatList`): Przeskaluj wartości wzdłuż ściany 2.
* DANE**Scale Samples** (`Integer`): Liczba próbek do automatycznego skalowania.

Ustawienia

* DANE**Fuse** (`Bool`): Scal 3 bryły razem.
* DANE**Samples** (`Integer`): Liczba próbek do wygenerowania każdej powierzchni.

Status

* DANE**Shape Type** (`String`): Status utworzonego kształtu.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_BlendSolid/pl&oldid=1570050>"