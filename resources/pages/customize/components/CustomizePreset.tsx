/**
 * 作成者：NumLock
 * 作成日：2022/12/10
 * 更新日：
 * 概要：パネルカスタマイズ画面のpresetタブでの動作を設定
 */

import React from 'react';
import * as Cust from '../css/Customize';

export const Preset = () => (
    <>
        {/* <!-- presetタブ --> */}
        <Cust.Preset>
            <h6>Preset Layout</h6>

            <Cust.PresetThumbnail id="preset01">
                <Cust.PresetThumbnailImg src="/images/preset01.png" />
            </Cust.PresetThumbnail>

            <Cust.PresetThumbnail id="preset02">
                <Cust.PresetThumbnailImg src="/images/preset02.png" />
            </Cust.PresetThumbnail>

            <Cust.PresetThumbnail id="preset03">
                <Cust.PresetThumbnailImg src="/images/preset03.png" />
            </Cust.PresetThumbnail>

            <Cust.PresetThumbnail id="preset04">
                <Cust.PresetThumbnailImg src="/images/preset04.png" />
            </Cust.PresetThumbnail>
        </Cust.Preset>
    </>
);

export default Preset;
