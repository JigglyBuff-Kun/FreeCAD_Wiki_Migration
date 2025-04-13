---
title: Rysunek Techniczny Wstaw wymiar promienia
---
|  |
| --- |
| Rysunek Techniczny: Wstaw wymiar promienia |
| Lokalizacja w menu |
| Rysunek Techniczny → Wymiary → Wstaw wymiar promienia |
| Środowisko pracy |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Wstaw wymiar średnicy](/TechDraw_DiameterDimension/pl "TechDraw DiameterDimension/pl") |
|  |

## Opis

Narzędzie **Wstaw wymiar promienia** dodaje wymiar promienia do widoku. Wymiar może być zastosowany do dowolnej krawędzi na rysunku, która jest okręgiem lub łukiem okręgu.

![](/images/TechDraw_Dimension_Radius_example.png)

Pomiar okręgu, wskazanie promienia

## Użycie

Geometrię można wybrać w oknie [Widoku 3D](/3D_view/pl "3D view/pl") lub na rysunku. Niektóre łuki, które wydają się być koliste, są w rzeczywistości elipsami lub krzywymi złozonymi. W takich przypadkach nie można wprowadzić wymiaru promienia.

1. Jeśli zaznaczyłeś geometrię w widoku 3D: dodaj właściwy widok Rysunku Technicznego do zaznaczenia, wybierając go w oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl").
2. Istnieje kilka sposobów wywołania narzędzia:
   * [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Jeśli [preferencja](/TechDraw_Preferences/pl#Wymiary "TechDraw Preferences/pl") **Narzędzie wymiarowania** jest ustawiona na `Narzędzie pojedyncze` (domyślnie): kliknij na strzałce skierowanej w dół po prawej stronie od przycisku ![](/images/TechDraw_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) i wybierz opcję **![](/images/TechDraw_RadiusDimension.svg) Wstaw wymiar promienia** z listy rozwijanej.
   * Jeśli ta preferencja ma inną wartość (i wersja 0.21 i poniżej): wciśnij przycisk ![](/images/TechDraw_RadiusDimension.svg) Wstaw wymiar promienia.
   * Wybierz opcję z menu **Rysunek Techniczny → Wymiary → ![](/images/TechDraw_RadiusDimension.svg) Wstaw wymiar promienia**.
3. Wymiar zostanie dodany do widoku.
4. Wymiar można przeciągnąć do żądanej pozycji.
5. W razie potrzeby dodaj tolerancje zgodnie z opisem na stronie [Wymiarowanie geometrii i tolerancja](/TechDraw_Geometric_dimensioning_and_tolerancing/pl#Tolerancja "TechDraw Geometric dimensioning and tolerancing/pl").

### Wyświetlanie pomiarów 3D

Zapoznaj się również z informacjami na stronie [Wstaw wymiar długości](/TechDraw_LengthDimension/pl#Wyświetlanie_pomiarów_3D "TechDraw LengthDimension/pl")

### Zmiana właściwości

Aby zmienić właściwości obiektu wymiaru, kliknij dwukrotnie na niego w rysunku lub w [widoku drzewa](/Tree_view/pl "Tree view/pl"). Spowoduje to otwarcie okna [dialogowego wymiaru](/TechDraw_LengthDimension/pl#Okno_dialogowe "TechDraw LengthDimension/pl").

## Ograniczenia

Obiekty wymiarowe są podatne na "[problem nazewnictwa topologicznego](/Topological_naming_problem/pl "Topological naming problem/pl")". Zobacz stronę [Wstaw wymiar długości](/TechDraw_LengthDimension/pl "TechDraw LengthDimension/pl"), aby uzyskać więcej informacji.

## Uwagi

Zapoznaj się również informacjami na stroni e[Wymiar długości](/TechDraw_LengthDimension/pl#Uwagi "TechDraw LengthDimension/pl").

## Właściwości

Zobacz stronę [Wymiar długości](/TechDraw_LengthDimension/pl#W.C5.82a.C5.9Bciwo.C5.9Bci "TechDraw LengthDimension/pl").

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Wstaw wymiar promienia** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następujących funkcji:

```
dim1 = FreeCAD.ActiveDocument.addObject("TechDraw::DrawViewDimension", "Dimension")
dim1.Type = "Radius"
dim1.References2D=[(view1, "Edge1")]
page.addView(dim1)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_RadiusDimension/pl&oldid=1486965>"