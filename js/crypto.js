    document.addEventListener('DOMContentLoaded', () => {
        const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd'; // Replace with your API URL
        const cryptoList = document.querySelector('.crypto-list');

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                data.forEach(crypto => {
                    const listItem = document.createElement('li');
                    listItem.className = 'crypto-item';

                    const img = document.createElement('img');
                    img.src = crypto.image;
                    img.alt = crypto.name;

                    const amount = document.createElement('span');
                    amount.textContent = ` ${crypto.current_price} USD`;

                    const name = document.createElement('span');
                    name.textContent = ` (${crypto.name})`;

                    listItem.appendChild(img);
                    listItem.appendChild(amount);
                    listItem.appendChild(name);

                    cryptoList.appendChild(listItem);
                });
            })
            .catch(error => {
                console.error('Error fetching the cryptocurrency data:', error);
            });
    });

