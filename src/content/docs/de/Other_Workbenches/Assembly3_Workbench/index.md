---
title: Arbeitsbereich Assembly3
---

![](/images/Assembly3_workbench_icon.svg)

Symbol des Arbeitsbereichs Assembly3

## Einleitung

![](/images/Assembly3_workbench_icon.svg) Assembly3 ist ein [externer Arbeitsbereich](/External_workbenches/de "External workbenches/de"), der dem Zusammenbau von verschiedenen Körpern dient, die entweder in einem einzigen oder in mehreren separaten Dokumenten gespeichert sind. Der Arbeitsbereich basiert auf einigen Änderungen der Kernfunktionen, die mit FreeCAD 0.19 eingeführt wurden (z.B. [App-Link](/App_Link/de "App Link/de")), sodass der Arbeitsbereich Assembly3 nicht mit früheren Versionen verwendet werden kann.

Die Hauptmerkmale des Assembly3-Arbeitsbereichs sind

- ein **dynamischer/interaktiver Löser**. Das heißt, dass man Teile mit der Maus bewegen kann, während der Löser die Bewegung(sfreiheit) einschränkt. Dies erlaubt z. B. ein Rad mit einer Achse zu verbinden und das Rad interaktiv mit der Maus zu drehen.
- **Verknüpfungen**. Damit kann ein einzelnes Teil, z. B. eine Schraube, mehrfach (an unterschiedlichen Stellen) in einem Zusammenbau (einer Baugruppe) zu verwenden, ohne die Geometrie zu vervielfachen.
- **externe Verknüpfungen**. Es ist möglich, dass ein FreeCAD-Dokument nur einen Zusammenbau und keine Einzelteile enthält. Alle Bauteile können in separaten Dateien abgelegt sein. Die Dateien könnten auch in einer Bibliothek oder anderswo im Dateisystem abgelegt sein. Die einzige Voraussetzung ist die, dass die Datei geladen sein muss, wenn die Verknüpfung angelegt wird. Nachdem die Verknüpfung erstellt wurde, muss die Datei geöffnet sein, um Verknüpfungen, die die Datei betreffen, zu aktualisieren. Assembly3 erreicht dies, indem es die Dateien bei Bedarf im Hintergrund öffnet.
- **hierarchische Baugruppen**. Wie im wirklichen Leben darf ein mechanischer Zusammenbau aus Unterbaugruppen bestehen. Auch diese können aus Unterbaugruppen bestehen und so weiter.
- das **Einfrieren von Baugruppen**. Da die CPU nur eine bestimmte Anzahl gleichzeitiger Bedingungen in Echtzeit verarbeiten kann, ermöglicht das Einfrieren von Baugruppen die Anwendung von Bedingungen sogar für große Baugruppen. Durch das Einfrieren von fertigen Baugruppen oder Bedingungen, die nicht dynamisch verändert werden müssen (z.B. bei verschweißten, vernieteten oder verklebten Bauteilen), werden diese von Aktualisierungsberechnungen ausgenommen und vom Assembly3-Löser als fixierte Geometrie angesehen.

  : Man beachte, dass andere Herangehensweisen andere Lösungen für dieses Problem anbieten, z. B. der Arbeitsbereich ![](/images/Assembly4_workbench_icon.svg) [Assembly4](/Assembly4_Workbench/de "Assembly4 Workbench/de").

