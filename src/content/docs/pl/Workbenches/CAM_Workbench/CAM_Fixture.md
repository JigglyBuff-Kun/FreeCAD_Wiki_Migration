---
title: CAM Uchwyt
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| CAM: Mocowanie |
| Lokalizacja w menu |
| CAM → Polecenia dodatkowe → Uchwyt |
| Środowisko pracy |
| [CAM](/CAM_Workbench/pl "CAM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie ![](/images/CAM_Fixture.svg) Uchwyt ustawia mocowanie odsuniętego układu współrzędnych roboczych kontrolera CNC obrabiarki.

Docelowe współrzędne odsunięcia współrzędnych roboczych zwykle zawierają: mocowania G53 do G59. Kod G-code to po prostu mocowanie (G53, G54, etc...). Mocowania odsuniętego układu współrzędnych przedstawiają:

* G53 → Układ współrzędnych obrabiarki.
* G54 → Układ współrzędnych brudnopisu.
* G55 to G59.9 → Mocowania współrzędnych pozwalające na odsunięcia robocze, względne do przełączników naprowadzających zlokalizowanych na obrabiarce CNC jakie mają być użyte.

Mocowanie G59 jest używane do rozszerzenia dostępnych mocowań. Zaimplementowany stopień rozszerzalności zależy od obrabiarki CNC a to polecenie pozwala na G59.1 do G59.9.

## Użycie

1. Wciśnij przycisk ![](/images/CAM_Fixture.svg) Uchwyt lub użyj skrótu klawiszowego P a następnie F.
2. Wybierz żądane mocowanie odsunięcia roboczego z listy rozwijanej.

## Właściwości

* DANE**Fixture**: Ustawia aktualny punkt mocowania
* DANE**Active**: Definiuje czy to polecenie jest aktywne czy nie podczas wstawiania do złożenia

## Uwagi

## Ograniczenia

## Tworzenie skryptów

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Fixture/pl&oldid=1479870>"