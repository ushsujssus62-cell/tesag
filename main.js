// 1. BOM orqali foydalanuvchidan ism so'raymiz
let ism = prompt("Iltimos, ismingizni kiriting:");

// 2. DOM elementini tanlab olamiz
let nameDisplay = document.querySelector("#user-name");

// 3. Shartli tekshiruv va natijani chiqarish
if (ism && ism.trim() !== "") {
    nameDisplay.textContent = ism;
} else {
    nameDisplay.textContent = "Mehmon";
    // Agar ism kiritilmasa, rangni o'zgartirishimiz ham mumkin
    nameDisplay.classList.replace("text-indigo-600", "text-gray-400");
}