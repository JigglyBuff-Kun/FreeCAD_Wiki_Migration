---
title: Poradnik Wykres wieloosiowy
---

|                         |
| ----------------------- |
| Ćwiczenie               |
| Temat                   |
| środowisko pracy wykres |
| Poziom trudności        |
| średniozaawansowany     |
| Czas wykonania          |
| dowolny                 |
| Autorzy                 |
|                         |
| Wersja FreeCAD          |
| -                       |
| Pliki z przykładami     |
|                         |
| Zobacz również          |
| _-_                     |
|                         |

Upewnij się, że odwiedziłeś [Poradnik: Podstawy dla środowiska pracy Wykres](/Plot_Basic_tutorial/pl "Plot Basic tutorial/pl") przed rozpoczęciem tego poradnika. W tym poradniku nauczymy się jak tworzyć i edytować wykres wieloosiowy. Na stronie środowiska pracy[Wykres](/Plot_Workbench/pl "Plot Workbench/pl") możesz dowiedzieć się więcej o nim.

![](/images/Plot_MultiAxes_Example.png)

Przykład wykresu wieloosiowego

Na poprzednim obrazku możesz zobaczyć rezultat, jaki w przybliżeniu uzyskamy. Dzięki temu poradnikowi dowiesz się:

- Jak stworzyć wieloosiowy wykres z poziomu konsoli [Pythona](/Python_console/pl "Python console/pl").
- Jak edytować właściwości osi.
- Jak kontrolować siatkę / legendę, gdy obecnych jest kilka osi.
- Jak edytować etykiety, tytuły i pozycje legendy.

## Wykreślanie danych

Podobnie jak w [poprzednim poradniku](/Plot_Basic_tutorial/pl "Plot Basic tutorial/pl") do wykreślania danych użyjemy [konsoli Python](/Python_console/pl "Python console/pl") lub [makrodefinicji](/Macros "Macros"), z tą różnicą, że w tym przypadku będziemy wykreślać dane na dwóch różnych osiach.

### Tworzenie danych wykresu

W tym przykładzie wykreślimy 3 funkcje, dwie użyte w [poprzednim poradniku](/Plot_Basic_tutorial/pl "Plot Basic tutorial/pl"), oraz jeszcze jedną wielomianową. Faktem jest, że wielomian będzie potrzebował nowych osi z powodu zakresu zmienności innego niż wszystkie pozostałe. Kolejne polecenia utworzą nam tablice z danymi:

```
import math
p = range(0,1001)
x = [2.0*xx/1000.0 for xx in p]
y = [xx**2.0 for xx in x]
t = [tt/1000.0 for tt in p]
s = [math.sin(math.pi*2.0*tt) for tt in t]
c = [math.cos(math.pi*2.0*tt) for tt in t]

```

Gdy _x_ zmienia się od 0 do 2, funkcja _y_ ma maksymalną wartość 4, więc jeśli spróbujemy wykreślić tę funkcję za pomocą funkcji trygonometrycznych, przynajmniej jedna funkcja będzie obcięta lub źle przeskalowana, więc potrzebujemy wykresu wieloosiowego. Funkcja Multiaxes plot w FreeCAD jest zorientowana na uzyskanie wykresu z wieloma osiami, a nie na uzyskanie wielu wykresów w tym samym dokumencie.

### Rysowanie funkcji, dodawanie nowych osi

Będziemy rysować funkcje wielomianowe na osiach głównych. Jeśli wszystkie osie będą miały ten sam rozmiar to nie jest istotne jaka funkcja jest narysowana w której osi, ale jeśli Twój wykres ma osie o innych rozmiarach _(jak w tym przykładzie)_ to oś główna musi być największa _(ponieważ ta oś ma białe tło)_. Aby to zrobić wystarczy uruchomić komendę

```
try:
    from FreeCAD.Plot import Plot
except ImportError:
    from freecad.plot import Plot

Plot.plot(t,s,r"$\sin\left( 2 \pi t \right)$")
Plot.plot(t,c,r"$\cos\left( 2 \pi t \right)$")

```

