---
title: PartDesign RohrHinzufügen
---
|  |
| --- |
| PartDesign RohrHinzufügen |
| Menüeintrag |
| Part Design → Objekt hinzufügen → Rohr |
| Arbeitsbereich |
| [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.17 |
| Siehe auch |
| [PartDesign AustragungHinzufügen](/PartDesign_AdditiveLoft/de "PartDesign AdditiveLoft/de"), [PartDesign RohrAbziehen](/PartDesign_SubtractivePipe/de "PartDesign SubtractivePipe/de") |
|  |

## Beschreibung

**RohrHinzufügen** erstellt einen Festkörper im aktiven Bauteil, indem eine oder mehrere Skizzen (auch als Querschnitte bezeichnet) entlang eines offenen oder geschlossenen Pfads verschoben werden. Wenn das Bauteil bereits Formelemente enthält, wird das Rohr (AdditivePipe-Objekt) mit ihnen vereinigt.

![](/images/PartDesign_AdditivePipe_example.svg)

Links: Querschnitt (A) wird entlang des Pfades (C) in den Querschnitt (B) überführt. Rechts: Das Ergebnis, ein AdditivePipe-Objekt.

## Anwendung

Das obige Beispielbild zeigt zwei verschiedene Querschnittsformen. Im folgenden Text wird das Verfahren mit nur einer einzigen Form beschrieben. Das ergibt ein Teil mit dem gleichen Querschnitt entlang des gesamten Pfades.

1. Zwei separate Skizzen erstellen;
   * eine für den Pfad, z.B. zwei Linien, die durch eine Kurve verbunden sind, wie im obigen Bild,
   * eine für die Querschnittsform, z.B. ein Kreis als erste Form in der obigen Abbildung. Anstatt einer Skizze kann auch die Fläche eines 3D-Objekts verwendet werden. ([eingeführt in 0.20](/Release_notes_0.20/de "Release notes 0.20/de"))
   * Beide Formen in 3D richtig **anordnen**. Es wird empfohlen den Ursprung der Querschnittsskizze auf die Linie des Pfades zu legen. Die beiden Skizzen sollten in den meisten Fällen **orthogonal** sein. Dies kann mit der Funktion 'Map Mode' erfolgen (beide Skizzen mit der Leertaste sichtbar machen. Die Querschnittsskizze auswählen. Unter Eigenschaften/Daten/MapMode auswählen. Auf die auf der rechten Seite erscheinende Schaltfläche ... klicken. Im Dialogfeld Attachment einen Knoten der Pfadskizze und dann den passenden Modus auswählen, um die beiden Skizzen richtig auszurichten).
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
3. Die Schaltfläche (hinzuzufügendes) ![](/images/PartDesign_AdditivePipe.svg) Rohr drücken.
   * Den Menüeintrag **PartDesign → Objekte hinzufügen → ![](/images/PartDesign_AdditivePipe.svg) Rohr** auswählen.
4. Im Dialogfeld **Element auswählen** eine Skizze auswählen, die als Querschnitt verwendet werden soll, und auf OK klicken.
   * Alternativ kann entweder eine einzelne Skizze oder die Fläche eines 3D-Objekts ([eingeführt in 0.20](/Release_notes_0.20/de "Release notes 0.20/de")) ausgewählt werden, bevor das Werkzeug gestartet wird. Dann wird dieser Dialog nicht geöffnet.
   * In den **Rohrparametern** unter **Pfad der Austragung** die Schaltfläche Objekt drücken.
5. Die Skizze, die als Pfad verwendet werden soll, in der 3D-Ansicht auswählen. In diesem Fall wird die gesamte Skizze als Pfad verwendet.
   * Alternativ können einzelne Kanten der Skizze durch drücken von Kante hinzufügen und Auswahl von Kanten in der 3D-Ansicht ausgewählt werden. Nicht vergessen, dass die Schaltfläche Kante hinzufügen für jede Kante erneut gedrückt werden muss. Es muss eine durchgehende Linie ohne Verzweigungen ausgewählt werden.
6. Die anderen Einstellungen sollten in den meisten Fällen mit den Standardeinstellungen funktionieren.
7. Auf OK klicken.

Um mehr als einen Querschnitt zu verwenden, beginnt man mit der ersten Querschnittsskizze wie oben beschrieben, stellt dann unter **Abschnittstransformation** den Transformationsmodus auf *Mehrere Abschnitte*, drückt Schnitt hinzufügen und wählt dann eine Skizze in der [3D-Ansicht](/3D_view/de "3D view/de") aus. Dieser Vorgang wird für jeden zusätzlichen Querschnitt wiederholt.

## Optionen

**Querschnittsänderung**:

* **Konstant** auswählen, um ein einzelnes Profil zu verwenden
* **Über mehrere Querschnitte** auswählen, um mehrere Profile zu verwenden

**Ausrichtung der Querschnitte**:

* Standard
  + Dies behält die Ausrichtung der Querschnittsform senkrecht zum Pfad bei. Dies ist die Standardeinstellung.
* Starr
  + Die Ausrichtung wird durch das erste Profil festgelegt und bleibt durchgehend konstant. Dadurch wird die Ausrichtung auf den Pfadnormalenvektor deaktiviert. Das bedeutet, dass sich die Querschnittsform nicht mit dem Pfad dreht. Wird die Form entlang eines Kreises ausgetragen, ist der Effekt deutlich zu sehen.
* Frenet
  + Erstellt die kleinstmögliche Verdrehung des Profils. Für weitere Informationen siehe [Frenet-Serret-Formeln](https://en.wikipedia.org/wiki/Frenet%E2%80%93Serret_formulas).
* Steuerkurve
  + Einen sekundären Pfad zum Führen des Rohrs angeben.
  + Für jeden Punkt *P* entlang des Austragungspfades gibt es einen entsprechenden Punkt *Q* auf dem Hilfspfad.
  + Wenn das Profil ausgetragen wird, wird es so ausgerichtet, dass die Linie *PQ* im rechten Winkel zum Austragungspfad verläuft.
  + Wenn *Gekrümmte Äquivalenz* eingestellt ist, werden die *Q* Punkte entlang des Austragungspfades proportional skaliert, unabhängig von dessen Länge.
* Binormale
  + Den binormalen Vektor in X, Y und Z angeben

**Eckübergang**

* Transformiert.
* Rechte Ecke
* Runde Ecke

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein PartDesign-AdditivePipe-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

Basis

* Daten-Eigenschaft (versteckt)**Add Sub Shape** (`PartShape`):
* Daten-Eigenschaft (versteckt)**Base Feature** (`Link`):
* Daten-Eigenschaft (versteckt)**\_Body** (`LinkHidden`):

Part Design

* Daten-Eigenschaft**Refine**: true oder false. Wenn auf true gesetzt, werden Festkörper von Kanten befreit, die nach erfolgten Formelementoperationen übriggeblieben sind. Siehe [Part FormAufbereiten](/Part_RefineShape/de "Part RefineShape/de") für weitere Einzelheiten.

Sketch Based

* Daten-Eigenschaft**Profile** (`LinkSub`): Referenz zur Skizze.
* Daten-Eigenschaft**Midplane** (`Bool`): Symmetrisch zur Skizzenebene extrudieren.
* Daten-Eigenschaft**Reversed** (`Bool`): Kehrt die Extrusionsrichtung um.
* Daten-Eigenschaft**Up To Face** (`LinkSub`): Fläche an der das Formelement endet.
* Daten-Eigenschaft**Allow Multi Face** (`Bool`): Mehrere Flächen im Profil zulassen.

Sweep

* Daten-Eigenschaft**Sections** (`LinkSubList`): Listet die verwendeten Querschnitte.
* Daten-Eigenschaft**Spine** (`LinkSub`): Rückgratkurve (Pfad) an der entlang die Querschnitte verschoben werden.
* Daten-Eigenschaft**Spine Tangent** (`Bool`): true oder false (Standardwert). True erweitert die Rückgratkurve, wobei auch tangential anschließende Kanten verwendet werden.
* Daten-Eigenschaft (versteckt)**Auxiliary Spine** (`LinkSub`): Führungskurve (sekundärer Pfad) zum Ausrichten (der Querschnitte) des Sweep-Objekts um die Rückgratkurve herum.
* Daten-Eigenschaft**Auxiliary Spine Tangent** (`Bool`): true oder false (Standardwert). True erweitert die Führungskurve, wobei auch tangential anschließende Kanten verwendet werden.
* Daten-Eigenschaft**Auxiliary Curvelinear** (`Bool`): true oder false (Standardwert). True berechnet die Normale zwischen Punkten mit gleichen Abständen auf Rückgratkurve und Führungskurve.
* Daten-Eigenschaft**Mode** (`Enumeration`): Profilmodus. Zur Auswahl stehen *Fixed*, *Frenet*, *Auxiliary* oder *Binormal*. Siehe [Optionen](#Optionen).
* Daten-Eigenschaft**Binormal** (`Vector`): Binormaler Vektor für den zugehörigen Ausrichtungsmodus.
* Daten-Eigenschaft**Transition** (`Enumeration`): Übergangsmodus. Zur Auswahl stehen *Transformed*, *Right Corner* oder *Round Corner*.
* Daten-Eigenschaft**Transformation** (`Enumeration`): *Constant* verwendet einen einzelnen Querschnitt. *Multisection* verwendet zwei oder mehr Querschnitte. *Linear*, *S-shape* und *Interpolation* funktionieren aktuell (noch) nicht.

## Hinweise

* Um die Form des Rohres besser steuern zu können, wird empfohlen, dass alle Querschnitte die gleiche Anzahl von Segmenten haben. Beispielsweise kann bei einem Rohr zwischen einem Rechteck und einem Kreis der Kreis in 4 zusammenhängende Bögen aufgeteilt werden.
* Das Rohr kann mit einem einzelnen Knotenpunkt ([vertex](/Glossary#V "Glossary")) einer Skizze oder eines Körpers beginnen oder enden. [eingeführt in 0.20](/Release_notes_0.20/de "Release notes 0.20/de")
* Wird ein Knotenpunkt als Querschnitt ausgewählt, muss es der letzte Abschnitt des Rohres sein. Andernfalls würde der Rohrkörper aus zwei an der spitze verbundenen Festkörpern bestehen. Dies würde gegen die Definition eines 3D-Objekts des CAD-Kernels verstoßen. Die Reihenfolge der Abschnitte kann durch verschieben dieser Abschnitte innerhalb der Liste angepasst werden.
* Der Pfad kann nur von einer einzelnen Skizze, einem Formelement oder einem FormBinder stammen. Soll über mehrere Kanten verschiedener Skizzen ausgetragen werden, wird ein [Teilformbinder](/PartDesign_SubShapeBinder/de "PartDesign SubShapeBinder/de") verwendet.
* Der Pfad darf keine Verzweigungen oder T-Verbindungen usw. enthalten. Schleifen sind in Ordnung.
* Es kann zu Problemen führen, wenn der Querschnitt in 3D nicht senkrecht zum Pfad steht.
* Ein Querschnitt kann nicht auf derselben Ebene liegen wie der unmittelbar vorhergehende.
* Es ist nicht möglich, unzusammenhängende oder sich kreuzende Konturen zu verwenden.
* Enthält die Skizze innere Geometrie, sollte die Reihenfolge, in der die Skizzengeometrien erstellt werden, für alle Querschnitte gleich sein. Entweder beginnt man alle Querschnitte mit der inneren Geometrie oder man beginnt alle mit der äußeren. Andernfalls wird ein ungültiges Rohrobjekt erstellt, bei dem sich innere und äußere Wandungen überkreuzen.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditivePipe/de&oldid=1554198>"