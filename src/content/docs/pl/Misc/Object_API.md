---
title: Obiekty Api
---

:::caution
(Październik 2019)Nie edytuj tych stron. Informacje są niekompletne i nieaktualne. Najnowsze API można znaleźć wautomatycznie generowana dokumentacja API, lub wygenerować dokumentację samodzielnie, śledząc dokumentDokumentacja źródłowa.
:::

Jako parametryczne, obiekty dokumentów FreeCAD mogą mieć wiele dodatkowych właściwości, ale te są podstawowe, obecne w każdym obiekcie dokumentu FreeCAD. Obiekty mogą być wyszukiwane po prostu przez ich nazwę. Przykład:

```
myObj = FreeCAD.ActiveDocument.myObjectName
print myObj.PropertiesList

```

![](/images/Property.png) **Content**

**Returns**: Reprezentacja XML właściwości obiektu.

![](/images/Property.png) **Label**

**Returns**: Pobiera/ustawia etykietę obiektu. Łańcuch może być typu unicode.

![](/images/Property.png) **Name**

**Returns**: Niepowtarzalna nazwa obiektu.

![](/images/Property.png) **Placement**

**Returns**: Pobiera/ustawia umiejscowienie obiektu. Umiejscowienie określa orientację (obrót) i pozycję ( położenie) w przestrzeni 3D. Funkcja ta jest używana, gdy nie jest wymagane skalowanie lub inne zniekształcenie.

![](/images/Property.png) **PropertiesList**

**Returns**: Lista właściwości obiektu

![](/images/Property.png) **State**

**Returns**: Status obiektu w programie FreeCAD _(np. czy musi być ponownie obliczony)_

![](/images/Property.png) **Type**

**Returns**: Ciąg znaków opisujący typ obiektu

![](/images/Property.png) **ViewObject**

**Returns**: Powiązany dostawca widoku obiektu _(obiekt FreeCADGUI)_

![](/images/Method.png) **getAllDerivedFrom(\*\***)\*\*

**Description**:

**Returns**: Wszyscy potomkowie tego obiektu

![](/images/Method.png) **getDocumentationOfProperty(\*\***)\*\*

**Description**:

**Returns**: Ciąg dokumentacji właściwości tej klasy.

![](/images/Method.png) **getGroupOfProperty(\*\***)\*\*

**Description**:

**Returns**: Nazwa grupy, do której należy właściwość w tej klasie. Właściwości są posortowane w różnych grupach dla wygody.

![](/images/Method.png) **getPropertyByName(\*\***)\*\*

**Description**:

**Returns**: Wartość nazwanej właściwości.

![](/images/Method.png) **getTypeOfProperty(\*\***)\*\*

**Description**:

**Returns**: Typ nazwanej właściwości. Może to być _(Hidden, ReadOnly, Output)_ lub dowolna kombinacja.

![](/images/Method.png) **isDerivedFrom(\*\***)\*\*

**Description**:

**Returns**: Prawda jeśli podany typ jest ojcem

![](/images/Method.png) **purgeTouched(\*\***)\*\*

**Description**: Zaznacza obiekt jako niezmieniony

**Returns**:

![](/images/Method.png) **touch(\*\***)\*\*

**Description**: Zaznacza obiekt jako zmieniony _(dotknięty)_

**Returns**:

Retrieved from "<http://wiki.freecad.org/index.php?title=Object_API/pl&oldid=902152>"
