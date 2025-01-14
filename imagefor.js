document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.imageAna img');
    let current = 0;

    function updateImages() {
        images.forEach((img, index) => {
            img.classList.remove('active', 'left', 'right');
            if (index === current) {
                img.classList.add('active');
            } else if (index === (current + 1) % images.length) {
                img.classList.add('right');
            } else if (index === (current - 1 + images.length) % images.length) {
                img.classList.add('left');
            }
        });
    }

    function nextImage() {
        current = (current + 1) % images.length;
        updateImages();
    }

    updateImages();
    setInterval(nextImage, 3000); // her 3 saniyede bir resim değişir

});

document.addEventListener('DOMContentLoaded', function() {
    // Detaylar butonu için kaydırma işlevi
    var detailsBtn = document.getElementById('detailsBtn');
    if (detailsBtn) {
        detailsBtn.addEventListener('click', function(event) {
            event.preventDefault();  // Varsayılan davranışı engelle

            // İlgili elementin yüksekliğini al
            var contentElement = document.querySelector('.contenAna2');
            if (contentElement) {
                var contentHeight = contentElement.offsetTop;

                // Biraz daha aşağı kaydırmak için bir ofset ekleyin
                var offset = -300; // İhtiyaca göre ayarlayabilirsiniz

                // Sayfayı yukarıdan contentHeight - offset mesafesine kaydır
                window.scrollTo({ top: contentHeight - offset, behavior: 'smooth' });
            }
        });
    }

    // Video butonu için modal işlevi
    var modal = document.getElementById('myModal');
    var btn = document.getElementById('videoBtn');
    var span = document.getElementsByClassName('close')[0];

    if (btn) {
        btn.onclick = function() {
            if (modal) {
                modal.style.display = 'block';
            }
        }
    }

    if (span) {
        span.onclick = function() {
            if (modal) {
                modal.style.display = 'none';
            }
        }
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});

//Detayları Öğrenin Butonu

document.addEventListener('DOMContentLoaded', function () {
    const detailsBtn = document.getElementById('detailsBtn');
    const targetHeader = document.querySelector('.article-3 h1');
    const offsetY = 95; // Sayfanın ne kadar aşağı inmesini istediğinizi burada belirtin (piksel cinsinden)

    detailsBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const targetOffsetTop = targetHeader.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: targetOffsetTop - offsetY, behavior: 'smooth' });
    });
});

//Robot Kol Hareketi

document.addEventListener('scroll', function() {
    const robotKolImage = document.querySelector('.robotKolImage');
    const scrollPosition = window.scrollY;
    const maxScrollPosition = 1200; // Maksimum kaydırma pozisyonu
    const maxRotateAngle = 90; // Maksimum dönüş açısı (90 derece)

    if (scrollPosition <= maxScrollPosition) {
        const rotateAngle = (scrollPosition / maxScrollPosition) * maxRotateAngle;
        robotKolImage.style.transform = `translate(-50%, -50%) rotate(${rotateAngle}deg)`;
    } else {
        robotKolImage.style.transform = `translate(-50%, -50%) rotate(${maxRotateAngle}deg)`;
    }
});

//Şifre Kutusu Göz açma kapama

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('togglePassword').addEventListener('click', function() {
        const passwordField = document.getElementById('password');
        const passwordFieldType = passwordField.getAttribute('type');

        if (passwordFieldType === 'password') {
            passwordField.setAttribute('type', 'text');
            this.src = 'Resimler/gozacik.png';
        } else {
            passwordField.setAttribute('type', 'password');
            this.src = 'Resimler/gozkapali.png';
        }
    });
});






