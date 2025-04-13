---
title: Std VerknüpfungErstellen
---

|                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Std VerknüpfungErstellen                                                                                                                               |
| Menüeintrag                                                                                                                                            |
| Keine                                                                                                                                                  |
| Arbeitsbereich                                                                                                                                         |
| Alle                                                                                                                                                   |
| Standardtastenkürzel                                                                                                                                   |
| _Keiner_                                                                                                                                               |
| Eingeführt in Version                                                                                                                                  |
| 0.19                                                                                                                                                   |
| Siehe auch                                                                                                                                             |
| [Standard Teil](/Std_Part/de "Std Part/de"), [Std Gruppe](/Std_Group/de "Std Group/de"), [PartDesign Körper](/PartDesign_Body/de "PartDesign Body/de") |
|                                                                                                                                                        |

## Beschreibung

![](/src/assets/images/Std_LinkMake.svg) Std VerknüpfungErstellen erstellt ein [App-Link](/App_Link/de "App Link/de")-Objekt (`App::Link` class), das auf ein anderes Objekt innerhalb desselben Dokuments oder in einem anderen Dokument verweist oder eine Verknüpfung zu ihm erzeugt. Es ist speziell dafür entwickelt worden einzelne Objekte effizient zu vervielfältigen, was bei der Erstellung komplexer [Baugruppen](/Assembly/de "Assembly/de") aus kleineren Unterbaugruppen und vielen Wiederholteilen wie Schrauben, Muttern und ähnlichen Befestigungselementen hilft.

Das [App-Link](/App_Link/de "App Link/de")-Objekt wurde mit der Version 0.19 neu eingeführt; in der Vergangenheit wurde das einfache Duplizieren von Objekten durch ![](/src/assets/images/Draft_Clone.svg) [Draft Klonen](/Draft_Clone/de "Draft Clone/de") erreicht, aber das ist eine weniger effiziente Lösung, da sie entsprechend ihrer Implementierung zwingend eine Kopie der internen [Form](/Part_TopoShape/de "Part TopoShape/de") des Quellobjekts erzeugt. Stattdessen referenziert ein App-Link direkt auf die originale Form und ist dadurch speichereffizienter.

Das [App-Link](/App_Link "App Link")-Objekt allein kann schon wie ein Array genutzt werden um das Basisobjekt zu vervielfältigen; das kann erreicht werden, durch das Ändern der Daten-Eigenschaft**Element Count** auf `1` oder größer. Dieses "[Link-Array](#Link_Array)"-Object kann auch mit den verschiedenen Array-Werkzeugen des ![](/src/assets/images/Workbench_Draft.svg) [Draft-Arbeitsbereichs](/Draft_Workbench/de "Draft Workbench/de") erzeugt werden, z.B. ![](/src/assets/images/Draft_OrthoArray.svg) [Draft Rechtwinklige Anordnung](/Draft_OrthoArray/de "Draft OrthoArray/de"), ![](/src/assets/images/Draft_PolarArray.svg) [Draft Polare Anordnung](/Draft_PolarArray/de "Draft PolarArray/de"), and ![](/src/assets/images/Draft_CircularArray.svg) [Draft Kreisanordnung](/Draft_CircularArray/de "Draft CircularArray/de").

Im ![](/src/assets/images/Workbench_PartDesign.svg) [PartDesign Arbeitsbereich](/PartDesign_Workbench/de "PartDesign Workbench/de") sind Verknüpfungen zur Verwendung mit ![](/src/assets/images/PartDesign_Body.svg) [PartDesign Körper](/PartDesign_Body/de "PartDesign Body/de") vorgesehen. Es empfiehlt sich daher Ansicht**Display Mode Body** auf `Tip` zu setzen, um Eigenschaften des gesamten Körpers und nicht einzelner Eigenschaften auszuwählen. Um Muster interner [PartDesign Formelemente](/PartDesign_Feature/de "PartDesign Feature/de") zu erstellen, verwendet man ![](/src/assets/images/PartDesign_LinearPattern.svg) [PartDesign Lineares Muster](/PartDesign_LinearPattern/de "PartDesign LinearPattern/de"), ![](/src/assets/images/PartDesign_PolarPattern.svg) [PartDesign Polares Muster](/PartDesign_PolarPattern/de "PartDesign PolarPattern/de"), and ![](/src/assets/images/PartDesign_MultiTransform.svg) [PartDesign MultiTransform](/PartDesign_MultiTransform "PartDesign MultiTransform")

