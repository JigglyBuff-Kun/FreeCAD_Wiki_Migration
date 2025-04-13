---
title: Elementy Złączne Utwórz pogłębienie stożkowe
---

:::caution
To polecenie jest przestarzałe, nie jest dostępne wwersja 0.5.13 i powyżej. Rozważ użycie zaawansowanej funkcjiOtwórśrodowiska Projekt Części zamiast niej.
:::

|                                                                      |
| -------------------------------------------------------------------- |
| Elementy Złączne: Utwórz pogłębienie stożkowe                        |
| Lokalizacja w menu                                                   |
| Elementy złączne → Utwórz pogłębienie stożkowe                       |
| Środowisko pracy                                                     |
| [Elementy Złączne](/Fasteners_Workbench/pl "Fasteners Workbench/pl") |
| Domyślny skrót                                                       |
| _brak_                                                               |
| Wprowadzono w wersji                                                 |
| -                                                                    |
| Zobacz także                                                         |
| _brak_                                                               |
|                                                                      |

## Opis

Polecenie ![](/images/Fasteners_ChamferHole.svg) **Utwórz pogłębienie stożkowe** wykonuje fazki w otworach pod śruby z łbem stożkowym.

![](/images/Fasteners_ChamferHole_Example.png)

Fazowane otwory na śruby z łbem stożkowym

## Użycie

1. Polecenie może automatycznie wykrywać średnice śrub. Aby to zadziałało, otwory muszą mieć prawidłową średnicę. Na przykład śruba M5 wymaga otworu przelotowego o średnicy 5 mm lub otworu gwintowanego o średnicy 4,2 mm. Jest dostępne polecenie ![](/images/Fasteners_ScrewCalculator.svg) [Kalkulator śrub](/Fasteners_ScrewCalculator/pl "Fasteners ScrewCalculator/pl"), którego można użyć do określenia średnic otworów gwintowanych.
2. Wybierz część z okrągłymi otworami.
3. Polecenie można wywołać na kilka sposobów:
   - Naciśnij przycisk ![](/images/Fasteners_ChamferHole.svg) **Utwórz pogłębienie stożkowe**.
   - Wybierz opcję z menu **Elementy złaczne → ![](/images/Fasteners_ChamferHole.svg) Utwórz pogłębienie stożkowe**.
4. Otworzy się panel zadań **Tworzy sfazowane otwory pod śruby z łbem stożkowym**.
5. Lista **Krawędzie do fazowania** pokazuje wszystkie okrągłe krawędzie wybranej części.
6. Wybierz krawędzie, które chcesz sfazować, wykonując jedną z poniższych czynności:
   - Kliknij poszczególne okrągłe krawędzie lub powierzchnie z okrągłymi krawędziami w oknie [widoku 3D](/3D_view/pl "3D view/pl"):
     - Nie ma potrzeby przytrzymywania klawisza Ctrl.
     - Każda wybrana krawędź zostanie zaznaczona na liście **Krawędzie do fazowania**.
     - Średnica śruby dla każdej krawędzi jest wykrywana automatycznie.
     - Krawędzi nie można odznaczyć w oknie [widoku 3D](/3D_view/pl "3D view/pl").
   - Wybierz lub usuń zaznaczenie krawędzie, zaznaczając lub odznaczając je na liście **Krawędzie do fazowania**:
     - W tym przypadku średnica śruby nie jest wykrywana automatycznie.
7. Opcjonalnie można zmienić średnicę śruby poszczególnych krawędzi na liście **Krawędzie do sfazowania**, klikając dwukrotnie ich pole **Średnica** i wybierając nową wartość z rozwijanej listy, która się pojawi.
8. Opcjonalnie zmień średnicę śruby wszystkich wybranych krawędzi, wybierając nową wartość z listy rozwijanej **Średnica** poniżej listy **Krawędzie do sfazowania**.
9. Opcjonalnie określ **Typ śruby**.
10. Naciśnij przycisk OK.
11. Zostanie utworzony obiekt _Pogłębienie stożkowe_ ze sfazowanym wgłębieniem dla każdej wybranej krawędzi.
12. Opcjonalnie dołącz śruby. Zobacz opis na stronie środowiska pracy [Elementy Złączne](/Fasteners_Workbench/pl#Użycie "Fasteners Workbench/pl").

## Uwagi

- Obiekty _Pogłębienia stożkowego_ są parametryczne. Istniejący obiekt Pogłębienia stożkowego może być edytowany poprzez dwukrotne kliknięcie go w oknie [Widoku drzewa](/Tree_view "Tree view"). Otworzy się panel zadań **Tworzy sfazowane otwory pod śruby z łbem stożkowym**. Okrągłe krawędzie mogą być dodawane lub usuwane, a parametry krawędzi mogą być zmieniane.

Retrieved from "<http://wiki.freecad.org/index.php?title=Fasteners_ChamferHole/pl&oldid=1394015>"
