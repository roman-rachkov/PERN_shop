import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../context/index.js";
import DeviceItem from "./DeviceItem.jsx";

const DeviceList = observer((props) => {
    const {device} = useContext(Context)

    return (
        <div className={['flex flex-wrap justify-start content-start -mx-3', props.className].join(' ')}>
            {
                device.list.map(d => {
                    return <DeviceItem className={'w-1/4 p-3'} key={d.id} device={d}/>
                })
            }
        </div>
    );
});

export default DeviceList;