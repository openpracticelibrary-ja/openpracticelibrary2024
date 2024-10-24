---
templateKey: practice-page
title: ミューテーションテスト
subtitle: ミューテーションテストは、新しいソフトウェアテストを設計し、既存のソフトウェアテストの品質を評価するために使用される。
date: 2022-07-25T12:46:12.353Z
authors:
  - sebw
mobiusTag: foundation
icon: /images/mutation-testing.png
whatIs: >-
  ミューテーションテストでは、単体テストが完了したコードに作為的にバグを仕込みます。


  バグが注入された各バージョンはミュータントと呼ばれ、テストはオリジナルバージョンの単体テスト結果とミュータントが異なる結果になるかを確認し、網羅性、期待値チェックなどテストの不備を検出、修正します。これをミュータントの破壊（kill）と呼びます。
whyDo: >-
  ミューテーションテストの目的は複数あります：


  * テストが弱いコード（ミュータントが死滅しないコード）を特定する。

  * 弱いテスト（ミュータントを決して殺さないテスト）を特定する。

  * 変異スコアは、死滅した変異体の数／変異体の総数である。

  * プログラムのエラー伝播と状態感染について学ぶ。
howTo: |-
  Python

  * [Mutatest](https://mutatest.readthedocs.io/en/latest/) 
  * [Mutpy](https://github.com/mutpy/mutpy)

  C#, Scala, Javascript

  * [Stryker](https://stryker-mutator.io/)
mediaGallery:
  - link: https://www.youtube.com/watch?v=Ua97prXLohk
resources:
  - link: https://ieeexplore.ieee.org/document/9524503
    linkType: web
    description: "Practical Mutation Testing at Scale: A view from Google"
  - link: https://en.wikipedia.org/wiki/Mutation_testing
    linkType: web
    description: Mutation testing definition by Wikipedia
  - link: https://opensource.com/article/19/9/mutation-testing-example-execute-test
    linkType: web
    description: "Mutation testing by example: Execute the test - by Alex Bunardzic "
participants: []
---
