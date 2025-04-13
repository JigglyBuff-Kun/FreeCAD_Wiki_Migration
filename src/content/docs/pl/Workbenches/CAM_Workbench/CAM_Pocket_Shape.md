---
title: CAM Obróbka kieszeni
---
|  |
| --- |
| CAM: Obróbka kieszeni |
| Lokalizacja w menu |
| CAM → Obróbka kieszeni |
| Środowisko pracy |
| [CAM](/CAM_Workbench/pl "CAM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie ![](/images/CAM_Pocket_Shape.svg) Obróbka kieszeni tworzy operację wycinania kieszeni z wybranych dolnych lub bocznych ścian jednej lub większej liczby kieszeni z obiektu bazowego zadania.

Obiekt CAM Pocket Shape jest dodawany jako część ![](/images/CAM_Job.svg) [Zadania CAM](/CAM_Job/pl "CAM Job/pl").

![](/images/Path_Pocket_Shape_example.png)

## Użycie

1. Wybierz dno lub ściany kieszeni. Zazwyczaj łatwiej jest wybrać dno, ale gdy kieszeń przechodzi na wylot, należy wybrać ściany.
2. Istnieje kilka sposobów na wywołanie polecenia:
   * Naciśnij przycisk ![](/images/CAM_Pocket_Shape.svg) Obróbka kieszeni.
   * Wybierz opcję **CAM → ![](/images/CAM_Pocket_Shape.svg) Obróbka kieszeni** z menu.
3. Dostosuj żądane właściwości.

## Właściwości

***Uwaga*** : Nie wszystkie z tych właściwości są dostępne w edytorze okna zadań. Niektóre są dostępne tylko na karcie Dane w panelu Widok właściwości dla tej operacji.

Podstawa

Uwaga: Zaleca się, aby nie edytować właściwości Umiejscowienie operacji ścieżki. W razie potrzeby należy raczej przesunąć lub obrócić model zadania CAM.

* DANE**Placement**: Ogólne umiejscowienie [położenie i rotacja] obiektu względem początku (lub początku kontenera obiektów nadrzędnych)
  + DANE**Angle**: Kąt w stopniach zastosowany do rotacji obiektu wokół wartości właściwości Axis
  + DANE**Axis**: Oś (jedna lub wiele), wokół której ma być obracany obiekt, ustawiona w podwłaściwościach: X, Y, Z
    - DANE**X**: Wartość osi X
    - DANE**Y**: Wartość osi Y
    - DANE**Z**: Wartość osi Z
  + DANE**Position**: Położenie obiektu, ustawione w podwłaściwościach: X, Y, Z - względem początku (lub początku kontenera obiektów nadrzędnych)
    - DANE**X**: Wartość odległości X
    - DANE**Y**: Wartość odległości Y
    - DANE**Z**: Wartość odległości Z
* DANE**Label**: Nazwa obiektu nadana przez użytkownika (UTF-8)

Głębokość

* DANE**Clearance Height**: Wysokość potrzebna do usunięcia zacisków i przeszkód
* DANE**Final Depth**: Końcowa głębokość narzędzia - najniższa wartość w osi Z
* DANE**Finish Depth**: Maksymalna ilość materiału usuniętego podczas ostatniego przejścia. Wysokość (grubość) ostatniego poziomu cięcia - *ustawiana dla lepszego wykończenia*.
* DANE**Safe Height**: Wysokość, powyżej której dozwolone są ruchy szybkie. (Bezpieczna wysokość szybkiego ruchu między lokalizacjami)
* DANE**Start Depth**: Początkowa głębokość narzędzia - *pierwsza głębokość cięcia w osi Z*
* DANE**Step Down**: Przyrostowa głębokość cięcia narzędzia podczas operacji

![](/images/Path-DepthsAndHeights.gif)

Wizualne odniesienie do właściwości *(ustawień)* głębokości

Przedłużenie

* DANE**Extension Corners**: Po włączeniu połączone krawędzie przedłużenia są łączone w przewody.
* DANE**Extension Length Default**: Domyślna długość przedłużeń.

Ściana

* DANE**Offset Pattern**: Wzór czyszczenia do użycia. (Wybierz sposób, w jaki mają być wykonywane ruchy poziome.)

Ścieżka

* DANE**Active**: Ustaw na False, aby zapobiec generowaniu kodu operacji
* DANE**Comment**: Opcjonalny komentarz do tej operacji
* DANE**User Label**: Etykieta przypisana przez użytkownika
* DANE**Tool Controller**: Definiuje kontroler narzędzia używanego w operacji

Kieszeń

* DANE**Cut Mode**: Określa ruch CW lub CCW dla cięcia
* DANE**Extra Offset**: Dodatkowe odsunięcie do zastosowania w operacji. Kierunek zależy od operacji. (Dodatkowa wartość dla unikania końcowego profilu *dobre dla ścieżki zgrubnej*)
* DANE**Keep Tool Down**: Próbuje unikać niepotrzebnych wycofań.
* DANE**Min Travel**: Użyj sortowania 3D ścieżki (gdy używane są wielokrotne geometrie bazowe).
* DANE**Start At**: Rozpocznij frezowanie kieszeni od środka lub krawędzi.
* DANE**Step Over**: Wybierz poziome przesunięcie (**Procent** średnicy narzędzia: 100% = średnica narzędzia).
* DANE**Use Outline**: Używa konturu geometrii bazowej.
* DANE**Zig Zag Angle**: Kąt wzoru zygzakowatego. (Wybierz kąt ścieżki względem osi X.)

Obrót

* DANE**Attempt Inverse Angle**: Automatycznie spróbuj odwrócić kąt, jeśli początkowy obrót jest niepoprawny.
* ~~DANE**B\_Axis Error Override**: Wizualnie dostosuj obroty B(y) do modelu (błąd renderowania we FreeCAD).~~
* DANE**Enable Rotation**: Włącz obroty, aby uzyskać dostęp do otworów nieprostopadłych do osi Z.
* DANE**Inverse Angle**: Odwróć kąt obrotu.  ***Przykład:** zmiana obrotu z -22,5 na 22,5 stopnia.*
* DANE**Reverse Direction**: Odwróć orientację operacji o 180 stopni.

Punkt początkowy

* DANE**Start Point**: Punkt startowy tej ścieżki.
* DANE**Use Start Point**: Ustaw na True, jeśli ręcznie określasz Punkt Startowy, a następnie wprowadź Punkty Startowe w polu danych właściwości Start Points.

## Układ edytora w oknie zadań

*Opisy ustawień znajdują się na powyższej liście właściwości*.

Ta sekcja jest po prostu mapą układu ustawień w edytorze okien dla operacji.

### Geometria podstawowa

* **Dodaj**: Dodaje wybrane elementy, które powinny być bazą dla ścieżek.
* **Usuń**: Usuwa wybrane elementy z listy Geometria podstawowa.
* **Wyczyść**: Czyści wszystkie elementy na liście Geometria podstawowa.

### Rozszerzenia

* DANE**Show All**: Jeśli wybrane, wszystkie potencjalne przedłużenia są wizualizowane. Włączone przedłużenia w kolorze fioletowym, wyłączone przedłużenia w kolorze żółtym.
* DANE**Extension Corners**
* DANE**Extension Length Default**
* **Enable**
* **Disable**
* **Clear**

### Głębokości

* DANE**Start Depth**
* DANE**Final Depth**
* DANE**Step Down**

### Wysokości

* DANE**Safe Height**
* DANE**Clearance Height**

### Operacja

* DANE**Tool Controller**
* DANE**Cut Mode**
* DANE**Pattern** (Wzór przesunięcia)
* DANE**Angle** (Kąt zygzakowania)
* DANE**Step Over Percent** (Przesunięcie)
* DANE**Pass Extension**: Odległość, na jaką operacja frezowania będzie sięgać poza kształt graniczny (geometrię podstawową)

## Tworzenie skryptów

*Zobacz również:* [FreeCAD podstawy tworzenia skryptów](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

```
#Place code example here.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Pocket_Shape/pl&oldid=1483273>"