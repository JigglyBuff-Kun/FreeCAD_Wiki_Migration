---
title: Rysunek Techniczny Rozszerzenie Oblicz obszar wybranych powierzchni
---
|  |
| --- |
| Rysunek Techniczny: Rozszerzenie Oblicz obszar wybranych powierzchni |
| Lokalizacja w menu |
| Rysunek Techniczny → Rozszerzenie: Atrybuty / Modyfikatory → Oblicz obszar wybranych powierzchni |
| Środowisko pracy |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.20 |
| Zobacz także |
| [Wymiar powierzchni](/TechDraw_AreaDimension/pl "TechDraw AreaDimension/pl") |
|  |

## Opis

Narzędzie **Oblicz obszar wybranych powierzchni** oblicza obszar wybranych powierzchni i wstawia informację w postaci adnotacji o obszarze.

![](/images/TechDraw_ExtensionAreaAnnotationExample.png)

Po prawej stronie widoczna jest adnotacja o zaznaczonym obszarze.

## Użycie

1. Wybierz jedną lub więcej powierzchni.
2. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/TechDraw_ExtensionAreaAnnotation.svg) **Oblicz obszar wybranych powierzchni**.
   * Wybierz opcję z menu **Rysunek Techniczny → Rozszerzenia: Atrybuty / Modyfikatory → ![](/images/TechDraw_ExtensionAreaAnnotation.svg) Oblicz obszar wybranych powierzchni**.
3. Zostanie obliczany całkowity obszar wybranej powierzchni i wstawiona adnotacja.

## Ograniczenia

* wersja 0.21 i poniżej: Narzędzie nie radzi sobie z powierzchniami o zakrzywionych krawędziach.
* Otwory (*wyspy*) we wskazanych ścianach są ignorowane. [Ten wątek na forum](https://forum.freecad.org/viewtopic.php?p=783325#p783325) pokazuje obejście. Można również użyć narzędzia [Wstaw adnotację obszaru](/TechDraw_AreaDimension/pl "TechDraw AreaDimension/pl"), ale trzeba wtedy prawidłowo ustawić właściwość DANE**References 3D** utworzonego wymiaru.
* Obliczona powierzchnia nie jest dynamicznie powiązana ze ścianą. Jeśli powierzchnia ściany się zmieni, tekst nie zostanie zaktualizowany.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ExtensionAreaAnnotation/pl&oldid=1491460>"