---
title: Arch Ausstattung
---
:::caution
DIESER BEFEHL IST BESTANDTEIL DES INTEGRIERTEN ARBEITSBEREICHSBIMIN V1.0Diese Seite wurde für diese Version aktualisiert.
:::

|  |
| --- |
| Arch Ausstattung |
| Menüeintrag |
| 3D/BIM → Ausstattung |
| Arbeitsbereich |
| [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| E Q |
| Eingeführt in Version |
| - |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Das Werkzeug **Arch Ausstattung** bietet einen einfachen und bequemen Weg, nichttragende, einzelndstehende Elemente wie Möbelstücke, Sanitärgegenstände oder elektrische Geräte zu Projekten hinzuzufügen. Ausstattungen basieren auf [Part-Formen](/Part_Workbench/de "Part Workbench/de"), die es erlauben, von der Stabilität und den Möglichkeiten von BRep-Geometrien zu profitieren und nette Ansichten von Drauf- und Schnittansichten zu erzeugen.

![](/images/Arch_equipment_example.jpg)

Möbelobjekte, die in einem [Arch Ausstattung](/Arch_Equipment "Arch Equipment") Objekt eingeschlossen sind. Die flachen Projektionen können mit dem [Entwurf Shape2DAnsicht](/Draft_Shape2DView/de "Draft Shape2DView/de") Werkzeug erhalten werden.

Seit v0.17 können Ausstattungsobjekte auch eine Daten-Eigenschaft**HiRes**-Eigenschaft haben, woran ein [Netz](/Mesh_Workbench/de "Mesh Workbench/de")-Objekt angeheftet werden kann. Ausstattungsobjekte können dann veranlasst werden, dieses Netz anstatt ihrer Form in der 3D-Ansicht anzuzeigen, um so beliebige hochauflösende Netz-Objekte wie detaillierte Möbelstücke zu verwenden, die üblicherweile auf Web-Seiten zu finden sind.

![](/images/Arch_equipment_mesh.jpg)

Möbelobjekte innerhalb eines Arch Ausstattung Objekts, mit einem beigefügten hochauflösenden Netz

Durch Nutzung des Arch OBJ Exporteurs können alle Ausstattungsobjekte im Netz Anzeige Modus als Netz anstatt als Form exportiert werden.

## Anwendung

1. Eine [Part](/Part_Workbench/de "Part Workbench/de")-Form und wahlweise ein [Netzobjekt](/Mesh_Workbench/de "Mesh Workbench/de") auswählen.
2. Die Schaltfläche ![](/images/Arch_Equipment.svg) Ausstattung drücken oder das Tastaturkürzel E dann Q.

## Eigenschaften

Eine Arch-Ausstattung (Equipment-Objekt) besitzt die gemeinsamen Eigenschaften und Verhaltensweisen aller [Arch-Komponenten](/Arch_Component/de "Arch Component/de").

* Daten-Eigenschaft**Model**: Eine Beschreibung des Modells dieser Ausstattung.
* Daten-Eigenschaft**Url**: Ein URL der Produktseite, wo mehr Informationen zu dieser Ausstattung gefunden werden können.
* Daten-Eigenschaft**Mesh**: Eine für diese Ausstattung zu verwendende [Netz](/Mesh_Workbench/de "Mesh Workbench/de")-Darstellung. Wenn gesetzt, wird der **Netz**-Anzeige-Modus verfügbar.

## Skripten

*Siehe auch:* [Arch API](/Arch_API/de "Arch API/de") und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug Ausstattung kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit folgender Funktion verwendet werden:

```
Equipment = makeEquipment(baseobj=None, placement=None, name="Equipment")

```

* Erstellt ein `Equipment`-Objekt aus dem gegebenen `baseobj`, das ein `Part`- oder `Mesh`-Objekt sein kann.
* Wenn ein `Placement` angegeben ist, wird es benutzt.
* Es liefert `None` zurück, falls die Operation fehlschlägt.

Beispiel:

```
import FreeCAD, Arch

Box = FreeCAD.ActiveDocument.addObject("Part::Box", "Box")
Box.Length = 500
Box.Width = 2000
Box.Height = 600

Equip = Arch.makeEquipment(Box)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Equipment/de&oldid=1542022>"