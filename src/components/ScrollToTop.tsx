import { ReactNode, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollToTopProps {
    children: JSX.Element;
}
export const ScrollToTop = ({ children }: ScrollToTopProps) => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
} 
