import React, {useEffect, useState} from 'react';

import {useLocation, useNavigate, useParams} from "react-router-dom";
import GetColor from "@jansora/material/es/hooks/getter/GetColor";
import {FetchAddresses} from "../../../request/beike";
import {Dimmer, Divider, Header, Icon, Label, Loader, Modal, Segment} from "semantic-ui-react";
import StyledDescription from "@jansora/material/es/components/styled/base/StyledDescription";
import GetDarkMode from "@jansora/material/es/hooks/getter/GetDarkMode";

const AddressMenu = () => {

    const navigate = useNavigate();
    const color = GetColor();
    const {pathname} = useLocation();

    // console.log(useParams(), "AreaMenuuseParams()")
    const {cityId, areaId, districtId, addressId} = useParams();
    const [addresses, loading] = FetchAddresses(districtId);

    const [visible, setVisible] = useState(false);

    const dark = GetDarkMode();
    // SetTitle('贝壳房价分析')
    const orderedAddresses = addresses.filter(address => address.id.toString() === addressId).concat(addresses.filter(address => address.id.toString() !== addressId))
    const renderMenu = adds => adds.map(address => {
        return {...address, pathname: `/beike/city/${cityId}/area/${areaId}/district/${districtId}/address/${address.id}`, name: address.address}
    }).map((item, index) =>
        <Label
            key={index}
            style={{cursor: "pointer", marginRight: 10}}
            onClick={() => !pathname.startsWith(item.pathname) ? navigate(item.pathname) : navigate(`/beike/city/${cityId}/area/${areaId}/district/${districtId}`)}
            active={((pathname.startsWith(item.pathname + "/") || pathname === item.pathname) || pathname === item.pathname)}
            color={(pathname.startsWith(item.pathname + "/") || pathname === item.pathname) ? color : (dark ? "black" : null)}
        >
            <>{item.name}</>
        </Label>
    )

    useEffect(() => {
        if (!!addressId) {
            setVisible(false)
        }
    }, [addressId])


    return <React.Fragment>
        <StyledDescription style={{marginRight: 10}}> 小区: </StyledDescription>

        <Loader inverted={dark} active={loading}/>


            {
                orderedAddresses.length < 20 ? renderMenu(orderedAddresses) : <>
                {
                    renderMenu(orderedAddresses.slice(0, 20))
                }
                    <Modal
                        dimmer={'blurring'}
                        open={visible}
                        trigger={<Icon style={{cursor: "pointer"}} name="angle double right" title="更多" onClick={() => setVisible(true)} />}
                        style={{width: '80%'}}
                    >
                        <Segment inverted>
                            <Dimmer active={loading}>
                                <Loader active={loading}>选择中</Loader>
                            </Dimmer>
                            <Header as='h3' textAlign='center' style={{margin: "10px"}}>全部小区信息</Header>
                            <Divider />
                            {renderMenu(orderedAddresses)}
                        </Segment>
                    </Modal>
                </>
            }

    </React.Fragment>;
}

export default AddressMenu;