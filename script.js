document.addEventListener('DOMContentLoaded', function() {

    // 1. MA TRẬN DỮ LIỆU SẢN PHẨM & MODEL THỰC TẾ
    const productModelDatabase = {
        'feng-long-coat': {
            name: 'Faux Fur Long Coat',
            models: {
                'SIZE S': { height: '1m68', weight: '55kg', img: 'https://cdn.hstatic.net/products/200001168941/z7344959536169_d7906268ddefa736e1bfc042481a33f8_289e7bdfbd8148919a897550eb9d7f7b_1024x1024.webp' },
                'SIZE M': { height: '1m75', weight: '63kg', img: 'https://cdn.hstatic.net/products/200001168941/z7344959713231_0b7aaf8fda24a0e8fcfb7900236063d3_46d6d0a4bc8347328cf856f8ee5fe94b_1024x1024.webp' },
                'SIZE L': { height: '1m82', weight: '76kg', img: 'https://cdn.hstatic.net/products/200001168941/z7344959477190_53377f5569d7e5530db81ad7cc4f1fb7_bc7d40b6ac524835afe775e1c0e41475_1024x1024.webp' }
            }
        },
        'feng-jacket': {
            name: 'Oversized Faux Fur Jacket',
            models: {
                'SIZE S': { height: '1m65', weight: '52kg', img: 'https://cdn.hstatic.net/products/200001168941/z7344959727078_271e95eff2fef95b856e1ad72e1bdbb4_ffda37a32b1b4bf3b3cca8a70f6efcd3_1024x1024.webp' },
                'SIZE M': { height: '1m73', weight: '61kg', img: 'https://cdn.hstatic.net/products/200001168941/z7344959727078_271e95eff2fef95b856e1ad72e1bdbb4_ffda37a32b1b4bf3b3cca8a70f6efcd3_1024x1024.webp' },
                'SIZE L': { height: '1m80', weight: '74kg', img: 'https://cdn.hstatic.net/products/200001168941/z7344959480430_ddb662f1798ed3258e842bcd5d9234d0_f3bab9e7119a4096a53fac1974b1bd1a_1024x1024.webp' }
            }
        },
        'feng-ruby-set': {
            name: 'Corset & Pant',
            models: {
                'SIZE S': { height: '1m67', weight: '54kg', img: 'https://cdn.hstatic.net/products/200001168941/feng_dec_2017595_1_3a420ac2412b4079bd42119fc6d82ec4_1024x1024.jpg' },
                'SIZE M': { height: '1m76', weight: '65kg', img: 'https://cdn.hstatic.net/products/200001168941/2f00f420-0703-498e-902d-e997093a843f_9acd188b81a54b95806d98aa16946350_1024x1024.webp' },
                'SIZE L': { height: '1m83', weight: '78kg', img: 'https://cdn.hstatic.net/products/200001168941/feng_dec_2017552_1_51d7c26e757045cb8b459de99b37a919_1024x1024.jpg' }
            }
        },
        'feng-a1-playsuit': {
            name: 'A1 Playsuit',
            models: {
                'SIZE S': { height: '1m67', weight: '54kg', img: 'https://cdn.hstatic.net/products/200001168941/img-1008_9beb8e6054aa44dc953271630b06d546_1024x1024.webp' },
                'SIZE M': { height: '1m76', weight: '65kg', img: 'https://cdn.hstatic.net/products/200001168941/img-1021_7951ed799d1a4ce1a6e3408a3d78301e_1024x1024.webp' },
                'SIZE L': { height: '1m83', weight: '78kg', img: 'https://cdn.hstatic.net/products/200001168941/img-1013_d538b7643de146e99a0abf0fb4dd0559_1024x1024.webp' }
            }
        },
        'knocker-bra': {
            name: 'Knocker Bra',
            models: {
                'SIZE S': { height: '1m67', weight: '54kg', img: 'https://cdn.hstatic.net/products/200001168941/feng1487_8cb3eb27-498d-4ca6-b421-ecf959101c26_1b641feb4ad8416682183fccef159b52_1024x1024.webp' },
                'SIZE M': { height: '1m76', weight: '65kg', img: 'https://cdn.hstatic.net/products/200001168941/img_4894_9cd78351-4c82-4085-af44-e12b422eecf8_a733855574b94b43bb2eeca118711f34_1024x1024.webp' },
                'SIZE L': { height: '1m83', weight: '78kg', img: 'https://cdn.hstatic.net/products/200001168941/feng1502_1834e0f0-974b-4d26-baae-2be8341c7cc3_35d29bc804674869877b0fd8d062dbea_1024x1024.webp' }
            }
        }
    };

    // 2. XỬ LÝ TÍNH SIZE VÀ HIỂN THỊ MẪU TƯƠNG ỨNG
    const btnCalculate = document.getElementById('btn-calculate');
    if (btnCalculate) {
        btnCalculate.addEventListener('click', function() {
            const productSelect = document.getElementById('product-select');
            const heightInput = document.getElementById('height');
            const weightInput = document.getElementById('weight');

            if (!productSelect || !heightInput || !weightInput) return;

            const selectedProductId = productSelect.value;
            const height = parseFloat(heightInput.value);
            const weight = parseFloat(weightInput.value);
            const resultContainer = document.getElementById('result-container');
            const sizeText = document.getElementById('recommended-size-text');

            if (!height || !weight) {
                alert('Vui lòng nhập đầy đủ Chiều cao và Cân nặng!');
                return;
            }

            // Thuật toán tính Size
            let size = 'SIZE M';
            if (height < 168 || weight < 55) {
                size = 'SIZE S';
            } else if (height > 178 || weight > 72) {
                size = 'SIZE L';
            }

            // Cập nhật text gợi ý Size
            if (sizeText) {
                sizeText.innerText = size;
            }

            // Lấy dữ liệu sản phẩm & model tương ứng
            const productInfo = productModelDatabase[selectedProductId];
            if (productInfo && productInfo.models[size]) {
                const modelInfo = productInfo.models[size];

                const elName = document.getElementById('model-product-name');
                const elImg = document.getElementById('model-img');
                const elHeight = document.getElementById('model-height');
                const elWeight = document.getElementById('model-weight');
                const elSize = document.getElementById('model-size');

                if (elName) elName.innerText = productInfo.name;
                if (elImg) elImg.src = modelInfo.img;
                if (elHeight) elHeight.innerText = modelInfo.height;
                if (elWeight) elWeight.innerText = modelInfo.weight;
                if (elSize) elSize.innerText = size;
            }

            // Hiện khung kết quả
            if (resultContainer) {
                resultContainer.style.display = 'block';
                resultContainer.classList.add('active');
            }

            // Bắn GA4 Event
            if (typeof gtag === 'function' && productInfo) {
                gtag('event', 'calculate_size', {
                    'event_category': 'Engagement',
                    'product_id': selectedProductId,
                    'product_name': productInfo.name,
                    'user_height': height,
                    'user_weight': weight,
                    'recommended_size': size
                });
            }
        });
    }

    // 3. TRACKING NAV & CTA
    document.querySelectorAll('.track-nav').forEach(function(element) {
        element.addEventListener('click', function() {
            if (typeof gtag === 'function') {
                gtag('event', 'click_nav_menu', {
                    'event_category': 'Navigation',
                    'event_label': this.getAttribute('data-category'),
                    'destination_url': this.href
                });
            }
        });
    });

    const ctaLink = document.getElementById('utm-cta-link');
    if (ctaLink) {
        ctaLink.addEventListener('click', function() {
            if (typeof gtag === 'function') {
                gtag('event', 'click_size_guide_cta', {
                    'event_category': 'Outbound Link',
                    'event_label': 'FENG Official Collection Link',
                    'destination_url': this.href
                });
            }
        });
    }

    // 4. SUBMIT FEEDBACK
    const stars = document.querySelectorAll('.star-rating .star');
    let currentRating = 5;

    stars.forEach(function(star) {
        star.addEventListener('click', function() {
            currentRating = parseInt(this.getAttribute('data-value'));
            highlightStars(currentRating);
        });
    });

    function highlightStars(val) {
        stars.forEach(s => {
            if (parseInt(s.getAttribute('data-value')) <= val) s.classList.add('active');
            else s.classList.remove('active');
        });
    }

    const feedbackForm = document.getElementById('feedback-form');
    const feedbackSuccess = document.getElementById('feedback-success');
    const reviewsList = document.getElementById('reviews-list');

    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('feedback-name').value.trim() || 'Khách hàng ẩn danh';
            const message = document.getElementById('feedback-message').value.trim();

            if (!message) {
                alert('Vui lòng nhập nội dung nhận xét!');
                return;
            }

            const starString = '★'.repeat(currentRating) + '☆'.repeat(5 - currentRating);
            const selectedProductId = document.getElementById('product-select').value;
            const productInfo = productModelDatabase[selectedProductId];
            const productName = productInfo ? productInfo.name : 'Sản phẩm FENG';

            const newReview = document.createElement('div');
            newReview.className = 'review-item';
            newReview.innerHTML = `
                <div class="review-top">
                    <span class="review-author">${escapeHTML(name)}</span>
                    <span class="review-stars">${starString}</span>
                </div>
                <p class="review-body">${escapeHTML(message)}</p>
                <span class="review-tag">• ${escapeHTML(productName)}</span>
            `;

            if (reviewsList) reviewsList.insertBefore(newReview, reviewsList.firstChild);
            feedbackForm.reset();

            if (feedbackSuccess) {
                feedbackSuccess.style.display = 'block';
                setTimeout(() => { feedbackSuccess.style.display = 'none'; }, 4000);
            }
        });
    }

    function escapeHTML(str) {
        return str.replace(/[&<>'"]/g, tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag));
    }
});