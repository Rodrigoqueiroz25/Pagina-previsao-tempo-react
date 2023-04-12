
import styles from './WeekWeather.module.css';
import weatherClouds from '../../assets/weather-clouds.svg';
import weatherSum from '../../assets/weather-sun.svg';
import weatherRain from '../../assets/weather-rain.svg';
import weatherThunder from '../../assets/weather-thunder.svg';
import weatherCloudy from '../../assets/weather-cloudy.svg';

export function WeekWeather() {
    return (
        <section className={styles.container}>
            <div className={styles.day}>
                <h4 className={styles.title}>Amanhã</h4>
                <img src={weatherClouds} alt="nublado"/>
                    <div className={styles.maxmin}>21º <span>16º</span></div>
            </div>
            <div className={styles.day}>
                <h4 className={styles.title}>Sexta</h4>
                <img src={weatherSum} alt="nublado"/>
                    <div className={styles.maxmin}>21º <span>16º</span></div>
            </div>
            <div className={styles.day}>
                <h4 className={styles.title}>Sábado</h4>
                <img src={weatherRain} alt="nublado"/>
                    <div className={styles.maxmin}>25º <span>21º</span></div>
            </div>
            <div className={styles.day}>
                <h4 className={styles.title}>Domingo</h4>
                <img src={weatherThunder} alt="nublado"/>
                    <div className={styles.maxmin}>20º <span>14º</span></div>
            </div>
            <div className={styles.day}>
                <h4 className={styles.title}>Segunda</h4>
                <img src={weatherCloudy} alt="nublado"/>
                    <div className={styles.maxmin}>24º <span>18º</span></div>
            </div>
        </section>
    );
}