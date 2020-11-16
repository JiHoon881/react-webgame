import React, { PureComponent } from 'react';

class Try extends PureComponent {
    render() {
        const { tryInfo } = this.propsl
        return (
            <li>
                <div>{tryInfo.try}</div>
                <div>{tryInfo.result}</div>
            </li>
        );
    }
}

export default Try;
