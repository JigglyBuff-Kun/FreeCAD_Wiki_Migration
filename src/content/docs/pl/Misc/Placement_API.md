---
title: Skrypty Umiejscowienie
---

:::caution
(Październik 2019)Nie edytuj tych stron. Informacje są niekompletne i nieaktualne. Najnowsze API można znaleźć wautomatycznie generowana dokumentacja API, lub wygenerować dokumentację samodzielnie, śledząc dokumentDokumentacja źródłowa.
:::

W FreeCAD, umiejscowienie definiuje pozycję i obrót obiektu. Koncepcja umiejscowienia jest szczegółowo wyjaśniona na tej stronie: [Umiejscowienie](/Placement/pl "Placement/pl").

Przykład ustawienia Umiejscowienia obiektu dokumentu:

```
myObj = FreeCAD.ActiveDocument.ActiveObject
pl = FreeCAD.Placement()
pl.move(FreeCAD.Vector(2,0,0))
myObj.Placement = pl

```

![](/images/Class.png) **Placement(** \*) lub (Placement) lub (Matrix) lub (Base, Rotation) lub (Base,Rotation,Center) lub (Base,Axis,Angle**\*)**

**Description**: Konstruuje umiejscowienie, puste lub z podanymi argumentami, lub jako kopię podanego umiejscowienia.

![](/images/Property.png) **Base**

**Returns**: wektor reprezentujący położenie umiejscowienia.

![](/images/Property.png) **Rotation**

**Returns**: czworościan reprezentujący obrót umiejscowienia.

![](/images/Method.png) **inverse(\*\***)\*\*

**Description**: oblicza odwrotność umiejscowienia

**Returns**: umiejscowienie

![](/images/Method.png) **move(\***Vector**\*)**

**Description**: przesuwa umiejscowienie wzdłuż podanego wektora

**Returns**:

![](/images/Method.png) **multVec(\***Vector**\*)**

**Description**: stosuje umiejscowienie do podanego wektora

**Returns**: wektor wynikowy

![](/images/Method.png) **multiply(\***Placement**\*)**

**Description**: zwielokrotnia to umiejscowienie

**Returns**: wynikające umiejscowienie

![](/images/Method.png) **toMatrix(\*\***)\*\*

**Description**:

**Returns**: macierz reprezentująca transformację umiejscowienia

Retrieved from "<http://wiki.freecad.org/index.php?title=Placement_API/pl&oldid=1000318>"
