import React, { useEffect } from "react";
import FocusLock from "react-focus-lock";
import ReactDOM from "react-dom";
import '../styles/page-components/main-modal.scss';
import { ReactComponent as CloseIcon } from '../images/close-icon.svg';

export interface AppModalProps {
  appModalContent: JSX.Element;
  headerText?: string;
  isShown: boolean;
  hide: () => void;
}

export const MainModal: React.FC<AppModalProps> = ({ isShown, hide, appModalContent, headerText }) => {

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape" && isShown) {
      hide();
    }
  };

  useEffect(() => {
    isShown
      ?
      (document.body.style.overflow = 'hidden')
      :
      (document.body.style.overflow = 'unset');
    document.addEventListener('keydown', onKeyDown, false);
    return () => {
      document.removeEventListener('keydown', onKeyDown, false);
    };

  }, [isShown]);

  const appModal = (
    <>
      <div className='main-modal'>
        <div className="main-modal__wrapper">
          <a href="#"></a>
          <FocusLock>
            <div className="main-modal__content">
              <div className="main-modal__header">
                <h2>{headerText}</h2>
                <button className='main-modal__close' onClick={hide}>
                  <CloseIcon/>
                </button>
              </div>
              {appModalContent}
            </div>
          </FocusLock>
        </div>
      </div>
    </>
  );

  return isShown ? ReactDOM.createPortal(appModal, document.body) : null
};