<template>
  <div>
    <SubTitle name="Skills"/>
    <div class="skills-flex-container">
      <SkillCard v-for="skill in skills"
      v-bind:key="skill.name"
      v-bind:name="skill.name"
      v-bind:term="skill.term"
      v-bind:content="skill.content" />
    </div>
  </div>
</template>

<script>
import SubTitle from '@/components/SubTitle.vue'
import SkillCard from '@/components/SkillCard.vue'

export default {
  name: 'skills',
  components: {
    SubTitle,
    SkillCard
  },
  data () {
    return {
      skills: [
        {name: 'C/C++',
        term: '2年半',
        content: 'C言語は最初に触れた言語で主に大学の講義で，C++はロボットのプログラミングに使用していました．習熟度で言えば一番だと思います．'},
        {name: 'Ruby', 
        term: '1年', 
        content: 'サーバーサイドや競技プログラミングに使用しています．便利なメソッドやライブラリが豊富なところが好きですが，それらに頼らず自分で処理を書きたいと思うようになったきっかけもこの言語です．'},
        {name: 'JavaScript',
        term: '1年弱',
        content: 'Web開発で必要になった際に適宜使っている程度で，簡単なものしか記述できずあまり得意とは言えません．調べながらであれば大体の処理は書けそうな気がします．'},
        {name: 'Go',
        term: '8ヶ月',
        content: '現在メインで使用している言語です．interfaceは抽象化のための賢い手段だという程度には理解していますが，未だ活用したことはありません．中規模〜大規模なサービスでGoを活かした設計をする経験がしたいと考えています．'},
        {name: 'HTML/CSS',
        term: '1年',
        content: 'Webアプリのフロントエンドで使用しています．あまり見た目にこだわらないタイプ（無駄なアニメーションは不要派）なので，最低限のデザインで済ませがちです．'},
        {name: 'Ruby on Rails',
        term: '1年',
        content: 'Webアプリ作成で主に使用していたフレームワークです．Webの勉強をするにつれて，なんでもござれなRailsは基礎を学ぶのに不向きだと思い始め，現在は触っていません．'},
        {name: 'Sinatra',
        term: '2ヶ月',
        content: 'サーバーサイドのコードを極力自分で書きたいという気持ちが高まって，その頃はRubyをメイン言語にしていたので触ってみました．MySQLと連携して簡単なAPIサーバを立てるくらいはできます．'},
        {name: 'Vue.js',
        term: '1年弱',
        content: '新しめなフロントエンド技術の習得の第1歩に選びました．このポートフォリオに使用しています．色々とよしなにやってくれるのに甘えてしまっており，深く勉強すべきリストの1つに入っています．'},
        {name: 'MySQL',
        term: '半年',
        content: 'Sinatraを使い始めたのを機に自力でSQLを書くようになりました．DBの扱いはまだ不慣れですが，SQL自体は好きな方だと思います．'},
        {name: 'Docker',
        term: '1年弱',
        content: '開発環境はDockerで作るようにしています．コンテナの立ち上げ・破棄が手軽にでき，ローカル環境が汚れないので気に入っています．'},
        {name: 'Git/GitHub',
        term: '2年弱',
        content: 'プロジェクトのソース管理に使用しています．個人での使用がほとんどですが，ハッカソンでPullRequestを使ったチーム開発を経験したことはあります．GitHub Actionsで開発フローを自動化する楽しさを最近覚えました．'},
        {name: 'GCP',
        term: '半年程度',
        content: 'もともと自作アプリのホスティング先として，無料枠の豊富なGCPのApp EngineやCloud Runを利用していました．2020年8月にUdemyの講座でGCE, GCS, Cloud Load Balancing, Cloud DNS, Cloud Functionsなどをざっと勉強しました．複数サービスを組み合わせて利用した経験はDNSとGAEでブログを作ったくらいですが，思っていたほど難しいものではなくむしろ面白かったので，実際に使われるサービスの中でクラウドを使用してみたいと思っています．'}
      ]
    }
  }
}
</script>

<style lang="scss">
.skills-flex-container {
  width: 80%;
  margin-left: 10%;
  @media screen and (max-width: 767px) {
    width: 90%;
    margin-left: 5%;
  }
}
.skills-flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  align-content: flex-start;
}
</style>