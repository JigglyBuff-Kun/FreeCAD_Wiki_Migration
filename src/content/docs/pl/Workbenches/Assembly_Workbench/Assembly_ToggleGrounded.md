---
title: Złożenie Włącz / wyłącz zakotwienie
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Złożenie Włącz / wyłącz zakotwienie |
| Lokalizacja w menu |
| Złożenie → Włącz / wyłącz zakotwienie |
| Środowisko pracy |
| [Złożenie](/Assembly_Workbench/pl "Assembly Workbench/pl") |
| Domyślny skrót |
| G |
| Wprowadzono w wersji |
| 1.0 |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie ![](/images/Assembly_ToggleGrounded.svg) Włącz / wyłącz zakotwienie blokuje położenie i orientację kształtu względem układu współrzędnych złożenia, do którego ten kształt należy.

## Użycie

1. Wybierz jedną lub więcej części.
2. Jest kilka sposobów na wywołanie tej komendy:
   * Wciśnij przycisk ![](/images/Assembly_ToggleGrounded.svg) Włącz / wyłącz zakotwienie.
   * Wybierz opcję **Złożenie → ![](/images/Assembly_ToggleGrounded.svg) Włącz / wyłącz zakotwienie** z menu.
   * Użyj skrótu: G.
3. Obiekt GroundedJoint zostaje dodany dla każdej wybrane części.

## Uwagi

* Zakotwienie połączenia spowoduje wyświetlenie czerwonej ikony blokady w widoku 3D, wokół środka masy zakotwiczonego elementu. Aby ukryć blokadę, należy ustawić właściwość WIDOK**Widoczność** połączenia na `Fałsz`.

## Właściwości

Zobacz również stronę: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt **GroundedJoint** wywodzi się z obiektu [App: Właściwości Python](/App_FeaturePython/pl "App FeaturePython/pl") i dziedziczy wszystkie jego właściwości. Ma też następujące dodatkowe właściwości:

### Dane

Ground

* DANE**Object To Ground** (`Link`): Obiekt do zablokowania.
* DANE**Placement** (`Placement`): Tu część jest zakotwiona. Zobacz [Umiejscowienie](/Placement/pl "Placement/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly_ToggleGrounded/pl&oldid=1549893>"