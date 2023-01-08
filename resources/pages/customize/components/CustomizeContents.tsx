/**
 * 作成者：NumLock
 * 作成日：2022/12/10
 * 更新日：
 * 概要：パネルカスタマイズ画面のcontentsタブでの動作を設定
 */

import React from 'react';
import * as Cust from '../css/Customize';

export const Contents = () => (
    <>
        {/* <!-- contentsタブ --> */}
        <Cust.Contents>
            <h6>Contents</h6>
            <div>{/* <!-- ここにコンテンツ選択の諸々が表示される --> */}</div>
        </Cust.Contents>
    </>
);

export default Contents;