![](/src/assets/images/Std_LinkMake.svg) Std LinkMake ist nicht für einen speziellen Arbeitsbereich vorgesehen, sondern für das grundlegende System. Deshalb kann es aus der **Strukturellen Werkzeugleiste** verwendet werden, die in allen [Arbeitsbereichen](/Workbenches/de "Workbenches/de") enthalten ist. Das Verknüpfungsobjekt (link object) zusammen mit ![](/src/assets/images/Std_Part.svg) [Std Teil](/Std_Part/de "Std Part/de") zur Gruppierung verschiedener Objekte, stellt die Grundlage der ![](/src/assets/images/Assembly3_workbench_icon.svg) [Arbeitsbereich Assembly3](/Assembly3_Workbench/de "Assembly3 Workbench/de") und ![](/src/assets/images/Assembly4_workbench_icon.svg) [Arbeitsbereich Assembly4](/Assembly4_Workbench/de "Assembly4 Workbench/de") Arbeitsbereiche dar.

## Anwendung

Mit Auswahl:

1. Ein Objekt in der [Baumansicht](/Tree_view/de "Tree view/de") oder der [3D-Ansicht](/3D_view/de "3D view/de") auswählen, für das eine Verknüpfung erstellt werden soll.
2. Die Schaltfläche ![](/src/assets/images/Std_LinkMake.svg) Verknüpfung erstellen drücken. Das erzeugte Objekt hat dasselbe Symbol wie das Originalobjekt, ist jedoch mit einem Pfeil überlagert, der darauf hinweist, dass es sich um eine Verknüpfung handelt.

Ohne Auswahl:

1. Wenn kein Objekt ausgewählt wurde, wird durch das Drücken der Schaltfläche ![](/src/assets/images/Std_LinkMake.svg) Verknüpfung erstellen eine leere ![](/src/assets/images/Link.svg) Verknüpfung erstellt.
2. Zum [Eigenschafteneditor](/Property_editor/de "Property editor/de") wechseln, dann auf die Daten-Eigenschaft**Linked Object** klicken, um den Dialog Link zu öffnen (siehe [Auswahlmethoden](/Selection_methods/de "Selection methods/de")) und ein Objekt auszuwählen, anschließend OK drücken.
3. Anstatt ein komplettes Objekt in der [Baumansicht](/Tree_view/de "Tree view/de") auszuwählen, kann man auch Unterelemente (Knoten, Kanten oder Flächen) eines einzigen Objekts in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen. In diesem Falle dupliziert die Verknüpfung nur diese Unterelemente und der überlagerte Pfeil sieht anders aus. Dies kann auch mit ![](/src/assets/images/Std_LinkMakeRelative.svg) [Unterverknüpfung erstellen](/Std_LinkMakeRelative/de "Std LinkMakeRelative/de") erreicht werden.

![](/src/assets/images/Std_Link_tree_example.png) ![](/src/assets/images/Std_Link_example.png)

(1) Ein Objekt, (2) eine leere Verknüpfung, (3) eine vollständige Verknüpfung zum ersten Objekt (mit überlagerndem Material) und (4) eine Verknüpfung nur mit einzelnen Unterelementen des Objektes. Die leere Verknüpfung ist nicht an das reale Objekt gebunden und wird daher nicht in der [3D Ansicht](/3D_view/de "3D view/de") angezeigt.

## Verwendung externer Dokumente

1. Wir beginnen mit einem Dokument, das mindestens ein Objekt enthält, das die Quelle der Verknüpfung darstellt.
2. Wir öffnen ein neues oder bereits existierendes Dokument. Zur Vereinfachung nutzen wir die Schaltfläche ![](/src/assets/images/Std_TreeMultiDocument.svg) [Std BaumMehrfachdokument](/Std_TreeMultiDocument/de "Std TreeMultiDocument/de"), um beide Dokumente in der [Baumansicht](/Tree_view/de "Tree view/de") anzuzeigen. Wir [Speichern](/Std_Save/de "Std Save/de") beide Dokumente, bevor wir weitergehen. Das Verknüpfungswerkzeug kann seine Quelle und sein Ziel nicht finden, wenn die Dokumente nicht gespeichert wurden.
3. Im ersten Dokument wählen wir das Objekt, das wir verknüpfen wollen. Dann wählen wir den Reiter im [Hauptansichtsbereich](/Main_view_area/de "Main view area/de"), um zum zweiten Dokument zu wechseln.
4. Nun die Schaltfläche ![](/src/assets/images/Std_LinkMake.svg) Std VerknüpfungErstellen anklicken. Das erstellte Ojekt hat dasselbe Icon, wie das Originalobjekt, hat aber einen zusätzlichen, überlagernden Pfeil, der es als Verknüpfung aus einem externen Dokument anzeigt.

_Hinweise:_

