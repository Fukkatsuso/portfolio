<template>
  <div>
    <SubTitle name="Skills" />
    <div class="skills-flex-container">
      <SkillCard
        v-for="skill in skills"
        :key="skill.name"
        :name="skill.name"
        :level="skill.level"
        :content="skill.content"
      />
    </div>
  </div>
</template>

<script>
import SubTitle from '@/components/SubTitle.vue'
import SkillCard from '@/components/SkillCard.vue'

export default {
  name: 'Skills',
  components: {
    SubTitle,
    SkillCard,
  },
  data () {
    return {
      skills: [
        {
          name: 'Go',
          level: 'サーバーサイド、CLI、アルゴリズムの実装が、自力でできる',
          content: '趣味の開発やISUCONはもちろん、時々仕事でも使う自分のメインウェポン的な言語で、一番好きです。',
        },
        {
          name: 'C/C++',
          level: 'アルゴリズムの実装が、リファレンスで調べながらできる',
          content: 'C言語は最初に触れた言語です。\
                    C++は大学時代にロボコンサークルのプログラミングで使っていました。',
        },
        {
          name: 'AWS',
          level: 'EC2, S3, RDSは実務でよく使うが、マネージドサービスの経験は浅い',
          content: '実務ではIaaSをベースとしたインフラを運用しています。',
        },
        {
          name: 'GCP',
          level: 'GCE, GCSは実務でよく使うが、マネージドサービスの経験は浅い',
          content: '実務ではAWSと同様に、IaaSをベースとしたインフラを運用しています。\
                    趣味では、自作アプリケーションを動かすためにApp EngineやCloud Runを使っています。',
        },
        {
          name: 'Docker',
          level: 'Dockerfileやcomposeファイルの作成が、リファレンスで調べながらできる',
          content: '個人開発ではDockerで環境構築し、GCPのCloud Runにデプロイするという方法をよく使います。\
                    年々いろいろな機能が追加されているみたいですが、その進化にはあまり追いつけていません。',
        },
        {
          name: 'Terraform',
          level: 'リソースの作成・変更だけでなく、コードのリファクタリングもできる',
          content: '実務でよく使っています。\
                    リファクタリング経験についてはDeNAのテックブログ記事「Terraformを活用した効率的なS3バケット管理手法」で詳しく紹介しています。',
        },
        {
          name: 'Prometheus/Grafana',
          level: '実務やISUCONで使っている',
          content: '自分でexporterを選定・導入し、メトリクス可視化まで持っていけて、アラートルールの設定もできるくらいには仕事で使いました。\
                    ISUCON14で計測基盤を整えた話を、自身の技術ブログ記事「ISUCON14 に俺らの計測基盤で挑んだ」に書いています。',
        },
        {
          name: 'MySQL',
          level: '実務で運用している。ISUCONでチューニングしたことがある',
          content: 'データベースの中身についての理解は浅いですが、実務ではIaaS上でレプリケーション構成を組んだりしています。\
                    （AWS寄りの話ですが）本番環境でMySQL互換のAuroraにおけるBlue/Greenデプロイメントを実施したこともあります。',
        },
        {
          name: 'Nginx',
          level: '実務で運用している。ISUCONでチューニングしたことがある',
          content: '実務でもISUCONでも、調べながら・動かしてみながら運用経験を積んできました。',
        },
        {
          name: 'Git/GitHub',
          level: 'チーム開発に必要な基本操作ができる。CI/CDの構築が、リファレンスで調べながらできる',
          content: '個人開発でも実務でも、プロジェクトのソース管理に使用しています。\
                    GitHub ActionsでCI/CDを構築するのが好きです。',
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