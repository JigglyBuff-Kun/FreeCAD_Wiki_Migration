---
title: Mesh RegelgeometrieErstellen
---

|                                                |
| ---------------------------------------------- |
| Mesh RegelgeometrieErstellen                   |
| Menüeintrag                                    |
| Netze → Regelgeometrie...                      |
| Arbeitsbereich                                 |
| [Mesh](/Mesh_Workbench/de "Mesh Workbench/de") |
| Standardtastenkürzel                           |
| _Keiner_                                       |
| Eingeführt in Version                          |
| -                                              |
| Siehe auch                                     |
| _Keiner_                                       |
|                                                |

## Beschreibung

Der Befehl **Mesh RegelgeometrieErstellen** erstellt ein regelmäßiges parametrisches Festkörper-Netzobjekt.

## Anwendung

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/Mesh_BuildRegularSolid.svg) Regelgeometrie... drücken.
   - Den Menüeintrag **Netze → ![](/src/assets/images/Mesh_BuildRegularSolid.svg) Regelgeometrie...** auswählen.
2. Das Dialogfenster **Regelgeometrie** wird geöffnet.
3. Zuerst den Typ des Netzobjekts aus der Ausklappliste auswählen:
   - **![](/src/assets/images/Mesh_Cube.svg) Würfel**
   - **![](/src/assets/images/Mesh_Cylinder.svg) Zylinder**
   - **![](/src/assets/images/Mesh_Cone.svg) Kegel**
   - **![](/src/assets/images/Mesh_Sphere.svg) Kugel**
   - **![](/src/assets/images/Mesh_Ellipsoid.svg) Ellipsoid**
   - **![](/src/assets/images/Mesh_Torus.svg) Torus**
4. Die erforderlichen Einstellungen festlegen. Welche Einstellungen angezeigt werden, hängt vom Typ des Netzobjekts ab. Siehe [Eigenschaften](#Eigenschaften).
5. Für Netze mit geschwungenen oberflächen: ein höherer **Sampling**-Wert ergibt ein feineres Netz.
6. Die Schaltfläche Erstellen drücken, um ein Netzobjekt zu erstellen.
7. Wahlweise mehr Netzobjekte erstellen.
8. Die Schaltfläche Close drücken, um das Dialogfenster zu schließen und den Befehl zu beenden.

## Hinweise

- Die mit diesem Befehl erstellten Netzobjekte sind parametrisch. Immer wenn sie neu berechnet werden, z.B. nach dem Ändern eines Parameters, wird ihr Netz neu aufgebaut. Das bedeutet, dass die Anwendung von Befehlen wie [Mesh NeuVernetzenGmsh](/Mesh_RemeshGmsh/de "Mesh RemeshGmsh/de"), [Mesh Skalieren](/Mesh_Scale "Mesh Scale") usw. bei ihnen normalerweise nicht sinnvoll ist.

## Eigenschaften

Netzobjekte, die mit diesem Befehl erstellt werden erben sämtliche Einstellungen eines [Mesh Formelements](/Mesh_Feature/de "Mesh Feature/de"). Zusätzlich besitzt jeder Typ der Netzobjekte einige Einstellungen zur Steuerung seines parametrischen Verhaltens:

### Würfel

#### Daten

Cube

- Daten-Eigenschaft**Height** (`FloatConstraint`): die Höhe des Würfels
- Daten-Eigenschaft**Length** (`FloatConstraint`): die Länge des Würfels
- Daten-Eigenschaft**Width** (`FloatConstraint`): die Breite des Würfels

### Zylinder

#### Daten

Basis

- Daten-Eigenschaft**Closed** (`Bool`): wenn auf `false`, bleiben die ebenen Enden des Zylinders offen.
- Daten-Eigenschaft**Edge Length** (`FloatConstraint`): die Kantenlänge der Flächen im Netz.
- Daten-Eigenschaft**Length** (`FloatConstraint`): die Länge des Zylinders.
- Daten-Eigenschaft**Radius** (`FloatConstraint`): der Radius des Zylinders.
- Daten-Eigenschaft**Sampling** (`IntegerConstraint`): die Anzahl der Flächen entlang der gekrümmten Oberfläche.

### Kegel

#### Daten

Basis

- Daten-Eigenschaft**Closed** (`Bool`): wenn auf `false` gesetzt, bleiben ebene Enden von Kegeln offen.
- Daten-Eigenschaft**Edge Length** (`FloatConstraint`): die Kantenlänge der Flächen im Netz.
- Daten-Eigenschaft**Length** (`FloatConstraint`): die Länge des Kegels
- Daten-Eigenschaft**Radius 1** (`FloatConstraint`): der erste Radius des Kegels. Kann `0` sein.
- Daten-Eigenschaft**Radius 2** (`FloatConstraint`): der zweite Radius des Kegels. Kann `0` sein.
- Daten-Eigenschaft**Sampling** (`IntegerConstraint`): die Anzahl der Flächen entlang der gekrümmten Oberfläche.

### Kugel

#### Daten

Basis

- Daten-Eigenschaft**Radius** (`FloatConstraint`): der Radius der Kugel.
- Daten-Eigenschaft**Sampling** (`IntegerConstraint`): die Anzahl der Flächen entlang beider Richtungen der gekrümmten Oberfläche.

### Ellipsoid

#### Daten

Basis

- Daten-Eigenschaft**Radius 1** (`FloatConstraint`): der erste Radius des Ellipsoids.
- Daten-Eigenschaft**Radius 2** (`FloatConstraint`): der zweite Radius des Ellipsoids.
- Daten-Eigenschaft**Sampling** (`IntegerConstraint`): die Anzahl der Flächen entlang beider Richtungen der gekrümmten Oberfläche.

### Torus

#### Daten

Basis

- Daten-Eigenschaft**Radius 1** (`FloatConstraint`): der erste (Haupt-) Radius des Torus.
- Daten-Eigenschaft**Radius 2** (`FloatConstraint`): der zweite Radius des Torus.
- Daten-Eigenschaft**Sampling** (`IntegerConstraint`): die Anzahl der Flächen entlang beider Richtungen der gekrümmten Oberfläche.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_BuildRegularSolid/de&oldid=1341728>"
