import React from 'react'
import { Line } from 'react-chartjs-2'
import {CategoryScale, Chart as ChartJS, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js'
import { Col, Row, Typography} from 'antd'

const { Title } = Typography

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement,    Tooltip,  Legend)

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
     const coinPrice = []
     const coinTimestamp = []

     for (let index = 0; index < coinHistory?.data?.history?.length; index+=1) {
          coinPrice.push(coinHistory.data.history[index].price)  
          coinTimestamp.push( new Date(coinHistory.data.history[index].timestamp).toLocaleDateString([]))   
     }

     const labels = coinTimestamp
     const data = {
          labels,
          datasets: [
              {
               label: 'Price in USD',
               data: coinPrice,
               backgroundColor: '#0071bd',
               borderColor: '#0071bd'
              }
          ]
     }

     const options = {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
               },
            ],
          },
     }

  return (
    <>
     <Row className='chart-header'>
          <Title level={2} className='chart-title'>{coinName} Price Chart</Title>
          <Col className='price-container'>
               <Title level={5} className='price-change'> Change: {coinHistory?.data?.change}% </Title>
               <Title level={5} className='current-price'> Current {coinName} Price: $ {currentPrice} </Title>
          </Col>
     </Row>
     <Line data={data} options={options} />
    </>
  )
}

export default LineChart