---
title: Bancada de trabalho Part
---

![](/images/Workbench_Part.svg)

Ícone da bancada de trabalho Part

## Introdução

As capacidades de modelagem sólida do FreeCAD são baseadas em [OpenCASCADE Technology](/OpenCASCADE/pt-br "OpenCASCADE/pt-br")(OCCT) kernel, um sistema de CAD de nível profissional que caracteriza a criação e a manipulação avançadas da geometria 3D. A ![](/images/Workbench_Part.svg) Bancada de trabalho Part é uma camada situada em cima das bibliotecas OCCT, que dá ao usuário acesso às primitivas e funções geométricas da OCCT. Essencialmente todas as funções de desenho 2D e 3D em cada bancada de trabalho (![](/images/Workbench_Draft.svg) [Draft](/Draft_Workbench/pt-br "Draft Workbench/pt-br"), ![](/images/Workbench_Sketcher.svg) [Sketcher](/Sketcher_Workbench/pt-br "Sketcher Workbench/pt-br"), ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/pt-br "PartDesign Workbench/pt-br"), etc.), são baseadas nestas funções expostas pela Bancada de trabalho Part. Portanto, a Bancada de trabalho Part é considerada o componente central das capacidades de modelagem do FreeCAD.

The Part Workbench can also create objects that are not solids, such as faces, shells, and objects with only edges or vertices. It also provides a variety of general purpose tools for geometry manipulation, geometry validation, and making copies.

The ![](/images/Workbench_PartDesign.svg) [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") uses an alternative workflow for creating solids. For a detailed discussion of the Part Workbench versus the Part Design Workbench see [Part and Part Design](/Part_and_PartDesign "Part and PartDesign").

![](/images/Part_Workbench_Example.jpg)

## Ferramentas

### Solids toolbar

- ![](/images/Part_Box.svg) [Cubo](/Part_Box/pt-br "Part Box/pt-br"): Cria um cubo sólido especificando suas dimensões.

- ![](/images/Part_Cylinder.svg) [Cilindro](/Part_Cylinder/pt-br "Part Cylinder/pt-br"): Cria um cilindro sólido especificando suas dimensões.

- ![](/images/Part_Sphere.svg) [Esfera](/Part_Sphere/pt-br "Part Sphere/pt-br"): Cria uma esfera sólida especificando suas dimensões.

- ![](/images/Part_Cone.svg) [Cone](/Part_Cone/pt-br "Part Cone/pt-br"): Cria um cone sólido especificando suas dimensões.

- ![](/images/Part_Torus.svg) [Toro](/Part_Torus "Part Torus"): Cria um toro.

- ![](/images/Part_Tube.svg) [Tubo](/Part_Tube "Part Tube"): Cria um tubo.

- ![](/images/Part_Primitives.svg) [Criar primitivas...](/Part_Primitives "Part Primitives"): Uma ferramenta para criar uma das seguintes primitivas:

- ![](/images/Part_Plane.svg) [Plano](/Part_Plane "Part Plane"): Cria um plano.

- ![](/images/Part_Box.svg) [Caixa](/Part_Box "Part Box"): Cria uma caixa. Este objeto também pode ser criado com a ferramenta [Cubo](/Part_Box "Part Box").

- ![](/images/Part_Cylinder.svg) [Cilindro](/Part_Cylinder "Part Cylinder"): Cria um cilindro. Este objeto também pode ser criado com a ferramenta [Cilindro](/Part_Cylinder "Part Cylinder").

- ![](/images/Part_Cone.svg) [Cone](/Part_Cone "Part Cone"): Cria um cone. Este objeto também pode ser criado com a ferramenta [Cone](/Part_Cone "Part Cone").

- ![](/images/Part_Sphere.svg) [Esfera](/Part_Sphere "Part Sphere"): Cria uma esfera. Este objeto também pode ser criado com a ferramenta [Esfera](/Part_Sphere "Part Sphere").

- ![](/images/Part_Ellipsoid.svg) [Elipsóide](/Part_Ellipsoid "Part Ellipsoid"): Cria um elipsóide.

- ![](/images/Part_Torus.svg) [Toro](/Part_Torus "Part Torus"): Cria um toro. Este objeto também pode ser criado com a ferramenta [Toro](/Part_Torus "Part Torus").

- ![](/images/Part_Prism.svg) [Prisma](/Part_Prism "Part Prism"): Cria um prisma.

- ![](/images/Part_Wedge.svg) [Cunha](/Part_Wedge "Part Wedge"): Cria uma cunha.

- ![](/images/Part_Helix.svg) [Helix](/Part_Helix "Part Helix"): Cria uma hélice.

- ![](/images/Part_Spiral.svg) [Espiral](/Part_Spiral "Part Spiral"): Cria uma espiral.

- ![](/images/Part_Circle.svg) [Círculo](/Part_Circle "Part Circle"): Cria um arco circular.

- ![](/images/Part_Ellipse.svg) [Elipse](/Part_Ellipse "Part Ellipse"): Cria um arco elíptico.

- ![](/images/Part_Point.svg) [Ponto](/Part_Point "Part Point"): Cria um ponto.

- ![](/images/Part_Line.svg) [Linha](/Part_Line "Part Line"): Cria uma linha.

- ![](/images/Part_RegularPolygon.svg) [Polígono regular](/Part_RegularPolygon "Part RegularPolygon"): Cria um polígono regular.

- ![](/images/Part_Builder.svg) [Construtor de formas...](/Part_Builder "Part Builder"): Cria formas a partir de vários formas primitivas.

### Part tools toolbar

- ![](/images/Sketcher_NewSketch.svg) [Create sketch](/Sketcher_NewSketch "Sketcher NewSketch"): Creates a new sketch and opens the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog") to edit it.

- ![](/images/Part_Extrude.svg) [Extrusão](/Part_Extrude/pt-br "Part Extrude/pt-br"): Faz a extrusão de faces planas de um objeto.

- ![](/images/Part_Revolve.svg) [Revolver](/Part_Revolve/pt-br "Part Revolve/pt-br"): Cria um sólido através da revolução de outro objeto (não sólido) ao redor de um eixo.

- ![](/images/Part_Mirror.svg) [Espelho](/Part_Mirror/pt-br "Part Mirror/pt-br"): Cria uma peça simétrica de uma selecionada através de um plano de simetria.

- ![](/images/Part_Scale.svg) [Scale](/Part_Scale "Part Scale"): Scales one or more shapes. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Part_Fillet.svg) [Filete](/Part_Fillet/pt-br "Part Fillet/pt-br"): Arredonda as arestas de um objeto.

