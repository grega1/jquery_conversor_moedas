$(document).ready(function () {
  $.ajax({
    method: 'GET',
    url: 'https://economia.awesomeapi.com.br/all',
  }).done(function (allCoins) {
    //const jsonCoins = JSON.stringify(allCoins);
    //const coins = JSON.parse(jsonCoins)
    const keys = Object.values(allCoins);
    console.log(coins);
    console.log(keys);
    let arr = [];
    let coinValues = keys.map((coin) => {
      $('#coins').append($(`<option value = "${coin.code}">${coin.name}</option>`));
    });
    $('#coins').change((val) => {
      $.ajax({
        method: 'GET',
        url: `https://economia.awesomeapi.com.br/last/${val.target.value+ '-BRL'}`,
      }).done(function (choicedCoin) {
        //const coinList = JSON.stringify(choicedCoin);
        //const lastCoinObject = JSON.parse(coinList);
        const values = Object.values(choicedCoin);

        console.log(coinList);
        console.log(values);
        values.map((coin) => {
          $('#show-coin').html(
          `<p class="coin-text">Ultima cotação da moeda : R$${coin.bid}
          <br/>
            Data e hora: ${coin.create_date}
            <br/>
           Valor máximo: R$${coin.high}
           <br/>
           Valor mínimo: R$${coin.low}
           <br/>
           Valor de fechamento: R$${coin.ask}
           <br/></p>`)
        })
      })
      $("#show-btn-coin").on('click', () => {
        const beggin = $('#beggin').val();
        const end = $('#end').val();
        const begginReplaced = beggin.replaceAll("-","")
        const endReplaced = end.replaceAll("-","")
        console.log(beggin);
        console.log(begginReplaced);
        console.log(endReplaced);
        $.ajax({
          method: 'GET',
          url: `https://economia.awesomeapi.com.br/json/daily/${val.target.value+ '-BRL'}/10?start_date=${begginReplaced}&end_date=${endReplaced}`
,
        }).done(function (coinsPerDates) {
            console.log(coinsPerDates)
            //const coinsPerDate = JSON.stringify(coinsPerDates);
            //const coinsPerDateObject = JSON.parse(coinsPerDate);
            const coinsPerDateValues = Object.values(coinsPerDates);
            console.log(coinsPerDateValues)
            $('#show-coin-date').empty();
            for(let i = 0; i < coinsPerDateValues.length; i++) {
              $('#show-coin-date').append(`              
              <span class="coin-text"> R$: ${coinsPerDateValues[i].bid}</span>`)
             
            }
              
        })  
      })
    })
  })
 
});