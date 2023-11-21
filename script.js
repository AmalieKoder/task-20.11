// Henter fra Html til Javascript

const changeText = document.querySelector("#changeText");
const p = document.querySelector("#p");
const icon = document.querySelector("#button");
const Exorcist = document.querySelector("#exorcist");


// Når du trykker en knapp med denne Emojien 💙 da shifter du et tema.
// Men hvis du trykker på denne emojien 👺 da shifter den tilbake på første temaet.

function themeToggle() {
    var element = document.body;
    if(element.classList.toggle("darkToggle")) {
        icon.textContent = "👺"
        changeText.textContent = "Blue Exorcist"
        p.textContent = "Human and demons are two sides of the same coin, as are Assiah and Gehenna, their respective worlds. The only way to travel between the realms is by the means of possession, like in ghost stories. However, Satan, the ruler of Gehenna, cannot find a suitable host to possess and therefore, remains imprisoned in his world. In a desperate attempt to conquer Assiah, he sends his son instead, intending for him to eventually grow into a vessel capable of possession by the demon king";
        Exorcist.textContent = "Ao no Exorcist follows Rin Okumara who appears to be an ordinary, somewhat troublesome teenager that is until one day he is ambushed by demons. His world turns upside down when he discovers that he is in fact the very son of Satan and that his demon fathter wishes for him to return so they can conquer Assiah together. Not wanting to join the king og Gehenna, Rin decides to begin training to become exorcist so that he can fight to defend Assiah his brother Yukio."
    }else{
        icon.textContent = "💙";
        changeText.textContent = "Demon Slayer"
        p.textContent = "It follows Tanjiro Kamado, a young boy living in Taisho-era Japan who becomes the sole survivor of his family after demons kill them. He then sets out to save his sister Nezuko who has transformed into a demon."
        Exorcist.textContent = "Tanjiro set a journey to help his sister to has become a demon and defeat Muzan who has killed his family."
    }

}

