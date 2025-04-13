---
title: Konstrukcyjna geometria bryły
---
## Wprowadzenie

[Constructive solid geometry](https://en.wikipedia.org/wiki/Constructive_solid_geometry) *(**CSG**)* to paradygmat modelowania, który jest używany w wielu tradycyjnych systemach CAD. Zasadniczo polega on na użyciu pierwotnych obiektów bryłowych i wykonywaniu na nich operacji logicznych, takich jak łączenie, odejmowanie i przecinanie, w celu utworzenia ostatecznego kształtu.

W programie FreeCAD metoda ta jest najczęściej wykorzystywana przy użyciu środowiska pracy ![](/images/Workbench_Part.svg) [Część](/Part_Workbench/pl "Part Workbench/pl"), która posiada możliwość tworzenia pierwotnych obiektów takich jak ![](/images/Part_Box.svg) [sześcian](/Part_Box/pl "Part Box/pl"), ![](/images/Part_Cylinder.svg) [walec](/Part_Cylinder/pl "Part Cylinder/pl"), oraz ![](/images/Part_Sphere.svg) [kula](/Part_Sphere/pl "Part Sphere/pl") oraz łączenia ich ze sobą, lub używania ich do cięcia innych obiektów za pomocą takich narzędzi środowiska pracy Część jak ![](/images/Part_Cut.svg) [Wytnij](/Part_Cut/pl "Part Cut/pl").

![](/images/Part_Constructive_Solid_Geometry_workflow.svg)

Konstruktywna geometria bryłowa *(CSG)*. Można wykonać dowolną liczbę operacji na bryłach pierwotnych, aby utworzyć inne obiekty bryłowe, a następnie połączyć je lub wyciąć, aż do uzyskania ostatecznego kształtu.

Alternatywnie, środowisko pracy ![](/images/Workbench_PartDesign.svg) [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") używa bardziej nowoczesnego podejścia niż proste CSG. Metoda ta jest nazywana [Edycja cech](/Feature_editing/pl "Feature editing/pl"), co oznacza tworzenie bryły bazowej, a następnie dodawanie sekwencyjnych przekształceń parametrycznych w celu uzyskania ostatecznej zawartości.

*Note:* [Zawartość](/PartDesign_Body/pl "PartDesign Body/pl") utworzone za pomocą środowiska pracy [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") może być również użyta w operacji logicznej z innymi obiektami..

## Przykład

![](/images/Part_CGS_workflow_example.svg)

Przykład przepływu pracy z wykorzystaniem geometrii brył konstrukcyjnych *(CSG)*:   
elementy pierwotne są łączone *(połączenie)*. Obliczany jest punkt przecięcia dwóch innych elementów pierwotnych *(wspólny)*,
  
otrzymywana jest różnica *(przecięcie)* dwóch poprzednich kształtów.

## Poradniki

Strona [Poradniki](/Tutorials/pl "Tutorials/pl") zawiera kilka przykładów tworzenia brył za pomocą środowiska pracy ![](/images/Workbench_Part.svg) [Część](/Part_Workbench/pl "Part Workbench/pl"), które wykorzystują metodę **CSG**.

* [Podręcznik:Modelowanie tradycyjne, według CSG](/Manual:Traditional_modeling,_the_CSG_way/pl "Manual:Traditional modeling, the CSG way/pl")
* [Poradnik: Kula Whiffle](/Whiffle_Ball_tutorial/pl "Whiffle Ball tutorial/pl")
* [Poradnik: Podstawy modelowania](/Basic_modeling_tutorial/pl "Basic modeling tutorial/pl")

Retrieved from "<http://wiki.freecad.org/index.php?title=Constructive_solid_geometry/pl&oldid=1536691>"