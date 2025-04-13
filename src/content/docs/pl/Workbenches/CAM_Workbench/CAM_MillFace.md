---
title: CAM Powierzchnia
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| CAM: Powierzchnia |
| Lokalizacja w menu |
| CAM → Powierzchnia |
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

Narzędzie ![](/images/CAM_MillFace.svg) Powierzchnia tworzy ścieżkę do przeprowadzenia operacji frezowania na poziomej powierzchni. Ta operacja jest zazwyczaj używana:

* do wygładzenia szorstkiej powierzchni materiału,
* do frezowania wybranej powierzchni do żądanej głębokości w celu przygotowania do dalszych operacji usuwania w obrębie obszarów objętych tą operacją,
* lub do zastosowania wykończenia na wybranej powierzchni.

Operacja ta zawiera właściwość DANE**BoundaryShape**, która pozwala na zmodyfikowany wybór obszaru na podstawie wybranej powierzchni.

![Przykład operacji Powierzchnia używanej do przygotowania powierzchni materiału do dalszych operacji usuwania.](/images/MillFace_Sample.png)

Przykład operacji Powierzchnia używanej do przygotowania powierzchni materiału do dalszych operacji usuwania.

## Użycie

1. Wybierz jedną lub więcej powierzchni do frezowania. **Uwaga:** Jeśli wybrane powierzchnie znajdują się na różnych wysokościach, wszystkie zostaną frezowane do ustawionej wartości Głębokości końcowej.
2. Istnieje kilka sposobów na wywołanie tego polecenia:
   * Naciśnij przycisk ![](/images/CAM_MillFace.svg) Powierzchnia.
   * Wybierz opcję **CAM → ![](/images/CAM_MillFace.svg) Powierzchnia** z menu.
3. Wybierz odpowiednie ustawienie DANE**Kształ granicy**, aby zmodyfikować obszar frezowania na podstawie powierzchni wybranych jako **Geometria podstawowa**.
4. Dostosuj pozostałe właściwości w razie potrzeby. Są one opisane poniżej.

## Zastrzeżenia

* Użycie tej operacji na nachylonej powierzchni może prowadzić do nieoczekiwanych rezultatów: nadal będzie ona tworzyć ścieżkę do frezowania poziomej powierzchni. Zakres cięcia będzie odpowiadał pionowej projekcji nachylonej powierzchni, realizowanej na wysokości odpowiadającej najniższemu punktowi tej powierzchni.

* Ponieważ narzędzia CAM działają tylko na geometrii wybranych krawędzi/powierzchni i nie odnoszą się do reszty modelu 3D, ścieżki nie wyjdą poza granice wybranej płaszczyzny, nawet jeśli jest otoczona nieużywaną częścią materiału lub powietrzem. Może to pozostawić niedopracowane narożniki. Czasami można je usunąć za pomocą jednego z narzędzi do obróbki, które znajdują się w menu *CAM*.

## Frezowanie ścian pionowych

* To nie działa na **pionowej płaszczyźnie** lub pionowej powierzchni zakrzywionej. Operacje pionowe można osiągnąć, używając narzędzia [Kontur](/CAM_Profile/pl "CAM Profile/pl") lub [Kontur](/CAM_Profile/pl "CAM Profile/pl"). Należy wybrać powierzchnię lub zamkniętą pętlę krawędzi *w tym górną lub dolną krawędź żądanej pionowej powierzchni*). Zakres ścieżki można następnie ograniczyć za pomocą narzędzia [Ulepszenie ścieżki konturu](/CAM_DressupPathBoundary/pl "CAM DressupPathBoundary/pl"), które znajduje się w menu *CAM*. Użyj opcji *Utwórz prostopadłościan* i zmniejsz rozmiar, aby ograniczyć zakres ścieżki profilu. Ustawienia te nie pozwolą jednak na przesunięcie początku ramki ograniczającej; należy to zrobić, dostosowując ustawienia Umiejscowienia w [widoku drzewa](/Tree_view/pl "Tree view/pl").
* Działa to na powierzchniach złożonych, takich jak kilka pionowych płaszczyzn lub powierzchni cylindrycznych połączonych razem, pod warunkiem, że tworzą one jedną ciągłą powierzchnię.

## Opcje

Pusto

## Właściwości

***Uwaga*** : Nazwy niektórych właściwości na tej liście różnią się nieco od tych samych ustawień używanych w edytorze okna dialogowego.

### Dane

Podstawa

Uwaga: Zaleca się, aby nie edytować właściwości Umiejscowienie operacji ścieżki. W razie potrzeby należy raczej przesunąć lub obrócić model zadania CAM.

