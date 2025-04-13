---
title: MES Materiał zbrojony (beton)
---

|                                                    |
| -------------------------------------------------- |
| MES: Materiał zbrojony (beton)                     |
| Lokalizacja w menu                                 |
| Model → Materiały → Materiał zbrojony (beton)      |
| Środowisko pracy                                   |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")        |
| Domyślny skrót                                     |
| _brak_                                             |
| Wprowadzono w wersji                               |
| -                                                  |
| Zobacz także                                       |
| [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl") |
|                                                    |

| Solvery  |
| -------- |
| CalculiX |

## Opis

Tworzy materiał o zbrojonej matrycy. Łączy materiał matrycy (np. beton) z materiałem zbrojenia (np. stal).

![](/images/FEM_reinforced_material_task_panel.PNG)

Okno dialogowe materiału zbrojonego

## Użycie

1. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Kliknij przycisk ![](/images/FEM_MaterialReinforced.svg) Materiał zbrojony (beton) lub wybierz opcję **Model → Materiały → ![](/images/FEM_MaterialReinforced.svg) Materiał zbrojony (beton)** z menu.
2. Wybierz _Materiał matrycy_ z listy rozwijanej.
3. Opcjonalnie wciśnij przycisk Uruchom edytor aby skorzystać z [edytora materiałów](/Material_Edit/pl "Material Edit/pl"). Następujące stałe materiałowe są wymaganeː moduł Younga, współczynnik Poissona, wytrzymałość na ściskanie oraz kąt tarcia.
4. Wybierz _Materiał zbrojenia_ z listy rozwijanej.
5. Opcjonalnie wciśnij przycisk Uruchom edytor aby skorzystać z [edytora materiałów](/Material_Edit/pl "Material Edit/pl"). Granica plastyczności musi być zdefiniowana.

## Uwagi

1. Aby edytować istniejący obiekt MaterialReinforced: kliknij na nim dwukrotnie w [widoku drzewa](/Tree_view/pl "Tree view/pl").

- W ustawieniach solvera CalculiX należy ustawić Material Nonlinearity na linear jeśli [Nieliniowy materiał mechaniczny](/FEM_MaterialMechanicalNonlinear/pl "FEM MaterialMechanicalNonlinear/pl") nie jest zdefiniowany.
- Więcej informacji na temat tego narzędzia oraz przykład jego użycia można znaleźć na stronie [MES: Analiza betonu zbrojonego](/Analysis_of_reinforced_concrete_with_FEM/pl "Analysis of reinforced concrete with FEM/pl").
- Aby zapoznać się z samouczkiem wideo _(opartym na [poradniku FEM](/FEM_tutorial/pl "FEM tutorial/pl"))_, który wykorzystuje to narzędzie, obejrzyj: [Poradnik FEM Materiał zbrojony](https://www.youtube.com/watch?v=SZTIqhfCSVc).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MaterialReinforced/pl&oldid=1571186>"