- Wenn das Dokument mit der Verknüpfung gespeichert wird, wird ebenfalls gebeten, das Quelldokument mit dem Originalobjekt zu [Std Speichern](/Std_Save/de "Std Save/de").
- Um das Originalobjekt in das Dokument mit der Verknüpfung einzufügen, betätigen wir die Schaltfläche ![](/src/assets/images/Std_LinkImport.svg) [Std VerknüpfungImportieren](/Std_LinkImport/de "Std LinkImport/de") oder ![](/src/assets/images/Std_LinkImportAll.svg) [Std AlleVerknüpfungenImportieren](/Std_LinkImportAll/de "Std LinkImportAll/de").
- Die Schaltfläche ![](/src/assets/images/Std_LinkMake.svg) Std VerknüpfungErstellen kann auf eine existierende Verknüpfung angewendet werden, um eine Verknüpfung auf eine Verknüpfung zu erstellen, die sich letztendlich in eine Verknüpfung auf das Originalobjekt im Quelldokument auflöst. Das kann auch mit der Schaltfläche ![](/src/assets/images/Std_LinkMakeRelative.svg) [Std UnterverknüpfungErstellen](/Std_LinkMakeRelative "Std LinkMakeRelative") verwendet werden, um nur einzelne Unterelemente zu verknüpfen.

![](/src/assets/images/Std_Link_tree_documents_example.png) ![](/src/assets/images/Std_Link_documents_example.png)

(1, 2) Zwei Objekte eines Quelldokumentes verknüpft mit einem Zieldokument, (3) eine Verknüpfung auf eine zweite Verknüpfung (mit überlagerndem Material) und (4) eine Verknüpfung zu einem Unterelement der zweiten Verknüpfung.

### Ziehen und Loslassen (dragging and dropping)

Anstatt zwischen den Dokumentenreitern hin und her zu schalten, können Verknüpfungen auch durch Ziehen und Loslassen in der [Baumansicht](/Tree_view/de "Tree view/de") erstellt werden: das Quellobjekt des ersten Dokumentes wählen, die Alt-Taste gedrückt halten, ziehen und auf dem Namen des zweiten Dokumentes loslassen.

Abhängig von der gedrückten Zusatztaste werden unterschiedliche Aktionen beim Ziehen und Loslassen aufgerufen.

- Ohne die Zusatztaste wird das Objekt von einem Dokument in das andere nur verschoben. Dabei wird ein geneigter Pfeil im Cursor gezeigt.
- Mit der gedrückten strg-Taste wird das Objekt kopiert. Dabei wird ein Pluszeichen im Cursor gezeigt.
- Mit der gedrückten Alt-Taste wird eine Verknüpfung erstellt. Zwei Kettenglieder werden im Cursor angeigt.

Ziehen und Loslassen mit den Zusatztasten Ctrl und Alt kann auch in einem einzelnen Dokument gearbeitet werden. Ziehen und Loslassen im selben Dokument erstellen damit mehrere Kopien oder mehrere Verknüpfungen.

## Gruppen

![](/src/assets/images/Std_LinkMake.svg) Std VerknüpfungErstellen kann auf ![](/src/assets/images/Std_Part.svg) [Standard Teil](/Std_Part/de "Std Part/de") angewendet werden, um schnell Objektgruppen im Raum zu vervielfältigen, wie z.B. [Zusammenbauten](/Assembly "Assembly").

![](/src/assets/images/Std_Link_tree_Std_Part_example.png)

Eine Verknüpfung, die aus einem [Standard Teil](/Std_Part/de "Std Part/de") erstellt wurde. Die Objekte wurden nicht kopiert, sondern sie werden unter der Originalgruppierung und unter der verknüpften Gruppierung angezeigt.

Ein normale ![](/src/assets/images/Std_Group.svg) [Std Gruppe](/Std_Group/de "Std Group/de") besitzt keine Daten**Positionierungs**-Eigenschaft. Daher kann es die Position der Objekte darin nicht steuern. Wenn jedoch ![](/src/assets/images/Std_LinkMake.svg) Std VerknüpfungErstellen mit ![](/src/assets/images/Std_Group.svg) [Std Gruppe](/Std_Group/de "Std Group/de") verwendet wird, verhält sich die daraus entstandene Verknüpfung wie ein ![](/src/assets/images/Std_Part.svg) [Standard Teil](/Std_Part/de "Std Part/de") und kann ebenso im Raum bewegt werden.

![](/src/assets/images/Std_Link_tree_Std_Group_example.png) ![](/src/assets/images/Std_Link_Std_Group_example.png)

Eine Verknüpfung, erstellt aus [Std Grupppe](/Std_Group/de "Std Group/de"); die Objekte sind nicht vervielfältigt, werden aber sowohl im Ursprungsbehälter als auch im verknüpften Behälter angezeigt. Die Verknüpfung (mit überlagerndem Material) kann im Raum bewegt werden, ebenso wie [Standardd Teil](/Std_Part/de "Std Part/de").