* DANE**Placement**: Ogólne umiejscowienie [pozycja i rotacja] obiektu - w odniesieniu do początku (lub początku kontenera obiektu nadrzędnego)
  + DANE**Angle**: Kąt w stopniach zastosowany do rotacji obiektu wokół wartości właściwości Axis
  + DANE**Axis**: Oś (jedna lub wiele), wokół której rotuje obiekt, ustawiana w podwłaściwościach: X, Y, Z
    - DANE**X**: Wartość osi X
    - DANE**Y**: Wartość osi Y
    - DANE**Z**: Wartość osi Z
  + DANE**Position**: Pozycja obiektu, ustawiana w podwłaściwościach: X, Y, Z - w odniesieniu do początku (lub początku kontenera obiektu nadrzędnego)
    - DANE**X**: Wartość odległości X
    - DANE**Y**: Wartość odległości Y
    - DANE**Z**: Wartość odległości Z
* DANE**Label**: Nazwa obiektu podana przez użytkownika (UTF-8)

Głębokość

* DANE**Clearance Height**: Wysokość potrzebna do usunięcia zacisków i przeszkód
* DANE**Final Depth**: Ostateczna głębokość narzędzia - najniższa wartość w osi Z
* DANE**Finish Depth**: Maksymalna ilość materiału usuwanego podczas ostatniego przejazdu
* DANE**Safe Height**: Wysokość powyżej której dozwolone są szybkie ruchy
* DANE**Start Depth**: Początkowa głębokość narzędzia - pierwsza głębokość cięcia w osi Z
* DANE**Step Down**: Stopniowe zagłębianie narzędzia

Ściana

* DANE**BoundaryShape**: Kształt używany do obliczania granicy
* DANE**ClearEdges**: Oczyść krawędzie powierzchni (Dotyczy tylko BoundBox)
* DANE**ExcludeRaisedAreas**: Wyklucz frezowanie podniesionych obszarów wewnątrz powierzchni.
* DANE**Offset Pattern**: Wzór czyszczenia do użycia. (Wybierz sposób wykonywania ruchów poziomych.)

Ścieżka

* DANE**Active**: Ustaw na False, aby zapobiec generowaniu kodu dla operacji
* DANE**Base**: Geometria podstawowa dla tej operacji
* DANE**Comment**: Opcjonalny komentarz dla tej operacji
* DANE**Coolant Mode**: Tryb chłodzenia dla tej operacji
* DANE**Cycle Time**: Szacowany czas cyklu dla tej operacji
* DANE**Tool Controller**: Definiuje kontroler narzędzia używany w operacji
* DANE**User Label**: Etykieta przypisana przez użytkownika

Kieszeń

* DANE**Cut Mode**: Kierunek, w którym ścieżka narzędzia powinna okrążać część: zgodnie z ruchem wskazówek zegara (CW) lub przeciwnie do ruchu wskazówek zegara (CCW)
* DANE**Extra Offset**: Dodatkowe odsunięcie do zastosowania w operacji. Kierunek zależy od operacji.
* DANE**StartAt**: Rozpocznij frezowanie od środka lub od krawędzi
* DANE**Step Over**: Procent średnicy narzędzia do przeskoku na każdej przejściu
* DANE**Zig Zag Angle**: Kąt wzoru zygzaka
* DANE**Offset Pattern**: Wzór wykańczania do użycia
* DANE**Min Travel**: Użyj sortowania 3D ścieżki
* DANE**Keep Tool Down**: Próbuje uniknąć zbędnych wycofań

Obrót

* DANE**Attempt Inverse Angle**: Automatycznie spróbuj odwrócić kąt, jeśli początkowy kąt obrotu jest niepoprawny.
* DANE**Enable Rotation**: Włącz obrót, aby uzyskać dostęp do kieszeni lub obszarów, które nie są normalne do osi Z.
* DANE**Inverse Angle**: Odwróć kąt obrotu.  ***Przykład:** zmień kąt obrotu z -22,5 na 22,5 stopnia.*
* DANE**Limit Depth To Face**: Wymuś głębokość Z wybranej powierzchni jako najniższą wartość dla końcowej głębokości. Wyższe wartości użytkownika dla głębokości końcowej będą uwzględniane.
* DANE**Reverse Direction**: Odwróć orientację operacji o 180 stopni.

Punkt początkowy

* DANE**Start Point**: Niestandardowy punkt początkowy ścieżki tej operacji.
  + DANE**X**: Wartość odległości w osi X
  + DANE**Y**: Wartość odległości w osi Y
  + DANE**Z**: Wartość odległości w osi Z
* DANE**Use Start Point**: Ustaw na True, jeśli ręcznie określasz punkt początkowy. Ustaw punkt początkowy w polu danych właściwości Start Point.

### Widok

Pusto

## Tworzenie skryptów

*Zobacz również:* [FreeCAD podstawy tworzenia skryptów](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Przykład:

```
#Place code example here.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_MillFace/pl&oldid=1483357>"