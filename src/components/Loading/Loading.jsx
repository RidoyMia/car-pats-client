import React from 'react';

import { Audio, Blocks } from 'react-loader-spinner'
const Loading = () => {
    return (
        <div className='flex justify-center items-center align-middle py-10'>
            <Blocks
                visible={true}
                height="50"
                width="50"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
            />
        </div>
    );
};

export default Loading;