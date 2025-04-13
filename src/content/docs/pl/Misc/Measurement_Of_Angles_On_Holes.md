---
title: Pomiar kątów na otworach
---
|  |
| --- |
| Ćwiczenie |
| Temat |
| TechDraw |
| Poziom trudności |
| Podstawowy |
| Czas wykonania |
| 1 minuta |
| Autorzy |
| AnHi |
| Wersja FreeCAD |
| 0.19 |
| Pliki z przykładami |
| *Nie dołączono* |
| Zobacz również |
| *-* |
|  |

## Wprowadzenie

Ten poradnik wyjaśnia, jak tworzyć środkowe linie otworów przy pomocy środowiska pracy ![](/images/Workbench_TechDraw.svg) [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") z dokładnie pozycjonowanymi otworami.

Tworząc kąty dla otworów, nie jest możliwe użycie pionowych lub poziomych linii środkowych *(fałsz / prawda)* we właściwościach widoku. W związku z tą koniecznością tworzone są linie pomocnicze i / lub punkty pomocnicze.

## Sposób postępowania

1. Ustawianie linii osi otworu:

Istnieją pewne możliwości stworzenia linii środkowej dla otworów.
Na początku należy wybrać linie lub punkty na otworze, jak pokazano poniżej.   
Po drugie, do utworzenia linii środkowej można użyć następujących narzędzi z paska narzędzi:

:   ![](/images/TechDraw_2PointCenterLine.svg) [Dodaj linię środkową pomiędzy 2 punktami](/TechDraw_2PointCenterLine "TechDraw 2PointCenterLine")
:   ![](/images/TechDraw_2LineCenterLine.svg) [Dodaj linię środkową pomiędzy 2 liniami](/TechDraw_2LineCenterLine "TechDraw 2LineCenterLine")

![](/images/TechDraw_Tutorial_2PointCenterLine_example.png)

Powyżej: utworzono za pomocą narzędzia ![](/images/TechDraw_2PointCenterLine.svg), które tworzy linię środkową pomiędzy 2 punktami.

![](/images/TechDraw_Tutorial_2LineCenterLine_example.png)

Powyżej: utworzono za pomocą narzędzia ![](/images/TechDraw_2LineCenterLine.svg), które tworzy linię środkową pomiędzy 2 liniami.

W oknie dialogowym Widok złożony wybierz **Wyrównanie** dla osi poza osiami głównymi. "Przedłużyć o" oznacza długość linii środkowej wychodzącej poza linię detalu na rysunku. Przy pomocy opcji **Przesuń poziomo** i **Przesuń pionowo** linia środkowa może w razie potrzeby przesuwać się w kierunku poziomym lub pionowym. **Styl** oznacza kształt linii środkowej.

![](/images/Create-Center-Line3P.JPG)

Powyżej: okienko dialogowe

Utworzona linia środkowa może zostać zmodyfikowana. Wybierz linię środkową i naciśnij przycisk ![](/images/TechDraw_2LineCenterLine.svg) lub ![](/images/TechDraw_2PointCenterLine.svg) z paska narzędzi, którym utworzyłeś linię środkową. Usuwanie linii środkowej może nastąpić, tylko przy pomocy narzędzia ![](/images/TechDraw_CosmeticEraser.svg) z paska narzędzi po uprzednim wybraniu linii środkowej.

2. Ustawianie kątów:

Punkty czworokąta wybierz za pomocą narzędzia ![](/images/TechDraw_Quadrants.svg) z paska narzędzi. Następnie wybierz punkty jak pokazano poniżej i użyj narzędzia ![](/images/TechDraw_Dimension_Angle3Pt.svg) z paska narzędzi, aby utworzyć kąt. Inna kolejność utworzy inne kąty.
Jeśli we właściwościach nie ma punktu zaczepienia na linii środkowej należy zmienić **licznik ISO**.

![](/images/AnHi11.PNG)

Powyżej: Kolejność postępowania przy wyborze.

Retrieved from "<http://wiki.freecad.org/index.php?title=Measurement_Of_Angles_On_Holes/pl&oldid=1251822>"