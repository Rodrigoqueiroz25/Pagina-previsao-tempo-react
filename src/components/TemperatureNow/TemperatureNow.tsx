
import pinImg from '../../assets/pin.svg';
import tempWindImg from '../../assets/temp-wind.svg';
import tempHumidityImg from '../../assets/temp-humidity.svg';
import tempRainImg from '../../assets/temp-rain.svg';
import styles from './TemperatureNow.module.css';


export function TemperatureNow() {
    return (
        <section className={styles.container} >           
            <div className={styles.localization}>
                <img src={pinImg} alt="icone de localização" />
                <strong>Aracaju, SE</strong>
            </div>
            <div className={styles.temp}>
                <div className={styles.number}>18</div>
                <div className={styles.minmax}>
                    22º
                    <span>16º</span>
                </div>
            </div>

            <div className={styles.statistics}>
                <div className={styles.stats} id="wind">
                    <img src={tempWindImg} alt="icone de vento" />
                    <div className={styles.info}>
                        <p>Vento</p>
                        <h5>17 <span>km/h</span></h5>
                    </div>
                </div>

                <div className={styles.stats} id="humidity">
                    <img src={tempHumidityImg} alt="icone de humidade" />
                    <div className={styles.info}>
                        <p>Humidade</p>
                        <h5>31 <span>%</span></h5>
                    </div>
                </div>

                <div className={styles.stats} id="rain">
                    <img src={tempRainImg} alt="icone de chuva" />
                    <div className={styles.info}>
                        <p>Chuva</p>
                        <h5>10 <span>%</span></h5>
                    </div>
                </div>
            </div>

        </section>
    );
}