Eine Verknüpfung auf ein ![](/src/assets/images/Std_Part.svg) [Standard Teil](/Std_Part/de "Std Part/de") hält die Sichtbarkeit der Objekte synchron zum Originalteil. Wird also ein Objekt in einer Verknüpfung verborgen, so wird es in allen dazugehörigen Verknüpfungen und dem Originalteil verborgen. Dem gegenüber erlaubt eine Verknüpfung auf eine ![](/src/assets/images/Std_Group.svg) [Std Gruppe](/Std_Group/de "Std Group/de") unabhängige Kontrolle auf die Sichtbarkeit.

![](/src/assets/images/Std_Link_tree_Std_Part_visibility.png) ![](/src/assets/images/Std_Link_tree_Std_Group_visibility.png)

Links: ein [Standard Teil](/Std_Part/de "Std Part/de") mit zwei Objekten und zwei Verknüpfungen auf das Teil; die Sichtbarkeit der Objekte ist synchron. Rechts: [Std Gruppe](/Std_Group/de "Std Group/de") mit zwei Objekten und zwei Verknüpfungen auf die Gruppe; die Sichtbarkeit der Objekte ist unabhängig in jeder Gruppe einstellbar.

## Darstellung der Überlagerung

Wenn eine Verknüpfung erstellt wird, ist die Eigenschaft Ansicht**Override Material** mit `false` voreingestellt. Daher wird die Verknüpfung genauso aussehen, wie das originale Daten**Linked Object**.

Wenn die Eigenschaft Ansicht**Override Material** auf `true` gesetzt ist, wird die Eigenschaft Ansicht**Shape Material** nun das Erscheinungsbild der Verknüpfung steuern.

Unabhängig vom Status der Eigenschaft Ansicht**Override Material** ist es möglich, das Erscheinungsbild der Unterelemente, wie Punkte, Kanten oder Oberflächen einer Verknüpfung individuell zu bestimmen.

1. Die Verknüpfung in der [Baumansicht](/Tree_view/de "Tree view/de") wählen. Das Kontextmenü mit einem Rechtsklick öffnen und **Override colors** wählen.
2. Nun die einzelnen Unterelemente in der [3D Ansicht](/3D_view/de "3D view/de") wählen, die Schaltfläche Edit anklicken und die Eigenschaften einschließlich der Transparenz ändern.
3. Um geänderte Attribute wieder zu entfernen, werden die Elemente in der Liste gewählt und die Schaltfläche Remove angeklickt.
4. Mit dem Betätigen der Schaltfläche OK wird der Vorgang abgeschlossen.

_Hinweis:_ da in Version v0.19 die Färbung der Unterelemente Teil des [Topologisches Benennungsproblems](/Topological_naming_problem/de "Topological naming problem/de") ist, sollte dies der letzte Schritt der Gestaltung des Models sein, wenn nichts mehr am Modell geändert werden soll.

![](/src/assets/images/Std_Link_override_color_example.png)

(1) das Original, (2) eine Verknüpfung mit überlagerndem Material und (3) eine weitere Verknüpfung mit individuell angepaßten Unterelementen.

## Muster aus Verknüpfungen

_Siehe auch:_ [Draft RechtwinkligeAnordnung](/Draft_OrthoArray/de "Draft OrthoArray/de").

Wenn eine Verknüpfung erstellt wird, ist seine Eigenschaft Daten**Element Count** mit `0` voreingestellt. Daher wird nur eine Verknüpfung in der [Baumansicht](/Tree_view/de "Tree view/de") angezeigt.

Wenn, wie voreingestellt die Eigenschaft Daten**Show Element** `true` ist und der Wert der Eigenschaft Daten**Element Count** auf `1` oder mehr gesetzt ist, werden automatisch mehrere Verknüpfungen unter der ersten erstellt. Jede neue Verknüpfung kann in die gewünschte Position über ihre eigene Eigenschaft Daten**Placement** verschoben werden.

