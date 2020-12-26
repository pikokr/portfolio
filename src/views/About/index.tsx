import React, { Component } from 'react';
import AboutCard from '../../components/AboutCard';
import styles from './about.module.sass'

class AboutPage extends Component {
    render() {
        return (
            <div>
                <h1>파랑이에 대해 더 알아볼까요?</h1>
                <div className={styles.aboutContainer}>
                    <AboutCard title="프로그래밍" icon={['fas', 'code']} desc={
                      <div>
                        파랑이가 할수 있는 프로그래밍 언어들
                        <p>- Javascript</p>
                        <p>- Typescript</p>
                        <p>- Kotlin</p>
                        <p>- PHP(안씀)</p>
                        <p>- C,C#,C++(안씀)</p>
                        <p>- Java(안씀)</p>
                        <p>- Python(안씀)</p>
                      </div>
                    }/>
                </div>
            </div>
        );
    }
}

export default AboutPage;