- ![](/images/Part_Chamfer.svg) [Chanfro](/Part_Chamfer/pt-br "Part Chamfer/pt-br"): Cria um chanfro nas arestas de um objeto.

- ![](/images/Part_MakeFace.svg) [Fazer face a partir de fios](/Part_MakeFace/pt-br "Part MakeFace/pt-br"): Faz uma face a partir de um conjunto de fios (contornos).

- ![](/images/Part_RuledSurface.svg) [Superfície regrada](/Part_RuledSurface/pt-br "Part RuledSurface/pt-br"): Cria uma superfície a partir de duas arestas ou dois arames.

- ![](/images/Part_Loft.svg) [Loft](/Part_Loft/pt-br "Part Loft/pt-br"): Cria uma superfície (ou sólido) de um perfil a outro.

- ![](/images/Part_Sweep.svg) [Varredura](/Part_Sweep/pt-br "Part Sweep/pt-br"): Varre um ou mais perfis ao longo de um caminho.

- ![](/images/Part_Section.svg) [Seção](/Part_Section/pt-br "Part Section/pt-br"): Cria uma seção cruzando um objeto com um plano de seção.

- ![](/images/Part_CrossSections.svg) [Cruzamentos...](/Part_CrossSections/pt-br "Part CrossSections/pt-br"): Cria uma ou mais seções transversais através de um objeto.

