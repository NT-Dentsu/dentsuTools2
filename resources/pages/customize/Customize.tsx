/**
 * 制作者：NumLock
 * 制作日：2022/11/19
 * 更新日：2022/12/10
 * 概要：パネルカスタマイズ画面の外枠を定義
 */

import React, { useState } from 'react';
import * as Cust from './css/Customize';
import * as GridLayout from '../../css/GridLayout';
import * as Contents from './components/CustomizeContents';
import * as Panel from './components/CustomizePanel';
import * as Preset from './components/CustomizePreset';

// タブ部分
const TabMenu = () => {
    // 状態変数
    const [select, setSelect] = useState('Contents');
    const [element, setElement] = useState(Contents.Contents);

    // タグクリック時の動作
    const menuSelected = (value: string) => {
        // console.log('hoge');
        // console.log(event.target);
        // console.log(event.currentTarget);
        // console.log(event.currentTarget);

        // 何がクリックされたか判断
        // aタグでなければ何もしない
        // クリックされたタグに応じて中身の表示を変更
        // select要素をつけたり外したりもする

        // setSelect('Contents');
        setSelect(value); // 更新は非同期，この関数から抜けると実行?
        // 選択要素変更
        if (value === 'Contents') {
            setElement(Contents.Contents);
        } else if (value === 'Panel') {
            setElement(Panel.Panel);
        } else if (value === 'Preset') {
            setElement(Preset.Preset);
        }
        console.log(value);
        // console.log(select);
    };

    return (
        <Cust.Menu>
            <h5>Customize Menu</h5>
            <Cust.MenuUl>
                <Cust.MenuLi onClick={() => menuSelected('Panel')}>
                    <Cust.MenuLiLabel name="Panel" selected={select}>
                        Panel
                    </Cust.MenuLiLabel>
                </Cust.MenuLi>
                <Cust.MenuLi onClick={() => menuSelected('Contents')}>
                    <Cust.MenuLiLabel name="Contents" selected={select}>
                        Contents
                    </Cust.MenuLiLabel>
                </Cust.MenuLi>
                <Cust.MenuLi onClick={() => menuSelected('Preset')}>
                    <Cust.MenuLiLabel name="Preset" selected={select}>
                        Preset
                    </Cust.MenuLiLabel>
                </Cust.MenuLi>
            </Cust.MenuUl>
            {element}
        </Cust.Menu>
    );
};

// カスタマイズ画面の本体？
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
                {TabMenu()}
            </Cust.CustomizeFlex>
        </>
    );
};

export default Customize;
