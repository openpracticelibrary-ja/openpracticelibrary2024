---
templateKey: practice-page
title: インディペンデント・サービス・ヒューリスティック (ISH)
subtitle: 高速フローを実現できるソフトウェアの境界を特定するために、コラボレーションを促進させる
date: 2023-10-23T22:55:43.067Z
authors:
  - matthewskelton
  - manupaisable
  - kattekrab
mobiusTag: discovery
icon: /images/opl-tt-ish2.png
whatIs: >-
  インディペンデント・サービス・ヒューリスティック（ISH）とは、価値の高速フローを可能にするチームとソフトウェアの境界をどこに設定すべきかを見つけるために、チームが使用できる一連の質問セットです。このテクニックは、*Team Topologies*の著者であるMatthew SkeltonとManuel Paisによって考案され、その後、より広いドメイン駆動設計コミュニティの他のメンバーによって改良されました。
  

  より詳細な情報は、[Independent Service Heuristics GitHub Repository](https://github.com/TeamTopologies/Independent-Service-Heuristics)をご覧ください。
whyDo: >-
  ***フォーカスエリアの選択***


  このプラクティスは、一連の質問を使って、どこに注目すべきかを特定したり、注目すべき領域が結局さらなる発見に適していないと素早く判断したりすることで、チームが分析麻痺を回避するのに役立てることができます。


  > 「変化の流れが速い組織を設計する際には、さまざまな変化の流れの間に効果的な境界線を見つける必要がある...ISHのアプローチは、現代のソフトウェアにおける典型的な状況の多くをカバーしているが、すべてではない。ISHは、会話を刺激し、思考のフレームを提供するために設計されており、完璧な”キャッチオール”ツールではない。」


  ISHは、さまざまなスキルや経歴を持つ人々が有意義な会話を交わし、組織の垣根を越えた連携を生み出す良い方法となります。
howTo: >-
  まず、こう問いかけます。「これはクラウドホスティング（SaaS）のサービスや製品として運営できるか？」


  * チームに、独立したドメイン、サービス、バリューストリームになりうるビジネスの側面、関連タスク、ソフトウェアアプリケーション、カスタマージャーニーについて考え、書き出してもらう。

  * 重複を取り除き、似たようなアイデアをまとめる。

  * このチェックリストを使って、重点的に取り組むべき分野を確認したり、取捨選択したりする。


  1. **センス・チェック**: \
     これを 「サービスとして 」提供することに論理的な意味があるのだろうか？

     * 独立性は十分か？
     * 消費者はそれを理解し、評価するだろうか？
     * 実行を単純化できるか？
  2. **ブランド**: \
     これがパブリッククラウドサービス（*AvocadoOnline.com* 🥑のような）としてブランディングされることを想像できるか？

     * それはビジネス（あるいは 「マイクロビジネス」）やサービスとして成り立つだろうか？
     * それは魅力的な提案だろうか？
     * マーケティング・キャンペーンに説得力があるだろうか？
  3. **収益/顧客数**: \
     これは、収益や顧客数という点で、クラウドサービスとして成り立つのだろうか？

     * 有料のサービスでも成り立つのか？
     * サブスクリプション・プランで定期的な収益をもたらすか？
     * 明確に定義された顧客層やセグメントがあるか？
  4. **コストのトラッキング**: \
     その組織は現在、この件に関するコストと投資を、類似のものとは別に追跡することができるか？

     * インフラ費用、データ保管費用、データ転送費用、ライセンス費用などを考慮した場合、これを運営するための全費用は透明化されているのか、あるいは発見することが可能なのか？
     * これは、組織内の他の事柄から切り離され、独立しているコストか？
     * 組織は、これを個別に追跡しているか？
  5. **データ**: \
     これが必要とする（他のソースからの）入力データを明確に定義することは可能か？

     * どのようなデータソースからも完全に独立しているのか？
     * データソースは内部的なものか（外部ではなく、われわれの管理下にあるか）。
     * 入力データはクリーン（乱雑でない）か？
     * 入力データはセルフサービス方式で提供されるのか？チームは入力データを「サービスとして」利用できるか？
  6. **ユーザー・ペルソナ**: \
     ユーザータイプや顧客（ユーザーペルソナ）が小さく、適切に定義されているか？

     * 特定のユーザーのニーズに応えているか？
     * 我々はこれらのユーザータイプとそのニーズを知っているのか（あるいは簡単に明確にできるのか）？
  7. **チーム**: \
     チームやチームのセットが、これをベースにしたサービスを効果的に構築し、運営できるだろうか？

     * 認知的負荷（トピックの広さ／コンテクストの切り替え）は、チームが集中し成功するために制限されるだろうか？
     * 重要なインフラやその他のプラットフォームの抽象化は不要だろうか？
  8. **依存関係**: \
     このチームは目的を達成するために、大半の時間、他のチームから独立して行動できるだろうか？

     * このことは他のことから論理的に独立しているのか？
     * チームは、プラットフォームから非同期で依存関係を「セルフサービス」できるか？
  9. **インパクト/価値**: \
     その範囲は、チームにインパクトのある魅力的な課題を与えるだろうか？

     * その範囲はインパクトを与えるのに十分な大きさか？その範囲は有能な人材にとって魅力的か？
     * 顧客や組織にとって、その価値が明確に認識されるだけの十分な価値があるか？
  10. **プロダクトの決定**: \
      このことに取り組んでいるチームは、自分たちの製品ロードマップや製品の方向性を 「自分のもの 」にできるだろうか？

      * これは、明確に定義された実行領域において、個別の価値を提供するものなのか？
      * チームが他のチームの要求や優先順位に振り回されることなく、製品やユーザーにとって何がベストなのかを発見し、それに基づいて独自のロードマップを定義できるか。

  特定した候補の流れそれぞれについて、これらの質問に答えてください。ある可能性のある流れについて、「はい」または「たぶん」という答えが多ければ多いほど、別の変化の流れとしてふさわしい候補が見つかった可能性が高くなります。
mediaGallery:
  - link: https://www.youtube.com/watch?v=q8hwkDyL6Zs
resources:
  - link: https://github.com/TeamTopologies/Independent-Service-Heuristics
    linkType: web
    description: GitHub repo for Team Topologies ISH
  - link: https://teamtopologies.com/key-concepts-content/finding-good-stream-boundaries-with-independent-service-heuristics
    linkType: web
    description: Finding good stream boundaries with Independent Service Heuristics
people: 2+
time: 1-2 hours
difficulty: easy
participants:
  - TheTeam
  - ProductOwner
  - Architect
---
