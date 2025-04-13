---
title: Arbeitsbereich FrameForge
---
![](/images/FrameForge.svg)

Icon des Arbeitsbereichs FrameForge

## Einleitung

FrameForge dient der Erstellung von Rahmen und Trägern und der Anwendung von Bearbeitungen (Gehrungsschnitte, Besäumschnitte) auf diese Profile.

Das folgende Tutorial ist auch auf [GitHub](https://github.com/lukh/frameforge/blob/main/docs/tutorial.md) verfügbar.

## Tutorial

### Das Gerüst erstellen

Träger werden an Kanten (z.B. aus einer Skizze) oder parametrischen Linien befestigt. Für den Anfang erstellen wir einen einfachen Rahmen.

1. In einer neuen Datei wechseln wir zum Arbeitsbereich FrameForge.
2. Erzeuge eine Skizze und wähle die XY-Ausrichtung.

   ![](/images/FrameForge_00-create-sketch.png)

   ![](/images/FrameForge_01-select-orientation.png)
3. Zeichne ein Rechteck auf die Skizze. Das wird unser Gerüst.

   ![](/images/FrameForge_02-create-frame-skeleton.png)
4. Bearbeiten der Skizze beenden.

### Rahmen erstellen

1. Lade das Werkzeug Profil erstellen.

   ![](/images/FrameForge_10-profiles.png)

   ![](/images/FrameForge_10-profiles-task.png)

   ![](/images/FrameForge_10-profiles-task-2.png)
2. Wähle ein Profil aus den Listen (Material / Familie / Größe). Es kann die Größe direkt unter der Familie geändert werden. Das Werkzeug hat eine Menge vordefinierter Profile. Es können auch die Parameter geändert werden.

   ![](/images/FrameForge_11-profiles-family.png)
3. Wähle die Kanten in der 3D-Ansicht, zu denen das Profil zugewiesen werden soll.

   ![](/images/FrameForge_13-edge-selection.png)
4. Drücke die Schaltfläche OK im Aufgabenfenster. Nun ist das erste Profil und der erste Rahmen erstellt.

   ![](/images/FrameForge_14-profiles-done.png)

   ![](/images/FrameForge_14-zoom-on-profiles.png)

### Auf zu 3D

Es können komplexere Formen erstellt werden, und es gibt verschiedene Wege dies zu tun.

#### Weitere Skizzen (Teil 1)

Wir fügen weitere Skizzen zu unserem Projekt hinzu:

1. Erzeuge eine neue Skizze.
2. Wähle die gleiche Ausrichtung wie zuvor (XY).
3. Zeichne ein Quadrat mit den identischen Abmessungen wie zuvor.
4. Ändere die Position der Skizze so, dass sie 400 mm über der ersten Skizze liegt.

   ![](/images/FrameForge_20-sketch-base-placement.png)

   ![](/images/FrameForge_20-sketch-base-placement-2.png)
5. Nun kann erneut das Werkzeug Profil erstellen verwendet werden, um einen weiteren quadratischen Rahmen zu erstellen.

   ![](/images/FrameForge_21-stacked-frames.png)

#### Parametrische Linie

Es können parametrische Linien erstellt werden, indem man zwei Scheitelpunkte (Punkte) verbindet. Diese Linien können auch für Profile verwendet werden.

1. Um die Skizzen zu sehen, blendet man die Profilobjekte mit der Leertaste vorübergehend aus.

   ![](/images/FrameForge_22-hide-profiles.png)
2. Wähle zwei Scheitelpunkte.

   ![](/images/FrameForge_23-select-vertexes.png)
3. Erstelle eine parametrische Linie.

   ![](/images/FrameForge_24-create-parametric-line.png)

   ![](/images/FrameForge_25-parametric-line.png)
4. Wiederhole das für die anderen 3 Beine des Rahmens.
5. Benutze erneut das Profil Erzeugen-Werkzeug um die Profile an die 4 Linien zu hängen.
   1. Starten Sie Profil erstellen.
   2. Wählen Sie das gewünschte Profil.
   3. Wählen Sie die 4 parametrischen Linien.
   4. Drücken Sie OK.

   ![](/images/FrameForge_26-cube-done.png)

#### Weitere Skizzen (Teil 2)

Es gibt einen weiteren Weg Skizzen hinzuzufügen, der kompliziertere Dinge ermöglicht.

Manchmal möchten Sie eine Skizze an einer bestimmten Stelle hinzufügen und sie mit einer anderen Skizze verknüpfen. Wenn Sie also die erste Skizze ändern, wird die zweite Skizze folgen. Dies ist mit der Position/Basisplatzierung nicht möglich, da es sich um eine absolute Position handelt. Sie müssen die zweite Skizze der ersten Skizze „zuordnen“.

1. Erzeuge eine neue Skizze und setze die Orientierung auf YZ.
   Zur Orientierung habe ich einen Kreis auf der Skizze befestigt. So sieht man immer, wo sie ist.

   ![](/images/FrameForge_30-mapmode-sketch.png)
2. Klicken auf die Map Mode-Eigenschaft:

   ![](/images/FrameForge_31-mapmode.png)

   ![](/images/FrameForge_32-mapmode-dialog.png)
3. Sie können den Zuordnungsmodus ändern und Flächen, Scheitelpunkte und Kanten auswählen. Hier wurde unsere Kreisskizze neu ausgerichtet. Es gibt eine Menge von Optionen.

   ![](/images/FrameForge_33-mapmode.png)
4. Sie können dann die Skizze bearbeiten und weitere Linien und Rahmen erstellen.

### Abschrägungen und Ecken

Wie Sie sehen können, sind die Übergänge noch nicht gut. Die Profile sind auf dem Rahmen zentriert und enden an den Enden der Kanten.

Wir werden nun Ecken und Schrägen anfertigen. Dafür gibt es zwei Methoden.

#### Über die Eigenschaft Abschrägen

Für einfache Rahmen ist dies die bevorzugte Methode.

1. Blenden wir alles aus, außer dem ersten Rahmen, den wir erstellt haben.

   ![](/images/FrameForge_40-show-first-frame.png)
2. Wählen Sie eines der Profile aus und suchen Sie im Eigenschaftseditor nach Bevel Start/Ende Cut1/Cut2.

   ![](/images/FrameForge_41-bevels.png)
3. Es gibt 4 Einträge (Start/Ende Cut1/Cut2). Damit können Sie Schrägen in den beiden Achsen am Anfang oder Ende des Profils erstellen. Negative Winkel funktionieren und müssen verwendet werden, um Richtungen zu kompensieren.
4. Sie können die Eigenschaften von mehreren Profilen gleichzeitig ändern.

   ![](/images/FrameForge_42-batchs-bevels.png)

#### Über das Werkzeug Gehrungsenden erstellen

1. Zeigen wir nun das andere Grundgerüst.

   ![](/images/FrameForge_50-base-config.png)
2. Zunächst müssen wir den vorhandenen Profilen Versätze hinzufügen. Durch die Versätze werden die Abmessungen der Kanten vergrößert. Sie können die Profile einzeln oder alle auf einmal ändern.

   ![](/images/FrameForge_51-add-offset.png)
3. Heben Sie die Auswahl aller Objekte auf und wählen Sie dann zwei sich berührende Profile aus. Sie müssen Flächen in der 3D-Ansicht auswählen, nicht Objekte in der Strukturansicht.

   ![](/images/FrameForge_52-select-touching-profiles.png)
4. Klicken Sie auf das Werkzeug Gehrungsenden erstellen, um zwei beschnittene Profile zu erstellen.

   ![](/images/FrameForge_53-create-miter-end.png)

   ![](/images/FrameForge_54-miter-end.png)
5. Wiederholen Sie den Vorgang für die anderen Ecken des zweiten Rahmens.

#### Über das Werkzeug Profile trimmen

1. Wenn alle Profile wieder sichtbar gemacht werden, können Sie sehen, dass die vertikalen Profile nicht so geschnitten sind, wie sie sein sollten.

   ![](/images/FrameForge_60-startwith.png)

   ![](/images/FrameForge_61-bad-joint.png)
2. Starte das Profile Trimmen-Werkzeug.

   ![](/images/FrameForge_62-endtrim.png)

   ![](/images/FrameForge_62-endtrim-task.png)
3. Wählen Sie zuerst das vertikale Profil aus, fügen Sie es als getrimmtes Objekt mit der Taste ![](/images/List-add.svg).

   ![](/images/FrameForge_63-select-trimmed-body-1.png)

   ![](/images/FrameForge_63-select-trimmed-body-2.png)
4. Wählen Sie die Trimmgrenzen, mit denen Sie schneiden möchten. Hier habe ich die Ansicht gedreht, um zwei Unterseiten auszuwählen.

   ![](/images/FrameForge_64-select-trimming-boundaries-1.png)

   ![](/images/FrameForge_64-select-trimming-boundaries-2.png)
5. Sie können die Schnittart ändern: gerade oder dem anderen Profil folgend.

   ![](/images/FrameForge_64-select-cuttype-1.png)

   ![](/images/FrameForge_64-select-cuttype-2.png)
6. Sie können auch Flächen hinzufügen, um die andere Seite des Profils zu beschneiden.

### Objekte organisieren

Das ist das Schlimme daran. Ich finde die Baumansicht unübersichtlich. Wirklich unordentlich.

#### Part-Container

Ich nutze oft Part-Container um Profile, Skizzen usw. zu organisieren

![](/images/FrameForge_70-part-container.png)

![](/images/FrameForge_71-part-container.png)

Sie sollten immer nur ein Profil auf einmal in den Container ziehen. Ich weiß nicht, warum, aber FreeCAD ist nicht glücklich über das Ziehen einer Gruppe. Manchmal springen Teile und Profile dann aus dem Teile-Container heraus.

#### Verbindung

Profile können verbunden werden. Dies erlaubt die Gruppierung von Objekten.

![](/images/FrameForge_72-fusion.png)

![](/images/FrameForge_72-fusion-done.png)

### Verwenden von Profilen in PartDesign

1. Um die Profile in PartDesign nutzen zu können, muss erst die Verbindung und anschließend ein Körper erzeugt werden.

   ![](/images/FrameForge_80-body.png)
2. Ziehe die Verbindung in den Körper.

   ![](/images/FrameForge_81-basefeature.png)
3. Nun besteht ein PartDesign-Körper und es kann mit dem Arbeitsbereich PartDesign alles gemacht werden. Bspw. Bohrungen erstellt.

   ![](/images/FrameForge_82-making-holes.png)

   ![](/images/FrameForge_83-holes-made.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=FrameForge_Workbench/de&oldid=1541737>"