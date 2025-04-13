---
title: Siatka Utwórz segmenty z najlepiej dopasowanych powierzchni
---
|  |
| --- |
| Siatka Utwórz segmenty z najlepiej dopasowanych powierzchni |
| Lokalizacja w menu |
| Siatki → Utwórz segmenty z najlepiej dopasowanych powierzchni ... |
| Środowisko pracy |
| [Siatka](/Mesh_Workbench/pl "Mesh Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Utwórz segmenty siatki](/Mesh_Segmentation/pl "Mesh Segmentation/pl") |
|  |

## Opis

Polecenie **Utwórz segmenty z najlepiej dopasowanych powierzchni** tworzy oddzielne segmenty siatki dla określonych typów powierzchni obiektu siatkowego. Polecenie może również zidentyfikować ich parametry, co może być przydatne podczas ponownego projektowania obiektu siatkowego.

## Użycie

1. Jeśli planujesz określić parametry typu powierzchni, zwróć uwagę, że polecenie używa koloru czerwonego do oznaczenia ścian wybranych dla tej opcji. Aby je prawidłowo zobaczyć:
   * WIDOK**Tryb wyświetlania** obiektu siatki idealnie powinien być ustawiony na `Cieniowany z krawędziami`, ale powinien przynajmniej pokazywać ściany. W razie potrzeby użyj polecenia [Styl kreślenia](/Std_DrawStyle/pl "Std DrawStyle/pl"), aby nadpisać tę właściwość.
   * WIDOK**Kolor kształtu** obiektu siatkowego nie powinien być czerwony.
2. Wybierz pojedynczy obiekt siatki.
3. Istnieje kilka sposobów wywołania polecenia:
   * Naciśnij przycisk ![](/images/Mesh_SegmentationBestFit.svg) **Utwórz segmenty z najlepiej dopasowanych powierzchni**.
   * Wybierz z menu opcję **Siatki → ![](/images/Mesh_SegmentationBestFit.svg) Utwórz segmenty z najlepiej dopasowanych powierzchni ...**.
4. Otwiera się panel zadań **Segmentacja siatki**.
5. Opcjonalnie naciśnij jeden z przycisków Parametry ..., aby określić parametry powierzchni:
   * Otwiera się okno dialogowe **Dopasowanie powierzchni**.
   * Wybierz jedną lub więcej ścian należących do powierzchni:
     + Naciśnij przycisk Obszar i trzymając wciśnięty lewy przycisk myszy narysuj w oknie [widoku 3D](/3D_view/pl "3D view/pl") region, czyli zamkniętą krzywa łamaną. Wybrane zostaną ściany, które (częściowo) mieszczą się wewnątrz obszaru.
     + Naciśnij przycisk Trójkąt, aby wybrać poszczególne ściany.
     + Opcjonalnie naciśnij przycisk Wyczyść, aby wyczyścić zaznaczenie.
   * Naciśnij przycisk Oblicz, aby dokonać obliczeń parametrów.
   * Naciśnij przycisk OK lub Anuluj, aby zamknąć okno dialogowe.
6. Wybierz typ*(y)* powierzchni, dla których chcesz utworzyć segmenty siatki:
   * **Płaszczyzna**
   * **Walec**
   * **Sfera**
7. Określ wartości **Tolerancji**.
8. Określ wartości **Minimalna liczba płaszczyzn**.
9. Naciśnij przycisk OK
10. Polecenie utworzy [grupę](/Std_Group/pl "Std Group/pl") zawierającą oddzielne obiekty siatkowe, każdy będący segmentem oryginalnego obiektu siatkowego.
11. Jeśli utworzona grupa jest pusta spróbuj użyć polecenia ponownie ze zmienionymi ustawieniami.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_SegmentationBestFit/pl&oldid=1333193>"