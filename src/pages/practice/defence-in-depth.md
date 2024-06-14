---
templateKey: practice-page
title: 多重防御
subtitle: アプリケーションを通じたセキュリティ制御のレイヤー化
date: 2022-02-07T02:11:01.053Z
authors:
  - attacus
mobiusTag: foundation
icon: /images/julia-joppien-g51k-d_klte-unsplash.jpg
whatIs: >-
  多重防御(Defence/defense(**\***) in depth)（「階層化されたセキュリティ（Layered Security）」と呼ばれることもある）とは、システム、サービス、ソフトウ ェアの安全性を確保するためのアプローチであり、ソリューションの外向きの部分やユーザ向きの部分だけに全力を注ぐのではなく、スタックや設計のすべてのレイヤーに強力なセキュリティ制御を含めることです。このプラクティスのねらいは、セキュリティ対策に冗長性を持たせることで、1つの対策が（一時的あるいは恒久的に）破られても、他の対策でアプリケーションを保護できるようにすることです。


  例えば、多重防御の原則を考慮して構築されたウェブ・アプリケーションは、悪意のあるユーザが送信したデータに対する防御の第一線として、ウェブ・アプリケーション・ファイアウォール（WAF）を実装しているかもしれないし、アプリケーションのセッション・クッキーに強力なセキュリティ・フラグを設定し、厳格なコンテンツ・セキュリティ・ポリシー（CSP）を実装し、ユーザが送信した文字列をプログラム変数として直接渡さないアプリケーション・ロジックを実装しているかもしれません。これらを実現するためには、アプリケーション全体にわたってセキュリティ管理が正しく実装され、アプリケーションを侵害したり悪意を持って操作したりする試みを防止するために、ウェブアプリケーションの構築に関与するチーム全体が協力する必要があります。


  **\*** "Defense" はアメリカ英語、 "Defence"は、UK/AU英語。
whyDo: >-
  チームは、制御の最も外側のレイヤーに障害が発生した場合でも、システムやアプリケーションが攻撃から防御できるように、多重防御を実践することができます。


  こうすることで、攻撃者がシステムを徹底的に悪用したり、侵入したりする可能性は低くなります。なぜなら、システムを設計したチームは、外側の防御層があらゆるタイプの攻撃に対して持ちこたえられるとは想定しておらず、また、想定していない防御を突破する方法がないとも想定していない（つまり、各レイヤーで攻撃は突破される前提で防御の設計をしている）からです。
howTo: >
  多重防御は、ソフトウェア開発工程のどの段階でも実践することができるが、イテレーションの開始時、あるいはプロジェクトのキックオフ時に、脅威モデリングのプラクティスの中で最初に検討するのが最も効果的です。これには、設計の各要素に対する強力なセキュリティ対策を評価し、実装することが含まれます。


  考慮すべき事項には、以下が含まれます（ただし、これらに限定されるものではない）：


  * ”最小特権の原則”（すべてのユーザーまたはアカウントが、その機能を実行するために必要な最小限の権限のみを持ち、それ以上の権限を持たないようにすること）

  * 認証管理（パスワードポリシー、多要素認証など）

  * ネットワーク・セキュリティ・コントロール（ファイアウォール、セキュリティ・グループ、イングレス・ルール、イグレス・ルールなど）

  * 物理的管理（誰が重要インフラにアクセスできるか）

  * インサイダーの脅威（アプリケーションに対する脅威は組織外の攻撃者からしか来ないと決めつけない。）

  * ”侵入を想定する”（すでに侵入されたと想定し、どのような内部統制があるかを考える）
mediaGallery:
  - link: https://pronto-core-cdn.prontomarketing.com/2/wp-content/uploads/sites/3415/2015/11/ProactiveProtection_CircleChart.jpg
resources:
  - link: https://www.youtube.com/watch?v=1vcCisj6XXw
    linkType: video
    description: Secure Design Concepts talk by Tanya Janca, which covers defence in
      depth as well as many other foundational software security concepts
  - link: https://en.wikipedia.org/wiki/Defense_in_depth_(computing)
    linkType: web
    description: The Wikipedia article on Defence in Depth
  - link: https://www.cloudflare.com/en-au/learning/security/glossary/what-is-defense-in-depth/
    linkType: web
    description: Cloudflare's overview of Defence in Depth
participants: []
---
