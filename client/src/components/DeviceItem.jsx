import React from 'react';
import Card from "./UI/Card.jsx";

const DeviceItem = ({device, className}, props) => {
    const imageName = () => device.images.filter(i => i.id === device.primaryImageId)[0].filename

    return (
        <div className={className}>
            <Card className={'w-full content-center flex-wrap'} {...props}>
                <img
                    src="http://via.placeholder.com/900x1800"
                    alt={device.name}
                    className='w-full max-h-[200px] object-contain'
                />

                <h5 className='text-center'>{device.name}</h5>
            </Card>
        </div>
    );
};

export default DeviceItem;