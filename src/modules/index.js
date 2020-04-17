import item001 from "../images/item001.jpg";
import item002 from "../images/item002.jpg";
import item003 from "../images/item003.jpg";

// action-type
const CHANGE_TAB = "CHANGE_TAB";

// reducer
const initialState = {
  index: 0,
  images: [item001, item002, item003],
  initial: ["S", "C", "M"],
  names: ["シュークリーム", "チョコレートケーキ", "ミルクプリン"],
  officialNames: [
    "ｶｽﾀｰﾄﾞｼｭｰｸﾘｰﾑ いちごのｱｲｼﾝｸﾞがけ（3個入り）",
    "チョコレートムースケーキ（2個入り）",
    "りんごのミルクプリン（２個入り）"
  ],
  categories: ["ヘルシー食", "たんぱく質調整食", "たんぱく質調整食"],
  contentTexts: [
    "お召し上がりになる分だけ取り出し、冷蔵庫にて目安として約5～6時間解凍して下さい。",
    "※生菓子ですので、解凍後は当日中にお召し上がりください。",
    "※必ず冷蔵庫にて解凍して下さい。"
  ]
};

export default function swipe(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TAB:
      return {
        ...state,
        index: action.index
      };
    default:
      return state;
  }
}

// action-creator
export const changeTab = index => {
  /********************************
//本来はここで下記のようにRailsのAPIを叩く

  return async dispatch => {
    const response = await API通信();
    response.status === 200 ?
      // 成功
      dispatch ({
        type: CHANGE_TAB,
        index: response.data.index
      })
    :
      // 失敗
      dispatch ({ type: ERROR });
  }
  
********************************/

  return {
    type: CHANGE_TAB,
    index: index
  };
};
