import * as LightweightCharts from "lightweight-charts";
import {cryptoChart} from "@/cryptoSource";

function createSimpleSwitcher(items, activeItem, activeItemChangedCallback) {
  var switcherElement = document.createElement('div');
  switcherElement.classList.add('switcher');

  var intervalElements = items.map(function (item) {
    var itemEl = document.createElement('button');
    itemEl.innerText = item;
    itemEl.classList.add('switcher-item');
    itemEl.classList.toggle('switcher-active-item', item === activeItem);
    itemEl.addEventListener('click', function () {
      onItemClicked(item);
    });
    switcherElement.appendChild(itemEl);
    return itemEl;
  });

  function onItemClicked(item) {
    if (item === activeItem) {
      return;
    }

    intervalElements.forEach(function (element, index) {
      element.classList.toggle('switcher-active-item', items[index] === item);
    });

    activeItem = item;

    activeItemChangedCallback(item);
  }

  return switcherElement;
}

var switcherElement = createSimpleSwitcher(['Dark', 'Light'], 'Dark', syncToTheme);

var chartElement = document.createElement('div');

var chart = LightweightCharts.createChart(chartElement, {
  width: 600,
  height: 300,
  rightPriceScale: {
    borderVisible: false,
  },
  timeScale: {
    borderVisible: false,
  },
});

document.body.appendChild(chartElement);
document.body.appendChild(switcherElement);

var areaSeries = chart.addAreaSeries({
  topColor: 'rgba(33, 150, 243, 0.56)',
  bottomColor: 'rgba(33, 150, 243, 0.04)',
  lineColor: 'rgba(33, 150, 243, 1)',
  lineWidth: 2,
});

var darkTheme = {
  chart: {
    layout: {
      backgroundColor: '#2B2B43',
      lineColor: '#2B2B43',
      textColor: '#D9D9D9',
    },
    watermark: {
      color: 'rgba(0, 0, 0, 0)',
    },
    crosshair: {
      color: '#758696',
    },
    grid: {
      vertLines: {
        color: '#2B2B43',
      },
      horzLines: {
        color: '#363C4E',
      },
    },
  },
  series: {
    topColor: 'rgba(32, 226, 47, 0.56)',
    bottomColor: 'rgba(32, 226, 47, 0.04)',
    lineColor: 'rgba(32, 226, 47, 1)',
  },
};

const lightTheme = {
  chart: {
    layout: {
      backgroundColor: '#FFFFFF',
      lineColor: '#2B2B43',
      textColor: '#191919',
    },
    watermark: {
      color: 'rgba(0, 0, 0, 0)',
    },
    grid: {
      vertLines: {
        visible: false,
      },
      horzLines: {
        color: '#f0f3fa',
      },
    },
  },
  series: {
    topColor: 'rgba(33, 150, 243, 0.56)',
    bottomColor: 'rgba(33, 150, 243, 0.04)',
    lineColor: 'rgba(33, 150, 243, 1)',
  },
};

var themesData = {
  Dark: darkTheme,
  Light: lightTheme,
};

function syncToTheme(theme) {
  chart.applyOptions(themesData[theme].chart);
  areaSeries.applyOptions(themesData[theme].series);
}
if(cryptoChart[0]) {
  areaSeries.setData([cryptoChart]);
}

syncToTheme('Dark');



