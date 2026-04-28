---
templateKey: practice-page
title: シナリオ・キャスティング
subtitle: 複雑で捉えにくいドメインを把握する
date: 2025-12-09T13:22:14.560Z
authors:
  - InfoSec812
  - mtakane
tags:
  - validate
mobiusTag: discovery
icon: /images/opl-scenariocasting-historic-maritime-map.png
whatIs: >-
  シナリオ・キャスティングは、ドメインの専門知識に基づいてシナリオで表現される、ソフトウェア開発プロジェクトを構造化するための協働ツールです。複雑または捉えにくいドメインを把握するのに特に有用です。ドメインがそのように感じられ、多くの人が関わっている場合は、シナリオ・キャスティングを試してみてください。このプラクティスは元々Jörn Kochによって作られました。


  シナリオとは、*特定のアウトカムを含む興味深い状況の概要*です。例えば、「アダがカルツォーネピザを注文する」。これだけシンプルです。


  シナリオは*純粋なドメイン言語でドメインの視点*から記述されます。*具体的・詳細で独自性があります*。


  シナリオは*意味をなします*。良いシナリオはドメインに関する具体的な情報で溢れています。典型的なビジネスプロセスに沿った全ての関連する結果とその関連性を示します。


  シナリオは*解決策を規定しません*。人々がどのような解決策が必要かを理解するのに役立てるため、*ドメインで起きていることの例*を示します。
whyDo: |-
  *シナリオは発見の旅のようなものです！* シナリオによって以下が可能になります：

  * 人々・懸念・慣習・方針・物事についてより多くを学ぶ。
  * 興味深いポイントを訪れ、自分自身の印象を形成する。
  * 境界を越え、領域がどのように接続されているかを見る。
  * 全く新しい発見をして、将来の旅のためのアイデアを得る。
howTo: >-
  *シナリオ・キャスティング*は*3つの反復的なステップ*で協働的に行われます：


  1. どのようにして個々のアイデア・質問・懸念がドメインに影響するかについての例となるシナリオを*ブレインストーミングする*——厳密にドメイン言語で！これにより問題空間を概説する初期の *[シナリオバックログ](https://scenario-casting.org/#artifact-scenario-backlog)* が提供されます。

  2. *シナリオバックログを優先順位付け*して*スコープに合意する*。

  3. 上位のシナリオを一貫性のある包括的な *[オリエンテーションシナリオ](https://scenario-casting.org/#artifact-orientation-scenario)* に*組み合わせる*。


  その後、*オリエンテーションシナリオ*の物語を*協働モデリングセッション*で*肉付けして語る*：


  *[ドメイン・ストーリーテリング](https://openpracticelibrary-ja.netlify.app/practice/domain-storytelling/)* または *[イベント・ストーミング](https://openpracticelibrary-ja.netlify.app/practice/event-storming/)*。


  *シナリオ・キャスティング*は*反復的に*行われます。プロジェクトの*新しい反復またはフェーズを開始するたびに*、*シナリオ・キャスティング*から始め、*ドメインの概観を得て*、*関係する全員のフォーカスを設定します*。


  すでに*膨らんだシナリオバックログ*がある場合は、ステップ1（ブレインストーミング）をスキップしてステップ2（優先順位付け）に進めます。優先度の高いシナリオが*管理可能*に見え、それぞれが*単独で十分に興味深い*場合は、ステップ3（組み合わせ）をスキップして個々のシナリオを直接肉付けします。*シナリオ・キャスティング*は状況のニーズに応じて、*広範で詳細*にも*非常に短く簡潔*にもなれます。軽量に保ちましょう！
mediaGallery:
  - link: https://www.youtube.com/watch?v=YXmLG_rjRvg&t=9s
resources:
  - link: https://scenario-casting.org/
    linkType: web
    description: Scenario Casting Website
  - link: https://miro.com/templates/scenario-casting/
    linkType: web
    description: Miro Template
  - linkType: web
    link: https://www.eventstorming.com/
    description: Site for training and deeper knowledge on event storming
  - link: https://domainstorytelling.org/
    linkType: web
    description: Site for training and deeper knowledge on domain storytelling.
people: 1+
time: 30 min
difficulty: easy
participants:
  - ProductOwner
  - Team
  - BAs
  - Stakeholders
---
