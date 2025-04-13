---
title: Środowisko pracy Część
---
## Wprowadzenie

W programie FreeCAD słowo "Część" jest zwykle używane w odniesieniu do typu obiektu ![](/images/Std_Part.svg) [Std: Część](/Std_Part/pl "Std Part/pl") *(klasa `App::Part`)*, kontenera, który jest zdefiniowany przez system bazowy. Ta część jest używana do zarządzania pozycją kształtów 3D w celu tworzenia złożeń mechanicznych.

Zobacz stronę ![](/images/Std_Part.svg) [Std: Część](/Std_Part/pl "Std Part/pl"), aby uzyskać więcej informacji na temat tego typu obiektów.

## Użycie

Narzędzie Std: Część nie jest definiowane przez konkretne środowisko pracy, ale przez system bazowy, dlatego znajduje się w **pasku narzędzi struktury**, który jest dostępny we wszystkich [środowiskach pracy](/Workbenches/pl "Workbenches/pl").

1. Naciśnij przycisk ![](/images/Std_Part.svg) [Stwórz nową część](/Std_Part/pl "Std Part/pl"). Pusta część jest tworzona i automatycznie staje się ona *[aktywna](/Std_Part/pl#Status_aktywno.C5.9Bci "Std Part/pl")*.

## Uwagi

W nieformalnym użyciu, "Część" może być dowolną figurą geometryczną, która jest widoczna w oknie [widoku 3D](/3D_view/pl "3D view/pl"), a zatem jej pojęcie może być mylone z pojęciem "[Zawartości](/Body/pl "Body/pl")" lub "[Złożenia](/Assembly/pl "Assembly/pl")".

Jednakże, gdy wymagana jest większa precyzja, należy dokonać rozróżnienia.

* "[Zawartość](/Body/pl "Body/pl")" jest używana dla pojedynczych, ciągłych elementów, zazwyczaj tworzonych za pomocą środowisk [Część](/Part_Workbench/pl "Part Workbench/pl") lub [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl").
* "Część" jest używana do grupowania pojedynczych "Zawartości" lub kilku z nich w celu utworzenia "Złożenia".
* "Złożenie" jest zbiorem "Części" ułożonych w jakiś sposób, ręcznie lub przy użyciu środowiska pracy.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part/pl&oldid=1102865>"