- ![](/images/Part_Offset.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Deslocamento:

- ![](/images/Part_Offset.svg) [Deslocamento 3D](/Part_Offset/pt-br "Part Offset/pt-br"): Constrói uma forma paralela a uma certa distância da forma original.

- ![](/images/Part_Offset2D.svg) [Deslocamento 2D](/Part_Offset2D/pt-br "Part Offset2D/pt-br"): Constrói um arame paralelo a uma certa distância do arame original ou amplia/encolhe uma face plana.

- ![](/images/Part_Thickness.svg) [Espessura](/Part_Thickness/pt-br "Part Thickness/pt-br"): Utilitário para gerar uma espessura em um sólido ao selecionar faces.

- ![](/images/Part_ProjectionOnSurface.svg) [Projeção na superfície](/Part_ProjectionOnSurface/pt-br "Part ProjectionOnSurface/pt-br"): Projeta um logotipo, texto ou qualquer face, fio ou borda em uma superfície.

- ![](/images/Part_FaceColors.svg) [Cores definidas](/Part_FaceColors/pt-br "Part FaceColors/pt-br"): Atribui cores a faces individuais de objetos.

### Booleano

- ![](/images/Part_Compound.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Composição:

- ![](/images/Part_Compound.svg) [Criar composição](/Part_Compound/pt-br "Part Compound/pt-br"): Cria uma composição a partir dos objetos selecionados.

- ![](/images/Part_ExplodeCompound.svg) [Explodir composição](/Part_ExplodeCompound/pt-br "Part ExplodeCompound/pt-br"): Ferramenta para dividir composição de formas.

- ![](/images/Part_CompoundFilter.svg) [Filtro de composição](/Part_CompoundFilter/pt-br "Part CompoundFilter/pt-br"): O filtro de composição pode ser utilizado para extrair peças individuais.

- ![](/images/Part_Booleans.svg) [Operações booleanas](/Part_Boolean/pt-br "Part Boolean/pt-br"): Realiza operações Booleanas sobre os objetos.

- ![](/images/Part_Cut.svg) [Recortar](/Part_Cut/pt-br "Part Cut/pt-br"): Corta (subtrai) um objeto de outro.

- ![](/images/Part_Fuse.svg) [União](/Part_Fuse/pt-br "Part Fuse/pt-br"): Faz a união de dois objetos.

- ![](/images/Part_Common.svg) [Interseção](/Part_Common/pt-br "Part Common/pt-br"): Extrai a parte comum de dois objetos.

- ![](/images/Part_JoinConnect.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Juntar:

- ![](/images/Part_JoinConnect.svg) [Conectar](/Part_JoinConnect/pt-br "Part JoinConnect/pt-br"): Conecta interiores de paredes de objetos.

- ![](/images/Part_JoinEmbed.svg) [Embutir](/Part_JoinEmbed/pt-br "Part JoinEmbed/pt-br"): Incorpora um objeto murado dentro de outro objeto murado.

- ![](/images/Part_JoinCutout.svg) [Corte](/Part_JoinCutout/pt-br "Part JoinCutout/pt-br"): Cria um corte em uma parede de um objeto para outro objeto murado.

- ![](/images/Part_BooleanFragments.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Divisão:

- ![](/images/Part_BooleanFragments.svg) [Fragmentos booleanos](/Part_BooleanFragments/pt-br "Part BooleanFragments/pt-br"): Cria todas as peças que podem ser obtidas por meio das operações booleanas entre objetos. Divide os objetos onde eles se interceptam.

- ![](/images/Part_SliceApart.svg) [Fatiar uma peça](/Part_SliceApart/pt-br "Part SliceApart/pt-br"): Ferramenta para dividir formas através da intersecção com outras formas.

- ![](/images/Part_Slice.svg) [Fatiar](/Part_Slice/pt-br "Part Slice/pt-br"): Divide um objeto em pedaços através da interseção com outro objeto.

- ![](/images/Part_XOR.svg) [XOR](/Part_XOR/pt-br "Part XOR/pt-br"): Remove o espaço compartilhado por um número par de objetos (versão simétrica da [Recortar](/Part_Cut/pt-br "Part Cut/pt-br")).

- ![](/images/Part_CheckGeometry.svg) [Verificar geometria](/Part_CheckGeometry/pt-br "Part CheckGeometry/pt-br"): Verifica a geometria dos objetos selecionados em busca de erros.

- ![](/images/Part_Defeaturing.svg) [Desnaturalização](/Part_Defeaturing/pt-br "Part Defeaturing/pt-br"): Remove recursos de um objeto.

### Outras ferramentas

- ![](/images/Part_Import.svg) [Importar](/Part_Import/pt-br "Part Import/pt-br"): Esta ferramenta te permite adicionar um arquivo \*.IGES, \*.STEP, \*.BREP ao documento.

- ![](/images/Part_Export.svg) [Exportar](/Part_Export/pt-br "Part Export/pt-br"): Esta ferramenta te permite exportar um objeto como arquivo \*.IGES, \*.STEP ou \*.BREP.

- ![](/images/Part_BoxSelection.svg) [Caixa de seleção](/Part_BoxSelection/pt-br "Part BoxSelection/pt-br"): Seleciona faces a partir de uma área retangular.

- ![](/images/Part_ShapeFromMesh.png) [Forma a partir de malha](/Part_ShapeFromMesh/pt-br "Part ShapeFromMesh/pt-br"): Cria uma forma a partir de um objeto de malha.

- ![](/images/Part_PointsFromMesh.svg) [Pontos da malha](/Part_PointsFromMesh/pt-br "Part PointsFromMesh/pt-br"): Cria um objeto feito de pontos a partir de um objeto geométrico.

- ![](/images/Part_MakeSolid.svg) [Converter em sólido](/Part_MakeSolid/pt-br "Part MakeSolid/pt-br"): Converte uma forma em um sólido.

- ![](/images/Part_ReverseShape.svg) [Inverter formas](/Part_ReverseShape/pt-br "Part ReverseShape/pt-br"): Inverte as normais de todas as faces do objeto selecionado.

- Criar uma cópia:

- ![](/images/Part_SimpleCopy.svg) [Criar uma cópia simples](/Part_SimpleCopy/pt-br "Part SimpleCopy/pt-br"): Cria uma cópia simples de um objeto selecionado.

- ![](/images/Part_TransformedCopy.svg) [Criar cópia transformada](/Part_TransformedCopy/pt-br "Part TransformedCopy/pt-br"): Cria uma cópia transformada de um objeto selecionado.

- ![](/images/Part_ElementCopy.svg) [Criar uma cópia do elemento forma](/Part_ElementCopy/pt-br "Part ElementCopy/pt-br"): Cria uma cópia a partir de um elemento (vértice, borda, face) de um objeto selecionado.

- ![](/images/Part_RefineShape.svg) [Refinar a forma](/Part_RefineShape/pt-br "Part RefineShape/pt-br"): Limpa as faces removendo linhas desnecessárias.

- ![](/images/Part_EditAttachment.svg) [Anexo](/Part_EditAttachment/pt-br "Part EditAttachment/pt-br"): Prende um objeto a outro objeto.

## Ferramentas obsoletas

### Medida

The ![](/images/Std_Measure.svg) [Std Measure](/Std_Measure "Std Measure") tool replaces the tools listed below. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Part_Measure_Linear.svg) [Medida Linear](/Part_Measure_Linear/pt-br "Part Measure Linear/pt-br"): Cria uma medição linear.

- ![](/images/Part_Measure_Angular.svg) [Medida Angular](/Part_Measure_Angular/pt-br "Part Measure Angular/pt-br"): Cria uma medição angular.

- ![](/images/Part_Measure_Refresh.svg) [Medida Atualização](/Part_Measure_Refresh/pt-br "Part Measure Refresh/pt-br"): Atualiza todas as medidas.

- ![](/images/Part_Measure_Clear_All.svg) [Limpar tudo](/Part_Measure_Clear_All/pt-br "Part Measure Clear All/pt-br"): Limpa todas as medidas.

- ![](/images/Part_Measure_Toggle_All.svg) [Alternar tudo](/Part_Measure_Toggle_All/pt-br "Part Measure Toggle All/pt-br"): Mostra ou oculta todas as medidas.

- ![](/images/Part_Measure_Toggle_3D.svg) [Alternar 3D](/Part_Measure_Toggle_3D/pt-br "Part Measure Toggle 3D/pt-br"): Mostra ou oculta medidas 3D.

- ![](/images/Part_Measure_Toggle_Delta.svg) [Alternar o Delta](/Part_Measure_Toggle_Delta/pt-br "Part Measure Toggle Delta/pt-br"): Mostra ou esconde medidas delta.

## Preferências

- ![](/images/Preferences-part_design.svg) [Preferências](/PartDesign_Preferences/pt-br "PartDesign Preferences/pt-br"): Preferências disponíveis para as Ferramentas da Part (a bancada de trabalho da Part também usa as Preferências do PartDesign).
- ![](/images/Preferences-import-export.svg) [Preferências de exportação de importação](/Import_Export_Preferences/pt-br "Import Export Preferences/pt-br"): Preferências disponíveis para importação e exportação de e para diferentes formatos de arquivo.
- [Ajuste fino](/Fine-tuning/pt-br "Fine-tuning/pt-br"): Alguns parâmetros extras para afinar o comportamento das peças.

## Scripting

Veja [Script(roteiro) da peça](/Part_scripting/pt-br "Part scripting/pt-br").

## Tutoriais

- [Importação de STL ou OBJ](/Import_from_STL_or_OBJ/pt-br "Import from STL or OBJ/pt-br") : Como importar arquivos STL/OBJ no FreeCAD
- [Exportação para STL ou OBJ](/Export_to_STL_or_OBJ/pt-br "Export to STL or OBJ/pt-br") : Como exportar arquivos STL/OBJ do FreeCAD
- [Whiffle Ball tutorial](/index.php?title=Whiffle_Ball_tutorial/pt-br&action=edit&redlink=1 "Whiffle Ball tutorial/pt-br (page does not exist)") : Como usar o módulo de peças

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Workbench/pt-br&oldid=1500807>"
