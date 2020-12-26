import React, { Component } from 'react';
import AboutCard from '../../components/AboutCard';
import styles from './about.module.sass'

class AboutPage extends Component {
    render() {
        return (
            <div>
                <h1>파랑이에 대해 더 알아볼까요?</h1>
                <div className={styles.aboutContainer}>
                    <AboutCard title="프로그래밍" icon={['fas', 'code']} desc="테스트"/>
                </div>
            </div>
        );
    }
}

export default AboutPage;