/**
 * 制作者：bot810
 * 制作日：2022/06/04
 * 更新日：2022/08/27
 * 概要：onloadイベントを定義する(onloadイベントは一つにまとめた方が良いらしいので)
 */

// 画面読み込み時に動作
// export default const onLoad = () => {
//     new Promise((resolve) => {
//         resolve(panelInit()); // ここでデータベースから読み込み
//     }).then((data) => {
//         // パネル配置記憶用の変数にデータ格納
//         // div_control.jsで使用する変数にもなる
//         panelInfo = data;
//         console.log(panelInfo);
//         panelInfo.forEach(containerAppend.bind(true));
//     });
// };
