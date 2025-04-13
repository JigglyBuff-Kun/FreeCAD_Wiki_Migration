---
title: Units
---
Aquí hay algunos enlaces con información sobre unidades:

* [Sistema Internacional de Unidades SI](http://es.wikipedia.org/wiki/Sistema_Internacional_de_Unidades)
* [Sistema Británico](http://en.wikipedia.org/wiki/Imperial_units)
* [Unidades derivadas del Sistema Internacional](http://es.wikipedia.org/wiki/Unidades_derivadas_del_Sistema_Internacional)
* [Unidades angulares](http://es.wikipedia.org/wiki/Grado_sexagesimal)

## Ejemplos

```
# -- some examples of the FreeCAD unit translation system --
# make a shortcut for the examples
pq = FreeCAD.Units.parseQuantity

# 10 meters in internal numbers
pq('10 m')

# doing math
pq('3/8 in')

# combined stuff
pq('100 km/h')

# transfer to other units
pq('100 km/h') / pq('m/s')

# derived units (Ohm)
pq('m^2*kg*s^-3*A^-2')

# or
pq('(m^2*kg)/(A^2*s^3)')

# angles 
pq('2*pi rad') # full circle

# as gon
pq('2*pi rad') / pq('gon')

# more imperial
pq('1ft (3+7/16)in')

# or 
pq('1\' (3+7/16)"') # the ' we have to escape because of python

# trigonometry
pq('sin(pi)')

# Using translated units as parameters, this command will create a 50.8mm x 20mm x 10mm box
b = Part.makeBox(pq('2in'), pq('2m')/100, 10)

```

## Supported units

## Unidades soportadas

Aquí están las unidades definidas en FreeCAD hasta el momento. Es sencillo añadir una nueva unidad definida por el usuario. La definición está [Aquí](http://free-cad.svn.sourceforge.net/viewvc/free-cad/trunk/src/Base/UnitsApi.l?view=markup).

## See Also

* The [Expressions](/Expressions#Units "Expressions") page for a list of all known units.
* The documentation of [Quantity](/Quantity "Quantity").
* The [Std UnitsCalculator](/Std_UnitsCalculator "Std UnitsCalculator") tool.

Retrieved from "<http://wiki.freecad.org/index.php?title=Units/es&oldid=1515242>"