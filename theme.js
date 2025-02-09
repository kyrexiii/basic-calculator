document.getElementById("switchToMath").addEventListener("click", () => {
    document.getElementById("mathCalculator").classList.remove("hidden");
    document.getElementById("loveCalculator").classList.add("hidden");
    document.getElementById("subtitle").innerHTML = "(Because math should be adorable 🥺✨)";
});

document.getElementById("switchToLove").addEventListener("click", () => {
    document.getElementById("mathCalculator").classList.add("hidden");
    document.getElementById("loveCalculator").classList.remove("hidden");
    document.getElementById("subtitle").innerHTML = "Love is in the air! 💘 Let's check your fate ✨";
});