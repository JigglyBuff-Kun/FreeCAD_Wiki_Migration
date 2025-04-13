---
title: Część Rzutowanie na powierzchnię
---

|                                                 |
| ----------------------------------------------- |
| Część: Rzutowanie na powierzchnię               |
| Lokalizacja w menu                              |
| Część → Utwórz rzut na powierzchni ...          |
| Środowisko pracy                                |
| [Część](/Part_Workbench/pl "Part Workbench/pl") |
| Domyślny skrót                                  |
| _brak_                                          |
| Wprowadzono w wersji                            |
| 0.19                                            |
| Zobacz także                                    |
| _brak_                                          |
|                                                 |

## Opis

Funkcja ![](/images/Part_ProjectionOnSurface.svg) **Utwórz rzut na powierzchni** służy do rzutowania [kształtu](/Shape/pl "Shape/pl") na powierzchnię innego obiektu. Można użyć tej funkcji do rzutowania logo lub obiektu tekstowego _(patrz ![](/images/Draft_ShapeString.svg) [Kształt z tekstu](/Draft_ShapeString/pl "Draft ShapeString/pl"))_ na różne powierzchnie, aby stworzyć interesujące efekty.

Biorąc pod uwagę [kształt](/Shape/pl "Shape/pl"), źródłowy narzędzie to może rzutować z niego krawędzie, polilinie _(zamknięte krawędzie)_ lub całe powierzchnie. Rezultatem mogą być nowe krawędzie, nowe polilinie, nowe powierzchnie, a nawet nowe wytłoczone bryły, które mogą być użyte w ![](/images/Part_Boolean.svg) [operacjach logicznych](/Part_Boolean/pl "Part Boolean/pl") do uzyskiwania efektów takich jak grawerowanie czy stemplowanie.

![](/images/Part_ProjectionOnSurface1.png) ![](/images/Part_ProjectionOnSurface2.png)

Rzutowanie logo na zakrzywionej powierzchni.

## Użycie

1. Upewnij się, że masz co najmniej dwa obiekty w swoim dokumencie; obiekt "źródłowy", który chcesz rzutować, oraz obiekt "docelowy", na który rzut zostanie wykonany.
2. Kliknij na przycisk ![](/images/Part_ProjectionOnSurface.svg) Rzutowanie na powierzchnię, aby uruchomić [panel zadań](/Task_panel/pl "Task panel/pl") z różnymi opcjami.
3. Kliknij na przycisk Wybierz powierzchnie rzutowania, a następnie kliknij na "docelową" powierzchnię, na której zostanie utworzony rzut.
4. Następnie kliknij na określony przycisk, aby wybrać typ elementu podrzędnego, który chcesz dodać do obiektu rzutu.
   - Dodaj powierzchnię: wybierz powierzchnię źródłową.
   - Dodaj zamknięte krawędzie: wybierz krawędź źródłową. Narzędzie wyodrębni całą zamkniętą krawędź, do której należy dana krawędź. Na przykład wybranie pojedynczej krawędzi wielokąta spowoduje rzutowanie całego wielokąta.
   - Dodaj krawędź: wybierz krawędź źródłową. Narzędzie będzie rzutować tylko wybraną krawędź.
   - Gdy przycisk jest wciśnięty, wybierz element podrzędny w oknie [widoku 3D](/3D_view/pl "3D view/pl"). Jeśli chcesz go odznaczyć, wybierz ponownie ten sam element.
   - Po dokonaniu wyboru naciśnij ten sam przycisk Dodaj ..., aby wyjść z trybu wyboru.
5. Następnie kliknij odpowiednie pole wyboru, aby wybrać typ kształtu rzutu, który chcesz utworzyć.
   - ![](/images/RadioButtonTrue.svg) Wyświetl wszystko: pokaże wszystkie typy zamkniętych linii i krawędzi na powierzchni docelowej. Jeśli w poprzednim kroku został wybrany element podrzędny "powierzchnia czołowa", to w zależności od wartości parametru **Wysokość wyciągnięcia** zostanie pokazany podgląd bryły wyciągniętej z rzutu.
   - ![](/images/RadioButtonTrue.svg) Pokaż powierzchnie: wyświetli podgląd wypełnionej powierzchni docelowej. Będzie to działać tylko jeśli w poprzednim kroku wybrałeś element podrzędny "powierzchnia". Jeśli wybrałeś "zamknięty krawędzie", tylko krawędzie _(bez powierzchni)_ zostaną utworzone jako rzut. Jeśli wybrałeś "krawędź", tylko krawędzie zostaną utworzone jako rzut.
   - ![](/images/RadioButtonTrue.svg) Pokaż krawędzie: pokaże podgląd krawędzi na powierzchni docelowej. Opcja działa niezależnie od tego, czy w poprzednim kroku dodałeś element podrzędny "powierzchnie", "krawędzie zamknięte", czy "krawędzie". Nawet jeśli dodałeś wypełnioną "powierzchnię", tylko krawędzie zostaną utworzone jako rzut.
