---
title: Rysunek Roboczy Kreskowanie
---
|  |
| --- |
| Rysunek Roboczy: Kreskowanie |
| Lokalizacja w menu |
| Kreślenie → Kreskowanie Opisy → Kreskowanie |
| Środowisko pracy |
| [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| H A |
| Wprowadzono w wersji |
| 0.20 |
| Zobacz także |
| [Wypełnienie](/Draft_Pattern/pl "Draft Pattern/pl") |
|  |

## Opis

Polecenie ![](/images/Draft_Hatch.svg) **Kreskowanie** środowiska Rysunek Roboczy tworzy kreskowanie na powierzchniach planarnych wybranego obiektu.

## Użycie

1. Wybierz obiekt z powierzchniami. Tylko planarne powierzchnie obiektu zostaną zakreskowane.
2. Istnieje kilka sposobów, aby wywołać to polecenie:
   * Naciśnij przycisk ![](/images/Draft_Hatch.svg) **Kreskowanie**.
   * [Środowisko pracy Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"): Wybierz z menu opcję **Kreślenie → ![](/images/Draft_Hatch.svg) Kreskowanie**.
   * [Środowisko pracy BIM](/BIM_Workbench/pl "BIM Workbench/pl"): Wybierz opcję **Opisy → ![](/images/Draft_Hatch.svg) Kreskowanie** z menu.
   * Użyj skrótu klawiaturowego: H, a następnie A.
3. Otworzy się panel zadań **Kreskowanie**. Zobacz [Opcje](#Opcje), aby uzyskać więcej informacji.
4. Naciśnij przycisk OK, aby zakończyć polecenie.

## Opcje

* Naciśnij przycisk ..., aby wybrać plik **PAT** z wzorem. Zobacz [Uwagi](#Uwagi).
* Wybierz **Wzór** z pliku.
* Określ **Skalę** dla wzoru.
* Określ **Obrót** dla wzoru.
* Naciśnij klawisz Esc lub przycisk Anuluj, aby przerwać polecenie.

## Wyrównanie wzoru

Gdy obliczany jest wzór kreskowania dla ściany, domyślnie jest on tymczasowo odwzorowany na globalną płaszczyznę XY. Dla powierzchni z prostymi krawędziami pierwsza prosta krawędź określa, jak to będzie realizowane. Pierwszy punkt tej krawędzi jest umieszczany na początku, a sama krawędź jest wyrównywana do osi X. Jeśli utworzysz [linię łamaną](/Draft_Wire/pl "Draft Wire/pl") z myślą o tym, możesz kontrolować, w jaki sposób wzór kreskowania jest wyrównany do konturu ściany

Jeśli wszystkie powierzchnie wybranego obiektu znajdują się na globalnej płaszczyźnie XY, można wyłączyć to domyślne zachowanie, ustawiając właściwość DANE**Translate** kreskowania projektu na wartość `FAŁSZ`. Wzór kreskowania jest wtedy wyrównany do położenia odniesienia i osi X globalnego układu współrzędnych. W przypadku powierzchni na płaszczyźnie XY o prostych krawędziach właściwość DANE**Translate** może być użyta do przełączania między wzorcami bezwzględnymi *(po lewej na obrazku)* i względnymi *(po prawej na obrazku)*.

![](/images/Draft_Hatch_alignment.png)

Dwie zakreskowane figury z linii łamanych.  
.
Figury zostały narysowane w kierunku przeciwnym do ruchu wskazówek zegara, zaczynając od lewego dolnego punktu.  
Dla szkicu kreskowania po lewej stronie właściwość Translate jest ustawiona na wartość `Fałsz`.  
Dla szkicu kreskowania po prawej stronie jest ona ustawiona na wartość `Prawda`.

## Uwagi

* Na razie radzimy pobrać plik PAT. Wiele z nich można znaleźć w Internecie. Można na przykład wyszukać w sieci acad.pat lub acadiso.pat.
* Mały plik PAT jest instalowany z programem FreeCAD: <program\_folder>/data/Mod/TechDraw/PAT/FCPAT.pat, gdzie <program\_folder> jest folderem instalacyjnym programu FreeCAD:
  + W systemie Linux jest to zazwyczaj /usr/share/freecad.
  + W systemie Windows jest to zazwyczaj C:\Program Files\FreeCAD.
  + W systemie macOS jest to zazwyczaj /Applications/FreeCAD.
* wersja 1.0 i poniżej: Wzory z liniami przerywanymi nie są prawidłowo obsługiwane.

## Ustawienia

Zobacz także strony: [Edytor ustawień](/Preferences_Editor/pl "Preferences Editor/pl") oraz [Preferencje](/Draft_Preferences/pl "Draft Preferences/pl") środowiska Rysunek Roboczy.

Zastosowanie mają następujące preferencje:

* Plik PAT: **Przybory → Edycja parametrów → BaseApp → Preferences → Mod → TechDraw → PAT → FilePattern**.
* Wzór: **Przybory → Edycja parametrów → BaseApp → Preferences → Mod → TechDraw → PAT → NamePattern**.
* Skala: **Przybory → Edycja parametrów → BaseApp → Preferences → Mod → Draft → HatchPatternScale**.
* Obrót: **Przybory → Edycja parametrów → BaseApp → Preferences → Mod → Draft → HatchPatternRotation**.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Kreskowanie wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Kreskowanie

* DANE**Podstawowe** (`Link`): określa obiekt, którego ściany zostaną zakreskowane.
* DANE**Plik** (`Plik`): określa plik wzoru PAT.
* DANE**Wzór** (`Ciąg znaków`): określa nazwę wzoru.
* DANE**Obrót** (`Kąt`): określa obrót wzoru.
* DANE**Skala** (`Float`): określa skalę wzoru.
* DANE**Przesunięcie** (`Bool`): określa, czy podczas procesu kreskowania powierzchnie są tymczasowo przeliczane na globalną płaszczyznę XY. Ustawienie tej wartości na `FAŁSZ` może dać błędne wyniki dla powierzchni innych niż XY.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby utworzyć kreskowanie, użyj metody `make_hatch` modułu Rysunek Roboczy.

```
hatch = make_hatch(baseobject, filename, pattern, scale, rotation)

```

Przykład:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

rectangle = Draft.make_rectangle(4000, 1000)
rectangle.MakeFace = True
filename = App.getHomePath() + "data/Mod/TechDraw/PAT/FCPAT.pat"
pattern = "Horizontal5"
hatch = Draft.make_hatch(rectangle, filename, pattern, scale=50, rotation=45)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Hatch/pl&oldid=1556390>"