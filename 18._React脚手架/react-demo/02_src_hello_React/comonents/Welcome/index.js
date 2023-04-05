import React,{Component} from 'react';
import welcome from './index.module.css'

export default class Welcome extends Component {
    render() {
        return (
            <p className={welcome.title}>Welcome!!!!</p>
        )
    }
}