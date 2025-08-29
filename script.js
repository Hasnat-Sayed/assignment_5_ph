
document.getElementById("main-cards-container").addEventListener("click", function (event) {

    //copy button functionality
    const copyBtn = event.target.closest(".copy-button");

    if (copyBtn) {
        const copyCounter = Number(document.getElementById("copy-counter").innerText);
        const copyNumber = copyBtn.closest(".single-card").querySelector(".single-card-content h2").innerText;
        const newCopy = copyCounter + 1;

        document.getElementById("copy-counter").innerText = newCopy;

        alert(`আপনি ${copyNumber} নম্বরটি কপি করেছেন`);

        navigator.clipboard.writeText(copyNumber);
    }


    //heart button functionality
    if(event.target.closest(".heart-icon")){
        const heartCount = Number(document.getElementById("hearts-counter").innerText);
        const newHeartCount = heartCount + 1 ;
        document.getElementById("hearts-counter").innerText = newHeartCount;  
    }



    //call button functionality
    const callBtn = event.target.closest(".call-button");
    if (callBtn) {
        const card = callBtn.closest(".single-card");
        const cardName = card.querySelector(".single-card-content h1").innerText;
        const cardNumber = card.querySelector(".single-card-content h2").innerText;
        const coinCounter = Number(document.getElementById("coin-counter").innerText);
        const time = new Date().toLocaleTimeString();
        const newCoinCounter = coinCounter - 20;

        if (coinCounter < 20) {
            alert("❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
            return;
        }

        document.getElementById("coin-counter").innerText = newCoinCounter;

        alert(`📞 ${cardName} এর ${cardNumber} নম্বরে কল করা হচ্ছে...`);

        let historySection = document.getElementById("history-section");
        let div = document.createElement("div");
        div.innerHTML = `
            <div class="flex justify-between items-center p-2 rounded-lg bg-[#F2F2F2]  mt-5 ">
                <div class="name-number">
                    <p class="hind-madurai-regular text-lg  text-[#111]">${cardName}</p>
                    <p class="hind-madurai-regular text-lg  text-[#5C5C5C]">${cardNumber}</p>
                </div>
                <div class="time">
                    <p class="hind-madurai-regular text-lg  text-[#111]">${time}</p>
                </div>
            </div>
        `;

        historySection.appendChild(div);
    }
});


//clear button functionality
document.getElementById("clear-button").addEventListener("click", function(event){
    document.getElementById("history-section").innerHTML = "";
})