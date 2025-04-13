---
title: Rysunek Techniczny Dodaj oś ściany
---
|  |
| --- |
| Rysunek Techniczny: Dodaj oś ściany |
| Lokalizacja w menu |
| Rysunek Techniczny → Dodaj linie → Dodaj oś ściany |
| Środowisko pracy |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.19 |
| Zobacz także |
| [Dodaj oś pomiędzy dwiema liniami](/TechDraw_2LineCenterLine/pl "TechDraw 2LineCenterLine/pl"), [Dodaj oś pomiędzy dwoma punktami](/TechDraw_2PointCenterLine/pl "TechDraw 2PointCenterLine/pl") |
|  |

## Opis

Narzędzie **Dodaj oś ściany** dodaje linię środkową do wybranych ścian.

![](/images/TechDraw_FaceCenterLine_Sample.png)

Oś dodana do ściany.

## Użycie

1. Wybierz jedną lub więcej ścian w widoku.
2. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/TechDraw_FaceCenterLine.svg) Dodaj oś ściany.
   * Wybierz opcję z menu **Rysunek Techniczny → Dodaj linie → ![](/images/TechDraw_FaceCenterLine.svg) Dodaj oś ściany**.
3. Otworzy się panel zadań. Więcej informacji znajduje się w sekcji [Opcje](#Opcje).
4. Naciśnij przycisk OK, aby potwierdzić.
5. Linia środkowa zostanie dodana w punkcie środkowym obwiedni wybranych powierzchni.

## Edycja

Dowolne narzędzie poleceń linii środkowej *(![](/images/TechDraw_FaceCenterLine.svg) Dodaj oś ściany,* 
![](/images/TechDraw_2LineCenterLine.svg) [Dodaj oś pomiędzy dwiema liniami](/TechDraw_2LineCenterLine/pl "TechDraw 2LineCenterLine/pl"),
![](/images/TechDraw_2PointCenterLine.svg) [Dodaj oś pomiędzy dwoma punktami](/TechDraw_2PointCenterLine/pl "TechDraw 2PointCenterLine/pl"))
może zostać uzyte do edycji dowolnej z linii środkowej.

1. Wybierz linię środkową.
2. Wywołaj narzędzie linii środkowej.
3. Otworzy się okno dialogowe, w którym można zmienić atrybuty linii środkowej.
4. Naciśnij OK, aby potwierdzić.

## Opcje

* Tryb (przyciski wyboru):
  + **Pionowo**: wymusza pionową linię środkową. Ignorowane w przypadku narzędzia *Dodaj oś pomiędzy dwoma punktami*.
  + **Poziomo**: Wymusza linię środkową w poziomie. Ignorowane w przypadku narzędzia *Dodaj oś pomiędzy dwoma punktami*.
  + **Wyrównane**: Ta opcja nie jest możliwa w przypadku linii środkowej do ściany.
* **Przesuń w poziomie**: Przesuwa linię środkową w lewo lub w prawo od jej normalnego położenia.
* **Przesuń w pionie**: Przesuwa linię środkową w górę lub w dół od jej normalnego położenia.
* **Obróć**: Obraca linię środkową wokół jej środka *(stopnie. + przeciwnie do ruchu wskazówek zegara, - zgodnie z ruchem wskazówek zegara)*.
* **Rozszerz o**: Wydłuża linię środkową o podaną wartość.
* **Kolor**: Kolor linii środkowej.
* **Grubość**: Grubość linii środkowej.
* **Styl**: Styl linii środkowej. Dostępne opcje to:
  + ![](/images/Continuous-line.svg) Ciągła,
  + ![](/images/Dash-line.svg) Kreska,
  + ![](/images/Dot-line.svg) Kropka,
  + ![](/images/DashDot-line.svg) Kreska kropka,
  + ![](/images/DashDotDot-line.svg) Kreska kropka kropka.

## Uwagi

Aby usunąć linię środka należy zaznaczyć ją i nacisnąć Delete. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

* Funkcja Dodaj oś ściany ostatecznie zastąpi dwie właściwości widoku:
  + WIDOK**LniaŚrodkaPoziomo**: Pokazuje poziomą linię środkową w widoku.
  + WIDOK**LniaŚrodkaPionowo**: Pokazuje pionową linię środkową w widoku.

## Właściwości

Linie środka nie mają własnych właściwości, ponieważ nie są obiektami dokumentu.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_FaceCenterLine/pl&oldid=1467349>"