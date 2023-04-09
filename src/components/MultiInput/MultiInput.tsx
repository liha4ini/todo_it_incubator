import React, {ChangeEvent, KeyboardEvent, FC} from 'react';


type MultiInputPropsType = {
    inputClasses?: string
    inputValue: string
    setInputValue: (inputValue: string) => void
    inputType?: string
    callBack: () => void
    placeholder?: string
}

export const MultiInput: FC<MultiInputPropsType> = (props) => {

    const {inputValue, setInputValue, inputClasses, inputType, callBack, placeholder, ...restProps} = props

    const onChangeInputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            callBack()
            setInputValue('')
        }
    }

    return (
        <div>
            <input
                className={inputClasses}
                value={inputValue}
                onChange={onChangeInputValueHandler}
                onKeyPress={onKeyPressHandler}
                placeholder={placeholder}
            />
        </div>
    );
};