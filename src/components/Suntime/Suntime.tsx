
import styles from './Suntime.module.css';
import sunTimeImg from '../../assets/sun-time.svg';
import sunChartImg from '../../assets/sun-chart.svg';


export function Suntime(){
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>
                <img src={sunTimeImg} alt="imagem de sol" />
                Horário do sol
            </h2>
            <div className={styles.sunChartWrapper}>
                <div className={styles.sunChart}>
                    <div className={styles.chart}>
                        <img src={sunChartImg} alt=" posição do sol no céu" />
                    </div>
                    <time className={styles.now}>15:02</time>
                </div>
            </div>
            
            <div className={styles.time}>
                <time className={styles.sunrise}>06:00</time>
                <time className={styles.sunset}>18:10</time>
            </div>
            
        </section>
    );
}