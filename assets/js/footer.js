document.addEventListener("DOMContentLoaded", function () {
    const footerHTML = `
    <footer class="bg-gray-800 text-white text-center py-4 mt-auto">
        <p>&copy; <span id="year"></span> <span class="text-km">មជ្ឈមណ្ឌលមិត្តពូកែ</span><span class="text-en notranslate">TheBravoCenter</span>. រក្សាសិទ្ធិគ្រប់យ៉ាង.</p>
        <p class="mt-2 text-sm text-gray-300">បង្កើតគេហទំព័រដោយ លោកគ្រូ <strong class="text-white notranslate">សំ គឹមឆេង</strong></p>
        <!-- ផ្ទាំងបង្ហាញចំនួនអ្នកចូលទស្សនាវេបសាយ -->
        <div class="mt-4 flex justify-center items-center min-h-[40px]">
            <img src="https://hits.sh/thebravocenter.com.svg?style=for-the-badge&label=VISITORS&color=2563eb" alt="Visitor Counter" class="h-7 shadow-sm rounded">
        </div>
    </footer>
    `;

    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
        // កំណត់ឆ្នាំដោយស្វ័យប្រវត្តិ
        document.getElementById('year').textContent = new Date().getFullYear();
    }
});