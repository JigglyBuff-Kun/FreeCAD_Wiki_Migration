---
title: Złożenie
---
## Wprowadzenie

W FreeCAD słowo **Złożenie** jest zwykle używane w odniesieniu do modelu [3D](/Model/pl "Model/pl"), który składa się z kilku rozróżnialnych części, które są połączone ze sobą w jakiś sposób, aby stworzyć funkcjonalny obiekt, tak jak powstają prawdziwe produkty.

Na przykład śruba, podkładka i nakrętka to trzy oddzielne elementy, które po połączeniu tworzą złożenie.

![](/images/PartDesign_Body_contiguous_separate.png) ![](/images/PartDesign_Body_contiguous_assembly.png)

Z lewej: trzy pojedyncze przylegające bryły, każda z nich modelowana przez [Zawartość](/PartDesign_Body/pl "PartDesign Body/pl") środowiska Projekt Części. Z prawej: poszczególne bryły zestawione razem w [Część](/Std_Part/pl "Std Part/pl"), aby stworzyć złożenie.

## Użycie

### Montaż manualny

Ogólnie rzecz biorąc, nie potrzebujesz specjalnych narzędzi do tworzenia złożeń, wystarczy, że będziesz miał wiele różnych [Zawartości](/Body/pl "Body/pl") poukładanych w określony sposób.

Aby ustawić ciała tam, gdzie chcesz, możesz

* użyć narzędzia [Przemieszczenie](/Std_TransformManip/pl "Std TransformManip/pl"),
* użyć narzędzia ![](/images/Std_Placement.svg) [Umiejscowienie](/Std_Placement/pl "Std Placement/pl") okna dialogowego, lub.
* zmodyfikować właściwość [Umiejscowienie](/Placement/pl "Placement/pl") bezpośrednio w [edytorze właściwości](/Property_editor/pl "Property editor/pl").

Możesz użyć jednego z pseudo-montaży [środowisk zewnętrznych](/External_workbenches/pl "External workbenches/pl"), takich jak Lattice2, Manipulator, Part-o-magic lub WorkFeature, aby pomóc Ci znaleźć przecięcia, zmierzyć odległości i rozmieścić obiekty w pożądany sposób.

Ogólnie rzecz biorąc, obiekt ![](/images/Std_Part.svg) [Część](/Std_Part/pl "Std Part/pl") został zaprojektowany tak, aby służył jako podstawowy budulec do tworzenia złożeń. Obiekt ten służy do grupowania kilku [Zawartości](/Body/pl "Body/pl") i przenoszenia ich razem jako jednostki, czyli jako podzespołu. Następnie ten podzespół może być umieszczony obok lub użyty wewnątrz innych podzespołów, aby stworzyć ostateczne złożenie.

### Złożenie z więzami

Można też użyć wbudowanego [środowiska pracy Złożenie](/Assembly_Workbench/pl "Assembly Workbench/pl") lub jego zewnętrznych odpowiedników, jak ![](/images/A2p_workbench.svg) [A2plus](/A2plus_Workbench/pl "A2plus Workbench/pl"), ![](/images/Assembly3_workbench_icon.svg) [Złożenie 3](/Assembly3_Workbench/pl "Assembly3 Workbench/pl"), czy ![](/images/Assembly4_workbench_icon.svg) [Złożenie 4](/Assembly4_Workbench/pl "Assembly4 Workbench/pl"). Należy pamiętać, że [Złożenie 2](/Assembly2_Workbench/pl "Assembly2 Workbench/pl") nie jest utrzymywany, więc nie jest zalecany dla nowych modeli.

Środowiska pracy złożeń wykorzystują wiązania i wyrażenia do tworzenia relacji między obiektami w modelu, aby matematycznie powiązać obiekty w miejscu, na przykład: "ta ściana powinna przylegać do tej drugiej ściany", "ten walec powinien być współśrodkowy z tym okręgiem", "ten punkt powinien podążać za tą krawędzią" itp.

Jest to zaawansowane wykorzystanie oprogramowania, które jest zwykle używane w złożonych systemach mechanicznych. Jeśli twój [model](/Model/pl "Model/pl") nie jest bardzo skomplikowany, to użycie środowiska do złożeń może nie być konieczne.

## Uwagi

* Od wersji FreeCAD 1.0, dostępne jest oficjalne [środowisko pracy Złożenie](/Assembly_Workbench/pl "Assembly Workbench/pl") uwzględnione w domyślnej instalacji.

* Zauważ, że środowiska złożeń są z reguły niekompatybilne między sobą. Jeśli stworzysz złożenie w jednym z nich, powinieneś trzymać się oryginalnego środowiska i nie używać innego w tym samym dokumencie.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly/pl&oldid=1479231>"