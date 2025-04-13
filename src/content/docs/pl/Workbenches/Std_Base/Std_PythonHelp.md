---
title: Std Pomoc dla środowiska Python
---
|  |
| --- |
| Std: Pomoc dla środowiska Python |
| Lokalizacja w menu |
| Pomoc → Dokumentacja automatyczna modułów Python |
| Środowisko pracy |
| wszystkie |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Dokumentacja skryptów środowiska Python](/Std_FreeCADPowerUserHub/pl "Std FreeCADPowerUserHub/pl") |
|  |

## Opis

Polecenie **Dokumentacja skryptów środowiska Python** uruchamia serwer WWW, który komunikuje się z domyślną przeglądarką internetową systemu przez *local socket*. Serwer WWW wyświetla informacje o dostępnych modułach środowiska [Python](/Python/pl "Python/pl"), klasach i funkcjach programu FreeCAD. Żądane strony są generowane automatycznie.

Serwer internetowy jest oparty na module Python [pydoc](https://docs.python.org/3.8/library/pydoc.html#module-pydoc), dzięki czemu wydobywa "docstringi" plików Pythona (\*.py) oraz dokumentację tekstową zdefiniowaną w "wrapperach" Pythona (\*.xml), które odsłaniają leżący u ich podstaw kod C++.

## Użycie

1. Wybierz z menu opcję **Pomoc → ![](/images/Std_PythonHelp.svg) Dokumentacja automatycznych modułów Python**.
2. Kliknij dowolny z linków, aby przejść do dokumentacji konkretnej klasy lub funkcji.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_PythonHelp/pl&oldid=1462483>"