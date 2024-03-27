
import cloudSun from "./resources/cloudSun.svg"
import {cloneElement} from "react";

function CloudSun(props){
    return (<svg className={props.className} viewBox="0 0 321 255" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M45.0292 32.7608L41.5517 29.2833C38.0742 25.8058 32.4567 25.895 29.0683 29.2833L28.9792 29.3725C25.5017 32.85 25.5017 38.4675 28.9792 41.8558L32.4567 45.3333C35.9342 48.8108 41.4625 48.8108 44.94 45.3333L45.0292 45.2442C48.5067 41.8558 48.5067 36.1492 45.0292 32.7608Z"
                fill="white"/>
            <path
                d="M17.9225 89.4708H8.8275C3.92333 89.4708 0 93.3942 0 98.2983V98.3875C0 103.292 3.92333 107.215 8.8275 107.215H17.8333C22.8267 107.304 26.75 103.381 26.75 98.4767V98.3875C26.75 93.3942 22.8267 89.4708 17.9225 89.4708Z"
                fill="white"/>
            <path
                d="M98.1725 0.75H98.0833C93.09 0.75 89.1667 4.67333 89.1667 9.5775V18.1375C89.1667 23.0417 93.09 26.965 97.9942 26.965H98.0833C103.077 27.0542 107 23.1308 107 18.2267V9.5775C107 4.67333 103.077 0.75 98.1725 0.75Z"
                fill="white"/>
            <path
                d="M167.188 29.3725C163.71 25.895 158.093 25.895 154.615 29.2833L151.138 32.7608C147.66 36.2383 147.66 41.8558 151.138 45.2442L151.227 45.3333C154.704 48.8108 160.322 48.8108 163.71 45.3333L167.188 41.8558C170.665 38.3783 170.665 32.85 167.188 29.3725Z"
                fill="white"/>
            <path
                d="M98.0833 44.8875C68.5692 44.8875 44.5833 68.8733 44.5833 98.3875C44.5833 117.519 54.6613 134.327 69.7904 143.786C77.0297 122.814 96.9432 107.75 120.375 107.75C121.297 107.75 122.214 107.773 123.124 107.819C126.987 94.1113 134.723 82.0263 145.076 72.8207C135.996 56.1882 118.342 44.8875 98.0833 44.8875Z"
                fill="white"/>
            <path
                d="M28.9792 167.403C32.4567 170.88 38.0742 170.88 41.5517 167.403L45.0292 163.925C48.5067 160.448 48.4175 154.83 45.0292 151.442L44.94 151.353C41.4625 147.875 35.845 147.875 32.3675 151.353L28.89 154.83C25.5017 158.397 25.5017 163.925 28.9792 167.403Z"
                fill="white"/>
            <path
                d="M93.625 254.875H267.5C297.047 254.875 321 230.922 321 201.375C321 176.281 303.724 155.223 280.417 149.445C280.72 146.734 280.875 143.979 280.875 141.188C280.875 100.56 247.94 67.625 207.312 67.625C173.615 67.625 145.209 90.2827 136.499 121.194C135.589 121.148 134.672 121.125 133.75 121.125C104.203 121.125 80.25 145.078 80.25 174.625C80.25 175.384 80.2658 176.14 80.2971 176.892C64.6881 182.387 53.5 197.262 53.5 214.75C53.5 236.91 71.4646 254.875 93.625 254.875Z"
                fill="white"/>
        </svg>
    )
}

function Sun(props){
    return (<svg className={props.className} xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 512 512">
        <path
            d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/>
    </svg>)
}

function Cloud(props){
    return (<svg className={props.className} xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 640 512">
        <path
            d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"/>
    </svg>)
}

function BrokenClouds(props){
    return (<svg className={props.className} xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 640 512">
        <path
            d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"/>
    </svg>)
}

