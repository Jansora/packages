import React from 'react';
import {Button, Checkbox, Dropdown, Form, Input, Select} from "semantic-ui-react";
import {useParams} from 'react-router-dom';
// import {Aside, FlexPadding, Label as CustomLabel, LinkItem, Section} from "@jansora/material/es/components/styled/frameworks";
import GetColor from "@jansora/material/es/hooks/getter/GetColor";
import GetDarkMode from "@jansora/material/es/hooks/getter/GetDarkMode";
import StyledDescription from "@jansora/material/es/components/styled/base/StyledDescription";
import styled from "styled-components";
import StyledText from "@jansora/material/es/components/styled/base/StyledText";


/**
 * <Description> <br>
 *
 * @author zhang.yangyuan (jansora)
 2020/12/05 16:26:57
 */

const StyledDropdown = styled(Dropdown)`
  :hover {
    //z-index: 1001 !important;
  }
  div.ui.active.visible.dropdown {
  
  }

`

const updateVar = (value) => {

    try{
        // eslint-disable-next-line
        const Var = Function('"use strict";return (' + value + ')')();
        if (!Var.language) {
            Var.language = "html"
        }
        return Var

    } catch (e) {

    }
    return {}
}

const MaterialSaveEntity = (props) => {

    const { tags, setTags, logos, save , classifies, name, setName, description, setDescription, logo, setLogo, classify, setClassify, enabled, setEnabled, tag, setTag} = props;
    const {id} = useParams();
    const color = GetColor()
    const dark = GetDarkMode();
    return <React.Fragment>

        <Form.Field style={{marginRight: 10}}>
            <label style={{width: 50}}>名称: </label>
            <Input style={{width: 150}} value={name} onChange={event => setName(event.target.value)} placeholder='名称'/>
        </Form.Field>

        <Form.Field style={{marginRight: 10}}>
            <label style={{width: 50}}>分类: </label>
            {/*<Input*/}
            {/*    style={{width: 150}}*/}
            {/*    // label="分类"*/}
            {/*    list='classify'*/}
            {/*    onChange={event => setClassify(event.target.value)}*/}
            {/*    placeholder='请选择分类'*/}
            {/*/>*/}
            {/*<datalist id='classify'>*/}
            {/*    {*/}
            {/*        classifies.map( classify_ => <option value={classify_.bv}>{classify_.av}</option>)*/}
            {/*    }*/}
            {/*    <option value='English'>English</option>*/}
            {/*    <option value='Chinese'>Chinese</option>*/}
            {/*    <option value='Dutch'>Dutch</option>*/}
            {/*</datalist>*/}


                    <Select
                        // size="mini"
                        // inline
                        width={2}
                        // control={Select}
                        // label='分类'
                        value={classify}
                        onChange={(event, {value}) => console.log(value) || setClassify(value)}
                        options={classifies.map(classify_ => ({key: classify_.id, text: classify_.av, value: classify_.bv}))}
                        placeholder='请选择分类'
                    />
        </Form.Field>

        {/*<label>分类</label>*/}

        {/*        <Select*/}
        {/*            // inline*/}
        {/*            width={2}*/}
        {/*            // control={Select}*/}
        {/*            label='分类'*/}
        {/*            value={classify}*/}
        {/*            onChange={(event, {value}) => console.log(value) || setClassify(value)}*/}
        {/*            options={classifies.map(classify_ => ({key: classify_.id, text: classify_.av, value: classify_.bv}))}*/}
        {/*            placeholder='请选择分类'*/}
        {/*        />*/}
        <Form.Field style={{marginRight: 10}}>
            <label style={{width: 50}}>画像: </label>
            <StyledDropdown
                onAddItem={(e, { value }) => {
                    if(tags.filter(tag => tag.key === value).length === 0) {
                        setTags(tags.concat([{key: value, value: 1}]))
                    }
                }}
                onChange={(e, { value }) => setTag(value)  }
                options={tags.map(tag_ => {return {key: tag_.key, text: tag_.key, value: tag_.key}})}
                placeholder={'添加画像'}
                search
                selection
                multiple
                allowAdditions
                additionLabel={<StyledDescription>自定义标签</StyledDescription>}
                value={tag}
                renderLabel={(label) => ({ content: label.text,})}
            />
        </Form.Field>
                {/*<Form.Field required*/}
                {/*            // inline*/}
                {/*            width={3}>*/}
                {/*    <label>画像</label>*/}
                {/*    */}
                {/*</Form.Field>*/}
        <Form.Field style={{marginRight: 10}}>
            <label style={{width: 50}}>logo: </label>
            <StyledDropdown
                // loading={logosLoading}
                onChange={(e, { value }) => setLogo(value)}
                options={logos.map((l, index) => {return {key: index, text: `${l.key}` ,
                    value: l.value}})}
                placeholder='选择Logo'
                search
                selection
                additionLabel={<StyledDescription>自定义标签</StyledDescription>}
                value={logo}
            />
        </Form.Field>



                {/*<Form.Field required*/}
                {/*            // inline*/}
                {/*            width={2}>*/}
                {/*    <label>引导图片</label>*/}
                {/*    <StyledDropdown*/}
                {/*        // loading={logosLoading}*/}
                {/*        onChange={(e, { value }) => setLogo(value)}*/}
                {/*        options={logos.map((l, index) => {return {key: index, text: `${l.key}` ,*/}
                {/*            value: l.value}})}*/}
                {/*        placeholder='选择Logo'*/}
                {/*        search*/}
                {/*        selection*/}
                {/*        additionLabel={<StyledDescription>自定义标签</StyledDescription>}*/}
                {/*        value={logo}*/}
                {/*    />*/}
                {/*</Form.Field>*/}
                {/*<Form.Field width={2} >*/}
        <Form.Field style={{marginRight: 10}}>
            <label style={{width: 50}}>权限({enabled ? '加密' : '公开'}): </label>

                <Checkbox inverted={dark}checked={enabled} onChange={(_, {checked}) => setEnabled(checked)} />
            <StyledText style={{width: 50}}>权限({enabled ? '加密' : '公开'}): </StyledText>

        </Form.Field>
        <Form.Field style={{marginRight: 10}}>
            <label style={{width: 50}}>操作: </label>
            <Button style={{marginRight: 20}} color={color} content={!id ? '新建组件' : "更新组件"} onClick={() => save()} />
        </Form.Field>
                    {/*<label>{"权限"}</label>*/}
                    {/*<div style={{display: "flex", alignItems: "center", height: "38px"}}>*/}
                    {/*    <Checkbox label={"公开"} checked={enabled} onChange={(_, {checked}) => setEnabled(checked)} />*/}
                    {/*</div>*/}
                {/*</Form.Field>*/}
                {/*<Form.Field width={!!id ? 3 : 2}>*/}
                {/*    <label>操作</label>*/}
                {/*    <div style={{display: "flex", alignItems: "center"}}>*/}
                {/*        <Button style={{marginRight: 20}} color={color} content={!id ? '新建组件' : "更新组件"} onClick={() => save()} />*/}
                {/*    </div>*/}
                {/*</Form.Field>*/}
    </React.Fragment> ;

}

export default MaterialSaveEntity;
