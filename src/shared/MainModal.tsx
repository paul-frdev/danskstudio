import React, { useEffect } from "react";
import FocusLock from "react-focus-lock";
import ReactDOM from "react-dom";
import '../styles/page-components/main-modal.scss';
import { ReactComponent as CloseIcon } from '../images/closeIcon.svg';

export interface AppModalProps {
  isShown: boolean;
  hide: () => void;
  appModalContent: JSX.Element;
  headerText: string;
}

export const AppModal: React.FC<AppModalProps> = ({ isShown, hide, appModalContent, headerText }) => {

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.keyCode === 27 && isShown) {
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
      <div className='app-modal'>
        <div className="app-modal__wrapper">
          <a href="#"></a>
          <FocusLock>
            <div className="app-modal__content">
              <div className="app-modal__header">
                <h2>{headerText}</h2>
                <button className='app-modal__close' onClick={hide}>
                  <CloseIcon />
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