function ShowerRain(props){
    return (<svg className={props.className} xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 512 512">
        <path
            d="M96 320c-53 0-96-43-96-96c0-42.5 27.6-78.6 65.9-91.2C64.7 126.1 64 119.1 64 112C64 50.1 114.1 0 176 0c43.1 0 80.5 24.3 99.2 60c14.7-17.1 36.5-28 60.8-28c44.2 0 80 35.8 80 80c0 5.5-.6 10.8-1.6 16c.5 0 1.1 0 1.6 0c53 0 96 43 96 96s-43 96-96 96H96zM81.5 353.9c12.2 5.2 17.8 19.3 12.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6S-3.3 490.7 1.9 478.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6zm120 0c12.2 5.2 17.8 19.3 12.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6s-17.8-19.3-12.6-31.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6zm244.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6s-17.8-19.3-12.6-31.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6s17.8 19.3 12.6 31.5zM313.5 353.9c12.2 5.2 17.8 19.3 12.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6s-17.8-19.3-12.6-31.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6z"/>
    </svg>)
}

function Rain(props){
    return (<svg className={props.className} xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 512 512">
        <path
            d="M96 320c-53 0-96-43-96-96c0-42.5 27.6-78.6 65.9-91.2C64.7 126.1 64 119.1 64 112C64 50.1 114.1 0 176 0c43.1 0 80.5 24.3 99.2 60c14.7-17.1 36.5-28 60.8-28c44.2 0 80 35.8 80 80c0 5.5-.6 10.8-1.6 16c.5 0 1.1 0 1.6 0c53 0 96 43 96 96s-43 96-96 96H96zm-6.8 52c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3v3c0 26.5-21.5 48-48 48s-48-21.5-48-48v-3c0-8.5 2.1-16.9 6.2-24.3L89.2 372zm160 0c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3v3c0 26.5-21.5 48-48 48s-48-21.5-48-48v-3c0-8.5 2.1-16.9 6.2-24.3L249.2 372zm124.9 64.6L409.2 372c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3v3c0 26.5-21.5 48-48 48s-48-21.5-48-48v-3c0-8.5 2.1-16.9 6.2-24.3z"/>
    </svg>)
}

function Thunder(props) {
    return (<svg className={props.className} xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 512 512">
        <path
            d="M0 224c0 53 43 96 96 96h47.2L290 202.5c17.6-14.1 42.6-14 60.2 .2s22.8 38.6 12.8 58.8L333.7 320H352h64c53 0 96-43 96-96s-43-96-96-96c-.5 0-1.1 0-1.6 0c1.1-5.2 1.6-10.5 1.6-16c0-44.2-35.8-80-80-80c-24.3 0-46.1 10.9-60.8 28C256.5 24.3 219.1 0 176 0C114.1 0 64 50.1 64 112c0 7.1 .7 14.1 1.9 20.8C27.6 145.4 0 181.5 0 224zm330.1 3.6c-5.8-4.7-14.2-4.7-20.1-.1l-160 128c-5.3 4.2-7.4 11.4-5.1 17.8s8.3 10.7 15.1 10.7h70.1L177.7 488.8c-3.4 6.7-1.6 14.9 4.3 19.6s14.2 4.7 20.1 .1l160-128c5.3-4.2 7.4-11.4 5.1-17.8s-8.3-10.7-15.1-10.7H281.9l52.4-104.8c3.4-6.7 1.6-14.9-4.2-19.6z"/>
    </svg>)
}

function Snow(props){
    return (
        <svg className={props.className} xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 448 512">
            <path
                d="M224 0c17.7 0 32 14.3 32 32V62.1l15-15c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-49 49v70.3l61.4-35.8 17.7-66.1c3.4-12.8 16.6-20.4 29.4-17s20.4 16.6 17 29.4l-5.2 19.3 23.6-13.8c15.3-8.9 34.9-3.7 43.8 11.5s3.8 34.9-11.5 43.8l-25.3 14.8 21.7 5.8c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17l-67.7-18.1L287.5 256l60.9 35.5 67.7-18.1c12.8-3.4 26 4.2 29.4 17s-4.2 26-17 29.4l-21.7 5.8 25.3 14.8c15.3 8.9 20.4 28.5 11.5 43.8s-28.5 20.4-43.8 11.5l-23.6-13.8 5.2 19.3c3.4 12.8-4.2 26-17 29.4s-26-4.2-29.4-17l-17.7-66.1L256 311.7v70.3l49 49c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-15-15V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V449.9l-15 15c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l49-49V311.7l-61.4 35.8-17.7 66.1c-3.4 12.8-16.6 20.4-29.4 17s-20.4-16.6-17-29.4l5.2-19.3L48.1 395.6c-15.3 8.9-34.9 3.7-43.8-11.5s-3.7-34.9 11.5-43.8l25.3-14.8-21.7-5.8c-12.8-3.4-20.4-16.6-17-29.4s16.6-20.4 29.4-17l67.7 18.1L160.5 256 99.6 220.5 31.9 238.6c-12.8 3.4-26-4.2-29.4-17s4.2-26 17-29.4l21.7-5.8L15.9 171.6C.6 162.7-4.5 143.1 4.4 127.9s28.5-20.4 43.8-11.5l23.6 13.8-5.2-19.3c-3.4-12.8 4.2-26 17-29.4s26 4.2 29.4 17l17.7 66.1L192 200.3V129.9L143 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l15 15V32c0-17.7 14.3-32 32-32z"/>
        </svg>
    )
}

