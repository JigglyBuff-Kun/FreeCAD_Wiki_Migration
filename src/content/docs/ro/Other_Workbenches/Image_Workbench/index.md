---
title: Atelier Imagine
---

:::caution
TheImage Workbenchis no longer included after version 0.20.Its functionality has been integrated inStd Base. SeeStd ImportandStd ViewLoadImage.
:::
![](/images/Workbench_Image.svg)

Image workbench icon

## Introducere

Atelierul Imagine [Image Workbench](/Image_Workbench "Image Workbench") gestionează diferite tipuri de [bitmap images](http://en.wikipedia.org/wiki/Raster_graphics) și vă permite să le deschideți în FreeCAD.

## Instrumente

- ![](/images/Image-import.svg) [Open](/Image_Open "Image Open"): open an image on a new viewport.
- ![](/images/Image-import-to-plane.svg) [Import to plane](/Image_CreateImagePlane "Image CreateImagePlane"): import an image to a plane in the 3D view.
- ![](/images/Image-scale.svg) [Scaling](/Image_Scaling "Image Scaling"): scale an image imported to a plane.

## Funcționalități

- Atelierul Imagine vă permite de asemenea să importați o imagine într-un plan spațial 3D al FreeCAD cu [Image Import](/index.php?title=Image_CreateImagePlane/ro&action=edit&redlink=1 "Image CreateImagePlane/ro (page does not exist)"), cu al doilea buton al atelierului Imagine.
- Imaginea importată poate fi atașată la o schiță a uneia dintre cele trei planuri (XY / XZ / YZ) cu ​​offset pozitiv sau negativ.
- Această funcție este disponibilă numai dacă ați deschis un document FreeCAD.
- The image can be moved in 3D-space by editing the placement in the [Property editor](/Property_editor "Property editor").
- The major use is tracing over the image, in order to generate a new part while using the image as a template.
- The image is imported with 1 pixel = 1mm.

```
 * The recommendation is to have the imported image at a reasonable resolution.

```

- Imaginea poate fi scalată prin editarea valorilor "XSize" și "YSize" în[Property editor](/Property_editor "Property editor").
- Imaginea poate fi mutată prin editarea valorilor X/Y/Z-în [Property editor](/Property_editor "Property editor").
- Imaginea poate fi rotită în jurul unei axe utilizând [Property editor](/Property_editor "Property editor").

## Workflow

## Flux de lucru

O utilizare importantă a acestui atelier de lucru este urmărirea imaginii, cu ajutorul instrumentelor [Draft](/Draft_Workbench "Draft Workbench") sau [Sketcher](/Sketcher_Workbench "Sketcher Workbench"), pentru a genera un corp solid bazat pe contururile imaginii.

**Tip:**  
Urmărirea cu elemente de schiță peste o imagine funcționează cel mai bine dacă imaginea are o mică (negativă) decalare față de planul de schiță.

Puteți seta o decalare de -0,1 mm la import sau mai târziu, prin editarea destinației de plasare a imaginii.

Decalajul imaginii poate fi setat în timpul importului sau poate fi modificat mai târziu prin proprietățile sale.

Retrieved from "<http://wiki.freecad.org/index.php?title=Image_Workbench/ro&oldid=1295076>"
