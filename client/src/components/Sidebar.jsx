import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../context/index.js";
import Button from "./UI/Button.jsx";
import InputField from "./UI/InputField.jsx";
import FilterList from "./FilterList.jsx";

const Sidebar = observer((props) => {
    const {type, brand} = useContext(Context)

    const changeTypes = event => {
        if (!type.filter.length) {
            type.setFilter(type.list.map(t => t.id))
            type.removeFilter(parseInt(event.target.dataset.id))
        } else if (event.target.checked) {
            type.addFilter(parseInt(event.target.dataset.id))
        } else {
            type.removeFilter(parseInt(event.target.dataset.id))
        }
    }

    return (
        <div {...props} className={['', props.className].join(' ')}>
            <FilterList store={type} idName='type' title='Types'/>
            <FilterList store={brand} idName='brand' title='Brands'/>
        </div>
    );
});

export default Sidebar;