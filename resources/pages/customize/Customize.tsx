/**
 * 制作者：NumLock
 * 制作日：2022/11/19
 * 更新日：
 * 概要：パネルカスタマイズ画面の外枠を定義
 */

import React from 'react';
import * as Cust from './css/Customize';
import * as GridLayout from '../../css/GridLayout';

const Customize = () => {
    const hoge = () => {
        console.log('hoge');
    };

    return (
        <>
            {hoge()}
            {/* ここからカスタマイズ用の諸々  */}
            {/* 横並びにするために全体をラップ */}
            <Cust.CustomizeFlex>
                <Cust.Preview>
                    <h3>Now Layout</h3>
                    {/* 「id=”container”」という親要素（div 要素）内に配置した「class=”panel_wrap”」という要素（div 要素）を整列させる処理を行う */}
                    <GridLayout.Wrapper>
                        <GridLayout.Container>
                            {/* グリッドのサイズ調整用 */}
                            <GridLayout.PanelWrap area="1 / 1" name="0" />
                            <GridLayout.PanelWrap area="1 / 2" name="1" />
                            <GridLayout.PanelWrap area="1 / 3" name="2" />
                            <GridLayout.PanelWrap area="1 / 4" name="3" />
                            <GridLayout.PanelWrap area="2 / 1" name="4" />
                            <GridLayout.PanelWrap area="2 / 2" name="5" />
                            <GridLayout.PanelWrap area="2 / 3" name="6" />
                            <GridLayout.PanelWrap area="2 / 4" name="7" />
                            <GridLayout.PanelWrap area="3 / 1" name="8" />
                            <GridLayout.PanelWrap area="3 / 2" name="9" />
                            <GridLayout.PanelWrap area="3 / 3" name="10" />
                            <GridLayout.PanelWrap area="3 / 4" name="11" />
                            <GridLayout.PanelWrap area="4 / 1" name="12" />
                            <GridLayout.PanelWrap area="4 / 2" name="13" />
                            <GridLayout.PanelWrap area="4 / 3" name="14" />
                            <GridLayout.PanelWrap area="4 / 4" name="15" />

                            {/* ここにパネルが追加される */}
                        </GridLayout.Container>
                    </GridLayout.Wrapper>
                </Cust.Preview>
                {/* メニュー画面 */}
                <Cust.Menu>
                    <h5>Customize Menu</h5>
                    {/* 非常に見にくいので後でまとめる */}
                    <Cust.MenuUl>
                        <Cust.MenuLi>
                            <Cust.MenuLiLabel>Panel</Cust.MenuLiLabel>
                        </Cust.MenuLi>
                        <Cust.MenuLi>
                            <Cust.MenuLiLabel>Contents</Cust.MenuLiLabel>
                        </Cust.MenuLi>
                        <Cust.MenuLi>
                            <Cust.MenuLiLabel>Preset</Cust.MenuLiLabel>
                        </Cust.MenuLi>
                    </Cust.MenuUl>
                </Cust.Menu>
            </Cust.CustomizeFlex>
        </>
    );
};

export default Customize;
