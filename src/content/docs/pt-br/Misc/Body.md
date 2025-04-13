---
title: Corpo
---
## Introdução

No FreeCAD, o termo "[Corpo](/Body "Body")" normalmente se refere a um objeto [Corpo do PartDesign](/PartDesign_Body/pt-br "PartDesign Body/pt-br") (classe `PartDesign::Body`) definido pela [Bancada PartDesign](/PartDesign_Workbench/pt-br "PartDesign Workbench/pt-br"). Este é um objeto contêiner que pode conter [esboços 2D](/Sketch/pt-br "Sketch/pt-br") e [recursos geométricos 3D](/index.php?title=PartDesign_Feature/pt-br&action=edit&redlink=1 "PartDesign Feature/pt-br (page does not exist)") para construir uma forma sólida.

Consulte [Corpo do PartDesign](/PartDesign_Body/pt-br "PartDesign Body/pt-br") para mais informações sobre esse tipo de objeto.

## Utilização

1. Mude para a [Bancada PartDesign](/PartDesign_Workbench/pt-br "PartDesign Workbench/pt-br").
2. Pressione ![](/images/PartDesign_Body.svg) [Corpo do PartDesign](/PartDesign_Body/pt-br "PartDesign Body/pt-br").
3. Pressione ![](/images/PartDesign_NewSketch.svg) [Novo Esboço do PartDesign](/PartDesign_NewSketch/pt-br "PartDesign NewSketch/pt-br") para criar um novo [esboço](/Sketch/pt-br "Sketch/pt-br").
4. Crie um contorno fechado e, em seguida, use ![](/images/PartDesign_Pad.svg) [PartDesign Pad](/PartDesign_Pad/pt-br "PartDesign Pad/pt-br") para extrudir o esboço e criar um sólido inicial.
5. Adicione mais esboços e extrusões, e utilize outras ferramentas da [Bancada PartDesign](/PartDesign_Workbench/pt-br "PartDesign Workbench/pt-br") para modificar e transformar o sólido inicial.

Alternativamente, em vez de usar [esboços](/Sketch/pt-br "Sketch/pt-br"), você pode adicionar primitivas de [Recursos do PartDesign](/index.php?title=PartDesign_Feature/pt-br&action=edit&redlink=1 "PartDesign Feature/pt-br (page does not exist)"), como, por exemplo, um ![](/images/PartDesign_AdditiveBox.svg) [Caixa Aditiva do PartDesign](/PartDesign_AdditiveBox/pt-br "PartDesign AdditiveBox/pt-br"). É possível usar qualquer quantidade de recursos aditivos e subtrativos para criar um volume final.

## Notas

Um Corpo é necessário ao utilizar a [Bancada PartDesign](/PartDesign_Workbench/pt-br "PartDesign Workbench/pt-br") em uma metodologia de [edição de recursos](/Feature_editing/pt-br "Feature editing/pt-br").

Um Corpo não é necessário ao utilizar a [Bancada Part](/Part_Workbench/pt-br "Part Workbench/pt-br"), pois essa bancada utiliza um fluxo de trabalho baseado em [geometria sólida construtiva](/Constructive_solid_geometry/pt-br "Constructive solid geometry/pt-br"), que se fundamenta em [formas primitivas](/Part_Primitives/pt-br "Part Primitives/pt-br") e operações booleanas.

Retrieved from "<http://wiki.freecad.org/index.php?title=Body/pt-br&oldid=1515689>"