---
title: CfdOF Fluid Properties
---

:::caution
This documentation is a work in progress. Please don't mark it as translatable since it will change in the next hours and days.
:::

|                                             |
| ------------------------------------------- |
| CfdOF Fluid Properties                      |
| Menu location                               |
| CfdOF → Add Fluid Properties‏‎              |
| Workbenches                                 |
| [CfdOF](/CfdOF_Workbench "CfdOF Workbench") |
| Default shortcut                            |
| _None_                                      |
| Introduced in version                       |
| -                                           |
| See also                                    |
| _None_                                      |
|                                             |

## Description

The Fluid Properties dialogue panel is used to input the properties of the fluids to be used in the simulation. These can be manually imputed, or selected from a fluid library. When a Single Phase Physics Model has been selected, only one fluid can be added. In the case of a Multiphase Physics Model, multiple fluids may be added.

## Usage

A Fluid Property is added to the tree when the [Analysis Container](/CfdOF_Analysis "CfdOF Analysis") is created.

The Fluid Properties button and Fluid Properties menu item behave differently for Single Phase and Multiphase simulations.

### Single Phase

There are several ways to open the Fluid Properties dialogue panel that was created in the [Analysis Container](/CfdOF_Analysis "CfdOF Analysis") :

: _ Press the ![](/src/assets/images/CfdOF_Fluid_Properties.svg) Fluid Properties button.
_ Select the **CfdOF → ![](/src/assets/images/CfdOF_Fluid_Properties.svg) Add Fluid_Properties‏‎** option from the menu. \* Click on the ![](/src/assets/images/CfdOF_Fluid_Properties.svg) **Fluid Properties** in the tree.

### Multiphase

There are several ways to add additional Fluid Properties to the [Analysis Container](/CfdOF_Analysis "CfdOF Analysis"):

: _ Press the ![](/src/assets/images/CfdOF_Fluid_Properties.svg) Fluid Properties button.
_ Select the **CfdOF → ![](/src/assets/images/CfdOF_Fluid_Properties.svg) Add Fluid_Properties‏‎** option from the menu.

To open the Fluid Properties dialogue panel for the fluid you wish to edit:

: \* Click on the ![](/src/assets/images/CfdOF_Fluid_Properties.svg) **[Material name]** in the tree.

## Options

The options selected in the [Physics Model](/CfdOF_Physics_Model "CfdOF Physics Model") dictate the inputs required in the Fluid Properties dialogue panel. The image below shows the Fluid Properties dialogue panel for an non-isothermal simulation.

![CfdOF Fluid Properties Dialog Panel](/src/assets/images/CfdOF_DialogFluidProperties.png)

CfdOF Properties Dialog Panel

### Material name

The input box allows the fluid name to be entered. A fluid selected from the Predefined fluid library will automatically populate this input box, but can be overridden. The name entered will appear in the [Analysis Container](/CfdOF_Analysis "CfdOF Analysis") tree.

### Fluid properties

- Isothermal fluids

: The physical properties of an Isothermal fluid will not change during the simulation and therefore only data for a single temperature point is required.

    * Input box **Cp**.

    :   Specific Heat Capacity at constant pressure.
    :   This is required when simulating non-isothermal, single phase fluid, under Steady State. Cp is the amount of energy required to raise the temperature of 1 kg of fluid by one degree Kelvin, in an isobaric process. As this is under Steady State, only a single data point is required at the conditions that the simulation is occurring.

: \* Input box **Density**.

    :   Mass per unit of volume of a material/fluid.

: \* Input box **DynamicViscosity**.

    :   A measure of a fluids resistance to deformation at a given rate and sometimes referred to as the absolute viscosity. The dynamic viscosity divided by the fluid's density gives the kinematic viscosity.

- Non-isothermal

: \* Optionally select **Compressible**.

    :   When a non-isothermal simulation is selected, in the [Physics Model](/CfdOF_Physics_Model "CfdOF Physics Model"), the **Compressible** checkbox becomes visible. If unchecked, incompressible fluids can be simulated within a compressible solver, if the compressibility plays no significant role.

: \* Input box **Molar Mass**.

    :   The Molar Mass or Molecular Weight of the fluid.

: \* **Polynomials**

    :   Temperature-polynomials are used when simulating non-isothermal, incompressible fluids. The simulation occurs over a temperature range and the fluid property data must be determined over the range.

: : The Polynomial provides a means of inputting coefficients for a temperature-polynomial, in the format:

        :   Temperature-polynomial = a + b × T + c × T2 + d × T 3
    :   where a, b, c and d are coefficients and T is Temperature. The polynomials will accept up to 8 coefficients. Enter each coefficient, separated by a space, for the temperature-polynomial, starting with the constant followed by the higher powers.

        :   e.g. Cp = 9850.69 -48.6714xT +0.13736T2 -0.000127063xT3
    :   would be entered as:

        :   9850.69 -48.6714 0.13736 -0.000127063

: : \* Input box **CpPolynomial**.

        :   Temperature-polynomial for Specific Heat Capacity at constant pressure.

: : \* Input box **DensityPolynomial**.

        :   Temperature-polynomial for Density.

: : \* Input box **DynamicViscosityPolynomial**.

        :   Temperature-polynomial for Dynamic Viscosity.

: : \* Input box **ThermalConductivityPolynomial**.

        :   Temperature-polynomial for Thermal Conductivity.

: \* **Sutherland**

    :   The Sutherland formula is used when simulating non-isothermal, compressible fluids. It is used for approximating the viscosity of gases, at different temperatures. It is used for single-component gases at low pressure, however can also be used for Air, as the main components of Nitrogen and Oxygen have very similar properties.

: : \* Input box **SutherlandRefTemperature**.

        :   The temperature, T0, at which the **SutherlandRefViscosity** was determined.

: : \* Input box **SutherlandRefViscosity**.

        :   The empirical reference viscosity, μ0, determined at the **SutherlandRefTemperature**.

: : \* Input box **SutherlandTemperature**.

        :   Sometimes referred to as the Sutherland constant, S, is an effective temperature, which is characteristic of the gas.

### Predefined fluid library

- Drop-down box

: The fluid properties for a number of components exist within the **Predefined fluid library**. Selecting a fluid from the drop-down, will automatically populate the **Fluid properties** input boxes above

- Reference data

: Below the drop-down, the reference conditions for the fluid selected are given. e.g. for incompressible Seawater it states "Sea water (30%) 20 Degrees Celsius 1 atm".

## Notes

- The input boxes and options available in the Fluid Properties dialogue panel are dependent on the options selected in the [Physics Model](/CfdOF_Physics_Model "CfdOF Physics Model") dialogue panel. To assist with workflow, we recommend that you complete the [Physics Model](/CfdOF_Physics_Model "CfdOF Physics Model") dialogue panel before completing this dialogue panel.

Retrieved from "<http://wiki.freecad.org/index.php?title=CfdOF_Fluid_Properties&oldid=1497353>"