function Mist(props){
    return (
        <svg className={props.className} xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 640 512">
            <path
                d="M32 144c0 79.5 64.5 144 144 144H299.3c22.6 19.9 52.2 32 84.7 32s62.1-12.1 84.7-32H496c61.9 0 112-50.1 112-112s-50.1-112-112-112c-10.7 0-21 1.5-30.8 4.3C443.8 27.7 401.1 0 352 0c-32.6 0-62.4 12.2-85.1 32.3C242.1 12.1 210.5 0 176 0C96.5 0 32 64.5 32 144zM616 368H280c-13.3 0-24 10.7-24 24s10.7 24 24 24H616c13.3 0 24-10.7 24-24s-10.7-24-24-24zm-64 96H440c-13.3 0-24 10.7-24 24s10.7 24 24 24H552c13.3 0 24-10.7 24-24s-10.7-24-24-24zm-192 0H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24zM224 392c0-13.3-10.7-24-24-24H96c-13.3 0-24 10.7-24 24s10.7 24 24 24H200c13.3 0 24-10.7 24-24z"/>
        </svg>
    )
}



const weatherIcons = {
    "01d": <Sun></Sun>,
    "02d": <Cloud></Cloud>,
    "03d": <Cloud></Cloud>,
    "04d": <BrokenClouds></BrokenClouds>,
    "09d": <ShowerRain></ShowerRain>,
    "10d": <Rain></Rain>,
    "11d": <Thunder></Thunder>,
    "13d": <Snow></Snow>,
    "50d": <Mist></Mist>,
    "01n": <Sun></Sun>,
    "02n": <Cloud></Cloud>,
    "03n": <Cloud></Cloud>,
    "04n": <BrokenClouds></BrokenClouds>,
    "09n": <ShowerRain></ShowerRain>,
    "10n": <Rain></Rain>,
    "11n": <Thunder></Thunder>,
    "13n": <Snow></Snow>,
    "50n": <Mist></Mist>,
}

function GetWeatherIcon(props){
    return cloneElement(weatherIcons[props.iconID], { className: props.className });
}


