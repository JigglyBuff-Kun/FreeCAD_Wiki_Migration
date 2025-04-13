---
title: Part Crea primitive
---

|                                                                                                            |
| ---------------------------------------------------------------------------------------------------------- |
| Part Primitive                                                                                             |
| Posizione nel menu                                                                                         |
| Parte → Crea primitive...                                                                                  |
| Ambiente                                                                                                   |
| [Part](/Part_Workbench/it "Part Workbench/it"), [OpenSCAD](/OpenSCAD_Workbench/it "OpenSCAD Workbench/it") |
| Avvio veloce                                                                                               |
| _Nessuno_                                                                                                  |
| Introdotto nella versione                                                                                  |
| -                                                                                                          |
| Vedere anche                                                                                               |
| [Crea forme](/Part_Builder/it "Part Builder/it")                                                           |
|                                                                                                            |

## Descrizione

Il comando ![](/images/Part_Primitives.svg) **Part Primitive** apre una finestra di dialogo per creare una o più primitive parametriche. Sono disponibili 16 tipi di oggetti primitivi.

![](/images/Part_Primitives_example.png)

Le primitive che possono essere create con il comando

## Utilizzo

### Crea

1. Esistono diversi modi per richiamare il comando:
   - Premere il pulsante ![](/images/Part_Primitives.svg) Crea primitive....
   - Selezionare l'opzione **Parte → ![](/images/Part_Primitives.svg) Crea primitive...** dal menu.
2. Si apre il pannello delle attività **Primitive geometriche**.
3. Selezionare un tipo primitivo dall'elenco a discesa.
4. Specificare le proprietà.
5. Premere il pulsante Crea.
6. Viene creato l'oggetto primitivo.
7. Tenere presente che il pannello delle azioni rimane aperto.
8. Facoltativamente creare primitive aggiuntive.
9. Premere il pulsante Chiudi per chiudere il pannello delle azioni e terminare il comando.

### Modifica

1. Fare doppio clic sull'oggetto primitivo nella [Vista ad albero](/Tree_view/it "Tree view/it").
2. Si apre il pannello delle azioni **Primitive geometriche**.
3. Modificare una o più proprietà.
4. L'oggetto viene aggiornato dinamicamente nella [vista 3D](/3D_view/it "3D view/it").
5. Premere il pulsante OK.

Le proprietà di una Part Primitiva possono anche essere modificate nel [Editor delle proprietà](/Property_editor/it "Property editor/it"), e il suo Dati**Placement** può anche essere modificato con lo strumento ![](/images/Std_TransformManip.svg) [Trasforma](/Std_TransformManip/it "Std TransformManip/it").

## Primitive geometriche

È possibile creare le seguenti primitive:

- ![](/images/Part_Plane.svg) [Piano](/Part_Plane/it "Part Plane/it"): Crea un piano.
- ![](/images/Part_Box.svg) [Cubo](/Part_Box/it "Part Box/it"): Crea un cuboide. Questo oggetto può essere creato anche con lo strumento [Cubo](/Part_Box/it "Part Box/it").
- ![](/images/Part_Cylinder.svg) [Cylinder](/Part_Cylinder/it "Part Cylinder/it"): Crea un cilindro. Questo oggetto può essere creato anche con lo strumento [Cylinder](/Part_Cylinder/it "Part Cylinder/it").
- ![](/images/Part_Cone.svg) [Cono](/Part_Cone/it "Part Cone/it"): Crea un cono. Questo oggetto può essere creato anche con lo strumento [Cono](/Part_Cone/it "Part Cone/it").
- ![](/images/Part_Sphere.svg) [Sfera](/Part_Sphere/it "Part Sphere/it"): Crea una sfera. Questo oggetto può essere creato anche con lo strumento [Sfera](/Part_Sphere/it "Part Sphere/it").
- ![](/images/Part_Ellipsoid.svg) [Ellissoide](/Part_Ellipsoid/it "Part Ellipsoid/it"): crea un ellissoide.
- ![](/images/Part_Torus.svg) [Toro](/Part_Torus/it "Part Torus/it"): Crea un toro. Questo oggetto può anche essere creato con lo strumento [Toro](/Part_Torus/it "Part Torus/it").
- ![](/images/Part_Prism.svg) [Prisma](/Part_Prism/it "Part Prism/it"): Crea un prisma.
- ![](/images/Part_Wedge.svg) [Cuneo](/Part_Wedge/it "Part Wedge/it"): crea un cuneo.
- ![](/images/Part_Helix.svg) [Elica](/Part_Helix/it "Part Helix/it"): crea un'elica.
- ![](/images/Part_Spiral.svg) [Spirale](/Part_Spiral/it "Part Spiral/it"): Crea una spirale.
- ![](/images/Part_Circle.svg) [Cerchio](/Part_Circle/it "Part Circle/it"): Crea un arco circolare.
- ![](/images/Part_Ellipse.svg) [Ellisse](/Part_Ellipse/it "Part Ellipse/it"): crea un arco ellittico.
- ![](/images/Part_Point.svg) [Punto](/Part_Point/it "Part Point/it"): Crea un punto.
- ![](/images/Part_Line.svg) [Linea](/Part_Line/it "Part Line/it"): Crea una linea.
- ![](/images/Part_RegularPolygon.svg) [Poligono regolare](/Part_RegularPolygon/it "Part RegularPolygon/it"): crea un poligono regolare.

## Note

- Il comando Part Primitive non può creare un ![](/images/Part_Tube.svg) [Part Tubo](/Part_Tube/it "Part Tube/it").

## Script

Vedere anche: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/), [Script di Part](/Part_scripting/it "Part scripting/it") e [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Esiste uno script Python per testare la creazione delle primitive. Può essere eseguito dalla [Console Python](/Python_console/it "Python console/it"):

```
import parttests.part_test_objects as pto
pto.create_test_file("example_file")

```

Questo script si trova nella directory di istallazione del programma, e può essere esaminato per vedere come le forme primitive sono create.

```
$INSTALL_DIR/Mod/Part/parttests/part_test_objects.py

```

Può essere utilizzato anche come input per il programma:

```
freecad $INSTALL_DIR/Mod/Part/parttests/part_test_objects.py

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Primitives/it&oldid=1468239>"
