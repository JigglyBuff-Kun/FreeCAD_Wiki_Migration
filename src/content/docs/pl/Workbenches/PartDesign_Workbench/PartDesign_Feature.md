---
title: Projekt Części Cecha
---
## Wprowadzenie

Cecha odnosi się do "kroku" w procesie modelowania, który dzieje się wewnątrz [zawartości projektu części](/PartDesign_Body/pl "PartDesign Body/pl"). Na przykład, za każdym razem kiedy dodajesz sześcian opcją [Addytywny sześcian](/PartDesign_AdditiveBox/pl "PartDesign AdditiveBox/pl"), dodajesz cechę, kiedy dodajesz fazkę do krawędzi opcją [Fazka](/PartDesign_Chamfer/pl "PartDesign Chamfer/pl"), dodajesz kolejną cechę. Kiedy wycinasz otwór używając [szkicu](/Sketch/pl "Sketch/pl") i opcji [kieszeń](/PartDesign_Pocket/pl "PartDesign Pocket/pl"), dodajesz inną cechę.

![](/images/PartDesign_Feature_example.png)

Edycja elementu w [Zawartości Projektu części](/PartDesign_Body/pl "PartDesign Body/pl") z trzema kolejnymi elementami.

Istnieje wiele rodzajów cech, które mogą dodawać lub usuwać objętość z bryły początkowej. Słowo "cecha" odnosi się do samej operacji, jak również do bryły powstałej po tej operacji.