In gleicher Weise kann die Erscheinung jedes Elementes des Musters verändert werden, entweder über die Eigenschaften Ansicht**Override Material** und Ansicht**Shape Material** oder über das Menü **Override colors** auf das ganze Muster und anschließender Wahl einzelner Oberflächen. Das ist in [Darstellung der Überlagerung](#Overriding_appearance) beschrieben.

![](/src/assets/images/Std_Link_tree_array_example.png) ![](/src/assets/images/Std_Link_array_example.png)

(1) das Original und (2, 3, 4) ein Muster mit drei Verknüpfungen als deren Elemente, jede in einer anderen Position. Die erste Verknüpfung hat ein überlagerndes Material und transparente Oberflächen. Die beiden anderen haben selbst geänderte Oberflächenfarben.

Wenn Position und Eigenschaften der Verküpfungen im Muster passen, kann die Eigenschaft Daten**Show Element** auf `false` gesetzt werden, um die einzelnen Verknüpfungen in der [Baumansicht](/Tree_view/de "Tree view/de") auszublenden. Dadurch reagiert das System schneller, vor allem, wenn es viele Objekte im Dokument gibt.

Bei diesem Muster mit Verknüpfungen muß jedes Element manuell positioniert werden. Soll aber ein spezielles Muster der Verknüpfungen entstehen, können die Werkzeuge des ![](/src/assets/images/Workbench_Draft.svg) [Arbeitsbereiches Draft](/Draft_Workbench/de "Draft Workbench/de"), wie ![](/src/assets/images/Draft_OrthoArray.svg) [Draft RechtwinkligeAnordnung](/Draft_OrthoArray/de "Draft OrthoArray/de"), ![](/src/assets/images/Draft_PolarArray.svg) [Draft PolareAnordnung](/Draft_PolarArray/de "Draft PolarArray/de") und ![](/src/assets/images/Draft_CircularArray.svg) [Draft KreisAnordnung](/Draft_CircularArray/de "Draft CircularArray/de") verwendet werden. Diese Anweisungen erstellen normale Kopien oder Kopien der Verknüpfungen, abhängig von den eingestellten Optionen während der Erstellung.

## Sichtbarkeit

Wenn die Eigenschaft Daten**Show Element** `true` ist und einzelne Elemente eines [Musters aus Verknüpfungen](#Link_Array) in der [Baumansicht](/Tree_view/de "Tree view/de") angezeigt werden, kann jede Verknüpfung durch die Leertaste gezeigt oder verborgen werden.

Ein anderer Weg einzelne Elemente zu verbergen ist die Verwendung des **Override colors**-Menüs.

1. Das Muster wählen und mit einem Rechtsklick das **Override colors**-Menü öffnen.
2. In der [3D Ansicht](/3D_view/de "3D view/de") ein Unterelement einer Verknüpfung im Musters anklicken.
3. Die Schaltfläche Hide klicken. Ein Icon eines Auges ![](/src/assets/images/Invisible.svg) erscheint und zeigt an, daß dieses Element in der [3D Ansicht](/3D_view/de "3D view/de") verborgen ist. Das Element wird kurz angezeigt, wenn der Cursor über das Icon ![](/src/assets/images/Invisible.svg) gezogen wird.
4. Mit einem Klick auf die Schaltfläche OK wird die Ausführung bestätigt und der Vorgang verlassen. Die Verknüpfung bleibt verborgen, auch wenn sie in der [Baumansicht](/Tree_view/de "Tree view/de") als sichtbar angezeigt wird.

![](/src/assets/images/Std_Link_array_visibility_example.png)

Die Elementenfarbwahl zeigt sich beim Öffnen des Kontextmenüs zu einer Verknüpfung in der Baumansicht.

Soll die Sichtbarkeit des Elementes in einem Muster wiederhergestellt werden, dann muß das Kontextmenü wieder geöffnet werden und das Augenicon angeklickt werden. Danach auf die Schaltfläche Remove klicken, um das Verbergen abzuschalten, und auf die Schaltfläche OK klicken, um den Vorgang zu bestätigen und zu abzuschließen. Das Element zeigt sich in der [3D Anischt](/3D_view/de "3D view/de") wieder.

Weist die Verknüpfung auf ein ![](/src/assets/images/Std_Part.svg) [Standard Teil](/Std_Part/de "Std Part/de") oder eine ![](/src/assets/images/Std_Group.svg) [Std Gruppe](/Std_Group/de "Std Group/de"), verhält sich das **Override colors**-Menü ähnlich zu den Mustern. Es ermöglicht die Einstellung einer Oberflächenfarbe, der Farbe des ganzen Objektes und die Sichtbarkeit des Objektes in der Gruppe.

![](/src/assets/images/Std_Link_Std_Part_visibility_example.png) ![](/src/assets/images/Std_Link_Std_Part_visibility_example_3D.png)

Ein [Standard Teil](/Std_Part/de "Std Part/de") enthält drei Objekte und eine Verknüpfung zu diesem Teil. In der Verknüpfung (1) ist das erste Objekt unsichtbar. (2) das zweite Objekt hat einige Unterelemente mit unterschiedlichen Farben. (3) das ganze dritte Objekt hat unterschiedliche Farben und einen gewissen Grad an Transparenz.

## Eigenschaften

Eine [Anwendung Verknüpfung](/App_Link/de "App Link/de") (`App::Link` Klasse) ist aus der zugrunde liegenden [App DocumentObject](/App_DocumentObject/de "App DocumentObject/de") (`App::DocumentObject` Klasse) abgeleitet. Deshalb hat es die grundlegenden Eigenschaften, wie Daten**Label** und Daten**Label2**.

Das Folgende sind die speziellen Eigenschaften, die im [Eigenschafteneditor](/Property_editor/de "Property editor/de") eingestellt werden können. Ausgeblendete Eigenschaften können mit dem Befehl **Ausgeblendete anzeigen** im Kontextmenü des [Eigenschafteneditors](/Property_editor/de "Property editor/de") angezeigt werden.

### Daten

Link

- Daten (LockDynamic, Hidden)**ColoredElements** (`LinkSubHidden`): list of Link elements that have had their color overriden.
- Daten (LockDynamic)**Element Count** (`IntegerConstraint`): Link element count. It defaults to `0`. If it is `1` or larger, the [App Link](/App_Link "App Link") will behave like an array, and will duplicate the same Daten**Linked Object** many times. If Daten**Show Elements** is `true`, each element in the array will be displayed in the [tree view](/Tree_view "Tree view"), and each can have its own Daten**Placement** modified. Each Link copy will have a name based on the Link's [Name](/Object_name "Object name"), augmented by `_iN`, where `N` is a number starting from `0`. For example, with a single `Link`, the copies will be named `Link_i0`, `Link_i1`, `Link_i2`, etc.
- Daten (Immutable, Hidden, LockDynamic)**ElementList** (`LinkList`): the list of Link elements.
- Daten (LockDynamic)**LinkClaimChild** (`Bool`): Claim the linked object as a child
- Daten (LockDynamic)**LinkCopyOnChange** (`Enumeration`):
  - `Disabled`: disable the creation of a copy of the linked object, triggered by a change of any of its properties set as `CopyOnChange`.
  - `Enabled`: enable a deep copy of the linked object if any of its properties marked as `CopyOnChange` are changed. After the deep copy is performed, there won't be any linkage between the original and the copied object. Therefore, changes in the original object won't be reflected in the copies. Note: this is a preparatory state, the actual copy will only happen once `CopyOnChange` properties are changed. See the `Owned` state.
  - `Owned`: indicates that the linked object has been copied, and the copy is owned by the Link. This state is set by the Link automatically, not by the user. The workflow is as follows: if the state is `Enabled` and the user modifies any properties previously set as `CopyOnChange`, then the state is changed to `Owned`. That's the point in time when the Link will perform the deep copy of the linked object. In this state, the link will not try to sync any changes of the original linked object back to the copy.
  - `Tracking`: same as `Enabled`, but additionally the copy will be automatically refreshed if the original source object changes.
- Daten (Hidden, LockDynamic)**LinkCopyOnChangeGroup** (`Link`): Linked to a internal group object for holding on change copies
- Daten (Hidden, LockDynamic)**LinkCopyOnChangeSource** (`XLink`): The copy on change source object
- Daten (Hidden, LockDynamic)**LinkCopyOnChangeTouched** (`Bool`): Indicating the copy on change source object has been changed
- Daten (LockDynamic)**LinkExecute** (`String`): name of the execute function that will run for this particular Link object. It defaults to `'appLinkExecute'`. Set it to `'None'` to disable it.
- Daten (Hidden, LockDynamic)**Link Placement** (`Placement`): it is an offset applied on top of the Daten**Placement** of the Daten**Linked Object**. This property is normally hidden but appears if Daten**Link Transform** is set to `true`; in this case, Daten**Placement** now becomes hidden.
- Daten**Link Transform** (`Bool`): it defaults to `false`, in which case the Link will override the Daten**Linked Object'**s own placement. If it is set to `true`, the Link will be placed in the same position as the Daten**Linked Object**, and its placement will be relative to the Daten**Linked Object'**s placement. This can also be achieved with ![](/src/assets/images/Std_LinkMakeRelative.svg) [Std LinkMakeRelative](/Std_LinkMakeRelative "Std LinkMakeRelative").
- Daten**Linked Object** (`XLink`): it indicates the source object of the [App Link](/App_Link "App Link"); this can be an entire object, or a subelement of it (vertex, edge, or face).
- Daten**Placement** (`Placement`): the placement of the Link in absolute coordinates.
- Daten (LockDynamic)**PlacementList** (`PlacementList`): The placement for each Link element
- Daten**Scale** (`Float`): it defaults to `1.0`. It is a factor for uniform scaling in each direction `X`, `Y`, and `Z`. For example, a cube of `2 mm` x `2 mm` x `2 mm`, that is scaled by `2.0`, will result in a shape with dimensions `4 mm` x `4 mm` x `4 mm`.
- Daten**Scale List** (`VectorList`): the scale factor for each Link element.
- Daten (Hidden)**Scale Vector** (`Vector`): the scale factor for each component `(X, Y, Z)` for all Link elements when Daten**Element Count** is `1` or larger. If Daten**Scale** is other than `1.0`, this same value will be used in the three components.
- Daten**Show Element** (`Bool`): it defaults to `true`, in which case the [tree view](/Tree_view "Tree view") will show the individual Link copies, as long as Daten**Element Count** is `1` or larger.
- Daten (NoPersist, ReadOnly, Hidden)**\_ChildCache** (`LinkList`): TBD
- Daten (Hidden, Output)**\_LinkOwner** (`Integer`): TBD
- Daten (NoPersist, Hidden)**\_LinkTouched** (`Bool`): TBD

Base

- Daten (Hidden)**Proxy** (`PythonObject`): a custom class associated with this object. This only exists for the [Python](/Python "Python") version. See [Scripting](/Std_LinkMake#Scripting "Std LinkMake").

The [App Link](/App_Link "App Link") object will additionally show the properties of the original Daten**Linked Object**, so the [property editor](/Property_editor "Property editor") may have groups of properties like Attachment, Box, Draft, etc.

### Ansicht

Link

- Ansicht**Draw Style** (`Enumeration`): it defaults to `None`; it can be `Solid`, `Dashed`, `Dotted`, `Dashdot`; defines the style of the edges in the [3D view](/3D_view "3D view").
- Ansicht**Line Width** (`FloatConstraint`): a float that determines the width in pixels of the edges in the [3D view](/3D_view "3D view"). It defaults to `2.0`.
- Ansicht**Override Material** (`Bool`): it defaults to `false`; if set to `true` it will override the Daten**Linked Object'**s material, and it will display the colors defined in Ansicht**Shape Material**.
- Ansicht**Point Size** (`FloatConstraint`): similar to Ansicht**Line Width**, defines the size of the vertices.
- Ansicht**Selectable** (`Bool`): if it is `true`, the object can be picked with the pointer in the [3D view](/3D_view "3D view"). Otherwise, the object cannot be selected until this option is set to `true`.

- Ansicht**Shape Material** (`Material`): this property includes sub-properties that describe the appearance of the object.
  - Ansicht**Diffuse Color**, it defaults to `(0.4, 1.0, 1.0)`, which is displayed as `[102, 255, 255]` on base 255, light blue .
  - Ansicht**Ambient Color**, it defaults to `(0.2, 0.2, 0.2)`, which is displayed as `[51, 51, 51]` on base 255, dark gray .
  - Ansicht**Specular Color**, it defaults to `(0.0, 0.0, 0.0)`, which is displayed as `[0, 0, 0]` on base 255, black .
  - Ansicht**Emissive Color**, it defaults to `(0.0, 0.0, 0.0)`, which is displayed as `[0, 0, 0]` on base 255, black .
  - Ansicht**Shininess**, it defaults to `0.2`
  - Ansicht**Transparency**, it defaults to `0.0`.

Base

- Ansicht (Hidden)**Child View Provider** (`PersistentObject`):
- Ansicht (Hidden)**Material List** (`MaterialList`): _(read-only)_ if individual materials have been added, they will be listed here.
- Ansicht (Hidden)**Override Color List** (`ColorList`): _(read-only)_ if the individual faces or edges of the link have been overridden they will be listed here.
- Ansicht (Hidden)**Override Material List** (`BoolList`): _(read-only)_ if the individual materials of the link have been overridden they will be listed here.

Display Options

- Ansicht**Display Mode** (`Enumeration`): `'Link'` or `'ChildView'`.
- Ansicht**Show In Tree** (`Bool`): see the information in [App FeaturePython](/App_FeaturePython "App FeaturePython").
- Ansicht**Visibility** (`Bool`): see the information in [App FeaturePython](/App_FeaturePython "App FeaturePython").

Selection

- Ansicht**On Top When Selected** (`Enumeration`): see the information in [App FeaturePython](/App_FeaturePython "App FeaturePython").
- Ansicht**Selection Style** (`Enumeration`): see the information in [App FeaturePython](/App_FeaturePython "App FeaturePython").

Es zeigt zusätzlich die Ansichtseigenschaften des ursprünglichen Daten**Linked Object**.

## Vererbung

An [App Link](/App_Link "App Link") is formally an instance of the class `App::Link`, whose parent is the basic [App DocumentObject](/App_DocumentObject "App DocumentObject") (`App::DocumentObject` class). It is a very low level object, which can be used with most other document objects.

![](/src/assets/images/FreeCAD_core_objects.svg)

Simplified diagram of the relationships between the core objects in the program. The `App::Link` object is a core component of the system, it does not depend on any workbench, but it can be used with most objects created in all workbenches.

## Skripten

_Siehe auch:_ [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de") und [Skriptgenerierte Objekte](/Scripted_objects/de "Scripted objects/de").

Für allgemeine Informationen, siehe [Part Formelement](/Part_Feature/de "Part Feature/de").

An App Link is created with the `addObject()` method of the document. It can define its Daten**Linked Object** by overriding its `LinkedObject` attribute, or by using its `setLink` method.

```
import FreeCAD as App

doc = App.newDocument()
bod1 = App.ActiveDocument.addObject("Part::Box", "Box")
bod2 = App.ActiveDocument.addObject("Part::Cylinder", "Cylinder")
bod1.Placement.Base = App.Vector(10, 0, 0)
bod2.Placement.Base = App.Vector(0, 10, 0)

obj1 = App.ActiveDocument.addObject("App::Link", "Link")
obj2 = App.ActiveDocument.addObject("App::Link", "Link")

obj1.LinkedObject = bod1
obj2.setLink(bod2)
obj1.Placement.Base = App.Vector(-10, -10, 0)
obj2.Placement.Base = App.Vector(10, -10, 0)
obj1.ViewObject.OverrideMaterial = True
App.ActiveDocument.recompute()

```

The basic `App::Link` doesn't have a Proxy object so it can't be fully used for sub-classing.

Therefore, for [Python](/Python "Python") subclassing, you should create the `App::LinkPython` object.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("App::LinkPython", "Link")
obj.Label = "Custom label"

```

## Weiterführende Literatur

Wenn Du die historischen Gründe überspringen möchtest, gehe zur GitHub-Seite [user-oriented introduction to links](https://github.com/realthunder/FreeCAD_assembly3/wiki/Link).

Das Objekt [Anwendung Verknüpfung](/App_Link/de "App Link/de") wurde nach 2 Jahren Entwicklung und Prototypenfertigung eingeführt. Diese Komponente wurde fast im Alleingang vom Benutzer _realthunder_ ausgedacht und entwickelt. Die Motivationen und Entwurfsimplementierungen hinter diesem Projekt sind in seiner GitHub Seite [Link](https://github.com/realthunder/FreeCAD_assembly3/wiki/Link) beschrieben. Um dieses Feature zu erreichen, wurden einige Kernänderungen an FreeCAD vorgenommen; diese wurden auch ausführlich dokumentiert in [Core-Changes](https://github.com/realthunder/FreeCAD_assembly3/wiki/Core-Changes).

The App Link project started after the redesign of the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") was complete in v0.17. The history of App Link can be traced to some essential forum threads:

- [Why an object can only be inside one App::Part?](https://forum.freecadweb.org/viewtopic.php?f=19&t=21505) (March 2017)
- [Introducing App::Link/XLink](https://forum.freecadweb.org/viewtopic.php?f=10&t=21586) (March 2017)
- [Links](https://forum.freecadweb.org/viewtopic.php?f=20&t=22216) (May 2017)
- [Realthunder Link implementation: Architecture discussion](https://forum.freecadweb.org/viewtopic.php?f=20&t=23015) (June 2017)
- [PR #876: Link, stage one, context aware selection](https://forum.freecadweb.org/viewtopic.php?f=17&t=23419) (July 2017)
- [Preview: Link, stage two, API groundwork](https://forum.freecadweb.org/viewtopic.php?f=17&t=23626) (July 2017)
- [Assembly3 preview](https://forum.freecadweb.org/viewtopic.php?f=20&t=25712) (December 2017)
- [Merging of my Link branch](https://forum.freecadweb.org/viewtopic.php?f=10&t=29542) (June 2018)

Finally, the pull request and merge happened:

- [App::Link: the big merge](https://forum.freecadweb.org/viewtopic.php?f=27&t=38621), old thread (July 2019), [pull request #2350](https://github.com/FreeCAD/FreeCAD/pull/2350) (the BIG merge), [LinkMerge branch](https://github.com/realthunder/FreeCAD/tree/LinkMerge).
- [App::Link: the big merge](https://forum.freecadweb.org/viewtopic.php?f=8&t=37757), main thread (July 2019)
- [A simple path description of Link, 019, Link stage, Asm3, merge?](https://forum.freecadweb.org/viewtopic.php?p=329054#p329054) (August 2019)
- [PR#2559: expose link and navigation actions](https://forum.freecadweb.org/viewtopic.php?f=17&t=39672), an introduction to the Link feature in 0.19 (September 2019).

Andere verschiedene „Links“ über Link beinhalten:

- [Dynamic linked object](/Dynamic_linked_object "Dynamic linked object") - Ein Muster mit Link und Baugruppen, das darauf abzielt, die Duplizierung von Baugruppen-bezogener Logik wie Orientierung, Positionierung oder Anzahl der Instanzen zu reduzieren.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_LinkMake/de&oldid=1560882>"
