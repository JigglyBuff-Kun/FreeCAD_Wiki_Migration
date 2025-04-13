---
title: CAM Eksportuj szablon
---
|  |
| --- |
| CAM: Eksportuj szablon |
| Lokalizacja w menu |
| CAM → Eksportuj szablon |
| Środowisko pracy |
| [CAM](/CAM_Workbench/pl "CAM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Karta konfiguracji](/CAM_SetupSheet/pl "CAM SetupSheet/pl") |
|  |

## Opis

Narzędzie ![](/images/CAM_ExportTemplate.svg) Eksportuj szablon zapewnia wygodny mechanizm do zapisania powszechnie używanych definicji zadań z poziomu istniejącego zadania. Ułatwia to przygotowanie konfiguracji przyszłych zadań, które są w dużej mierze podobne, pozwalając na import szablonów zadań, podczas tworzenia zadania.

Opcja **Edycja → Preferencje ... → CAM → Ustawienia dla zadania → Ustawienia domyślne → Szablon** ustawia domyślny szablon.

## Użycie

1. Wybierz opcję **CAM → ![](/images/CAM_ExportTemplate.svg) Eksportuj szablon** z menu.
2. Zaznacz elementy do uwzględnienia z okna konfiguracyjnego polecenia **Eksportuj szablon**.
3. Szablon musi być zapisany w katalogu makr lub katalogu środowiska CAM, zgodnie z ustawieniami w [Preferencjach środowiska CAM](/CAM_Preferences/pl "CAM Preferences/pl").
4. Nazwa szablonu musi być zgodna ze wzorem job\_<nazwa szablonu>.json. W polu zaznaczenia przedrostek job\_ i rozszerzenie są pomijane.
5. Wciśnij przycisk OK i zapisz szablon.

## Opcje

## Post Processing

* Zaznaczenia postprocessora
* Argumenty postprocessora
* Nazwa pliku wyjściowego

## Półprodukt

* Zakres: rozmiar półproduktu
* Umiejscowienie: lokalizacja półproduktu

## Arkusz konfiguracji

* Wysokości operacji
* Głębokości operacji
* Prędkość posuwu szybkiego narzędzia

## Kontrolery narzędzi

* Wybrane kontrolery narzędzi

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_ExportTemplate/pl&oldid=1388792>"