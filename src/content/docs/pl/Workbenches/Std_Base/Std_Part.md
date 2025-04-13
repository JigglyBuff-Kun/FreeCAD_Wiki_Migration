---
title: Std Część
---
|  |
| --- |
| Std: Część |
| Lokalizacja w menu |
| brak |
| Środowisko pracy |
| wszystkie |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| [Grupa](/Std_Group/pl "Std Group/pl"), [Zawartość](/PartDesign_Body/pl "PartDesign Body/pl") |
|  |

## Opis

![](/images/Std_Part.svg) Std: Część *(wewnętrznie nazywany [App: Część](/App_Part/pl "App Part/pl"))* jest to uniwersalny kontener, który gromadzi wspólnie grupę obiektów, dzięki czemu można je przesuwać razem jako całość w oknie [widoku 3D](/3D_view/pl "3D view/pl").

Element **Std: Część** został opracowany jako podstawowy element konstrukcyjny do tworzenia [zespołów](/Assembly/pl "Assembly/pl") mechanicznych. W szczególności, ma on za zadanie uporządkować obiekty, które mają kształt [części TopoShape](/Part_TopoShape/pl "Part TopoShape/pl"), jak [Część: Bryły pierwotne](/Part_Primitives/pl "Part Primitives/pl"), [Projekt Części: Zawartość](/PartDesign_Body/pl "PartDesign Body/pl") i inne [cechy Części](/Part_Feature/pl "Part Feature/pl"). Std: Część dostarcza [obiekt Odniesienie położenia](#Odniesienie_położenia) z lokalnymi osiami X, Y i Z oraz płaszczyznami standardowymi, które mogą być używane jako odniesienie do położenia obiektów zamkniętych. Ponadto obiekty Std: Część mogą być zagnieżdżone wewnątrz innych obiektów Std: Część w celu utworzenia dużego zespołu z mniejszych podzespołów.

Chociaż jest on przeznaczony głównie dla brył, Std: Część może być użyty do zarządzania dowolnym obiektem, który posiada właściwość [Umiejscowienie](/Placement/pl "Placement/pl"), więc może również zawierać [cechy siatki](/Mesh_Feature/pl "Mesh Feature/pl"), [szkice](/Sketch/pl "Sketch/pl") i inne obiekty pochodzące z klas [App: GeoFeature](/App_GeoFeature "App GeoFeature").

Nie należy mylić elementu ![](/images/PartDesign_Body.svg) [Projekt Części: Zawartość](/PartDesign_Body/pl "PartDesign Body/pl") z częścią ![](/images/Std_Part.svg) Std: Część. Pierwszym z nich jest określony obiekt używany w środowisku pracy ![](/images/Workbench_PartDesign.svg) [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl"), przeznaczony do modelowania [pojedynczej, ciągłej bryły](/PartDesign_Body/pl#Single_contiguous_solid "PartDesign Body/pl") za pomocą funkcji [właściwości](/PartDesign_Feature "PartDesign Feature"). Z drugiej strony Std: Część nie jest używana do modelowania, a jedynie do rozmieszczania różnych obiektów w przestrzeni z zamiarem tworzenia [złożeń](/Assembly/pl "Assembly/pl").

Narzędzie ![](/images/Std_Part.svg) Std: Część nie jest zdefiniowane przez konkretne środowisko pracy, lecz przez system bazowy, a więc znajduje się na pasku **narzędzi konstrukcja**, który jest dostępny we wszystkich [środowiskach pracy.](/Workbenches/pl "Workbenches/pl") Aby dowolnie grupować obiekty bez względu na ich położenie, należy użyć funkcji ![](/images/Std_Group.svg) [Std: Grupa](/Std_Group/pl "Std Group/pl"). Obiekt ten nie ma wpływu na rozmieszczenie elementów, które zawiera, w zasadzie jest to tylko folder, który jest używany do utrzymania widoku drzewa w sposób zorganizowany.

![](/images/Std_Part-tree.png)![](/images/Std_Part_example.png)

Z lewej: elementy wewnątrz obiektu Std: Część w [widoku drzewa](/Tree_view/pl "Tree view/pl").   
Z prawej: obiekty umieszczone w przestrzeni, odnoszące się do odniesienia położenia Std: Części.

## Użycie

1. Naciśnij przycisk ![](/images/Std_Part.svg) Utwórz Część.
2. Zostanie utworzona pusta część, która automatycznie stanie się *[aktywna](#Status_aktywności)*.
3. Aby dodać obiekty do nowo utworzonej pozycji Części, zaznacz ją w [widoku drzewa](/Tree_view/pl "Tree view/pl"), a następnie przeciągnij je i upuść nad Częścią.
4. Aby usunąć obiekty z części, przeciągnij je poza część, na etykietę dokumentu u góry [widoku drzewa](/Tree_view/pl "Tree view/pl").
5. Obiekty można także dodawać i usuwać, edytując właściwość DANE**Grupa** części.

## Uwagi

* Dany obiekt może należeć tylko do jednej pozycji Części.
* Operacje 3D, takie jak [operacje logiczne](/Part_Boolean/pl "Part Boolean/pl") środowiska Część, nie mogą być stosowane do części. Na przykład nie można wybrać dwóch części i wykonać operacji [Scalenie](/Part_Fuse/pl "Part Fuse/pl") lub [Cięcie](/Part_Cut/pl "Part Cut/pl").

## Właściwości

Std: Część jest wewnętrznie nazywana [App: Part](/App_Part/pl "App Part/pl") *(klasa App::Part)*, i pochodzi z [App: GeoFeature](/App_GeoFeature/pl "App GeoFeature/pl") *(klasa App::GeoFeature)*, ioraz dziedziczy wszystkie jego właściwości. Posiada również kilka dodatkowych właściwości. W szczególności właściwości, które pomagają zarządzać informacjami w kontekście złożenia, na przykład DANE**Typ**, DANE**Id**, DANE**Licencja**, DANE**LicencjaURL** i DANE**Grupa**.

Są to właściwości dostępne w [edytorze właściwości](/Property_editor/pl "Property editor/pl"). Ukryte właściwości można wyświetlić za pomocą polecenia **Pokaż ukryte** w menu kontekstowym [edytora właściwości](/Property_editor/pl "Property editor/pl").

### Dane

Podstawa

* DANE**Typ** (`String`): opis dla obiektu. Domyślnie jest to pusty łańcuch znaków `""`.
* DANE**Materiał** (`Link`): materiał wybrany dla tego obiektu.
* DANE (Ukryte)**Meta** (`Map`): wprowadza dodatkowe informacje meta. Domyślnie jest ona pusta. `{}`.
* DANE**Id** (`String`): numer identyfikacyjny lub numer części dla obiektu. Domyślnie jest to pusty łańcuch znaków `""`.
* DANE (Hidden)**Uid** (`UUID`): [uniwersalny, niepowtarzalny identyfikator](https://en.wikipedia.org/wiki/Universally_unique_identifier) *(UUID)* *(liczba 128-bitowa)* obiektu. Jest on nadawany w czasie tworzenia.
* DANE**Licencja** (`String`): pole do określenia licencji dla obiektu. Domyślnie jest to pusty łańcuch znaków `""`.
* DANE**LicencjaURL** (`String`): pole do podania adresu strony internetowej z licencją lub umową dla tego obiektu. Domyślnie jest to pusty łańcuch znaków `""`.
* DANE**Kolor** (`Color`): tupla czterech zmiennoprzecinkowych wartości RGBA `(r,g,b,a)` do określenia koloru obiektu. Domyślnie jest to `(1.0, 1.0, 1.0, 1.0)`, która jest wyświetlana jako `[255,255,255]` w bazie 255, white color.
* DANE**Umieszczenie** (`Placement`): ustawienie obiektu w oknie [widoku 3D](/3D_view "3D view"). Umieszczenie jest określone przez punkt *(wektor)* `Baza` i `Obrót` *(oś i kąt)*. Patrz: [Umiejscowienie](/Placement "Placement").
  + DANE**Kąt**: kąt obrotu wokół DANE**Osi**. Domyślnie jest to `0°` *(zero stopni)*.
  + DANE**Oś**: wektor jednostkowy, który określa oś obrotu dla położenia. Każdy komponent jest wartością zmiennoprzecinkową pomiędzy `0` a `1`. Jeśli jakaś wartość znajduje się powyżej `1`, wektor jest normalizowany tak, że jego wielkość wynosi `1`. Domyślnie ustawiono dodatnią oś Z, `(0, 0, 1)`.
  + DANE**Pozycja**: wektor ze współrzędnymi przestrzennymi punktu bazowego. Domyślnie, jest to punkt startowy `(0, 0, 0)`.
* DANE**Etykieta** (`String`): edytowalna przez użytkownika nazwa obiektu, jest to dowolny ciąg znaków w standardzie UTF8.
* DANE (Ukryte)**Etykieta2** (`String`): dłuższy, edytowalny przez użytkownika opis tego obiektu, jest to dowolny ciąg znaków UTF8, który może zawierać znaki nowej linii. Domyślnie jest to pusty łańcuch `""`.
* DANE (Ukryte)**Silnik wyrażeń** (`ExpressionEngine`): lista wyrażeń. Domyślnie jest ona pusta `[]`.
* DANE (Ukryte)**Widoczność** (`Bool`): określa, czy obiekt ma być wyświetlany, czy nie.
* DANE (Ukryte)**Odniesienie położenia** (`Link`): obiekt [App: Odniesienie położenia](/App_OriginGroupExtension/pl "App OriginGroupExtension/pl"), który jest pozycyjnym odniesieniem dla wszystkich elementów wymienionych w DANE**Grupie**.
* DANE**Grupa** (`LinkList`): lista obiektów, których dotyczą odniesienia. Domyślnie jest pusta `[]`.
* DANE (Ukryte)**\_ Group Touched** (`Bool`): określa czy grupa jest poddana edycji, czy nie.

### Widok

Opcje wyświetlania

* WIDOK**Tryb wyświetlania** (`Enumeration`): `Grupa`.
* WIDOK**Wyświetl w drzewie** (`Bool`): jeśli ma wartość `PRAWDA`, obiekt pojawia się w widoku [Widok drzewa](/Tree_view/pl "Tree view/pl"). W przeciwnym razie jest on niewidoczny..
* WIDOK**Widoczność** (`Bool`): jeśli ma wartość `PRAWDA`, obiekt pojawia się w oknie [widoku 3D](/3D_view/pl "3D view/pl"). W przeciwnym razie jest niewidoczny. Domyślnie właściwość ta może być włączana i wyłączana przez naciśnięcie klawisza Spacja na klawiaturze.

Wybieranie

* WIDOK**Na wierzchu po wybraniu** (`Enumeration`): `Wyłączone` *(domyślnie)*, `Wyłączone`, `Objekt`, `Element`.
* WIDOK**Styl wyboru** (`Enumeration`): `Kształt` *(domyślnie)*, `BoundBox`. Jeśli opcja ma wartość `Kształt`, cały kształt *(wierzchołki, krawędzie i ściany)* zostanie podświetlony w oknie [widoku 3D](/3D_view/pl "3D view/pl"). Jeśli wartość to `Ramka otaczająca`, podświetlone zostanie tylko pole ograniczające.

## Szczegółowe wyjaśnienia

### Status aktywności

Otwarty dokument może zawierać wiele części. Ale tylko jedna Część może być aktywna. Aktywna Część zostanie wyświetlona w [widoku drzewa](/Tree_view/pl "Tree view/pl") przy zastosowaniu koloru tła określonego w [edytorze preferencji](/Preferences_Editor/pl#Kolory "Preferences Editor/pl") przez wartość **Aktywny kontener** *(domyślnie, jasnoniebieski)*. Etykieta aktywnej części zostanie również wyświetlona pogrubionym tekstem.

Aby uaktywnić lub dezaktywować Część:

* Kliknij dwukrotnie na jej pozycję w [widoku drzewa](/Tree_view/pl "Tree view/pl"), lub
* Otwórz menu kontekstowe *(klikając prawym przyciskiem myszy)* i wybierz **Aktywny obiekt**.

![](/images/Std_Part_active.png)

Dokument z dwiema Częściami Std, wśród których aktywna jest druga część.

### Odniesienie położenia

Początek układu współrzędnych składa się z trzech standardowych osi *(X, Y, Z)* oraz trzech standardowych płaszczyzn *(XY, XZ i YZ)*. [Szkic](/Sketch/pl "Sketch/pl") i inne obiekty mogą być dołączone do tych elementów w trakcie ich tworzenia.

![](/images/Part_Origin_tree.png) ![](/images/Part_Origin_view.png)

Z lewej: Początek układu współrzędnych Części w [widoku drzewa](/Tree_view/pl "Tree view/pl").   
Z prawej: reprezentacja początku układu współrzędnych w oknie [widoku 3D](/3D_view/pl "3D view/pl").

*Uwaga:* Początek układu współrzędnych jest obiektem [App: Odniesienie położenia](/App_OriginGroupExtension "App OriginGroupExtension") *(klasa `App::Origin`)*, podczas gdy osie i płaszczyzny są obiektami odpowiednio typu `App::Line` oraz `App::Plane`. Każdy z tych elementów może być ukryty i nieujawniany indywidualnie przy użyciu klawisza spacja. Jest to przydatne przy tworzeniu innych obiektów, aby wybrać właściwe odniesienie.

*Uwaga 2:* Wszystkie elementy składowe Części są powiązane z jej początkiem, co oznacza, że Część może być przesuwana i obracana w odniesieniu do globalnego układu współrzędnych, bez wpływu na rozmieszczenie jej elementów składowych.

### Zarządzanie wyświetlaniem

Parametr wyświetlania Części ma pierwszeństwo określania wyświetlania dowolnego obiektu, który zawiera. Jeśli wyświetlanie Części zostanie ukryte, to obiekty, które zawiera będą również ukryte, nawet jeśli ich indywidualna właściwość WIDOK**Widoczność** jest ustawiona na `true`. Jeśli Część jest widoczna, to właściwość każdego obiektu WIDOK**Widoczność** określa, czy obiekt jest prezentowany na ekranie okna [widoku 3D](/3D_view/pl "3D view/pl") czy nie.

![](/images/Part_Visibility_off.png) ![](/images/Part_Visibility_on.png)

Parametr widoczności Std Części określa, czy zgrupowane pod nią obiekty są prezentowane w oknie [widoku 3D](/3D_view/pl "3D view/pl"), czy też nie.   
Po lewej: Część została ukryta, więc żaden z obiektów nie będzie widoczny w oknie [widoku 3D](/3D_view/pl "3D view/pl").   
Po prawej: Część jest widoczna, więc każdy obiekt kontroluje indywidualnie swoje właściwości w zakresie wyświetlania.

## Tworzenie skryptów

*Zobacz również:* [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl"), oraz [Obiekty tworzone skryptami](/Scripted_objects/pl "Scripted objects/pl").

Ogólne informacje na temat dodawania obiektów do dokumentu można znaleźć na stronie [Część: właściwość](/Part_Feature/pl "Part Feature/pl").

Element Std: Part ([App Part](/App_Part "App Part")) jest tworzony przy pomocy metody `addObject()` dokumentu. Gdy istnieje element Part, inne obiekty mogą być do niego dodane za pomocą metod `addObject()` lub `addObjects()` tej Części.

```
import FreeCAD as App

doc = App.newDocument()
part = App.ActiveDocument.addObject("App::Part", "Part")

obj1 = App.ActiveDocument.addObject("PartDesign::Body", "Body")
obj2 = App.ActiveDocument.addObject("Part::Box", "Box")

part.addObjects([obj1, obj2])
App.ActiveDocument.recompute()

```

Nie można utworzyć skryptu `App::Part`. Można jednak dodać zachowanie `App::Part` do obiektu skryptowego `Part::FeaturePython` za pomocą następującego kodu:

```
class MyGroup(object):
    def __init__(self, obj=None):
        self.Object = obj
        if obj:
            self.attach(obj)

    def dumps(self):
        return

    def loads(self, _state):
        return

    def attach(self, obj):
        obj.addExtension("App::OriginGroupExtensionPython")
        obj.Origin = FreeCAD.ActiveDocument.addObject("App::Origin", "Origin")

    def onDocumentRestored(self, obj):
        self.Object = obj

class ViewProviderMyGroup(object):
    def __init__(self, vobj=None):
        if vobj:
            vobj.Proxy = self
            self.attach(vobj)
        else:
            self.ViewObject = None

    def attach(self, vobj):
        vobj.addExtension("Gui::ViewProviderOriginGroupExtensionPython")
        self.ViewObject = vobj

    def dumps(self):
        return None

    def loads(self, _state):
        return None

App.ActiveDocument.addObject("Part::FeaturePython",
                             "Group",
                             MyGroup(),
                             ViewProviderMyGroup(),
                             True)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Part/pl&oldid=1560930>"