/**
 * 作成者：NumLock
 * 作成日：2022/12/10
 * 更新日：
 * 概要：カスタマイズ画面のパネルタブ用js．パネルの配置とかレイアウトの変更とかする
 */

import React from 'react';
import * as Cust from '../css/Customize';

export const Panel = () => (
    <>
        {/* <!-- panelタブ --> */}
        <Cust.Panel>
            <h6>Panel</h6>

            {/* <!-- ここに各サイズのパネルを追加 --> */}
            {/* <!-- パネルの種類は可変なのでjsで動的に設定する予定 --> */}

            <br />

            <Cust.PanelThumbnail id="panel_L" width="40%">
                <Cust.PanelThumbnailLabel>4×4</Cust.PanelThumbnailLabel>
                <Cust.PanelThumbnailImg src="/images/image_panel_L.jpg" name="2" />
            </Cust.PanelThumbnail>

            <Cust.PanelThumbnail id="panel_M_hol" width="40%">
                <Cust.PanelThumbnailLabel>1×2</Cust.PanelThumbnailLabel>
                <Cust.PanelThumbnailImg src="/images/image_panel_M_h.jpg" name="4" />
            </Cust.PanelThumbnail>

            <Cust.PanelThumbnail id="panel_M_var" width="20%">
                <Cust.PanelThumbnailLabel>2×1</Cust.PanelThumbnailLabel>
                <Cust.PanelThumbnailImg src="/images/image_panel_M_v.jpg" name="3" />
            </Cust.PanelThumbnail>

            <Cust.PanelThumbnail id="panel_S" width="20%">
                <Cust.PanelThumbnailLabel>1×1</Cust.PanelThumbnailLabel>
                <Cust.PanelThumbnailImg src="/images/image_panel_S.jpg" name="5" />
            </Cust.PanelThumbnail>
        </Cust.Panel>
    </>
);

export default Panel;
