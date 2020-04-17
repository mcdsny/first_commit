/* 今回はCodeSandboxにデフォルトで用意されているApp.jsというコンポーネントを
経由してSwipeコンポーネントを使用していますが、実際に開発する際は /scr/index.js
から直接Swipeコンポーネントを使用しても問題ありません */

import React from "react";
import "./styles.css";

// Swipeコンポーネントをここでインポートします
import Swipe from "./components/swipe";

export default function App() {
  return (
    <div className="App">
      <h1>スマホアプリっぽいWebページ</h1>
      <Swipe />
    </div>
  );
}
