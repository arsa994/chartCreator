<template>
  <div class="wrapper">
    <div class="container">
      <div class="chart-section">
        <div class="form-row justify-content-between">
          <div class="form-group col-md-12">
            <h1 class="section-heading display-4">Select chart type:</h1>
          </div>
          <div class="form-group col-md-6">
            <select id="select-chart" class="form-control form-control-lg" @change="selectChart(), sendChartType()">
              <option value="">Chose type</option>
              <option value="bar">Bar</option>
              <option value="line">Line</option>
              <option value="pie">Pie</option>
              <option value="doughnut">Doughnut</option>
              <option value="bubble">Bubble</option>
            </select>
          </div>
          <div class="form-group col-md-2">
            <img id="chart-img" src="" alt="">
          </div>
        </div>
      </div>
      <hr>
      <div class="chart-section">
        <div class="form-row">
          <div class="form-group col-md-12">
            <h1 class="section-heading display-4">Insert data:</h1>
          </div>
          <div id="dataset-input" class="form-group col-md-4">
            <label id="select-data-label">Select number of data sets</label>
            <select id="dataInput" class="form-control form-control-lg" type="text" @change="addDataSet()">
              <option value="">Chose option</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
              <option value="32">32</option>
              <option value="33">33</option>
              <option value="34">34</option>
              <option value="35">35</option>
              <option value="36">36</option>
              <option value="37">37</option>
              <option value="38">38</option>
              <option value="39">39</option>
              <option value="40">40</option>
              <option value="41">41</option>
              <option value="42">42</option>
              <option value="43">43</option>
              <option value="44">44</option>
              <option value="45">45</option>
              <option value="46">46</option>
              <option value="47">47</option>
              <option value="48">48</option>
              <option value="49">49</option>
              <option value="50">50</option>
            </select>
          </div>
        </div>
        <div v-if="chartType == 'bubble'">
          <div v-for="dataSet in data">
            <div class="form-row">
              <div class="form-group col-md-3">
                <input class="bubbleLabel form-control" placeholder="Label">
              </div>
              <div class="form-group col-md-2">
                <input class="valueX form-control" placeholder="Value x">
              </div>
              <div class="form-group col-md-2">
                <input class="valueY form-control" placeholder="Value y">
              </div>
              <div class="form-group col-md-2">
                <input class="valueR form-control" placeholder="Value r">
              </div>
              <div class="form-group col-md-2">
                <select class="bubbleColor form-control">
                  <option value="">Chose color</option>
                  <option value="rgba(255, 0, 0, 0.3)">red</option>
                  <option value="rgba(255, 255, 0, 0.3)">yellow</option>
                  <option value="rgba(0, 102, 255, 0.3)">blue</option>
                  <option value="rgba(0, 153, 51, 0.3)">green</option>
                  <option value="rgba(128, 128, 128, 0.3)">grey</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="chartType == 'pie' || chartType == 'doughnut'">
          <div v-for="dataSet in data">
            <div class="form-row">
              <div class="form-group col-md-3">
                <input class="label form-control" placeholder="Label">
              </div>
              <div class="form-group col-md-3">
                <input class="value form-control" placeholder="Value">
              </div>
              <div class="form-group col-md-3">
                <select class="color form-control">
                  <option value="">Chose color</option>
                  <option value="rgba(255, 0, 0, 0.3)">red</option>
                  <option value="rgba(255, 255, 0, 0.3)">yellow</option>
                  <option value="rgba(0, 102, 255, 0.3)">blue</option>
                  <option value="rgba(0, 153, 51, 0.3)">green</option>
                  <option value="rgba(128, 128, 128, 0.3)">grey</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div v-for="dataSet in data">
            <div class="form-row">
              <div class="form-group col-md-3">
                <input class="label form-control" placeholder="Label">
              </div>
              <div class="form-group col-md-3">
                <input class="value form-control" placeholder="Value">
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr>
      <div class="chart-section">
        <div class="form-row">
          <div class="form-group col-md-12">
            <h1 class="section-heading display-4">Customize chart:</h1>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-3">
            <label>Select color theme:</label>
              <select id="color-theme" class="form-control" @change="chartTheme()">
                <option value="">Chose option</option>
                <option value="light">light</option>
                <option value="dark">dark</option>
              </select>
          </div>
          <div v-if="chartType == 'bar'" class="clearBar form-group col-md-3">
            <label>Select group color:</label>
              <select id="bar-group-color" class="form-control" @click="barGroupColor()">
                <option value="">Chose option</option>
                <option value="red">red</option>
                <option value="yellow">yellow</option>
                <option value="blue">blue</option>
                <option value="green">green</option>
                <option value="grey">grey</option>
              </select>
          </div>
          <div v-else-if="chartType == 'line'" class="form-group col-md-3">
            <label>Select group color:</label>
            <select id="line-group-color" class="form-control" @change="lineGroupColor()">
              <option value="">Chose option</option>
              <option value="red">red</option>
              <option value="yellow">yellow</option>
              <option value="blue">blue</option>
              <option value="green">green</option>
              <option value="grey">grey</option>
            </select>
          </div>
          <div v-else></div>
        </div>
        <div class="form-row">
          <div v-if="chartType == 'bar' || chartType == 'line'" class="form-group col-md-3">
            <label>Data group name:</label>
            <input id="group-name" class="form-control">
          </div>
          <div class="form-group col-md-3">
            <label>Title font size (px):</label>
            <input type="number" id="font-size" class="form-control" min="12" max="20" @change="fSize()">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-3">
            <label>Legend position:</label>
            <select id="legend-position" class="form-control">
              <option value="">Chose option</option>
              <option value="top">top</option>
              <option value="left">left</option>
              <option value="bottom">bottom</option>
              <option value="right">right</option>
            </select>
          </div>
          <div class="form-group col-md-3">
            <label>Title:</label>
            <input id="title" class="form-control">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-3">
            <label>Title position:</label>
            <select id="title-position" class="form-control">
              <option value="">Chose option</option>
              <option value="top">top</option>
              <option value="left">left</option>
              <option value="bottom">bottom</option>
              <option value="right">right</option>
            </select>
          </div>
          <div class="form-group col-md-3">
            <label id="font-preview">Font family:</label>
            <select id="font-family" class="form-control" @change="fFamily(), sendFontFamily()">
              <option value="">Chose option</option>
              <option value="Arial">Arial</option>
              <option value="Georgia">Georgia</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Verdana">Verdana</option>
              <option value="Palatino">Palatino</option>
              <option value="Garamond">Garamond</option>
            </select>
          </div>
        </div>
        <div v-if="chartType == 'line'">
          <label class="custom-control custom-checkbox">
            <input type="checkbox" id="fillCheckbox" class="custom-control-input" @change="fillUnderline()">
            <span class="custom-control-indicator"></span>
            <span class="custom-control-description">Fill area under line:</span>
          </label>
        </div>
      </div>
      <hr>
      </form>
      <div v-if="chartType != '' && this.data != ''">
        <div class="chart-preview-button">
          <div v-if="chartType == 'pie' || chartType == 'doughnut'">
            <button type="button" class="btn btn-primary btn-lg btn-block" @click="sendData(), sendColor(), sendLegend(), sendTitle(), generateChart(), showChart()">Preview chart</button>
          </div>
          <div v-else-if="chartType == 'bubble'">
            <button type="button" class="btn btn-primary btn-lg btn-block" @click="sendData(), sendLegend(), sendTitle(), generateChart(), showChart()">Preview chart</button>
          </div>
          <div v-else>
            <button type="button" class="btn btn-primary btn-lg btn-block" @click="sendData(), dataGroupName(), sendLegend(), sendTitle(), generateChart(), showChart()">Preview chart</button>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="chart-preview-button">
          <button type="button" class="btn btn-secondary btn-lg btn-block disabled">Preview chart</button>
        </div>
      </div>
      <div class="row">
        <div id="chart-preview">
          <button type="button" class="close" aria-label="Close" @click="hideChart()">
            <span aria-hidden="true">&times;</span>
          </button>
          <div id="chart">
            <canvas id="myChart"></canvas>
          </div>
          <div class="btn-group float-right">
            <button type="button" class="btn btn-outline-primary btn-lg float-right" data-toggle="modal" data-target="#file-options">Save chart as img file</button>
            <button type="button" class="btn btn-outline-secondary btn-lg float-right" @click="hideChart()">Close</button>
          </div>
        </div>
      </div>
      <div id="file-options" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title">Save chart as image file</h2>
            </div>
            <div class="modal-body">
              <form  @change="imageFormat()">
                <div class="form-group">
                  <div class="container">
                    <h4 class="">Image format:</h4>
                    <label class="custom-control custom-radio">
                      <input id="png" name="radio" type="radio" value=".png" class="custom-control-input">
                      <span class="custom-control-indicator"></span>
                      <span class="custom-control-description">.png</span>
                    </label>
                    <label class="custom-control custom-radio">
                      <input id="jpg" name="radio" type="radio" value=".jpeg" class="custom-control-input">
                      <span class="custom-control-indicator"></span>
                      <span class="custom-control-description">.jpeg</span>
                    </label>
                  </div>
                </div>
              </form>
              <form @change="imageQuality()">
                <div class="form-group">
                  <div class="container">
                    <h4 class="">Image quality:</h4>
                    <label class="custom-control custom-radio">
                      <input id="low" name="radio" type="radio" value="0.1" class="custom-control-input">
                      <span class="custom-control-indicator"></span>
                      <span class="custom-control-description">Low</span>
                    </label>
                    <label class="custom-control custom-radio">
                      <input id="medium" name="radio" type="radio" value="0.5" class="custom-control-input">
                      <span class="custom-control-indicator"></span>
                      <span class="custom-control-description">Medium</span>
                    </label>
                    <label class="custom-control custom-radio">
                      <input id="high" name="radio" type="radio" value="1" class="custom-control-input">
                      <span class="custom-control-indicator"></span>
                      <span class="custom-control-description">High</span>
                    </label>
                  </div>
                </div>
                <div class="container">
                  <h4 class="">File name:</h4>
                  <div class="row">
                    <input type="text" id="file-name" class="form-control form-control-sm col-sm-3">
                    <strong>{{ this.format }}</strong>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-success" @click="fileName(), saveAsImage()">Save file</button>
              <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  data() {
    return {
      data: [],
      dataSet: {},
      chartType: [],
      chartColorTheme: {
        chartBackground: '',
        chartGrid: '',
        chartGroupColor: 'grey',
        fill: ''
      },
      fontFamily: '',
      dataColor: [],
      dataBorderColor: [],
      chartFontSize: 12,
      chartLegend: {
        legendPosition: ''
      },
      chartTitle: {
        titlePosition: '',
        titleText: []
      },
      barData: {
        labels: [],
        label: '',
        dataValue: [],
      },
      lineData: {
        labels: [],
        label: '',
        dataValue: [],
      },
      pieData: {
        labels: [],
        dataValue: [],
      },
      doughnutData: {
        labels: [],
        dataValue: [],
      },
      bubbleData: {
        datasets: []
      },
      format: '',
      quality: 0,
      filename: ''
    }
  },
  methods: {
    selectChart: function() {
      let option = document.getElementById('select-chart');
      let chart_img = document.getElementById('chart-img');
      let index = option.selectedIndex;

      switch(index){
        case 1:
          chart_img.src = "static/img/bar-chart.png";
          break;
        case 2:
          chart_img.src = "static/img/line-chart.png";
          break;
        case 3:
          chart_img.src = "static/img/pie-chart.png";
          break;
        case 4:
          chart_img.src = "static/img/donut-chart.png";
          break;
        case 5:
          chart_img.src = "static/img/bubble-chart.png";
          break;
        default:
          chart_img.src = "";
      }
    },
    addDataSet: function() {
      let dataQuantity = document.querySelector('#dataInput').value;

      this.data.splice(0, this.data.length);

      for(let i = 0; i < dataQuantity; i++){
        this.data.push({
          row: this.dataSet.row
        });
      }
    },
    chartTheme: function() {
      let bgColor = document.querySelector('#color-theme').value;

      switch(bgColor){
        case 'light':
          this.chartColorTheme.chartBackground = 'rgb(255, 255, 255)';
          this.chartColorTheme.chartGrid = 'rgb(217, 217, 217)';
          break;
        case 'dark':
          this.chartColorTheme.chartBackground = 'rgb(13, 13, 13)';
          this.chartColorTheme.chartGrid = 'rgb(89, 89, 89)';
          break;
      }
    },
    barGroupColor: function() {
      let bgColor = document.querySelector('#bar-group-color').value;

      this.chartColorTheme.chartGroupColor = '';

      switch(bgColor){
        case 'red':
          this.chartColorTheme.chartGroupColor = 'rgba(255, 0, 0, 0.3)';
          break;
        case 'yellow':
          this.chartColorTheme.chartGroupColor = 'rgba(255, 255, 0, 0.3)';
          break;
        case 'blue':
          this.chartColorTheme.chartGroupColor = 'rgba(0, 102, 255, 0.3)';
          break;
        case 'green':
          this.chartColorTheme.chartGroupColor = 'rgba(0, 153, 51, 0.3)';
          break;
        case 'grey':
          this.chartColorTheme.chartGroupColor = 'rgba(128, 128, 128, 0.3)';
          break;
      }
    },
    lineGroupColor: function() {
      let lgColor = document.querySelector('#line-group-color').value;

      this.chartColorTheme.chartGroupColor = '';

      switch(lgColor){
        case 'red':
          this.chartColorTheme.chartGroupColor = 'rgba(255, 102, 102, 0.5)';
          break;
        case 'yellow':
          this.chartColorTheme.chartGroupColor = 'rgba(255, 255, 153, 0.5)';
          break;
        case 'blue':
          this.chartColorTheme.chartGroupColor = 'rgba(102, 163, 255, 0.5)';
          break;
        case 'green':
          this.chartColorTheme.chartGroupColor = 'rgba(133, 224, 133, 0.5)';
          break;
        case 'grey':
          this.chartColorTheme.chartGroupColor = 'rgba(128, 128, 128, 0.5)';
          break;
      }
    },
    dataGroupName: function() {
      let groupName = document.querySelector('#group-name').value;

      if(this.chartType == 'bar'){
        this.barData.label = groupName;
      }else{
        this.lineData.label = groupName;
      }
    },
    fSize: function() {
      let fontsize = document.querySelector('#font-size').value;

      this.chartFontSize = Number(fontsize);
      console.log(this.chartFontSize);
    },
    sendLegend: function() {
      let legend = document.querySelector('#legend-position').value;

      this.chartLegend.legendPosition = legend;
    },
    sendTitle: function() {
      let title = document.querySelector('#title').value;
      let position = document.querySelector('#title-position').value;

      this.chartTitle.titleText.splice(0, this.chartTitle.titleText.length);

      this.chartTitle.titlePosition = position;
      this.chartTitle.titleText.push(title);
      console.log(this.chartTitle.titleText, this.chartTitle.titlePosition);
    },
    fFamily: function() {
      let fontOption = document.getElementById('font-family');
      let fontPreview = document.getElementById('font-preview');
      let index = fontOption.selectedIndex;

      switch(index){
        case 1:
          fontPreview.style.fontFamily = 'Arial';
          break;
        case 2:
          fontPreview.style.fontFamily = 'Georgia';
          break;
        case 3:
          fontPreview.style.fontFamily = 'Times New Roman';
          break;
        case 4:
          fontPreview.style.fontFamily = 'Verdana';
          break;
        case 5:
          fontPreview.style.fontFamily = 'Palatino';
          break;
        case 6:
          fontPreview.style.fontFamily = 'Garamond';
          break;
        default:
          fontPreview.style.fontFamily = '';
      }
    },
    sendFontFamily: function() {
      let font = document.querySelector('#font-family').value;

      this.fontFamily = font;
      console.log(this.fontFamily);
    },
    showChart: function() {
      let chart = document.querySelector('#chart-preview');
      chart.style.height = '500px';
    },
    hideChart: function() {
      let chart = document.querySelector('#chart-preview');
      chart.style.height = '0';
    },
    sendChartType: function() {
      this.chartType.splice(0, 1);
      this.chartColorTheme.fill = '';

      let type = document.getElementById('select-chart');
      let value = type.options[type.selectedIndex].value;

      if(value != ''){
        this.chartType.push(value);
      }else{
        console.log('input is empty!');
      }
    },
    sendData: function() {
      let label = document.getElementsByClassName('label');
      let data = document.getElementsByClassName('value');

      let bubbleLabel = document.getElementsByClassName('bubbleLabel');
      let valueX = document.getElementsByClassName('valueX');
      let valueY = document.getElementsByClassName('valueY');
      let valueR = document.getElementsByClassName('valueR');
      let bubbleColor = document.getElementsByClassName('bubbleColor');

      if(this.chartType == 'bar'){
        this.barData.labels.splice(0, this.barData.labels.length);
        this.barData.dataValue.splice(0, this.barData.dataValue.length);

        for(let i = 0; i < this.data.length; i++){
          this.barData.labels.push(label[i].value);
          this.barData.dataValue.push(Number(data[i].value));
        }
      }else if(this.chartType == 'line'){
        this.lineData.labels.splice(0, this.lineData.labels.length);
        this.lineData.dataValue.splice(0, this.lineData.dataValue.length);

        for(let i = 0; i < this.data.length; i++){
          this.lineData.labels.push(label[i].value);
          this.lineData.dataValue.push(Number(data[i].value));
        }
      }else if(this.chartType == 'pie'){
        this.pieData.labels.splice(0, this.pieData.labels.length);
        this.pieData.dataValue.splice(0, this.pieData.dataValue.length);

        for(let i = 0; i < this.data.length; i++){
          this.pieData.labels.push(label[i].value);
          this.pieData.dataValue.push(Number(data[i].value));
        }
      }else if(this.chartType == 'doughnut'){
        this.doughnutData.labels.splice(0, this.doughnutData.labels.length);
        this.doughnutData.dataValue.splice(0, this.doughnutData.dataValue.length);

        for(let i = 0; i < this.data.length; i++){
          this.doughnutData.labels.push(label[i].value);
          this.doughnutData.dataValue.push(Number(data[i].value));
        }
      }else if(this.chartType == 'bubble'){
        this.bubbleData.datasets.splice(0, this.bubbleData.datasets.length);

        for(let i = 0; i < this.data.length; i++){
          this.bubbleData.datasets.push({
            label: bubbleLabel[i].value,
            backgroundColor: bubbleColor[i].value,
            data: [{
              x: Number(valueX[i].value),
              y: Number(valueY[i].value),
              r: Number(valueR[i].value)
            }]
          });
        }

        console.log(this.bubbleData.datasets);
      }
    },
    sendColor: function() {
      let color = document.querySelectorAll('.color');

      this.dataColor.splice(0, this.dataColor.length);
      this.dataBorderColor.splice(0, this.dataBorderColor.length);

      for(let i = 0; i < this.data.length; i++){
        this.dataColor.push(color[i].value);
        this.dataBorderColor.push(color[i].value);
      }
      console.log(this.dataColor);
    },
    fillUnderline: function() {
      let fill = document.querySelector('#fillCheckbox').checked;

      if(fill == true){
        this.chartColorTheme.fill = true;
      }else{
        this.chartColorTheme.fill = false;
      }
    },
    generateChart: function() {
      $('#myChart').remove();
      $('iframe.chartjs-hidden-iframe').remove();
      $('#chart').append(`<canvas id="myChart"></canvas>`);

      Chart.defaults.global.defaultFontFamily = this.fontFamily;

      Chart.pluginService.register({
        beforeDraw: function (chart, easing) {
          if (chart.config.options.chartArea && chart.config.options.chartArea.backgroundColor) {
            var helpers = Chart.helpers;
            var ctx = chart.chart.ctx;
            var chartArea = chart.chartArea;

            ctx.save();
            ctx.fillStyle = chart.config.options.chartArea.backgroundColor;
            ctx.fillRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
            ctx.restore();
          }
        }
      });

      const ctx = document.getElementById("myChart").getContext('2d');
      let myChart = new Chart(ctx);

      if(this.chartType == 'bar'){
        myChart = new Chart(ctx, {
          type: this.chartType,
          data: {
            labels: this.barData.labels,
            datasets: [{
              label: this.barData.label,
              backgroundColor: this.chartColorTheme.chartGroupColor,
              borderColor: this.chartColorTheme.chartGroupColor,
              borderWidth: 3,
              data: this.barData.dataValue
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                },
                gridLines: {
                  color: this.chartColorTheme.chartGrid
                }
              }],
              xAxes: [{
                gridLines: {
                  color: this.chartColorTheme.chartGrid
                }
              }]
            },
            chartArea: {
              backgroundColor: this.chartColorTheme.chartBackground
            },
            legend: {
              display: true,
              position: this.chartLegend.legendPosition
            },
            title: {
              display: true,
              position: this.chartTitle.titlePosition,
              text: this.chartTitle.titleText,
              fontSize: this.chartFontSize
            }
          },
        });
      }else if(this.chartType == 'line'){
        myChart = new Chart(ctx, {
          type: this.chartType,
          data: {
            labels: this.lineData.labels,
            datasets: [{
              label: this.lineData.label,
              backgroundColor: this.chartColorTheme.chartGroupColor,
              borderColor: this.chartColorTheme.chartGroupColor,
              borderWidth: 3,
              fill: this.chartColorTheme.fill,
              data: this.lineData.dataValue,
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                },
                gridLines: {
                  color: this.chartColorTheme.chartGrid
                }
              }],
              xAxes: [{
                gridLines: {
                  color: this.chartColorTheme.chartGrid
                }
              }]
            },
            chartArea: {
              backgroundColor: this.chartColorTheme.chartBackground
            },
            legend: {
              display: true,
              position: this.chartLegend.legendPosition
            },
            title: {
              display: true,
              position: this.chartTitle.titlePosition,
              text: this.chartTitle.titleText,
              fontSize: this.chartFontSize
            }
          }
        });
      }else if(this.chartType == 'pie'){
        myChart = new Chart(ctx, {
          type: this.chartType,
          data: {
            labels: this.pieData.labels,
            datasets: [{
              label: '# of Votes',
              backgroundColor: this.dataColor,
              borderColor: this.dataBorderColor,
              data: this.pieData.dataValue
            }]
          },
          options: {
            chartArea: {
              backgroundColor: this.chartColorTheme.chartBackground
            },
            legend: {
              display: true,
              position: this.chartLegend.legendPosition
            },
            title: {
              display: true,
              position: this.chartTitle.titlePosition,
              text: this.chartTitle.titleText,
              fontSize: this.chartFontSize
            }
          }
        });
      }else if(this.chartType == 'doughnut'){
        myChart = new Chart(ctx, {
          type: this.chartType,
          data: {
            labels: this.doughnutData.labels,
            datasets: [{
              label: '# of Votes',
              backgroundColor: this.dataColor,
              borderColor: this.dataBorderColor,
              data: this.doughnutData.dataValue
            }]
          },
          options: {
            chartArea: {
              backgroundColor: this.chartColorTheme.chartBackground
            },
            legend: {
              display: true,
              position: this.chartLegend.legendPosition,
            },
            title: {
              display: true,
              position: this.chartTitle.titlePosition,
              text: this.chartTitle.titleText,
              fontSize: this.chartFontSize
            }
          }
        });
      }else if(this.chartType == 'bubble'){
        myChart = new Chart(ctx, {
          type: this.chartType,
          data: this.bubbleData,
          options: {
            chartArea: {
              backgroundColor: this.chartColorTheme.chartBackground
            },
            legend: {
              display: true,
              position: this.chartLegend.legendPosition,
            },
            title: {
              display: true,
              position: this.chartTitle.titlePosition,
              text: this.chartTitle.titleText,
              fontSize: this.chartFontSize
            }
          }
        });
      }
    },
    imageFormat: function() {
      let pngValue = document.querySelector('#png').value;
      let jpgValue = document.querySelector('#jpg').value;
      let pngFormat = document.querySelector('#png').checked;
      let jpgFormat = document.querySelector('#jpg').checked;

      if(pngFormat){
        this.format = pngValue;
      }else{
        this.format = jpgValue;
      }
      console.log(this.format);
    },
    imageQuality: function() {
      let imgLow = document.querySelector('#low').value;
      let imgMedium = document.querySelector('#medium').value;
      let imgHigh = document.querySelector('#high').value;
      let lowOption = document.querySelector('#low').checked;
      let mediumOption = document.querySelector('#medium').checked;
      let highOption = document.querySelector('#high').checked;

      if(lowOption){
        this.quality = Number(imgLow);
      }else if(mediumOption){
        this.quality = Number(imgMedium);
      }else if(highOption){
        this.quality = Number(imgHigh);
      }

      console.log(this.quality);
    },
    fileName: function() {
      let imgFileName = document.querySelector('#file-name').value;

      this.filename = imgFileName;
    },
    saveAsImage: function() {
      let chartCanvas = document.querySelector('#myChart'), ctx = chartCanvas.getContext('2d');
      let filename, format, quality;

      filename = this.filename;
      format = this.format;
      quality = this.quality;

      chartCanvas.toBlob(function(blob) {
        saveAs(blob, filename + format)
      }, quality);
    }
  },
}
</script>

<style>
h1{
  margin-bottom: 10px;
}

hr{
  margin: 80px 0 80px 0;
}

.btn{
  border-radius: 0;
}

#select-data-label{
  font-size: 22px;
}

#dataset-input{
  margin-top: 50px;
  margin-bottom: 50px;
}

.section-heading{
  margin-bottom: 25px;
  color: white;
  background: linear-gradient(to right, #0099ff, #00ccff);
  padding: 15px 0 15px 5px;
}

#select-chart{
  margin-top: 60px;
}

.chart-section{
  min-height: 285px;
  margin: 30px 0 30px 0;
}

#chart{
  margin-left: auto;
  margin-right: auto;
  width: 600px;
  height: 400px;
}

#myChart{
  background-color: white;
}

.chart-preview-button{
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
}

.btn-primary{
  background: linear-gradient(to right, #0099ff, #00ccff);
  border: none;
}

#chart-preview{
  position: fixed;
  width: 85%;
  height: 0;
  margin-left: auto;
  margin-right: auto;
  background-color: #ffffff;
  box-shadow: 0 0 30px #000000;
  right: 0;
  left: 0;
  bottom: 0;
  transition: height 0.5s;
}
</style>
