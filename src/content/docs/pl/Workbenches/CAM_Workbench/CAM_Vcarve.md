---
title: CAM Wycięcie V
---

|                                             |
| ------------------------------------------- |
| CAM: Wycięcie V                             |
| Lokalizacja w menu                          |
| CAM → Wycięcie V                            |
| Środowisko pracy                            |
| [CAM](/CAM_Workbench/pl "CAM Workbench/pl") |
| Domyślny skrót                              |
| _brak_                                      |
| Wprowadzono w wersji                        |
| 0.19                                        |
| Zobacz także                                |
| _brak_                                      |
|                                             |

## Opis

Narzędzie ![](/images/CAM_Vcarve.svg) **Wycięcie V** służy przede wszystkim do grawerowania w linii środkowej ![](/images/Draft_ShapeString.svg) [Kształtu z tekstu](/Draft_ShapeString/pl "Draft ShapeString/pl") na części. Jednakże, może być przydatne dla innych rodzajów operacji 2D.

W przeciwieństwie do grawerowania, które podąża za liniami w obrysie, Wycięcie V wykorzystuje frez w kształcie litery V i próbuje oczyścić obszar, przesuwając frez w dół środka obszaru i zmieniając głębokość cięcia. Ponieważ promień frezu w kształcie litery V zmienia się wraz z głębokością, zmienia się również szerokość cięcia. Rezultatem jest bardziej naturalnie wyglądające cięcie, szczególnie w przypadku czcionek szeryfowych.

![](/images/Engravepath.png)

![](/images/Vcarvepath.png)

Example Vcarving Path

![](/images/Vcarved.png)

![](/images/Scrolltest.png)

Algorytm Wycięcie V oblicza ścieżkę wzdłuż linii środkowej regionu przy użyciu diagramu Woronoja. Ta linia środkowa jest ścieżką, którą narzędzie będzie podążać w płaszczyźnie XY. Następnie oblicza "maksymalny wpisany okrąg" wzdłuż ścieżki. Jest to największy okrąg, jaki można narysować w tym punkcie i pozostać całkowicie wewnątrz obszaru oczyszczania. Korzystając z promienia okręgu i kąta wierzchołkowego frezu, obliczana jest głębokość cięcia.

## Użycie

### Przygotowanie kształtów do grawerowania

- ![](/images/Draft_ShapeString.svg) [Kształt z tekstu](/Draft_ShapeString/pl "Draft ShapeString/pl") są użyteczne od razu.

