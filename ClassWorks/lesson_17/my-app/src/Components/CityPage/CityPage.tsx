import React from 'react';

import style from './CityPage.module.css';

function CityPage(): JSX.Element {
    return (
        <div className={style.CityPage}>
            <h1>Все о погоде</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Fugit eum unde possimus quo, fuga dignissimos maxime enim ut
                 commodi quibusdam itaque rem nobis deserunt soluta praesentium
                 omnis eaque sapiente? Labore maxime molestiae vitae qui
                 adipisci delectus minus quia facilis obcaecati.
            </p>
            <img src="https://img.goodfon.ru/original/1920x1200/9/11/berlin-germaniya-muzey-bode.jpg" alt="" />
        </div>
    );
}
export default CityPage;
