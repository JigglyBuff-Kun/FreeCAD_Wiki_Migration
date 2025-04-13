---
title: CAM Obróbka kieszeni
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

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

To polecenie wstawia obiekt ścieżki ![](/images/CAM_3DPocket.svg) Obróbka kieszeni do Zadania. Operacja ta uwzględnia dolną powierzchnię kieszeni, jak również wybrane ściany, które nie są pionowe. W obecnym stanie operacja ta służy do zgrubnego wycinania kieszeni o ścianach, które nie są pionowe i/lub dnie, które nie jest poziome. Powszechną techniką wykańczania jest użycie kulistego frezu wraz z eksperymentalną operacją ![](/images/CAM_Surface.svg) [Powierzchnia 3D](/CAM_Surface/pl "CAM Surface/pl").

![](/images/Path_3D_Pocket_Sample.png)

Przykładowa operacja obróbki kieszeni użyta do wyczyszczenia cylindrycznego uchwytu baterii.

## Użycie

### Tworzenie kieszeni 3D

1. Wewnątrz Zadania wybierz jedną lub więcej ścian z modelu zadania do uwzględnienia jako geometrię podstawową.
2. Uruchom polecenie ![](/images/CAM_3DPocket.svg) Kieszeń 3D lub wybierz opcję  CAM → ![](/images/CAM_3DPocket.svg) Kieszeń 3D z górnego menu.
3. Wybierz kontroler narzędzia z okna dialogowego wyboru.
4. Dodaj lub usuń elementy geometrii podstawowej w celu skonfigurowania operacji.
5. Sprawdź zakładkę Głębokość, aby upewnić się, że Głębokość początkowa, Głębokość końcowa i Krok w dół są poprawnie ustawione. Ostateczna głębokość jest określana przez wybór geometrii i nie może być modyfikowana.
6. Sprawdź zakładkę Wysokości, aby upewnić się, że Wysokość bezpieczna i Odstęp bezpieczeństwa są odpowiednie.
7. Sprawdź zakładkę Operacja, gdzie można ponownie wybrać kontroler narzędzia, skonfigurować tryb cięcia na Podejście lub Konwencjonalne, ustawić Wzór, dostosować procent szerokości skrawania i zastosować Zakres przejść.
8. Kliknij Zastosuj, aby zobaczyć ścieżkę frezowania dla przejść operacji. Dostosuj parametry, aż będziesz zadowolony z operacji.
9. Kliknij OK, aby zapisać operację.

## Uwagi

* Wszystkie ścieżki generowane przez tę operację są oparte na standardowym frezie walcowym, używając średnicy narzędzia wybranego dla operacji Kieszeni 3D.
* Frezy kuliste i inne kształty nie są brane pod uwagę przy generowaniu ścieżki, nawet jeśli zostały wybrane jako narzędzie dla tej operacji.

## Opcje

