---
title: Poradnik Podstawy dla środowiska pracy Wykres
---

|                                            |
| ------------------------------------------ |
| Ćwiczenie                                  |
| Temat                                      |
| Poradnik: Podstawy środowiska pracy Wykres |
| Poziom trudności                           |
| Początkujący                               |
| Czas wykonania                             |
|                                            |
| Autorzy                                    |
|                                            |
| Wersja FreeCAD                             |
| -                                          |
| Pliki z przykładami                        |
|                                            |
| Zobacz również                             |
| _-_                                        |
|                                            |

W tym poradniku dowiemy się, jak wykonać podstawowy wykres przy użyciu środowiska pracy [Wykres](/Plot_Workbench/pl "Plot Workbench/pl") i konsoli [Python](/Python_console/pl "Python console/pl").

![](/images/Plot_Trigonometric_Example.png)

Przykład prostego wykresu

Na poprzednim obrazku możesz zobaczyć rezultat, jaki w przybliżeniu uzyskamy. Po tym poradniku nauczysz się:

- Jak utworzyć wykres w konsoli [Python](/Python_console/pl "Python console/pl").
- Jak wykreślić kilka danych w konsoli [Python](/Python_console/pl "Python console/pl").
- Jak wyświetlić ![](/images/Plot_Grid.svg) [linie siatki](/Plot_Grid/pl "Plot Grid/pl").
- Jak wyświetlić ![](/images/Plot_Legend.svg) [legendę](/Plot_Legend/pl "Plot Legend/pl").
- Jak edytować ![](/images/Plot_Series.svg) [etykiety serii](/Plot_Series/pl "Plot Series/pl"), wprowadzając tekst w [LaTeX](http://www.latex-project.org).
- Jak edytować ![](/images/Plot_Labels.svg) [etykiety osi](/Plot_Labels/pl "Plot Labels/pl"), wprowadzając tekst w edytorze [LaTeX](http://www.latex-project.org).
- Jak edytować style serii.
- Jak zapisać swój wykres.

## Wykreślanie danych

Aby wykreślić dane nie musisz tworzyć nowego dokumentu FreeCAD, wystarczy, że uruchomisz konsolę [Python](/Python_console/pl "Python console/pl") i zaczniesz wysyłać komendy, lub użyjesz [makrodefinicji](/Macros/pl "Macros/pl").

### Tworzenie dokumentu wykresu

Wykresy są specjalnymi dokumentami, które można utworzyć ręcznie w celu późniejszego dodania danych, lub pozwolić, aby środowisko pracy utworzyło je automatycznie w momencie rozpoczęcia wykreślania danych. Tworzenie własnych dokumentów wykresów ma dwie zalety:

- Możesz ustawić etykietę okna dokumentu.
- Możesz łatwo kontrolować, na którym dokumencie wykreślać dane.

Aby utworzyć nowy dokument działki wystarczy uruchomić następujące komendy:

```
try:
    from FreeCAD.Plot import Plot
except ImportError:
    from freecad.plot import Plot

Plot.figure("TrigonometricTest")

```

W wersji FreeCAD 0.19 wymagane jest zainstalowanie środowiska pracy ![](/images/Workbench_Plot.svg) [Wykres](/Plot_Workbench/pl "Plot Workbench/pl") za pomocą [Menadżera dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl"), natomiast od wersji 0.20 FreeCAD nie wymaga już zewnętrznego dodatku do wykonywania wykresów.
Powyższe polecenia utworzą nową zakładkę w [głównym oknie](/Main_view_area/pl "Main view area/pl") o nazwie **TrigonometricTest**. Nowo utworzony dokument posiada już zestaw osi. Każdy dokument wykresu posiada co najmniej jeden zestaw osi.

### Funkcje rysowania

Można również rozpocząć pracę od tego miejsca, ponieważ, jak już wyjaśniono, polecenie plot utworzy w razie potrzeby nowy dokument. Następną rzeczą, którą musimy zrobić, jest utworzenie danych dla funkcji sinus i cosinus, które chcemy wykreślić:

```
import math
t = range(0,101)
t = [tt/100.0 for tt in t]
s = [math.sin(2.0*math.pi*tt) for tt in t]
c = [math.cos(2.0*math.pi*tt) for tt in t]

```

Spowoduje to utworzenie 3 tablic danych _(ze 101 punktami)_:

- _t_ = Czas w sekundach.
- _s_ = Funkcja sinus.
- _c_ = funkcja cosinus.

W celu wykreślenia obu funkcji wystarczy uruchomić kolejne komendy:

```
Plot.plot(t,s)
Plot.plot(t,c)

```

Spowoduje to wykreślenie naszych funkcji. Polecenie **plot** dopuszcza jako argument etykietę serii, ale ponieważ będziemy ją później edytować za pomocą narzędzi środowiska pracy Wykres, nie przekazujemy jeszcze tych danych.

## Konfiguracja wykresu

### Wyświetlanie siatki i legendy

Zmień środowisko pracy FreeCAD na [Wykres](/Plot_Workbench/pl "Plot Workbench/pl") w menu **Widok → Środowiska pracy**. Po załadowaniu, użyj narzędzia [siatki](/Plot_Grid/pl "Plot Grid/pl"), aby ją wyświetlić.

![](/images/Plot_Grid.svg)

Ikonka narzędzia Pokaż / ukryj siatkę

Możesz powtórzyć tę czynność, aby ukryć siatkę. Możesz również wyświetlić [legendę](/Plot_Legend/pl "Plot Legend/pl") za pomocą dostarczonego narzędzia.

![](/images/Plot_Legend.svg)

Ikonka narzędzia Pokaż / ukryj legendę

Jak widzisz, legenda jest pusta, ponieważ nie ustawiliśmy jeszcze żadnej etykiety serii. W środowisku pracy [Wykres](/Plot_Workbench/pl "Plot Workbench/pl") serie bez etykiety nie są wyświetlane w legendzie.

### Ustawianie etykiet serii

Za pomocą narzędzia [serii](/Plot_Series/pl "Plot Series/pl") możesz edytować niektóre parametry serii.

![](/images/Plot_Series.svg)

Ikonka narzędzia konfiguracji serii

Najpierw wybierz serię, którą chcesz edytować, na przykład zaczniemy od pierwszej. Odznacz opcje ![](/images/CheckBoxFalse.svg) Brak etykiety i ustaw tę etykietę:

```
$y = \sin \left( 2 \pi t \right)$

```

Ponieważ [matplotlib](http://matplotlib.org/) obsługuje [LaTeX](http://www.latex-project.org), możesz ustawić wszystkie etykiety i tytuły, które chcesz, za jego pomocą. Ustaw następującą etykietę na drugą serię:

```
$y = \cos \left( 2 \pi t \right)$

```

### Ustawianie stylu serii

Seria pozwala na ustawienie wielu różnych właściwości. Spróbuj ustawić właściwości pokazane na przykładowym obrazku, zmieniając kolory serii i styl rysowania drugiej serii.

### Ustawianie etykiet osi

Za pomocą narzędzia [Etykiety](/Plot_Labels/pl "Plot Labels/pl") można ustawić etykiety przypisane do wszystkich utworzonych osi.

![](/images/Plot_Labels.svg)

Ikonka narzędzia Ustaw etykiety

Ustaw te dane:

- Title = Przykład funkcji trygonometrycznych
- X Label = $t$
- Y Label = $y = \mathrm{f} \left( t \right)$

Zmień również rozmiar czcionki w tytule i wszystkich etykietach na `20`.

## Zapisywanie wykresu

Za pomocą narzędzia do [zapisywania](/Plot_Save/pl "Plot Save/pl") wykresu możesz zapisać swój wykres jako plik graficzny w kilku formatach.

![](/images/Plot_Save.svg)

Ikonka narzędzia Zapisz wykres

Najpierw należy wybrać ścieżkę dostępu do pliku wyjściowego.

Możesz ustawić rozmiar obrazu wyjściowego w calach, na przykład możemy ustawić 11.7x8.3, który jest rozmiarem papieru **DIN A4**. DPI _(Dots per inch)_ będzie kontrolować rozdzielczość obrazu, na przykład 100 dpi. W połączeniu z podanymi wymiarami da to obraz o wymiarach 1170x830 pikseli.

Retrieved from "<http://wiki.freecad.org/index.php?title=Plot_Basic_tutorial/pl&oldid=1251517>"
