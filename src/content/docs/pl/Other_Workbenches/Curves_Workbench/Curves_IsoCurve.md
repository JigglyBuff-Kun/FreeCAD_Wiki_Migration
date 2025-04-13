---
title: Krzywe Krzywa ISO
---
|  |
| --- |
| Krzywe: Krzywa ISO |
| Lokalizacja w menu |
| Surfaces → IsoCurve |
| Środowisko pracy |
| [Krzywe](/Curves_Workbench/pl "Curves Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Połacz krzywe](/Curves_JoinCurve/pl "Curves JoinCurve/pl") |
|  |

## Opis

Polecenie ![](/images/Curves_IsoCurve.svg) **Krzywa ISO** nakłada siatkę zorientowaną w UV na wybrane powierzchnie.

![](/images/Curves_IsoCurve_Demo.jpg)

Powyżej: pokazuje powierzchnię przed *(po lewej)* i po *(po prawej)* użyciu narzędzia

## Użycie

1. Wybierz jedną lub więcej ścian w [widoku 3D](/3D_view/pl "3D view/pl").
2. Istnieje kilka sposobów na wywołanie tego narzędzia:
   * Naciśnij przycisk ![](/images/Curves_IsoCurve.svg) [IsoCurve](/Curves_IsoCurve "Curves IsoCurve").
   * Wybierz opcję **Surfaces → ![](/images/Curves_IsoCurve.svg) IsoCurve** z menu.
3. Dla każdej wybranej ściany zostanie utworzony obiekt **IsoCurve**, nakładając siatkę zorientowaną w UV na każdą ścianę.
4. Opcjonalnie edytuj wartości w [Edytorze właściwości](/Property_editor/pl "Property editor/pl") aby zmienić liczbę krzywych iso wzdłuż kierunków U i V i dostosować powiązane właściwości (zobacz Właściwości poniżej).

## Uwagi

* Krzywe można wyodrębnić jako elementy podrzędne *(np. za pomocą narzędzia [Połącz krzywą](/Curves_JoinCurve/pl "Curves JoinCurve/pl"))* do innych zastosowań lub po prostu w celu wizualizacji kształtu.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt **IsoCurve** wywodzi się z obiektu [App: Właściwości Python](/App_FeaturePython/pl "App FeaturePython/pl") i dziedziczy wszystkie jego właściwości. Ma też następujące dodatkowe właściwości:

### Dane

Krzywa iso

* DANE**Face** (`LinkSub`): Ściana wejściowa.
* DANE**Mode** (`Enumeration`): Liczba krzywych iso.
  + `Multi` (domyślnie): ...
  + `Single`: ...
* DANE**Number U** (`Integer`): Liczba krzywych iso w kierunku U.
* DANE**Number V** (`Integer`): Liczba krzywych iso w kierunku V.
* DANE**Orientation** (`Enumeration`): Orientacja krzywej.
  + `U` (domyślnie): ...
  + `V`: ...
* DANE**Parameter** (`Float`): Parametr krzywej iso.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_IsoCurve/pl&oldid=1567227>"