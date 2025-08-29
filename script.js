//copy button functionality
document.getElementById("main-cards-container").addEventListener("click", function (event) {
    let copyBtn = event.target.closest(".copy-button");
    console.log(copyBtn)
    if (copyBtn) {
        let copyCounter = Number(document.getElementById("copy-counter").innerText),
            copyNumber = copyBtn.closest(".single-card").querySelector(".single-card-content h2").innerText,
            newCopy = copyCounter + 1;
        document.getElementById("copy-counter").innerText = newCopy;
        alert(`আপনি ${copyNumber} নম্বরটি কপি করেছেন`);
        navigator.clipboard.writeText(copyNumber);
    }
});

//call button functionality
document.getElementById("main-cards-container").addEventListener("click", function (event) {
    let callBtn = event.target.closest(".call-button");
    if (callBtn) {
        let card = callBtn.closest(".single-card"),
            cardName = card.querySelector(".single-card-content h1").innerText,
            cardNumber = card.querySelector(".single-card-content h2").innerText,
            coinCounter = Number(document.getElementById("coin-counter").innerText),
            time = new Date().toLocaleTimeString(),
            newCoinCounter = coinCounter - 20;

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
