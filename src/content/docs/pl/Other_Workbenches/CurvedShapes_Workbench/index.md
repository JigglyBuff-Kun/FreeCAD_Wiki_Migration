---
title: Środowisko pracy Kształty zakrzywione
---

:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::
![](/images/CurvedShapes_workbench_icon.svg)

Ikonka FreeCAD dla środowiska pracy Kształty zakrzywione

## Wprowadzenie

Środowisko pracy _Kształty zakrzywione_ jest [zewnętrznym środowiskiem](/External_workbenches/pl "External workbenches/pl") FreeCAD, które pozwala na tworzenie kształtów 3D z krzywych 2D.

## Instalacja

Zalecana sposób instalacji można wykonać poprzez ![](/images/Std_AddonMgr.svg). [Menadżer dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl") uruchamiany w menu **Przybory → Menadżer dodatków**.

## Przybory

- ![](/images/CurvedShapes_CurvedArray.svg) [Szyk krzywych](/CurvedShapes_CurvedArray/pl "CurvedShapes CurvedArray/pl"): Tworzy szyk i zmienia rozmiar elementów w granicach jednej lub więcej krzywych kadłuba.
- ![](/images/CurvedShapes_CurvedSegment.svg) [Segment krzywej](/index.php?title=CurvedShapes_CurvedSegment/pl&action=edit&redlink=1 "CurvedShapes CurvedSegment/pl (page does not exist)"): Interpoluje pomiędzy dwiema krzywymi 2D. Interpolowane krzywe mogą być zmieniane w granicach niektórych krzywych kadłubowych.
- ![](/images/CurvedShapes_InterpolatedMiddle.svg) [Interpolowana środkowa](/index.php?title=CurvedShapes_InterpolatedMiddle/pl&action=edit&redlink=1 "CurvedShapes InterpolatedMiddle/pl (page does not exist)"): Interpoluje kształt 2D pośrodku pomiędzy dwiema krzywymi 2D. Kształty bazowe mogą być połączone z kształtem posiadającym ostry narożnik.
- ![](/images/CurvedShapes_SurfaceCut.svg) [Przekrój powierzchni](/index.php?title=CurvedShapes_SurfaceCut/pl&action=edit&redlink=1 "CurvedShapes SurfaceCut/pl (page does not exist)"): Tnie powierzchnię, aby uzyskać krzywą konturu lub ścianę. To narzędzie jest podobne do ![](/images/Part_CrossSections.svg) [Przekrój poprzeczny](/Part_CrossSections/pl "Part CrossSections/pl") w środowisku ![](/images/Workbench_Part.svg) [Część](/Part_Workbench/pl "Part Workbench/pl"), ale jest w pełni parametryczne i posiada opcję redukcji złożoności krzywej wyjściowej. Próbuje usunąć nakładające się krawędzie.

### Przykłady

- ![](/images/CurvedShapes_HortenHIX.svg) [HortenHIX](/index.php?title=CurvedShapes_HortenHIX/pl&action=edit&redlink=1 "CurvedShapes HortenHIX/pl (page does not exist)"): Skrypt w Pythonie tworzący kształt [Horten Ho 229 _(zwany także Horten H IX)_](https://en.wikipedia.org/wiki/Horten_Ho_229), myśliwca typu stealth, który został zbudowany w Niemczech w 1944 roku.
- ![](/images/CurvedShapes_FlyingWingS800.svg) [FlyingWingS800](/index.php?title=CurvedShapes_FlyingWingS800/pl&action=edit&redlink=1 "CurvedShapes FlyingWingS800/pl (page does not exist)"): Skrypt w Pythonie, który tworzy kształt skrzydła latającego modelu sterowanego radiowo.

## Bibliografia

- Autor: @chbergmann
- Github repo: <https://github.com/chbergmann/CurvedShapesWorkbench>

## Powiązane

- [Środowisko pracy Krzywe](/Curves_Workbench/pl "Curves Workbench/pl")
- [Środowisko pracy AirPlaneDesign](https://github.com/FredsFactory/FreeCAD_AirPlaneDesign)

## Zewnętrzne środowiska pracy

Retrieved from "<http://wiki.freecad.org/index.php?title=CurvedShapes_Workbench/pl&oldid=1219666>"