6. Naciśnij przycisk OK, aby zakończyć operację i utworzyć nowy obiekt rzutowania.

Uwagi:

- Kierunek rzutowania jest automatycznie pobierany z kierunku ujęcia widoku w oknie [widoku 3D](/3D_view/pl "3D view/pl") w momencie uruchomienia narzędzia.
- Aby zmienić kierunek, przesuń ujęcie widoku i naciśnij Pobierz aktualne ujęcie widoku.
- Możesz też nacisnąć przyciski X:, Y: lub Z:, aby ustawić kierunek rzutowania na główne osie globalne, +X, -X, +Y, -Y, +Z lub -Z.
- Aby to zrobić, musisz ponownie wybrać geometrię, naciskając przyciski Dodaj ... i wybierając ponownie elementy podrzędne.

## Opcje

- **Wysokość wyciągnięcia**: jest to wysokość bryły, która zostanie utworzona przez wyciągnięcie rzutowanej powierzchni, od powierzchni docelowej i wzdłuż ujemnej wartości kierunku rzutowania. Na przykład, jeśli kierunek rzutowania jest wzdłuż osi +Y `(0, 1, 0)`, to bryła zostanie utworzona w kierunku -Y `(0, -1, 0)`. To wyciągnięcie bryły zostanie utworzone tylko wtedy, gdy wybrany element podrzędny był zamkniętą ścianą, po naciśnięciu przycisku Dodaj powierzchnię i wybraniu opcji ![](/images/RadioButtonTrue.svg) Wyświetl wszystko.
- **Głębokość bryły**: jest to odległość, o jaką obiekt rzutowania jest przesuwany wzdłuż kierunku rzutowania. Wartości ujemne spowodują przesunięcie obiektu w przeciwnym kierunku; pozwala to na tworzenie rzutów, które są przesunięte względem powierzchni docelowej.

## Ograniczenia

Algorytm rzutowania czasami nie jest w stanie utworzyć poprawnej powierzchni rzutowania. Jeśli tak się stanie, nie będzie można utworzyć również wyciągnięcia bryły.

Jeśli tak się stanie:

- Sprawdź, czy twoja powierzchnia źródłowa jest poprawna; spróbuj uruchomić narzędzie ![](/images/Part_CheckGeometry.svg) [Sprawdź geometrię](/Part_CheckGeometry/pl "Part CheckGeometry/pl") w poszukiwaniu wskazówek.
- Sprawdź, czy kierunek rzutowania jest poprawny. Czy powierzchnia źródłowa może być realistycznie rzutowana na powierzchnię docelową? Czy rzut prosty trafiłby w powierzchnię? Ustaw ujęcie widoku tak, aby powierzchnia źródłowa znajdowała się przed powierzchnią docelową, a następnie spróbuj ponownie.
- Spróbuj użyć opcji ![](/images/RadioButtonTrue.svg) Wyświetl krawędzie. Czy krawędzie są wyświetlane poprawnie? Spróbuj ręcznie odtworzyć krawędzie na powierzchni.

Rzutowanie wykonane w środowisku pracy Część nie jest parametryczne. Jeśli potrzebujesz parametrycznego przepływu pracy, proszę skonsultuj [klasę `Projection`](https://gist.github.com/CsatiZoltan/f4fd10bf20923143ba0e0678ea1d3d61), która jest obiektem skryptowym środowiska Python, przeznaczonym do użytku programistycznego.

## Odnośniki internetowe

- Wątek na forum: [Rzutowanie powierzchni czołowych na zagiętą powierzchnię](https://forum.freecadweb.org/viewtopic.php?f=9&t=33700)

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_ProjectionOnSurface/pl&oldid=1468397>"
