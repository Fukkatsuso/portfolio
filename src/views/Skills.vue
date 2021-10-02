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
    SkillCard,
  },
  data () {
    return {
      skills: [
        {
          name: 'Go',
          term: '1年半(実務3ヶ月)',
          content: '個人でもインターンでもバックエンド開発で使用しています．\
                    使えば使うほど良さに気づける好きな言語です．',
        },
        {
          name: 'C/C++',
          term: '2年半',
          content: 'C言語は最初に触れた言語です．\
                    C++はロボットのプログラミングに使用していました．',
        },
        {
          name: 'Ruby', 
          term: '1年', 
          content: 'サーバーサイドや競技プログラミングに使用しています．\
                    便利なメソッドやライブラリが豊富なところが好きですが，それらに頼らず自分で処理を書きたいと思うようになったきっかけもこの言語です．',
        },
        {
          name: 'JavaScript',
          term: '1年',
          content: 'Web開発で必要になった際に適宜使っている程度で，簡単なものしか記述したことがなく得意というわけではありません．\
                    調べながらであれば大体の処理は書けそうな気がします．',
        },
        {
          name: 'HTML/CSS',
          term: '1年',
          content: 'Webアプリのフロントエンドで使用しています．\
                    インターンの帳票開発でも使った経験があります．\
                    あまり見た目にこだわらないタイプ（無駄なアニメーションは不要派）なので，個人開発では最低限のデザインで済ませがちです．',
        },
        {
          name: 'NestJS',
          term: '実務3ヶ月',
          content: 'インターンで新規開発プロジェクトに参加して使用することとなったフレームワークです．\
                    Goによるサーバーサイドのコード構成と比べて複雑で最初は手こずりましたが，機能追加であれば対応できると思います．',
        },
        {
          name: 'Vue.js',
          term: '1年弱(実務2,3週間)',
          content: '新しめなフロントエンド技術習得の第1歩に選びました．\
                    このポートフォリオに使用しています．\
                    インターンでも何度か触り，Vuexの使い方を知りました．',
        },
        { name: 'React',
          term: '実務2週間',
          content: 'インターンで機能追加のタスクに取り組んだ際に触った経験があるレベルです．',
        },
        {
          name: 'Ruby on Rails',
          term: '1年',
          content: 'かつてWebアプリ作成で主に使用していたフレームワークです．\
                    Webの勉強をするにつれて，なんでもござれなRailsは基礎を学ぶのに不向きだと思うようになり，現在は使っていません．',
        },
        {
          name: 'Sinatra',
          term: '2ヶ月',
          content: 'サーバーサイドのコードを極力自分で書きたいという気持ちが高まって，その頃はRubyをメイン言語にしていたので触ってみました．\
                    DockerやMySQLを使って簡単なAPIサーバを立てるくらいはできます．',
        },
        {
          name: 'MySQL',
          term: '半年(実務半年弱)',
          content: 'Sinatraを使い始めたのを機に自力でSQLを書くようになりました．\
                    DBの扱いはまだ不慣れですが，SQL自体は好きな方だと思います．\
                    インターンでも深く触れない程度に触っています．',
        },
        {
          name: 'Docker',
          term: '1年弱(実務半年)',
          content: '開発環境はDockerで作るようにしています．\
                    コンテナの立ち上げ・破棄が手軽にでき，ローカル環境が汚れないので気に入っています．\
                    ネットワーク周りの理解は怪しいです．',
        },
        {
          name: 'Git/GitHub, Bitbucket',
          term: '2年半(実務半年)',
          content: '個人開発でも実務のチーム開発でも，プロジェクトのソース管理に使用しています．\
                    リファレンスを見ながらであれば，チーム開発に必要な基本操作は可能です．\
                    GitHub Actionsで開発フローを自動化するのが好きです．',
        },
        {
          name: 'GCP',
          term: '1年',
          content: 'もともと自作アプリのホスティング先として，無料枠の豊富なGCPのApp EngineやCloud Runを利用していました．\
                    2020年8月にUdemyの講座で主要なサービスをざっと勉強しました．\
                    Cloud DNS+GAEを使ったブログ，Cloud Scheduler+Cloud Run+Cloud SQLを使った仮想通貨取引botなどの個人開発経験があります．',
        },
      ],
    }
  },
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