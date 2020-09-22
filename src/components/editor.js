import React, { Component } from 'react';
import { Editor } from 'primereact/editor';
import { Button } from 'primereact/button';


class EditorDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text1: '<div>Hello World!</div><div>PrimeReact <b>Editor</b> Rocks</div><div><br></div>',
            text2: ''
        };
    }

    renderHeader() {
        return (
            <span className="ql-formats">
                <button className="ql-bold" aria-label="Bold"></button>
                <button className="ql-italic" aria-label="Italic"></button>
                <button className="ql-underline" aria-label="Underline"></button>
            </span>
        );
    }

    render() {
        const header = this.renderHeader();

        return (
            <div>
                <div className="card">
                    <Editor style={{ height: '320px' }} value={this.state.text1} onTextChange={(e) => this.setState({ text1: e.htmlValue })} />
                </div>
                <div className="card">
                    <Button style={{ color: 'blue' }} label="Submit" />
                </div>
            
            </div>
        );
    }
}


export default EditorDemo;