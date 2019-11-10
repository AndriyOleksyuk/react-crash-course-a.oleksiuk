import React from 'react';

export const Size = React.createContext('lg')

export function withSize(Component) {
    return class SizeWrapper extends React.Component {
        render() {
            return (
                <Size.Consumer>
                    {(value) => (
                        <Component size={value} {...this.props} />
                    )}
                </Size.Consumer>
            )
        }
    }
}