Aby dowiedzieć się więcej o możliwości tworzenia obiektów bryłowych za pomocą środowiska [Projekt części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") zobacz stronę [edycja cech](/Feature_editing/pl "Feature editing/pl").

## Użycie

Prawie wszystkie narzędzia środowiska pracy [Projekt części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") są przeznaczone do dodawania cech do [zawartości projektu części](/PartDesign_Body/pl "PartDesign Body/pl"). Narzędzia te mogą być dostępne z menu i przycisków paska narzędzi, gdy obiekt lub element podrzędny *(wierzchołek, krawędź, ściana)* jest zaznaczony.

Cechy mogą być umieszczone w różnych kategoriach:

* Cechy bazowe: odnosi się do obiektu Cecha bazowa, który może być utworzony w [zawartości Projektu części](/PartDesign_Body/pl "PartDesign Body/pl")
* addytywne i subtraktywne
  + Kształty pierwotne: [sześcian](/PartDesign_AdditiveBox/pl "PartDesign AdditiveBox/pl"), [stożek](/PartDesign_AdditiveCone/pl "PartDesign AdditiveCone/pl"), [walec](/PartDesign_AdditiveCylinder/pl "PartDesign AdditiveCylinder/pl"), [elipsoida](/PartDesign_AdditiveEllipsoid/pl "PartDesign AdditiveEllipsoid/pl"), [graniastosłup](/PartDesign_AdditivePrism/pl "PartDesign AdditivePrism/pl"), [sfera](/PartDesign_AdditiveSphere/pl "PartDesign AdditiveSphere/pl"), [torus](/PartDesign_AdditiveTorus/pl "PartDesign AdditiveTorus/pl"), oraz [klin](/PartDesign_AdditiveWedge/pl "PartDesign AdditiveWedge/pl").
  + Pierwotne kształty odejmowalne: [Subtraktywny sześcian](/PartDesign_SubtractiveBox/pl "PartDesign SubtractiveBox/pl"), [Subtraktywny stożek](/PartDesign_SubtractiveCone/pl "PartDesign SubtractiveCone/pl"), [Subtraktywny walec](/PartDesign_SubtractiveCylinder/pl "PartDesign SubtractiveCylinder/pl"), [Subtraktywna elipsoida](/PartDesign_SubtractiveEllipsoid/pl "PartDesign SubtractiveEllipsoid/pl"), [Subtraktywny Pgraniastosłup](/PartDesign_SubtractivePrism/pl "PartDesign SubtractivePrism/pl"), [Subtraktywna sfera](/PartDesign_SubtractiveSphere/pl "PartDesign SubtractiveSphere/pl"), [Subtraktywny torus](/PartDesign_SubtractiveTorus/pl "PartDesign SubtractiveTorus/pl"), i [Subtraktywny klin](/PartDesign_SubtractiveWedge/pl "PartDesign SubtractiveWedge/pl").
  + Oparte na profilu: [wyciągnięcie](/PartDesign_Pad/pl "PartDesign Pad/pl"), [wyciągnięcie przez obrót](/PartDesign_Revolution/pl "PartDesign Revolution/pl"), [wyciągnięcie przez profile](/PartDesign_AdditiveLoft/pl "PartDesign AdditiveLoft/pl"), [wyciągnięcie po ścieżce](/PartDesign_AdditivePipe/pl "PartDesign AdditivePipe/pl").
  + Profilowanie odejmowalne: [kieszeń](/PartDesign_Pocket/pl "PartDesign Pocket/pl"), [otwór](/PartDesign_Hole/pl "PartDesign Hole/pl"), [rowek](/PartDesign_Groove/pl "PartDesign Groove/pl"), [Subtraktywne wyciągnięcie przez profile](/PartDesign_SubtractiveLoft/pl "PartDesign SubtractiveLoft/pl"), [Subtraktywne wyciągnięcie po ścieżce](/PartDesign_SubtractivePipe/pl "PartDesign SubtractivePipe/pl").
* [funkcje logiczne](/PartDesign_Boolean/pl "PartDesign Boolean/pl"), w tym łączenie, cięcie i część wspólna.
* Ulepszenia
  + [fazka](/PartDesign_Chamfer/pl "PartDesign Chamfer/pl")
  + [rysunek roboczy](/PartDesign_Draft/pl "PartDesign Draft/pl")
  + [zaokrąglenie](/PartDesign_Fillet/pl "PartDesign Fillet/pl")
  + [grubość](/PartDesign_Thickness/pl "PartDesign Thickness/pl")
* Transformacja.
  + [szyk liniowy](/PartDesign_LinearPattern/pl "PartDesign LinearPattern/pl")
  + [odbicie lustrzane](/PartDesign_Mirrored/pl "PartDesign Mirrored/pl")
  + [transformacja wielokrotna](/PartDesign_MultiTransform/pl "PartDesign MultiTransform/pl")
  + [szyk kołowy](/PartDesign_PolarPattern/pl "PartDesign PolarPattern/pl")
  + [skalowanie](/PartDesign_Scaled/pl "PartDesign Scaled/pl")

## Dziedziczenie

![](/images/FreeCAD_core_objects.svg)

Uproszczony diagram zależności pomiędzy podstawowymi obiektami programu. Obiekty `PartDesign::Feature` są używane do budowania parametrycznych brył 3D, a więc pochodzą z podstawowego obiektu `Part::Feature`..

## Tworzenie skryptów

*Zobacz również:* [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl"), oraz [Obiekty tworzone skryptami](/Scripted_objects/pl "Scripted objects/pl").

Zobacz stronę [cechy części](/Part_Feature/pl "Part Feature/pl"), aby uzyskać ogólne informacje na temat dodawania obiektów z [konsoli Python](/Python_console/pl "Python console/pl").

Zobacz stronę [zawartość Projektu części](/PartDesign_Body/pl "PartDesign Body/pl") aby uzyskać ogólne informacje na temat dodawania Zawartości. Gdy istnieje już bryła, można do niej dołączyć cechy za pomocą metody `addObject()` tej bryły.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject('PartDesign::Body', 'Body')
obj.Label = "Custom label"

feature = App.ActiveDocument.addObject('PartDesign::AdditiveBox', 'Box')
feature.Width = 200
feature.Length = 300
feature.Height = 500
obj.addObject(feature)
App.ActiveDocument.recompute()

feature2 = App.ActiveDocument.addObject('PartDesign::SubtractiveBox', 'Box')
feature2.Width = 50
feature2.Length = 200
feature2.Height = 400
obj.addObject(feature2)
App.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Feature/pl&oldid=1330592>"