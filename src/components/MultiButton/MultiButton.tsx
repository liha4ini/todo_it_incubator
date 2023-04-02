import React, {FC, ReactNode} from 'react';


type MultiButtonPropsType = {
    children: ReactNode
    callBack: () => void
    className: string

}

export const MultiButton: FC<MultiButtonPropsType> = (props) => {

    const {children, callBack, className, ...restProps} = props;

    const onClickHandler = () => {
        callBack()
    }

    return (
        <button
            className={className}
            onClick={onClickHandler}
        >
            {children}
        </button>
    );
};