import React, {FC, ReactNode, useEffect, useState} from 'react';

import {bg_images} from '../../constants';
import './ChangeBackgroundModal.css';

type ChangeBackgroundModalPropsType = {
    modalActive: boolean
    setModalActive: (active: boolean) => void
    children?: ReactNode
    setBgImage: (bgImage: any) => void
}


export const ChangeBackgroundModal: FC<ChangeBackgroundModalPropsType> = (props) => {

    const {modalActive, setModalActive, children, setBgImage, ...restProps} = props



    const images = bg_images.map(img => {

        const onClickImageHandler = (imgID: string) => {
            const image  = bg_images.find(el => el.id === imgID)
            console.log(image)
            if (image) {
                setBgImage(image.image)
                localStorage.setItem('savedImageBackground', image.image)
                setBgImage(image.image)
            }

        }

        return (
            <li className='img_item' key={img.id}>
                <img onClick={() => onClickImageHandler(img.id)} src={img.image} alt="image"/>
            </li>
        )
    })

    return (
        <div className={modalActive ? 'modal active' : 'modal'} onClick={() => setModalActive(false)}>
            <div className={modalActive ? 'modal_content active' : 'modal_content'} >
                <ul className='images_wrapper'>
                    {images}
                </ul>
            </div>

        </div>
    );
};