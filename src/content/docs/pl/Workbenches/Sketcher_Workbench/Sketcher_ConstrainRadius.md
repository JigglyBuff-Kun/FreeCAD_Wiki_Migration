---
title: Szkicownik Wiązanie promienia
---
|  |
| --- |
| Szkicownik: Wiązanie promienia |
| Lokalizacja w menu |
| Szkic → Wiązania szkicownika → Wiązanie promienia |
| Środowisko pracy |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl"), [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") |
| Domyślny skrót |
| K R |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Zwiąż automatycznie promień / średnicę](/Sketcher_ConstrainRadiam/pl "Sketcher ConstrainRadiam/pl"), [Wiązanie średnicy](/Sketcher_ConstrainDiameter/pl "Sketcher ConstrainDiameter/pl") |
|  |

## Opis

Narzędzie ![](/images/Sketcher_ConstrainRadius.svg) *Wiązanie promienia* ustala promień okręgów, łuków i [wag krzywych złożonych](/Sketcher_CreateBSpline/pl#Uwagi "Sketcher CreateBSpline/pl").

![](/images/Sketcher_ConstrainRadius_example.png)

## Użycie

Zapoznaj się również z informacjami na stronie [Pomoce kreślarskie](/Sketcher_Workbench/pl#Pomoce_kreślarskie "Sketcher Workbench/pl").

### [Tryb kontynuacji](/Sketcher_Workbench/pl#Tryby_kontynuacji "Sketcher Workbench/pl")

1. Wybierz jeden lub więcej okręgów lub łuków.
2. Naciśnij przycisk ![](/images/Sketcher_ConstrainRadius.svg) [Wiązanie promienia](/Sketcher_ConstrainRadius "Sketcher ConstrainRadius").
3. Otwiera się wyskakujące okno dialogowe do edycji lub potwierdzenia wartości. Naciśnij przycisk OK aby zatwierdzić. W przypadku wybrania wielu okręgów/łuków, wszystkie wiązania przyjmą tę wartość. Edytuj ich odrębne wartości, klikając dwukrotnie na etykietę wymiaru w widoku 3D, lub na liście Wiązań. Kliknij dwukrotnie na wiązanie lub kliknij prawym przyciskiem myszy i wybierz **Zmień wartość**.
4. Opcjonalnie, etykietę wymiaru i linię można przesuwać i obracać w widoku 3D klikając na wartość i przeciągając, jednocześnie trzymając wciśnięty lewy przycisk myszy.

1. Upewnij się, że nie ma zaznaczenia.
2. Istnieje kilka sposobów wywołania narzędzia:
   * [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Jeśli opcja **Wiązania wymiarów** w [preferencjach](/Sketcher_Preferences/pl#Ogólne "Sketcher Preferences/pl") jest ustawiona na `Narzędzie pojedyncze` *(domyślnie)*: naciśnij strzałkę w dół po prawej stronie przycisku ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) i wybierz opcję **![](/images/Sketcher_ConstrainRadius.svg) Wiązanie promienia** z rozwijanej listy.
   * Jeśli ta preferencja ma inną wartość *(i w wersja 0.21 i poniżej)*: naciśnij przycisk ![](/images/Sketcher_ConstrainRadius.svg) **Wiązanie promienia**.
   * Wybierz opcję z menu **Szkic → Wiązania szkicownika → ![](/images/Sketcher_ConstrainRadius.svg) Wiązanie promienia**.
   * [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Kliknij prawym przyciskiem myszy w [widok 3D](/3D_view/pl "3D view/pl") i wybierz opcję **Wiązania wymiarów → ![](/images/Sketcher_ConstrainRadius.svg) Wiązanie promienia** z menu podręcznego.
   * Użyj skrótu klawiaturowego: K, a następnie R.
3. Dalsze kroki można znaleźć na stronie [Zwiąż automatycznie promień / średnicę](/Sketcher_ConstrainRadiam/pl#Tryb_kontynuacji "Sketcher ConstrainRadiam/pl").

### Tryb jednorazowy

Zapoznaj się z informacjami na stronie: [Zwiąż automatycznie promień / średnicę](/Sketcher_ConstrainRadiam/pl#Tryb_jednorazowy "Sketcher ConstrainRadiam/pl").

## Tworzenie skryptów

```
Sketch.addConstraint(Sketcher.Constraint('Radius', ArcOrCircle, App.Units.Quantity('123.0 mm')))

```

Strona [skrypty szkicownika](/Sketcher_scripting/pl "Sketcher scripting/pl") wyjaśnia wartości, których można użyć dla `ArcOrCircle` oraz zawiera dalsze przykłady tworzenia wiązań przy użyciu skryptów języka Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainRadius/pl&oldid=1462172>"