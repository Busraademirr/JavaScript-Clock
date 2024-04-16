//kullanıcıdan isim bilgisi alma
let fullName = prompt("Adınızı giriniz: ")
let isim = document.querySelector("#myName")
isim.innerHTML = `${fullName}`

//ekrana saat ve gün bilgisi için
function writeClock() {
    let currentTime = new Date(); //Date tanımlanarak zaman bilgisi alındı
    let hours = currentTime.getHours(); //saat bilgisi alma
    let minutes = currentTime.getMinutes(); //dakika bilgisi alma
    let seconds = currentTime.getSeconds(); //saniye bilgisi alma
    let timeString = hours + ':' + minutes + ':' + seconds; //bilgileri yazdırmak için

    let days = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];
    let date = new Date ();
    let dayOfWeek = days[date.getDay()];
    let dayString = dayOfWeek

    document.getElementById('myClock').innerHTML = timeString + " " +dayString; //saat ve gün bilgisini yan yana yazdırma
}

// function writeDay(){
//     let days = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];
//     let date = new Date ();
//     let dayOfWeek = days[date.getDay()];
//     let dayString = dayOfWeek
//     document.getElementById(`myClock`).innerHTML = dayString
// }

setInterval(writeClock, 1000); //saniye bilgisinin güncellenmesi için
writeClock()

