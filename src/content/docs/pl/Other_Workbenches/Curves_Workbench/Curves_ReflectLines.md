---
title: Krzywe Linie odbicia
---
|  |
| --- |
| Curves ReflectLines |
| Menu location |
| Surfaces → Reflect Lines |
| Workbenches |
| [Krzywe](/Curves_Workbench/pl "Curves Workbench/pl") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Opis

Narzędzie ![](/images/Curves_ReflectLines.svg) **Krzywe odbicia** tworzy linie odbicia na kształcie zgodnie z kierunkiem widoku.

## Użycie

1. Wybierz obiekt.
2. Istnieje kilka sposobów na wywołanie tego polecenia:
   * Naciśnij przycisk ![](/images/Curves_ReflectLines.svg) Reflect Lines.
   * Wybierz opcję **Surfaces → ![](/images/Curves_ReflectLines.svg) Reflect Lines** z menu.
3. Jeśli wybrany obiekt nie jest obiektem **ReflectLines**, utworzony zostanie obiekt **ReflectLines**.
4. Kierunek widoku obiektu ReflectLines zostanie ustawiony zgodnie z bieżącym kierunkiem kamery.
5. Opcjonalnie edytuj wartości w [Edytorze właściwości](/Property_editor/pl "Property editor/pl") aby wybrać linie do utworzenia i gdzie są umieszczane oraz dostosować powiązane właściwości (zobacz Właściwości poniżej).

## Uwagi

* Jeśli właściwość DANE**On Shape** jest ustawiona na `Prawda`, linie będą NA kształcie wejściowym (właściwości DANE**View Pos** i DANE**Up Dir** nie będą używane).  
  W innym wypadku, linie będą na płaszczyźnie XY.
* Jeśli właściwość WIDOK**TrackCamera** jest ustawiona na `Prawda`, kierunek widoku będzie aktualizowany w odpowiedzi na ruchy kamery.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt **ReflectLines** wywodzi się z obiektu [App: Właściwości Python](/App_FeaturePython/pl "App FeaturePython/pl") i dziedziczy wszystkie jego właściwości. Ma też następujące dodatkowe właściwości:

### Widok

AutoView

* WIDOK**TrackCamera** (`Bool`): Śledź ruchy kamery

### Dane

Opcje czyszczenia

* DANE (Hidden)**Cleaning Tolerance** (`Quantity`): Tolerancja czyszczenia dla wykrywania duplikatów.
* DANE**Remove Duplicates** (`Bool`): Usuń zduplikowane krawędzie.
* DANE (Hidden)**Samples** (`Integer`): Liczba próbek krawędzi.

Typ krawędzi

* DANE**Iso Line** (`Bool`): Linie izoparametryczne.
* DANE**Out Line** (`Bool`): Linie sylwetki.
* DANE**Rg1 Line** (`Bool`): gładka krawędź o ciągłości G1 między dwiema powierzchniami.
* DANE**RgN Line** (`Bool`): szyta krawędź o ciągłości CN na powierzchni.
* DANE**Sharp** (`Bool`): ostra krawędź (o ciągłości C0).

Reflect Lines

* DANE**Indiv Faces** (`LinkSubList`): Pojedyncze ściany.
* DANE**On Shape** (`Bool`): Wygeneruj linie 3D na kształcie.
* DANE**Source** (`Link`): Obiekt źródłowy.
* DANE (Hidden)**Up Dir** (`Vector`): Kierunek Góra.
* DANE**View Dir** (`Vector`): Kierunek widoku.
* DANE (Hidden)**View Pos** (`Vector`): Pozycja widoku.
* DANE**Visible** (`Bool`): Wygeneruj widoczne lub ukryte linie.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_ReflectLines/pl&oldid=1566746>"