* Pliki SVG wymagają pewnego dopracowania, zarówno w edytorze, jak i w środowisku pracy ![](/images/Workbench_Draft.svg) [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"):

  - W edytorze _(np. [Inkscape](https://www.inkscape.org))_: upewnij się, że plik zawiera tylko ścieżki i że ścieżki są niezgrupowane. Upewnij się, że nie ma przecinających się ścieżek, _(w Inkscape)_ użyj Ścieżka → Uprość i połącz, aby połączyć ścieżki, które się nakładają.
  - Przełącz się na ![](/images/Workbench_Draft.svg) [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") w selektorze [środowisk pracy](/Std_Workbench/pl "Std Workbench/pl").
  - Zaimportuj SVG używając **Plik → Import → wybierz "SVG jako geometria"**.
  - Wynik powinien wyglądać podobnie do tego:

    : ![bez ramki](/images/Svgimport.png)
    : Powyżej: Wyniki importu "SVG jako geometria"

: : : Ścieżki z dziurami _(litery, winorośl na powyższym obrazku)_ są importowane jako dwie oddzielne ścieżki (nazwane zgodnie z `Path905` i `Path905001` w oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl")), jedna z nich to dziura, a druga to kontur;. Zajmiemy się tym w następnym kroku

- - Aby uzyskać ściany 2D, **Wycięcie V** potrzebuje:

    - Dla ścieżek bez otworów:
      1. Wybierz ścieżkę
      2. Wybierz **Modyfikacja → ![](/images/Draft_Upgrade.svg) [Ulepsz kształt](/Draft_Upgrade/pl "Draft Upgrade/pl")**
      3. Następnie **Modyfikacja → ![](/images/Draft_Downgrade.svg) [Rozbij kształt](/Draft_Downgrade/pl "Draft Downgrade/pl")**
    - Dla ścieżek z dziurami:
      1. Wybierz ścieżkę zewnętrzną, a następnie wewnętrzną
      2. Wybierz **Modyfikacja → ![](/images/Draft_Downgrade.svg) [Rozbij kształt](/Draft_Downgrade/pl "Draft Downgrade/pl")** **dwa razy**

    : Niektóre ścieżki będą zachowywać się inaczej, więc może być konieczne pobawienie się ![](/images/Draft_Upgrade.svg) Ulepsz kształt i ![](/images/Draft_Downgrade.svg) Rozbij kształt, aż otrzymasz coś o nazwie: `Face<numer>`.
    : Wynik końcowy powinien wyglądać następująco:
    : ![bez ramki](/images/Svgfaces.png)

### Tworzenie operacji Wycięcie V

- Przełącz się na środowisko pracy ![](/images/Workbench_CAM.svg) [Część](/CAM_Workbench/pl "CAM Workbench/pl") w [selektorze środowisk pracy](/Std_Workbench/pl "Std Workbench/pl").
- Dodaj zadanie, użyj obiektów o nazwie `Face<numer>` _(lub Kształt z tekstu)_ jako podstawy, dodać kontroler narzędzia v-bit, ustawić posuwy, prędkości itp.
- Operacja obsługuje tylko jeden obiekt (albo pojedynczy obiekt ściany, albo Kształtu z tekstu), więc dla każdego obiektu:
  - Wybierz **Ścieżka → ![](/images/CAM_Vcarve.svg) Wycięcie V** z menu głównego. Spowoduje to otwarcie panelu konfiguracji.
  - Otwórz zakładkę Geometria bazowa i dodaj wszystkie ściany Kształtu z tekstu lub ściany pojedynczego obiektu ściany uzyskanego powyżej
  - Naciśnij Zastosuj i sprawdź wygenerowaną ścieżkę; w razie potrzeby dostosuj parametry operacji (w większości sytuacji można ustawić wyższy próg).
  - Naciśnij OK, aby zakończyć

## Opcje

Pusto

## Właściwości

### Dane

Podstawa

- DANE**Umiejscowienie**: -
- DANE**Etykieta**: -

Głębokość

- DANE**WysokośćPrześwitu**: -
- DANE**GłębokośćKońcowa**: -
- DANE**WysokośćBezpieczna**: -
- DANE**GłębokośćStartowa**: -
- DANE**KrokWDół**: -

Wartości operacyjne

- DANE**OpGłębokośćKOńcowa**: -
- DANE**OpGłębokośćStartowa**: -
- DANE**OpZMaxPrzygotówki**: -
- DANE**OpZMinPrzygotówki**: -
- DANE**OpŚrednicaNarzędzia**: -

Ścieżka

- DANE**Aktywna**: -
- DANE**Komentarz**: -
- DANE**TrybChłodzenia**: -
- DANE**WierzchołekStartowy**: -
- DANE**KontrolerNarzędzia**: -
- DANE**EtykietaUżytkownika**: -

#### Ukryte

- DANE**Baza**: -
- DANE**ObjektBazowy**: -
- DANE**KształtBazowy**: -
- DANE**SilnikWyrażeń**: -
- DANE**Etykieta2**: -
- DANE**Ścieżka**: -
- DANE**Proxy**: -
- DANE**Widoczność**: -

### Widok

Pusto

## Tworzenie skryptów

_Zobacz również:_ [FreeCAD podstawy tworzenia skryptów](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Przykład:

```
#Place code example here.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Vcarve/pl&oldid=1483473>"
