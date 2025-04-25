import React from "react";
import * as SC from './styles'

const Loader = ({ size = 50, color = "#3498db", bgColor = "#f3f3f3" }) => {
    return (
        <SC.LoaderWrapper>
            <SC.Spinner
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    borderColor: bgColor,
                    borderTopColor: color
                }}
            />
        </SC.LoaderWrapper>
    );
};

export default Loader;