---
title: Mesh Solido regolare
---

|                                                |
| ---------------------------------------------- |
| Solido regolare                                |
| Posizione nel menu                             |
| Mesh → Solido regolare...                      |
| Ambiente                                       |
| [Mesh](/Mesh_Workbench/it "Mesh Workbench/it") |
| Avvio veloce                                   |
| _Nessuno_                                      |
| Introdotto nella versione                      |
| -                                              |
| Vedere anche                                   |
| _Nessuno_                                      |
|                                                |

## Descrizione

Il comando **Solido regolare** crea un oggetto mesh solido parametrico regolare.

## Utilizzo

1. Selezionare l'opzione **Mesh → ![](/images/Mesh_BuildRegularSolid.svg) Solido regolare...** dale menu.
2. Si apre la finestra di dialogo **Solido regolare**.
3. Prima selezionare un tipo di oggetto mesh dall'elenco a discesa:
   - **![](/images/Mesh_Cube.svg) Cubo**
   - **![](/images/Mesh_Cylinder.svg) Cilindro**
   - **![](/images/Mesh_Cone.svg) Cono**
   - **![](/images/Mesh_Sphere.svg) Sfera**
   - **![](/images/Mesh_Ellipsoid.svg) Ellissoide**
   - **![](/images/Mesh_Torus.svg) Toro**
4. Specificare le impostazioni richieste. Le impostazioni disponibili dipendono dal tipo di oggetto mesh. Vedere [Proprietà](#Proprietà).
5. Per le mesh con superfici curve: un valore **Campionatura** più alto produce una mesh più fine.
6. Premere il pulsante Crea per creare l'oggetto mesh.
7. Se necessario, creare più oggetti mesh.
8. Premere il pulsante Chiudi per chiudere la finestra di dialogo e terminare il comando.

## Note

- Gli oggetti mesh creati con questo comando sono parametrici. Ogni volta che vengono ricalcolati, ad esempio dopo aver modificato uno dei loro parametri, viene ricostruita la loro mesh. Ciò significa che manipolarli con comandi come [Affinamento](/Mesh_RemeshGmsh/it "Mesh RemeshGmsh/it"), [Scala](/Mesh_Scale/it "Mesh Scale/it") ecc. Di solito non ha senso.

## Proprietà

Mesh objects created with this command inherit all [Mesh Feature](/Mesh_Feature "Mesh Feature") properties. In addition each mesh object type has a number of properties to control its parametric behavior:

### Cube

#### Data

Cube

- Dati**Height** (`FloatConstraint`): the height of the cube.
- Dati**Length** (`FloatConstraint`): the length of the cube.
- Dati**Width** (`FloatConstraint`): the width of the cube.

### Cylinder

#### Data

Base

- Dati**Closed** (`Bool`): if set to `false`, the planar ends of the cylinder are left open.
- Dati**Edge Length** (`FloatConstraint`): the edge length of the faces in the mesh.
- Dati**Length** (`FloatConstraint`): the length of the cylinder.
- Dati**Radius** (`FloatConstraint`): the radius of the cylinder.
- Dati**Sampling** (`IntegerConstraint`): the number of faces along the curved surface.

### Cone

#### Data

Base

- Dati**Closed** (`Bool`): if set to `false`, the planar end(s) of the cone are left open.
- Dati**Edge Length** (`FloatConstraint`): the edge length of the faces in the mesh.
- Dati**Length** (`FloatConstraint`): the length of the cone.
- Dati**Radius 1** (`FloatConstraint`): the first radius of the cone. Can be `0`.
- Dati**Radius 2** (`FloatConstraint`): the second radius of the cone. Can be `0`.
- Dati**Sampling** (`IntegerConstraint`): the number of faces along the curved surface.

### Sphere

#### Data

Base

- Dati**Radius** (`FloatConstraint`): the radius of the sphere.
- Dati**Sampling** (`IntegerConstraint`): the number of faces along both directions of the curved surface.

### Ellipsoid

#### Data

Base

- Dati**Radius 1** (`FloatConstraint`): the first radius of the ellipsoid.
- Dati**Radius 2** (`FloatConstraint`): the second radius of the ellipsoid.
- Dati**Sampling** (`IntegerConstraint`): the number of faces along both directions of the curved surface.

### Torus

#### Data

Base

- Dati**Radius 1** (`FloatConstraint`): the first (main) radius the torus.
- Dati**Radius 2** (`FloatConstraint`): the second radius of the torus.
- Dati**Sampling** (`IntegerConstraint`): the number of faces along both directions of the curved surface.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_BuildRegularSolid/it&oldid=1332911>"
