---
title: Część Grubość
---
|  |
| --- |
| Część: Grubość |
| Lokalizacja w menu |
| Część → Grubość |
| Środowisko pracy |
| [Środowisko pracy Część](/Part_Workbench/pl "Part Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Odsunięcie](/Part_Offset/pl "Part Offset/pl") |
|  |

## Opis

Narzędzie ![](/images/Part_Thickness.svg) Grubość pracuje na kształcie bryły i przekształca ją w pusty obiekt, nadając każdej z jego ścian określoną grubość.
Na niektórych bryłach pozwala to znacznie przyspieszyć pracę i uniknąć tworzenia wyciągnięć i kieszeni.

## Użycie

1. Utwórz bryłę.
2. Wybierz jedna albo więcej ścian.
3. Kliknij w przycisk narzędzia ![](/images/Part_Thickness.svg) **Część: Grubość**.
4. Ustaw wybrane parametry *(zobacz [Opcje](#Opcje))*.
5. Kliknij w przycisk OK aby potwierdzić, utworzyć operację i opuścić funkcję.
6. W tabeli Właściwości w razie potrzeby można dostosować parametry.

## Opcje

* **Grubość**: Grubość ścianki obiektu wynikowego, należy ustawić żądaną wartość.
  + Dodatnia wartość spowoduje przesunięcie ścianek na zewnątrz.
  + Ujemna wartość przesunie ściany do wewnątrz.
* **Tryb pracy**.
  + **Powłoka**: Wybierz tę opcję, jeśli chcesz dostać przedmiot jak wazon, bez głowy, ale z dnem.
  + **Rura**: Wybierz tę opcję, jeśli chcesz uzyskać obiekt taki jak rura, bez głowy i bez dna. W tym przypadku wygodne może być wybranie ścian, które mają zostać usunięte przed uruchomieniem narzędzia. Pomocne mogą być przyciski z predefiniowanymi widokami lub klawisze numeryczne.
  + **Obie strony**:
* **Typ dołączenia**.
  + **Wzdłuż łuku**: usuwa zewnętrzne krawędzie i tworzy zaokrąglenie o promieniu równym zdefiniowanej grubości
  + **Stycznie**:
  + **Przecięcie**:
* **Przecięcie**:
* **Samoprzecięcie**: Włącza autoprzecięcie.
* Ściany: Wybierz ściany, które mają zostać usunięte, a następnie kliknij przycisk Gotowe.
* **Aktualizuj widok**: Automatyczna aktualizacja widoku w czasie zmiany parametrów.

## Uwagi

* Obiekty typu [odnośnik](/App_Link/pl "App Link/pl") powiązane z odpowiednimi typami obiektów mogą być również używane jako kształty i do określania osi. [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl")

Złożone kształty mogą dawać dziwaczne, trudne do przewidzenia rezultaty. Należy dokładnie sprawdzić wynikowy kształt i zapisać pracę przed zastosowaniem operacji.

## Odnośniki

Dobry przykład korzystania z tego narzędzia można odnaleźć na forum:[Re: Pomoc przy projektowaniu prostej obudowy](http://forum.freecadweb.org/viewtopic.php?f=3&t=3766&p=29741&hilit=enclosure#p29547)

## Przykłady

**Wydrążony cylinder**

1. Utwórz ![](/images/Part_Cylinder.svg) [Walec](/Part_Cylinder/pl "Part Cylinder/pl") o promieniu 10mm i wysokości 20mm,
2. Wybierz górną i dolną powierzchnię cylindra,
3. Kliknij na przycisk ![](/images/Part_Thickness.svg) Grubość *(nie trzeba zmieniać domyślnych ustawień)* i naciśnij przycisk OK.

Uwagi:

* Dla tego kształtu, rozważ użycie narzędzia ![](/images/Part_Tube.svg) [Rura](/Part_Tube/pl "Part Tube/pl").
* Wybierz tylko górną powierzchnię cylindra, aby utworzyć zbiornik.

![](/images/ThicknessEsempio1.png)

![](/images/ThicknessEsempio2.png)

**Obudowa**

![](/images/ThicknessEsempio3.png)

![](/images/ThicknessEsempio4.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Thickness/pl&oldid=1336841>"