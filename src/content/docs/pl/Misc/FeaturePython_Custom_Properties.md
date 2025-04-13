---
title: Właściwości niestandardowe funkcji Python
---
## Wprowadzenie

Zobacz także: [Generowana automatycznie dokumentacja API *(dokumentacja C++)*](https://freecad.github.io/SourceDoc/dd/dc2/namespaceApp.html).

Właściwości są prawdziwymi elementami konstrukcyjnymi obiektów FeaturePython. Za ich pośrednictwem użytkownik będzie mógł wchodzić w interakcje i modyfikować twój obiekt. Po utworzeniu nowego obiektu FeaturePython w swoim dokumencie:

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "Box")

```

Listę dostępnych właściwości można uzyskać poprzez:

```
obj.supportedProperties()

```

## Tworzenie obiektu FeaturePython i dodawanie do niego właściwości

Ten kod utworzy obiekt o wewnętrznej nazwie `InternalObjectName` *(automatycznie zmienianej na `InternalObjectName001` i tak dalej, jeśli istnieje już obiekt o nazwie `InternalObjectName`)* i nadaj mu przyjazną dla użytkownika etykietę `User-friendly label`. Ta etykieta będzie wyświetlana w [widoku drzewa](/Tree_view/pl "Tree view/pl"). [Wyrażenia](/Expressions/pl "Expressions/pl") mogą odnosić się do tego obiektu za pomocą jego etykiety, używając `<<User-friendly label>>`.

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"

```

