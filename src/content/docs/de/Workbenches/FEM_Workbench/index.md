---
title: Arbeitsbereich FEM
---

![](/images/Workbench_FEM.svg)

Symbol des Arbeitsbereichs FEM

## Einleitung

Der Arbeitsbereich FEM ermöglicht einen modernen Arbeitsablauf zur Finite-Elemente-Analyse (FEA) innerhalb von FreeCAD, siehe [Finite-Elemente-Methode](https://de.wikipedia.org/wiki/Finite-Elemente-Methode) (FEM). Dies bedeutet im Wesentlichen, dass alle Werkzeuge zur Durchführung einer Analyse in einer grafischen Benutzeroberfläche (GUI) zusammengefasst sind.

![](/images/FemWorkbench.jpg)

## Arbeitsablauf

Die Schritte zur Durchführung einer Finite-Elemente-Analyse sind:

1. Vorbereitung: Einrichten des Analyseproblems.
   1. Modellierung der Geometrie: Erstellung der Geometrie mit FreeCAD oder Import aus einer anderen Anwendung.
   2. Erstellen einer Analyse.
      1. Hinzufügen von Simulationsrandbedingungen wie Lasten und starren Einspannungen zum geometrischen Modell.
      2. Hinzufügen von Materialien zu Teilen des geometrischen Modells.
      3. Erstellen eines Finite-Elemente-Netzes für das geometrische Modell oder Importieren eines Netzes aus einer anderen Anwendung.
2. Berechnung: Ausführen eines externen Lösers aus FreeCAD heraus.
3. Nachbearbeitung: Visualisierung der Analyseergebnisse aus FreeCAD heraus oder Export der Ergebnisse, damit sie mit einer anderen Anwendung nachbearbeitet werden können.

Der Arbeitsbereich FEM kann unter Linux, Windows und Mac OSX eingesetzt werden. Da der Arbeitsbereich mit externen Lösern arbeitet, hängt der Umfang der manuellen Einrichtung von dem Betriebssystem des Benutzers ab. Siehe [FEM Einrichtung](/FEM_Install/de "FEM Install/de") für Anweisungen zum Einrichten der externen Werkzeuge.

![](/images/FEM_Workbench_workflow.svg)

Arbeitsablauf des Arbeitsbereichs FEM; der Arbeitsbereich ruft zwei externe Programme auf, eins zum Vernetzen eines Festkörper-Objekts zu vernetzen und eins um die eigentliche rechnerische Lösung des Finite-Elemente-Problems durchzuführen.

## Menü Modell

- ![](/images/FEM_Analysis.svg) [Analysebehälter](/FEM_Analysis/de "FEM Analysis/de"): Erstellt einen neuen Behälter (Analysis-Objekt) für eine mechanische Analyse.

### Werkstoffe

- ![](/images/FEM_MaterialSolid.svg) [Werkstoff für Festkörper](/FEM_MaterialSolid/de "FEM MaterialSolid/de"): Ermöglicht, einen Feststoff aus der Datenbank auszuwählen.

- ![](/images/FEM_MaterialFluid.svg) [Werkstoff für Fluide](/FEM_MaterialFluid/de "FEM MaterialFluid/de"): Ermöglicht, ein "fließendes Material" (Gas oder Flüssigkeit) aus der Datenbank auszuwählen.

- ![](/images/FEM_MaterialMechanicalNonlinear.svg) [Nichtlinearer mechanischer Werkstoff](/FEM_MaterialMechanicalNonlinear/de "FEM MaterialMechanicalNonlinear/de"): Ermöglicht das Hinzufügen eines nichtlinearen mechanischen Materialmodells.

- ![](/images/FEM_MaterialReinforced.svg) [Bewehrtes Material (Beton)](/FEM_MaterialReinforced/de "FEM MaterialReinforced/de"): Ermöglicht, verstärkte Werkstoffe aus der Datenbank auszuwählen, die aus einer Matrix und einer Bewehrung (Verstärkung, Armierung) bestehen.

- ![](/images/FEM_MaterialEditor.svg) [Werkstoffeditor](/FEM_MaterialEditor/de "FEM MaterialEditor/de"): Ermöglicht, den Werkstoffeditor zu öffnen, um Werkstoffe zu bearbeiten.

### Elementgeometrie

- ![](/images/FEM_ElementGeometry1D.svg) [Trägerquerschnitt](/FEM_ElementGeometry1D/de "FEM ElementGeometry1D/de"): Wird verwendet, um Querschnitte für Balkenelemente zu definieren.

- ![](/images/FEM_ElementRotation1D.svg) [Träger Drehung](/FEM_ElementRotation1D/de "FEM ElementRotation1D/de"): Wird verwendet, um Querschnitte von Balkenelementen zu drehen.

- ![](/images/FEM_ElementGeometry2D.svg) [Wandstärke](/FEM_ElementGeometry2D/de "FEM ElementGeometry2D/de"): Wird verwendet, um die Wandstärke für Schalenelemente festzulegen.

- ![](/images/FEM_ElementFluid1D.svg) [Strömungsquerschnitt für 1D-Strömung](/FEM_ElementFluid1D/de "FEM ElementFluid1D/de"): Wird verwendet, um einen FEM-Strömungsquerschnitt für pneumatische und hydraulische Netzwerke festzulegen.

### Elektromagnetische Randbedingungen

- ![](/images/FEM_ConstraintElectrostaticPotential.svg) [Elektrostatisches Potential](/FEM_ConstraintElectrostaticPotential/de "FEM ConstraintElectrostaticPotential/de"): Legt ein elektrostatisches Potential fest.

- ![](/images/FEM_ConstraintCurrentDensity.svg) [Randbedingung Stromdichte](/FEM_ConstraintCurrentDensity/de "FEM ConstraintCurrentDensity/de"): Legt eine Stromdichte fest. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")

- ![](/images/FEM_ConstraintMagnetization.svg) [Randbedingung Magnetisierung](/FEM_ConstraintMagnetization/de "FEM ConstraintMagnetization/de"): Wird zum Festlegen einer Magnetisierung verwendet. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")

- ![](/images/FEM_ConstraintElectricChargeDensity.svg) [Elektrische Ladungsdichte](/FEM_ElectricChargeDensity/de "FEM ElectricChargeDensity/de"): Wird zum Festlegen einer elektrischen Ladungsdichte verwendet. [eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de")

### Randbedingungen für Fluide

- ![](/images/FEM_ConstraintInitialFlowVelocity.svg) [Startbedingung Strömungsgeschwindigkeit](/FEM_ConstraintInitialFlowVelocity/de "FEM ConstraintInitialFlowVelocity/de"): Wird verwendet, um eine anfängliche Strömungsgeschwindigkeit für einen Körper (ein Volumen) zu definieren.

- ![](/images/FEM_ConstraintInitialPressure.svg) [Startbedingung Druck](/FEM_ConstraintInitialPressure/de "FEM ConstraintInitialPressure/de"): Wird verwendet, um einen anfänglichen Druck für einen Körper (ein Volumen) festzulegen. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")

- ![](/images/FEM_ConstraintFlowVelocity.svg) [Randbedingung Strömungsgeschwindigkeit](/FEM_ConstraintFlowVelocity/de "FEM ConstraintFlowVelocity/de"): Wird verwendet, um eine Strömungsgeschwindigkeit als Grenzbedingung an einer Kante (2D) oder Fläche (3D) festzulegen.

### Geometrische Analyse-Elemente

- ![](/images/FEM_ConstraintPlaneRotation.svg) [RandbedingungEbeneDurchPunkte](/FEM_ConstraintPlaneRotation/de "FEM ConstraintPlaneRotation/de"): Wird verwendet, um eine Randbedingung zu erstellen, die Knoten einer ebenen Oberfläche auf derselben Ebene festhält.

- ![](/images/FEM_ConstraintSectionPrint.svg) [Section print feature](/FEM_ConstraintSectionPrint/de "FEM ConstraintSectionPrint/de"): Wird zur Ausgabe der vorgegebenen "facial output variables" (Kräfte und Momente) in die Daten-Datei verwendet.

- ![](/images/FEM_ConstraintTransform.svg) [Lokales Koordinatensystem](/FEM_ConstraintTransform/de "FEM ConstraintTransform/de"): Wird verwendet, um ein lokales Koordinatensystem für eine Fläche festzulegen.

### Mechanische Randbedingungen und Lasten

- ![](/images/FEM_ConstraintFixed.svg) [Randbedingung Festsetzen](/FEM_ConstraintFixed/de "FEM ConstraintFixed/de"): Wird verwendet, um eine Randbedingung zum Festsetzen von Punkten, Kanten oder Flächen festzulegen.

- ![](/images/FEM_ConstraintRigidBody.svg) [Randbedingung starrer Körper](/FEM_ConstraintRigidBody/de "FEM ConstraintRigidBody/de"): Wird verwendet, um CalculiXs Randbedingung starrer Körper anzuwenden, die die Bewegung der Knoten einer ausgewählten geometrischen Einzelheit bezüglich eines durch den Benutzer festgelegten Referenzpunktes festlegt. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

- ![](/images/FEM_ConstraintDisplacement.svg) [Randbedingung Versatz](/FEM_ConstraintDisplacement/de "FEM ConstraintDisplacement/de"): Wird verwendet, um eine Randbedingung zum Versetzen von Punkten, Kanten oder Flächen festzulegen.

- ![](/images/FEM_ConstraintContact.svg) [Randbedingung Kontakt](/FEM_ConstraintContact/de "FEM ConstraintContact/de"): Wird verwendet, um eine Randbedingung Kontakt zwischen zwei Flächen festzulegen.

- ![](/images/FEM_ConstraintTie.svg) [Randbedingung Verbinder](/FEM_ConstraintTie/de "FEM ConstraintTie/de"): Wird verwendet, um eine Randbedingung Vebinder (wie ein Kleber- oder Schweißpunkt) zwischen zwei Flächen ("bonded contact") festzulegen oder, [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"), zyklische Symmetrie.

- ![](/images/FEM_ConstraintSpring.svg) [Feder](/FEM_ConstraintSpring/de "FEM ConstraintSpring/de"): Wird verwendet, um eine Randbedingung Feder festzulegen. [eingeführt in 0.20](/Release_notes_0.20/de "Release notes 0.20/de")

- ![](/images/FEM_ConstraintForce.svg) [Kraftbelastung](/FEM_ConstraintForce/de "FEM ConstraintForce/de"): Wird verwendet, um eine Kraft in N festzulegen, die gleichmäßig auf die ausgewählte Fläche in der festgelegten Richtung wirkt.

- ![](/images/FEM_ConstraintPressure.svg) [Druckbelastung](/FEM_ConstraintPressure/de "FEM ConstraintPressure/de"): Wird verwendet, um eine Druckbelastung festzulegen.

- ![](/images/FEM_ConstraintCentrif.svg) [Zentrifugale Last](/FEM_ConstraintCentrif/de "FEM ConstraintCentrif/de"): Wird verwendet, um eine zentrifugale Kraft auf einen Körper festzulegen. [eingeführt in 0.20](/Release_notes_0.20/de "Release notes 0.20/de")

- ![](/images/FEM_ConstraintSelfWeight.svg) [Schwerkraft-Last](/FEM_ConstraintSelfWeight/de "FEM ConstraintSelfWeight/de"): Wird verwendet, um eine Schwerkraftbeschleunigung festzulegen, die auf ein Modell wirkt.

### Thermische Randbedingungen und Lasten

- ![](/images/FEM_ConstraintInitialTemperature.svg) [Startbedingung Temperatur](/FEM_ConstraintInitialTemperature/de "FEM ConstraintInitialTemperature/de"): Wird verwendet, um die Anfangstemperatur eines Körpers festzulegen.

- ![](/images/FEM_ConstraintHeatflux.svg) [Wärmestrom-Last](/FEM_ConstraintHeatflux/de "FEM ConstraintHeatflux/de"): Wird verwendet, um eine Wärmestrombelastung auf einer Fläche (oder mehreren) festzulegen.

- ![](/images/FEM_ConstraintTemperature.svg) [RandbedingungTemperatur](/FEM_ConstraintTemperature/de "FEM ConstraintTemperature/de"): Wird verwendet, um eine Randbedingung Temperatur für einen Punkt, eine Kante oder Fläche(n) festzulegen.

- ![](/images/FEM_ConstraintBodyHeatSource.svg) [Körperwärmequelle](/FEM_ConstraintBodyHeatSource/de "FEM ConstraintBodyHeatSource/de"): zum Festlegen von intern erzeugter Körperwärme.

### Konstanten Überschreiben

- ![](/images/FEM_ConstantVacuumPermittivity.svg) [ElektrischeFeldkonstante](/FEM_ConstantVacuumPermittivity/de "FEM ConstantVacuumPermittivity/de"): Wird verwendet, um die [elektrische Feldkonstante](https://de.wikipedia.org/wiki/Elektrische_Feldkonstante) (Permittivität des Vakuums) mit einem selbstgewählten Wert zu überschreiben.

## Menü Netz

- ![](/images/FEM_MeshNetgenFromShape.svg) [FEM Netz aus Form durch Netgen](/FEM_MeshNetgenFromShape/de "FEM MeshNetgenFromShape/de"): Generiert ein Finite-Elemente-Netz für ein Modell mit Netgen.

- ![](/images/FEM_MeshGmshFromShape.svg) [FEM Netz aus Form durch GMSH](/FEM_MeshGmshFromShape/de "FEM MeshGmshFromShape/de"): Generiert ein Finite-Elemente-Netz für ein Modell mit Gmsh.

- ![](/images/FEM_MeshBoundaryLayer.svg) [FEM Netz Grenzschicht](/FEM_MeshBoundaryLayer/de "FEM MeshBoundaryLayer/de"): Erzeugt anisotrope Netze für genaue Berechnungen in der Nähe von Grenzen.

- ![](/images/FEM_MeshRegion.svg) [FEM Netzbereich](/FEM_MeshRegion/de "FEM MeshRegion/de"): Erzeugt einen oder mehrere lokalisierte Bereiche für die Vernetzung, wodurch die Analysezeit stark optimiert wird.

- ![](/images/FEM_MeshGroup.svg) [FEM Netzgruppe](/FEM_MeshGroup/de "FEM MeshGroup/de"): Gruppiert und beschriftet Elemente eines Netzes (Knoten, Kante, Fläche) zusammen, nützlich für den Export des Netzes zu externen Lösern.

- ![](/images/FEM_CreateElementsSet.svg) [Elemente löschen](/FEM_CreateElementsSet/de "FEM CreateElementsSet/de"): Blendet durch ein Polygon ausgewählte Elemente aus dem Netz aus. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/FEM_FemMesh2Mesh.svg) [FEM-Netz zu Netz](/FEM_FemMesh2Mesh/de "FEM FemMesh2Mesh/de"): Wandelt Oberflächen von 3D-Elementen oder ganze 2D-Elemente eines ausgewählten FEM-Netzes in ein Oberflächennetz um.

## Menü Lösen

- ![](/images/FEM_SolverCalculixCxxtools.svg) [Löser CalculiX Standard](/FEM_SolverCalculixCxxtools/de "FEM SolverCalculixCxxtools/de"): Erstellt einen neuen Löser für diese Analyse.

- ![](/images/FEM_SolverElmer.svg) [Löser Elmer](/FEM_SolverElmer/de "FEM SolverElmer/de"): Erstellt die Löser-Steuerung für Elmer.

- ![](/images/FEM_SolverMystran.svg) [Löser Mystran](/FEM_SolverMystran/de "FEM SolverMystran/de"): Erstellt die Löser-Steuerung für Mystran. [eingeführt in 0.20](/Release_notes_0.20/de "Release notes 0.20/de")

- ![](/images/FEM_SolverZ88.svg) [Löser Z88](/FEM_SolverZ88/de "FEM SolverZ88/de"): Erstellt die Löser-Steuerung für Z88.

### Mechanische Gleichungen

- ![](/images/FEM_EquationElasticity.svg) [Elastizitätsgleichung](/FEM_EquationElasticity/de "FEM EquationElasticity/de"): Gleichung für den Löser ![](/images/FEM_SolverElmer.svg) [Elmer](/FEM_SolverElmer "FEM SolverElmer") zur Durchführung linearer mechanischer Analysen.

- ![](/images/FEM_EquationDeformation.svg) [Verformung](/FEM_EquationDeformation/de "FEM EquationDeformation/de"): Gleichung für den Löser ![](/images/FEM_SolverElmer.svg) [Elmer](/FEM_SolverElmer/de "FEM SolverElmer/de") zur Durchführung nicht linearer mechanischer Analysen (Verformungen). [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")

### Elektromagnetische Gleichungen

- ![](/images/FEM_EquationElectrostatic.svg) [Gleichung Elektrostatik](/FEM_EquationElectrostatic/de "FEM EquationElectrostatic/de"): Gleichung für den Löser ![](/images/FEM_SolverElmer.svg) [Elmer](/FEM_SolverElmer/de "FEM SolverElmer/de") zur Durchführung elektrostatischer Analysen.

- ![](/images/FEM_EquationElectricforce.svg) [Gleichung elektrische Kraft](/FEM_EquationElectricforce/de "FEM EquationElectricforce/de"): Gleichung für den Löser ![](/images/FEM_SolverElmer.svg) [Elmer](/FEM_SolverElmer/de "FEM SolverElmer/de") zur Berechnung der elektrischen Kraft auf Flächen.

- ![](/images/FEM_EquationMagnetodynamic.svg) [Gleichung Elektrodynamik](/FEM_EquationMagnetodynamic/de "FEM EquationMagnetodynamic/de"): Gleichung für den Löser ![](/images/FEM_SolverElmer.svg) [Elmer](/FEM_SolverElmer/de "FEM SolverElmer/de") für elektrodynamische Berechnungen. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")

- ![](/images/FEM_EquationMagnetodynamic2D.svg) [Gleichung Elektrodynamik 2D](/FEM_EquationMagnetodynamic2D/de "FEM EquationMagnetodynamic2D/de"): Gleichung für den Löser ![](/images/FEM_SolverElmer.svg) [Elmer](/FEM_SolverElmer/de "FEM SolverElmer/de") für elektrodynamische 2D-Berechnungen. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")

- ![](/images/FEM_EquationStaticCurrent.svg) [Gleichung Gleichstrom](/FEM_EquationStaticCurrent/de "FEM EquationStaticCurrent/de"): Gleichung für den Gleichungslöser ![](/images/FEM_SolverElmer.svg) [Elmer](/FEM_SolverElmer/de "FEM SolverElmer/de"), um den Gleichstromfluss zu berechnen. [eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de")

- ![](/images/FEM_EquationFlow.svg) [Gleichung Strömung](/FEM_EquationFlow/de "FEM EquationFlow/de"): Gleichung für den Löser ![](/images/FEM_SolverElmer.svg) [Elmer](/FEM_SolverElmer/de "FEM SolverElmer/de") zur Durchführung von Strömungsanalysen.

- ![](/images/FEM_EquationFlux.svg) [Gleichung Fluss](/FEM_EquationFlux/de "FEM EquationFlux/de"): Gleichung für den Löser ![](/images/FEM_SolverElmer.svg) [Elmer](/FEM_SolverElmer/de "FEM SolverElmer/de") zur Durchführung von Fluss-Analysen.

- ![](/images/FEM_EquationHeat.svg) [Wärmegleichung](/FEM_EquationHeat/de "FEM EquationHeat/de"): Gleichung für den Löser ![](/images/FEM_SolverElmer.svg) [Elmer](/FEM_SolverElmer/de "FEM SolverElmer/de") zum Durchführen von Wärmeübertragungsanalysen.

- ![](/images/FEM_SolverControl.svg) [Löser Auftragssteuerung](/FEM_SolverControl/de "FEM SolverControl/de"): Öffnet das Menü zum Einstellen und Starten des ausgewählten Lösers.

- ![](/images/FEM_SolverRun.svg) [Löserberechnungen ausführen](/FEM_SolverRun/de "FEM SolverRun/de"): Führt den ausgewählten Löser der aktiven Analyse aus.

## Menü Ergebnisse

- ![](/images/FEM_ResultsPurge.svg) [Ergebnisse bereinigen](/FEM_ResultsPurge/de "FEM ResultsPurge/de"): Löscht die Ergebnisse der aktiven Analyse.

- ![](/images/FEM_ResultShow.svg) [Ergebnisanzeige](/FEM_ResultShow/de "FEM ResultShow/de"): Wird verwendet, um das Ergebnis einer Analyse anzuzeigen. Dieser Dialog ist für den Löser [Elmer](/FEM_SolverElmer/de "FEM SolverElmer/de") nicht verfügbar, da dieser Löser nur unter Verwendung von [NachbearbeitungPipelineVonErgebnis](/FEM_PostPipelineFromResult/de "FEM PostPipelineFromResult/de") visualisiert.

- ![](/images/FEM_PostApplyChanges.svg) [Änderungen auf die Pipeline anwenden](/FEM_PostApplyChanges/de "FEM PostApplyChanges/de"): Aktiviert oder Deaktiviert, ob Änderungen an der Ergebnis-Pipeline und den Filtern unmittelbar angewendet werden

- ![](/images/FEM_PostPipelineFromResult.svg) [Pipeline aus Ergebnis buchen](/FEM_PostPipelineFromResult/de "FEM PostPipelineFromResult/de"): Wird verwendet, um eine neue grafische Darstellungen von FEM-Analyseergebnissen (Farbskala und weitere Darstellungsoptionen) hinzuzufügen.

- ![](/images/FEM_PostFilterWarp.svg) [Warp Filter](/FEM_PostFilterWarp/de "FEM PostFilterWarp/de"): zum Darstellen der skaliert verzerrten Form eines Modells.

- ![](/images/FEM_PostFilterClipScalar.svg) [Scalarer Ausschnittfilter](/FEM_PostFilterClipScalar/de "FEM PostFilterClipScalar/de"): zum Beschneiden eines Feldes mit einem bestimmten skalaren Wert.

- ![](/images/FEM_PostFilterCutFunction.svg) [Schnittfilter](/FEM_PostFilterCutFunction/de "FEM PostFilterCutFunction/de"): zum Darstellen der Ergebnisse auf einer Kugel oder Ebene, die durch das Modell schneidet.

- ![](/images/FEM_PostFilterClipRegion.svg) [Region Schnittfilter](/FEM_PostFilterClipRegion/de "FEM PostFilterClipRegion/de"): zum Beschneiden eines Feldes mit einer Kugel oder einer Ebene, die durch das Modell schneidet.

- ![](/images/FEM_PostFilterContours.svg) [Konturenfilter](/FEM_PostFilterContours/de "FEM PostFilterContours/de"): zur Darstellung von Iso-(parametrischen-)Linien (für Analysen in 2D) oder Iso-Konturen. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")

- ![](/images/FEM_PostFilterDataAlongLine.svg) [Linienschnittfilter](/FEM_PostFilterDataAlongLine/de "FEM PostFilterDataAlongLine/de"): zum Plotten der Werte eines Feldes entlang einer bestimmten Linie.

- ![](/images/FEM_PostFilterLinearizedStresses.svg) [Spannungsdiagramm](/FEM_PostFilterLinearizedStresses/de "FEM PostFilterLinearizedStresses/de"): Erstellt ein Spannungsdiagramm.

- ![](/images/FEM_PostFilterDataAtPoint.svg) [Daten zu Punkt Schnittfilter](/FEM_PostFilterDataAtPoint/de "FEM PostFilterDataAtPoint/de"): zur Darstellung des Wertes eines ausgewählten Feldes an einem gegebenen Punkt

### Filterfunktionen

- ![](/images/FEM_PostCreateFunctionPlane.svg) [Ebene](/FEM_PostCreateFunctionPlane/de "FEM PostCreateFunctionPlane/de"): Beschneidet das Ergebnisnetz mit einer Ebene.

- ![](/images/FEM_PostCreateFunctionSphere.svg) [Kugel](/FEM_PostCreateFunctionSphere/de "FEM PostCreateFunctionSphere/de"): Beschneidet das Ergebnisnetz mit einer Kugel.

- ![](/images/FEM_PostCreateFunctionCylinder.svg) [Zylinder](/FEM_PostCreateFunctionCylinder/de "FEM PostCreateFunctionCylinder/de"): Beschneidet das Ergebnisnetz mit einem Zylinder [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")

- ![](/images/FEM_PostCreateFunctionBox.svg) [Quader](/FEM_PostCreateFunctionBox/de "FEM PostCreateFunctionBox/de"): Beschneidet das Ergebnisnetz mit einem Quader [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")

## Menü Dienstprogramme

- ![](/images/FEM_ClippingPlaneAdd.svg) [Beschnittebene auf Fläche](/FEM_ClippingPlaneAdd/de "FEM ClippingPlaneAdd/de"): Fügt eine Beschnittebene für die gesamte Modellansicht hinzu.

- ![](/images/FEM_ClippingPlaneRemoveAll.svg) [Alle Schnittebenen entfernen](/FEM_ClippingPlaneRemoveAll/de "FEM ClippingPlaneRemoveAll/de"): Entfernt alle vorhandenen [Schnittebenen](/FEM_ClippingPlaneAdd/de "FEM ClippingPlaneAdd/de").

- ![](/images/FEM_Examples.svg) [FEM Beispiele öffnen](/FEM_Examples/de "FEM Examples/de"): Öffne die GUI, um auf FEM Beispiele zuzugreifen.

## Kontextmenü

- ![](/images/FEM_MeshClear.svg) [FEM Netz löschen](/FEM_MeshClear/de "FEM MeshClear/de"): Löscht die Netzdatei aus der FreeCAD-Datei. Nützlich, um eine FreeCAD Datei leichter zu machen.

- ![](/images/FEM_MeshDisplayInfo.svg) [FEM Netzinfomation anzeigen](/FEM_MeshDisplayInfo/de "FEM MeshDisplayInfo/de"): Zeigt die grundlegenden Daten vorhandener Netze an - Anzahl der Knoten und der Elemente von jeder Art

## Veraltete Werkzeuge

- ![](/images/FEM_ConstraintFluidBoundary.svg) [Fluid Randbedingungen](/FEM_ConstraintFluidBoundary/de "FEM ConstraintFluidBoundary/de"): Wird zum festlegen einer Fluid-Grenzschicht-Bedingung verwendet. Besaß keinen Löser. Nicht vorhanden in 1.0 und neuer.

- ![](/images/FEM_ConstraintBearing.svg) [Lagerbeschränkung](/FEM_ConstraintBearing/de "FEM ConstraintBearing/de"): Wird verwendet, um eine Lagerbeschränkung festzulegen. Besaß keinen Löser. Nicht vorhanden in 1.0 und neuer.

- ![](/images/FEM_ConstraintGear.svg) [Zahnradbeschränkung](/FEM_ConstraintGear/de "FEM ConstraintGear/de"): Wird verwendet, um eine Zahnradbeschränkung festzulegen. Besaß keinen Löser. Nicht vorhanden in 1.0 und neuer.

- ![](/images/FEM_ConstraintPulley.svg) [Scheibenbeschränkung](/FEM_ConstraintPulley/de "FEM ConstraintPulley/de"): Wird verwendet, um eine Scheibenbeschränkung festzulegen. Besaß keinen Löser. Nicht vorhanden in 1.0 und neuer.

- ![](/images/FEM_SolverCalculiX.svg) [Löser CalculiX (neuer Framework)](/FEM_SolverCalculiX/de "FEM SolverCalculiX/de"): Gleicht dem originalen Aufbau ![](/images/FEM_SolverCalculixCxxtools.svg) [Löser CalculiX Standard](/FEM_SolverCalculixCxxtools/de "FEM SolverCalculixCxxtools/de") mit zusätzlichen Prüfungen. Das Werkzeug war nicht fertiggestellt. Nicht vorhanden in 1.0 und neuer.

- ![](/images/FEM_CreateNodesSet.svg) [Knoten Satz](/FEM_CreateNodesSet/de "FEM CreateNodesSet/de"): Erstellt/definiert einen Knotensatz aus einem FEM-Netz. Das Werkzeug wurde nie fretiggestellt und konnte nicht verwendet werden. Nicht mehr vorhanden in 1.0 und neuer.

## Einstellungen

- ![](/images/Std_DlgPreferences.svg) [Einstellungen...](/FEM_Preferences/de "FEM Preferences/de"): Einstellungen, die in den FEM Werkzeugen verfügbar sind.

## Information

Die folgenden Seiten erläutern verschiedene Themen des FEM Arbeitsbereichs.

[FEM Installieren](/FEM_Install/de "FEM Install/de"): eine detaillierte Beschreibung, wie die im Arbeitsbereich verwendeten externen Programme eingerichtet werden.

[FEM Geometry Preparation and Meshing](/FEM_Geometry_Preparation_and_Meshing "FEM Geometry Preparation and Meshing"): Tipps bezüglich Geometrievorbereitung für FEM und Netzerstellung (engl.).

[FEM Netz](/FEM_Mesh/de "FEM Mesh/de"): Einzelheiten zu Netzen im Arbeitsbereich FEM.

[FEM Löser](/FEM_Solver/de "FEM Solver/de"): weitere Informationen über die verschiedenen im Arbeitsbereich verfügbaren und zukünftig einsetzbaren Löser.

[FEM CalculiX](/FEM_CalculiX/de "FEM CalculiX/de"): weitere Informationen zu CalculiX, dem Standard Löser, der im Arbeitsbereich für die Strukturanalyse verwendet wird.

[FEM Beton](/FEM_Concrete/de "FEM Concrete/de"): interessante Informationen zum Thema Simulation von Betonstrukturen.

## Tutorien

Tutorium 1: [FEM CalculiX Cantilever 3D](/FEM_CalculiX_Cantilever_3D/de "FEM CalculiX Cantilever 3D/de"); grundlegende, einfach unterstützte Strahlanalyse.

Tutorium 2: [FEM Tutorium](/FEM_tutorial/de "FEM tutorial/de"); einfache Spannungsanalyse einer Struktur.

Tutorium 3: [FEM Tutorium Python](/FEM_Tutorial_Python/de "FEM Tutorial Python/de"); einrichten des Cantilever Beispiels vollständig durch Skripting in Python, einschließlich des Netzes.

Tutorium 4: [FEM Scherung eines Verbundwerkstoffblocks](/FEM_Shear_of_a_Composite_Block/de "FEM Shear of a Composite Block/de"); siehe die Verformung eines Blocks, der aus zwei Materialien besteht.

Tutorium 5: [Transiente FEM Analyse](/Transient_FEM_analysis/de "Transient FEM analysis/de")

Tutorium 6: [Nachbearbeitung von FEM-Ergebnissen mit Paraview](/Post-Processing_of_FEM_Results_with_Paraview/de "Post-Processing of FEM Results with Paraview/de")

Tutorium 7: [FEM Beispiel Kapazität Zweier Kugeln](/FEM_Example_Capacitance_Two_Balls/de "FEM Example Capacitance Two Balls/de"); Elmer's GUI-Tutorium 6 "Electrostatics Capacitance Two Balls", verwendet FEM-Beispiele.

Gekoppelte Tutorien zur thermomechanischen Analyse von [openSIM](https://opensimsa.github.io/training.html).

Videotutorium 1: [FEM Video für Anfänger](https://forum.freecadweb.org/viewtopic.php?f=18&t=20499#p158353) (einschließlich YouTube-Link)

Videotutorium 2: [FEM Video für Anfänger](https://forum.freecadweb.org/viewtopic.php?f=18&t=20499&start=10#p162321) (einschließlich YouTube-Link)

Viele Videotutorials: [anisim Open Source Engineering Software](https://www.youtube.com/channel/UCnvFCm2BbXOVI3ObfXcxXhw) (in Deutsch)

## Erweiterung des Arbeitsbereichs FEM

Der FEM Arbeitsbereich wird ständig weiterentwickelt. Ein Ziel des Projekts ist es, Wege zu finden, wie man einfach mit verschiedenen FEM Lösern interagieren kann, so dass der Endanwender den Prozess der Erstellung, Vernetzung, Simulation und Optimierung eines Konstruktionsproblems in FreeCAD rationalisieren kann.

Die folgenden Information richtet sich an fortgeschrittene Anwender und Entwickler, die den FEM Arbeitsbereich auf unterschiedliche Weise erweitern möchten. Vertrautheit mit C++ und Python werden vorausgesetzt, ebenso wie einige Kenntnisse des in FreeCAD verwendeten "Dokumentobjekt" Systems; diese Informationen sind im [Verteiler für Intensivnutzer](/Power_users_hub/de "Power users hub/de") und im [Verteiler für Entwickler](/Developer_hub/de "Developer hub/de") verfügbar. Bitte beachte, dass einige Artikel zu alt und damit veraltet sein können, da sich FreeCAD in der aktiven Entwicklung befindet. Die aktuellsten Informationen werden in den [FreeCAD Foren](https://forum.freecadweb.org/index.php), im Bereich Entwicklung, diskutiert. Für FEM Diskussionen, Ratschläge oder Unerstützung bei der Erweiterung des Arbeitsbereichs sollte sich der Leser auf das [FEM Unterforum](https://forum.freecadweb.org/viewforum.php?f=18) beziehen.

In den folgenden Artikeln wird erläutert, wie der Arbeitsbereich erweitert werden kann, z.B. durch Hinzufügen neuer Arten von Randbedingungen (Beschränkungen) oder Gleichungen.

- [FEM-Modul erweitern](/Extend_FEM_Module/de "Extend FEM Module/de")
- [Einarbeitung FEM-Entwickler](/Onboarding_FEM_Devs/de "Onboarding FEM Devs/de") versucht neuen Entwicklern eine Orientierung zu geben, wie man zum Arbeitsbereich FEM beitragen kann.
- [Tutorium FEM-Beschränkungen hinzufügen](/Add_FEM_Constraint_Tutorial/de "Add FEM Constraint Tutorial/de")
- [Tutorium FEM-Gleichungen hinzufügen](/Add_FEM_Equation_Tutorial/de "Add FEM Equation Tutorial/de")

Ein Entwicklerhandbuch wurde geschrieben, um Power-Usern zu helfen, die komplexe FreeCAD-Codebasis und die Interaktionen zwischen den Kernelementen und den einzelnen Workbenches zu verstehen. Das Buch wird bei github gehostet, so dass mehrere Benutzer dazu beitragen und es auf dem neuesten Stand halten können.

- [Frühe Vorschau des ebook: Anleitung für Modulentwickler zur FreeCAD-Quelle](https://forum.freecadweb.org/viewtopic.php?t=17581) (Forum-Thread)
- [FreeCAD Mod Dev Guide](https://github.com/qingfengxia/FreeCAD_Mod_Dev_Guide) (github repository)

## Erweitern der FEM Arbeitsbereichsdokumentation

- Weitere Informationen zur Erweiterung oder fehlenden FEM Dokumentation kann im Forum gefunden werden: [Fehlende FEM Dokumentation im Wiki](https://forum.freecadweb.org/viewtopic.php?f=18&t=20823)

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_Workbench/de&oldid=1568050>"
