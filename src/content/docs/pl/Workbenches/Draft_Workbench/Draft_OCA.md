---
title: Rysunek Roboczy OCA
---
## Opis

Draft OCA jest modułem oprogramowania używanym przez ![](/images/Std_Open.svg) [Std: Otwórz](/Std_Open/pl "Std Open/pl"), ![](/images/Std_Import.svg) [Std: Importuj](/Std_Import/pl "Std Import/pl") i ![](/images/Std_Export.svg) [Std: Eksportuj](/Std_Export/pl "Std Export/pl") polecenia do obsługi formatu pliku [OCA](http://groups.google.com/group/open_cad_format).

Format pliku OCA to wysiłek społeczności mający na celu stworzenie bezpłatnego, prostego i otwartego formatu pliku CAD. OCA jest w dużej mierze oparty na formacie pliku GCAD wygenerowanym z [gCAD3D](http://www.gcad3d.org/). Oba formaty mogą być importowane do FreeCAD, a pliki OCA eksportowane przez FreeCAD mogą być otwierane w gCAD3D.

## Importowanie

Importowane mogą być następujące obiekty OCA:

* linie,
* łuki i okręgi,
* obszary zamknięte.

## Eksportowanie

Eksportowane mogą być następujące obiekty FreeCAD:

* linie i polilinie,
* łuki i okręgi,
* ściany.

## Ustawienia

Aby uzyskać więcej informacji zobacz stronę [Ustawienia Importu i Eksportu](/Import_Export_Preferences/pl "Import Export Preferences/pl").

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Do eksportu obiektów do DXF użyj metody `export` modułu importOCA.

```
importOCA.export(exportList, filename)

```

* Dla systemu operacyjnego Windows: użyj / *(ukośnik do przodu)* jako separatora ścieżki w `filename`.

Przykład:

```
import FreeCAD as App
import Draft
import importOCA

doc = App.newDocument()

polygon1 = Draft.make_polygon(3, radius=500)
polygon2 = Draft.make_polygon(5, radius=1500)

doc.recompute()

objects = [polygon1, polygon2]
importOCA.export(objects, "/home/user/Pictures/myfile.oca")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_OCA/pl&oldid=1348724>"