Aby dodać właściwość do tego obiektu, użyj długiej formy `addProperty` jak pokazano poniżej. FreeCAD automatycznie rozbije `ThePropertyName` i wyświetli go z odstępami (`The Property Name`) na karcie [Dane edytora właściwości](/Property_editor/pl#Właściwości_widoku_i_danych "Property editor/pl").

```
obj.addProperty("App::PropertyBool", "ThePropertyName", "Subsection", "Description for tooltip")

```

`App::PropertyBool` jest typem właściwości. Różne typy zostały opisane bardziej szczegółowo poniżej.

Można również użyć krótkiej formy, która pomija dwa ostatnie argumenty. Sekcja podrzędna jest domyślnie ustawiona na `Base`, a podpowiedź nie jest wyświetlana w tej formie.

```
obj.addProperty("App::PropertyBool", "ThePropertyName")

```

Aby uzyskać lub ustawić właściwość, użyj `obj.ThePropertyName`:

```
# set
obj.ThePropertyName = True
# get
thePropertyValue = obj.ThePropertyName

```

Jeśli typ właściwości to [App::PropertyEnumeration](#App::PropertyEnumeration), setter ma specjalne zachowanie: ustawienie listy ciągów definiuje przypadki dozwolone przez wyliczenie, ustawienie ciągu wybiera jeden z tych przypadków. Aby ustawić listę możliwych przypadków i wybrać aktualny, użyj:

```
# allowed cases
obj.ThePropertyName = ["aaa", "bbb", "ccc"]
# set
obj.ThePropertyName = "bbb"

```

[dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Argument `enum_vals` funkcji `addProperty` może też być używany do definiowania przypadków wyliczenia.

[dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Pełna sygnatura tej funkcji to:

```
obj.addProperty(type: string, name: string, group="", doc="", attr=0, read_only=False, hidden=False, enum_vals=[])

```

* `type`: Typ właściwości.
* `name`: Nazwa właściwości.
* `group`: Subsekcja właściwości.
* `doc`: Podpowiedź narzędzia.
* `attr`: Atrybut, zobacz [Obiekty tworzone skryptami](/Scripted_objects/pl#Atrybuty_właściwości "Scripted objects/pl").
* `read_only`: Zobacz to samo.
* `hidden`: Zobacz to samo.
* `enum_vals`: Wartości wyliczenia (lista ciągów znaków), ma znaczenie tylko jeśli typ to [App::PropertyEnumeration](#App::PropertyEnumeration).

## App::PropertyAcceleration

Właściwość [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") przyspieszenia. Może zawierać [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "dozwolony typ i/lub wartości". Aby uzyskać więcej informacji, zobacz sekcję dotyczącą [Tworzenie obiektu FeaturePython i dodawanie do niego właściwości](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyAcceleration", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyAmountOfSubstance

## App::PropertyAngle

Właściwość kąta. Może zawierać wartość kątową. Możesz użyć zmiennej "Value" do uzyskania zmiennej typu float. Aby uzyskać więcej informacji, zobacz sekcję dotyczącą [Tworzenie obiektu FeaturePython i dodawanie do niego właściwości](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyAngle", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = 180
obj.ThePropertyName # returns 180.0 deg
obj.ThePropertyName.Value # returns 180.0

```

## App::PropertyArea

Właściwość [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") powierzchni. Może zawierać [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "dozwolony typ i / lub wartości". Aby uzyskać więcej informacji, zobacz sekcję dotyczącą [Tworzenie obiektu FeaturePython i dodawanie do niego właściwości](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyArea", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyBool

Właściwość typu logicznego. Może zawierać wartości `True` i `False`. Aby uzyskać więcej informacji, zobacz sekcję dotyczącą [Tworzenie obiektu FeaturePython i dodawanie do niego właściwości](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyBool", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = True
obj.ThePropertyName = False
obj.ThePropertyName # returns False

```

## App::PropertyBoolList

Właściwość zawierająca listę wartości logicznych. Może zawierać listę wartości logicznych w Pythonie, np. `[True, False, True]`. Aby uzyskać więcej informacji, zobacz sekcję dotyczącą [Tworzenie obiektu FeaturePython i dodawanie do niego właściwości](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyBoolList", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [True, False, True]
obj.ThePropertyName    # returns [True, False, True]
obj.ThePropertyName[1] # returns False

```

## App::PropertyColor

Właściwość koloru. Może zawierać krotkę czterech wartości typu float. Każdy element może przyjmować wartości między 0.0 a 1.0. Możesz ustawić wartości czerwonej, zielonej i niebieskiej. Dodatkowo możesz ustawić stopień przezroczystości. Aby uzyskać więcej informacji, zobacz sekcję dotyczącą [Tworzenie obiektu FeaturePython i dodawanie do niego właściwości](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyColor", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = (0.0, 1.0, 0.5, 0.8) # (Red, Green, Blue, Transparency)
obj.ThePropertyName # returns (0.0, 1.0, 0.5, 0.8)

```

## App::PropertyColorList

Właściwość koloru. Może zawierać listę kolorów. Dla więcej szczegółów, zobacz sekcję dotyczącą [Tworzenie obiektu FeaturePython i dodawanie do niego właściwości](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyColorList", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyCurrentDensity

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

## App::PropertyDensity

## App::PropertyDirection

Identycznie z [App::PropertyVectorDistance](#App::PropertyVectorDistance).

## App::PropertyDissipationRate

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

## App::PropertyDistance

Właściwość odległości. Może zawierać wartość dodatnią, ujemną lub zerową odległości. Aby uzyskać wartość jako liczbę zmiennoprzecinkową, użyj elementu "Value" właściwości. Wartość zawsze jest wyrażona w milimetrach, ale w [edytorze właściwości](/Property_editor/pl "Property editor/pl") jest prezentowana w jednostkach zgodnie z preferencjami. Dla więcej szczegółów, zobacz sekcję dotyczącą [Tworzenie obiektu FeaturePython i dodawanie do niego właściwości](#Creating).

[App::PropertyLength](#App::PropertyLength) to podobna właściwość, która nie może zawierać wartości ujemnej.

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyDistance", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = 500
obj.ThePropertyName # returns "500.0 mm"
obj.ThePropertyName.Value # returns 500.0

```

## App::PropertyDynamicViscosity

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

## App::PropertyElectricalCapacitance

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

## App::PropertyElectricalConductance

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

## App::PropertyElectricalConductivity

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

## App::PropertyElectricalInductance

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

## App::PropertyElectricalResistance

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

## App::PropertyElectricCharge

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

## App::PropertyElectricCurrent

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

## App::PropertyElectricPotential

## App::PropertyEnumeration

Właściwość typu enumeracyjnego. Dozwolone elementy są określane poprzez ustawienie właściwości na listę. Następnie może zawierać elementy z danej listy. Lista dozwolonych elementów może być zmieniona poprzez ponowne ustawienie właściwości na listę. Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego właściwości](#Tworzenie).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyEnumeration", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = ["Foo", "Bar", "Baz"]  # set allowed items
obj.ThePropertyName = "Foo"                  # choose single item
obj.ThePropertyName = ["Foo", "Bar", "Quux"] # change allowed items
obj.ThePropertyName = "Quux"                 # choose single item
obj.ThePropertyName # returns "Quux"

```

[dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Argument `enum_vals` funkcji `addProperty` może być również wykorzystywany do definiowania przypadków wyliczenia. Zobacz [sekcję powyżej](#Tworzenie_obiektu_FeaturePython_i_dodawanie_do_niego_właściwości).

[dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl"): Można grupować wyliczenia, które są wyświetlane w interfejsie GUI za pomocą interfejsu z podmenu. Aby zgrupować, użyj znaku `|` *(pionowa kreska)* jako separatora, np.:

```
obj.ThePropertyName = [
    "Group 1 | Item A", 
    "Group 1 | Item B", 
    "Group 2 | Another item", 
    "Group 2 | Last item"
] # set allowed items
obj.ThePropertyName = "Group 1 | Item A" # choose single item

```

GUI wyświetli to jako strukturę menu:

* Grupa 1
  + Pozycja A
  + Pozycja B
* Grupa 2
  + Kolejny element
  + Ostatni element

## App::PropertyExpressionEngine

Atrybut [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") expressionEngine. Może zawierać [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "dozwolone typy i / lub wartości". Aby uzyskać więcej informacji, zobacz sekcję dotyczącą [Tworzenia obiektu FeaturePython i dodawania do niego właściwości](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyExpressionEngine", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyFile

Atrybut NazwaPliku. Może zawierać ciąg znaków wskazujący ścieżkę do pliku. *(Czy pozwala na stosowanie ścieżek względnych, bezwzględnych, czy obu?)*. Aby uzyskać więcej informacji, zobacz sekcję dotyczącą [Tworzenia obiektu FeaturePython i dodawania do niego właściwości](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyFile", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyFileIncluded

Atrybut typu nazwaPliku, który dodatkowo zawiera sam plik w dokumencie. Plik nie jest ładowany do pamięci, lecz zostaje skopiowany z archiwum dokumentu do katalogu tymczasowego dokumentu. Tam jest dostępny do odczytu. Ścieżkę tymczasową można uzyskać za pomocą `getDocTransientPath()`. Jako wejście atrybut przyjmuje ciąg znaków zawierający ścieżkę do oryginalnego pliku. Atrybut zwraca ścieżkę do pliku tymczasowego w katalogu tymczasowym. Aby uzyskać więcej informacji, zobacz ten [przykład z modułu Architektura](https://github.com/FreeCAD/FreeCAD/blob/adfdbf7cd76fe78c7f818623e019454337ed1bcd/src/Mod/Arch/ArchBuildingPart.py#L595-L597).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyFileIncluded", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = "D:/file.txt"
obj.ThePropertyName # returns the path to the temporary file

```

## App::PropertyFloat

Atrybut typu zmiennoprzecinkowego. Może zawierać wartość typu `float`. Aby uzyskać więcej informacji, zobacz sekcję dotyczącą [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyFloat", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = 15.7
obj.ThePropertyName # returns 15.7

```

## App::PropertyFloatConstraint

Atrybut wiązań typu zmiennoprzecinkowego. Może zawierać wartość typu `float`. Korzystając z tego atrybutu, można ustawić wartości początkową i końcową. Można również ustawić interwał kroków. Aby uzyskać więcej informacji, zobacz sekcję dotyczącą [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyFloatConstraint", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = (50.0, 0.0, 100.0, 1.0) # (Default, Start, Finish, Step)
obj.ThePropertyName # returns 50.0

```

## App::PropertyFloatList

Właściwość lista liczb zmiennoprzecinkowych. Może zawierać listę wartości typu `float`. Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego właściwości](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyFloatList", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [12.7, 5.8, 28.6, 17.22] # It can also be an empty list.
obj.ThePropertyName # returns [12.7, 5.8, 28.6, 17.22]

```

## App::PropertyFont

Właściwość czcionki [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)"). Może zawierać [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "dozwolony typ i / lub wartości". Aby uzyskać więcej informacji, zobacz sekcję dotyczącą [Tworzenie obiektu FeaturePython i dodawanie do niego właściwości](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyFont", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyForce

Właściwość siły [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)"). Może zawierać [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "dozwolony typ i / lub wartości". Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenie obiektu FeaturePython i dodawanie do niego właściwości](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyForce", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyFrequency

Właściwość częstotliwości [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)"). Może zawierać [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "dozwolony typ i / lub wartości". Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenie obiektu FeaturePython i dodawanie do niego właściwości](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyFrequency", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyHeatFlux

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

## App::PropertyInteger

Atrybut typu całkowitego. Może zawierać wartość całkowitą z zakresu od -2147483646 do 2147483647 włącznie. Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyInteger", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = 25
obj.ThePropertyName # returns 25

```

## App::PropertyIntegerConstraint

Atrybut ograniczenia typu całkowitego. Dzięki temu atrybutowi możesz ustawić wartość domyślną, minimalną, maksymalną oraz rozmiar kroku. Wszystkie wartości powinny być liczbami całkowitymi i mogą zawierać się w przedziale od -2147483646 do 2147483647 włącznie. Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyIntegerConstraint", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = (50, 0, 100, 1) # (Default, Minimum, Maximum, Step size)
obj.ThePropertyName # returns 50

```

## App::PropertyIntegerList

Atrybut listy liczb całkowitych. Może zawierać listę wartości całkowitych. Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyIntegerList", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [12, 5, 28, 17] # It can also be an empty list.
obj.ThePropertyName # returns [12, 5, 28, 17]

```

## App::PropertyIntegerSet

Atrybut zestawu liczb całkowitych. Może zawierać [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "dozwolone typy i / lub wartości". Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyIntegerSet", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyInverseArea

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

## App::PropertyInverseLength

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

## App::PropertyInverseVolume

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

## App::PropertyKinematicViscosity

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

## App::PropertyLength

Atrybut długości. Może zawierać dodatnią lub zerową wartość długości. Użyj elementu "Value" atrybutu, aby uzyskać wartość jako liczbę zmiennoprzecinkową. Wartość zawsze jest podawana w milimetrach, ale w edytorze właściwości jest prezentowana zgodnie z preferencjami dotyczącymi jednostek. Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

[App::PropertyDistance](#App::PropertyDistance) to podobna właściwość, która nie może zawierać wartości ujemnej.

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyLength", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = 500
obj.ThePropertyName # returns "500.0 mm"
obj.ThePropertyName.Value # returns 500.0

```

## App::PropertyLink

Atrybut łącza. Może zawierać odnośnik do obiektu. Wywołanie tego atrybutu zwróci powiązany obiekt. Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

```
link_obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "LinkObjectName")
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyLink", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = link_obj
obj.ThePropertyName # returns link_obj

```

## App::PropertyLinkChild

Atrybut linkChild. Może zawierać "dozwolony typ i / lub wartości". Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyLinkChild", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyLinkGlobal

Właściwość linkGlobalny. Może zawierać "dozwolone typy i / lub wartości". Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyLinkGlobal", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyLinkHidden

Właściwość linkUkryty. Może zawierać "dozwolone typy i / lub wartości". Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyLinkHidden", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyLinkList

Właściwość lista odnośników. Może zawierać listę połączonych obiektów. Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

```
link_obj0 = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "LinkObjectName0")
link_obj1 = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "LinkObjectName1")
link_obj2 = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "LinkObjectName2")

obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyLinkList", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [link_obj0, link_obj1, link_obj2]
obj.ThePropertyName # returns [link_obj0, link_obj1, link_obj2]

```

## App::PropertyLinkListChild

Atrybut typu listaOdnośnikówPodrzędnych. Może zawierać „dozwolone typy i / lub wartości”. Aby uzyskać więcej szczegółów, zobacz sekcję dotyczącą [Tworzenia obiektu FeaturePython i dodawania atrybutu do niego](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyLinkListChild", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyLinkListGlobal

Właściwość listaLinkówGlobalnych. Może zawierać "dozwolone typy i / lub wartości". Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyLinkListGlobal", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyLinkListHidden

Właściwość listaLinkówUkrytych. Może zawierać "dozwolone typy i / lub wartości". Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyLinkListHidden", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyLinkSub

LinkSub to lista dwóch elementów: pierwszy to odniesienie do [obiektu dokumentu](/App_DocumentObject/pl "App DocumentObject/pl") a drugi to ciąg znaków lub lista ciągów znaków wskazująca wewnętrzne nazwy elementów podrzędnych. Więcej informacji znajdziesz w sekcji o [tworzeniu obiektu FeaturePython i dodawaniu do niego właściwości](#Tworzenie).

```
doc = FreeCAD.ActiveDocument
box = doc.addObject("Part::Box", "Box")

obj = doc.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyLinkSub", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [box, ["Vertex1", "Vertex2"]]

doc.recompute()

```

## App::PropertyLinkSubChild

Właściwość linkSubChild. Może zawierać "dozwolony typ i / lub wartości". Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyLinkSubChild", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyLinkSubGlobal

Właściwość linkSubGlobal. Może zawierać "dozwolone typy i / lub wartości". Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyLinkSubGlobal", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyLinkSubHidden

Właściwość linkSubHidden. Może zawierać "dozwolone typy i / lub wartości". Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyLinkSubHidden", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyLinkSubList

LinkSubList to lista krotek. Każda krotka zawiera dwa elementy: pierwszy to odniesienie do [obiektu dokumentu](/App_DocumentObject/pl "App DocumentObject/pl") a drugi to ciąg znaków lub lista ciągów znaków wskazująych wewnętrzne nazwy elementów podrzędnych. Więcej szczegółów znajdziesz w sekcji dotyczącej [tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Tworzenie).

```
doc = FreeCAD.ActiveDocument
box = doc.addObject("Part::Box", "Box")
cyl = doc.addObject("Part::Cylinder", "Cylinder")

obj = doc.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyLinkSubList", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [(box, ["Vertex1", "Vertex2"]), (cyl, "Edge1")]

doc.recompute()

```

## App::PropertyLinkSubListChild

Atrybut typu linkSubListChild. Może zawierać „dozwolone typy i / lub wartości”. Aby uzyskać więcej szczegółów, zobacz sekcję dotyczącą [Tworzenia obiektu FeaturePython i dodawania atrybutu do niego](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyLinkSubListChild", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyLinkSubListGlobal

Właściwość linkSubListGlobal. Może zawierać "dozwolone typy i / lub wartości". Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyLinkSubListGlobal", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyLinkSubListHidden

Właściwość linkSubListHidden. Może zawierać "dozwolone typy i / lub wartości". Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyLinkSubListHidden", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyLuminousIntensity

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

## App::PropertyMagneticFieldStrength

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

## App::PropertyMagneticFlux

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

## App::PropertyMagneticFluxDensity

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

## App::PropertyMagnetization

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

## App::PropertyMap

Własciwość map. Może zawierać "dozwolony typ i / lub wartości". Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyMap", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyMass

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

## App::PropertyMaterial

Atrybut materiału. Może zawierać obiekt materiału FreeCAD. Aby uzyskać więcej szczegółów, zobacz sekcję dotyczącą [Tworzenia obiektu FeaturePython i dodawania atrybutu do niego](#Creating).

```
import FreeCAD
material=FreeCAD.Material()

obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyMaterial", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = material
obj.ThePropertyName # returns material

```

## App::PropertyMaterialList

Właściwość lista materiałów. Może zawierać listę materiałów. Aby uzyskać więcej szczegółów, zobacz sekcję dotyczącą [Tworzenia obiektu FeaturePython i dodawania atrybutu do niego](#Creating).

```
import FreeCAD
material0 = FreeCAD.Material()
material1 = FreeCAD.Material()
material2 = FreeCAD.Material()

obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython","InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyMaterialList", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [material0, material1, material2] # It can also be an empty list.
obj.ThePropertyName # returns [material0, material1, material2]

```

## App::PropertyMatrix

Właściwość macierz. Może zawierać "dozwolony typ i / lub wartości". Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyMatrix", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyPath

Właściwość ścieżka. Może zawierać ciąg znaków reprezentujący ścieżkę do folderu: *(czy pozwala również na ścieżki do plików? czy dopuszcza ścieżki względne lub bezwzględne czy oba?)*. Aby uzyskać więcej szczegółów, zobacz sekcję dotyczącą [Tworzenie obiektu FeaturePython i dodawania atrybutu do niego](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyPath", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyPercent

Właściwość procent. Może zawierać "dozwolony typ i / lub wartości". Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenie obiektu FeaturePython i dodawanie do niego właściwości](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyPercent", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyPersistentObject

Właściwość persistentObject. Może zawierać "dozwolony typ i / lub wartości". Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyPersistentObject", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyPlacement

Właściwość umiejscowienie. Może zawierać obiekt `placement`. Aby uzyskać więcej szczegółów, zobacz sekcję dotyczącą [Tworzenie obiektu FeaturePython i dodawania atrybutu do niego](#Tworzenie).

```
import FreeCAD
placement = FreeCAD.Placement()
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython","InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyPlacement", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = placement
obj.ThePropertyName # returns placement

```

## App::PropertyPlacementLink

Właściwość LinkUmiejscowienia. Może zawierać "dozwolony typ i / lub wartości". Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenie obiektu FeaturePython i dodawanie do niego właściwości](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyPlacementLink", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyPlacementList

Właściwość lista umiejscowień. Może zawierać listę obiektów `placements`. Aby uzyskać więcej szczegółów, zobacz sekcję dotyczącą [Tworzenie obiektu FeaturePython i dodawania atrybutu do niego](#Creating).

```
import FreeCAD
placement0 = FreeCAD.Placement()
placement1 = FreeCAD.Placement()
placement2 = FreeCAD.Placement()

obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython","InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyPlacementList", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [placement0, placement1, placement2]
obj.ThePropertyName # returns [placement0, placement1, placement2]

```

## App::PropertyPosition

Identycznie z [App::PropertyVectorDistance](#App::PropertyVectorDistance).

## App::PropertyPower

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

## App::PropertyPrecision

Właściwość precyzja. Może zawierać "dozwolony typ i / lub wartości". Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenie obiektu FeaturePython i dodawanie do niego właściwości](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyPrecision", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyPressure

Właściwość ciśnienie. Może zawierać "dozwolony typ i / lub wartości". Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyPressure", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyPythonObject

Właściwość ObiektPython. Może zawierać "dozwolony typ i / lub wartości". Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyPythonObject", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyQuantity

Właściwość ilość. Może zawierać "dozwolony typ i / lub wartości". Aby uzyskać więcej informacji, zobacz sekcję dotyczącą [Tworzenie obiektu FeaturePython i dodawanie do niego właściwości](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyQuantity", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyQuantityConstraint

Właściwość ilośćWiązań. Może zawierać "dozwolony typ i / lub wartości". Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyQuantityConstraint", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyRotation

## App::PropertyShearModulus

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

## App::PropertySpecificEnergy

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

## App::PropertySpecificHeat

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

## App::PropertySpeed

Właściwość prędkości. Może zawierać "dozwolony typ i / lub wartości". Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertySpeed", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyStiffness

## App::PropertyStress

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

## App::PropertyString

Właściwość ciąg tekstowy. Może zawierać "dozwolony typ i / lub wartości". Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyString", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyStringList

Właściwość lista ciągów tekstowych. Może zawierać "dozwolony typ i / lub wartości". Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyStringList", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyTemperature

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

## App::PropertyThermalConductivity

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

## App::PropertyThermalExpansionCoefficient

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

## App::PropertyThermalTransferCoefficient

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

## App::PropertyTime

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

## App::PropertyUltimateTensileStrength

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

## App::PropertyUUID

Właściwość uUID. Może zawierać "dozwolony typ i / lub wartości". Aby uzyskać więcej informacji, zobacz sekcję dotyczącą [Tworzenie obiektu FeaturePython i dodawanie do niego właściwości](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyUUID", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyVacuumPermittivity

Właściwość PrzepuszczalnośćPróżni. Może ona zawierać "dozwolony typ i/lub wartości". Więcej szczegółów znajdziesz w rozdziale o [Tworzenie obiektu FeaturePython i dodawanie do niego właściwości](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyVacuumPermittivity", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyVector

Atrybut typu wektor. Może zawierać obiekt FreeCAD typu wektor. Wartość może być ustawiona poprzez dostarczenie wektora lub krotki. Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

```
import FreeCAD
vector = FreeCAD.Vector(0, -2, 5)

obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyVector", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = vector
obj.ThePropertyName # returns Vector(0, -2, 5)
obj.ThePropertyName = (1, 2, 3)
obj.ThePropertyName # returns Vector(1, 2, 3)
obj.ThePropertyName.x # returns 1.0
obj.ThePropertyName.y # returns 2.0
obj.ThePropertyName.z # returns 3.0
obj.ThePropertyName.z = 6
obj.ThePropertyName # returns Vector(1, 2, 6)
obj.ThePropertyName.Length # returns 6.4031242374328485
obj.ThePropertyName.Length = 2 * obj.ThePropertyName.Length
obj.ThePropertyName # Vector (2.0, 4.0, 12.0)

```

## App::PropertyVectorDistance

Atrybut typu wektorowego, który jest prawie identyczny z [App::PropertyVector](#App::PropertyVector). Jedyną różnicą jest to, że w [edytorze właściwości](/Property_editor/pl "Property editor/pl") "x", "y" i "z" tego atrybutu są prezentowane zgodnie z preferencjami jednostek. Jednak wewnętrznie wszystkie wartości są bezwymiarowe i dlatego wyrażane są w mm.

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyVectorDistance", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = (1, 2, 3)
obj.ThePropertyName # returns Vector(1, 2, 3)
obj.ThePropertyName.x # returns 1

```

## App::PropertyVectorList

Atrybut typu lista wektorów. Może zawierać listę wektorów. Wartość może być ustawiona poprzez dostarczenie listy wektorów i/lub krotek. Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

```
import FreeCAD
v0 = FreeCAD.Vector(0, 10, 0)
v1 = FreeCAD.Vector(0, 10, 0)
v2 = FreeCAD.Vector(30, -10, 0)
v3 = FreeCAD.Vector(0, -10, 0)

obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython","InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyVectorList", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [v0, v1, v2, v3]
obj.ThePropertyName # returns [Vector(0, 10, 0), Vector(0, 10, 0), Vector(30, -10, 0), Vector(0, -10, 0)]
obj.ThePropertyName = [v0, (1, 2, 3), v2, (4, 5, 6)]
obj.ThePropertyName # returns [Vector (0, 10, 0), Vector (1, 2, 3), Vector (30, -10, 0), Vector (4, 5, 6)]

```

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

## App::PropertyVelocity

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

## App::PropertyVolume

Właściwość objętość. Może zawierać "dozwolony typ i / lub wartości". Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyVolume", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyVolumeFlowRate

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

## App::PropertyVolumetricThermalExpansionCoefficient

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

## App::PropertyWork

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

## App::PropertyXLink

Właściwość xLink. Może zawierać "dozwolony typ i / lub wartości". Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyXLink", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyXLinkList

Właściwość xLinkList. Może zawierać "dozwolony typ i / lub wartości". Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyXLinkList", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyXLinkSub

Właściwość xLinkSub. Może zawierać "dozwolony typ i / lub wartości". Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyXLinkSub", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyXLinkSubList

Właściwość xLinkSubList. Może zawierać "dozwolony typ i / lub wartości". Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyXLinkSubList", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyYieldStrength

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

## App::PropertyYoungsModulus

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

## Mesh::PropertyCurvatureList

Właściwość listaKrzywizn. Może zawierać "dozwolony typ i / lub wartości". Aby uzyskać więcej szczegółów, zobacz sekcję dotyczącą [Tworzenie obiektu FeaturePython i dodawania atrybutu do niego](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("Mesh::PropertyCurvatureList", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## Mesh::PropertyMeshKernel

Atrybut jądra siatki. Może zawierać obiekt `mesh`. Aby uzyskać więcej szczegółów, zobacz sekcję dotyczącą [Tworzenie obiektu FeaturePython i dodawania atrybutu do niego](#Creating).

```
import Mesh
mesh = Mesh.Mesh()

obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("Mesh::PropertyMeshKernel", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = mesh
obj.ThePropertyName # returns mesh

```

## Mesh::PropertyNormalList

Właściwość listaNormalnych. Może zawierać "dozwolony typ i / lub wartości". Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("Mesh::PropertyNormalList", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## Part::PropertyFilletEdges

Właściwość zaokrąglenieKrawędzi. Może zawierać "dozwolone typy i / lub wartości". Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("Part::PropertyFilletEdges", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## Part::PropertyGeometryList

Właściwość listaGeometrii. Może ona zawierać "dozwolony typ i/lub wartości". Więcej szczegółów znajdziesz w rozdziale o [Tworzenie obiektu FeaturePython i dodawanie do niego właściwości](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("Part::PropertyGeometryList", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## Part::PropertyPartShape

Właściwość kształt części. Może zawierać obiekt `shape`. Aby uzyskać więcej szczegółów, zobacz sekcję dotyczącą [Tworzenie obiektu FeaturePython i dodawania atrybutu do niego](#Creating).

```
import Part
part = Part.Shape()

obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("Part::PropertyPartShape", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = part
obj.ThePropertyName # returns part

```

## Part::PropertyShapeHistory

Właściwość historiaKształtu. Może zawierać "dozwolony typ i / lub wartości". Aby uzyskać więcej szczegółów, zobacz sekcję dotyczącą [Tworzenie obiektu FeaturePython i dodawania atrybutu do niego](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("Part::PropertyShapeHistory", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## Path::PropertyPath

Własciwość ścieżka. Może zawierać "dozwolony typ i / lub wartości". Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("Path::PropertyPath", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## Path::PropertyTool

Właściwość narzędzie. Może zawierać "dozwolony typ i / lub wartości". Aby uzyskać więcej informacji, zobacz sekcję dotyczącą [Tworzenie obiektu FeaturePython i dodawanie do niego właściwości](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("Path::PropertyTool", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## Path::PropertyTooltable

Właściwość tabelaNarzędzi. Może zawierać "dozwolony typ i / lub wartości". Aby uzyskać więcej szczegółów, zobacz sekcję dotyczącą [Tworzenie obiektu FeaturePython i dodawania atrybutu do niego](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("Path::PropertyTooltable", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## Sketcher::PropertyConstraintList

Właściwość listaWiązań. Może zawierać "dozwolony typ i / lub wartości". Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("Sketcher::PropertyConstraintList", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## Spreadsheet::PropertyColumnWidths

Właściwość szerokościKolumn. Może zawierać listę kolorów. Dla więcej szczegółów, zobacz sekcję dotyczącą [Tworzenie obiektu FeaturePython i dodawanie do niego właściwości](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("Spreadsheet::PropertyColumnWidths", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## Spreadsheet::PropertyRowHeights

Właściwość wysokośćWierszy. Może zawierać listę kolorów. Dla więcej szczegółów, zobacz sekcję dotyczącą [Tworzenie obiektu FeaturePython i dodawanie do niego właściwości](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("Spreadsheet::PropertyRowHeights", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## Spreadsheet::PropertySheet

Właściwość arkusz. Może zawierać "dozwolony typ i / lub wartości". Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("Spreadsheet::PropertySheet", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## Spreadsheet::PropertySpreadsheetQuantity

Właściwość arkuszKalkulacyjnyIlość. Może zawierać "dozwolony typ i / lub wartości". Aby uzyskać więcej informacji, zobacz sekcję dotyczącą [Tworzenie obiektu FeaturePython i dodawanie do niego właściwości](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("Spreadsheet::PropertySpreadsheetQuantity", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## TechDraw::PropertyCenterLineList

Właściwość listaLiniiŚrodkowych. Może zawierać "dozwolony typ i / lub wartości". Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("TechDraw::PropertyCenterLineList", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## TechDraw::PropertyCosmeticEdgeList

Właściwość listaKrawędziKosmetycznych. Może zawierać "dozwolony typ i / lub wartości". Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("TechDraw::PropertyCosmeticEdgeList", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## TechDraw::PropertyCosmeticVertexList

Właściwość listaWierzchołkówKosmetycznych. Może zawierać "dozwolony typ i / lub wartości". Więcej szczegółów znajdziesz w sekcji dotyczącej [Tworzenia obiektu FeaturePython i dodawania do niego atrybutu](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("TechDraw::PropertyCosmeticVertexList", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## TechDraw::PropertyGeomFormatList

Właściwość [Template:TODOgeom](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)")FormatList. Może ona zawierać [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)")"dozwolony typ i/lub wartości". Więcej szczegółów znajdziesz w rozdziale o [Tworzenie obiektu FeaturePython i dodawanie do niego właściwości](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("TechDraw::PropertyGeomFormatList", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

Retrieved from "<http://wiki.freecad.org/index.php?title=FeaturePython_Custom_Properties/pl&oldid=1499220>"