import React, {ChangeEvent, KeyboardEvent, FC} from 'react';


type MultiInputPropsType = {
    inputValue: string
    setInputValue: (inputValue: string) => void
}

export const MultiInput: FC<MultiInputPropsType> = (props) => {

    const {inputValue, setInputValue} = props

    const onChangeInputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    const onEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTask(inputValue)
            setInputValue('')
        }
    }

    return (
        <div>
            <input value={inputValue}
                   onChange={onChangeInputValueHandler}
                   // onKeyPress={onEnterHandler}
            />
        </div>
    );
};