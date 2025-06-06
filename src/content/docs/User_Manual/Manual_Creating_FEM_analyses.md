---
title: Creating FEM analyses
---

[Finite Element Method](https://en.wikipedia.org/wiki/Finite_element_method) (FEM) is a powerful computational technique used to solve complex problems in engineering, physics, and applied mathematics. It works by breaking down a large, complex object or structure into smaller, simpler parts called finite elements. These elements are analyzed individually, and their behavior is combined to predict how the entire structure will respond to external influences, such as forces, heat, or vibrations.

FEM is widely used in fields like structural engineering, mechanical design, aerodynamics, and electromagnetism to simulate how objects deform under stress, how heat flows through materials, and how electromagnetic fields interact with different objects. By providing detailed insights into these interactions, FEM allows engineers and designers to optimize their products for performance, safety, and efficiency without needing physical prototypes.

Obtaining such simulations in FreeCAD is done using the ![](/images/Workbench_FEM.svg) [FEM](/FEM_Workbench "FEM Workbench") Workbench, which is specifically designed for performing finite element analysis (FEA). It provides a comprehensive set of tools for preparing the model, assigning material properties, meshing, and running simulations. The FEM Workbench is versatile, supporting a wide range of simulations such as structural, thermal, and dynamic analyses, with solvers like [CalculiX](https://www.calculix.de/) and others available.

This workbench allows for the integration of other FreeCAD workbenches, enabling seamless model preparation and analysis. It also provides powerful post-processing tools to visualize and interpret simulation results, such as stress, deformation, and thermal distributions. The workflow follows these steps:

- **Preparing the Geometry**: The model must be simplified or optimized for FEM analysis. This often includes removing unnecessary details or features that don't contribute to the simulation but could make it computationally expensive. You can use tools from other workbenches, like ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench "PartDesign Workbench") or ![](/images/Workbench_Part.svg) [Part](/Part_Workbench "Part Workbench"), to prepare your 3D geometry. The [FEM Geometry Preparation and Meshing](/FEM_Geometry_Preparation_and_Meshing "FEM Geometry Preparation and Meshing") page describes how to properly prepare the geometry for use in the FEM Workbench.

- **Assigning Material Properties**: Material definitions are critical for accurate simulations. Properties such as Young's modulus, Poisson’s ratio, and density are assigned for structural simulations, or thermal conductivity and specific heat capacity for thermal analysis. Materials can be selected from FreeCAD’s material library or customized as needed.

- **Meshing**: Meshing divides the geometry into finite elements, allowing the solver to analyze the object. Mesh quality is crucial, as finer meshes result in more accurate simulations but require more computational power. Tools are available to refine the mesh locally, focusing on areas where stress or deformation is expected to be higher. Check [Meshing basics](/FEM_Geometry_Preparation_and_Meshing#Meshing_basics "FEM Geometry Preparation and Meshing") for more information.

- **Applying Loads and Constraints**: In this step, physical conditions such as forces, pressures, moments, or thermal loads are applied to the model. Boundary conditions are also defined, such as fixing points, applying symmetry constraints, or restricting movement, depending on the scenario being simulated.

- **Running the Solver**: Once the setup is complete, the solver calculates the model's response to the applied conditions. Solvers like CalculiX compute displacements, stresses, and other quantities, depending on the type of analysis performed. The process can take varying amounts of time depending on the mesh density and model complexity.

- **Post-Processing**: After the simulation, results are visualized using tools in the FEM Workbench. Stress, strain, and displacement fields are represented as color maps and deformation plots can be generated. These visualizations allow for a thorough analysis of the model's performance, highlighting areas of high stress or deformation.

![](/images/FreeCAD_FEMBeam.png)

### Preparing FreeCAD

In this section, we will demonstrate the general FEM analysis procedure through a simple example. While the topic of FEM is vast, we will focus on a straightforward geometry: a cantilever beam. Our objective is to determine the maximum vertical displacement of this beam under an applied load, and we will compare the numerical results with the analytical solution. In computational mechanics, verifying numerical results against experimental data or analytical solutions is essential to ensure the accuracy and reliability of the simulation. Additionally, we will be using packages that are already included in the FreeCAD installation, so no additional installations will be required for this analysis.

### Preparing the geometry

First, we will create our simple geometry. For this, we will be using the ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench "PartDesign Workbench") workbench.

- Create a new document and go to the ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench "PartDesign Workbench") workbench.
- Press on ![](/images/Sketcher_NewSketch.svg) [NewSketch](/Sketcher_NewSketch "Sketcher NewSketch") to create a new sketch on the YZ plane.
- Create a ![](/images/Sketcher_CreateRectangle_Center.svg) [centered rectangle](/Sketcher_CreateRectangle_Center "Sketcher CreateRectangle Center") around the origin point.
  - Using the ![](/images/Sketcher_Dimension.svg) [Sketcher Dimension](/Sketcher_Dimension "Sketcher Dimension") set the vertical dimension to **20 mm** and the horizontal to **10 mm**
- Exit the sketch mode.
- By having selected our newly created sketch apply a ![](/images/PartDesign_Pad.svg) [padding](/PartDesign_Pad "PartDesign Pad") operation with a length of **1000 mm**.
- Our geometry is now ready. In this example, we’ve made the height (h) and width (b) of the beam much smaller than the length (L) to focus on how it bends. By doing this, we can make sure the beam behaves like a typical long, thin object where bending is the main effect when a force is applied. This setup also makes it easier to compare our results with simple formulas we can calculate by hand.

![](/images/FreeCAD_FEM_BeamGeometry.png)

### Creating the analysis

- We are now ready to start a FEM analysis. Let's switch to the ![](/images/Workbench_FEM.svg) [FEM workbench](/FEM_Workbench "FEM Workbench")
- Press the ![](/images/FEM_Analysis.svg) [New Analysis](/FEM_Analysis "FEM Analysis")
- A new analysis will be created and a settings panel will be opened. The **Create Analysis** button sets up the framework for running a finite element analysis. It creates an analysis container that organizes key elements such as the mesh, material properties, constraints (e.g., fixed points), applied loads, and the solver. This button essentially prepares everything needed for the simulation, allowing for further steps like meshing and running the solver to analyze how the object behaves under the defined conditions.

- We will start by creating the **Mesh**. For this reason, having selected our body, press the ![](/images/FEM_MeshNetgenFromShape.svg) [FEM mesh from shape by Netgen](/FEM_MeshNetgenFromShape "FEM MeshNetgenFromShape") button. This option uses the Netgen mesher, an open-source tool used for creating high-quality tetrahedral meshes, particularly suited for complex geometries in finite element analysis.
- In the mesher parameters window we will keep things simple and only change the maximum cell size. The **Max Size** option defines the largest allowable size for the individual mesh elements. It controls how coarse or fine the mesh will be. A larger Max Size will result in a coarser mesh with fewer elements, which can speed up computations but may reduce accuracy. A smaller Max Size creates a finer mesh with more elements, increasing accuracy but also requiring more computational resources. Set this value to **10** and press **apply**.

![](/images/FreeCAD_FEM_MesherParameters.png)

- Our mesh is ready.

![](/images/FreeCAD_FEM_Mesh.png)

- We can now define the material to be applied to our mesh by pressing on the ![](/images/FEM_MaterialSolid.svg) [New Material](/FEM_MaterialSolid "FEM MaterialSolid") option. The choice of material is crucial in any analysis, as different materials with varying properties will behave differently under the same conditions. Factors like strength, elasticity, and density play a significant role in how a material responds to forces, pressures, or temperatures. Selecting the appropriate material ensures accurate simulation results, reflecting how the object would react in real-world scenarios.
- A task panel will open to allow us to choose a material. In the Material drop-down list, choose the **Steel-1C22** material, and press the **OK**.

![](/images/FreeCAD_FEM_material.png)

- The final step is to apply forces and constraints, translating the physical conditions into the FEM analysis. In this simple case, we have a beam that is fixed on one side (representing attachment to a wall), while the other side is free to move. A distributed force is applied along the entire length of the beam, simulating the load it experiences in real-world conditions. Let's start by specifying the face fixed into the wall and can therefore not move. Press the ![](/images/FEM_ConstraintFixed.svg) [Constraint fixed](/FEM_ConstraintFixed "FEM ConstraintFixed") button.
- Press on the **add** button and select the left face of our beam (the one at the origin). Click **Apply**. This face is now designated as unmovable:

![](/images/FreeCAD_FEM_Beam_FC.png)

- We will now add a distributed load on the top face, that could represent, for example, a massive weight being placed on the beam. For this, we will use a press on the![](/images/FEM_ConstraintForce.svg) [Force load](/FEM_ConstraintForce "FEM ConstraintForce") option.
- Click the top face of the beam, set the force to **1000 N** and click on the **reverse direction** option. Then press the **OK**. Our force is now applied:

![](/images/FreeCAD_FEM_Beam_force.png)

- We are now ready to start the calculation. Select the ![](/images/FEM_SolverCalculixCxxtools.svg) [Calculix solver](/FEM_SolverCalculixCxxtools "FEM SolverCalculixCxxtools").
- Select **Static** analysis and press on the **Write .inp file**to create the input file for CalculiX. Then press on the **Run CalculiX**. The simulation will now run.

![](/images/FreeCAD_FEM_Calculix.png)

- We can now look at the results. Click on the ![](/images/FEM_ResultShow.svg) [show results](/FEM_ResultShow "FEM ResultShow") option.
- Tick the **Displacement Z** option, which is the vertical coordinate for our case.
- You can see the minimum and maximum values for the vertical displacement. Based on the analysis the maximum vertical displacement is **-356.30 mm**. This matches our analytical solution of **-357.14 mm** well.
- You can move the slider next to it. You will be able to see the deformation growing as you apply more force:

![](/images/FreeCAD_FEM_Results.png)

The results displayed by the FEM workbench are of course currently not enough to perform real-life decisions about structures dimensioning and materials. However, they can already give precious information about how the forces flow through a structure, and which are the weak areas that will feel the most stress.

**Read more**

- [The FEM Workbench](/FEM_Workbench "FEM Workbench")
- [Installing required FEM components](/FEM_Install "FEM Install")
- [CalculiX](http://www.calculix.de)
- [NetGen](https://sourceforge.net/projects/netgen-mesher)

Retrieved from "<http://wiki.freecad.org/index.php?title=Manual:Creating_FEM_analyses/en&oldid=1541859>"
