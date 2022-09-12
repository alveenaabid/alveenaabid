var ap = [
  {
    bn: 'microsoft',

    ys: ['98.1', '136.63', '203.14', '269.61', '256.39'],
  },
  {
    bn: 'apple',
    ys: ['45.96', '50.79', '91.28', '136.6', '136.04'],
  },
  {
    bn: 'tesla',
    ys: ['72.01', '46.04', '216.6', '627.8', '681'],
  },
  {
    bn: 'google',
    ys: ['54.95', '54.9', '70.56', '124.85', '108.34'],
  },
];
var companyName = '',
  ys = '';

var userinput = 0;
var output = 0;


document.querySelector(
  '#w-node-_99dfa5e9-8d30-2e63-61b5-ec6d21b32aa0-1edce209'
).style.opacity = 100;

setTimeout(function () {
  document.getElementById('microsoft').click();
  document.getElementById('year1').click()
}, 10)

document.querySelector(
  '#w-node-_99dfa5e9-8d30-2e63-61b5-ec6d21b32aa0-1edce209'
).style.mixBlendMode = 'normal';

document.getElementById('microsoft').addEventListener('click', function () {
  (companyName = 'microsoft'),
    (document.querySelector(
      '#w-node-_99dfa5e9-8d30-2e63-61b5-ec6d21b32aa0-1edce209'
    ).style.opacity = 100),
    (document.querySelector(
      '#w-node-_99dfa5e9-8d30-2e63-61b5-ec6d21b32aa0-1edce209'
    ).style.mixBlendMode = 'normal'),
    (document.querySelector('#g > img').style.opacity = 0.33),
    (document.querySelector('#g > img').style.mixBlendMode = 'luminosity'),
    (document.querySelector('#netflix > img').style.opacity = 0.33),
    (document.querySelector('#netflix > img').style.mixBlendMode =
      'luminosity'),
    (document.querySelector('#facebook > img').style.opacity = 0.33),
    (document.querySelector('#facebook > img').style.mixBlendMode =
      'luminosity'),
    '' !== ys &&
      ('year1' == ys
        ? (output =
            ((ap[0].ys[1] - ap[0].ys[0]) / ap[0].ys[0]) * 100 + userinput)
        : 'year2' == ys
        ? (output =
            ((ap[0].ys[2] - ap[0].ys[0]) / ap[0].ys[0]) * 100 + userinput)
        : 'year3' == ys
        ? (output =
            ((ap[0].ys[3] - ap[0].ys[0]) / ap[0].ys[0]) * 100 + userinput)
        : 'year4' == ys &&
          (output =
            ((ap[0].ys[4] - ap[0].ys[0]) / ap[0].ys[0]) * 100 + userinput)),
    (document.getElementById('profit_total').innerHTML = `$ ${output.toFixed(
      2
    )}`);
});
document.getElementById('google').addEventListener('click', function () {
  (companyName = 'google'),
    (document.querySelector('#g > img').style.opacity = 100),
    (document.querySelector('#g > img').style.mixBlendMode = 'normal'),
    (document.querySelector('#netflix > img').style.opacity = 0.33),
    (document.querySelector('#netflix > img').style.mixBlendMode =
      'luminosity'),
    (document.querySelector('#facebook > img').style.opacity = 0.33),
    (document.querySelector('#facebook > img').style.mixBlendMode =
      'luminosity'),
    (document.querySelector(
      '#w-node-_99dfa5e9-8d30-2e63-61b5-ec6d21b32aa0-1edce209'
    ).style.opacity = 0.33),
    (document.querySelector(
      '#w-node-_99dfa5e9-8d30-2e63-61b5-ec6d21b32aa0-1edce209'
    ).style.mixBlendMode = 'luminosity'),
    '' !== ys &&
      ('year1' == ys
        ? (output =
            ((ap[3].ys[1] - ap[3].ys[0]) / ap[3].ys[0]) * 100 + userinput)
        : 'year2' == ys
        ? (output =
            ((ap[3].ys[2] - ap[3].ys[0]) / ap[3].ys[0]) * 100 + userinput)
        : 'year3' == ys
        ? (output =
            ((ap[3].ys[3] - ap[3].ys[0]) / ap[3].ys[0]) * 100 + userinput)
        : 'year4' == ys &&
          (output =
            ((ap[3].ys[4] - ap[3].ys[0]) / ap[3].ys[0]) * 100 + userinput)),
    (document.getElementById('profit_total').innerHTML = `$ ${output.toFixed(
      2
    )}`);
});
document.getElementById('tesla').addEventListener('click', function () {
  (companyName = 'tesla'),
    (document.querySelector('#facebook > img').style.opacity = 100),
    (document.querySelector('#facebook > img').style.mixBlendMode = 'normal'),
    (document.querySelector(
      '#w-node-_99dfa5e9-8d30-2e63-61b5-ec6d21b32aa0-1edce209'
    ).style.opacity = 0.33),
    (document.querySelector(
      '#w-node-_99dfa5e9-8d30-2e63-61b5-ec6d21b32aa0-1edce209'
    ).style.mixBlendMode = 'luminosity'),
    (document.querySelector('#g > img').style.opacity = 0.33),
    (document.querySelector('#g > img').style.mixBlendMode = 'luminosity'),
    (document.querySelector('#netflix > img').style.opacity = 0.33),
    (document.querySelector('#netflix > img').style.mixBlendMode =
      'luminosity'),
    '' !== ys &&
      ('year1' == ys
        ? (output =
            ((ap[2].ys[1] - ap[2].ys[0]) / ap[2].ys[0]) * 100 + userinput)
        : 'year2' == ys
        ? (output =
            ((ap[2].ys[2] - ap[2].ys[0]) / ap[2].ys[0]) * 100 + userinput)
        : 'year3' == ys
        ? (output =
            ((ap[2].ys[3] - ap[2].ys[0]) / ap[2].ys[0]) * 100 + userinput)
        : 'year4' == ys &&
          (output =
            ((ap[2].ys[4] - ap[2].ys[0]) / ap[2].ys[0]) * 100 + userinput)),
    (document.getElementById('profit_total').innerHTML = `$ ${output.toFixed(
      2
    )}`);
});
document.getElementById('apple').addEventListener('click', function () {
  (companyName = 'apple'),
    (document.querySelector('#netflix > img').style.opacity = 100),
    (document.querySelector('#netflix > img').style.mixBlendMode = 'normal'),
    (document.querySelector('#facebook > img').style.opacity = 0.33),
    (document.querySelector('#facebook > img').style.mixBlendMode =
      'luminosity'),
    (document.querySelector(
      '#w-node-_99dfa5e9-8d30-2e63-61b5-ec6d21b32aa0-1edce209'
    ).style.opacity = 0.33),
    (document.querySelector(
      '#w-node-_99dfa5e9-8d30-2e63-61b5-ec6d21b32aa0-1edce209'
    ).style.mixBlendMode = 'luminosity'),
    (document.querySelector('#g > img').style.opacity = 0.33),
    (document.querySelector('#g > img').style.mixBlendMode = 'luminosity'),
    '' !== ys &&
      ('year1' == ys
        ? (output =
            ((ap[1].ys[1] - ap[1].ys[0]) / ap[1].ys[0]) * 100 + userinput)
        : 'year2' == ys
        ? (output =
            ((ap[1].ys[2] - ap[1].ys[0]) / ap[1].ys[0]) * 100 + userinput)
        : 'year3' == ys
        ? (output =
            ((ap[1].ys[3] - ap[1].ys[0]) / ap[1].ys[0]) * 100 + userinput)
        : 'year4' == ys &&
          (output =
            ((ap[1].ys[4] - ap[1].ys[0]) / ap[1].ys[0]) * 100 + userinput)),
    (document.getElementById('profit_total').innerHTML = `$ ${output.toFixed(
      2
    )}`);
});
document.getElementById('year1').addEventListener('click', function () {
  (document.querySelector('#year1 > div').style.backgroundColor = '#CEF26B'),
    (document.querySelector('#year2 > div').style.backgroundColor = '#FFFFFF'),
    (document.querySelector('#year3 > div').style.backgroundColor = '#FFFFFF'),
    (document.querySelector('#year4 > div').style.backgroundColor = '#FFFFFF'),
    (ys = 'year1'),
    'microsoft' == companyName
      ? (output = ((ap[0].ys[1] - ap[0].ys[0]) / ap[0].ys[0]) * 100 + userinput)
      : 'apple' == companyName
      ? (output = ((ap[1].ys[1] - ap[1].ys[0]) / ap[1].ys[0]) * 100 + userinput)
      : 'tesla' == companyName
      ? (output = ((ap[2].ys[1] - ap[2].ys[0]) / ap[2].ys[0]) * 100 + userinput)
      : 'google' == companyName &&
        (output =
          ((ap[3].ys[1] - ap[3].ys[0]) / ap[3].ys[0]) * 100 + userinput),
    (document.getElementById('profit_total').innerHTML = `$ ${output.toFixed(
      2
    )}`);
});
document.getElementById('year2').addEventListener('click', function () {
  (document.querySelector('#year2 > div').style.backgroundColor = '#CEF26B'),
    (document.querySelector('#year1 > div').style.backgroundColor = '#FFFFFF'),
    (document.querySelector('#year3 > div').style.backgroundColor = '#FFFFFF'),
    (document.querySelector('#year4 > div').style.backgroundColor = '#FFFFFF'),
    (ys = 'year2'),
    'microsoft' == companyName
      ? (output = ((ap[0].ys[2] - ap[0].ys[0]) / ap[0].ys[0]) * 100 + userinput)
      : 'apple' == companyName
      ? (output = ((ap[1].ys[2] - ap[1].ys[0]) / ap[1].ys[0]) * 100 + userinput)
      : 'tesla' == companyName
      ? (output = ((ap[2].ys[2] - ap[2].ys[0]) / ap[2].ys[0]) * 100 + userinput)
      : 'google' == companyName &&
        (output =
          ((ap[3].ys[2] - ap[3].ys[0]) / ap[3].ys[0]) * 100 + userinput),
    (document.getElementById('profit_total').innerHTML = `$ ${output.toFixed(
      2
    )}`);
});
document.getElementById('year3').addEventListener('click', function () {
  (document.querySelector('#year3 > div').style.backgroundColor = '#CEF26B'),
    (document.querySelector('#year2 > div').style.backgroundColor = '#FFFFFF'),
    (document.querySelector('#year1 > div').style.backgroundColor = '#FFFFFF'),
    (document.querySelector('#year4 > div').style.backgroundColor = '#FFFFFF'),
    (ys = 'year3'),
    'microsoft' == companyName
      ? (output = ((ap[0].ys[3] - ap[0].ys[0]) / ap[0].ys[0]) * 100 + userinput)
      : 'apple' == companyName
      ? (output = ((ap[1].ys[3] - ap[1].ys[0]) / ap[1].ys[0]) * 100 + userinput)
      : 'tesla' == companyName
      ? (output = ((ap[2].ys[3] - ap[2].ys[0]) / ap[2].ys[0]) * 100 + userinput)
      : 'google' == companyName &&
        (output =
          ((ap[3].ys[3] - ap[3].ys[0]) / ap[3].ys[0]) * 100 + userinput),
    (document.getElementById('profit_total').innerHTML = `$ ${output.toFixed(
      2
    )}`);
});
document.getElementById('year4').addEventListener('click', function () {
  (document.querySelector('#year4 > div').style.backgroundColor = '#CEF26B'),
    (document.querySelector('#year2 > div').style.backgroundColor = '#FFFFFF'),
    (document.querySelector('#year3 > div').style.backgroundColor = '#FFFFFF'),
    (document.querySelector('#year1 > div').style.backgroundColor = '#FFFFFF'),
    (ys = 'year4'),
    'microsoft' == companyName
      ? (output = ((ap[0].ys[4] - ap[0].ys[0]) / ap[0].ys[0]) * 100 + userinput)
      : 'apple' == companyName
      ? (output = ((ap[1].ys[4] - ap[1].ys[0]) / ap[1].ys[0]) * 100 + userinput)
      : 'tesla' == companyName &&
        (output =
          ((ap[3].ys[4] - ap[3].ys[0]) / ap[3].ys[0]) * 100 + userinput),
    (document.getElementById('profit_total').innerHTML = `$ ${output.toFixed(
      2
    )}`);
});

document.getElementById('From-3').addEventListener('click', function (event) {
  value = document.getElementById('slider_value').innerText;
  document.getElementById('invest_total').innerHTML = `${value}`;

  profitTotal = parseInt(value.slice(1));
  document.getElementById('profit_total').innerHTML = `$${profitTotal.toFixed(
    2
  )}`;
});
