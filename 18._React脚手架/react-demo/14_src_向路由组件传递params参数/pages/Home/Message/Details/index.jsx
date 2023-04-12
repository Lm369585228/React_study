import React, { Component } from 'react'

export default class Detils extends Component {
    state = {
        contents: [
            { id: '01', content: "小廖" },
            { id: '02', content: "小金" },
            { id: '03', content: "西奥多" },
        ]
    }
    render() {
        console.log(this.props,'!!!!!!!!!!');
        const {id,text} = this.props.match.params
        const contentResult = this.state.contents.find((contentsObj) => {
            return contentsObj.id === id
        })
        return (
            <ul>
                <li>id:{id}</li>
                <li>text:{text}</li>
                <li>content:{contentResult.content}</li>
            </ul>
        )
    }
}
