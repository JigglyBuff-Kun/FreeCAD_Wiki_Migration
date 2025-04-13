---
title: CAM Funkcje eksperymentalne
---
## Opis

Środowisko pracy CAM zawiera zestaw ukrytych poleceń. Są one domyślnie ukryte, ponieważ są eksperymentalne. Polecenie może być uznane za eksperymentalne z jednego z następujących powodów:

* Jest niekompletne.
* Jest pełne błędów.
* Jest niestabilne.
* Nie tworzy poprawnych, stabilnych, bezpiecznych ścieżek.
* Nie jest standardowym, regularnie używanym poleceniem w tradycyjnym obiegu CAM.
* Jest dojrzałe, ale nie zostało jeszcze przeniesione na listę narzędzi standardowych.
* ... inne powody.

## Wyłączenie poleceń eksperymentalnych

Aby uzyskać dostęp do ukrytych poleceń eksperymentalnych środowiska pracy CAM, użytkownik musi je włączyć w [edytorze parametrów](/Std_DlgParameter/pl "Std DlgParameter/pl").

1. Otwórz [edytor parametrów](/Std_DlgParameter/pl "Std DlgParameter/pl") za pomocą polecenia **Przybory → Edycja Parametrów ...**.
2. Po wejściu do edytora ścieżka to **BaseApp → Preferences → Mod → CAM**.
3. Aby włączyć polecenia [CAM: Obszar](/CAM_Area/pl "CAM Area/pl") i [CAM: Obszar płaszczyzny roboczej](/CAM_Area_Workplane/pl "CAM Area Workplane/pl"):
   * Kliknij prawym przyciskiem myszy w obszarze listy parametrów i wybierz z menu podręcznego pozycję **Nowy element z wartością logiczną**.
   * Nadaj nazwę nowemu parametrowi: `EnableAdvancedOCLFeatures` *(z uwzględnieniem wielkości liter)*.
   * Ustaw jego wartość na: `True`.
4. Aby włączyć pozostałe polecenia eksperymentalne:
   * Ponownie wybierz z menu podręcznego pozycję **Nowy element z wartością logiczną**.
   * Nadaj nowemu parametrowi nazwę: `EnableExperimentalFeatures` *(z uwzględnieniem wielkości liter)*.
   * Ustaw jego wartość na: `True`.
5. Zapisz ustawienia.
6. Uruchom ponownie program FreeCAD.

## Informacje dodatkowe

Więcej informacji o konkretnych poleceniach eksperymentalnych można znaleźć na stronach [Wiki powiązanych z tematem](https://www.freecadweb.org/wiki/Special:WhatLinksHere/CAM_experimental).

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_experimental/pl&oldid=1388781>"