W tym przykładzie przekazujemy bezpośrednio etykiety serii dla legendy. Zwróć uwagę, że łańcuchy etykiet mają przedrostek _r_, aby zapobiec próbom interpretacji znaków specjalnych przez środowisko [Python](/Python/pl "Python/pl") _(symbol_ r _jest często używany w składni [LaTeX](http://www.latex-project.org))_.

Zanim będziemy mogli wykreślić funkcję wielomianową, musimy utworzyć nowe osie. W środowisku pracy [Wykres](/Plot_Workbench/pl "Plot Workbench/pl") nowe osie są automatycznie wybierane jako aktywne, a nowe wykresy będą powiązane z tymi osiami.

```
Plot.addNewAxes()
Plot.plot(x,y,r"$x^2$")

```

Jak widzisz, wykres oszalał, znaczniki osi nałożyły się na siebie, krzywe mają ten sam kolor itd. Teraz musimy użyć środowiska pracy [Wykres](/Plot_Workbench/pl "Plot Workbench/pl"), aby naprawić ten wykres.

## Konfiguracja wykresu

### Konfigurowanie osi

Środowisko pracy [Wykres](/Plot_Workbench/pl "Plot Workbench/pl") dostarcza narzędzia do modyfikacji właściwości każdej z osi.

![](/images/Plot_Axes.svg)

Ikonka narzędzia konfiguracji osi

Za pomocą narzędzia [Konfiguruj osie](/Plot_Axes/pl "Plot Axes/pl") możesz dodawać i usuwać osie oraz ustawiać aktywne osie, które są następnie używane, gdy wykreślasz więcej danych.

Aby zmienić rozmiar pierwszego zestawu osi, związanego z funkcjami trygonometrycznymi, należy go najpierw uaktywnić, zmieniając aktywną oś z `1` na `0`. Następnie możemy przesuwać suwaki wymiarów poziomych i pionowych, aby zmniejszyć jego rozmiar _(spróbuj odtworzyć przykład)_. Musimy również zmienić wyrównanie osi: wybieramy odpowiednio górę i prawo.

### Konfiguracja serii

Ustaw właściwości serii tak jak to robiliśmy w [poprzednim poradniku](/Plot_Basic_tutorial/pl "Plot Basic tutorial/pl").

### Wyświetlenie siatki i legendy

[Siatka](/Plot_Grid/pl "Plot Grid/pl") oraz [legenda](/Plot_Legend/pl "Plot Legend/pl") może być pokazywana i ukrywana za pomocą narzędzi opisanych w [poprzednim poradniku](/Plot_Basic_tutorial/pl "Plot Basic tutorial/pl"), ale w tym przypadku zachowanie jest nieco inne, ponieważ istnieją dwa zestawy osi.

Linie siatki są dodawane do aktywnego zestawu osi. Aby dodać linie do drugiego zestawu osi w naszym przykładzie, musi on być najpierw aktywowany poprzez zmianę aktywnych osi z `0` na `1` w [Konfiguruj osie](/Plot_Axes/pl "Plot Axes/pl").

Jak już wspomnieliśmy, legenda zostanie umieszczona względem ostatniej ustawionej osi. Jeśli pokażesz teraz legendę, zobaczysz, że jest ona naprawdę źle umieszczona, ale naprawimy to później.

### Ustawianie etykiet osi

Kiedy przychodzi do ustawiania [etykiet](/Plot_Labels/pl "Plot Labels/pl") dla osi, znów mamy do czynienia z naszymi dwoma zestawami osi. Ale ponieważ etykiety są zazwyczaj ustawiane dla wszystkich osi, procedura jest taka sama jak opisana w [poprzednim poradniku](/Plot_Basic_tutorial/pl "Plot Basic tutorial/pl"). Moduł [Wykres](/Plot_Workbench/pl "Plot Workbench/pl") pozwala na ustawienie tytułu dla każdego zestawu osi. W tym przypadku chcemy ustawić tytuł tylko dla ostatniego, największego zestawu osi.

**Oś 0:**

- X Label = $t$
- Y Label = $\mathrm{f} \left( t \right)$

**Axes 1:**

- Title = Przykład, wykres wieloosiowy
- X Label = $x$
- Y Label = $\mathrm{f} \left( x \right)$

Zmień rozmiar czcionki wszystkich etykiet na `20` oraz rozmiar czcionki tytułu do `24`. Znów pojawia się element, tytuł, który jest źle umiejscowiony.

## Ustawianie pozycji elementów=

Środowisko pracy [Wykres](/Plot_Workbench/pl "Plot Workbench/pl") udostępnia narzędzie do ustawiania pozycji kilku elementów wykresu, takich jak tytuły, etykiety czy legenda.

![](/images/Plot_Positions.svg)

Ikona edytora pozycji

Gdy uruchomisz narzędzie, zobaczysz listę wszystkich edytowalnych elementów. Tytuły i legendy mogą być przesuwane w obu kierunkach, ale etykiety osi mogą być przesuwane tylko wzdłuż osi, do której należą. Wybierz tytuł osi 1 i przesuń go na pozycję (0.24,1.01), następnie wybierz legendę i przesuń ją na lepszą pozycję. Możesz również zwiększyć rozmiar czcionki etykiet legendy.

## Zapisanie wykresu

Teraz możesz zapisać swoją pracę. Zobacz [poprzedni poradnik](/Plot_Basic_tutorial/pl "Plot Basic tutorial/pl") jeśli nie pamiętasz jak to zrobić.

Retrieved from "<http://wiki.freecad.org/index.php?title=Plot_MultiAxes_tutorial/pl&oldid=1251523>"
