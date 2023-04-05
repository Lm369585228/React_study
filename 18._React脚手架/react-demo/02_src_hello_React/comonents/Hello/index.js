import React,{Component} from 'react';
import hello from './index.module.css'

export default class Hello extends Component {
    render() {
        return (
            <p className={hello.title}>hello.react!!</p>
        )
    }
}