* Użyj właściwości DANE**Adaptive Pocket Finish**, aby spróbować zminimalizować frezowanie w powietrzu poniżej kieszeni 3D, gdy kieszeń jest otworem przez model.
* Użyj właściwości DANE**Adaptive Pocket Start**, aby spróbować zminimalizować frezowanie w powietrzu podczas wchodzenia do kieszeni. Na przykład, spójrz na obrazek w sekcji [Opis](#Opis) tej strony. Aby zmniejszyć frezowanie w powietrzu nad kieszenią 3D, ustaw tę właściwość na True, a ścieżki będą zaczynać się bliżej kieszeni, znacznie bliżej miejsca, gdzie kieszeń faktycznie się zaczyna. Zobacz poniższy obrazek i zauważ różnicę w wysokości początku ścieżki. Frezowanie w powietrzu jest zredukowane.

![](/images/3D_Pocket_Sample_Adaptive_Start.png)

Przykład operacji Kieszeni 3D użytej do wyczyszczenia cylindrycznego uchwytu baterii z opcją Adaptive Pocket Start włączoną aby zredukować frezowanie w powietrzu po wejściu.

* Jeśli chcesz przetworzyć cały model i surowiec jako całość, użyj właściwości DANE**Process Stock Area** ustawionej na True, bez wybranej geometrii podstawowej.

## Właściwości

### Dane

Podstawa

Uwaga: Zaleca się, aby nie edytować właściwości Umiejscowienie operacji ścieżki. Zamiast tego, przesuń lub obróć model Zadania CAM w razie potrzeby.

* DANE**Placement**: Ogólne umiejscowienie [pozycja i rotacja] obiektu - względem punktu początkowego (lub punktu początkowego kontenera obiektu nadrzędnego)
  + DANE**Angle**: Kąt w stopniach zastosowany do rotacji obiektu wokół wartości właściwości Axis
  + DANE**Axis**: Oś (jedna lub wiele) wokół której obraca się obiekt, ustawiana w podwłaściwościach: X, Y, Z
    - DANE**X**: Wartość osi X
    - DANE**Y**: Wartość osi Y
    - DANE**Z**: Wartość osi Z
  + DANE**Position**: Pozycja obiektu, ustawiana w podwłaściwościach: X, Y, Z - względem punktu początkowego (lub punktu początkowego kontenera obiektu nadrzędnego)
    - DANE**X**: Wartość odległości w osi X
    - DANE**Y**: Wartość odległości w osi Y
    - DANE**Z**: Wartość odległości w osi Z
* DANE**Label**: Nazwa obiektu nadana przez użytkownika (UTF-8)

Głębokość

* DANE**Clearance Height**: Wysokość potrzebna do usunięcia zacisków i przeszkód
* DANE**Final Depth**: Ostateczna głębokość narzędzia - najniższa wartość w osi Z
* DANE**Finish Depth**: Maksymalna ilość materiału usuwanego podczas ostatniego przejazdu
* DANE**Safe Height**: Wysokość powyżej której dozwolone są szybkie ruchy
* DANE**Start Depth**: Początkowa głębokość narzędzia - pierwsza głębokość cięcia w osi Z
* DANE**Step Down**: Stopniowe zagłębianie narzędzia

Ściana

* DANE**Offset Pattern**: Wzór czyszczenia do użycia. (Wybierz sposób, w jaki powinny być wykonywane poziome ruchy.)

Ścieżka

* DANE**Active**: Ustaw na False, aby zapobiec generowaniu kodu przez operację
* DANE**Base**: Geometria podstawowa dla tej operacji
* DANE**Comment**: Opcjonalny komentarz do tej operacji
* DANE**Coolant Mode**: Tryb chłodzenia dla tej operacji
* DANE**Cycle Time**: Szacunkowy czas cyklu dla tej operacji
* DANE**Tool Controller**: Określa kontroler narzędzia używany w operacji
* DANE**User Label**: Etykieta przypisana przez użytkownika

Kieszeń

* DANE**Adaptive Pocket Finish**: Użyj algorytmu adaptacyjnego, aby wyeliminować nadmierne frezowanie w powietrzu poniżej dna płaskiej kieszeni.
* DANE**Adaptive Pocket Start**: Użyj algorytmu adaptacyjnego, aby wyeliminować nadmierne frezowanie w powietrzu powyżej górnej krawędzi płaskiej kieszeni.
* DANE**Cut Mode**: Kierunek, w którym narzędzie ma obracać się wokół części: zgodnie z ruchem wskazówek zegara (CW) lub przeciwnie do ruchu wskazówek zegara (CCW).
* DANE**Extra Offset**: Dodatkowe przesunięcie do zastosowania w operacji. Kierunek zależy od operacji.
* DANE**Handle Multiple Features**: Wybierz sposób przetwarzania wielu cech Geometrii podstawowej.
* DANE**Keep Tool Down**: Próbuje unikać niepotrzebnych podniesień narzędzia.
* DANE**Min Travel**: Użyj sortowania 3D ścieżki
* DANE**Process Stock Area**: Przetwórz model i materiał w operacji bez wybranej Geometrii podstawowej.
* DANE**Start At**: Rozpocznij frezowanie od środka lub krawędzi
* DANE**Step Over**: Procent średnicy narzędzia do przesunięcia na każdym przejściu
* DANE**Zig Zag Angle**: Kąt wzoru zygzakowatego

Obrót

Uwaga: Obrót nie jest dostępny dla Kieszeni 3D na ten moment (wersja 0.19).

* DANE**Enable Rotation**: Włącz obrót, aby uzyskać dostęp do kieszeni lub obszarów, które nie są normalne do osi Z.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Pocket_3D/pl&oldid=1482717>"