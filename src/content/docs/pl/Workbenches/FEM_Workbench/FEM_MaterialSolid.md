---
title: MES Materiał dla bryły
---

|                                                    |
| -------------------------------------------------- |
| MES: Materiał dla ciała stałego                    |
| Lokalizacja w menu                                 |
| Model → Materiały → Materiał dla ciała stałego     |
| Środowisko pracy                                   |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")        |
| Domyślny skrót                                     |
| M S                                                |
| Wprowadzono w wersji                               |
| -                                                  |
| Zobacz także                                       |
| [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl") |
|                                                    |

| Solvery   |
| --------- |
| Wszystkie |

## Opis

Tworzy materiał dla ciała stałego.

![](/images/FEMMaterialSolidProperties.png)

Okno dialogowe materiału MES

## Użycie

1. Istnieje kilka sposobów na wywołanie tego poleceniaː
   - Wciśnij przycisk ![](/images/FEM_MaterialSolid.svg) **Materiał dla ciała stałego**.
   - Wybierz opcję **Model → Materiały → ![](/images/FEM_MaterialSolid.svg) Materiał dla ciała stałego‏‎** z menu.
2. Zostanie otwarte okno dialogowe materiału MES.
3. Wybierz materiał z listy rozwijanej. Przykładowo, materiał _CalculiX-Steel_ jest często używany do analiz mechanicznych. Opcjonalnie wciśnij przycisk Uruchom edytor aby skorzystać z [edytora materiałów](/Material_Edit/pl "Material Edit/pl").
4. Opcjonalnie, zaznacz pole Użyj tego panelu zadań aby zmodyfikować właściwości materiału, takie jak gęstość, moduł Younga, współczynnik Poissona itp.
5. Jeśli definiujesz materiał dla całego modelu, nie wybieraj żadnych obiektów geometrycznych _(zostaw pustą listę odniesień)_. Materiał zostanie automatycznie przypisany do całego modelu. W innym wypadku, przypisz materiały do wybranych obszarów ręcznie, poprzez wybieranie ich do poszczególnych definicji materiału, ale nie zostawiaj żadnej części modelu bez definicji materiału.
6. Wciśnij przycisk Zamknij aby zamknąć okno dialogowe.

## Uwagi

1. Aby edytować istniejący obiekt MaterialSolid: dwukrotnie kliknij na nim w [widoku drzewa](/Tree_view/pl "Tree view/pl").
2. Materiał mechaniczny korzysta ze [słowa kluczowego \*MATERIAL w CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node216.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MaterialSolid/pl&oldid=1571182>"
