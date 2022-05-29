import React, { Component, ErrorInfo, ReactNode } from "react";
import errorIcon from '../images/error-icon.png';
import '../styles/components/error-boundary.scss';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className='error-bundary'>
                    <img src={errorIcon} alt='error-img' />
                    <h3>Oops... Something went wrong</h3>
                    <p>Please, try again later...</p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;