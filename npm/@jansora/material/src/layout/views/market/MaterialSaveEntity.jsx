import React from 'react';
import {Button, Checkbox, Dropdown, Form, Input, Select} from "semantic-ui-react";
import {useParams} from 'react-router-dom';
// import {Aside, FlexPadding, Label as CustomLabel, LinkItem, Section} from "@jansora/material/es/components/styled/frameworks";
import GetColor from "@jansora/material/es/hooks/getter/GetColor";
import GetDarkMode from "@jansora/material/es/hooks/getter/GetDarkMode";
import StyledDescription from "@jansora/material/es/components/styled/base/StyledDescription";
import styled from "styled-components";


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
        <Form.Field
        width={3}
        control={Input}
        label='名称'
        value={name}
        onChange={event => setName(event.target.value)}
        placeholder='请输入名称'
        />

        <Form.Field
            width={2}
            // loading={classifiesLoading}
            control={Select}
            label='分类'
            value={classify}
            onChange={(event, {value}) => console.log(value) || setClassify(value)}
            options={classifies.map(classify_ => ({key: classify_.id, text: classify_.av, value: classify_.bv}))}
            placeholder='请选择分类'
        />
        <Form.Field required
                    width={3}>
            <label>画像</label>
            <StyledDropdown
                // loading={tagsLoading}
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
        <Form.Field required
                    width={2}>
            <label>引导图片</label>
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
        <Form.Field width={2}>
            <label>{"权限"}</label>
            <div style={{display: "flex", alignItems: "center", height: "38px"}}>
                <Checkbox label={"公开"} checked={enabled} onChange={(_, {checked}) => setEnabled(checked)} />
            </div>
        </Form.Field>
        <Form.Field width={!!id ? 3 : 2}>
            <label>操作</label>
            <div style={{display: "flex", alignItems: "center"}}>
                <Button style={{marginRight: 20}} color={color} content={!id ? '新建' : "更新"} onClick={() => save()} />
            </div>
        </Form.Field>
    </React.Fragment> ;

}

export default MaterialSaveEntity;
