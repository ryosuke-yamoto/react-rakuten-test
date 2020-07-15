import React from 'react';
import { Goods } from '../../services/Models';
import { useParams } from 'react-router-dom';
import './GoodsTitle.css';

type Params = {
  categoryId: string;
};

const GoodsTitle: React.FC = () => {
  const params: Params = useParams();
  const titleMake = () => {
    switch (params.categoryId) {
      case '566382':
        return 'おもちゃ';
      case '101070':
        return 'スポーツ・アウトドア';
      case '562637':
        return '家電';
      case '551167':
        return 'スイーツ・お菓子';
      case '200162':
        return '本・雑誌・コミック';
      case '101114':
        return '車・バイク';
      case '100026':
        return 'パソコン・周辺機器';
      case '558929':
        return '腕時計';
      default:
        return '';
    }
  };
  const title = titleMake();

  const categoryCaptionMake = () => {
    switch (params.categoryId) {
      case '566382':
        return 'おもちゃの通販なら楽天市場。話題の人気おもちゃが大集合！ぬいぐるみ、人形、知育玩具・学習玩具、ボードゲームなどジャンルも豊富に取り揃え。懐かしの商品から新作商品まで、口コミ・ランキング・各種特集ページから簡単にお選びいただけます。';
      case '101070':
        return 'スポーツ・アウトドア用品の通販なら楽天市場。自転車・つり・サッカー・野球といった人気スポーツからマイナースポーツまで品数豊富に取り揃え！用途に合わせた検索方法であなたに合った商品が見つかります。';
      case '562637':
        return '家電の通販なら楽天市場。人気の生活家電・キッチン家電・美容健康家電・季節家電などが大集合！掃除機・洗濯機・冷蔵庫・炊飯器・空気清浄機・エアコン・加湿器・ミシン・マッサージ器・脱毛器など豊富に取り揃え。最新商品やランキングも充実！';
      case '551167':
        return 'スイーツの通販なら楽天市場。TV・雑誌で話題の人気スイーツ・洋菓子・和菓子・チョコレート・クッキー・駄菓子・中華菓子などが大集合！ご当地スイーツ・訳あり商品も品数豊富に取り揃え。口コミ・ランキング・各種特集ページから簡単にお選びいただけます。';
      case '200162':
        return '本、書籍、雑誌の通販なら楽天BOOKS。新刊・予約・ベストセラーはもちろん、注目・話題の本など豊富な品揃え。写真集など限定特典・商品も多数。コンビニ受け取りなら送料無料＆24時間受け取り可能。';
      case '101114':
        return '自動車（新車／中古車）・バイク（単車）情報から買取り見積り、査定、自動車保険、カーリース、パーツ取付けなどのサービスやポイント、プレゼントをゲットできる車の総合サイトです。注目の車やバイクが大集合！';
      case '558929':
        return '腕時計の通販なら楽天市場。人気の腕時計が大集合！レディース・メンズも品数豊富に取り揃え。有名、人気のブランドアイテムからオリジナル商品など盛りだくさん。口コミ・ランキング・各種特集ページから簡単にお選びいただけます。ブランド別検索も充実！';
      default:
        return '';
    }
  };
  const categoryCaption = categoryCaptionMake();

  return (
    <div className="title-wrap">
      <h1 className="main-title">{`「${title}」の商品`}</h1>
      <p className="category-caption">{categoryCaption}</p>
    </div>
  );
};

export default GoodsTitle;
