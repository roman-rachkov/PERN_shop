import React from 'react';
import InputField from "./UI/InputField.jsx";
import {observer} from "mobx-react-lite";

const FilterList = observer(({store, title, idName}, props) => {
    const changeFilter = event => {
        if (!store.filter.length) {
            store.setFilter(store.list.map(t => t.id))
            store.removeFilter(parseInt(event.target.dataset.id))
        } else if (event.target.checked) {
            store.addFilter(parseInt(event.target.dataset.id))
        } else {
            store.removeFilter(parseInt(event.target.dataset.id))
        }
    }

    return (<>
        <div className="filter">
            <h5 className={'mr-auto text-xl font-bold mb-2'}>{title}</h5>
            <div className="filter__list flex flex-wrap">
                {store.list.map((s) => {
                    return <div className={'mr-10'} key={s.id}>
                        <InputField
                            type='checkbox'
                            data-id={s.id}
                            id={`${idName}-${s.id}`}
                            checked={store.inFilter(s.id) || !store.filter.length}
                            onChange={changeFilter}
                        />
                        <label className={'ml-2 select-none'} htmlFor={`${idName}-${s.id}`}>{s.title}</label>
                    </div>
                })}
            </div>
        </div>
        <hr className='my-5'/>
    </>);
});

export default FilterList;