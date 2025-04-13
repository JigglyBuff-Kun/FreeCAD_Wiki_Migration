---
title: 점 작업대
---

![](/images/Workbench_Points.svg)

점 작업대 아이콘

## 소개

The ![](/images/Workbench_Points.svg) 점 작업대는 [점 구름](http://en.wikipedia.org/wiki/Point_cloud) 작업을 위한 특정 도구를 제공합니다. 이 작업대는 아직 개발 중입니다.

3차원 공간의 한 지점 좌표를 측점좌표 라고 하면, 수집된 측점좌표의 모음을 점 구름이라고 합니다. 점 구름은 물체의 표면을 주로 스캐닝 하여 만들어 집니다. 그 다음에는 점 구름을 물체에 관한 메쉬의 작성, 표면과 입체를 재 생성, 역 설계, 시각화 그리고 품질검사 등의 여러가지 용도로 사용할 수 있습니다.

## 도구

점 작업대의 모든 도구는 **점** 메뉴와 **점 도구**모음에 있습니다.

- ![](/images/Points_Import.svg) [점 가져오기...](/Points_Import "Points Import"): 파일에서 점 구름을 가져옵니다.

- ![](/images/Points_Export.svg) [점 내보내기...](/Points_Export "Points Export"): 점 구름을 파일로 내보냅니다.

- ![](/images/Points_Convert.svg) [점으로 변환하기...](/Points_Convert "Points Convert"): 형상에서 점구름을 만들어 냅니다.

- ![](/images/Points_Structure.svg) [Structured point cloud](/Points_Structure "Points Structure"): Creates a structured point cloud from the points of an existing point cloud.

- ![](/images/Points_Merge.svg) [Merge point clouds](/Points_Merge "Points Merge"): Creates a point cloud by combining the points of two or more point clouds.

- ![](/images/Points_PolyCut.svg) [Cut point cloud](/Points_PolyCut "Points PolyCut"): Cuts points from point clouds.

## Notes

- [Draft](/Draft_Workbench "Draft Workbench") commands such as ![](/images/Draft_Line.svg) [Draft Line](/Draft_Line "Draft Line") and ![](/images/Draft_BSpline.svg) [Draft B-spline](/Draft_BSpline "Draft BSpline") can be used to connect the points in a point cloud. Use ![](/images/Draft_Snap_Endpoint.svg) [Draft Snap Endpoint](/Draft_Snap_Endpoint "Draft Snap Endpoint") to snap to the points.
- [Python](/Python "Python") can be used to analyze and process point clouds. See the following forum discussions:
  - [Inspecting Point cloud](http://forum.freecadweb.org/viewtopic.php?f=3&t=16098).
  - [Fläche aus Messwerten](http://forum.freecadweb.org/viewtopic.php?f=13&t=15988) (German)
  - [Schnitte durch Flächen aus Messwerten](http://forum.freecadweb.org/viewtopic.php?f=13&t=16103) (German)

Retrieved from "<http://wiki.freecad.org/index.php?title=Points_Workbench/ko&oldid=1427355>"
