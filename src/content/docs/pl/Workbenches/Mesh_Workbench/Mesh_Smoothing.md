---
title: Siatka Wygładź
---
|  |
| --- |
| Siatka: Wygładź |
| Lokalizacja w menu |
| Siatki → Wygładź ... |
| Środowisko pracy |
| [Siatka](/Mesh_Workbench/pl "Mesh Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Polecenie **Wygładź** wygładza obiekty siatkowe poprzez zmianę położenia ich wierzchołków.

![](/images/Meshes_Smooth.jpg)

Panel zadań wygładzania po wybraniu opcji Tylko wybór.

## Użycie

1. Jeśli planujesz określić parametry typu powierzchni, zwróć uwagę, że polecenie używa koloru czerwonego do oznaczenia ścian wybranych dla tej opcji. Aby je prawidłowo zobaczyć:
   * WIDOK**Tryb wyświetlania** obiektu siatki idealnie powinien być ustawiony na `Cieniowany z krawędziami`, ale powinien przynajmniej pokazywać ściany. W razie potrzeby użyj polecenia [Styl kreślenia](/Std_DrawStyle/pl "Std DrawStyle/pl"), aby nadpisać tę właściwość.
   * WIDOK**Kolor kształtu** obiektu siatkowego nie powinien być czerwony.
2. Wybierz jeden lub więcej obiektów siatki.
3. Istnieje kilka sposobów wywołania polecenia:
   * Naciśnij przycisk ![](/images/Mesh_Smoothing.svg) **Wygładź**
   * Wybierz **Siatki → ![](/images/Mesh_Smoothing.svg) Wygładź ...** opcję z menu.
4. Otworzy się panel zadań **Wygładzanie**.
5. Jeśli chcesz wygładzić tylko wybrane obszary: wybierz opcję **Tylko wybór**:
   * Do panelu zadań zostanie dodany panel **Zaznaczanie**.
   * Określ opcje regionu:
     + **Akceptuj tylko widoczne trójkąty**
     + **Akceptuj tylko trójkąty o normalnych ścian zwrócone w stronę ekranu**
   * Naciśnij przycisk Dodaj i trzymając wciśnięty lewy przycisk myszy narysuj obszar, zamkniętą krzywą łamaną, w oknie [widoku 3D](/3D_view/pl "3D view/pl"). Zostaną wybrane ściany, które odpowiadają opcjom obszaru i *(częściowo)* mieszczą się w tym obszarze.
   * Opcjonalnie naciśnij przycisk Wyczyść, aby wyczyścić zaznaczenie.
6. Wybierz **Metodę** wygładzania:
   * **Taubin**
   * **Laplace**
7. Podaj **Parametry**:
   * **Powtórzenia**: im wyższa ta liczba, tym gładszy efekt końcowy. Wartość ta ma również wpływ na całkowity czas przetwarzania polecenia. Unikaj wysokich wartości, jeśli obiekty siatki mają wiele punktów.
   * **λ**: wartość musi być z przedziału `0` - `1`.
   * **μ**: wartość musi być z przedziału `0` - `1`.
8. Naciśnij przycisk OK, aby zakończyć polecenie.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Smoothing/pl&oldid=1333194>"