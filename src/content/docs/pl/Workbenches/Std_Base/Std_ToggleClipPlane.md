---
title: Std Przełącz płaszczyznę tnącą
---
|  |
| --- |
| Płaszczyzna przecinająca |
| Lokalizacja w menu |
| Widok → Płaszczyzna tnąca‏‎ |
| Środowisko pracy |
| wszystkie |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Wycinek przekroju](/Part_SectionCut/pl "Part SectionCut/pl") |
|  |

## Opis

Polecenie przełącz *Płaszczyznę przecinającą* tymczasowo ukrywa obiekty i ich części po jednej stronie maksymalnie trzech wirtualnych płaszczyzn w aktywnym [widoku 3D](/3D_view/pl "3D view/pl").

![](/images/Std_ToggleClipPlane_example.png)

Przycięty pusty obiekt.

![](/images/Std_ToggleClipPlane_Dialog.png)

Okienko dialogowe funkcji przycinania

## Użycie

1. Wybierz z menu opcję **Widok → ![](/images/Std_ToggleClipPlane.svg) Płaszczyzna tnąca**.
2. Zostanie otwarte okno dialogowe Przycinania.
3. Wykonaj jedną z poniższych czynności:
   * Zaznacz jedno lub więcej pól wyboru ![](/images/CheckBoxTrue.svg) Utnij względem X do ![](/images/CheckBoxTrue.svg) Utnij względem Z.
     + Opcjonalnie zmień odległość odsunięcia.
     + Opcjonalnie wciśnij przycisk(i) Obróć, aby zmienić stronę płaszczyzny przycinania, na której obiekty są ukryte.
   * Zaznacz pole wyboru ![](/images/CheckBoxTrue.svg) Przycinanie względem dowolnego kierunku.
     + Opcjonalnie zmień odległość odsunięcia.
     + Wykonaj jedną z poniższych czynności:
       - Naciśnij przycisk Widok, aby użyć kierunku bieżącego widoku.
       - Zaznacz pole wyboru ![](/images/CheckBoxTrue.svg) Dostosuj do kierunku wyświetlania, aby użyć kierunku, który dynamicznie dostosowuje się do zmian widoku.
       - Określ kierunek, wprowadzając współrzędne X, Y i Z wektora normalnego.
4. Opcjonalnie zmień widok, aby sprawdzić model.
5. Wciśnij przycisk Zamknij, aby zamknąć panel zadań i zakończyć polecenie.

## Uwagi

* Aby wyraźnie odróżnić wnętrze częściowo przyciętych przedmiotów, należy zmienić ich właściwość WIDOK**Lighting** na `One side`. Kolor wewnętrznej strony ich powierzchni będzie wtedy zależał od ustawień podświetlenia: **Edycja → Preferencje → Wyświetlanie → Widok 3D → Włącz podświetlenie - Intensywność podświetlenia**. Zobacz [Edytor ustawień](/Preferences_Editor/pl#3D_View "Preferences Editor/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ToggleClipPlane/pl&oldid=1468637>"