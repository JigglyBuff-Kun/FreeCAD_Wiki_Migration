---
title: Siatka Utwórz segmenty siatki
---
|  |
| --- |
| Siatki Utwórz segmenty siatki |
| Lokalizacja w menu |
| Siatki → Utwórz segmenty siatki ... |
| Środowisko pracy |
| [Siatka](/Mesh_Workbench/pl "Mesh Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Utwórz segmenty z najlepiej dopasowanych powierzchni](/Mesh_SegmentationBestFit/pl "Mesh SegmentationBestFit/pl") |
|  |

## Opis

Polecenie **Utwórz segmenty siatki** tworzy oddzielne segmenty siatki dla określonych typów powierzchni obiektu siatkowego.

## Użycie

1. Zaznacz pojedynczy obiekt siatki.
2. Polecenie można wywołać na kilka sposobów:
   * Naciśnij przycisk ![](/images/Mesh_Segmentation.svg) **Utwórz segmenty siatki**.
   * Wybierz z menu polecenie **Siatki → ![](/images/Mesh_Segmentation.svg) Utwórz segmenty siatki ...**.
3. Otworzy się panel zadań **Segmentacja siatki**.
4. Opcjonalnie zaznacz **Wygładź siatkę** i określ wartość gładkości siatki. Im wyższa wartość, tym gładsza będzie siatka. Podanie wartości `0` ma taki sam efekt jak odznaczenie tej opcji. Nie zaznaczaj tej opcji, jeśli chcesz tworzyć segmenty planarne.
5. Wybierz typ powierzchni, dla której chcesz utworzyć segmenty siatki. Możesz wybrać więcej niż jeden typ, ale może to prowadzić do gorszych rezultatów. Dostępne typy powierzchni to:
   * **Płaszczyzna**
   * **Walec**
   * **Sfera**
   * **Układ dowolny**
6. Określ wymagane ustawienia. Upewnij się, że wartości **Tolerancji** nie są zbyt niskie, a wartości **Minimalna liczba płaszczyzn** nie są zbyt wysokie.
7. Naciśnij przycisk OK.
8. Polecenie utworzy [grupę](/Std_Group/pl "Std Group/pl") zawierającą oddzielne obiekty siatkowe, każdy będący segmentem oryginalnego obiektu siatkowego.
9. Jeśli utworzona grupa jest pusta spróbuj użyć polecenia ponownie ze zmienionymi ustawieniami.

## Uwagi

* Obecna wersja polecenia ma problemy z rozpoznawaniem ścian na krawędziach typów powierzchni.
* W niektórych przypadkach polecenie [Utwórz segmenty z najlepiej dopasowanych powierzchni](/Mesh_SegmentationBestFit/pl "Mesh SegmentationBestFit/pl") da lepsze rezultaty.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Segmentation/pl&oldid=1333191>"