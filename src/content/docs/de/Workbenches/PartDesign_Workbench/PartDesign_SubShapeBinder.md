---
title: PartDesign Teilformbinder
---
|  |
| --- |
| PartDesign Teilformbinder |
| Menüeintrag |
| Part Design → Teilformbinder erstellen |
| Arbeitsbereich |
| [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.19 |
| Siehe auch |
| [PartDesign Klon](/PartDesign_Clone/de "PartDesign Clone/de") |
|  |

## Beschreibung

Das Werkzeug **PartDesign Teilformbinder** erstellt einen Teilformbinder (Binder-Objekt), der Geometrien eines oder mehrerer übergeordneter Objekte referenziert. Ein Teilformbinder wird üblicherweise in einem [PartDesign Körper](/PartDesign_Body/de "PartDesign Body/de") (Body) verwendet, um auf Geometrie außerhalb des Körpers zuzugreifen. Externe Geometrie direkt in einem Körper zu verwenden, ist nicht erlaubt und wird zu "out of scope"-Fehlern führen. Ein Teilformbinder kann aber auch verwendet werden, ohne dass er in einem Körper eingebunden ist.

Ein Teilformbinder ermittelt die relative Positionierung der referenzierten Geometrien, was im Zusammenhang mit der Erstellung von [Baugruppen](/Assembly/de "Assembly/de") nützlich ist, aber darüber hinaus besitzt er auch eine eigene Positionierung.

Die referenzierte Geometrie kann aus einem oder mehreren Elementen bestehen. Jedes Element kann ein einzelnes Objekt sein (z.B. ein [PartDesign Körper](/PartDesign_Body/de "PartDesign Body/de")), ein Unterobjekt (z.B. ein [Part Würfel](/Part_Box/de "Part Box/de") innerhalb eines [Std Teiles](/Std_Part/de "Std Part/de") oder eine [Skizze](/PartDesign_NewSketch/de "PartDesign NewSketch/de") oder ein [Formelement](/PartDesign_Feature/de "PartDesign Feature/de") innerhalb eines Körpers) oder ein Unterelement (eine Fläche, eine Kante oder ein Knotenpunkt). Welche Geometrie verwendet wird, hängt von der geplanten Verwendung des Teilformbinders ab. Für eine boolesche Operation muss ein Festkörper ausgewählt werden. Für eine Extrusion mit [Aufpolsterung](/PartDesign_Pad "PartDesign Pad") kann eine Fläche, eine Skizze oder ein ebener Draht verwendet werden. Und für eine [externe Geometrie](/Sketcher_External/de "Sketcher External/de") in einer Skizze oder um eine Skizze zu befestigen kann jede Kombination von Unterelementen geeignet sein. Die Elemente können zu unterschiedlichen übergeordneten Objekten gehören und sogar zu dem Körper, der den Teilformbinder enthält. Da ein Teilformbinder [link-basiert](/Std_LinkMake "Std LinkMake") ist, kann die referenzierte Geometrie auch zu einem externen Dokument gehören.

![](/images/PartDesign_SubShapeBinder_example_1.png) ![](/images/PartDesign_SubShapeBinder_example_2.png)

Links: zwei Festkörper, die in zwei separaten [Körpern](/PartDesign_Body/de "PartDesign Body/de") erstellt wurden.  
Rechts: zwei Teilformbinder, die Geometrien des ersten Körpers referenzieren, innerhalb des zweiten Körpers und an eine andere Position verschoben.

![](/images/PartDesign_SubShapeBinder_example_3.png)

Die beiden Teilfornbinder werden verwendet, um im zweiten Körper mit der [booleschen Operation](/PartDesign_Boolean/de "PartDesign Boolean/de") Differenz einen Ausschnitt zu erstellen und mit [Aufpolsterung](/PartDesign_Pad/de "PartDesign Pad/de") einen Block hinzuzufügen.

## Anwendung

### Gleiches Dokument

1. Wenn es mehrere Körper im Dokument gibt: optional [aktivieren des Körpers](/PartDesign_Body#Active_status "PartDesign Body"), in dem der Teilformbinder verschachtelt sein soll.
2. Wählen Sie die gewünschte Geometrie aus. Subelemente können nur in der [3D-Ansicht](/3D_view/de "3D view/de") ausgewählt werden.
3. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   * Drücken Sie die ![](/images/PartDesign_SubShapeBinder.svg) PartDesign Teilformbinder-Schaltfläche.
   * Wählen Sie den **Part Design → ![](/images/PartDesign_SubShapeBinder.svg) Unterobjekt(e) erstellen** aus dem Menü.
4. Der Teilformbinder wird erstellt.
5. Ist nur ein Körper im Dokument vorhanden, wird der Teilformbinder automatisch zu diesem hinzugefügt und der Körper aktiviert. Wenn dies der Fall ist und der Teilformbinder nicht verschachtelt werden soll, kann er aus dem Körper herausgezogen und auf dem [16px](/index.php?title=Bild:Dokument.svg&action=edit&redlink=1 "Bild:Dokument.svg (page does not exist)")-Dokumentenknoten in der [Baumansicht](/Tree_view/de "Tree view/de") abgelegt werden.

### Externes Dokument

1. Öffnen Sie bei Bedarf das Quelldokument (das externe Dokument) und das Zieldokument. Beide Dokumente müssen mindestens einmal gespeichert worden sein.
2. Wenn es mehrere Körper im Zieldokument gibt: aktivieren Sie optional den Körper, in dem der Teilformbinder verschachtelt werden soll.
3. Wählen Sie die gewünschte Geometrie im Quelldokument aus. Unterelemente können nur in der [3D-Ansicht](/3D_view/de "3D view/de") ausgewählt werden.
4. Wechseln Sie zum Zieldokument, indem Sie auf dessen Registerkarte im [Hauptansicht-Bereich](/Main_view_area/de "Main view area/de") klicken.
5. Rufen Sie das Werkzeug wie oben beschrieben auf.

### Mit leerem Teilformbinder starten

1. Folgen Sie den Anweisungen, die unter [Gleiches Dokument](#Same_document) oben beschrieben sind, aber ohne Geometrie auszuwählen.
2. Ein leerer Teilformbinder wird erstellt.
3. Wählen Sie die gewünschte Geometrie aus. Subelemente können nur in der [3D-Ansicht](/3D_view/de "3D view/de") ausgewählt werden.
4. Ziehen Sie in der [Baumansicht](/Tree_view/de "Tree view/de") die Auswahl auf den Teilformbinder und lassen Sie sie dort fallen. Wenn Sie Unterelemente ausgewählt haben, werden deren übergeordnete Objekte in der [Baumansicht](/Tree_view/de "Tree view/de") hervorgehoben, was auf die zu ziehenden Objekte hinweist.
5. Fügen Sie optional weitere Geometrie auf die gleiche Weise hinzu.
6. Um bereits referenzierte Geometrie zu ersetzen, halten Sie Strg während des Ziehens und Ablegens gedrückt.

## Hinweise

* 2D-Versatz wird für einige Formarten unterstützt, eingeschlossen ebene Flächen, Kanten und Kantenzüge. Da Versetzen für die Software eine schwierige Aufgabe ist, ist diese nicht immer erfolgreich.
* Ein Teilformbinder der sich nicht innerhalb eines Körpers befindet, kann als [Basis-Formelement](/PartDesign_Body/de#Basis_Formelement "PartDesign Body/de") eines neuen Körpers dienen.
* Die Daten-Eigenschaft**Support** enthält die Verknüpfungen zu den referenzierten Geometrien. Die Eigenschaft ist schreibgeschützt, kann aber durch das unter [Mit leerem Teilformbinder starten](#Mit_leerem_Teilformbinder_starten) beschriebenen Vorgehen geändert werden.
* Ein aus einer Skizze erstellter Teilformbinder kann eine umgekehrte "Werkzeugausrichtung" besitzen. Beispielsweise kann sich ein aus einer Skizze extrudierter [Block](/PartDesign_Pad/de "PartDesign Pad/de") in die positive Y-Richtung ausdehnen, während sich ein aus einem Teilformbinder extrudierter [Block](/PartDesign_Pad/de "PartDesign Pad/de") mit den gleichen Eigenschaften in die negative Y-Richtung ausdehnt. Durch umschalten der Daten-Eigenschaft**Reversed** (oder der Checkbox) kann dies angeglichen werden.

## Vergleich von PartDesign Teilformbinder und PartDesign Formbinder

Siehe [Vergleich von PartDesign-Teilformbinder und PartDesign-Formbinder](/PartDesign_ShapeBinder/de#Vergleich_PartDesign_Teilformbinder_und_PartDesign_Formbinder "PartDesign ShapeBinder/de").

## Eigenschaften

Ein PartDesign-Teilformbinder (Binder-Objekt) ist von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

Base

* Daten-Eigenschaft**Support** (`XLinkSubList`): Aufnahme/Träger der Geometrie.
* Daten-Eigenschaft**Fuse** (`Bool`): wenn auf `true` gesetzt, werden die verknüpften Festkörperformen vereinigt.
* Daten-Eigenschaft**Make Face** (`Bool`): wenn auf `true` gesetzt, wird eine Fläche aus den verknüpften Drähten erstellt.
* Daten-Eigenschaft**Claim Children** (`PropertyBool`): wenn auf `true` gesetzt, werden die verknüpften Objekte in der [Baumannsicht](/Tree_view/de "Tree view/de") als untergeordnete Elemente beansprucht.
* Daten-Eigenschaft**Relative** (`Bool`): wenn auf `true` gesetzt, ermöglicht es die relative Verknüpfung von Unterobjekten.
* Daten-Eigenschaft**Bind Mode** (`Enumeration`): Bindungsmodus, `Synchronized`, `Frozen`, `Detached`.
* Daten-Eigenschaft**Partial Load** (`Bool`): wenn auf `true` gesetzt, ermöglicht es Objekte teilweise zu Laden.
* Daten-Eigenschaft (versteckt)**Context** (`XLink`): Containerobjekt dieses Binderobjekts.
* Daten-Eigenschaft**Bind Copy On Change** (`Enumeration`)
* Daten-Eigenschaft**Refine** (`Bool`): wenn auf `true` gesetzt, werden überzählige Kanten entfernt (z.B. nach einer booleschen Operation).
* Daten-Eigenschaft (versteckt)**\_ Version** (`Integer`): Version dieses Objekttyps.
* Daten-Eigenschaft (versteckt)**\_ Copied Link** (`XLinkSub`).

Cache

* Daten-Eigenschaft (versteckt)**Cache\_\*** (`Matrix`): Einheitsmatrix (eine separate Eigenschaft für jedes Objekt in Daten-Eigenschaft**Support**).

Offsetting

* Daten-Eigenschaft**Versatz**: 2D-Versatz zum anwenden. Wenn der Versatz = 0 ist, dann wird kein Versatz angewandt. Wenn der Versatz < 0 ist, dann wird der Versatz nach innen angewandt.
* Daten-Eigenschaft**Versatz Verbindungs-Typ**: Verbindungsmethodem bei versetzen nicht tangentialer Verbindungen. Die Methode kann `Bögen`, `Tangente` oder `Schnitt` sein.
* Daten-Eigenschaft**Versatz Füllen** (`Bool`): Wenn `true` wird eine Fläche zwischen der neuen und ursprünglichen Linie erstellt. Siehe auch die Daten-Eigenschaft**Fläche erstellen** Eigenschaft.
* Daten-Eigenschaft**Versatz Offenes Ergebnis** (`Bool`): Beeinflusst die Art und Weise wie offene Linien berechnet werden. Wenn `false`, wird ein offenes Linienende erzeugt. Wenn `true`, wird ein geschlossenes Linienende von einem beidseitigem Versatz mit Rundungen um offene Scheitelpunkte erzeugt.
* Daten**Offset Intersection** (`Bool`): Beeinflusst die Art und Weise, wie Verbindungen verarbeitet werden. Wenn `false`, werden alle Kinder unabhängig voneinander bearbeitet. Wenn `true`, und die Kinder Kanten oder Linien sind, werden die Kinder kollektiv ausgeglichen.

### Ansicht

Basis

* Ansicht**Use Binder Style** (`Bool`): Wenn `true` die Farben des Binder-Objekts basieren auf dem [fine-tuning](/Fine-tuning/de#PartDesign_Workbench "Fine-tuning/de")- Parameter **DefaultDatumColor**. Wenn `false`, werden die normale Flächenfarben angewendet.

## Verweise

* [New Sublink Link Feature](https://forum.freecadweb.org/viewtopic.php?t=41450), Gebrauchserklärung mit Video.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubShapeBinder/de&oldid=1546015>"