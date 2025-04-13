---
title: Siatka Usuń elementy
---
|  |
| --- |
| Siatka: Usuń fragmenty |
| Lokalizacja w menu |
| Siatki → Usuń fragmenty ... |
| Środowisko pracy |
| [Siatka](/Mesh_Workbench/pl "Mesh Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Usuń elementy interaktywnie](/Mesh_RemoveCompByHand/pl "Mesh RemoveCompByHand/pl"), [Podziel siatkę](/Arch_SplitMesh/pl "Arch SplitMesh/pl") |
|  |

## Opis

Polecenie **Usuń fragmenty** usuwa ściany z obiektów siatkowych.

![](/images/Meshes_RemoveComponents.jpg)

Panel zadań Usuń fragmenty

## Użycie

1. Polecenie używa koloru czerwonego do zaznaczenia wybranych ścian. Aby zobaczyć je poprawnie:
   * WIDOK**Tryb wyświetlania** obiektów siatki powinien być ustawiony na `Linie płaskie`, ale powinien przynajmniej pokazywać ściany. W razie potrzeby użyj polecenia [Styl kreślenia](/Std_DrawStyle/pl "Std DrawStyle/pl"), aby nadpisać tę właściwość.
   * WIDOK**Kolor kształtu** obiektów siatki nie powinien być czerwony.
2. Istnieje kilka sposobów na wywołanie polecenia:
   * Naciśnij przycisk ![](/images/Mesh_RemoveComponents.svg) **Usuń fragmenty ...**.
   * Wybierz z menu opcję **Siatki → ![](/images/Mesh_RemoveComponents.svg) Usuń fragmenty ...**.
3. Otwiera się panel zadań **Usuń fragmenty**.
4. Użyj jednej lub więcej opcji **Wybierz**, aby wybrać ściany:
   * Naciśnij przycisk Obszar i trzymając wciśnięty lewy przycisk myszki narysuj zakres, zamkniętą łamaną w oknie [widoku 3D](/3D_view/pl "3D view/pl"). Zostaną wybrane ściany, które pasują do opcji **Obszar** i *(częściowo)* mieszczą się wewnątrz regionu.
   * Naciśnij przycisk Wszystkie, aby wybrać wszystkie ściany.
   * Naciśnij przycisk Fragmenty, aby wybrać wszystkie fragmenty z mniejszą niż określona maksymalną liczbą powierzchni. W tym miejscu fragment odnosi się do kompletnej grupy połączonych powierzchni. Zazwyczaj obiekt siatki zawiera pojedynczy fragment. Ale, na przykład po użyciu polecenia [Scal](/Mesh_Merge/pl "Mesh Merge/pl"), obiekt siatki może zawierać wiele fragmentów.
   * Naciśnij przycisk Wybierz trójkąt, aby wybrać pojedynczą ściankę w widoku 3D. Jeśli opcja **Akceptuj tylko widoczne trójkąty** jest zaznaczona, wybranie ścian spowoduje wybranie całego fragmentu, do którego należy ściana.
5. Opcjonalnie użyj jednej lub więcej opcji **Odznacz** aby odznaczyć ściany. Opcje te są identyczne jak opcje **Zaznacz**, z wyjątkiem tego, że liczba ścian dla przycisku Fragmenty jest liczbą minimalną.
6. Opcjonalnie naciśnij przycisk Odwróć wybór, aby odwrócić wybór.
7. Naciśnij przycisk Usuń, aby usunąć wybrane ściany.
8. Naciśnij przycisk Zamknij, aby zamknąć panel zadań i zakończyć wykonywanie polecenia.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_RemoveComponents/pl&oldid=1333186>"