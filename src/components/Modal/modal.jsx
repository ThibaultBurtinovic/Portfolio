// Modal.jsx

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import './modal.scss';
import '../../index.scss';

import croixBlack from "../../assets/croixBlack.svg";

function Modal({ currentIndex, projects, isBtnProjClicked, setIsBtnProjClicked}) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const openModal = () => {
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
        setIsBtnProjClicked(false);
    };

    useEffect(() => {
        if (isBtnProjClicked) {
            openModal();
        }
    }, [isBtnProjClicked]);

    useEffect(() => {
    }, [isModalVisible]);

    // Convert currentIndex to string for comparison
    const currentIndexString = String(currentIndex + 1);

    // Filtrer le projet correspondant à l'ID actuel
    const currentProject = projects.find(project => project.id === currentIndexString);

    // Si le projet correspondant est trouvé, utilisez ses informations
    const pictureUrl = currentProject ? currentProject.pictures[0] : '';
    const title = currentProject ? currentProject.title : '';
    const description = currentProject ? currentProject.description : '';
    const tags = currentProject ? currentProject.tags : '';

    return (
        <aside className={`modal ${isModalVisible ? '' : 'hideModal'}`} aria-hidden="true">
            <div className="modalWrapper">
                <img className="quit" src={croixBlack} alt="croix" onClick={closeModal} />
                <div className="elementsModal">
                    <div className="pictureModal">
                        {title && <h2 className="logoModal">{title}</h2>}
                        {pictureUrl && <img className="imgModal" src={pictureUrl} alt={title} />}
                    </div>
                    <div className="infoModal">
                        {description && <p>{description}</p>}
                        {tags && <span className="tagsModal">{tags}</span>}
                    </div>
                </div>
            </div>
        </aside>
    );
}

// Prop types pour assurer la présence des propriétés nécessaires
Modal.propTypes = {
    currentIndex: PropTypes.number.isRequired,
    projects: PropTypes.array.isRequired,
    isBtnProjClicked: PropTypes.bool.isRequired,
};

export default Modal;
