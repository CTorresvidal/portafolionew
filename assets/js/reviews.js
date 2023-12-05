<li class='review-card'>
            <img src="${element.image}" alt="${element.fullName}" />
            <div class="review-details">
              <h3>${element.fullName}</h3>
              <p data-translate-en="${element.profession}" data-translate-es="${element.profesion}" class="review-profession">${element.profesion}</p>
              <p data-translate-en="${element.message}" data-translate-es="${element.mensaje}" class="review-message">"${element.mensaje}"</p>
              <div class="review-rating">${"★".repeat(element.rating)}</div>
            </div>
</li>