[Anfang](#top)

### Symbolleisten

Seit 2020 enthält der Arbeitsbereich Assembly3 die folgenden Symbolleisten.

#### Hauptwerkzeugleiste

: ![](/images/Assembly_New_Assembly.svg) ![](/images/Assembly_New_Group.svg) ![](/images/Assembly_New_Element.svg) ![](/images/Assembly_Import.svg)![](/images/AngleDown.svg)![](/images/Assembly3_workbench_icon.svg) ![](/images/Assembly_QuickSolve.svg) ![](/images/Assembly_Move.svg) ![](/images/Assembly_AxialMove.svg) ![](/images/Assembly_QuickMove.svg) ![](/images/Assembly_LockMover.svg) ![](/images/Assembly_TogglePartVisibility.svg) ![](/images/Assembly_Trace.svg) ![](/images/Assembly_AutoRecompute.svg) ![](/images/Assembly_SmartRecompute.svg) ![](/images/Assembly_AutoFixElement.svg) ![](/images/Assembly_AutoElementVis.svg)![](/images/AngleDown.svg)![](/images/Assembly_Add_Workplane.svg)![](/images/AngleDown.svg)![](/images/Assembly_TreeItemUp.svg) ![](/images/Assembly_TreeItemDown.svg) ![](/images/Assembly_ConstraintMultiply.svg)

: Die **Hauptwerkzeugleiste** enthält Werkzeuge, die die am häufigsten gebrauchten Funktionen des Arbeitsbereiches abdecken. Die zugehörigen Tastaturkürzel findet man in den Tooltips.

- ![](/images/Assembly_Add_Existing_Part.svg) [Baugruppe erstellen](/Assembly3_CreateAssembly/de "Assembly3 CreateAssembly/de"): Fügt einen Baugruppenordner hinzu.

  - ![](/images/Assembly_New_Group.svg) [Objekte gruppieren](/Assembly3_GroupObjects/de "Assembly3 GroupObjects/de"): Erstellt eine Objektgruppe.
  - ![](/images/Assembly_New_Element.svg) [Element erstellen](/Assembly3_CreateElement/de "Assembly3 CreateElement/de"): Fügt ein Element hinzu. Dies steht auch im Kontextmenü zur Verfügung.
  - STEP-Dateien importieren. Hier gibt es zwei Einstellungen:
    - ![](/images/Assembly_Import.svg) [STEP-Dateien importieren](/Assembly3_ImportFromSTEP/de "Assembly3 ImportFromSTEP/de"): Importiert STEP-Dateien.
    - ![](/images/Assembly_ImportMulti.svg) [Als Mehrfachdokument importieren](/Assembly3_ImportMultiDocument/de "Assembly3 ImportMultiDocument/de"): Importiert STEP-Baugruppen in separate Dokumente.
  - ![](/images/Assembly3_workbench_icon.svg) [Bedingungen berechnen](/Assembly3_ResolveConstraints/de "Assembly3 ResolveConstraints/de"): Berechnet festgelegte Bedingungen.
  - ![](/images/Assembly_QuickSolve.svg) [Schnelle Berechnung](/Assembly3_QuickSolve/de "Assembly3 QuickSolve/de"): Bedingungen schnell berechnen.
  - ![](/images/Assembly_Move.svg) [Bauteil bewegen](/Assembly3_MovePart/de "Assembly3 MovePart/de"): Bewegt das Bauteil in 3D; dies ist ein spezielles Assembly3-Werkzeug.
  - ![](/images/Assembly_AxialMove.svg) [Axial bewegen](/Assembly3_AxialMove/de "Assembly3 AxialMove/de"): Bewegt das Bauteil axial in 3D; dies ist das übliche Werkzeug, das auch anderen Bereichen von FreeCAD zur Verfügung steht.
  - ![](/images/Assembly_QuickMove.svg) [Schnelles Bewegen](/Assembly3_QuickMove/de "Assembly3 QuickMove/de"): Dies hängt das im Baum ausgewählte Bauteil an den Mauszeiger. Es verändert die Position des Bauteils, mit einem Mausklick.

    : Oft befinden sich hinzugefügte Bauteile übereinander gestapelt im Ursprung. Diese Funktion kann benutzt werden, um nicht sichtbare Teile zu erreichen.

  - ![](/images/Assembly_LockMover.svg) [Bewegung verhindern](/Assembly3_LockMover/de "Assembly3 LockMover/de"): Schließt die Bewegung für fixierte Bauteile aus. Umschaltknopf. Wenn dieser abgewählt ist, können auch Teile bewegt werden, die durch die Bedingung Festsetzen verankert sind.
  - ![](/images/Assembly_TogglePartVisibility.svg) [Sichtbarkeit umschalten](/Assembly3_TogglePartVisibility/de "Assembly3 TogglePartVisibility/de"): Dies schaltet die Sichtbarkeit des ausgewählten Teils ein bzw. aus.

    : Achtung, dies unterscheidet sich von der Benutzung der Leertaste. Die Benutzung der Leertaste mit ausgewählten Elementen einer Unterbaugruppe in der 3D-Ansicht liefert oft nicht das erwartete Verhalten. In solchen Fällen sollte diese Funktion benutzt werden (oder das Tastenkürzel A, Leertaste)

  - ![](/images/Assembly_Trace.svg) [Bauteilbewegung aufzeichnen](/Assembly3_TracePartMove/de "Assembly3 TracePartMove/de"): Zeichnet eine Bewegungsbahn auf. (TBD)
  - ![](/images/Assembly_AutoRecompute.svg) [Automatisch berechnen](/Assembly3_AutoRecompute/de "Assembly3 AutoRecompute/de"):Automatische Berechnung. Standardmäßig aktiviert.

    : Kann deaktiviert werden für die Reparatur von Bedingungen oder das Festsetzen von Bauteilen, für die der Löser Die Nachricht _"do not converge"_ ausgibt (z.B. wenn das Bauteil um 180° gedreht wird)

  - ![](/images/Assembly_SmartRecompute.svg) [Smart berechnen](/Assembly3_SmartRecompute/de "Assembly3 SmartRecompute/de"): Smarte Berechnung. Standardmäßig aktiviert.
  - ![](/images/Assembly_AutoFixElement.svg) [Element automatisch festsetzen](/Assembly3_AutoFixElement/de "Assembly3 AutoFixElement/de"): Automatische Elementfixierung. Experimentelle Funktion in 0.19_pre
  - Elementdarstellung. Hier gibt es zwei Einstellungen:
    - ![](/images/Assembly_AutoElementVis.svg) [Element automatisch anzeigen](/Assembly3_AutoElementVisibility/de "Assembly3 AutoElementVisibility/de"): Element automatisch anzeigen.
    - ![](/images/Assembly_ShowElementCS.svg) [Element-Koordinatensystem anzeigen](/Assembly3_ShowElementCS/de "Assembly3 ShowElementCS/de"): Koordinatensystem des Elements anzeigen.
  - Arbeitsebene und Ursprung. Fügt eine Arbeitsebene, ein Bezugssystem oder einen Ursprung hinzu. Es muss ein Bauteil ausgewählt sein. Hier gibt es fünf Einstellungen.
    - ![](/images/Assembly_Add_Workplane.svg) [Arbeitsebene hinzufügen](/Assembly3_AddWorkplane/de "Assembly3 AddWorkplane/de"): Arbeitsebene hinzufügen.
    - ![](/images/Assembly_Add_WorkplaneXZ.svg) [XZ-Arbeitsebene hinzufügen](/Assembly3_AddXZWorkplane/de "Assembly3 AddXZWorkplane/de"): XZ-Arbeitsebene hinzufügen.
    - ![](/images/Assembly_Add_WorkplaneZY.svg) [ZY-Arbeitsebene hinzufügen](/Assembly3_AddZYWorkplane/de "Assembly3 AddZYWorkplane/de"): YZ-Arbeitsebene hinzufügen.
    - ![](/images/Assembly_Add_Placement.svg) [Bezugssystem hinzufügen](/Assembly3_AddPlacement/de "Assembly3 AddPlacement/de"): Bezugssystem hinzufügen.
    - ![](/images/Assembly_Add_Origin.svg) [Ursprung hinzufügen](/Assembly3_AddOrigin/de "Assembly3 AddOrigin/de"): Ursprung hinzufügen.
  - ![](/images/Assembly_TreeItemUp.svg) [Objekt nach oben bewegen](/Assembly3_MoveItemUp/de "Assembly3 MoveItemUp/de"): Ausgewähltes Baumobjekt aufwärts bewegen.
  - ![](/images/Assembly_TreeItemDown.svg) [Objekt nach unten bewegen](/Assembly3_MoveItemDown/de "Assembly3 MoveItemDown/de"): Ausgewähltes Baumobjekt abwärts bewegen.

    : Erlaubt es Bauteile, Elemente oder Bedingungen im Baum umzusortieren. Mit "Element roll over" (von der ersten zur letzten Position und umgekehrt). Funktioniert nur mit einer einzelnen Auswahl.

  - ![](/images/Assembly_ConstraintMultiply.svg) [Bedingung vervielfältigen](/Assembly3_MultiplyConstraint/de "Assembly3 MultiplyConstraint/de"): Bedingung vervielfältigen. Dies kann ausgewählt werden, wenn Bauteile und geeignete Elemente mehrfach vorhanden sind. Es kann z.B. eingesetzt werden, um mehrfach vorhandene Befestigungselemente mehrfach vorhandenen Löchern mit nur einer Bedingung zuzuordnen.

#### Hauptwerkzeugleiste für Bedingungen

: ![](/images/Assembly_ConstraintLock.svg) ![](/images/Assembly_ConstraintAlignment.svg) ![](/images/Assembly_ConstraintCoincidence.svg) ![](/images/Assembly_ConstraintAttachment.svg)![](/images/AngleDown.svg)![](/images/Assembly_ConstraintAxial.svg) ![](/images/Assembly_ConstraintSameOrientation.svg) ![](/images/Assembly_ConstraintMultiParallel.svg) ![](/images/Assembly_ConstraintAngle.svg) ![](/images/Assembly_ConstraintPerpendicular.svg) ![](/images/Assembly_ConstraintPointCoincident.svg) ![](/images/Assembly_ConstraintPointInPlane.svg) ![](/images/Assembly_ConstraintPointOnLine.svg) ![](/images/Assembly_ConstraintPointOnCircle.svg) ![](/images/Assembly_ConstraintPointsDistance.svg) ![](/images/Assembly_ConstraintPointPlaneDistance.svg) ![](/images/Assembly_ConstraintPointLineDistance.svg) ![](/images/Assembly_ConstraintSymmetric.svg) ![](/images/Assembly_ConstraintMore.svg)

: Einige dieser Werkzeuge sind eigentlich Menüs für weitere Werkzeuge.

- ![](/images/Assembly_ConstraintLock.svg) [Festsetzen](/Assembly3_ConstraintLock/de "Assembly3 ConstraintLock/de"): Zum Fixieren eines oder mehrerer Bauteile.

      :   Es muss ein (Geometrie-) Element eines Teiles ausgewählt werden.
      :   Wird ein Knotenpunkt oder eine Kante festgesetzt, lässt sich das Teil immer noch frei um den Knotenpunkt oder die Kante drehen.
      :   Das Festsetzen einer Fläche fixiert das Teil vollständig.

  - ![](/images/Assembly_ConstraintAlignment.svg) [Ebenen ausrichten](/Assembly3_ConstraintAlignment/de "Assembly3 ConstraintAlignment/de"): Zum Ausrichten ebener Flächen zweier oder mehrerer Teile.

    : Die Flächen werden komplanar ausgerichtet oder optional parallel mit Abstand.

  - ![](/images/Assembly_ConstraintCoincidence.svg) [Deckungsgleiche Ebenen](/Assembly3_ConstraintCoincidence/de "Assembly3 ConstraintCoincidence/de"): Zum deckungsgleich Festlegen ebener Flächen zweier oder mehrerer Teile.

    : Die Flächen werden mit deckungsgleichen Ursprüngen komplanar ausgerichtet oder optional parallel mit Abstand.

  - Befestigung. Dies hat zwei Varianten

    - ![](/images/Part_Attachment.svg) [Befestigen](/Assembly3_ConstraintAttachment/de "Assembly3 ConstraintAttachment/de"): Zum Befestigen eines Teils an ein zweites mittels der ausgewählten (Geometrie-) Elemente.

      : Diese Bedingung verbindet beide Teile starr miteinander.

    - ![](/images/Assembly_ConstraintAttachmentOffset.svg) [Versetzt befestigen](/Assembly3_ConstraintAttachmentOffset/de "Assembly3 ConstraintAttachmentOffset/de"): Wie die Bedingung "Befestigen", aber unter Beibehaltung der relativen Ausrichtung der beteiligten Teile durch Anpassung der Offset-Werte eines Elements.

      : Diese Bedingung verbindet beide Teile starr miteinander.

  - ![](/images/Assembly_ConstraintAxial.svg) [Axial ausrichten](/Assembly3_ConstraintAxial/de "Assembly3 ConstraintAxial/de"): Zum axialen Ausrichten (Fluchten) von Kanten und Flächen zweier oder mehrerer Teile.

    : Die Bedingung akzeptiert:

        :   lineare Kanten; sie werden kollinear ausgerichtet,
        :   ebene Flächen; sie werden unter Nutzung ihrer Flächennormalen (Z-Achse) ausgerichtet,
        :   und zylindrische Flächen; sie werden unter Nutzung ihrer (Z-) Achsrichtung ausgerichtet.

    : Verschiedene Arten von (Geometrie-) Elementen können gemischt werden.

  - ![](/images/Assembly_ConstraintSameOrientation.svg) [Richtungen angleichen](/Assembly3_ConstraintSameOrientation/de "Assembly3 ConstraintSameOrientation/de"): Zum identischen Ausrichten der (ebenen) Flächen zweier oder mehrerer Teile.

    : Die Ebenen werden so ausgerichtet, dass ihre (Z-) Achsen in dieselbe Richtung zeigen.

  - ![](/images/Assembly_ConstraintMultiParallel.svg) [Mehrfach parallel](/Assembly3_ConstraintMultiParallel/de "Assembly3 ConstraintMultiParallel/de"): Zum parallelen Ausrichten von ebenen Flächen oder geraden Kanten zweier oder mehrerer Teile.
  - ![](/images/Assembly_ConstraintAngle.svg) [Winkel festlegen](/Assembly3_ConstraintAngle/de "Assembly3 ConstraintAngle/de"): Zum Festlegen des Winkels zwischen ebenen Flächen oder geraden Kanten zweier Teile.
  - ![](/images/Assembly_ConstraintPerpendicular.svg) [Rechtwinklig festlegen](/Assembly3_ConstraintPerpendicular/de "Assembly3 ConstraintPerpendicular/de"): Zum rechtwinkligen Festlegen von ebenen Flächen oder geraden Kanten zweier Teile.
  - ![](/images/Assembly_ConstraintPointCoincident.svg) [Punkt auf Punkt](/Assembly3_ConstraintPointsCoincident/de "Assembly3 ConstraintPointsCoincident/de"): Zum deckungsgleich Festlegen zweier Punkte in 2D oder 3D.
  - ![](/images/Assembly_ConstraintPointInPlane.svg) [Punkt auf Ebene](/Assembly3_ConstraintPointInPlane/de "Assembly3 ConstraintPointInPlane/de"): Zum Festlegen eines oder mehrerer Punkte auf einer Ebene (Punktberührung).
  - ![](/images/Assembly_ConstraintPointOnLine.svg) [Punkt auf Linie](/Assembly3_ConstraintPointOnLine/de "Assembly3 ConstraintPointOnLine/de"): Zum Festlegen eines oder mehrerer Punkte auf einer Linie in 2D or 3D.
  - ![](/images/Assembly_ConstraintPointOnCircle.svg) [Punkt auf Kreis](/Assembly3_ConstraintPointOnCircle/de "Assembly3 ConstraintPointOnCircle/de"): Zum Festlegen eines oder mehrerer Punkte auf einer durch einen Kreis definierten zylindrischen Fläche.

    : Achtung! Es muss ein Punkt (irgendein Geometrieelement, dass einen Punkt definieren kann) ausgewählt werden und dann der Kreis (oder eine zylindrische Fläche),
    : danach können bei Bedarf weitere Punkte hizugefügt werden.

  - ![](/images/Assembly_ConstraintPointsDistance.svg) [Punkt zu Punkt Abstand](/Assembly3_ConstraintPointsDistance/de "Assembly3 ConstraintPointsDistance/de"): Zum Festlegen des Abstands zweier oder mehrerer Punkte zueinander.
  - ![](/images/Assembly_ConstraintPointPlaneDistance.svg) [Punkt zu Ebene Abstand](/Assembly3_ConstraintPointPlaneDistance/de "Assembly3 ConstraintPointPlaneDistance/de"): Zum Festlegen des Abstands eines oder mehrerer Punkte zu einer Ebene.
  - ![](/images/Assembly_ConstraintPointLineDistance.svg) [Punkt zu Linie Abstand](/Assembly3_ConstraintPointLineDistance/de "Assembly3 ConstraintPointLineDistance/de"): Zum Festlegen des Abstands eines Punktes zu einer geraden Kante in 2D oder 3D.
  - ![](/images/Assembly_ConstraintSymmetric.svg) [Symmetrie festlegen](/Assembly3_ConstraintSymmetric/de "Assembly3 ConstraintSymmetric/de"): Zum Festlegen der Symmetrie der (Geometrie-) Elemente zweier Teile bezüglich einer Ebene.

    : Unterstützte Elemente sind gerade Kanten und ebene Flächen.

  - ![](/images/Assembly_ConstraintMore.svg) [Weitere](/Assembly3_ConstraintMore/de "Assembly3 ConstraintMore/de"): Werkzeugleisten umschalten für weitere Bedingungen

    : Nicht wirklich eine Bedingung, sondern ein Umschalter zum Anzeigen/Ausblenden der **Zusatzwerkzeugleisten für Bedingungen**.

#### Zusatzwerkzeugleisten für Bedingungen

: ![](/images/Assembly_ConstraintPointDistance.svg) ![](/images/Assembly_ConstraintEqualAngle.svg) ![](/images/Assembly_ConstraintPointsSymmetric.svg) ![](/images/Assembly_ConstraintGeneral.svg) ![](/images/Assembly_ConstraintGeneral.svg) ![](/images/Assembly_ConstraintSymmetricLine.svg) ![](/images/Assembly_ConstraintPointsHorizontal.svg) ![](/images/Assembly_ConstraintPointsVertical.svg) ![](/images/Assembly_ConstraintLineHorizontal.svg) ![](/images/Assembly_ConstraintLineVertical.svg) ![](/images/Assembly_ConstraintArcLineTangent.svg) (Assembly3 Constraints2)

: ![](/images/Assembly_ConstraintSketchPlane.svg) ![](/images/Assembly_ConstraintLineLength.svg) ![](/images/Assembly_ConstraintEqualLength.svg) ![](/images/Assembly_ConstraintLengthRatio.svg) ![](/images/Assembly_ConstraintLengthDifference.svg) ![](/images/Assembly_ConstraintLengthEqualPointLineDistance.svg) ![](/images/Assembly_ConstraintEqualLineArcLength.svg) ![](/images/Assembly_ConstraintMidPoint.svg) ![](/images/Assembly_ConstraintDiameter.svg) ![](/images/Assembly_ConstraintEqualRadius.svg) ![](/images/Assembly_ConstraintPointsProjectDistance.svg) ![](/images/Assembly_ConstraintEqualPointLineDistance.svg) ![](/images/Assembly_ConstraintColinear.svg) (Assembly3 Sketch Constraints)

: Diese kann man durch Auswählen der Schaltfläche ![](/images/Assembly_ConstraintMore.svg) [Weitere](/Assembly3_ConstraintMore/de "Assembly3 ConstraintMore/de") in der Hauptwerkzeugleiste für Bedingungen aktivieren.

- ![](/images/Assembly_ConstraintPointDistance.svg) [Abstand zweier Punkte](/Assembly3_ConstraintPointDistance/de "Assembly3 ConstraintPointDistance/de"): Zum Festlegen des Abstands zweier Punkte in 2D oder 3D.

  - ![](/images/Assembly_ConstraintEqualAngle.svg) [Gleiche Winkel](/Assembly3_ConstraintEqualAngle/de "Assembly3 ConstraintEqualAngle/de"): Zum Festlegen von gleichen Winkeln zwischen (je) zwei Linien oder (Flächen-) Normalen.
  - ![](/images/Assembly_ConstraintPointsSymmetric.svg) [Symmetrische Punkte](/Assembly3_ConstraintPointsSymmetric/de "Assembly3 ConstraintPointsSymmetric/de"): Zum Festlegen der symmetrischen Lage zweier Punkte bezüglich einer Ebene.
  - ![](/images/Assembly_ConstraintGeneral.svg) () [Horizontale Symmetrie](/Assembly3_ConstraintSymmetricHorizontal/de "Assembly3 ConstraintSymmetricHorizontal/de") : (noch nicht fertig...)
  - ![](/images/Assembly_ConstraintGeneral.svg) () [Vertikale Symmetrie](/Assembly3_ConstraintSymmetricVertical/de "Assembly3 ConstraintSymmetricVertical/de"): (noch nicht fertig...)
  - ![](/images/Assembly_ConstraintSymmetricLine.svg) [Achsensymmetrie](/Assembly3_ConstraintSymmetricLine/de "Assembly3 ConstraintSymmetricLine/de"): Zum Festlegen der symmetrischen Lage zweier Punkte bezüglich einer Symmetrieachse.
  - ![](/images/Assembly_ConstraintPointsHorizontal.svg) [Horizontale Punkte](/Assembly3_ConstraintPointsHorizontal/de "Assembly3 ConstraintPointsHorizontal/de"): Zum Festlegen einer horizontalen Ausrichtung zweier Punkte, wenn sie auf eine Ebene projiziert werden.
  - ![](/images/Assembly_ConstraintPointsVertical.svg) [Vertikale Punkte](/Assembly3_ConstraintPointsVertical/de "Assembly3 ConstraintPointsVertical/de"): Zum Festlegen einer vertikalen Ausrichtung zweier Punkte, wenn sie auf eine Ebene projiziert werden.
  - ![](/images/Assembly_ConstraintLineHorizontal.svg) [Horizontale Linie](/Assembly3_ConstraintLineHorizontal/de "Assembly3 ConstraintLineHorizontal/de"): Zum Festlegen einer horizontalen Ausrichtung eines Liniensegments, wenn es auf eine Ebene projiziert wird.
  - ![](/images/Assembly_ConstraintLineVertical.svg) [Vertikale Linie](/Assembly3_ConstraintLineVertical/de "Assembly3 ConstraintLineVertical/de"): Zum Festlegen einer vertikalen Ausrichtung eines Liniensegments, wenn es auf eine Ebene projiziert wird.
  - ![](/images/Assembly_ConstraintArcLineTangent.svg) [Bogen-Linie-Tangente](/Assembly3_ConstraintArcLineTangent/de "Assembly3 ConstraintArcLineTangent/de"): Zum Festlegen eines tangentiellen Übergangs zwischen einer Linie und dem Start- oder Endpunkt eines Bogens.

- ![](/images/Assembly_ConstraintSketchPlane.svg) [Skizzierebene](/Assembly3_ConstraintSketchPlane/de "Assembly3 ConstraintSketchPlane/de"): Zum Festlegen einer Arbeitsebene für alle zugehörigen Elemente des Arbeitsbereichs Draft.

      :   Eine weitere hinzufügte leere Skizzierebene löst die vorherige als Arbeitsebene ab.

  - ![](/images/Assembly_ConstraintLineLength.svg) [Linienlänge](/Assembly3_ConstraintLineLength/de "Assembly3 ConstraintLineLength/de"): Zum Festlegen der Länge eines nicht unterteilten Draft-Linienzuges.
  - ![](/images/Assembly_ConstraintEqualLength.svg) [Gleiche Länge](/Assembly3_ConstraintEqualLength/de "Assembly3 ConstraintEqualLength/de"): Zum Festlegen, dass zwei Linien gleich lang sind.
  - ![](/images/Assembly_ConstraintLengthRatio.svg) [Längenverhältnis](/Assembly3_ConstraintLengthRatio/de "Assembly3 ConstraintLengthRatio/de"): Zum Festlegen des Verhältnisses der Längen zweier Linien.
  - ![](/images/Assembly_ConstraintLengthDifference.svg) [Längendifferenz](/Assembly3_ConstraintLengthDifference/de "Assembly3 ConstraintLengthDifference/de"): Zum Festlegen der Differenz der Längen zweier Linien.
  - ![](/images/Assembly_ConstraintLengthEqualPointLineDistance.svg) [Länge gleich Punkt-Linie-Abstand](/Assembly3_ConstraintLengthEqualPointLineDistance/de "Assembly3 ConstraintLengthEqualPointLineDistance/de"): Zum Festlegen, dass der Abstand eines Punktes zu einer Linie gleich der Länge einer weiteren Linie ist.
  - ![](/images/Assembly_ConstraintGeneral.svg) ( ![](/images/Assembly_ConstraintEqualLineArcLength.svg) )[Linien- gleich Bogenlänge](/Assembly3_ConstraintEqualLineArcLength/de "Assembly3 ConstraintEqualLineArcLength/de"): Zum Festlegen, dass die Länge einer Linie gleich der Länge enes Bogens ist.
  - ![](/images/Assembly_ConstraintMidPoint.svg) [Mittelpunkt](/Assembly3_ConstraintMidPoint/de "Assembly3 ConstraintMidPoint/de"): Zum Festlegen eines Punktes in der Mitte einer Linie.
  - ![](/images/Assembly_ConstraintDiameter.svg) [Durchmesser](/Assembly3_ConstraintDiameter/de "Assembly3 ConstraintDiameter/de"): Zum Festlegen des Durchmessers eines Kreises oder Bogens.
  - ![](/images/Assembly_ConstraintEqualRadius.svg) [Gleicher Radius](/Assembly3_ConstraintEqualRadius/de "Assembly3 ConstraintEqualRadius/de"): Zum Festlegen, dass die Radien zweier Kreise oder Bögen gleich groß sind.
  - ![](/images/Assembly_ConstraintPointsProjectDistance.svg) [Projizierter Punktabstand](/Assembly3_ConstraintPointsProjectDistance/de "Assembly3 ConstraintPointsProjectDistance/de"): Zum Festlegen des Abstands zweier Punkte, die auf eine Linie projiziert werden.
  - ![](/images/Assembly_ConstraintEqualPointLineDistance.svg) [Gleicher Punkt-Linien-Abstand](/Assembly3_ConstraintEqualPointLineDistance/de "Assembly3 ConstraintEqualPointLineDistance/de"): Zum Festlegen, dass der Abstand eines Punktes zu einer Linie gleich dem Abstand eines weiteren Punktes zu einer anderen Linie ist.
  - ![](/images/Assembly_ConstraintColinear.svg) [Kollinear](/Assembly3_ConstraintColinear/de "Assembly3 ConstraintColinear/de"): Zum Festlegen, dass zwei Linien kollinear verlaufen (fluchten).

: Die **Werkzeugleisten der Bedingungen** sind die Hauptschnittstelle für den Zusammenzubau von Einzelteilen.
: Sie sind standardmäßig ausgegraut, werden aber aktiviert, sobald mindestens eine Fläche, eine Linie oder ein Punkt eines Bauteiles ausgewählt wird.
: Normalerweise werden erst die zu verbindenden Elemente ausgewählt und danach die Art der Bedingung.
: Die unterschiedlich gefärbten Rahmen kennzeichnen unterschiedliche Eigenschaften der Bedingungen:

    :   ob 2D / 3D oder ob mehr als 2 Elemente zusammengefügt werden können.

: Eine ausführliche Beschreibung ist im GitHub-Wiki zu finden.

#### Navigationswerkzeugleiste

: ![](/images/Assembly_GotoRelation.svg) ![](/images/LinkSelect.svg) ![](/images/LinkSelectFinal.svg)

: Diese Funktionen sind nützlich, wenn eine Baugruppe mit einer Hierarchie von verknüpften externen Dateien bearbeitet wird.

- ![](/images/Assembly_GotoRelation.svg) [Zur Beziehung gehen](/Assembly3_GoToRelation/de "Assembly3 GoToRelation/de"): Zeigt die Beziehungsgruppe an (standardmäßig ausgeblendet) und wählt ein Beziehungsobjekt aus.
  - ![](/images/Std_LinkSelectLinked.svg) [Verknüpftes Objekt auswählen](/Std_LinkSelectLinked/de "Std LinkSelectLinked/de"): Wählt das verknüpfte Objekt aus und wechselt zu dessen Dokument. [eingeführt in 0.19](/Release_notes_0.19/de "Release notes 0.19/de")
  - ![](/images/Std_LinkSelectLinkedFinal.svg) [Letztes verknüpftes Objekt auswählen](/Std_LinkSelectLinkedFinal/de "Std LinkSelectLinkedFinal/de"): Wählt das Objekt am Ende der Verknüpfungskette aus und wechselt zu dessen Dokument. [eingeführt in 0.19](/Release_notes_0.19/de "Release notes 0.19/de")

#### Messwerkzeugleiste

: ![](/images/Assembly_MeasurePointDistance.svg) ![](/images/Assembly_MeasurePointLineDistance.svg) ![](/images/Assembly_MeasurePointPlaneDistance.svg) ![](/images/Assembly_MeasureAngle.svg)

: Die **Messwerkzeugleiste** fügt Funktionen zum Messen des Abstands oder des Winkels zwischen zwei Objekten hinzu

- ![](/images/Assembly_MeasurePointDistance.svg) [Punkte messen](/Assembly3_MeasurePoints/de "Assembly3 MeasurePoints/de"): Zum Messen des Abstands zweier Punkte in 2D oder 3D.
  - ![](/images/Assembly_MeasurePointLineDistance.svg) [Punkt zu Linie messen](/Assembly3_MeasurePointLine/de "Assembly3 MeasurePointLine/de"): Zum Messen des Abstands eines Punktes zu einer linearen Kante in 2D oder 3D.
  - ![](/images/Assembly_MeasurePointPlaneDistance.svg) [Punkt zu Ebene messen](/Assembly3_MeasurePointPlane/de "Assembly3 MeasurePointPlane/de"): Zum Messen des Abstands eines Punktes zu einer Ebene.
  - ![](/images/Assembly_MeasureAngle.svg) [Winkel messen](/Assembly3_MeasureAngle/de "Assembly3 MeasureAngle/de"): Zum Messen des Winkels zwischen ebenen Flächen oder linearen Kanten zweier Bauteile zu messen.

: Es gibt keine Funktion, um einen Radius oder Durchmesser zu messen.
: Die Messwerkzeuge überdauern Bauteiländerungen, z.B. den Abstand zwischen Kanten eines Würfels, wenn die die Größe des Würfels geändert wird.
: Wie die Bedingungen werden diese Berechnungen in Echtzeit ausgeführt und bei jeder Änderung aktualisiert. Hinter den Kulissen ist die Funktion den [Bedingungen](#Bedingungen) sehr ähnlich. Der Abstand oder Winkel zwischen [Elementen](#Elemente) wird auf die gleiche Weise berechnet wie bei [Bedingungen](#Bedingungen). Die Anzeige im Baum funktioniert auf die gleiche Weise.

Wie gewohnt, kann die Werkzeugleiste geändert und einzelne Werkzeuge hinzugefügt oder entfernt werden. Im Assembly3-Menü sind weitere Funktionen vorhanden, die sich nicht in den Werkzeugleisten befinden.

[Anfang](#top)

### Bedingungen

Der Konstrukteur benutzt Bedingungen (auch Randbedingung, Einschränkung, Beschränkung, Zwang, Zwangsbedingung, Festlegung genannt) um zwei Teile zueinander auszurichten. Die Kunst besteht darin, die Bedingungen zu wählen, die am besten zu den jeweiligen Anforderungen passen. Jeder bestimmte Freiheitsgrad (**D**egree **O**f **F**reedom) sollte theoretisch nur einmal zwischen zwei Objekten festgelegt sein, aber in der Praxis vieler CAD-Werkzeuge erzeugen die ausgewählten Bedingungen überbestimmte Kombinationen, die oft durch komplexe Algorithmen ausgeglichen werden können, manchmal aber auch nicht. Assembly3 benutzt solche Algorithmen, um überzählige Bedingungen zu entdecken und auszugleichen, aber sie sind bisher noch nicht besonders ausgereift. Am besten vermeidet man Schwierigkeiten im Umgang mit Assembly3-Bedingungen, indem man darauf achtet, wieviele Freiheitsgrade schon bestimmt sind und welche durch weitere Bedingungen noch festzulegen sind. Kein Teil sollte durch Bedingungen so verbunden werden, dass mehr als 6 Freiheitsgrade festlegt werden.

Hinweis: Wenn der Gleichungslöser auf eine Kombination trifft, die nicht gelöst werden kann, gibt er eine Fehlermeldung aus. Es ist für den Löser sehr schwierig, die Ursache des Problems herauszufinden, sodass man normalerweise aus dem angegebenen Fehler nicht klar erkennen kann, _wo_ sich das Problem befindet. Bei größeren Baugruppen kann dies zu aufwändigen Fehlersuchen führen. Leider gibt es keinen einfachen Weg, diese zu vermeiden. Allerdings hilft es, im Blick zu behalten, wie das System funktioniert (siehe z.B. [Elemente](#Elemente) weiter unten), eindeutige Namen für alle beteiligten Komponenten zu verwenden und nur dann weitere Bedingungen hinzuzufügen, wenn der Gleichungslöser die aktuelle Baugruppe erfolgreich berechnen kann. Sehr hilfreich, um ein Problem zu finden, ist die Funktion "ContexMenu/Deactivate" der jeweiligen Bedingung.

Assembly3-Bedingungen definieren, wie die Möglichkeiten der Positionierung oder Orientierung zwischen zwei [Elementen](#Elemente) reduziert werden. Einige Bedingungen arbeiten sogar mit mehr als zwei Elementen. Ein Element kann eine Fläche, eine Linie oder Kante oder ein Punkt eines Teils sein. Im Allgemeinen werden Bedingungen definiert, indem man erst die gewünschten Elemente und dann die Bedingung aus einer der [Werkzeugleisten](#Werkzeugleisten) für Bedingungen auswählt.

- Legt 6 Freiheitsgrade fest, 0 bleiben unbestimmt:
  - **Festsetzen (Schloss)**: Die Bedingung Festsetzen legt alle Freiheitsgrade einer Fläche fest. Sie sollte in jedem Zusammenbau zum Verankern eines Basisteils genutzt werden. Es ist sinnvoll auch gleich die Funktion "Bewegung verhindern" (in der Werkzeugleiste) zu aktivieren, um damit ein unbeabsichtigtes Verschieben zu verhindern. In der Regel ist es egal welche Fläche, Linie oder welcher Punkt benutzt wird, um ein Teil zu verankern. Man beachte, dass das Festsetzen nur auf den aktuellen Zusammenbau wirkt, d.h. im Falle einer Unterbaugruppe braucht der übergeordnete Zusammenbau noch ein eigenes festgesetztes Teil.
  - **Befestigung**: Legt die Koordinatensysteme der ausgewählten Elemente (zweier oder mehrerer Bauteile) deckungsgleich aufeinander. Dies ist die für die Berechnung günstigste Funktion und sollte, wo immer möglich, eingesetzt werden. Man beachte, dass man die Eigenschaften der Elemente nutzen kann, um Abstände und Winkel einzustellen, wenn die [Elemente](#Elements) nicht optimal zueinander ausgerichtet sind.
- Fixiert 5 Freiheitsgrade fest, 1 bleibt unbestimmt:
  - **Deckungsgleiche Ebenen**: Legt Tx,Ty,Tz, Rx,Ry fest, nur Rz bleibt unbestimmt. Es bleibt die Drehung um die Normale durch den "Mittelpunkt der Fläche" übrig.
- Legt 4 Freiheitsgrade fest, 2 bleiben unbestimmt:
  - **Axial ausrichten**: Legt Tx,Ty, Rx,Ry fest, nur Tz, Rz bleiben unbestimmt. Es bleibt die Drehung um die Achse der Form unbestimmt sowie die Verschiebung entlang dieser Achse. Zwei Bedingungen "Punkt auf Linie" führen zum gleichen Ergebnis (wenn die Punkte unterschiedlich sind),die Bedingung "Kollinear" ebenfalls.
  - **Punkt auf Linie**: Dies verhindert die Verschiebung entlang der Normalen auf der Referenzlinie. Nur die Verschiebung entlang der Linie und die Drehung um sie herum sind möglich.
- Legt 3 Freiheitsgrade fest, 3 bleiben unbestimmt:
  - **Richtungen angleichen**: Legt Rx,Rz,Rz fest, alle Ts bleiben unbestimmt.
  - **Punkt auf Punkt**: Legt Tx,Ty,Tz fest, alle Rs bleiben unbestimmt.
  - **Ebenen ausrichten**: Legt Tz, Rx,Ry fest (Verschiebung auf der Ebene). Dies verhindert die Verschiebung entlang der Normalen der Referenzebene sowie die Drehung um die Achsen dieser Ebene.
- Legt 2 Freiheitsgrade fest, 4 bleiben unbestimmt:
  - **Mehrfach Parallel**: Legt Rx,Ry fest, alle Ts und Rz bleiben unbestimmt. Dies verhindert die Drehung um die Achsen der Referenzebene.
- Legt 1 Freiheitsgrad fest, 5 bleiben unbestimmt:

  - **Punkt auf Ebene**: Legt Tz fest. Dies verhindert die Verschiebung entlang der Normalen der Referenzebene.
  - **Punkt zu Punkt Abstand**: Legt den Abstand zwischen den Ursprüngen der Elemente fest.

    : Dies gibt einem mehr Freiheiten als _Punkt auf Ebene_.

Weitere

- **Punkt auf Kreis**: Legt Tz und teilweise Tx,Ty fest. Begrenzt die Verschiebung eines Punktes (oder mehrerer Punkte) auf einen Kreis oder einen Scheibenbereich (? disk area). Der Kreis muss als zweites ausgewählt werden. Dies lässt alle Drehungen unbestimmt und ermöglicht begrenzte Verschiebung innerhalb der kreisförmigen Referenzfläche.

_: Hinweis: In der folgenden Liste werden Tx,Ty,Tz und Rx,Ry,Rz benutzt, um Translations- (Verschiebe-) und Rotations- (Dreh-) Bewegungen bezogen auf die Koordinatenachsen des betreffenden Elements zu beschreiben. Dies ist nicht immer exakt oder vollständig beschrieben, wie z.B. wenn es eine Linie betrifft, ist es nicht definiert, ob sie in X-Richtung, Y-Richtung oder einem beliebigen Winkel dazwischen verläuft. Das System sorgt eher für Kürze und einfache Vergleichbarkeit, als für eine korrekte aber komplexere Definition. So ist Z normalerweise die Richtung der Flächennormalen der betroffenen Flächen._

[Zum Anfang](#top)

### Elemente

Elemente wird in der Arbeitsumgebung Assembly3 als besonderer Begriff benutzt, und Elemente zu verstehen ist wichtig für das Verständnis, wie Assembly3 benutzt werden sollte.

Es ist hilfreich ein Element als einen generellen Begriff für 'auswählbarer Bestandteil' eines Bauteils zu sehen wie z.B. eine Fläche, eine Kante, ein Kreis, eine Ecke oder ein Punkt. Dies sind die Elemente, die ausgewählt werden, um Teile zueinander in Beziehung zu setzen. Im Baum hat ein 'Assembly'-Ordner drei Unterordner. Neben 'Parts' und 'Constraints' gibt es einen Ordner namens 'Elements', der leer bleibt, solange keine Bedingungen hinzugefügt werden. Wenn eine Bedingungen hinzugefügt wird, erhält sie selbst zwei (oder mehr) Blätter, dies sind die ausgewählten Elemente. Auch werden diese Elemente dem Ordner 'Elements' hinzugefügt, der eine Liste aller im Zusammenbau benutzten Elemente darstellt. Es ist eine gute Idee, ihre Namen zu ändern (mit der F2-Taste), besonders in größeren Baugruppen.

Sehen wir uns ein Beispiel an

: Es wird eine neue Datei erstellt und mit der Part-Arbeitsumgebung ein Würfel und ein Zylinder hinzugefügt. Es soll der Zylinder auf den Würfel gestellt werden. Zuerst wird das Basisteil fixiert, in diesem Fall der Würfel. Dazu wird die Unterseite des Würfels und danach die Fixiereinschränkung (das erste Symbol in der [Werkzeugleiste](#Toolbars) der Haupteinschränkungen) ausgewählt. Es werden die Oberseite des Würfels und die Oberseite des Zylinders ausgewählt. Danach wird die 'Plane Coincident'-Einschränkung ausgewählt. Nun hat sich der Zylinder in den Würfel hinein bewegt und im Baum wurde ein neues Blatt mit zwei Kindknoten unter 'Constraints' hinzugefügt. Zusätzlich wurden die selben zwei Kindknoten unter 'Elements' hinzugefügt. Falls der Zylinder im Inneren des Würfels liegt, anstatt auf seiner Oberseite wird dies als nächstes korrigiert: Den Kindknoten unter 'Constraints' auswählen, zu dem die Zylinderfläche gehört, und mit einem Rechtsklick im Kontextmenü 'Flip Part' auswählen. Nun wurde der Zylinder auf die Würfeloberseite gestapelt.

Der wesentliche Punkt für das Verständnis ist, dass die Randbedingung mit Verknüpfungen zu Elementen in der Liste des "Elements"-Baumabschnitts arbeitet. Dies erlaubt, die Bindungsstruktur intakt zu halten, während die Teile geändert werden. Dies ist ohne ein Beispiel sehr schwer zu erkennen.

Zurück zum obigen Beispiel

: Achtung: Es sollte darauf geachtet werden, dass die Fixierbedingung zum Würfel hinzugefügt wurde, andernfalls wird es merkwürdig aussehen.
: Im CAD-Fenster wird eine weitere Fläche des Würfels ausgewählt. Ab jetzt wird nur noch in der Baumansicht gearbeitet. In der Baumansicht wird die Maus verwendet; der Würfel sollte ausgewählt sein. Der Würfel wird per 'Drag&Drop' auf den 'Elements'-Ordner gezogen und abgelegt. Das Ablegen sollte auf dem Namen des 'Elements' erfolgen, nicht anderswo im Ordner - warum, sehen wir später. Es sollte erkennbar sein, dass ein weiteres Element zur 'Elements'-Liste hinzugefügt wurde. Nun wird im 'Constraints'-Ordner der Kindknoten der Würfelfläche in der Bedingung 'Plane Coincident' ausgewählt und aus der Liste entfernt. Die Bedingung ist nun mit einem Ausrufezeichen gekennzeichnet, da ihr ein Element fehlt. Hierbei ist zu beachten, dass ein Element, das aus der Bedingung entfernt wurde, _nicht_ auch aus der (Element-)Liste gelöscht wurde. Der Grund dafür ist, dass in der Einschränkung nur ein Verweis zum Element in der Liste abgelegt wird. Nun kann das neu zur 'Elements'-Liste hinzugefügte Element per 'drag&drop' auf die Bedingung 'Plane Coincident' gezogen und abgelegt werden. Damit bewegt sich der Zylinder zu der anderen Fläche des Würfels, die vorher ausgewählt wurde. Wenn der Zylinder im Inneren des Würfels liegt, muss nochmals im Kontextmenü 'flip part' ausgewählt werden.

Das Beispiel zeigt, dass man die zur Randbedingung gehörenden Elemente austauschen kann, ohne die Bedingung zu Löschen. Auf dieselbe Weise kann der Zylinder auch zu einem ganz anderen Teil bewegt werden. Nachdem man etwas mit diesem Beispiel herumgespielt hat, wird man noch zusätzliche Möglichkeiten entdecken, wie z.B.:

- Wenn ein Element in der Liste umbenannt wird, wird es auch in allen Bedingungen umbenannt
- Ein Element der Liste kann für mehrere Randbedingungen verwendet werden.
- Das Eigenschaftenfenster eines Elements kann verwendet werden, um **Versatzangaben** (Offsets) hinzuzufügen. Z.B. kann hiermit der Zylinder auf unterschiedliche Positionen auf der gewählten Würfelfläche platziert werden.
- Man kann die Schaltfläche 'Show Element Coordinate System' der Hauptwerkzeugleiste benutzen, um zu sehen, wie sich 'Flip Part' und 'Flip Element' aus dem Kontextmenü auswirken. Nicht vergessen, die Änderungen im Eigenschaftenfenster zu beobachten.
- Eine Randbedingung kann auch in einer ganz anderen Reihenfolge hinzugefügt werden: Zuerst werden Elemente zur 'Elements'-Liste hinzugefügt (Eine Benennung ist hier nützlich, z.B. "Würfel-Oberseite" oder "Würfel-Unterseite"), dann wird eine Bedingung hinzugefügt, ohne etwas auszuwählen - Das ergibt eine leere Randbedingung. Dann werden Elemente aus der Liste per 'Drag&Drop' hierher gezogen und abgelegt. Das Ergebnis ist das gleiche, wie in dem ersten Beispiel. Nach dieser Übung sollte klar sein, wie Randbedingungen und Elemente zusammenarbeiten.
- Eine bestehende Bedingung zwischen bestehenden Elementen kann einfach ausgetauscht werden, indem man eine andere Auswahl in der 'ConstraintType'-Eigenschaft im Eigenschaftenfenster trifft.

[Zum Anfang](#top)

## Kompatibilität

Assembly3 wurde vom [Assembly2](/Assembly2_Workbench "Assembly2 Workbench") inspiriert, ist aber nicht mit diesem kompatibel. Wenn du ältere Modelle in Assembly2 erstellt hast, solltest du bei FreeCAD 0.16 bleiben und Assembly2 dort verwenden.

Neue Modelle, die mit Assembly3 entwickelt wurden, sollten nur mit diesem Arbeitsbereich geöffnet und bearbeitet werden.

Obwohl sie möglicherweise ähnliche Werkzeuge haben, ist Assembly3 nicht kompatibel mit [A2plus](/A2plus_Workbench/de "A2plus Workbench/de") noch mit [Assembly4](/Assembly4_Workbench/de "Assembly4 Workbench/de"). Modelle, die mit diesen Arbeitsbereichen erstellt wurden, sollten nur mit dem jeweiligen Arbeitsbereich geöffnet werden.

[Zum Anfang](#top)

## Installation

Der Arbeitsbereich Assembly3 ist (seit März 2022) über den [Addon-Manager](/Std_AddonMgr/de "Std AddonMgr/de") verfügbar. Jede Abhängigkeit von Assembly3 zu (Modulen von) Drittanbietern sollte automatisch durch den Addon_Manager verwaltet werden.

#### Alternative Installationen

Es gibt 2 alternative Wege Assembly3 zu installieren:

- Eine spezielle Abspaltung von FreeCAD von realthunder; siehe [hier](https://github.com/realthunder/FreeCAD/releases). Dieser Fork basiert auf einem bestimmten Commit des Master-Zweiges von FreeCAD, hat aber auch zusätzliche Funktionen, die derzeit im Master-Zweig nicht vorhanden sind. Da dieser Fork auf einem bestimmten Entwicklungs-Snapshot basiert, verfügt er nicht über die neuesten Funktionen, die täglich in den Master-Zweig eingebunden werden.
- Das Entwicklungs-[App-Image](/AppImage/de "AppImage/de"); dieses basiert auf dem aktuellen Master-Zweig und beinhaltet die Abhängigkeiten, die für die Arbeit mit Assembly3 benötigt werden, wie z.B. den SolveSpace Solver.

Da das App-Image nur unter Linux funktioniert, ist für Windows-Benutzer (die gerne eine alternative Assembly3-Installation hätten) die erste Option die einzige Möglichkeit, Assembly3 zu testen (realthunder's fork) .

[Zum Anfang](#top)

## GewusstWie

### Loslegen

Es gibt viele Wege einen Zusammenbau mit Assembly3 zu erstellen. Hier ist der einfachste.

: ![](/images/Assembly3_Example-GettingStarted.jpg)
: _Endergebnis des 'Wie man startet'-Beispiels. In dem Bild ist die Arbeitsumgebung Assembly3 ausgewählt, sodass ihre unterschiedlichen Werkzeugleisten sichtbar sind. Beachte, dass die vertikale 'TabBar'-Leiste links neben der Baumansicht eine zusätzliche Arbeitsumgebung ist und nicht Bestandteil von Standard-FreeCAD (aber mit dem Addon-Manager installiert werden kann)._

- Schaltfläche ![](/images/Std_New.svg) [Neu](/Std_New/de "Std New/de") drücken, um eine neue FreeCAD-Datei zu erstellen
- Zur Arbeitsumgebung ![](/images/Assembly3_workbench_icon.svg) Assembly3 wechseln
- Schaltfläche ![](/images/Assembly_New_Assembly.svg) [Baugruppe anlegen](/Assembly3_CreateAssembly/de "Assembly3 CreateAssembly/de") drücken
- Zur ![](/images/Workbench_Part.svg) [Part Arbeitsumgebung](/Part_Workbench/de "Part Workbench/de") wechseln und einen ![](/images/Part_Cylinder.svg) [Zylinder](/Part_Cylinder/de "Part Cylinder/de") und einen ![](/images/Part_Box.svg) [Würfel](/Part_Box/de "Part Box/de") hinzufügen
- Die Datei unter einem selbstgewählten Dateinamen ![](/images/Std_Save.svg) [speichern](/Std_Save/de "Std Save/de"). Anschließend die Datei ![](/images/Std_CloseActiveWindow.svg) [schließen](/Std_CloseActiveWindow/de "Std CloseActiveWindow/de") und erneut ![](/images/Std_Open.svg) [öffnen](/Std_Open/de "Std Open/de")

Die Baumansicht sollte so aussehen (0.20.pre and Link Branch):

![](/images/Assembly3_Example-Tree-01.png) ![](/images/Assembly3_Example-Tree-02.png)

- Nun mit der Maus per _Drag&Drop_ **Zylinder** und **Würfel** auf den **Parts**-Ordner ziehen und ablegen. Beide werden in den Ordner verschoben.

  : Das ist der schnellste Weg und geeignet für einfache Fälle wie diesen. Ein besserer Weg geht über die Nutzung von Link-Objekten:
  : **Würfel** sowie **Zylinder** auswählen und dann den Befehl ![](/images/Std_LinkMake.svg) [Link erstellen](/Std_LinkMake/de "Std LinkMake/de") entweder aus dem **Kontextmenü** (-> LinkActions -> MakeLink) oder aus der Symbolleiste **Struktur** auswählen
  : Dies fügt zwei Link-Objekte hinzu. Diese werden dann auf den **Parts**-Ordner gezogen und abgelegt

- Anklicken der beiden Oberseiten von Zylinder und Würfel (Strg gedrückt halten (Cmd am Mac))
- Zur Arbeitsumgebung ![](/images/Assembly3_workbench_icon.svg) Assembly3 wechseln.
- Schaltfläche ![](/images/Assembly_ConstraintCoincidence.svg) [Deckungsgleiche Ebenen](/Assembly3_ConstraintCoincidence/de "Assembly3 ConstraintCoincidence/de") aus der [Hauptwerkzeugleiste für Beschränkungen](#Main_Constraints_Toolbar/de) auswählen.

Jetzt sollten beide Teile miteinander verbunden sein und der Baum sollte so aussehen (0.20.pre and Link Branch):

![](/images/Assembly3_Example-Tree-03.png) ![](/images/Assembly3_Example-Tree-04.png)

- Rechtsklick auf "\_Element" (eins der beiden) und "Flip Part" auswählen.

Nun sollte sich der Zylinder oben auf dem Würfel befinden. Wenn das Gebilde auf dem Kopf steht, einen Schritt zurückgehen und "Flip Part" auf dem anderen Element auswählen.

: Bisher wurde ein wichtiger Schritt ausgelassen, den man besonders für größere Baugruppen nicht vergessen sollte: Das Fixieren eines Basisteils.
: Das bedeutet ein Teil zu definieren, das nicht durch Einschränkungen bewegt werden sollte. In diesem Fall wird dafür der Würfel benutzt:

    * Auswahl der Unterseite des **Würfels**. Nur die Unterseite, nicht der ganze **Würfel**
    * Schaltfläche ![](/images/Assembly_ConstraintLock.svg) [Festsetzen](/Assembly3_ConstraintLock/de "Assembly3 ConstraintLock/de") aus der [Hauptwerkzeugleiste für Beschränkungen](#Main_Constraints_Toolbar/de) auswählen.

Fertig.

Der fertige Baugruppenbaum sollte so aussehen (0.20.pre and Link Branch):

![](/images/Assembly3_Example-Tree-05.png) ![](/images/Assembly3_Example-Tree-06.png):

Wer möchte, kann die Bedingung **Festsetzen** im Baum nach oben verschieben.
Dafür wird die Schaltfläche ![](/images/Assembly_TreeItemUp.svg) [Objekt nach oben bewegen](/Assembly3_MoveItemUp/de "Assembly3 MoveItemUp/de") in der [Hauptwerkzeugleiste](#Hauptwerkzeugleiste) verwendet.

**Hinweis:** Alle neuen externen Dateien müssen mindestens einmal **gespeichert**, **geschlossen** und erneut **geöffnet** werden, damit Assembly3 sie finden kann.

: Andernfalls kann FreeCAD dem Arbeitsbereich Assembly3 kein Datei-Handle übergeben und dieser kann das neue Teil nicht finden.
: Auch wenn sich alle Teile in derselben Datei befinden, sollte man diese Datei **speichern**, **schließen** und erneut **öffnen**.

[Anfang](#top)

### Einen Versatz hinzufügen

Assembly3 sieht es nicht vor, mit den Bedingungen auch einen Versatz festzulegen, wie es der Arbeitsbereich [A2plus](/A2plus_Workbench/de "A2plus Workbench/de") oder andere CAD-Werkzeuge vorsehen. Stattdessen verwendet er ein allgemeineres und flexibleres System, um Abstände, Versätze und sogar Winkel festzulegen.

- Einen Versatz in den Eigenschaften eines [Elements](#Elemente) einer [Bedingung](#Bedingungen) festlegen.

  : Man kann wählen, welches der beiden man verwenden möchte.

Beispiel:

- 2 Würfel zu einer Baugruppe hinzufügen und ihre Seitenflächen auswählen.
- Bedingung "Deckungsgleiche Ebenen" auswählen. Die Würfel werden ineinanderliegend zusammengefügt.
- Ein Element und anschließend _KontextMenü/Flip part_ auswählen. Die Würfel werden jetzt Seite an Seite zusammengefügt.
- Eine Element auswählen und anschließend seine Eigenschaft Offset/Position/z und auf 5mm setzen. Die Würfel sind nun 5mm voneinander entfernt.

: \* Dies testet man auch mit den anderen Koordinaten der Position oder den Eigenschaften Winkel oder Achse. Man sollte auch überprüfen, ob man das gleiche Ergebnis erhält, wenn das andere Element verwendet wird.

Diese Herangehensweise gilt auch für alle anderen Bedingungen.

[Anfang](#top)

### Fehler des Lösers beheben

Diese treten häufig auf, wenn Einzelteile überbestimmt sind, d.h. wenn mehr als 6 Freiheitsgrade festgelegt sind.

Der einfachste Weg das Problem zu finden, ist das Anklicken der entsprechenden Bedingung im Konstruktionsbaum und die Auswahl von _ContextMenu/Disable_ mit anschließender Neuberechnung. Es hilft zu wissen, welche Bedingungen zuletzt hinzugefügt wurden, bevor die Berechnung des Gleichungslösers fehlgeschlagen ist, um diese einfach zurückzunehmen.

Achtung: Da Assembly3 hinter den Kulissen versucht überbestimmte Teile auszugleichen, kann es vorkommen, dass eine neue Bedingung scheinbar eine Fehlfunktion auslöst, die tatsächliche Ursache aber an einer anderen Stelle zu finden ist. Bevor man nun alles löscht und von vorne beginnt, sollte man daran denken, dass man Elemente wiederverwenden kann. Wenn sie benannt wurden, können die erforderlichen Elemente leicht ermittelt und die Bedingungen erneut aufgebaut werden, ohne die 3D-Ansicht zu verwenden. Siehe auch obigen Abschnitt [Elemente](#Elemente).

[Anfang](#top)

### Ein Bauteil ersetzen oder einen Dateinamen umbenennen

Wenn ein Bauteil entfernt wird oder wenn sich ein Dateiname ändert, "zerbricht" die Baugruppe und kann nicht mehr berechnet werden; der Löser gibt die Meldung "Inconsistent constraints" (Widersprüchliche Bedingungen) aus. Der Löser kennzeichnet ungültige Elemente und Bedingungen mit einem Fragezeichen im Baum.

Ein Weg, dieses zu beheben ist, einfach alle ungültigen Bedingungen und Elemente zu löschen, das neue Bauteil zu importieren und alles erneut auzubauen. Aber es gibt einen besseren Weg:

- Eine Datei umbenennen

  1. Einen Dateimanager benutzen, um die Datei zu kopieren, umbenannt werden soll. Anschließend gibt man der Kopie den neuen Namen.
  2. Öffnen der Kopie in FreeCAD. Der Zusammenbau und die alte Datei sollten auch geöffnet sein.
  3. Das alte Objekt im Baum auswählen und per Klick die Eigenschaft 'Linked object' ändern (sie enthält den alten Dateinamen).
  4. Ein Dialogfenster mit einer Auflistung aller geöffneten Teile öffnet sich. Es zeigt die Dateinamen und Objekte aller Teile an. Das alte Teil und das zugehörige Objekt sind ausgewählt. Das umbenannte Teil wird im Baum abgelegt und das gleiche Objekt des neuen Teiles ausgewählt. Danach die Auswahl bestätigen.
  5. Die alte Datei aus dem Baum entfernen. Die Datei kann jetzt auch gelöscht werden.
  6. Die Einschränkungen und Elemente des alten Teiles sind ungültig geworden. Jetzt wird die Einschränkung oder die 'Elements'-Liste im Baum geöffnet und anschließend nacheinander
     - Jede Element-Fläche am neuen Teil ausgewählt. Ein Objekt im Baum wird hervorgehoben.
     - Das Objekt per 'drag&drop' auf das alte Element ziehen und ablegen (entweder in der 'Elements'-Liste oder in einer der Einschränkungen, wo es benutzt wurde). Das Element sollte jetzt gültig werden.
     - Diesen Ablauf für die übrigen Elemente wiederholen. Oft reicht ein einzelnes Element dafür aus, dass Assembly3 die übrigen Elemente des Teiles automatisch erkennen kann.
     - Falls ein Element ausversehen einer falschen Fläche zugeordnet wurde, wird die Zuordnung einfach mit der korrekten Fläche wiederholt.
  7. Ändern des Objektnamens in FreeCAD, falls gewünscht

- Ein Bauteil durch ein anderes ersetzen

  : _Eins das dem originalen Bauteil ähnlich genug ist, dass die originalen Bedingungen noch sinnvoll sind._

  1. Das alte Bauteil aus dem Baum entfernen. Die Datei kann jetzt auch gelöscht werden.
  2. Die Bedingungen und Elemente des alten Teiles sind ungültig geworden. Jetzt wird die Bedingung oder die 'Elements'-Liste im Baum geöffnet.
     - Eine Element-Fläche am neuen Teil auswählen. Ein Objekt im Baum wird hervorgehoben.
     - Das Objekt per 'drag&drop' auf das alte Element ziehen und ablegen (entweder in der 'Elements'-Liste oder in einer der Bedingungen, wo es benutzt wurde). Das Element sollte jetzt gültig werden.
     - Diesen Ablauf für die übrigen Elemente wiederholen.
     - Falls ein Element ausversehen einer falschen Fläche zugeordnet wurde, wird die Zuordnung einfach mit der korrekten Fläche wiederholt.
  3. Ändern des Objektnamens in FreeCAD, falls gewünscht

_Hinweise_

- Es ist nicht so kompliziert, wie es hier auf den ersten Blick aussieht. Nach 2-3 Durchläufen sollten die Abläufe in Fleisch und Blut übergehen und die Ausführung leicht von der Hand gehen.
- Es ist nicht nur viel schneller als das Löschen und erneute Anlegen von Einschränkungen, sondern auch sicherer, da ein Element in einem übergeordneten Zusammenbau eingesetzt sein könnte. Das Original zu löschen, würde den Verweis zerstören, es neu zuzuordnen würde ihn erhalten.
- Ferner beschleunigt und vereinfacht es diesen Ablauf, wenn Einschränkungen und Elemente benannt werden. Es gäbe kein Raten, wo die Flächen hingezogen und abgelegt werden sollten, da es aus den Namen hervorgeht (siehe auch [Tipps & Tricks](#Tipps_.26_Tricks)).

[Zum Anfang](#top)

### Tipps & Tricks

- Hierarchisch aufgebaute Zusammenbauten helfen dabei, Probleme des Gleichnungslösers zu vermeiden und das Modell schlank zu halten. Man kann eine Unterbaugruppe mit einem Klick einfrieren und so ohne Aufwand CPU-Resourcen einsparen (Im Kontextmenü des Baumes). Wenn ein Zusammenbau geladen wird, muss Assembly3 die externen Dateien der eingefrorenen Unterbaugruppen nicht öffnen, wodurch der Baum kompakt gehalten wird.
- Es ist sehr hilfreich, sich anzugewöhnen, Einschränkungen und Elemente zu benennen. Im Baum lässt es sich schnell durch Benutzung der F2-Taste erledigen. Sehr nützlich ist auch das Werkzeug zum Sortieren des Baumes, das man in der Hauptwerkzeugleiste findet. Ein Zusammenbau mit vollständig benannten Einschränkungen und Elementen ist für andere Leute sehr einfach zu verstehen, oder auch für einen selbst, wenn man sich ältere Modelle ansieht.

  : Beispiele für Namen von Einschränkungen für einen Tisch könnten lauten: "Ausrichtung_Beine_vorne", "Ausrichtung_RahmenUnterseite-BeinOberseite" und Elementnamen könnten sein: "Bein1_Oberseite", "Tischplatte_Vorderseite" oder "Tischplatte_linke_Seite".

- Bitte beachten, dass, sobald externe Dateien durch einen Zusamenbau geöffnet werden, es nicht mehr möglich ist, diese auf einfache Weise zu schließen, ohne auch den Zusammenbau zu schließen. Da der Zusammenbau die Dateien im Hintergrund offen hält, kann der Reiter verschwinden, aber die Dateien bleiben im Baum sichtbar. Wenn man Zusammenbauten über mehrere Ebenen hat, kann es fast unmöglich sein einzelne Dateien zu schließen. Dieses Verhalten kann sich in Zukunft ändern, aber bis dahin bleibt die Möglichkeit, Die Befehle _File/Save All_ und _File/Close All_ zu nutzen, um den Baum aufzuräumen, bevor an einer anderen Unterbaugruppe gearbeitet wird.

  : _Beispiel: Man hat eine große CNC-Maschine mit einem Hauptzusammenbau und Unterbaugruppen für alle Module. Sobald man den Hauptzusammenbau geladen hat, wird er hunderte Dateien bis hin zur kleinsten Schraube öffnen. Bevor man nun die Baugruppe des Elektronikfachs der Maschine bearbeitet, ist es eine gute Idee, alle Dateien zu speichern und zu schließen, um einen leeren Baum zu erhalten. Dann wird nur die Unterbaugruppe des Elektronikfachs geöffnet. Sie öffnet alle benötigten Dateien, aber auch nur diese._

- Externe Dateien zu benutzen, macht es einfacher, Teile wiederzuverwenden oder Bauteilversonierung mit Systemen wie git oder subversion zu ermöglichen. Der Arbeitsablauf in FreeCAD mit Assembly3 fühlt sich fast genauso an, wie der mit Dateien, in denen alle zusammengehörigen Teile in jeweils einer Datei enthalten sind. Letzteres bietet sich an, wenn man häufig Baugruppen mit anderen Beteiligten austauscht.
- Mehrfach verknüpfte Dateien. Wenn man eine Dateiverknüpfung zu einem Zusammenbau hinzufügt, wird eine Eigenschaft "Element Count" angelegt mit Standardwert 0. Wenn man diesen auf 3 setzt, erhält man 3 Instanzen dieses Teils. Sie werden in einem Unterordner hinzugefügt und können wie vollständig unabhängige Teile verwendet werden. Diese Einstellung kann genutzt werden, um den Speicherplatzverbrauch der Datei klein zu halten, da das Teil nur einmal gespeichert wird. Die Instanzen enthalten nur die Unterschiede.
- Einsetzen mehrfacher Teile, wie z.B. Schrauben, mit einem Klick. Siehe [Assembly3 Wiki](https://github.com/realthunder/FreeCAD_assembly3/wiki/Constraints-and-Solvers) auf der Github-Seite. Dies ist nicht nur eine erstaunliche Funktion (vielleicht ein bisschen magisch), sondern auch sehr sehr nützlich.

- Die Benutzung des Arbeitsbereichs [TabBar](https://github.com/triplus/TabBar) beschleunigt die Arbeit mit Zusammenbauten. Es wird eine Werkzeugleiste mit je einem Knopf für jeden Arbeitsbereich hinzugefügt. Man kann die Reihenfolge ändern und man kann die Werkzeugleiste nach belieben platzieren. Viele Leute legen sie vertikal an den linken Rand direkt neben der Baumansicht. Wenn man Assembly3, Part, PartDesign und andere oft genutzte Arbeitsbereiche am oberen Ende platziert, macht es das Umschalten zwischen den Arbeitsbereichen extrem einfach.

[Zum Anfang](#top)

## Verweise

- Das [App-Link](/App_Link "App Link")-Objekt ermöglicht, dass Assembly3 funktioniert.
- [FreeCAD_assembly3](https://github.com/realthunder/FreeCAD_assembly3) Repository und Dokumentation.
- [Assembly3 preview](https://forum.freecadweb.org/viewtopic.php?f=20&t=25712), große Diskussionsrunde.
- [Tutorial for Assembly 3 Workbench](http://help-freecad-jpg87.fr/02_ass_ind.php) von jpg87.
- Anleitungen zum [kinematischen Zusammenbau](/Tutorial_KinematicAssembly/de "Tutorial KinematicAssembly/de"), [Kinematik-Skelett](/Tutorial_KinematicSkeleton/de "Tutorial KinematicSkeleton/de") und passender [Kinematiksteuerung](/Tutorial_KinematicController/de "Tutorial KinematicController/de").
- [Current Assembly Status](https://forum.freecadweb.org/viewtopic.php?f=20&t=34583)
- [Externe Arbeitsbereiche](/External_workbenches "External workbenches")

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_Workbench/de&oldid=1510513>"
