---
title: Krzywe Sprężyna ściskająca
---
|  |
| --- |
| Krzywe: Sprężyna ściskająca |
| Lokalizacja w menu |
| Surfaces → Compression Spring |
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

Narzędzie ![](/images/Curves_CompressionSpring.svg) **Sprężyna ściskająca** tworzy sprężynę ściskającą.

## Użycie

1. Istnieje kilka sposobów na wywołanie tego polecenia:
   * Naciśnij przycisk ![](/images/Curves_CompressionSpring.svg) [Compression Spring](/Curves_CompressionSpring "Curves CompressionSpring").
   * Wybierz opcję **Surfaces → ![](/images/Curves_CompressionSpring.svg) Compression Spring** z menu.
2. Utworzony zostanie obiekt **CompSpring** pokazujący tylko szkielet (polilinię).
3. Opcjonalnie edytuj wartości w [Edytorze właściwości](/Property_editor/pl "Property editor/pl") aby wyświetlić bryłę i dostosuj powiązane właściwości (zobacz Właściwości poniżej).

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt **CombSpring** wywodzi się z obiektu [App: Właściwości Python](/App_FeaturePython/pl "App FeaturePython/pl") i dziedziczy wszystkie jego właściwości. Ma też następujące dodatkowe właściwości:

### Dane

Comp Spring

* DANE**Diameter** (`Float`): Średnica sprężyny.
* DANE**Length** (`Float`): Długość sprężyny.
* DANE**Reverse Helix** (`Bool`): Lewoskrętna jeśli {TRUE/pl}.
* DANE**Turns** (`Integer`): Liczba skrętów.
* DANE**Wire Diameter** (`Float`): Średnica drutu sprężyny.

Setting

* DANE**Flatness** (`Integer`): Płaskość końców sprężyny od 0 do 4.
* DANE**Wire Output** (`Bool`): Wygeneruj kształt polilinii.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_CompressionSpring/pl&oldid=1566244>"