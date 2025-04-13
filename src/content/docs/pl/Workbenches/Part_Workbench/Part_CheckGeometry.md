---
title: Część Sprawdź geometrię
---
|  |
| --- |
| Część: Sprawdź geometrię |
| Lokalizacja w menu |
| Część → Sprawdź geometrię |
| Środowisko pracy |
| [Część](/Part_Workbench/pl "Part Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie ![](/images/Part_CheckGeometry.svg) **Sprawdź geometrię** uruchamia weryfikację i zgłasza, czy geometria jest prawidłową bryłą. Narzędzie sprawdza, czy [Odwzorowanie linii granicznych](https://en.wikipedia.org/wiki/Boundary_representation) *(BRep lub [B-rep](/Glossary/pl#B "Glossary/pl"))* modelu jest prawidłowe.

## Użycie

1. Wybierz część (pamiętaj, aby wybrać całą część, a nie tylko ścianę, aby sprawdzić poprawność bryły).
2. Wywołaj narzędzie poprzez
   * Kliknięcie przycisku ![](/images/Part_CheckGeometry.svg) **Sprawdź geometrię** dostępny na pasku narzędzi części.
   * Używając polecenia z menu **Część → ![](/images/Part_CheckGeometry.svg) Sprawdź geometrię**.
3. Otworzy się panel zadań **Ustawienia**, chyba że włączona jest opcja **Pomiń ustawienia**. Więcej informacji znajduje się w sekcji [Opcje](#Opcje). Kliknij przycisk Uruchom sprawdzanie.

Wyniki zostaną wyświetlone w [Panelu zadań](/Task_panel/pl "Task panel/pl"). Jeśli kontrola wykazała błędy: kliknij w raporcie na konkretny komunikat o błędzie, a odpowiadający mu obiekt geometryczny *(krawędź, ściana itp.)* zostanie podświetlony w oknie [widoku 3D](/3D_view/pl "3D view/pl").

## Opcje

### Pomiń ustawienia

Jeśli opcja ta jest zaznaczona, kolejne wywołania narzędzia pomijają wyświetlanie panelu zadań **Ustawienia**.

### Kontrola operacji logicznych

Jeśli opcja ta jest zaznaczona, dodatkowo wykonywana jest kontrola operacji logicznych *(**B**oolean **OP**erations BOP)*.

### Zapisywanie błędów

Jeśli opcja ta jest zaznaczona, wszelkie znalezione błędy są również rejestrowane w oknie [widoku raportów](/Report_view/pl "Report view/pl").

## Zawartość kształtu

Oprócz wykrywania potencjalnych błędów geometrii, narzędzie to wyświetla szereg właściwości dotyczących wybranego obiektu:

* Sprawdzony obiekt
* Typ kształtu
* Liczba elementów geometrycznych: wierzchołki, krawędzie, polilinie, ściany, powłoki, bryły, bryły złożone, złożenia, suma kształtów.
* Właściwości geometryczne i właściwości masy:
  + Powierzchnia,
  + Objętość,
  + Masa,
  + Długość,
  + Środek masy,
  + Orientacja,
  + Oś symetrii,
  + Punkt symetrii,
  + Momenty,
  + Pierwsza oś bezwładności,
  + Druga oś bezwładności,
  + Trzecia oś bezwładności,
  + Promień bezwładności,
  + Globalne umiejscowienie.

## Uwagi

* Obiekty [połączone](/App_Link/pl "App Link/pl") z odpowiednimi typami obiektów i kontenery środowiska [Część](/App_Part/pl "App Part/pl") z odpowiednimi widocznymi obiektami wewnątrz mogą być również sprawdzane za pomocą tego narzędzia. W przypadku [powiązań](/App_Link/pl "App Link/pl") sprawdzany jest kształt połączonego obiektu. W przypadku kontenerów środowiska [Część](/App_Part/pl "App Part/pl") widoczne obiekty wewnątrz są sprawdzane jako złożenia. [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl")
* FreeCAD nie posiada metod automatycznej naprawy geometrii. Jeśli wykryte zostaną błędy, kroki związane z tworzeniem modelu muszą zostać sprawdzone i naprawione przez użytkownika.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_CheckGeometry/pl&oldid=1468179>"