/*UNUSED BUT I WILL KEEP IT IN CASE OF SOMETHING, PROCESSED BY MY FRIEND CHATGPT*/
/*const weatherCodes = {
    200: {
        type: "Thunderstorm",
        description: "thunderstorm with light rain",
        icon: "11d"
    },
    201: {
        type: "Thunderstorm",
        description: "thunderstorm with rain",
        icon: "11d"
    },
    202: {
        type: "Thunderstorm",
        description: "thunderstorm with heavy rain",
        icon: "11d"
    },
    210: {
        type: "Thunderstorm",
        description: "light thunderstorm",
        icon: "11d"
    },
    211: {
        type: "Thunderstorm",
        description: "thunderstorm",
        icon: "11d"
    },
    212: {
        type: "Thunderstorm",
        description: "heavy thunderstorm",
        icon: "11d"
    },
    221: {
        type: "Thunderstorm",
        description: "ragged thunderstorm",
        icon: "11d"
    },
    230: {
        type: "Thunderstorm",
        description: "thunderstorm with light drizzle",
        icon: "11d"
    },
    231: {
        type: "Thunderstorm",
        description: "thunderstorm with drizzle",
        icon: "11d"
    },
    232: {
        type: "Thunderstorm",
        description: "thunderstorm with heavy drizzle",
        icon: "11d"
    },
    300: {
        type: "Drizzle",
        description: "light intensity drizzle",
        icon: "09d"
    },
    301: {
        type: "Drizzle",
        description: "drizzle",
        icon: "09d"
    },
    302: {
        type: "Drizzle",
        description: "heavy intensity drizzle",
        icon: "09d"
    },
    310: {
        type: "Drizzle",
        description: "light intensity drizzle rain",
        icon: "09d"
    },
    311: {
        type: "Drizzle",
        description: "drizzle rain",
        icon: "09d"
    },
    312: {
        type: "Drizzle",
        description: "heavy intensity drizzle rain",
        icon: "09d"
    },
    313: {
        type: "Drizzle",
        description: "shower rain and drizzle",
        icon: "09d"
    },
    314: {
        type: "Drizzle",
        description: "heavy shower rain and drizzle",
        icon: "09d"
    },
    321: {
        type: "Drizzle",
        description: "shower drizzle",
        icon: "09d"
    },
    500: {
        type: "Rain",
        description: "light rain",
        icon: "10d"
    },
    501: {
        type: "Rain",
        description: "moderate rain",
        icon: "10d"
    },
    502: {
        type: "Rain",
        description: "heavy intensity rain",
        icon: "10d"
    },
    503: {
        type: "Rain",
        description: "very heavy rain",
        icon: "10d"
    },
    504: {
        type: "Rain",
        description: "extreme rain",
        icon: "10d"
    },
    511: {
        type: "Rain",
        description: "freezing rain",
        icon: "13d"
    },
    520: {
        type: "Rain",
        description: "light intensity shower rain",
        icon: "09d"
    },
    521: {
        type: "Rain",
        description: "shower rain",
        icon: "09d"
    },
    522: {
        type: "Rain",
        description: "heavy intensity shower rain",
        icon: "09d"
    },
    531: {
        type: "Rain",
        description: "ragged shower rain",
        icon: "09d"
    },
    600: {
        type: "Snow",
        description: "light snow",
        icon: "13d"
    },
    601: {
        type: "Snow",
        description: "snow",
        icon: "13d"
    },
    602: {
        type: "Snow",
        description: "heavy snow",
        icon: "13d"
    },
    611: {
        type: "Snow",
        description: "sleet",
        icon: "13d"
    },
    612: {
        type: "Snow",
        description: "light shower sleet",
        icon: "13d"
    },
    613: {
        type: "Snow",
        description: "shower sleet",
        icon: "13d"
    },
    615: {
        type: "Snow",
        description: "light rain and snow",
        icon: "13d"
    },
    616: {
        type: "Snow",
        description: "rain and snow",
        icon: "13d"
    },
    620: {
        type: "Snow",
        description: "light shower snow",
        icon: "13d"
    },
    621: {
        type: "Snow",
        description: "shower snow",
        icon: "13d"
    },
    622: {
        type: "Snow",
        description: "heavy shower snow",
        icon: "13d"
    },
    701: {
        type: "Mist",
        description: "mist",
        icon: "50d"
    },
    711: {
        type: "Smoke",
        description: "smoke",
        icon: "50d"
    },
    721: {
        type: "Haze",
        description: "haze",
        icon: "50d"
    },
    731: {
        type: "Dust",
        description: "sand/dust whirls",
        icon: "50d"
    },
    741: {
        type: "Fog",
        description: "fog",
        icon: "50d"
    },
    751: {
        type: "Sand",
        description: "sand",
        icon: "50d"
    },
    761: {
        type: "Dust",
        description: "dust",
        icon: "50d"
    },
    762: {
        type: "Ash",
        description: "volcanic ash",
        icon: "50d"
    },
    771: {
        type: "Squall",
        description: "squalls",
        icon: "50d"
    },
    781: {
        type: "Tornado",
        description: "tornado",
        icon: "50d"
    },
    800: {
        type: "Clear",
        description: "clear sky",
        icon: "01d"
    },
    801: {
        type: "Clouds",
        description: "few clouds: 11-25%",
        icon: "02d"
    },
    802: {
        type: "Clouds",
        description: "scattered clouds: 25-50%",
        icon: "03d"
    },
    803: {
        type: "Clouds",
        description: "broken clouds: 51-84%",
        icon: "04d"
    },
    804: {
        type: "Clouds",
        description: "overcast clouds: 85-100%",
        icon: "04d"
    }
};*/

export {GetWeatherIcon};