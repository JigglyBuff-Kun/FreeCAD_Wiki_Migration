---
title: Projekt Części Przenieś ze starszej wersji
---
:::caution
To narzędzie jest przestarzałe, nie będzie dostępne od(wersja 1.0 i powyżej).
:::

|  |
| --- |
| Projekt Części: Przenieś ze starszej wersji |
| Lokalizacja w menu |
| Projekt Części → Przenieś ze starszej wersji ... |
| Środowisko pracy |
| [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| *brak* |
|  |

## Opis

Środowisko pracy Projekt Części w FreeCAD v0.17 wprowadza nowe narzędzia i elementy, które nie są rozpoznawane przez starsze wersje FreeCAD wersja 0.16 i poniżej. Dokumenty FreeCAD utworzone w starszych wersjach mogą być nadal otwierane i edytowane. Aby skorzystać z nowych funkcji, należy je zmigrować za pomocą funkcji z menu **Projekt Części → Przenieś ze starszej wersji**.

[dostępne w wersji 0.17](/Release_notes_0.17/pl "Release notes 0.17/pl")

## Użycie

1. Otwórz dokument FreeCAD, który został utworzony za pomocą FreeCAD wersja 0.16 i poniżej.
2. Przełącz się na środowisko pracy ![](/images/Workbench_PartDesign.svg) [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl").
3. Przejdź do menu **Projekt Części → Przenieś ze starszej wersji**.
4. Jeśli migracja się powiedzie, zostanie utworzony obiekt ![](/images/Std_Part.svg) [kontener](/Std_Part/pl "Std Part/pl"), który będzie zawierał jedną lub więcej ![](/images/PartDesign_Body.svg) [Zawartości](/PartDesign_Body/pl "PartDesign Body/pl"), z których każda będzie zawierała łańcuch cech.

## Ograniczenia

* Przed rozpoczęciem procesu migracji sprawdź, czy model został zbudowany z włączonymi opcjami automatycznego udoskonalania *(w menu **Edycja → Preferencje → Projekt Części → Ogólne**)* i odpowiednio ustaw swoje preferencje. Można to łatwo ustalić, sukcesywnie przełączając widoczność cech w drzewie modelu. Jeśli między elementami takimi jak Pads i Pockets nie pozostały żadne krawędzie, opcje automatycznego udoskonalania były wyłączone.
* Jeśli migrowany dokument zawiera tylko szkice i elementy środowiska pracy Projekt Części, proces migracji może zakończyć się powodzeniem. Niektóre funkcje, takie jak fazki i zaokrąglenia, mogą wymagać przebudowy.
* Jeśli migrowany dokument zawiera mieszany przepływ pracy w środowisku Część / Projekt Części, konwersja najprawdopodobniej zakończy się niepowodzeniem lub w najlepszym przypadku przyniesie nieoczekiwane rezultaty i będzie wymagać ręcznej migracji.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Migrate/pl&oldid=1459931>"