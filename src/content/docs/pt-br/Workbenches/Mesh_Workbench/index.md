---
title: Bancada de trabalho Mesh
---

![](/images/Workbench_Mesh.svg)

Ícone da bancada de trabalho Mesh

## Introdução

A ![](/images/Workbench_Mesh.svg) Bancada de Malhas manipula [malhas triangulares](http://en.wikipedia.org/wiki/Triangle_mesh). As malhas são um tipo especial de objeto 3D, composto de faces triangulares conectadas por seus vértices e arestas.

Muitos aplicativos 3D, como [Sketchup](http://en.wikipedia.org/wiki/Sketchup), [Blender](<http://en.wikipedia.org/wiki/Blender_(software)>), [.org / wiki / Maya\_ (software) Maya](http://en.wikipedia/) e [3D Studio Max](http://en.wikipedia.org/wiki/3d_max), usam malhas como seu tipo principal de objeto 3D. Como as malhas são objetos muito simples, contendo apenas vértices (pontos), arestas e faces triangulares, elas são muito fáceis de criar, modificar, subdividir, estender e podem ser facilmente passadas de um aplicativo para outro sem qualquer perda de detalhes. Além disso, como as malhas contêm dados muito simples, os aplicativos 3D geralmente podem gerenciar grandes quantidades deles sem usar muitos recursos. Por esses motivos, as malhas são geralmente o tipo de objeto 3D escolhido para aplicativos que lidam com filmes, animações e criação de imagens.

Entretanto, no campo da engenharia, as malhas apresentam uma grande limitação: não podem definir com precisão superfícies curvas. É por isso que o FreeCAD conta com [Brep](http://en.wikipedia.org/wiki/Boundary_representation "wikipedia:Boundary representation") em vez disso. A Bancada de Trabalho Mesh oferece alguns comandos para manipular diretamente as malhas, mas é mais freqüentemente usada para importar dados de malhas 3D e convertê-los em um sólido para uso com o ![](/images/Workbench_Part.svg). [Bancada de Trabalho Part](/Part_Workbench/pt-br "Part Workbench/pt-br") ou ![](/images/Workbench_PartDesign.svg) [Bancada de Trabalho PartDesign](/PartDesign_Workbench/pt-br "PartDesign Workbench/pt-br").

![](/images/Mesh_example.jpg)

## Ferramentas

Todas as ferramentas da Bancada de Trabalho Mesh podem ser acessadas a partir do menu **Meshes**. Quase todas também estão disponíveis em uma das barras de ferramentas Mesh.

- ![](/images/Mesh_Import.svg) [Malha de importação...](/index.php?title=Mesh_Import/pt-br&action=edit&redlink=1 "Mesh Import/pt-br (page does not exist)"): Importação de um objeto de malha de um arquivo.

- ![](/images/Mesh_Export.svg) [Malha de exportação...](/index.php?title=Mesh_Export/pt-br&action=edit&redlink=1 "Mesh Export/pt-br (page does not exist)"): Exporta um objeto de malha para um arquivo.

- ![](/images/Mesh_FromPartShape.svg) [Criar malha a partir da forma...](/Mesh_FromPartShape/pt-br "Mesh FromPartShape/pt-br"): Cria objetos de malha a partir de objetos de forma.

- ![](/images/Mesh_RemeshGmsh.svg) [Refinamento...](/index.php?title=Mesh_RemeshGmsh/pt-br&action=edit&redlink=1 "Mesh RemeshGmsh/pt-br (page does not exist)"): Remova um objeto de malha. [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

* Analisar
  - ![](/images/Mesh_Evaluation.svg) [Avaliar e Repapar malha](/index.php?title=Mesh_Evaluation/pt-br&action=edit&redlink=1 "Mesh Evaluation/pt-br (page does not exist)"): Avalia e repara um objeto de malha.
  - ![](/images/Mesh_EvaluateFacet.svg) [Face Info](/index.php?title=Mesh_EvaluateFacet/pt-br&action=edit&redlink=1 "Mesh EvaluateFacet/pt-br (page does not exist)"): Dá informações sobre as faces.
  - ![](/images/Mesh_CurvatureInfo.svg) [Curvatura Info](/index.php?title=Mesh_CurvatureInfo/pt-br&action=edit&redlink=1 "Mesh CurvatureInfo/pt-br (page does not exist)"): Mostra a curvatura absoluta de [objetos de curvatura](/index.php?title=Mesh_VertexCurvature/pt-br&action=edit&redlink=1 "Mesh VertexCurvature/pt-br (page does not exist)") em pontos selecionados.
  - ![](/images/Mesh_EvaluateSolid.svg) [Checar malha sólido](/index.php?title=Mesh_EvaluateSolid/pt-br&action=edit&redlink=1 "Mesh EvaluateSolid/pt-br (page does not exist)"): Verifica se um objeto de malha é sólido.
  - ![](/images/Mesh_BoundingBox.svg) [Delimitações info](/index.php?title=Mesh_BoundingBox/pt-br&action=edit&redlink=1 "Mesh BoundingBox/pt-br (page does not exist)"): Mostra as coordenadas da caixa de delimitação de um objeto de malha.

- ![](/images/Mesh_VertexCurvature.svg) [Traçar curvatura](/index.php?title=Mesh_VertexCurvature/pt-br&action=edit&redlink=1 "Mesh VertexCurvature/pt-br (page does not exist)"): Cria objetos de curvatura de malha para objetos de malha.

- ![](/images/Mesh_HarmonizeNormals.svg) [Harmonizar as normais](/index.php?title=Mesh_HarmonizeNormals/pt-br&action=edit&redlink=1 "Mesh HarmonizeNormals/pt-br (page does not exist)"): Harmoniza as normais dos objetos de malha.

- ![](/images/Mesh_FlipNormals.svg) [Mudança de direção de normais](/index.php?title=Mesh_FlipNormals/pt-br&action=edit&redlink=1 "Mesh FlipNormals/pt-br (page does not exist)"): Vira as normais dos objetos de malha.

- ![](/images/Mesh_FillupHoles.svg) [Preencher furos...](/index.php?title=Mesh_FillupHoles/pt-br&action=edit&redlink=1 "Mesh FillupHoles/pt-br (page does not exist)"): Preenche buracos em objetos de malha.

- ![](/images/Mesh_FillInteractiveHole.svg) [Fechar buraco](/index.php?title=Mesh_FillInteractiveHole/pt-br&action=edit&redlink=1 "Mesh FillInteractiveHole/pt-br (page does not exist)"): Preenche furos selecionados em objetos de malha.

- ![](/images/Mesh_AddFacet.svg) [Adicionar triângulo](/index.php?title=Mesh_AddFacet/pt-br&action=edit&redlink=1 "Mesh AddFacet/pt-br (page does not exist)"): Adiciona as faces ao longo de um limite de um objeto de malha aberta.

- ![](/images/Mesh_RemoveComponents.svg) [Remover componentes...](/index.php?title=Mesh_RemoveComponents/pt-br&action=edit&redlink=1 "Mesh RemoveComponents/pt-br (page does not exist)"): Remove faces de objetos de malha.

- ![](/images/Mesh_RemoveCompByHand.svg) [Remover componentes à mão...](/index.php?title=Mesh_RemoveCompByHand/pt-br&action=edit&redlink=1 "Mesh RemoveCompByHand/pt-br (page does not exist)"): Remove componentes de objetos de malha.

- ![](/images/Mesh_Segmentation.svg) [Criar segmentos de malha...](/index.php?title=Mesh_Segmentation/pt-br&action=edit&redlink=1 "Mesh Segmentation/pt-br (page does not exist)"): Cria segmentos de malha separados para tipos de superfície especificados de um objeto de malha.

- ![](/images/Mesh_SegmentationBestFit.svg) [Criar segmentos de malha a partir das melhores superfícies...](/index.php?title=Mesh_SegmentationBestFit/pt-br&action=edit&redlink=1 "Mesh SegmentationBestFit/pt-br (page does not exist)"): Cria segmentos de malha separados para tipos de superfície especificados de um objeto de malha, e pode identificar seus parâmetros.

- ![](/images/Mesh_Smoothing.svg) [Suavizar...](/index.php?title=Mesh_Smoothing/pt-br&action=edit&redlink=1 "Mesh Smoothing/pt-br (page does not exist)"): Suaviza os objetos de malha.

- ![](/images/Mesh_Decimating.svg) [Dizimar...](/index.php?title=Mesh_Decimating/pt-br&action=edit&redlink=1 "Mesh Decimating/pt-br (page does not exist)"): Reduz o número de faces em objetos de malha. [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

- ![](/images/Mesh_Scale.svg) [Escala...](/index.php?title=Mesh_Scale/pt-br&action=edit&redlink=1 "Mesh Scale/pt-br (page does not exist)"): Objetos de malha de escala.

- ![](/images/Mesh_BuildRegularSolid.svg) [Regularmente sólido...](/index.php?title=Mesh_BuildRegularSolid/pt-br&action=edit&redlink=1 "Mesh BuildRegularSolid/pt-br (page does not exist)"): Cria um objeto de malha sólida paramétrica regular.

* Booleanos

  - ![](/images/Mesh_Union.svg) [União](/index.php?title=Mesh_Union/pt-br&action=edit&redlink=1 "Mesh Union/pt-br (page does not exist)"):Cria um objeto de malha que é a união de dois objetos de malha.
  - ![](/images/Mesh_Intersection.svg) [Intersecção](/index.php?title=Mesh_Intersection/pt-br&action=edit&redlink=1 "Mesh Intersection/pt-br (page does not exist)"): Cria um objeto de malha que é a interseção de dois objetos de malha.
  - ![](/images/Mesh_Difference.svg) [Diferença](/index.php?title=Mesh_Difference/pt-br&action=edit&redlink=1 "Mesh Difference/pt-br (page does not exist)"): Cria um objeto de malha que é a diferença de dois objetos de malha.

* Corte
  - ![](/images/Mesh_PolyCut.svg) [Policorte em malhas](/index.php?title=Mesh_PolyCut/pt-br&action=edit&redlink=1 "Mesh PolyCut/pt-br (page does not exist)"): Corta faces inteiras de objetos de malha.
  - ![](/images/Mesh_PolyTrim.svg) [Corte curto em malhas](/index.php?title=Mesh_PolyTrim/pt-br&action=edit&redlink=1 "Mesh PolyTrim/pt-br (page does not exist)"): Apara faces e partes de faces em um lado de um plano a partir de um objeto de malha.
  - ![](/images/Mesh_TrimByPlane.svg) [Corte em malhas com um plano](/index.php?title=Mesh_TrimByPlane/pt-br&action=edit&redlink=1 "Mesh TrimByPlane/pt-br (page does not exist)"): Apara faces e partes de faces em um lado de um plano a partir de um objeto de malha.
  - ![](/images/Mesh_SectionByPlane.svg) [Criar seção a partir de malha e plano](/index.php?title=Mesh_SectionByPlane/pt-br&action=edit&redlink=1 "Mesh SectionByPlane/pt-br (page does not exist)"): Cria uma seção transversal através de um objeto de malha.
  - ![](/images/Mesh_CrossSections.svg) [Cortes transversais...](/index.php?title=Mesh_CrossSections/pt-br&action=edit&redlink=1 "Mesh CrossSections/pt-br (page does not exist)"): Cria múltiplas seções transversais através de objetos de malha. [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

- ![](/images/Mesh_Merge.svg) [Fundir](/index.php?title=Mesh_Merge/pt-br&action=edit&redlink=1 "Mesh Merge/pt-br (page does not exist)"): Cria um objeto de malha combinando as malhas de dois ou mais objetos de malha.

- ![](/images/Mesh_SplitComponents.svg) [Dividido por componentes](/index.php?title=Mesh_SplitComponents/pt-br&action=edit&redlink=1 "Mesh SplitComponents/pt-br (page does not exist)"): Divide um objeto de malha em seus componentes. [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

- ![](/images/MeshPart_CreateFlatMesh.svg) [Desembrulhar malha](/index.php?title=MeshPart_CreateFlatMesh/pt-br&action=edit&redlink=1 "MeshPart CreateFlatMesh/pt-br (page does not exist)"): Cria uma representação plana de um objeto de malha. [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

- ![](/images/MeshPart_CreateFlatFace.svg) [Face desembrulhada](/index.php?title=MeshPart_CreateFlatFace/pt-br&action=edit&redlink=1 "MeshPart CreateFlatFace/pt-br (page does not exist)"): Cria uma representação plana de uma face de um objeto de forma. [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

## Preferências

Existem algumas [preferências de exportação relacionadas aos formatos de malha](/Import_Export_Preferences/pt-br#Mesh_Formats "Import Export Preferences/pt-br"), mas estas não são utilizadas pelos comandos pertencentes a esta bancada de trabalho. Eles são usados pelo comando [Std Export](/Std_Export/pt-br "Std Export/pt-br").

As preferências da Bancada de Trabalho Mesh podem ser encontradas nas seguintes categorias do [Editor de Preferências](/Preferences_Editor/pt-br "Preferences Editor/pt-br"):

- ![](/images/Preferences-display.svg) [Display](/Preferences_Editor/pt-br#Display "Preferences Editor/pt-br"): Na aba [Mesh view](/Preferences_Editor/pt-br#Mesh_view "Preferences Editor/pt-br"), várias preferências podem ser definidas.
- ![](/images/Preferences-openscad.svg) [OpenSCAD](/index.php?title=OpenSCAD_Preferences/pt-br&action=edit&redlink=1 "OpenSCAD Preferences/pt-br (page does not exist)"): Os comandos [Mesh União](/index.php?title=Mesh_Union/pt-br&action=edit&redlink=1 "Mesh Union/pt-br (page does not exist)"), [Mesh Intersecção](/index.php?title=Mesh_Intersection/pt-br&action=edit&redlink=1 "Mesh Intersection/pt-br (page does not exist)") e [Mesh Diferença](/index.php?title=Mesh_Difference/pt-br&action=edit&redlink=1 "Mesh Difference/pt-br (page does not exist)") requerem [OpenSCAD](http://www.openscad.org/) e usam a preferência **OpenSCAD executável** para encontrar seu executável.

## Notas

- Mais ferramentas de malha estão disponíveis no ![](/images/Workbench_OpenSCAD.svg) [Bancada de trabalho OpenSCAD](/OpenSCAD_Workbench/pt-br "OpenSCAD Workbench/pt-br").
- Veja [Mesh Scripting](/index.php?title=Mesh_Scripting/pt-br&action=edit&redlink=1 "Mesh Scripting/pt-br (page does not exist)") para manipular e criar malhas usando [Python](/Python/pt-br "Python/pt-br").
- Veja também [FreeCAD e importação de malha](/index.php?title=FreeCAD_and_Mesh_Import/pt-br&action=edit&redlink=1 "FreeCAD and Mesh Import/pt-br (page does not exist)")
- Veja [Assímptota](/index.php?title=Asymptote/pt-br&action=edit&redlink=1 "Asymptote/pt-br (page does not exist)") para exportar malhas para o formato assintoto.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Workbench/pt-br&oldid=1464284>"
