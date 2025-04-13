---
title: Środowisko pracy DynamicData
---
![](/images/DynamicData_workbench_icon.svg)

Ikonka FreeCAD dla zewnętrznego środowiska pracy DynamicData

## Informacje ogólne

DynamicData to [zewnętrzne środowisko pracy](/External_workbenches/pl "External workbenches/pl"), za pomocą którego można utworzyć obiekt kontenera do przechowywania niestandardowych właściwości.

Za pomocą tego środowiska pracy można utworzyć nową niestandardową [właściwość](/Property/pl "Property/pl") dowolnego typu obsługiwanego przez FreeCAD. Na przykład właściwość Length lub [umiejscowienie](/Placement/pl "Placement/pl"). Te niestandardowe właściwości mogą być następnie używane w [Wyrażeniach](/Expressions/pl "Expressions/pl") tak jak każda inna właściwość. Na przykład można utworzyć właściwość Length o nazwie "Szerokość" i odwoływać się do niej podczas związania elementu szkicu. Następnie, gdy właściwość "Szerokość" zostanie zmieniona, wiązanie szkicu zostanie automatycznie zaktualizowane. Jest to podobne do sposobu, w jaki można korzystać z arkusza kalkulacyjnego, ale jest bardziej interaktywne, ponieważ właściwości mogą być zmieniane przy jednoczesnym zachowaniu [widoku 3D](/3D_view/pl "3D view/pl"), a także pozwala na szerszą gamę typów właściwości.

Niektóre funkcje obejmują:

* Możliwość importowania nazwanych więzów ze szkicu.
* Możliwość kopiowania właściwości lub ustawiania wartości właściwości z jednego obiektu do drugiego.
* Obiekty kontenerowe pozostają kompatybilne z instalacjami FreeCAD, które nie mają zainstalowanego środowiska roboczego.

## Instalacja

To środowisko robocze można zainstalować z [Menedżera dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl"). W celu ręcznej instalacji zobacz poradnik [Instalacja większej ilości środowisk pracy](/Installing_more_workbenches/pl "Installing more workbenches/pl").

## Odnośniki internetowe

* Kod źródłowy hostowany w GitHub: [github.com](https://github.com/mwganson/DynamicData)
* Oficjalna pełna dokumentacja [[1]](https://github.com/mwganson/DynamicData/blob/master/README.md)

## Zewnętrzne środowiska pracy

Środowiska pracy FreeCAD są łatwe do zaprogramowania w środowisku [Python](/Python/pl "Python/pl"). Dlatego też, wiele osób opracowuje dodatkowe środowiska pracy wykraczające poza główny obszar rozwoju programu FreeCAD.

Strona [Zewnętrzne środowiska pracy](/External_workbenches/pl "External workbenches/pl") zawiera informacje i poradniki na temat niektórych z nich, a projekt [Dodatki FreeCAD](https://github.com/FreeCAD/FreeCAD-addons) ma na celu zebranie ich i uczynienie łatwymi do zainstalowania z poziomu programu FreeCAD.

Nowe środowiska pracy są w czasie tworzenia, bądź cierpliwy!

Retrieved from "<http://wiki.freecad.org/index.php?title=DynamicData_Workbench/pl&oldid=1477679>"