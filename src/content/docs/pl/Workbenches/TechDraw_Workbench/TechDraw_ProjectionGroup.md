---
title: Rysunek Techniczny Wstaw grupę rzutów
---
|  |
| --- |
| Rysunek Techniczny: Wstaw grupę rzutów |
| Lokalizacja w menu |
| Rysunek Techniczny → Widoki → Wstaw grupę rzutów |
| Środowisko pracy |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Wstaw widok](/TechDraw_View/pl "TechDraw View/pl") |
|  |

## Opis

Narzędzie Wstaw grupę rzutów tworzy [rzuty z wielu widoków](https://en.wikipedia.org/wiki/Multiview_projection) jednego lub więcej obiektów 3D, używając tradycyjnego [rzutowania metodą pierwszego kąta (europejskiego)](https://en.wikipedia.org/wiki/Multiview_orthographic_projection#First-angle_projection) lub [rzutowania metodą trzeciego kąta (amerykańskiego)](https://en.wikipedia.org/wiki/Multiview_orthographic_projection#Third-angle_projection). Można również dołączyć izometryczne widoki 4 przednich narożników.

[dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Narzędzie [Wstaw widok](/TechDraw_View/pl "TechDraw View/pl") również może utworzyć grupę rzutów. Zalecane jest używanie tamtego narzędzia.

![](/images/TechDraw_ProjGroup_example.png)

Trzy widoki ortogonalne i jeden izometryczny widok na obiekt bryły.

## Użycie

Zobacz stronę [Wstaw widok](/TechDraw_View/pl#Usage_Projection_Group_Item_and_Projection_Group "TechDraw View/pl"), ale do wywołania narzędzia wybierz opcję **Rysunek Techniczny → Widoki → ![](/images/TechDraw_ProjectionGroup.svg) Wstaw grupę rzutów** z menu.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Grupa rzutów, formalnie obiekt `TechDraw::DrawProjGroup` ma [właściwości](/TechDraw_View/pl#Właściwości_-_Widok_części "TechDraw View/pl") wspólne dla wszystkich typów Widoków. Ma też następujące dodatkowe właściwości:

### Dane

Podstawa

* DANE**Źródło** (`LinkList`): Łącza do obiektów rysunkowych, które mają zostać przedstawione.
* DANE**XSource** (`XLinkList`): Łącza do obiektów rysunkowych w pliku zewnętrznym.
* DANE**Kotwica** (`Link`): Główny widok w grupie. Zwykle jest to widok z przodu.
* DANE**Typ rzutowania** (`Enumeration`): `Kąt pierwszy` lub `Kąt trzeci`.

Kolekcja

* DANE**Widoki** (`LinkList`): Łącza do widoków w tej Grupie rzutów.

Rozmieść

* DANE**Rozmieszczenie automatyczne** (`Bool`): Jeśli opcja ma wartość `PRAWDA`, poszczególne widoki będą rozmieszczane automatycznie. Użyj `FAŁSZ`, aby rozmieścić je samodzielnie.
* DANE**odstęp X** (`Length`): Poziomy odstęp między widokami przy automatycznym pozycjonowaniu. Należy pamiętać, że Skala i rozmiar innych widoków w grupie również wpływają na odstępy.
* DANE**odstęp Y** (`Length`): Pionowy odstęp między widokami przy automatycznym pozycjonowaniu.

## Uwagi

Grupa Rzutów jako całość dziedziczy właściwości X, Y, Typ Skali, Skala i Obrót z widoku podstawowego.

Pojedyncze widoki w grupie dziedziczą wszystkie właściwości widoku części, ale obiekt **Grupa rzutów** kontroluje skalę wszystkich swoich prezentowanych widoków.

Właściwość **Wektor obrotu** poszczególnych widoków w grupie jest przestarzała od wersji **0.19**. Zamiast tego użyj **Kierunek X**.

Należy pamiętać, że w polu środkowym wyświetlany jest bieżący kierunek projekcji widoku głównego. Nie można go użyć do zmiany kierunku.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Nowa grupa rzutów może zostać utworzona za pomocą [makrodefinicji](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") przy użyciu następujących funkcji:

```
import FreeCAD as App

doc = App.ActiveDocument
cyl = doc.addObject("Part::Cylinder", "Cylinder")
doc.recompute()

page = doc.addObject("TechDraw::DrawPage", "Page")
template = doc.addObject("TechDraw::DrawSVGTemplate", "Template")
template.Template = App.getResourceDir() + "Mod/TechDraw/Templates/A4_LandscapeTD.svg"
page.Template = template

# Toggle the visibility of the page to ensure its width and height are updated (hack):
page.Visibility = False
page.Visibility = True

group = doc.addObject("TechDraw::DrawProjGroup", "ProjGroup")
page.addView(group)
group.Source = [cyl]
group.ProjectionType = "Third Angle"

front_view = group.addProjection("Front") # First projection will become the Anchor.
group.Anchor.Direction = (0, 1, 0)
group.Anchor.RotationVector = (1, 0, 0)

left_view = group.addProjection("Left")
top_view = group.addProjection("Top")

group.X = page.PageWidth / 2
group.Y = page.PageHeight / 2

doc.recompute()

```

Uwaga: Przed dodaniem rzutów do grupy należy zawsze dodać **Grupę rzutów** do strony `page.addView(group)`. Dzięki temu Grupa rzutów może używać domyślnych wartości parametrów pochodzących ze strony nadrzędnej.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ProjectionGroup/pl&oldid=1490703>"