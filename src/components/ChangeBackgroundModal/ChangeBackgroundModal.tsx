import React, {FC, ReactNode} from 'react';

import bg_images from '../../constants/index';

import './ChangeBackgroundModal.css';

type ChangeBackgroundModalPropsType = {
    modalActive: boolean
    setModalActive: (active: boolean) => void
    children: ReactNode
}

export const ChangeBackgroundModal: FC<ChangeBackgroundModalPropsType> = (props) => {

    const {modalActive, setModalActive, children} = props

    const images = bg_images.bg_images.map(img => {
        return (
            <span key={img.id}>
                {img.image}
            </span>
        )
    })

    return (
        <div className={modalActive ? 'modal active' : 'modal'} onClick={() => setModalActive(false)}>
            <div className={modalActive ? 'modal_content active' : 'modal_content'} onClick={e => e.stopPropagation()}>
                {children}
            </div>

        </div>
    );
};