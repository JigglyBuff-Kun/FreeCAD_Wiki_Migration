---
title: Krzywe Podziel powierzchnię
---
|  |
| --- |
| Krzywe: Podziel powierzchnię |
| Lokalizacja w menu |
| Surfaces → Segment surface |
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

Narzędzie ![](/images/Curves_SegmentSurface.svg) **Podziel powierzchnię** pozwala na segmentację powierzchni na krzywych iso.

## Użycie

1. Wybierz ścianę w [widoku 3D](/3D_view/pl "3D view/pl").
2. Istnieje kilka sposobów na wywołanie tego polecenia:
   * Naciśnij przycisk ![](/images/Curves_SegmentSurface.svg) Segment surface.
   * Wybierz opcję **Surfaces → ![](/images/Curves_SegmentSurface.svg) Segment surface** z menu.
3. Utworzony zostanie obiekt **Segment\_Surface**.
4. Opcjonalnie edytuj wartości w [Edytorze właściwości](/Property_editor/pl "Property editor/pl") aby dostosować powiązane właściwości (zobacz Właściwości poniżej).

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt **Segment\_Surface** wywodzi się z obiektu [App: Właściwości Python](/App_FeaturePython/pl "App FeaturePython/pl") i dziedziczy wszystkie jego właściwości. Ma też następujące dodatkowe właściwości:

### Dane

Podstawa

* DANE**Option** (`Enumeration`): Lista opcji.
  + `Custom` (domyślnie): ...
  + `Auto`: ...
* DANE**Source** (`LinkSub`): Początkowa ściana.

Option Auto

* DANE**Direction** (`Enumeration`): Kierunek segmentacji.
  + `U` (domyślnie): ...
  + `V`: ...
  + `Both`: ...

UDirection

* DANE**Knots U** (`FloatList`): Parametry dzielenia w kierunku U.
* DANE**Knots UProvider** (`Link`): Obiekt generujący znormalizowane parametry w kierunku U.
* DANE**Number U** (`Integer`): Podziel zakres parametru U na podaną liczbę segmentów.

VDirection

* DANE**Knots V** (`FloatList`): Parametry dzielenia w kierunku V.
* DANE**Knots VProvider** (`Link`): Obiekt generujący znormalizowane parametry w kierunku V.
* DANE**Number V** (`Integer`): Podziel zakres parametru V na podaną liczbę segmentów.

## Tworzenie skryptów

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_SegmentSurface/pl&oldid=1567217>"