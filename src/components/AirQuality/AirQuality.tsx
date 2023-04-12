
import styles from './AirQuality.module.css';
import leafImg from '../../assets/leaf.svg';


export function AirQuality() {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>
                <img src={leafImg} alt="imagem de folha" />
                Qualidade do ar
            </h2>

            <p className={styles.avaliation}>Boa</p>
            <p className={styles.number}>21</p>
            <div className={styles.info}>
                <div className={styles.infonumber}>
                    <p>12.9</p>
                    <small>PM2.5</small>
                </div>
                <div className={styles.infonumber}>
                    <p>12.9</p>
                    <small>PM10</small>
                </div>
                <div className={styles.infonumber}>
                    <p>2.1</p>
                    <small>SO₂</small>
                </div>
                <div className={styles.infonumber}>
                    <p>1.4</p>
                    <small>NO₂</small>
                </div>
                <div className={styles.infonumber}>
                    <p>21.2</p>
                    <small>O₂</small>
                </div>
                <div className={styles.infonumber}>
                    <p>0.7</p>
                    <small>CO</small>
                </div>
            </div>

        </section>
    );
}